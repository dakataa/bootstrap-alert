import { Modal } from 'bootstrap';

declare enum Animation {
    scale = "scale",
    fade = "fade"
}
declare const Icon: {
    success: Promise<{
        default: {
            v: string;
            fr: number;
            ip: number;
            op: number;
            w: number;
            h: number;
            nm: string;
            ddd: number;
            assets: never[];
            layers: ({
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            })[];
            markers: {
                tm: number;
                cm: string;
                dr: number;
            }[];
        };
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: ({
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        })[];
        markers: {
            tm: number;
            cm: string;
            dr: number;
        }[];
    }>;
    denied: Promise<{
        default: {
            v: string;
            fr: number;
            ip: number;
            op: number;
            w: number;
            h: number;
            nm: string;
            ddd: number;
            assets: never[];
            layers: ({
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: {
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        s?: undefined;
                        e?: undefined;
                        o?: undefined;
                        m?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        r?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        s: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        e: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        m: number;
                        ix: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ks?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        r?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        s?: undefined;
                        e?: undefined;
                        m?: undefined;
                        r?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        r: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        s?: undefined;
                        e?: undefined;
                        m?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        e?: undefined;
                        m?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                }[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            })[];
            markers: {
                tm: number;
                cm: string;
                dr: number;
            }[];
        };
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: ({
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: {
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    r?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ks?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    r?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    s?: undefined;
                    e?: undefined;
                    m?: undefined;
                    r?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    s?: undefined;
                    e?: undefined;
                    m?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    e?: undefined;
                    m?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
            }[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        })[];
        markers: {
            tm: number;
            cm: string;
            dr: number;
        }[];
    }>;
    warning: Promise<{
        default: {
            v: string;
            fr: number;
            ip: number;
            op: number;
            w: number;
            h: number;
            nm: string;
            ddd: number;
            assets: never[];
            layers: ({
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: {
                    ty: string;
                    it: ({
                        d: number;
                        ty: string;
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        r?: undefined;
                        bm?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        r: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        d?: undefined;
                        s?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        d?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                }[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            })[];
            markers: {
                tm: number;
                cm: string;
                dr: number;
            }[];
        };
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: ({
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: {
                ty: string;
                it: ({
                    d: number;
                    ty: string;
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    r?: undefined;
                    bm?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    d?: undefined;
                    s?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    d?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
            }[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        })[];
        markers: {
            tm: number;
            cm: string;
            dr: number;
        }[];
    }>;
    info: Promise<{
        default: {
            v: string;
            fr: number;
            ip: number;
            op: number;
            w: number;
            h: number;
            nm: string;
            ddd: number;
            assets: never[];
            layers: ({
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                        x: string;
                    };
                };
                ao: number;
                ef: {
                    ty: number;
                    nm: string;
                    np: number;
                    mn: string;
                    ix: number;
                    en: number;
                    ef: {
                        ty: number;
                        nm: string;
                        mn: string;
                        ix: number;
                        v: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                    }[];
                }[];
                shapes: {
                    ty: string;
                    it: ({
                        d: number;
                        ty: string;
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        r?: undefined;
                        bm?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        r: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        d?: undefined;
                        s?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        d?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                }[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                        x?: undefined;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
                ef?: undefined;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                        x?: undefined;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
                ef?: undefined;
            })[];
            markers: {
                tm: number;
                cm: string;
                dr: number;
            }[];
        };
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: ({
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                    x: string;
                };
            };
            ao: number;
            ef: {
                ty: number;
                nm: string;
                np: number;
                mn: string;
                ix: number;
                en: number;
                ef: {
                    ty: number;
                    nm: string;
                    mn: string;
                    ix: number;
                    v: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                }[];
            }[];
            shapes: {
                ty: string;
                it: ({
                    d: number;
                    ty: string;
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    r?: undefined;
                    bm?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    d?: undefined;
                    s?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    d?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
            }[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                    x?: undefined;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
            ef?: undefined;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                    x?: undefined;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
            ef?: undefined;
        })[];
        markers: {
            tm: number;
            cm: string;
            dr: number;
        }[];
    }>;
    confirm: Promise<{
        default: {
            v: string;
            fr: number;
            ip: number;
            op: number;
            w: number;
            h: number;
            nm: string;
            ddd: number;
            assets: never[];
            layers: ({
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                        x: string;
                    };
                };
                ao: number;
                ef: {
                    ty: number;
                    nm: string;
                    np: number;
                    mn: string;
                    ix: number;
                    en: number;
                    ef: {
                        ty: number;
                        nm: string;
                        mn: string;
                        ix: number;
                        v: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                    }[];
                }[];
                shapes: {
                    ty: string;
                    it: ({
                        d: number;
                        ty: string;
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        r?: undefined;
                        bm?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        r: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        d?: undefined;
                        s?: undefined;
                        p?: undefined;
                        a?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        d?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                }[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                        x?: undefined;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
                ef?: undefined;
            } | {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                        l: number;
                        x?: undefined;
                    };
                };
                ao: number;
                shapes: ({
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            };
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        ml: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        r: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        ml?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                    s?: undefined;
                    e?: undefined;
                    o?: undefined;
                    m?: undefined;
                } | {
                    ty: string;
                    s: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    e: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    m: number;
                    ix: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    it?: undefined;
                    np?: undefined;
                    cix?: undefined;
                    bm?: undefined;
                })[];
                ip: number;
                op: number;
                st: number;
                bm: number;
                ef?: undefined;
            })[];
            markers: {
                tm: number;
                cm: string;
                dr: number;
            }[];
        };
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: ({
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                    x: string;
                };
            };
            ao: number;
            ef: {
                ty: number;
                nm: string;
                np: number;
                mn: string;
                ix: number;
                en: number;
                ef: {
                    ty: number;
                    nm: string;
                    mn: string;
                    ix: number;
                    v: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                }[];
            }[];
            shapes: {
                ty: string;
                it: ({
                    d: number;
                    ty: string;
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    r?: undefined;
                    bm?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    d?: undefined;
                    s?: undefined;
                    p?: undefined;
                    a?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    d?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
            }[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                    x?: undefined;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
            ef?: undefined;
        } | {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                    l: number;
                    x?: undefined;
                };
            };
            ao: number;
            shapes: ({
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: {
                            i: number[][];
                            o: number[][];
                            v: number[][];
                            c: boolean;
                        };
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    ml: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    ml?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
                s?: undefined;
                e?: undefined;
                o?: undefined;
                m?: undefined;
            } | {
                ty: string;
                s: {
                    a: number;
                    k: number;
                    ix: number;
                };
                e: {
                    a: number;
                    k: ({
                        i: {
                            x: number[];
                            y: number[];
                        };
                        o: {
                            x: number[];
                            y: number[];
                        };
                        t: number;
                        s: number[];
                    } | {
                        t: number;
                        s: number[];
                        i?: undefined;
                        o?: undefined;
                    })[];
                    ix: number;
                };
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                m: number;
                ix: number;
                nm: string;
                mn: string;
                hd: boolean;
                it?: undefined;
                np?: undefined;
                cix?: undefined;
                bm?: undefined;
            })[];
            ip: number;
            op: number;
            st: number;
            bm: number;
            ef?: undefined;
        })[];
        markers: {
            tm: number;
            cm: string;
            dr: number;
        }[];
    }>;
};
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
    icon: Promise<any> | string;
    animation: Animation | string;
    size: Size | string;
    actions?: {
        [key: string]: Action;
    } | null;
    allowClose?: boolean;
    timeout?: number;
    timeoutProgress?: boolean;
};
declare class Alert {
    protected modalInstance: Modal | null;
    protected modalElement?: HTMLElement;
    protected options: Config;
    constructor(options?: Config);
    hide(): void;
    show(): Promise<unknown>;
}

export { Animation, Icon, Size, Alert as default };
