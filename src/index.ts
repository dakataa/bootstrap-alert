import './alert.scss';
import {Modal} from 'bootstrap';
import {AnimationConfigWithData, AnimationConfigWithPath} from "lottie-web";


enum Animation {
    scale = 'scale',
    fade = 'fade'
}

const Icon = {
    success: import('./assets/icons/success.json'),
    denied: import('./assets/icons/denied.json'),
    warning: import('./assets/icons/warning.json'),
    info: import('./assets/icons/info.json'),
    confirm: import('./assets/icons/info.json')
};

enum Size {
    small = 'modal-sm',
    default = 'modal-default',
    large = 'modal-lg',
    extraLarge = 'modal-xl'
}

type Action = {
    label: string;
    classList: string[];
};

type Config = {
    title: string;
    text?: string | null;
    icon: Promise<any> | string;
    animation: Animation | string;
    size: Size | string;
    actions?: { [key: string]: Action } | null;
    allowClose?: boolean;
    timeout?: number;
    timeoutProgress?: boolean;
}

type Result = {
    [action: string]: boolean;
    isConfirmed: boolean;
    isCancelled: boolean;
    isDenied: boolean;
}

class Alert {

    protected modalInstance?: Modal;

    protected modalElement?: HTMLElement;

    protected options: Config = {
        title: 'Are you confirm?',
        icon: Icon.success,
        animation: Animation.scale,
        size: Size.small,
        allowClose: false,
        timeoutProgress: false
    };

    constructor(options?: Config) {
        this.options = {
            ...this.options,
            ...(options || {})
        };
    }

    hide(): void {
        if (!this.modalInstance) {
            return;
        }

        this.modalElement?.addEventListener('animationend', () => {
            this.modalInstance?.hide();
        })

        const animation = this.options.animation || Animation.scale;
        this.modalElement?.classList.add(...['close', animation].filter(v => v));
    }

    show(): Promise<Result> {
        this.hide();

        return new Promise((resolve, reject) => {
            const hasActions = Object.keys(this.options.actions || {}).length;

            this.modalElement = document.createElement('div');
            this.modalElement.classList.add(...['modal', 'modal-alert', this.options.animation].filter(v => v));
            this.modalElement.addEventListener('hidden.bs.modal', () => {
                this.modalInstance?.dispose();
                delete this.modalInstance;
            });

            this.modalElement.addEventListener('animationstart', () => {
                this.modalElement?.addEventListener('animationend', () => {
                    this.modalElement?.classList.remove(this.options.animation);
                });
            });

            this.modalElement?.addEventListener('shown.bs.modal', () => {
                if (this.options.timeout) {
                    setTimeout(() => this.hide(), this.options.timeout);

                    if (this.options.timeoutProgress) {
                        const modalProgressElement = document.createElement('div');
                        modalProgressElement.classList.add(...['modal-alert-progress']);
                        modalProgressElement.style.setProperty('--animation-timeout-progress', (this.options.timeout / 1000) + 's')
                        modalContentElement.append(modalProgressElement);
                    }
                }
            });

            const modalDialogElement = document.createElement('div');
            modalDialogElement.classList.add(...['modal-dialog', 'modal-dialog-centered', this.options.size].filter(v => v));
            this.modalElement.append(modalDialogElement);

            const modalContentElement = document.createElement('div');
            modalContentElement.classList.add(...['modal-content']);
            modalDialogElement.append(modalContentElement);

            const modalBodyElement = document.createElement('div');
            modalBodyElement.classList.add(...['modal-body', 'd-flex', 'flex-column', 'align-items-center']);
            modalContentElement.append(modalBodyElement);

            document.body.append(this.modalElement);
            this.modalInstance = Modal.getOrCreateInstance(this.modalElement, {
                backdrop: 'static'
            });

            if (this.options.allowClose || !hasActions) {
                this.modalElement.addEventListener('hidePrevented.bs.modal', () => {
                    this.hide();
                    reject();
                });

                if (!hasActions) {
                    const closeButtonElement = document.createElement('button');
                    closeButtonElement.classList.add(...['btn-close']);
                    closeButtonElement.addEventListener('click', () => this.hide());
                    modalBodyElement.append(closeButtonElement);
                }
            }

            const iconElement = document.createElement('div');
            iconElement.classList.add(...['modal-alert-icon']);
            modalBodyElement.append(iconElement);

            if (this.options.icon) {
                import('lottie-web').then(({default: lottiePlayer}) => {

                    const loadAnimation = (options: AnimationConfigWithPath | AnimationConfigWithData) => lottiePlayer.loadAnimation({
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        ...(options || {}),
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid meet'
                        },
                        container: iconElement
                    });

                    if (this.options.icon instanceof Promise) {
                        this.options.icon.then((data) => loadAnimation({animationData: data} as AnimationConfigWithData));
                    } else {
                        loadAnimation({path: this.options.icon} as AnimationConfigWithPath);
                    }
                });
            }

            const titleElement = document.createElement('h3');
            titleElement.innerHTML = this.options.title;
            titleElement.classList.add(...['modal-alert-title']);
            modalBodyElement.append(titleElement);

            if (this.options.text) {
                const textElement = document.createElement('p');
                textElement.classList.add(...['modal-alert-text']);
                textElement.innerHTML = this.options.text;
                modalBodyElement.append(textElement);
            }

            if (hasActions) {
                const actionsElement = document.createElement('div');
                actionsElement.classList.add(...['d-flex', 'flex-row', 'align-items']);
                modalBodyElement.append(actionsElement);

                Object.keys(this.options.actions || {}).forEach((action) => {
                    if(!this.options.actions) {
                        throw new Error('Invalid Actions');
                    }

                    const {
                        label,
                        classList
                    } = this.options.actions[action];
                    const actionButtonElement = document.createElement('a');
                    actionButtonElement.classList.add(...['btn', 'mx-2', ...(classList || ['btn-primary'])]);
                    actionButtonElement.innerHTML = label || action.toString();
                    actionButtonElement.addEventListener('click', () => {
                        const result: Result = {
                            [action]: true,
                            isConfirmed: action === 'confirm',
                            isCancelled: action === 'cancel',
                            isDenied: action === 'deny',
                        };

                        switch (action) {
                            case 'deny':
                            case 'cancel': {
                                reject(result)
                                break;
                            }
                            default: {
                                resolve(result)
                            }
                        }

                        this.hide();
                    });
                    actionsElement.append(actionButtonElement);
                });
            }

            this.modalInstance.show();
        });
    }

    public get getHTMLElement(): HTMLElement | undefined {
        return this.modalElement;
    }

    public get getBootstrapModalInstance(): Modal | undefined {
        return this.modalInstance;
    }
}


export {Animation, Icon, Size, Alert as default};
