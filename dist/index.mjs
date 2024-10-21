function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
// src/assets/icons/success.json
var require_success = __commonJS({
    "src/assets/icons/success.json": function(exports, module) {
        module.exports = {
            v: "5.9.2",
            fr: 25,
            ip: 0,
            op: 51,
            w: 800,
            h: 800,
            nm: "Chulito",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ddd: 0,
                    ind: 1,
                    ty: 4,
                    nm: "Capa de formas 1",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                410,
                                436,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                0,
                                0,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                79.552,
                                79.552,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    -204,
                                                    -20
                                                ],
                                                [
                                                    -79.486,
                                                    91.943
                                                ],
                                                [
                                                    182.972,
                                                    -155.43
                                                ]
                                            ],
                                            c: false
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [
                                            0,
                                            0.686274509804,
                                            0.274509803922,
                                            1
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 64,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 2,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Forma 1",
                            np: 3,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 8,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 18,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 51,
                    st: -486,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 2,
                    ty: 4,
                    nm: "Capa 1 contornos 9",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 1,
                            k: [
                                {
                                    i: {
                                        x: [
                                            0.667
                                        ],
                                        y: [
                                            1
                                        ]
                                    },
                                    o: {
                                        x: [
                                            0.333
                                        ],
                                        y: [
                                            0
                                        ]
                                    },
                                    t: 0,
                                    s: [
                                        -90
                                    ]
                                },
                                {
                                    t: 50,
                                    s: [
                                        270
                                    ]
                                }
                            ],
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                400,
                                400,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                586.5,
                                586.5,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                100,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    336.5
                                                ],
                                                [
                                                    -336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -336.5
                                                ]
                                            ],
                                            c: true
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 0,
                                                s: [
                                                    0.176470592618,
                                                    0.168627455831,
                                                    0.20000000298,
                                                    1
                                                ]
                                            },
                                            {
                                                t: 12,
                                                s: [
                                                    0,
                                                    0.686274509804,
                                                    0.274509803922,
                                                    1
                                                ]
                                            }
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 50,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 10,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            586.5,
                                            586.5
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Grupo 1",
                            np: 2,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 0,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 17,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        },
                        {
                            ty: "gr",
                            it: [
                                {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 21,
                                                s: [
                                                    0.176470588235,
                                                    0.16862745098,
                                                    0.2,
                                                    1
                                                ]
                                            },
                                            {
                                                t: 34,
                                                s: [
                                                    0,
                                                    0.686274528503,
                                                    0.274509817362,
                                                    1
                                                ]
                                            }
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 50,
                                        ix: 5
                                    },
                                    lc: 1,
                                    lj: 1,
                                    ml: 4,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Grupo 2",
                            np: 1,
                            cix: 2,
                            bm: 0,
                            ix: 3,
                            mn: "ADBE Vector Group",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 51,
                    st: 0,
                    bm: 0
                }
            ],
            markers: [
                {
                    tm: -147,
                    cm: "1",
                    dr: 0
                },
                {
                    tm: -98,
                    cm: "2",
                    dr: 0
                }
            ]
        };
    }
});
// src/assets/icons/denied.json
var require_denied = __commonJS({
    "src/assets/icons/denied.json": function(exports, module) {
        module.exports = {
            v: "5.9.2",
            fr: 25,
            ip: 0,
            op: 52,
            w: 800,
            h: 800,
            nm: "Precomp. 1",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ddd: 0,
                    ind: 1,
                    ty: 4,
                    nm: "Capa de formas 11",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 90,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                394.648,
                                397.167,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                -9,
                                17,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                100,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    -170,
                                                    -144
                                                ],
                                                [
                                                    152,
                                                    178
                                                ]
                                            ],
                                            c: false
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "tm",
                                    s: {
                                        a: 0,
                                        k: 0,
                                        ix: 1
                                    },
                                    e: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 10,
                                                s: [
                                                    0
                                                ]
                                            },
                                            {
                                                t: 17,
                                                s: [
                                                    100
                                                ]
                                            }
                                        ],
                                        ix: 2
                                    },
                                    o: {
                                        a: 0,
                                        k: 0,
                                        ix: 3
                                    },
                                    m: 1,
                                    ix: 2,
                                    nm: "Recortar trazados 1",
                                    mn: "ADBE Vector Filter - Trim",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [
                                            0.925490196078,
                                            0.219607843137,
                                            0.192156862745,
                                            1
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 70,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 4,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [
                                            0.176470588235,
                                            0.16862745098,
                                            0.2,
                                            1
                                        ],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    bm: 0,
                                    nm: "Relleno 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            68.518,
                                            68.518
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Forma 1",
                            np: 4,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        }
                    ],
                    ip: 2,
                    op: 52,
                    st: -502,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 2,
                    ty: 4,
                    nm: "Capa de formas 10",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                397.401,
                                404.91,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                -9,
                                17,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                100,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    -170,
                                                    -144
                                                ],
                                                [
                                                    152,
                                                    178
                                                ]
                                            ],
                                            c: false
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "tm",
                                    s: {
                                        a: 0,
                                        k: 0,
                                        ix: 1
                                    },
                                    e: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 8,
                                                s: [
                                                    0
                                                ]
                                            },
                                            {
                                                t: 15,
                                                s: [
                                                    100
                                                ]
                                            }
                                        ],
                                        ix: 2
                                    },
                                    o: {
                                        a: 0,
                                        k: 0,
                                        ix: 3
                                    },
                                    m: 1,
                                    ix: 2,
                                    nm: "Recortar trazados 1",
                                    mn: "ADBE Vector Filter - Trim",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [
                                            0.925490196078,
                                            0.219607843137,
                                            0.192156862745,
                                            1
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 70,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 4,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [
                                            0.176470588235,
                                            0.16862745098,
                                            0.2,
                                            1
                                        ],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    bm: 0,
                                    nm: "Relleno 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            71.117,
                                            71.117
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Forma 1",
                            np: 4,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 52,
                    st: -504,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 3,
                    ty: 4,
                    nm: "Capa 1 contornos 19",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 1,
                            k: [
                                {
                                    i: {
                                        x: [
                                            0.667
                                        ],
                                        y: [
                                            1
                                        ]
                                    },
                                    o: {
                                        x: [
                                            0.333
                                        ],
                                        y: [
                                            0
                                        ]
                                    },
                                    t: 1,
                                    s: [
                                        -90
                                    ]
                                },
                                {
                                    t: 51,
                                    s: [
                                        270
                                    ]
                                }
                            ],
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                400,
                                400,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                586.5,
                                586.5,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                100,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    336.5
                                                ],
                                                [
                                                    -336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -336.5
                                                ]
                                            ],
                                            c: true
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 1,
                                                s: [
                                                    0.176470592618,
                                                    0.168627455831,
                                                    0.20000000298,
                                                    1
                                                ]
                                            },
                                            {
                                                t: 13,
                                                s: [
                                                    0.92549020052,
                                                    0.219607844949,
                                                    0.192156866193,
                                                    1
                                                ]
                                            }
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 50,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 10,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            586.5,
                                            586.5
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Grupo 1",
                            np: 2,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 1,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 18,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        }
                    ],
                    ip: 1,
                    op: 52,
                    st: 1,
                    bm: 0
                }
            ],
            markers: [
                {
                    tm: -278,
                    cm: "1",
                    dr: 0
                },
                {
                    tm: -229,
                    cm: "2",
                    dr: 0
                }
            ]
        };
    }
});
// src/assets/icons/warning.json
var require_warning = __commonJS({
    "src/assets/icons/warning.json": function(exports, module) {
        module.exports = {
            v: "5.9.2",
            fr: 25,
            ip: 0,
            op: 51,
            w: 800,
            h: 800,
            nm: "Azul",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ddd: 0,
                    ind: 1,
                    ty: 4,
                    nm: "Capa de formas 14",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                401.405,
                                551.405,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                -10.595,
                                165.405,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 1,
                            k: [
                                {
                                    i: {
                                        x: [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        y: [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    o: {
                                        x: [
                                            0.167,
                                            0.167,
                                            0.167
                                        ],
                                        y: [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    t: 16,
                                    s: [
                                        0,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    t: 20,
                                    s: [
                                        216.866,
                                        216.866,
                                        100
                                    ]
                                }
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    d: 1,
                                    ty: "el",
                                    s: {
                                        a: 0,
                                        k: [
                                            30.81,
                                            30.81
                                        ],
                                        ix: 2
                                    },
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 3
                                    },
                                    nm: "Trazado el\xC3\x83\xC2\xADptico 1",
                                    mn: "ADBE Vector Shape - Ellipse",
                                    hd: false
                                },
                                {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [
                                            1,
                                            0.517647058824,
                                            0.074509803922,
                                            1
                                        ],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    bm: 0,
                                    nm: "Relleno 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            -10.595,
                                            165.405
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Elipse 1",
                            np: 3,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        }
                    ],
                    ip: 16,
                    op: 51,
                    st: -757,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 2,
                    ty: 4,
                    nm: "Capa de formas 13",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                396.219,
                                320,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                -12,
                                -56,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                81.25,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    -12,
                                                    -216
                                                ],
                                                [
                                                    -12,
                                                    104
                                                ]
                                            ],
                                            c: false
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [
                                            1,
                                            0.517647058824,
                                            0.074509803922,
                                            1
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 74,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 4,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            68.49,
                                            76.853
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Forma 1",
                            np: 3,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 10,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 16,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 51,
                    st: -777,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 3,
                    ty: 4,
                    nm: "Capa 1 contornos 16",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 1,
                            k: [
                                {
                                    i: {
                                        x: [
                                            0.667
                                        ],
                                        y: [
                                            1
                                        ]
                                    },
                                    o: {
                                        x: [
                                            0.333
                                        ],
                                        y: [
                                            0
                                        ]
                                    },
                                    t: 0,
                                    s: [
                                        -90
                                    ]
                                },
                                {
                                    t: 50,
                                    s: [
                                        270
                                    ]
                                }
                            ],
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                400,
                                400,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                586.5,
                                586.5,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                100,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    336.5
                                                ],
                                                [
                                                    -336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -336.5
                                                ]
                                            ],
                                            c: true
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 0,
                                                s: [
                                                    0.176470592618,
                                                    0.168627455831,
                                                    0.20000000298,
                                                    1
                                                ]
                                            },
                                            {
                                                t: 12,
                                                s: [
                                                    1,
                                                    0.517647087574,
                                                    0.074509806931,
                                                    1
                                                ]
                                            }
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 50,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 10,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            586.5,
                                            586.5
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Grupo 1",
                            np: 2,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 0,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 17,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 51,
                    st: 0,
                    bm: 0
                }
            ],
            markers: [
                {
                    tm: -356,
                    cm: "1",
                    dr: 0
                },
                {
                    tm: -307,
                    cm: "2",
                    dr: 0
                }
            ]
        };
    }
});
// src/assets/icons/info.json
var require_info = __commonJS({
    "src/assets/icons/info.json": function(exports, module) {
        module.exports = {
            v: "5.9.2",
            fr: 25,
            ip: 0,
            op: 51,
            w: 800,
            h: 800,
            nm: "Azul",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ddd: 0,
                    ind: 1,
                    ty: 4,
                    nm: "Capa de formas 14",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                401.405,
                                551.405,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                -10.595,
                                165.405,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                216.866,
                                216.866,
                                100
                            ],
                            ix: 6,
                            l: 2,
                            x: "var $bm_rt;\nvar result;\nresult = getAnimationComposerPresetValue();\nfunction getAnimationComposerPresetValue() {\n    var bL = thisLayer;\n    var tTrI = null;\n    var tTrO = null;\n    if (bL.marker.numKeys > 0) {\n        var acmp = 'zzzzzzzzzzzzzzz_AC';\n        for (var i = 1; i <= bL.marker.numKeys; i++) {\n            var m = bL.marker.key(i);\n            var p = m.parameters;\n            if (p.hasOwnProperty(acmp + 'MarkerEnabled') && p.hasOwnProperty(acmp + 'MarkerType') && p.hasOwnProperty(acmp + 'MarkerAppPresetType')) {\n                if (p[acmp + 'MarkerEnabled'] != '1') {\n                    continue;\n                }\n                switch (p[acmp + 'MarkerAppPresetType']) {\n                case '1': {\n                        tTrI = m.time;\n                        break;\n                    }\n                }\n            }\n        }\n    }\n    function acPD(fxN) {\n        try {\n            if (bL.effect(fxN).active === false) {\n                ac.en = false;\n            }\n        } catch (e) {\n        }\n    }\n    function acSliderValP(fxN, stN, dV) {\n        try {\n            return bL.effect(fxN)(stN);\n        } catch (e) {\n            return dV;\n        }\n    }\n    function acValMul(val) {\n        acAccM *= val;\n    }\n    function mhOvershoot(t, a, f, d) {\n        if (d <= 0) {\n            d = 0;\n        }\n        var y = $bm_div($bm_mul(a, Math.cos($bm_mul($bm_mul($bm_mul(t, f), Math.PI), 2))), Math.exp($bm_mul(t, d)));\n        if (t < 0.8) {\n            return y;\n        }\n        return $bm_mul(y, $bm_sub(1, $bm_div($bm_sub(t, 0.8), 0.2)));\n    }\n    function upACo(tIn, dIn, tOut, dOut, eFi, eFo) {\n        if (dIn < 0) {\n            dIn = 0;\n        }\n        if (dOut < 0) {\n            dOut = 0;\n        }\n        ac.fade = 1;\n        if (t < tOut) {\n            if (t < $bm_sum(tIn, dIn)) {\n                if (dIn == 0) {\n                    ac.fade = 0;\n                } else {\n                    ac.fade = $bm_div($bm_sub(t, tIn), dIn);\n                    if (ac.fade < 0) {\n                        ac.fade = 0;\n                    }\n                    if (ac.fade > 1) {\n                        ac.fade = 1;\n                    }\n                    if (eFi) {\n                        ac.fade = eFi(ac.fade);\n                    }\n                }\n            }\n        } else {\n            if (dOut == 0) {\n                ac.fade = 0;\n            } else {\n                ac.fade = $bm_div($bm_sub(t, tOut), dOut);\n                if (ac.fade < 0) {\n                    ac.fade = 0;\n                }\n                if (ac.fade > 1) {\n                    ac.fade = 1;\n                }\n                if (eFo) {\n                    ac.fade = eFo(ac.fade);\n                }\n                ac.fade = $bm_sub(1, ac.fade);\n            }\n        }\n        ac.intensity = 1;\n        ac.en = true;\n        ac.t = $bm_sub(t, tIn);\n    }\n    var ac = {};\n    ac.en = false;\n    var v = thisProperty.value;\n    var t = time;\n    var acAccM = 1;\n    ac.en = false;\n    if (tTrI !== null && t < tTrI) {\n        upACo(bL.inPoint, $bm_sub(tTrI, bL.inPoint), bL.outPoint, 0);\n        ac.fade = $bm_sub(1, ac.fade);\n    }\n    acPD('AC IN [YRH] Controls');\n    if (ac.en) {\n        acValMul($bm_sub(1, $bm_mul(mhOvershoot($bm_sub(1, ac.fade), 1, acSliderValP('AC IN [YRH] Controls', 'Number of bounces', 2), 7), $bm_sum($bm_div(acSliderValP('AC IN [YRH] Controls', 'Scale', 0), -100), 1))));\n    }\n    v = thisProperty.value;\n    v *= acAccM;\n    return v;\n}\n$bm_rt = result;"
                        }
                    },
                    ao: 0,
                    ef: [
                        {
                            ty: 5,
                            nm: "AC IN [YRH] Controls",
                            np: 4,
                            mn: "Pseudo/MHAC PrCtrl YRH 4",
                            ix: 1,
                            en: 1,
                            ef: [
                                {
                                    ty: 0,
                                    nm: "Number of bounces",
                                    mn: "Pseudo/MHAC PrCtrl YRH 4-0001",
                                    ix: 1,
                                    v: {
                                        a: 0,
                                        k: 2,
                                        ix: 1
                                    }
                                },
                                {
                                    ty: 0,
                                    nm: "Scale",
                                    mn: "Pseudo/MHAC PrCtrl YRH 4-0002",
                                    ix: 2,
                                    v: {
                                        a: 0,
                                        k: 0,
                                        ix: 2
                                    }
                                }
                            ]
                        }
                    ],
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    d: 1,
                                    ty: "el",
                                    s: {
                                        a: 0,
                                        k: [
                                            30.81,
                                            30.81
                                        ],
                                        ix: 2
                                    },
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 3
                                    },
                                    nm: "Trazado el\xC3\x83\xC2\xADptico 1",
                                    mn: "ADBE Vector Shape - Ellipse",
                                    hd: false
                                },
                                {
                                    ty: "fl",
                                    c: {
                                        a: 0,
                                        k: [
                                            0.180392156863,
                                            0.545098039216,
                                            1,
                                            1
                                        ],
                                        ix: 4
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 5
                                    },
                                    r: 1,
                                    bm: 0,
                                    nm: "Relleno 1",
                                    mn: "ADBE Vector Graphic - Fill",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            -10.595,
                                            165.405
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Elipse 1",
                            np: 3,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        }
                    ],
                    ip: 16,
                    op: 51,
                    st: -757,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 2,
                    ty: 4,
                    nm: "Capa de formas 13",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                396.219,
                                320,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                -12,
                                -56,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                81.25,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    -12,
                                                    -216
                                                ],
                                                [
                                                    -12,
                                                    104
                                                ]
                                            ],
                                            c: false
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 0,
                                        k: [
                                            0.180392156863,
                                            0.545098039216,
                                            1,
                                            1
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 74,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 4,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            68.49,
                                            76.853
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Forma 1",
                            np: 3,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 10,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 16,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 51,
                    st: -777,
                    bm: 0
                },
                {
                    ddd: 0,
                    ind: 3,
                    ty: 4,
                    nm: "Capa 1 contornos 16",
                    sr: 1,
                    ks: {
                        o: {
                            a: 0,
                            k: 100,
                            ix: 11
                        },
                        r: {
                            a: 1,
                            k: [
                                {
                                    i: {
                                        x: [
                                            0.667
                                        ],
                                        y: [
                                            1
                                        ]
                                    },
                                    o: {
                                        x: [
                                            0.333
                                        ],
                                        y: [
                                            0
                                        ]
                                    },
                                    t: 0,
                                    s: [
                                        -90
                                    ]
                                },
                                {
                                    t: 50,
                                    s: [
                                        270
                                    ]
                                }
                            ],
                            ix: 10
                        },
                        p: {
                            a: 0,
                            k: [
                                400,
                                400,
                                0
                            ],
                            ix: 2,
                            l: 2
                        },
                        a: {
                            a: 0,
                            k: [
                                586.5,
                                586.5,
                                0
                            ],
                            ix: 1,
                            l: 2
                        },
                        s: {
                            a: 0,
                            k: [
                                100,
                                100,
                                100
                            ],
                            ix: 6,
                            l: 2
                        }
                    },
                    ao: 0,
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ind: 0,
                                    ty: "sh",
                                    ix: 1,
                                    ks: {
                                        a: 0,
                                        k: {
                                            i: [
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ]
                                            ],
                                            o: [
                                                [
                                                    0,
                                                    185.844
                                                ],
                                                [
                                                    -185.844,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -185.844
                                                ],
                                                [
                                                    185.844,
                                                    0
                                                ]
                                            ],
                                            v: [
                                                [
                                                    336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    336.5
                                                ],
                                                [
                                                    -336.5,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    -336.5
                                                ]
                                            ],
                                            c: true
                                        },
                                        ix: 2
                                    },
                                    nm: "Trazado 1",
                                    mn: "ADBE Vector Shape - Group",
                                    hd: false
                                },
                                {
                                    ty: "st",
                                    c: {
                                        a: 1,
                                        k: [
                                            {
                                                i: {
                                                    x: [
                                                        0.667
                                                    ],
                                                    y: [
                                                        1
                                                    ]
                                                },
                                                o: {
                                                    x: [
                                                        0.333
                                                    ],
                                                    y: [
                                                        0
                                                    ]
                                                },
                                                t: 0,
                                                s: [
                                                    0.176470592618,
                                                    0.168627455831,
                                                    0.20000000298,
                                                    1
                                                ]
                                            },
                                            {
                                                t: 12,
                                                s: [
                                                    0.180392161012,
                                                    0.54509806633,
                                                    1,
                                                    1
                                                ]
                                            }
                                        ],
                                        ix: 3
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 4
                                    },
                                    w: {
                                        a: 0,
                                        k: 50,
                                        ix: 5
                                    },
                                    lc: 2,
                                    lj: 1,
                                    ml: 10,
                                    bm: 0,
                                    nm: "Trazo 1",
                                    mn: "ADBE Vector Graphic - Stroke",
                                    hd: false
                                },
                                {
                                    ty: "tr",
                                    p: {
                                        a: 0,
                                        k: [
                                            586.5,
                                            586.5
                                        ],
                                        ix: 2
                                    },
                                    a: {
                                        a: 0,
                                        k: [
                                            0,
                                            0
                                        ],
                                        ix: 1
                                    },
                                    s: {
                                        a: 0,
                                        k: [
                                            100,
                                            100
                                        ],
                                        ix: 3
                                    },
                                    r: {
                                        a: 0,
                                        k: 0,
                                        ix: 6
                                    },
                                    o: {
                                        a: 0,
                                        k: 100,
                                        ix: 7
                                    },
                                    sk: {
                                        a: 0,
                                        k: 0,
                                        ix: 4
                                    },
                                    sa: {
                                        a: 0,
                                        k: 0,
                                        ix: 5
                                    },
                                    nm: "Transformar"
                                }
                            ],
                            nm: "Grupo 1",
                            np: 2,
                            cix: 2,
                            bm: 0,
                            ix: 1,
                            mn: "ADBE Vector Group",
                            hd: false
                        },
                        {
                            ty: "tm",
                            s: {
                                a: 0,
                                k: 0,
                                ix: 1
                            },
                            e: {
                                a: 1,
                                k: [
                                    {
                                        i: {
                                            x: [
                                                0.667
                                            ],
                                            y: [
                                                1
                                            ]
                                        },
                                        o: {
                                            x: [
                                                0.333
                                            ],
                                            y: [
                                                0
                                            ]
                                        },
                                        t: 0,
                                        s: [
                                            0
                                        ]
                                    },
                                    {
                                        t: 17,
                                        s: [
                                            100
                                        ]
                                    }
                                ],
                                ix: 2
                            },
                            o: {
                                a: 0,
                                k: 0,
                                ix: 3
                            },
                            m: 1,
                            ix: 2,
                            nm: "Recortar trazados 1",
                            mn: "ADBE Vector Filter - Trim",
                            hd: false
                        }
                    ],
                    ip: 0,
                    op: 51,
                    st: 0,
                    bm: 0
                }
            ],
            markers: [
                {
                    tm: -356,
                    cm: "1",
                    dr: 0
                },
                {
                    tm: -307,
                    cm: "2",
                    dr: 0
                }
            ]
        };
    }
});
// src/alert.scss
var css = ".modal-alert {\n  --animation-transform: null;\n  --animation-transition: null;\n  --animation-keyframes: animation-open-default;\n  --animation-keyframes-duration: .3s;\n  --animation-timeout-progress: 1s;\n  --modal-alert-vertical-gutter: 1.5rem;\n  --modal-alert-icon-size: 92px;\n  transition: var(--animation-transition);\n  transform: var(--animation-transform);\n}\n.modal-alert.fade {\n  animation: animation-open-fade;\n}\n.modal-alert.scale, .modal-alert.bounce, .modal-alert.default {\n  animation: var(--animation-keyframes) var(--animation-keyframes-duration) ease-in-out;\n}\n.modal-alert.show {\n  --animation-transform: none;\n}\n.modal-alert.close {\n  animation-direction: reverse;\n  animation-duration: calc(var(--animation-keyframes-duration) / 2);\n}\n.modal-alert .btn-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.modal-alert .modal-alert-icon {\n  width: var(--modal-alert-icon-size);\n  height: var(--modal-alert-icon-size);\n  margin-bottom: var(--modal-alert-vertical-gutter);\n}\n.modal-alert .modal-alert-title,\n.modal-alert .modal-alert-text {\n  margin-bottom: var(--modal-alert-vertical-gutter);\n}\n.modal-alert .modal-alert-progress {\n  background: var(--bs-primary);\n  animation: animation-progress var(--animation-timeout-progress) linear;\n  height: 0.25rem;\n  position: absolute;\n  bottom: 0;\n}\n\n@keyframes animation-progress {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n@keyframes animation-open-default {\n  0% {\n    transform: scale(0.7);\n    opacity: 0;\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes animation-open-fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL3lvcmRhbmxhemFyb3YvU2l0ZXMvY29tcG9uZW50cy9ib290c3RyYXAtYWxlcnQvc3JjIiwic291cmNlcyI6WyJhbGVydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFHRTs7QUFJRjtFQUNFOztBQUdGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7QUFHRjtBQUFBO0VBRUU7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFJSjtFQUNFO0lBQ0U7O0VBR0Y7SUFDRTs7O0FBS0o7RUFDRTtJQUNFO0lBQ0E7O0VBR0Y7SUFDRTs7RUFHRjtJQUNFOztFQUdGO0lBQ0U7SUFDQTs7O0FBSUo7RUFDRTtJQUNFOztFQUVGO0lBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYWxlcnQge1xuICAtLWFuaW1hdGlvbi10cmFuc2Zvcm06IG51bGw7XG4gIC0tYW5pbWF0aW9uLXRyYW5zaXRpb246IG51bGw7XG4gIC0tYW5pbWF0aW9uLWtleWZyYW1lczogYW5pbWF0aW9uLW9wZW4tZGVmYXVsdDtcbiAgLS1hbmltYXRpb24ta2V5ZnJhbWVzLWR1cmF0aW9uOiAuM3M7XG4gIC0tYW5pbWF0aW9uLXRpbWVvdXQtcHJvZ3Jlc3M6IDFzO1xuICAtLW1vZGFsLWFsZXJ0LXZlcnRpY2FsLWd1dHRlcjogMS41cmVtO1xuICAtLW1vZGFsLWFsZXJ0LWljb24tc2l6ZTogOTJweDtcblxuICB0cmFuc2l0aW9uOiB2YXIoLS1hbmltYXRpb24tdHJhbnNpdGlvbik7XG4gIHRyYW5zZm9ybTogdmFyKC0tYW5pbWF0aW9uLXRyYW5zZm9ybSk7XG5cbiAgJi5mYWRlIHtcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbi1vcGVuLWZhZGU7XG4gIH1cblxuICAmLnNjYWxlLFxuICAmLmJvdW5jZSxcbiAgJi5kZWZhdWx0IHtcbiAgICBhbmltYXRpb246IHZhcigtLWFuaW1hdGlvbi1rZXlmcmFtZXMpIHZhcigtLWFuaW1hdGlvbi1rZXlmcmFtZXMtZHVyYXRpb24pIGVhc2UtaW4tb3V0O1xuICB9XG5cblxuICAmLnNob3cge1xuICAgIC0tYW5pbWF0aW9uLXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gICYuY2xvc2Uge1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGlvbi1rZXlmcmFtZXMtZHVyYXRpb24pIC8gMik7XG4gIH1cblxuICAuYnRuLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLm1vZGFsLWFsZXJ0LWljb24ge1xuICAgIHdpZHRoOiB2YXIoLS1tb2RhbC1hbGVydC1pY29uLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tbW9kYWwtYWxlcnQtaWNvbi1zaXplKTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tb2RhbC1hbGVydC12ZXJ0aWNhbC1ndXR0ZXIpO1xuICB9XG5cbiAgLm1vZGFsLWFsZXJ0LXRpdGxlLFxuICAubW9kYWwtYWxlcnQtdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbW9kYWwtYWxlcnQtdmVydGljYWwtZ3V0dGVyKTtcbiAgfVxuXG4gIC5tb2RhbC1hbGVydC1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnMtcHJpbWFyeSk7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb24tcHJvZ3Jlc3MgdmFyKC0tYW5pbWF0aW9uLXRpbWVvdXQtcHJvZ3Jlc3MpIGxpbmVhcjtcbiAgICBoZWlnaHQ6IC4yNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0aW9uLXByb2dyZXNzIHtcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBhbmltYXRpb24tb3Blbi1kZWZhdWx0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhbmltYXRpb24tb3Blbi1mYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl19 */";
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
// src/index.ts
import { Modal } from "bootstrap";
var Animation = /* @__PURE__ */ function(Animation2) {
    Animation2["scale"] = "scale";
    Animation2["fade"] = "fade";
    return Animation2;
}(Animation || {});
var Icon = {
    success: Promise.resolve().then(function() {
        return __toESM(require_success());
    }),
    denied: Promise.resolve().then(function() {
        return __toESM(require_denied());
    }),
    warning: Promise.resolve().then(function() {
        return __toESM(require_warning());
    }),
    info: Promise.resolve().then(function() {
        return __toESM(require_info());
    }),
    confirm: Promise.resolve().then(function() {
        return __toESM(require_info());
    })
};
var Size = /* @__PURE__ */ function(Size2) {
    Size2["small"] = "modal-sm";
    Size2["default"] = "modal-default";
    Size2["large"] = "modal-lg";
    Size2["extraLarge"] = "modal-xl";
    return Size2;
}(Size || {});
var Alert = /*#__PURE__*/ function() {
    "use strict";
    function Alert(options) {
        _class_call_check(this, Alert);
        this.modalInstance = null;
        this.options = {
            title: "Are you confirm?",
            icon: Icon.success,
            animation: "scale" /* scale */ ,
            size: "modal-sm" /* small */ ,
            allowClose: false,
            timeoutProgress: false
        };
        this.options = _object_spread({}, this.options, options || {});
    }
    _create_class(Alert, [
        {
            key: "hide",
            value: function hide() {
                var _this = this;
                var _this_modalElement_classList;
                var _this_modalElement, _this_modalElement1;
                if (!this.modalInstance) {
                    return;
                }
                (_this_modalElement = this.modalElement) === null || _this_modalElement === void 0 ? void 0 : _this_modalElement.addEventListener("animationend", function() {
                    var _this_modalInstance;
                    (_this_modalInstance = _this.modalInstance) === null || _this_modalInstance === void 0 ? void 0 : _this_modalInstance.hide();
                });
                var animation = this.options.animation || "scale" /* scale */ ;
                (_this_modalElement1 = this.modalElement) === null || _this_modalElement1 === void 0 ? void 0 : (_this_modalElement_classList = _this_modalElement1.classList).add.apply(_this_modalElement_classList, _to_consumable_array([
                    "close",
                    animation
                ].filter(function(v) {
                    return v;
                })));
            }
        },
        {
            key: "show",
            value: function show() {
                var _this = this;
                this.hide();
                return new Promise(function(resolve, reject) {
                    var _this_modalElement_classList, _modalDialogElement_classList, _modalContentElement_classList, _modalBodyElement_classList, _iconElement_classList, _titleElement_classList;
                    var _this_modalElement;
                    var hasActions = Object.keys(_this.options.actions || {}).length;
                    _this.modalElement = document.createElement("div");
                    (_this_modalElement_classList = _this.modalElement.classList).add.apply(_this_modalElement_classList, _to_consumable_array([
                        "modal",
                        "modal-alert",
                        _this.options.animation
                    ].filter(function(v) {
                        return v;
                    })));
                    _this.modalElement.addEventListener("hidden.bs.modal", function() {
                        var _this_modalInstance;
                        (_this_modalInstance = _this.modalInstance) === null || _this_modalInstance === void 0 ? void 0 : _this_modalInstance.dispose();
                        _this.modalInstance = null;
                    });
                    _this.modalElement.addEventListener("animationstart", function() {
                        var _this_modalElement;
                        (_this_modalElement = _this.modalElement) === null || _this_modalElement === void 0 ? void 0 : _this_modalElement.addEventListener("animationend", function() {
                            var _this_modalElement;
                            (_this_modalElement = _this.modalElement) === null || _this_modalElement === void 0 ? void 0 : _this_modalElement.classList.remove(_this.options.animation);
                        });
                    });
                    (_this_modalElement = _this.modalElement) === null || _this_modalElement === void 0 ? void 0 : _this_modalElement.addEventListener("shown.bs.modal", function() {
                        if (_this.options.timeout) {
                            setTimeout(function() {
                                return _this.hide();
                            }, _this.options.timeout);
                            if (_this.options.timeoutProgress) {
                                var _modalProgressElement_classList;
                                var modalProgressElement = document.createElement("div");
                                (_modalProgressElement_classList = modalProgressElement.classList).add.apply(_modalProgressElement_classList, [
                                    "modal-alert-progress"
                                ]);
                                modalProgressElement.style.setProperty("--animation-timeout-progress", _this.options.timeout / 1e3 + "s");
                                modalContentElement.append(modalProgressElement);
                            }
                        }
                    });
                    var modalDialogElement = document.createElement("div");
                    (_modalDialogElement_classList = modalDialogElement.classList).add.apply(_modalDialogElement_classList, _to_consumable_array([
                        "modal-dialog",
                        "modal-dialog-centered",
                        _this.options.size
                    ].filter(function(v) {
                        return v;
                    })));
                    _this.modalElement.append(modalDialogElement);
                    var modalContentElement = document.createElement("div");
                    (_modalContentElement_classList = modalContentElement.classList).add.apply(_modalContentElement_classList, [
                        "modal-content"
                    ]);
                    modalDialogElement.append(modalContentElement);
                    var modalBodyElement = document.createElement("div");
                    (_modalBodyElement_classList = modalBodyElement.classList).add.apply(_modalBodyElement_classList, [
                        "modal-body",
                        "d-flex",
                        "flex-column",
                        "align-items-center"
                    ]);
                    modalContentElement.append(modalBodyElement);
                    document.body.append(_this.modalElement);
                    _this.modalInstance = Modal.getOrCreateInstance(_this.modalElement, {
                        backdrop: "static"
                    });
                    if (_this.options.allowClose || !hasActions) {
                        _this.modalElement.addEventListener("hidePrevented.bs.modal", function() {
                            _this.hide();
                            reject();
                        });
                        if (!hasActions) {
                            var _closeButtonElement_classList;
                            var closeButtonElement = document.createElement("button");
                            (_closeButtonElement_classList = closeButtonElement.classList).add.apply(_closeButtonElement_classList, [
                                "btn-close"
                            ]);
                            closeButtonElement.addEventListener("click", function() {
                                return _this.hide();
                            });
                            modalBodyElement.append(closeButtonElement);
                        }
                    }
                    var iconElement = document.createElement("div");
                    (_iconElement_classList = iconElement.classList).add.apply(_iconElement_classList, [
                        "modal-alert-icon"
                    ]);
                    modalBodyElement.append(iconElement);
                    if (_this.options.icon) {
                        import("lottie-web").then(function(param) {
                            var lottiePlayer = param.default;
                            var loadAnimation = function(options) {
                                return lottiePlayer.loadAnimation(_object_spread_props(_object_spread({
                                    renderer: "svg",
                                    loop: false,
                                    autoplay: true
                                }, options || {}), {
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid meet"
                                    },
                                    container: iconElement
                                }));
                            };
                            if (_instanceof(_this.options.icon, Promise)) {
                                _this.options.icon.then(function(data) {
                                    return loadAnimation({
                                        animationData: data
                                    });
                                });
                            } else {
                                loadAnimation({
                                    path: _this.options.icon
                                });
                            }
                        });
                    }
                    var titleElement = document.createElement("h3");
                    titleElement.innerHTML = _this.options.title;
                    (_titleElement_classList = titleElement.classList).add.apply(_titleElement_classList, [
                        "modal-alert-title"
                    ]);
                    modalBodyElement.append(titleElement);
                    if (_this.options.text) {
                        var _textElement_classList;
                        var textElement = document.createElement("p");
                        (_textElement_classList = textElement.classList).add.apply(_textElement_classList, [
                            "modal-alert-text"
                        ]);
                        textElement.innerHTML = _this.options.text;
                        modalBodyElement.append(textElement);
                    }
                    if (hasActions) {
                        var _actionsElement_classList;
                        var actionsElement = document.createElement("div");
                        (_actionsElement_classList = actionsElement.classList).add.apply(_actionsElement_classList, [
                            "d-flex",
                            "flex-row",
                            "align-items"
                        ]);
                        modalBodyElement.append(actionsElement);
                        Object.keys(_this.options.actions || {}).forEach(function(action) {
                            var _actionButtonElement_classList;
                            if (!_this.options.actions) {
                                throw new Error("Invalid Actions");
                            }
                            var _this_options_actions_action = _this.options.actions[action], label = _this_options_actions_action.label, classList = _this_options_actions_action.classList;
                            var actionButtonElement = document.createElement("a");
                            (_actionButtonElement_classList = actionButtonElement.classList).add.apply(_actionButtonElement_classList, _to_consumable_array([
                                "btn",
                                "mx-2"
                            ].concat(_to_consumable_array(classList || [
                                "btn-primary"
                            ]))));
                            actionButtonElement.innerHTML = label || action.toString();
                            actionButtonElement.addEventListener("click", function() {
                                var result = {
                                    action: action,
                                    isConfirmed: action === "confirm"
                                };
                                switch(action){
                                    case "cancel":
                                        {
                                            reject(result);
                                            break;
                                        }
                                    default:
                                        {
                                            resolve(result);
                                        }
                                }
                                _this.hide();
                            });
                            actionsElement.append(actionButtonElement);
                        });
                    }
                    _this.modalInstance.show();
                });
            }
        }
    ]);
    return Alert;
}();
export { Animation, Icon, Size, Alert as default };
//# sourceMappingURL=index.mjs.map