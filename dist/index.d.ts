import { Modal } from 'bootstrap';

declare enum Animation {
    scale = "scale",
    fade = "fade"
}
declare enum Icon {
    success = 0,
    denied = 1,
    warning = 2,
    info = 3,
    confirm = 4
}
declare enum Size {
    small = "modal-sm",
    default = "modal-default",
    large = "modal-lg",
    extraLarge = "modal-xl"
}
type Action = {
    label: string;
    classList: string[];
};
type Config = {
    title: string;
    text?: string | null;
    icon: Icon | string;
    animation: Animation | string;
    size: Size | string;
    actions?: {
        [key: string]: Action;
    } | null;
    allowClose?: boolean;
    timeout?: number;
    timeoutProgress?: boolean;
};
type Result = {
    [action: string]: boolean;
    isConfirmed: boolean;
    isCancelled: boolean;
    isDenied: boolean;
};
declare class Alert {
    protected modalInstance?: Modal;
    protected modalElement?: HTMLElement;
    protected options: Config;
    constructor(options?: Config);
    hide(): void;
    show(): Promise<Result>;
    get getHTMLElement(): HTMLElement | undefined;
    get getBootstrapModalInstance(): Modal | undefined;
}

export { Animation, Icon, Size, Alert as default };
