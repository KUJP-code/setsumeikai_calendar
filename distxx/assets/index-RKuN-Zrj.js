function hy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function py(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ip = { exports: {} },
  as = {},
  lp = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yl = Symbol.for("react.element"),
  my = Symbol.for("react.portal"),
  gy = Symbol.for("react.fragment"),
  vy = Symbol.for("react.strict_mode"),
  yy = Symbol.for("react.profiler"),
  wy = Symbol.for("react.provider"),
  Ey = Symbol.for("react.context"),
  Sy = Symbol.for("react.forward_ref"),
  by = Symbol.for("react.suspense"),
  xy = Symbol.for("react.memo"),
  Cy = Symbol.for("react.lazy"),
  kd = Symbol.iterator;
function Ay(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kd && e[kd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var op = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sp = Object.assign,
  ap = {};
function ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ap),
    (this.updater = n || op);
}
ai.prototype.isReactComponent = {};
ai.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ai.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function up() {}
up.prototype = ai.prototype;
function Yu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ap),
    (this.updater = n || op);
}
var qu = (Yu.prototype = new up());
qu.constructor = Yu;
sp(qu, ai.prototype);
qu.isPureReactComponent = !0;
var Rd = Array.isArray,
  cp = Object.prototype.hasOwnProperty,
  Zu = { current: null },
  dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function fp(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      cp.call(t, r) && !dp.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: yl,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: Zu.current,
  };
}
function _y(e, t) {
  return {
    $$typeof: yl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ku(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yl;
}
function ky(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dd = /\/+/g;
function Ws(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ky("" + e.key)
    : t.toString(36);
}
function oo(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yl:
          case my:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ws(o, 0) : r),
      Rd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Dd, "$&/") + "/"),
          oo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ku(i) &&
            (i = _y(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Dd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Rd(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + Ws(l, s);
      o += oo(l, t, n, a, i);
    }
  else if (((a = Ay(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Ws(l, s++)), (o += oo(l, t, n, a, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Il(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    oo(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function Ry(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  so = { transition: null },
  Dy = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: so,
    ReactCurrentOwner: Zu,
  };
G.Children = {
  map: Il,
  forEach: function (e, t, n) {
    Il(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ku(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = ai;
G.Fragment = gy;
G.Profiler = yy;
G.PureComponent = Yu;
G.StrictMode = vy;
G.Suspense = by;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dy;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = sp({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = Zu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      cp.call(t, a) &&
        !dp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: yl, type: e.type, key: i, ref: l, props: r, _owner: o };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ey,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wy, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = fp;
G.createFactory = function (e) {
  var t = fp.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Sy, render: e };
};
G.isValidElement = Ku;
G.lazy = function (e) {
  return { $$typeof: Cy, _payload: { _status: -1, _result: e }, _init: Ry };
};
G.memo = function (e, t) {
  return { $$typeof: xy, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = so.transition;
  so.transition = {};
  try {
    e();
  } finally {
    so.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Ue.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
G.useId = function () {
  return Ue.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Ue.current.useRef(e);
};
G.useState = function (e) {
  return Ue.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Ue.current.useTransition();
};
G.version = "18.2.0";
lp.exports = G;
var k = lp.exports;
const Qi = py(k),
  Ty = hy({ __proto__: null, default: Qi }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ny = k,
  My = Symbol.for("react.element"),
  Iy = Symbol.for("react.fragment"),
  Oy = Object.prototype.hasOwnProperty,
  Py = Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function hp(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Oy.call(t, r) && !jy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: My,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: Py.current,
  };
}
as.Fragment = Iy;
as.jsx = hp;
as.jsxs = hp;
ip.exports = as;
var w = ip.exports,
  ja = {},
  pp = { exports: {} },
  nt = {},
  mp = { exports: {} },
  gp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, z) {
    var W = I.length;
    I.push(z);
    e: for (; 0 < W; ) {
      var ce = (W - 1) >>> 1,
        Ee = I[ce];
      if (0 < i(Ee, z)) (I[ce] = z), (I[W] = Ee), (W = ce);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var z = I[0],
      W = I.pop();
    if (W !== z) {
      I[0] = W;
      e: for (var ce = 0, Ee = I.length, Er = Ee >>> 1; ce < Er; ) {
        var ne = 2 * (ce + 1) - 1,
          jt = I[ne],
          At = ne + 1,
          Sr = I[At];
        if (0 > i(jt, W))
          At < Ee && 0 > i(Sr, jt)
            ? ((I[ce] = Sr), (I[At] = W), (ce = At))
            : ((I[ce] = jt), (I[ne] = W), (ce = ne));
        else if (At < Ee && 0 > i(Sr, W)) (I[ce] = Sr), (I[At] = W), (ce = At);
        else break e;
      }
    }
    return z;
  }
  function i(I, z) {
    var W = I.sortIndex - z.sortIndex;
    return W !== 0 ? W : I.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    v = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(I) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= I)
        r(u), (z.sortIndex = z.expirationTime), t(a, z);
      else break;
      z = n(u);
    }
  }
  function g(I) {
    if (((y = !1), E(I), !v))
      if (n(a) !== null) (v = !0), Ze(_);
      else {
        var z = n(u);
        z !== null && Ct(g, z.startTime - I);
      }
  }
  function _(I, z) {
    (v = !1), y && ((y = !1), p(T), (T = -1)), (h = !0);
    var W = d;
    try {
      for (
        E(z), f = n(a);
        f !== null && (!(f.expirationTime > z) || (I && !ke()));

      ) {
        var ce = f.callback;
        if (typeof ce == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Ee = ce(f.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Ee == "function" ? (f.callback = Ee) : f === n(a) && r(a),
            E(z);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Er = !0;
      else {
        var ne = n(u);
        ne !== null && Ct(g, ne.startTime - z), (Er = !1);
      }
      return Er;
    } finally {
      (f = null), (d = W), (h = !1);
    }
  }
  var M = !1,
    D = null,
    T = -1,
    Q = 5,
    B = -1;
  function ke() {
    return !(e.unstable_now() - B < Q);
  }
  function te() {
    if (D !== null) {
      var I = e.unstable_now();
      B = I;
      var z = !0;
      try {
        z = D(!0, I);
      } finally {
        z ? xt() : ((M = !1), (D = null));
      }
    } else M = !1;
  }
  var xt;
  if (typeof m == "function")
    xt = function () {
      m(te);
    };
  else if (typeof MessageChannel < "u") {
    var rn = new MessageChannel(),
      ln = rn.port2;
    (rn.port1.onmessage = te),
      (xt = function () {
        ln.postMessage(null);
      });
  } else
    xt = function () {
      S(te, 0);
    };
  function Ze(I) {
    (D = I), M || ((M = !0), xt());
  }
  function Ct(I, z) {
    T = S(function () {
      I(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), Ze(_));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (I) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = d;
      }
      var W = d;
      d = z;
      try {
        return I();
      } finally {
        d = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, z) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var W = d;
      d = I;
      try {
        return z();
      } finally {
        d = W;
      }
    }),
    (e.unstable_scheduleCallback = function (I, z, W) {
      var ce = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? ce + W : ce))
          : (W = ce),
        I)
      ) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return (
        (Ee = W + Ee),
        (I = {
          id: c++,
          callback: z,
          priorityLevel: I,
          startTime: W,
          expirationTime: Ee,
          sortIndex: -1,
        }),
        W > ce
          ? ((I.sortIndex = W),
            t(u, I),
            n(a) === null &&
              I === n(u) &&
              (y ? (p(T), (T = -1)) : (y = !0), Ct(g, W - ce)))
          : ((I.sortIndex = Ee), t(a, I), v || h || ((v = !0), Ze(_))),
        I
      );
    }),
    (e.unstable_shouldYield = ke),
    (e.unstable_wrapCallback = function (I) {
      var z = d;
      return function () {
        var W = d;
        d = z;
        try {
          return I.apply(this, arguments);
        } finally {
          d = W;
        }
      };
    });
})(gp);
mp.exports = gp;
var Ly = mp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = k,
  tt = Ly;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yp = new Set(),
  Gi = {};
function hr(e, t) {
  Zr(e, t), Zr(e + "Capture", t);
}
function Zr(e, t) {
  for (Gi[e] = t, e = 0; e < t.length; e++) yp.add(t[e]);
}
var Gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  La = Object.prototype.hasOwnProperty,
  zy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Td = {},
  Nd = {};
function Fy(e) {
  return La.call(Nd, e)
    ? !0
    : La.call(Td, e)
    ? !1
    : zy.test(e)
    ? (Nd[e] = !0)
    : ((Td[e] = !0), !1);
}
function By(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Uy(e, t, n, r) {
  if (t === null || typeof t > "u" || By(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xu = /[\-:]([a-z])/g;
function Ju(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xu, Ju);
    Ie[t] = new He(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xu, Ju);
    Ie[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xu, Ju);
  Ie[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new He(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ec(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Uy(t, n, i, r) && (n = null),
    r || i === null
      ? Fy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var en = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ol = Symbol.for("react.element"),
  Ar = Symbol.for("react.portal"),
  _r = Symbol.for("react.fragment"),
  tc = Symbol.for("react.strict_mode"),
  za = Symbol.for("react.profiler"),
  wp = Symbol.for("react.provider"),
  Ep = Symbol.for("react.context"),
  nc = Symbol.for("react.forward_ref"),
  Fa = Symbol.for("react.suspense"),
  Ba = Symbol.for("react.suspense_list"),
  rc = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  Sp = Symbol.for("react.offscreen"),
  Md = Symbol.iterator;
function mi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Md && e[Md]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Vs;
function ki(e) {
  if (Vs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vs = (t && t[1]) || "";
    }
  return (
    `
` +
    Vs +
    e
  );
}
var $s = !1;
function Qs(e, t) {
  if (!e || $s) return "";
  $s = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          s = l.length - 1;
        1 <= o && 0 <= s && i[o] !== l[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== l[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== l[s])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    ($s = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ki(e) : "";
}
function Hy(e) {
  switch (e.tag) {
    case 5:
      return ki(e.type);
    case 16:
      return ki("Lazy");
    case 13:
      return ki("Suspense");
    case 19:
      return ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qs(e.type, !1)), e;
    case 11:
      return (e = Qs(e.type.render, !1)), e;
    case 1:
      return (e = Qs(e.type, !0)), e;
    default:
      return "";
  }
}
function Ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _r:
      return "Fragment";
    case Ar:
      return "Portal";
    case za:
      return "Profiler";
    case tc:
      return "StrictMode";
    case Fa:
      return "Suspense";
    case Ba:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ep:
        return (e.displayName || "Context") + ".Consumer";
      case wp:
        return (e._context.displayName || "Context") + ".Provider";
      case nc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case rc:
        return (
          (t = e.displayName || null), t !== null ? t : Ua(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return Ua(e(t));
        } catch {}
    }
  return null;
}
function Wy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ua(t);
    case 8:
      return t === tc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function bp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vy(e) {
  var t = bp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pl(e) {
  e._valueTracker || (e._valueTracker = Vy(e));
}
function xp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = bp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Co(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ha(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Id(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cp(e, t) {
  (t = t.checked), t != null && ec(e, "checked", t, !1);
}
function Wa(e, t) {
  Cp(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Va(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Va(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Od(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Va(e, t, n) {
  (t !== "number" || Co(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ri = Array.isArray;
function Br(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ri(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function Ap(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _p(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _p(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var jl,
  kp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        jl = jl || document.createElement("div"),
          jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = jl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $y = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mi).forEach(function (e) {
  $y.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mi[t] = Mi[e]);
  });
});
function Rp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mi.hasOwnProperty(e) && Mi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Rp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Qy = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ga(e, t) {
  if (t) {
    if (Qy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ya(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qa = null;
function ic(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Za = null,
  Ur = null,
  Hr = null;
function Ld(e) {
  if ((e = Sl(e))) {
    if (typeof Za != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = hs(t)), Za(e.stateNode, e.type, t));
  }
}
function Tp(e) {
  Ur ? (Hr ? Hr.push(e) : (Hr = [e])) : (Ur = e);
}
function Np() {
  if (Ur) {
    var e = Ur,
      t = Hr;
    if (((Hr = Ur = null), Ld(e), t)) for (e = 0; e < t.length; e++) Ld(t[e]);
  }
}
function Mp(e, t) {
  return e(t);
}
function Ip() {}
var Gs = !1;
function Op(e, t, n) {
  if (Gs) return e(t, n);
  Gs = !0;
  try {
    return Mp(e, t, n);
  } finally {
    (Gs = !1), (Ur !== null || Hr !== null) && (Ip(), Np());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Ka = !1;
if (Gt)
  try {
    var gi = {};
    Object.defineProperty(gi, "passive", {
      get: function () {
        Ka = !0;
      },
    }),
      window.addEventListener("test", gi, gi),
      window.removeEventListener("test", gi, gi);
  } catch {
    Ka = !1;
  }
function Gy(e, t, n, r, i, l, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ii = !1,
  Ao = null,
  _o = !1,
  Xa = null,
  Yy = {
    onError: function (e) {
      (Ii = !0), (Ao = e);
    },
  };
function qy(e, t, n, r, i, l, o, s, a) {
  (Ii = !1), (Ao = null), Gy.apply(Yy, arguments);
}
function Zy(e, t, n, r, i, l, o, s, a) {
  if ((qy.apply(this, arguments), Ii)) {
    if (Ii) {
      var u = Ao;
      (Ii = !1), (Ao = null);
    } else throw Error(N(198));
    _o || ((_o = !0), (Xa = u));
  }
}
function pr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zd(e) {
  if (pr(e) !== e) throw Error(N(188));
}
function Ky(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pr(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return zd(i), e;
        if (l === r) return zd(i), t;
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = l.child; s; ) {
          if (s === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function jp(e) {
  return (e = Ky(e)), e !== null ? Lp(e) : null;
}
function Lp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zp = tt.unstable_scheduleCallback,
  Fd = tt.unstable_cancelCallback,
  Xy = tt.unstable_shouldYield,
  Jy = tt.unstable_requestPaint,
  we = tt.unstable_now,
  e0 = tt.unstable_getCurrentPriorityLevel,
  lc = tt.unstable_ImmediatePriority,
  Fp = tt.unstable_UserBlockingPriority,
  ko = tt.unstable_NormalPriority,
  t0 = tt.unstable_LowPriority,
  Bp = tt.unstable_IdlePriority,
  us = null,
  Nt = null;
function n0(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(us, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : l0,
  r0 = Math.log,
  i0 = Math.LN2;
function l0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r0(e) / i0) | 0)) | 0;
}
var Ll = 64,
  zl = 4194304;
function Di(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = Di(s)) : ((l &= o), l !== 0 && (r = Di(l)));
  } else (o = n & ~i), o !== 0 ? (r = Di(o)) : l !== 0 && (r = Di(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function o0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function s0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - wt(l),
      s = 1 << o,
      a = i[o];
    a === -1
      ? (!(s & n) || s & r) && (i[o] = o0(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Ja(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Up() {
  var e = Ll;
  return (Ll <<= 1), !(Ll & 4194240) && (Ll = 64), e;
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function a0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - wt(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function oc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function Hp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wp,
  sc,
  Vp,
  $p,
  Qp,
  eu = !1,
  Fl = [],
  yn = null,
  wn = null,
  En = null,
  Zi = new Map(),
  Ki = new Map(),
  dn = [],
  u0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      Zi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ki.delete(t.pointerId);
  }
}
function vi(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Sl(t)), t !== null && sc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function c0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (yn = vi(yn, e, t, n, r, i)), !0;
    case "dragenter":
      return (wn = vi(wn, e, t, n, r, i)), !0;
    case "mouseover":
      return (En = vi(En, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Zi.set(l, vi(Zi.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Ki.set(l, vi(Ki.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Gp(e) {
  var t = qn(e.target);
  if (t !== null) {
    var n = pr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pp(n)), t !== null)) {
          (e.blockedOn = t),
            Qp(e.priority, function () {
              Vp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qa = r), n.target.dispatchEvent(r), (qa = null);
    } else return (t = Sl(n)), t !== null && sc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ud(e, t, n) {
  ao(e) && n.delete(t);
}
function d0() {
  (eu = !1),
    yn !== null && ao(yn) && (yn = null),
    wn !== null && ao(wn) && (wn = null),
    En !== null && ao(En) && (En = null),
    Zi.forEach(Ud),
    Ki.forEach(Ud);
}
function yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    eu ||
      ((eu = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, d0)));
}
function Xi(e) {
  function t(i) {
    return yi(i, e);
  }
  if (0 < Fl.length) {
    yi(Fl[0], e);
    for (var n = 1; n < Fl.length; n++) {
      var r = Fl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yn !== null && yi(yn, e),
      wn !== null && yi(wn, e),
      En !== null && yi(En, e),
      Zi.forEach(t),
      Ki.forEach(t),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    Gp(n), n.blockedOn === null && dn.shift();
}
var Wr = en.ReactCurrentBatchConfig,
  Do = !0;
function f0(e, t, n, r) {
  var i = X,
    l = Wr.transition;
  Wr.transition = null;
  try {
    (X = 1), ac(e, t, n, r);
  } finally {
    (X = i), (Wr.transition = l);
  }
}
function h0(e, t, n, r) {
  var i = X,
    l = Wr.transition;
  Wr.transition = null;
  try {
    (X = 4), ac(e, t, n, r);
  } finally {
    (X = i), (Wr.transition = l);
  }
}
function ac(e, t, n, r) {
  if (Do) {
    var i = tu(e, t, n, r);
    if (i === null) ia(e, t, r, To, n), Bd(e, r);
    else if (c0(i, e, t, n, r)) r.stopPropagation();
    else if ((Bd(e, r), t & 4 && -1 < u0.indexOf(e))) {
      for (; i !== null; ) {
        var l = Sl(i);
        if (
          (l !== null && Wp(l),
          (l = tu(e, t, n, r)),
          l === null && ia(e, t, r, To, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else ia(e, t, r, null, n);
  }
}
var To = null;
function tu(e, t, n, r) {
  if (((To = null), (e = ic(r)), (e = qn(e)), e !== null))
    if (((t = pr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (To = e), null;
}
function Yp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (e0()) {
        case lc:
          return 1;
        case Fp:
          return 4;
        case ko:
        case t0:
          return 16;
        case Bp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null,
  uc = null,
  uo = null;
function qp() {
  if (uo) return uo;
  var e,
    t = uc,
    n = t.length,
    r,
    i = "value" in hn ? hn.value : hn.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (uo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function co(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bl() {
  return !0;
}
function Hd() {
  return !1;
}
function rt(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Bl
        : Hd),
      (this.isPropagationStopped = Hd),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bl));
      },
      persist: function () {},
      isPersistent: Bl,
    }),
    t
  );
}
var ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cc = rt(ui),
  El = me({}, ui, { view: 0, detail: 0 }),
  p0 = rt(El),
  qs,
  Zs,
  wi,
  cs = me({}, El, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wi &&
            (wi && e.type === "mousemove"
              ? ((qs = e.screenX - wi.screenX), (Zs = e.screenY - wi.screenY))
              : (Zs = qs = 0),
            (wi = e)),
          qs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zs;
    },
  }),
  Wd = rt(cs),
  m0 = me({}, cs, { dataTransfer: 0 }),
  g0 = rt(m0),
  v0 = me({}, El, { relatedTarget: 0 }),
  Ks = rt(v0),
  y0 = me({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  w0 = rt(y0),
  E0 = me({}, ui, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  S0 = rt(E0),
  b0 = me({}, ui, { data: 0 }),
  Vd = rt(b0),
  x0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  C0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  A0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = A0[e]) ? !!t[e] : !1;
}
function dc() {
  return _0;
}
var k0 = me({}, El, {
    key: function (e) {
      if (e.key) {
        var t = x0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = co(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? C0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dc,
    charCode: function (e) {
      return e.type === "keypress" ? co(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? co(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  R0 = rt(k0),
  D0 = me({}, cs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $d = rt(D0),
  T0 = me({}, El, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dc,
  }),
  N0 = rt(T0),
  M0 = me({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  I0 = rt(M0),
  O0 = me({}, cs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  P0 = rt(O0),
  j0 = [9, 13, 27, 32],
  fc = Gt && "CompositionEvent" in window,
  Oi = null;
Gt && "documentMode" in document && (Oi = document.documentMode);
var L0 = Gt && "TextEvent" in window && !Oi,
  Zp = Gt && (!fc || (Oi && 8 < Oi && 11 >= Oi)),
  Qd = String.fromCharCode(32),
  Gd = !1;
function Kp(e, t) {
  switch (e) {
    case "keyup":
      return j0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kr = !1;
function z0(e, t) {
  switch (e) {
    case "compositionend":
      return Xp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gd = !0), Qd);
    case "textInput":
      return (e = t.data), e === Qd && Gd ? null : e;
    default:
      return null;
  }
}
function F0(e, t) {
  if (kr)
    return e === "compositionend" || (!fc && Kp(e, t))
      ? ((e = qp()), (uo = uc = hn = null), (kr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var B0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!B0[e.type] : t === "textarea";
}
function Jp(e, t, n, r) {
  Tp(r),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new cc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pi = null,
  Ji = null;
function U0(e) {
  cm(e, 0);
}
function ds(e) {
  var t = Tr(e);
  if (xp(t)) return e;
}
function H0(e, t) {
  if (e === "change") return t;
}
var em = !1;
if (Gt) {
  var Xs;
  if (Gt) {
    var Js = "oninput" in document;
    if (!Js) {
      var qd = document.createElement("div");
      qd.setAttribute("oninput", "return;"),
        (Js = typeof qd.oninput == "function");
    }
    Xs = Js;
  } else Xs = !1;
  em = Xs && (!document.documentMode || 9 < document.documentMode);
}
function Zd() {
  Pi && (Pi.detachEvent("onpropertychange", tm), (Ji = Pi = null));
}
function tm(e) {
  if (e.propertyName === "value" && ds(Ji)) {
    var t = [];
    Jp(t, Ji, e, ic(e)), Op(U0, t);
  }
}
function W0(e, t, n) {
  e === "focusin"
    ? (Zd(), (Pi = t), (Ji = n), Pi.attachEvent("onpropertychange", tm))
    : e === "focusout" && Zd();
}
function V0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ds(Ji);
}
function $0(e, t) {
  if (e === "click") return ds(t);
}
function Q0(e, t) {
  if (e === "input" || e === "change") return ds(t);
}
function G0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : G0;
function el(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!La.call(t, i) || !St(e[i], t[i])) return !1;
  }
  return !0;
}
function Kd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xd(e, t) {
  var n = Kd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kd(n);
  }
}
function nm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? nm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rm() {
  for (var e = window, t = Co(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Co(e.document);
  }
  return t;
}
function hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Y0(e) {
  var t = rm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    nm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && hc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Xd(n, l));
        var o = Xd(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var q0 = Gt && "documentMode" in document && 11 >= document.documentMode,
  Rr = null,
  nu = null,
  ji = null,
  ru = !1;
function Jd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ru ||
    Rr == null ||
    Rr !== Co(r) ||
    ((r = Rr),
    "selectionStart" in r && hc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ji && el(ji, r)) ||
      ((ji = r),
      (r = No(nu, "onSelect")),
      0 < r.length &&
        ((t = new cc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rr))));
}
function Ul(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dr = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd"),
  },
  ea = {},
  im = {};
Gt &&
  ((im = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dr.animationend.animation,
    delete Dr.animationiteration.animation,
    delete Dr.animationstart.animation),
  "TransitionEvent" in window || delete Dr.transitionend.transition);
function fs(e) {
  if (ea[e]) return ea[e];
  if (!Dr[e]) return e;
  var t = Dr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in im) return (ea[e] = t[n]);
  return e;
}
var lm = fs("animationend"),
  om = fs("animationiteration"),
  sm = fs("animationstart"),
  am = fs("transitionend"),
  um = new Map(),
  ef =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, t) {
  um.set(e, t), hr(t, [e]);
}
for (var ta = 0; ta < ef.length; ta++) {
  var na = ef[ta],
    Z0 = na.toLowerCase(),
    K0 = na[0].toUpperCase() + na.slice(1);
  Pn(Z0, "on" + K0);
}
Pn(lm, "onAnimationEnd");
Pn(om, "onAnimationIteration");
Pn(sm, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(am, "onTransitionEnd");
Zr("onMouseEnter", ["mouseout", "mouseover"]);
Zr("onMouseLeave", ["mouseout", "mouseover"]);
Zr("onPointerEnter", ["pointerout", "pointerover"]);
Zr("onPointerLeave", ["pointerout", "pointerover"]);
hr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ti =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  X0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));
function tf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zy(r, t, void 0, e), (e.currentTarget = null);
}
function cm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && i.isPropagationStopped())) break e;
          tf(i, s, u), (l = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && i.isPropagationStopped())
          )
            break e;
          tf(i, s, u), (l = a);
        }
    }
  }
  if (_o) throw ((e = Xa), (_o = !1), (Xa = null), e);
}
function ie(e, t) {
  var n = t[au];
  n === void 0 && (n = t[au] = new Set());
  var r = e + "__bubble";
  n.has(r) || (dm(t, e, 2, !1), n.add(r));
}
function ra(e, t, n) {
  var r = 0;
  t && (r |= 4), dm(n, e, r, t);
}
var Hl = "_reactListening" + Math.random().toString(36).slice(2);
function tl(e) {
  if (!e[Hl]) {
    (e[Hl] = !0),
      yp.forEach(function (n) {
        n !== "selectionchange" && (X0.has(n) || ra(n, !1, e), ra(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hl] || ((t[Hl] = !0), ra("selectionchange", !1, t));
  }
}
function dm(e, t, n, r) {
  switch (Yp(t)) {
    case 1:
      var i = f0;
      break;
    case 4:
      i = h0;
      break;
    default:
      i = ac;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ka ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ia(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = qn(s)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = l = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Op(function () {
    var u = l,
      c = ic(n),
      f = [];
    e: {
      var d = um.get(e);
      if (d !== void 0) {
        var h = cc,
          v = e;
        switch (e) {
          case "keypress":
            if (co(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = R0;
            break;
          case "focusin":
            (v = "focus"), (h = Ks);
            break;
          case "focusout":
            (v = "blur"), (h = Ks);
            break;
          case "beforeblur":
          case "afterblur":
            h = Ks;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Wd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = g0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = N0;
            break;
          case lm:
          case om:
          case sm:
            h = w0;
            break;
          case am:
            h = I0;
            break;
          case "scroll":
            h = p0;
            break;
          case "wheel":
            h = P0;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = S0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = $d;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var m = u, E; m !== null; ) {
          E = m;
          var g = E.stateNode;
          if (
            (E.tag === 5 &&
              g !== null &&
              ((E = g),
              p !== null && ((g = qi(m, p)), g != null && y.push(nl(m, g, E)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((d = new h(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== qa &&
            (v = n.relatedTarget || n.fromElement) &&
            (qn(v) || v[Yt]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? qn(v) : null),
              v !== null &&
                ((S = pr(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((y = Wd),
            (g = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = $d),
              (g = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (S = h == null ? d : Tr(h)),
            (E = v == null ? d : Tr(v)),
            (d = new y(g, m + "leave", h, n, c)),
            (d.target = S),
            (d.relatedTarget = E),
            (g = null),
            qn(c) === u &&
              ((y = new y(p, m + "enter", v, n, c)),
              (y.target = E),
              (y.relatedTarget = S),
              (g = y)),
            (S = g),
            h && v)
          )
            t: {
              for (y = h, p = v, m = 0, E = y; E; E = br(E)) m++;
              for (E = 0, g = p; g; g = br(g)) E++;
              for (; 0 < m - E; ) (y = br(y)), m--;
              for (; 0 < E - m; ) (p = br(p)), E--;
              for (; m--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = br(y)), (p = br(p));
              }
              y = null;
            }
          else y = null;
          h !== null && nf(f, d, h, y, !1),
            v !== null && S !== null && nf(f, S, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Tr(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var _ = H0;
        else if (Yd(d))
          if (em) _ = Q0;
          else {
            _ = V0;
            var M = W0;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (_ = $0);
        if (_ && (_ = _(e, u))) {
          Jp(f, _, n, c);
          break e;
        }
        M && M(e, d, u),
          e === "focusout" &&
            (M = d._wrapperState) &&
            M.controlled &&
            d.type === "number" &&
            Va(d, "number", d.value);
      }
      switch (((M = u ? Tr(u) : window), e)) {
        case "focusin":
          (Yd(M) || M.contentEditable === "true") &&
            ((Rr = M), (nu = u), (ji = null));
          break;
        case "focusout":
          ji = nu = Rr = null;
          break;
        case "mousedown":
          ru = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ru = !1), Jd(f, n, c);
          break;
        case "selectionchange":
          if (q0) break;
        case "keydown":
        case "keyup":
          Jd(f, n, c);
      }
      var D;
      if (fc)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        kr
          ? Kp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Zp &&
          n.locale !== "ko" &&
          (kr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && kr && (D = qp())
            : ((hn = c),
              (uc = "value" in hn ? hn.value : hn.textContent),
              (kr = !0))),
        (M = No(u, T)),
        0 < M.length &&
          ((T = new Vd(T, e, null, n, c)),
          f.push({ event: T, listeners: M }),
          D ? (T.data = D) : ((D = Xp(n)), D !== null && (T.data = D)))),
        (D = L0 ? z0(e, n) : F0(e, n)) &&
          ((u = No(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Vd("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = D)));
    }
    cm(f, t);
  });
}
function nl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = qi(e, n)),
      l != null && r.unshift(nl(e, l, i)),
      (l = qi(e, t)),
      l != null && r.push(nl(e, l, i))),
      (e = e.return);
  }
  return r;
}
function br(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nf(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = qi(n, l)), a != null && o.unshift(nl(n, a, s)))
        : i || ((a = qi(n, l)), a != null && o.push(nl(n, a, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var J0 = /\r\n?/g,
  ew = /\u0000|\uFFFD/g;
function rf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      J0,
      `
`
    )
    .replace(ew, "");
}
function Wl(e, t, n) {
  if (((t = rf(t)), rf(e) !== t && n)) throw Error(N(425));
}
function Mo() {}
var iu = null,
  lu = null;
function ou(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var su = typeof setTimeout == "function" ? setTimeout : void 0,
  tw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lf = typeof Promise == "function" ? Promise : void 0,
  nw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof lf < "u"
      ? function (e) {
          return lf.resolve(null).then(e).catch(rw);
        }
      : su;
function rw(e) {
  setTimeout(function () {
    throw e;
  });
}
function la(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Xi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Xi(t);
}
function Sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function of(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ci = Math.random().toString(36).slice(2),
  Tt = "__reactFiber$" + ci,
  rl = "__reactProps$" + ci,
  Yt = "__reactContainer$" + ci,
  au = "__reactEvents$" + ci,
  iw = "__reactListeners$" + ci,
  lw = "__reactHandles$" + ci;
function qn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[Tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = of(e); e !== null; ) {
          if ((n = e[Tt])) return n;
          e = of(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Sl(e) {
  return (
    (e = e[Tt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function hs(e) {
  return e[rl] || null;
}
var uu = [],
  Nr = -1;
function jn(e) {
  return { current: e };
}
function le(e) {
  0 > Nr || ((e.current = uu[Nr]), (uu[Nr] = null), Nr--);
}
function re(e, t) {
  Nr++, (uu[Nr] = e.current), (e.current = t);
}
var Dn = {},
  ze = jn(Dn),
  Qe = jn(!1),
  nr = Dn;
function Kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Io() {
  le(Qe), le(ze);
}
function sf(e, t, n) {
  if (ze.current !== Dn) throw Error(N(168));
  re(ze, t), re(Qe, n);
}
function fm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, Wy(e) || "Unknown", i));
  return me({}, n, r);
}
function Oo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
    (nr = ze.current),
    re(ze, e),
    re(Qe, Qe.current),
    !0
  );
}
function af(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = fm(e, t, nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(Qe),
      le(ze),
      re(ze, e))
    : le(Qe),
    re(Qe, n);
}
var Ut = null,
  ps = !1,
  oa = !1;
function hm(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function ow(e) {
  (ps = !0), hm(e);
}
function Ln() {
  if (!oa && Ut !== null) {
    oa = !0;
    var e = 0,
      t = X;
    try {
      var n = Ut;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (ps = !1);
    } catch (i) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), zp(lc, Ln), i);
    } finally {
      (X = t), (oa = !1);
    }
  }
  return null;
}
var Mr = [],
  Ir = 0,
  Po = null,
  jo = 0,
  lt = [],
  ot = 0,
  rr = null,
  Wt = 1,
  Vt = "";
function Vn(e, t) {
  (Mr[Ir++] = jo), (Mr[Ir++] = Po), (Po = e), (jo = t);
}
function pm(e, t, n) {
  (lt[ot++] = Wt), (lt[ot++] = Vt), (lt[ot++] = rr), (rr = e);
  var r = Wt;
  e = Vt;
  var i = 32 - wt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - wt(t) + i;
  if (30 < l) {
    var o = i - (i % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Wt = (1 << (32 - wt(t) + i)) | (n << i) | r),
      (Vt = l + e);
  } else (Wt = (1 << l) | (n << i) | r), (Vt = e);
}
function pc(e) {
  e.return !== null && (Vn(e, 1), pm(e, 1, 0));
}
function mc(e) {
  for (; e === Po; )
    (Po = Mr[--Ir]), (Mr[Ir] = null), (jo = Mr[--Ir]), (Mr[Ir] = null);
  for (; e === rr; )
    (rr = lt[--ot]),
      (lt[ot] = null),
      (Vt = lt[--ot]),
      (lt[ot] = null),
      (Wt = lt[--ot]),
      (lt[ot] = null);
}
var Je = null,
  Xe = null,
  ae = !1,
  yt = null;
function mm(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Xe = Sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rr !== null ? { id: Wt, overflow: Vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function du(e) {
  if (ae) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!uf(e, t)) {
        if (cu(e)) throw Error(N(418));
        t = Sn(n.nextSibling);
        var r = Je;
        t && uf(e, t)
          ? mm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Je = e));
      }
    } else {
      if (cu(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (Je = e);
    }
  }
}
function cf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function Vl(e) {
  if (e !== Je) return !1;
  if (!ae) return cf(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ou(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (cu(e)) throw (gm(), Error(N(418)));
    for (; t; ) mm(e, t), (t = Sn(t.nextSibling));
  }
  if ((cf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Je ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function gm() {
  for (var e = Xe; e; ) e = Sn(e.nextSibling);
}
function Xr() {
  (Xe = Je = null), (ae = !1);
}
function gc(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var sw = en.ReactCurrentBatchConfig;
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Lo = jn(null),
  zo = null,
  Or = null,
  vc = null;
function yc() {
  vc = Or = zo = null;
}
function wc(e) {
  var t = Lo.current;
  le(Lo), (e._currentValue = t);
}
function fu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vr(e, t) {
  (zo = e),
    (vc = Or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (vc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Or === null)) {
      if (zo === null) throw Error(N(308));
      (Or = e), (zo.dependencies = { lanes: 0, firstContext: e });
    } else Or = Or.next = e;
  return t;
}
var Zn = null;
function Ec(e) {
  Zn === null ? (Zn = [e]) : Zn.push(e);
}
function vm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ec(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    qt(e, r)
  );
}
function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var cn = !1;
function Sc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ym(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      qt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ec(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    qt(e, n)
  );
}
function fo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oc(e, n);
  }
}
function df(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fo(e, t, n, r) {
  var i = e.updateQueue;
  cn = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), o === null ? (l = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== o &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var f = i.baseState;
    (o = 0), (c = u = a = null), (s = l);
    do {
      var d = s.lane,
        h = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            y = s;
          switch (((d = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(h, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(h, f, d) : v),
                d == null)
              )
                break e;
              f = me({}, f, d);
              break e;
            case 2:
              cn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
          (o |= d);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (lr |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function ff(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var wm = new vp.Component().refs;
function hu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ms = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      i = Cn(e),
      l = Qt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = bn(e, l, i)),
      t !== null && (Et(t, e, i, r), fo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      i = Cn(e),
      l = Qt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = bn(e, l, i)),
      t !== null && (Et(t, e, i, r), fo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = Cn(e),
      i = Qt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = bn(e, i, r)),
      t !== null && (Et(t, e, r, n), fo(t, e, r));
  },
};
function hf(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !el(n, r) || !el(i, l)
      : !0
  );
}
function Em(e, t, n) {
  var r = !1,
    i = Dn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = ct(l))
      : ((i = Ge(t) ? nr : ze.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Kr(e, i) : Dn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ms),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function pf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ms.enqueueReplaceState(t, t.state, null);
}
function pu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = wm), Sc(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = ct(l))
    : ((l = Ge(t) ? nr : ze.current), (i.context = Kr(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (hu(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ms.enqueueReplaceState(i, i.state, null),
      Fo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            s === wm && (s = i.refs = {}),
              o === null ? delete s[l] : (s[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function $l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function mf(e) {
  var t = e._init;
  return t(e._payload);
}
function Sm(e) {
  function t(p, m) {
    if (e) {
      var E = p.deletions;
      E === null ? ((p.deletions = [m]), (p.flags |= 16)) : E.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = An(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, m, E) {
    return (
      (p.index = E),
      e
        ? ((E = p.alternate),
          E !== null
            ? ((E = E.index), E < m ? ((p.flags |= 2), m) : E)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, m, E, g) {
    return m === null || m.tag !== 6
      ? ((m = ha(E, p.mode, g)), (m.return = p), m)
      : ((m = i(m, E)), (m.return = p), m);
  }
  function a(p, m, E, g) {
    var _ = E.type;
    return _ === _r
      ? c(p, m, E.props.children, g, E.key)
      : m !== null &&
        (m.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === un &&
            mf(_) === m.type))
      ? ((g = i(m, E.props)), (g.ref = Ei(p, m, E)), (g.return = p), g)
      : ((g = yo(E.type, E.key, E.props, null, p.mode, g)),
        (g.ref = Ei(p, m, E)),
        (g.return = p),
        g);
  }
  function u(p, m, E, g) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== E.containerInfo ||
      m.stateNode.implementation !== E.implementation
      ? ((m = pa(E, p.mode, g)), (m.return = p), m)
      : ((m = i(m, E.children || [])), (m.return = p), m);
  }
  function c(p, m, E, g, _) {
    return m === null || m.tag !== 7
      ? ((m = tr(E, p.mode, g, _)), (m.return = p), m)
      : ((m = i(m, E)), (m.return = p), m);
  }
  function f(p, m, E) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ha("" + m, p.mode, E)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ol:
          return (
            (E = yo(m.type, m.key, m.props, null, p.mode, E)),
            (E.ref = Ei(p, null, m)),
            (E.return = p),
            E
          );
        case Ar:
          return (m = pa(m, p.mode, E)), (m.return = p), m;
        case un:
          var g = m._init;
          return f(p, g(m._payload), E);
      }
      if (Ri(m) || mi(m))
        return (m = tr(m, p.mode, E, null)), (m.return = p), m;
      $l(p, m);
    }
    return null;
  }
  function d(p, m, E, g) {
    var _ = m !== null ? m.key : null;
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return _ !== null ? null : s(p, m, "" + E, g);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ol:
          return E.key === _ ? a(p, m, E, g) : null;
        case Ar:
          return E.key === _ ? u(p, m, E, g) : null;
        case un:
          return (_ = E._init), d(p, m, _(E._payload), g);
      }
      if (Ri(E) || mi(E)) return _ !== null ? null : c(p, m, E, g, null);
      $l(p, E);
    }
    return null;
  }
  function h(p, m, E, g, _) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (p = p.get(E) || null), s(m, p, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ol:
          return (p = p.get(g.key === null ? E : g.key) || null), a(m, p, g, _);
        case Ar:
          return (p = p.get(g.key === null ? E : g.key) || null), u(m, p, g, _);
        case un:
          var M = g._init;
          return h(p, m, E, M(g._payload), _);
      }
      if (Ri(g) || mi(g)) return (p = p.get(E) || null), c(m, p, g, _, null);
      $l(m, g);
    }
    return null;
  }
  function v(p, m, E, g) {
    for (
      var _ = null, M = null, D = m, T = (m = 0), Q = null;
      D !== null && T < E.length;
      T++
    ) {
      D.index > T ? ((Q = D), (D = null)) : (Q = D.sibling);
      var B = d(p, D, E[T], g);
      if (B === null) {
        D === null && (D = Q);
        break;
      }
      e && D && B.alternate === null && t(p, D),
        (m = l(B, m, T)),
        M === null ? (_ = B) : (M.sibling = B),
        (M = B),
        (D = Q);
    }
    if (T === E.length) return n(p, D), ae && Vn(p, T), _;
    if (D === null) {
      for (; T < E.length; T++)
        (D = f(p, E[T], g)),
          D !== null &&
            ((m = l(D, m, T)), M === null ? (_ = D) : (M.sibling = D), (M = D));
      return ae && Vn(p, T), _;
    }
    for (D = r(p, D); T < E.length; T++)
      (Q = h(D, p, T, E[T], g)),
        Q !== null &&
          (e && Q.alternate !== null && D.delete(Q.key === null ? T : Q.key),
          (m = l(Q, m, T)),
          M === null ? (_ = Q) : (M.sibling = Q),
          (M = Q));
    return (
      e &&
        D.forEach(function (ke) {
          return t(p, ke);
        }),
      ae && Vn(p, T),
      _
    );
  }
  function y(p, m, E, g) {
    var _ = mi(E);
    if (typeof _ != "function") throw Error(N(150));
    if (((E = _.call(E)), E == null)) throw Error(N(151));
    for (
      var M = (_ = null), D = m, T = (m = 0), Q = null, B = E.next();
      D !== null && !B.done;
      T++, B = E.next()
    ) {
      D.index > T ? ((Q = D), (D = null)) : (Q = D.sibling);
      var ke = d(p, D, B.value, g);
      if (ke === null) {
        D === null && (D = Q);
        break;
      }
      e && D && ke.alternate === null && t(p, D),
        (m = l(ke, m, T)),
        M === null ? (_ = ke) : (M.sibling = ke),
        (M = ke),
        (D = Q);
    }
    if (B.done) return n(p, D), ae && Vn(p, T), _;
    if (D === null) {
      for (; !B.done; T++, B = E.next())
        (B = f(p, B.value, g)),
          B !== null &&
            ((m = l(B, m, T)), M === null ? (_ = B) : (M.sibling = B), (M = B));
      return ae && Vn(p, T), _;
    }
    for (D = r(p, D); !B.done; T++, B = E.next())
      (B = h(D, p, T, B.value, g)),
        B !== null &&
          (e && B.alternate !== null && D.delete(B.key === null ? T : B.key),
          (m = l(B, m, T)),
          M === null ? (_ = B) : (M.sibling = B),
          (M = B));
    return (
      e &&
        D.forEach(function (te) {
          return t(p, te);
        }),
      ae && Vn(p, T),
      _
    );
  }
  function S(p, m, E, g) {
    if (
      (typeof E == "object" &&
        E !== null &&
        E.type === _r &&
        E.key === null &&
        (E = E.props.children),
      typeof E == "object" && E !== null)
    ) {
      switch (E.$$typeof) {
        case Ol:
          e: {
            for (var _ = E.key, M = m; M !== null; ) {
              if (M.key === _) {
                if (((_ = E.type), _ === _r)) {
                  if (M.tag === 7) {
                    n(p, M.sibling),
                      (m = i(M, E.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  M.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === un &&
                    mf(_) === M.type)
                ) {
                  n(p, M.sibling),
                    (m = i(M, E.props)),
                    (m.ref = Ei(p, M, E)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, M);
                break;
              } else t(p, M);
              M = M.sibling;
            }
            E.type === _r
              ? ((m = tr(E.props.children, p.mode, g, E.key)),
                (m.return = p),
                (p = m))
              : ((g = yo(E.type, E.key, E.props, null, p.mode, g)),
                (g.ref = Ei(p, m, E)),
                (g.return = p),
                (p = g));
          }
          return o(p);
        case Ar:
          e: {
            for (M = E.key; m !== null; ) {
              if (m.key === M)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === E.containerInfo &&
                  m.stateNode.implementation === E.implementation
                ) {
                  n(p, m.sibling),
                    (m = i(m, E.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = pa(E, p.mode, g)), (m.return = p), (p = m);
          }
          return o(p);
        case un:
          return (M = E._init), S(p, m, M(E._payload), g);
      }
      if (Ri(E)) return v(p, m, E, g);
      if (mi(E)) return y(p, m, E, g);
      $l(p, E);
    }
    return (typeof E == "string" && E !== "") || typeof E == "number"
      ? ((E = "" + E),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, E)), (m.return = p), (p = m))
          : (n(p, m), (m = ha(E, p.mode, g)), (m.return = p), (p = m)),
        o(p))
      : n(p, m);
  }
  return S;
}
var Jr = Sm(!0),
  bm = Sm(!1),
  bl = {},
  Mt = jn(bl),
  il = jn(bl),
  ll = jn(bl);
function Kn(e) {
  if (e === bl) throw Error(N(174));
  return e;
}
function bc(e, t) {
  switch ((re(ll, t), re(il, e), re(Mt, bl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qa(t, e));
  }
  le(Mt), re(Mt, t);
}
function ei() {
  le(Mt), le(il), le(ll);
}
function xm(e) {
  Kn(ll.current);
  var t = Kn(Mt.current),
    n = Qa(t, e.type);
  t !== n && (re(il, e), re(Mt, n));
}
function xc(e) {
  il.current === e && (le(Mt), le(il));
}
var fe = jn(0);
function Bo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var sa = [];
function Cc() {
  for (var e = 0; e < sa.length; e++)
    sa[e]._workInProgressVersionPrimary = null;
  sa.length = 0;
}
var ho = en.ReactCurrentDispatcher,
  aa = en.ReactCurrentBatchConfig,
  ir = 0,
  pe = null,
  Ae = null,
  Re = null,
  Uo = !1,
  Li = !1,
  ol = 0,
  aw = 0;
function Pe() {
  throw Error(N(321));
}
function Ac(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function _c(e, t, n, r, i, l) {
  if (
    ((ir = l),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ho.current = e === null || e.memoizedState === null ? fw : hw),
    (e = n(r, i)),
    Li)
  ) {
    l = 0;
    do {
      if (((Li = !1), (ol = 0), 25 <= l)) throw Error(N(301));
      (l += 1),
        (Re = Ae = null),
        (t.updateQueue = null),
        (ho.current = pw),
        (e = n(r, i));
    } while (Li);
  }
  if (
    ((ho.current = Ho),
    (t = Ae !== null && Ae.next !== null),
    (ir = 0),
    (Re = Ae = pe = null),
    (Uo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function kc() {
  var e = ol !== 0;
  return (ol = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (pe.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function dt() {
  if (Ae === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = Re === null ? pe.memoizedState : Re.next;
  if (t !== null) (Re = t), (Ae = e);
  else {
    if (e === null) throw Error(N(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      Re === null ? (pe.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function sl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ua(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Ae,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var s = (o = null),
      a = null,
      u = l;
    do {
      var c = u.lane;
      if ((ir & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (o = r)) : (a = a.next = f),
          (pe.lanes |= c),
          (lr |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (o = r) : (a.next = s),
      St(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (pe.lanes |= l), (lr |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ca(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    St(l, t.memoizedState) || (Ve = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Cm() {}
function Am(e, t) {
  var n = pe,
    r = dt(),
    i = t(),
    l = !St(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (Ve = !0)),
    (r = r.queue),
    Rc(Rm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      al(9, km.bind(null, n, r, i, t), void 0, null),
      De === null)
    )
      throw Error(N(349));
    ir & 30 || _m(n, t, i);
  }
  return i;
}
function _m(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function km(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dm(t) && Tm(e);
}
function Rm(e, t, n) {
  return n(function () {
    Dm(t) && Tm(e);
  });
}
function Dm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Tm(e) {
  var t = qt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function gf(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dw.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function al(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nm() {
  return dt().memoizedState;
}
function po(e, t, n, r) {
  var i = kt();
  (pe.flags |= e),
    (i.memoizedState = al(1 | t, n, void 0, r === void 0 ? null : r));
}
function gs(e, t, n, r) {
  var i = dt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Ae !== null) {
    var o = Ae.memoizedState;
    if (((l = o.destroy), r !== null && Ac(r, o.deps))) {
      i.memoizedState = al(t, n, l, r);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = al(1 | t, n, l, r));
}
function vf(e, t) {
  return po(8390656, 8, e, t);
}
function Rc(e, t) {
  return gs(2048, 8, e, t);
}
function Mm(e, t) {
  return gs(4, 2, e, t);
}
function Im(e, t) {
  return gs(4, 4, e, t);
}
function Om(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), gs(4, 4, Om.bind(null, t, e), n)
  );
}
function Dc() {}
function jm(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ac(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Lm(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ac(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zm(e, t, n) {
  return ir & 21
    ? (St(n, t) || ((n = Up()), (pe.lanes |= n), (lr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function uw(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = aa.transition;
  aa.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (aa.transition = r);
  }
}
function Fm() {
  return dt().memoizedState;
}
function cw(e, t, n) {
  var r = Cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bm(e))
  )
    Um(t, n);
  else if (((n = vm(e, t, n, r)), n !== null)) {
    var i = Be();
    Et(n, e, r, i), Hm(n, t, r);
  }
}
function dw(e, t, n) {
  var r = Cn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bm(e)) Um(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = l(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), St(s, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ec(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = vm(e, t, i, r)),
      n !== null && ((i = Be()), Et(n, e, r, i), Hm(n, t, r));
  }
}
function Bm(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Um(e, t) {
  Li = Uo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oc(e, n);
  }
}
var Ho = {
    readContext: ct,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  fw = {
    readContext: ct,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: vf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        po(4194308, 4, Om.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return po(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return po(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cw.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gf,
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = gf(!1),
        t = e[0];
      return (e = uw.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = kt();
      if (ae) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(N(349));
        ir & 30 || _m(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        vf(Rm.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        al(9, km.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kt(),
        t = De.identifierPrefix;
      if (ae) {
        var n = Vt,
          r = Wt;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ol++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = aw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hw = {
    readContext: ct,
    useCallback: jm,
    useContext: ct,
    useEffect: Rc,
    useImperativeHandle: Pm,
    useInsertionEffect: Mm,
    useLayoutEffect: Im,
    useMemo: Lm,
    useReducer: ua,
    useRef: Nm,
    useState: function () {
      return ua(sl);
    },
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      var t = dt();
      return zm(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ua(sl)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cm,
    useSyncExternalStore: Am,
    useId: Fm,
    unstable_isNewReconciler: !1,
  },
  pw = {
    readContext: ct,
    useCallback: jm,
    useContext: ct,
    useEffect: Rc,
    useImperativeHandle: Pm,
    useInsertionEffect: Mm,
    useLayoutEffect: Im,
    useMemo: Lm,
    useReducer: ca,
    useRef: Nm,
    useState: function () {
      return ca(sl);
    },
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      var t = dt();
      return Ae === null ? (t.memoizedState = e) : zm(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ca(sl)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cm,
    useSyncExternalStore: Am,
    useId: Fm,
    unstable_isNewReconciler: !1,
  };
function ti(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function da(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function mu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mw = typeof WeakMap == "function" ? WeakMap : Map;
function Wm(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vo || ((Vo = !0), (Au = r)), mu(e, t);
    }),
    n
  );
}
function Vm(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        mu(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        mu(e, t),
          typeof r != "function" &&
            (xn === null ? (xn = new Set([this])) : xn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function yf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Dw.bind(null, e, t, n)), t.then(e, e));
}
function wf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ef(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qt(-1, 1)), (t.tag = 2), bn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gw = en.ReactCurrentOwner,
  Ve = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? bm(t, null, n, r) : Jr(t, e.child, n, r);
}
function Sf(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Vr(t, i),
    (r = _c(e, t, n, r, l, i)),
    (n = kc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Zt(e, t, i))
      : (ae && n && pc(t), (t.flags |= 1), Fe(e, t, r, i), t.child)
  );
}
function bf(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Lc(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), $m(e, t, l, r, i))
      : ((e = yo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : el), n(o, r) && e.ref === t.ref)
    )
      return Zt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = An(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $m(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (el(l, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return (t.lanes = e.lanes), Zt(e, t, i);
  }
  return gu(e, t, n, r, i);
}
function Qm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(jr, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(jr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        re(jr, Ke),
        (Ke |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(jr, Ke),
      (Ke |= r);
  return Fe(e, t, i, n), t.child;
}
function Gm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gu(e, t, n, r, i) {
  var l = Ge(n) ? nr : ze.current;
  return (
    (l = Kr(t, l)),
    Vr(t, i),
    (n = _c(e, t, n, r, l, i)),
    (r = kc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Zt(e, t, i))
      : (ae && r && pc(t), (t.flags |= 1), Fe(e, t, n, i), t.child)
  );
}
function xf(e, t, n, r, i) {
  if (Ge(n)) {
    var l = !0;
    Oo(t);
  } else l = !1;
  if ((Vr(t, i), t.stateNode === null))
    mo(e, t), Em(t, n, r), pu(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = Ge(n) ? nr : ze.current), (u = Kr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && pf(t, o, r, u)),
      (cn = !1);
    var d = t.memoizedState;
    (o.state = d),
      Fo(t, r, o, i),
      (a = t.memoizedState),
      s !== r || d !== a || Qe.current || cn
        ? (typeof c == "function" && (hu(t, n, c, r), (a = t.memoizedState)),
          (s = cn || hf(t, n, s, r, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ym(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : mt(t.type, s)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ct(a))
        : ((a = Ge(n) ? nr : ze.current), (a = Kr(t, a)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== f || d !== a) && pf(t, o, r, a)),
      (cn = !1),
      (d = t.memoizedState),
      (o.state = d),
      Fo(t, r, o, i);
    var v = t.memoizedState;
    s !== f || d !== v || Qe.current || cn
      ? (typeof h == "function" && (hu(t, n, h, r), (v = t.memoizedState)),
        (u = cn || hf(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vu(e, t, n, r, l, i);
}
function vu(e, t, n, r, i, l) {
  Gm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && af(t, n, !1), Zt(e, t, l);
  (r = t.stateNode), (gw.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Jr(t, e.child, null, l)), (t.child = Jr(t, null, s, l)))
      : Fe(e, t, s, l),
    (t.memoizedState = r.state),
    i && af(t, n, !0),
    t.child
  );
}
function Ym(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sf(e, t.context, !1),
    bc(e, t.containerInfo);
}
function Cf(e, t, n, r, i) {
  return Xr(), gc(i), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function wu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qm(e, t, n) {
  var r = t.pendingProps,
    i = fe.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    re(fe, i & 1),
    e === null)
  )
    return (
      du(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = ws(o, r, 0, null)),
              (e = tr(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = wu(n)),
              (t.memoizedState = yu),
              e)
            : Tc(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return vw(e, t, o, r, s, i, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = An(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (l = An(s, l)) : ((l = tr(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? wu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = yu),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = An(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Tc(e, t) {
  return (
    (t = ws({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ql(e, t, n, r) {
  return (
    r !== null && gc(r),
    Jr(t, e.child, null, n),
    (e = Tc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vw(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = da(Error(N(422)))), Ql(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = ws({ mode: "visible", children: r.children }, i, 0, null)),
        (l = tr(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Jr(t, e.child, null, o),
        (t.child.memoizedState = wu(o)),
        (t.memoizedState = yu),
        l);
  if (!(t.mode & 1)) return Ql(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(N(419))), (r = da(l, r, void 0)), Ql(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), Ve || s)) {
    if (((r = De), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), qt(e, i), Et(r, e, i, -1));
    }
    return jc(), (r = da(Error(N(421)))), Ql(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Tw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Xe = Sn(i.nextSibling)),
      (Je = t),
      (ae = !0),
      (yt = null),
      e !== null &&
        ((lt[ot++] = Wt),
        (lt[ot++] = Vt),
        (lt[ot++] = rr),
        (Wt = e.id),
        (Vt = e.overflow),
        (rr = t)),
      (t = Tc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Af(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fu(e.return, t, n);
}
function fa(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Zm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((Fe(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Af(e, n, t);
        else if (e.tag === 19) Af(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Bo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fa(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Bo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        fa(t, !0, n, null, l);
        break;
      case "together":
        fa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function mo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (lr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = An(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yw(e, t, n) {
  switch (t.tag) {
    case 3:
      Ym(t), Xr();
      break;
    case 5:
      xm(t);
      break;
    case 1:
      Ge(t.type) && Oo(t);
      break;
    case 4:
      bc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      re(Lo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? qm(e, t, n)
          : (re(fe, fe.current & 1),
            (e = Zt(e, t, n)),
            e !== null ? e.sibling : null);
      re(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Zm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qm(e, t, n);
  }
  return Zt(e, t, n);
}
var Km, Eu, Xm, Jm;
Km = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Eu = function () {};
Xm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Kn(Mt.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Ha(e, i)), (r = Ha(e, r)), (l = []);
        break;
      case "select":
        (i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = $a(e, i)), (r = $a(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mo);
    }
    Ga(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gi.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                s[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Gi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ie("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Jm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Si(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ww(e, t, n) {
  var r = t.pendingProps;
  switch ((mc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Ge(t.type) && Io(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ei(),
        le(Qe),
        le(ze),
        Cc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (Ru(yt), (yt = null)))),
        Eu(e, t),
        je(t),
        null
      );
    case 5:
      xc(t);
      var i = Kn(ll.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return je(t), null;
        }
        if (((e = Kn(Mt.current)), Vl(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Tt] = t), (r[rl] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ti.length; i++) ie(Ti[i], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Id(r, l), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Pd(r, l), ie("invalid", r);
          }
          Ga(n, l), (i = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var s = l[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Gi.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              Pl(r), Od(r, l, !0);
              break;
            case "textarea":
              Pl(r), jd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Mo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _p(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Tt] = t),
            (e[rl] = r),
            Km(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ya(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ti.length; i++) ie(Ti[i], e);
                i = r;
                break;
              case "source":
                ie("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (i = r);
                break;
              case "details":
                ie("toggle", e), (i = r);
                break;
              case "input":
                Id(e, r), (i = Ha(e, r)), ie("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = me({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Pd(e, r), (i = $a(e, r)), ie("invalid", e);
                break;
              default:
                i = r;
            }
            Ga(n, i), (s = i);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Dp(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && kp(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Yi(e, a)
                    : typeof a == "number" && Yi(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Gi.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && ie("scroll", e)
                      : a != null && ec(e, l, a, o));
              }
            switch (n) {
              case "input":
                Pl(e), Od(e, r, !1);
                break;
              case "textarea":
                Pl(e), jd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Br(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Br(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Jm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Kn(ll.current)), Kn(Mt.current), Vl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tt] = t),
            (l = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (le(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Xe !== null && t.mode & 1 && !(t.flags & 128))
          gm(), Xr(), (t.flags |= 98560), (l = !1);
        else if (((l = Vl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(N(317));
            l[Tt] = t;
          } else
            Xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (l = !1);
        } else yt !== null && (Ru(yt), (yt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? _e === 0 && (_e = 3) : jc())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        ei(), Eu(e, t), e === null && tl(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return wc(t.type._context), je(t), null;
    case 17:
      return Ge(t.type) && Io(), je(t), null;
    case 19:
      if ((le(fe), (l = t.memoizedState), l === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) Si(l, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Bo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Si(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            we() > ni &&
            ((t.flags |= 128), (r = !0), Si(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Si(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !ae)
            )
              return je(t), null;
          } else
            2 * we() - l.renderingStartTime > ni &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Si(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = we()),
          (t.sibling = null),
          (n = fe.current),
          re(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Pc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Ew(e, t) {
  switch ((mc(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && Io(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ei(),
        le(Qe),
        le(ze),
        Cc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xc(t), null;
    case 13:
      if (
        (le(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Xr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(fe), null;
    case 4:
      return ei(), null;
    case 10:
      return wc(t.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gl = !1,
  Le = !1,
  Sw = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function Su(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var _f = !1;
function bw(e, t) {
  if (((iu = Do), (e = rm()), hc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = o + i),
                f !== l || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (s = o),
                d === l && ++c === r && (a = o),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (lu = { focusedElem: e, selectionRange: n }, Do = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    S = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : mt(t.type, y),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = "")
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (g) {
          ge(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (v = _f), (_f = !1), v;
}
function zi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && Su(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function vs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function eg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), eg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tt], delete t[rl], delete t[au], delete t[iw], delete t[lw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Mo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xu(e, t, n), e = e.sibling; e !== null; ) xu(e, t, n), (e = e.sibling);
}
function Cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cu(e, t, n), e = e.sibling; e !== null; ) Cu(e, t, n), (e = e.sibling);
}
var Ne = null,
  gt = !1;
function an(e, t, n) {
  for (n = n.child; n !== null; ) ng(e, t, n), (n = n.sibling);
}
function ng(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(us, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Pr(n, t);
    case 6:
      var r = Ne,
        i = gt;
      (Ne = null),
        an(e, t, n),
        (Ne = r),
        (gt = i),
        Ne !== null &&
          (gt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (gt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? la(e.parentNode, n)
              : e.nodeType === 1 && la(e, n),
            Xi(e))
          : la(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = gt),
        (Ne = n.stateNode.containerInfo),
        (gt = !0),
        an(e, t, n),
        (Ne = r),
        (gt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && Su(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      an(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ge(n, t, s);
        }
      an(e, t, n);
      break;
    case 21:
      an(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), an(e, t, n), (Le = r))
        : an(e, t, n);
      break;
    default:
      an(e, t, n);
  }
}
function Rf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sw()),
      t.forEach(function (r) {
        var i = Nw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ne = s.stateNode), (gt = !1);
              break e;
            case 3:
              (Ne = s.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Ne = s.stateNode.containerInfo), (gt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ne === null) throw Error(N(160));
        ng(l, o, i), (Ne = null), (gt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ge(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rg(t, e), (t = t.sibling);
}
function rg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), _t(e), r & 4)) {
        try {
          zi(3, e, e.return), vs(3, e);
        } catch (y) {
          ge(e, e.return, y);
        }
        try {
          zi(5, e, e.return);
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 1:
      pt(t, e), _t(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        _t(e),
        r & 512 && n !== null && Pr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Yi(i, "");
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Cp(i, l),
              Ya(s, o);
            var u = Ya(s, l);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1];
              c === "style"
                ? Dp(i, f)
                : c === "dangerouslySetInnerHTML"
                ? kp(i, f)
                : c === "children"
                ? Yi(i, f)
                : ec(i, c, f, u);
            }
            switch (s) {
              case "input":
                Wa(i, l);
                break;
              case "textarea":
                Ap(i, l);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var h = l.value;
                h != null
                  ? Br(i, !!l.multiple, h, !1)
                  : d !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Br(i, !!l.multiple, l.defaultValue, !0)
                      : Br(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[rl] = l;
          } catch (y) {
            ge(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((pt(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xi(t.containerInfo);
        } catch (y) {
          ge(e, e.return, y);
        }
      break;
    case 4:
      pt(t, e), _t(e);
      break;
    case 13:
      pt(t, e),
        _t(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ic = we())),
        r & 4 && Rf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || c), pt(t, e), (Le = u)) : pt(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (P = e, c = e.child; c !== null; ) {
            for (f = P = c; P !== null; ) {
              switch (((d = P), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zi(4, d, d.return);
                  break;
                case 1:
                  Pr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ge(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Pr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Tf(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (P = h)) : Tf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Rp("display", o)));
              } catch (y) {
                ge(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                ge(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), _t(e), r & 4 && Rf(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Yi(i, ""), (r.flags &= -33));
          var l = kf(e);
          Cu(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = kf(e);
          xu(e, s, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      ge(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xw(e, t, n) {
  (P = e), ig(e);
}
function ig(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P,
      l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Gl;
      if (!o) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || Le;
        s = Gl;
        var u = Le;
        if (((Gl = o), (Le = a) && !u))
          for (P = i; P !== null; )
            (o = P),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Nf(i)
                : a !== null
                ? ((a.return = o), (P = a))
                : Nf(i);
        for (; l !== null; ) (P = l), ig(l), (l = l.sibling);
        (P = i), (Gl = s), (Le = u);
      }
      Df(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (P = l)) : Df(e);
  }
}
function Df(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || vs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && ff(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ff(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Xi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Le || (t.flags & 512 && bu(t));
      } catch (d) {
        ge(t, t.return, d);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Tf(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Nf(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vs(4, t);
          } catch (a) {
            ge(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ge(t, i, a);
            }
          }
          var l = t.return;
          try {
            bu(t);
          } catch (a) {
            ge(t, l, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bu(t);
          } catch (a) {
            ge(t, o, a);
          }
      }
    } catch (a) {
      ge(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (P = s);
      break;
    }
    P = t.return;
  }
}
var Cw = Math.ceil,
  Wo = en.ReactCurrentDispatcher,
  Nc = en.ReactCurrentOwner,
  ut = en.ReactCurrentBatchConfig,
  q = 0,
  De = null,
  be = null,
  Me = 0,
  Ke = 0,
  jr = jn(0),
  _e = 0,
  ul = null,
  lr = 0,
  ys = 0,
  Mc = 0,
  Fi = null,
  We = null,
  Ic = 0,
  ni = 1 / 0,
  Bt = null,
  Vo = !1,
  Au = null,
  xn = null,
  Yl = !1,
  pn = null,
  $o = 0,
  Bi = 0,
  _u = null,
  go = -1,
  vo = 0;
function Be() {
  return q & 6 ? we() : go !== -1 ? go : (go = we());
}
function Cn(e) {
  return e.mode & 1
    ? q & 2 && Me !== 0
      ? Me & -Me
      : sw.transition !== null
      ? (vo === 0 && (vo = Up()), vo)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yp(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Bi) throw ((Bi = 0), (_u = null), Error(N(185)));
  wl(e, n, r),
    (!(q & 2) || e !== De) &&
      (e === De && (!(q & 2) && (ys |= n), _e === 4 && fn(e, Me)),
      Ye(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((ni = we() + 500), ps && Ln()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  s0(e, t);
  var r = Ro(e, e === De ? Me : 0);
  if (r === 0)
    n !== null && Fd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fd(n), t === 1))
      e.tag === 0 ? ow(Mf.bind(null, e)) : hm(Mf.bind(null, e)),
        nw(function () {
          !(q & 6) && Ln();
        }),
        (n = null);
    else {
      switch (Hp(r)) {
        case 1:
          n = lc;
          break;
        case 4:
          n = Fp;
          break;
        case 16:
          n = ko;
          break;
        case 536870912:
          n = Bp;
          break;
        default:
          n = ko;
      }
      n = fg(n, lg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function lg(e, t) {
  if (((go = -1), (vo = 0), q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if ($r() && e.callbackNode !== n) return null;
  var r = Ro(e, e === De ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Qo(e, r);
  else {
    t = r;
    var i = q;
    q |= 2;
    var l = sg();
    (De !== e || Me !== t) && ((Bt = null), (ni = we() + 500), er(e, t));
    do
      try {
        kw();
        break;
      } catch (s) {
        og(e, s);
      }
    while (1);
    yc(),
      (Wo.current = l),
      (q = i),
      be !== null ? (t = 0) : ((De = null), (Me = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ja(e)), i !== 0 && ((r = i), (t = ku(e, i)))), t === 1)
    )
      throw ((n = ul), er(e, 0), fn(e, r), Ye(e, we()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Aw(i) &&
          ((t = Qo(e, r)),
          t === 2 && ((l = Ja(e)), l !== 0 && ((r = l), (t = ku(e, l)))),
          t === 1))
      )
        throw ((n = ul), er(e, 0), fn(e, r), Ye(e, we()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          $n(e, We, Bt);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = Ic + 500 - we()), 10 < t))
          ) {
            if (Ro(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = su($n.bind(null, e, We, Bt), t);
            break;
          }
          $n(e, We, Bt);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - wt(r);
            (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
          }
          if (
            ((r = i),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Cw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = su($n.bind(null, e, We, Bt), r);
            break;
          }
          $n(e, We, Bt);
          break;
        case 5:
          $n(e, We, Bt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ye(e, we()), e.callbackNode === n ? lg.bind(null, e) : null;
}
function ku(e, t) {
  var n = Fi;
  return (
    e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    (e = Qo(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && Ru(t)),
    e
  );
}
function Ru(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function Aw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!St(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~Mc,
      t &= ~ys,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mf(e) {
  if (q & 6) throw Error(N(327));
  $r();
  var t = Ro(e, 0);
  if (!(t & 1)) return Ye(e, we()), null;
  var n = Qo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ja(e);
    r !== 0 && ((t = r), (n = ku(e, r)));
  }
  if (n === 1) throw ((n = ul), er(e, 0), fn(e, t), Ye(e, we()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, We, Bt),
    Ye(e, we()),
    null
  );
}
function Oc(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((ni = we() + 500), ps && Ln());
  }
}
function or(e) {
  pn !== null && pn.tag === 0 && !(q & 6) && $r();
  var t = q;
  q |= 1;
  var n = ut.transition,
    r = X;
  try {
    if (((ut.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (ut.transition = n), (q = t), !(q & 6) && Ln();
  }
}
function Pc() {
  (Ke = jr.current), le(jr);
}
function er(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tw(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((mc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Io();
          break;
        case 3:
          ei(), le(Qe), le(ze), Cc();
          break;
        case 5:
          xc(r);
          break;
        case 4:
          ei();
          break;
        case 13:
          le(fe);
          break;
        case 19:
          le(fe);
          break;
        case 10:
          wc(r.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (be = e = An(e.current, null)),
    (Me = Ke = t),
    (_e = 0),
    (ul = null),
    (Mc = ys = lr = 0),
    (We = Fi = null),
    Zn !== null)
  ) {
    for (t = 0; t < Zn.length; t++)
      if (((n = Zn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Zn = null;
  }
  return e;
}
function og(e, t) {
  do {
    var n = be;
    try {
      if ((yc(), (ho.current = Ho), Uo)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Uo = !1;
      }
      if (
        ((ir = 0),
        (Re = Ae = pe = null),
        (Li = !1),
        (ol = 0),
        (Nc.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (ul = t), (be = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          s = n,
          a = t;
        if (
          ((t = Me),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = wf(o);
          if (h !== null) {
            (h.flags &= -257),
              Ef(h, o, s, l, t),
              h.mode & 1 && yf(l, u, t),
              (t = h),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              yf(l, u, t), jc();
              break e;
            }
            a = Error(N(426));
          }
        } else if (ae && s.mode & 1) {
          var S = wf(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Ef(S, o, s, l, t),
              gc(ti(a, s));
            break e;
          }
        }
        (l = a = ti(a, s)),
          _e !== 4 && (_e = 2),
          Fi === null ? (Fi = [l]) : Fi.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = Wm(l, a, t);
              df(l, p);
              break e;
            case 1:
              s = a;
              var m = l.type,
                E = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (E !== null &&
                    typeof E.componentDidCatch == "function" &&
                    (xn === null || !xn.has(E))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var g = Vm(l, s, t);
                df(l, g);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ug(n);
    } catch (_) {
      (t = _), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function sg() {
  var e = Wo.current;
  return (Wo.current = Ho), e === null ? Ho : e;
}
function jc() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    De === null || (!(lr & 268435455) && !(ys & 268435455)) || fn(De, Me);
}
function Qo(e, t) {
  var n = q;
  q |= 2;
  var r = sg();
  (De !== e || Me !== t) && ((Bt = null), er(e, t));
  do
    try {
      _w();
      break;
    } catch (i) {
      og(e, i);
    }
  while (1);
  if ((yc(), (q = n), (Wo.current = r), be !== null)) throw Error(N(261));
  return (De = null), (Me = 0), _e;
}
function _w() {
  for (; be !== null; ) ag(be);
}
function kw() {
  for (; be !== null && !Xy(); ) ag(be);
}
function ag(e) {
  var t = dg(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? ug(e) : (be = t),
    (Nc.current = null);
}
function ug(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ew(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (be = null);
        return;
      }
    } else if (((n = ww(n, t, Ke)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function $n(e, t, n) {
  var r = X,
    i = ut.transition;
  try {
    (ut.transition = null), (X = 1), Rw(e, t, n, r);
  } finally {
    (ut.transition = i), (X = r);
  }
  return null;
}
function Rw(e, t, n, r) {
  do $r();
  while (pn !== null);
  if (q & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (a0(e, l),
    e === De && ((be = De = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yl ||
      ((Yl = !0),
      fg(ko, function () {
        return $r(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = ut.transition), (ut.transition = null);
    var o = X;
    X = 1;
    var s = q;
    (q |= 4),
      (Nc.current = null),
      bw(e, n),
      rg(n, e),
      Y0(lu),
      (Do = !!iu),
      (lu = iu = null),
      (e.current = n),
      xw(n),
      Jy(),
      (q = s),
      (X = o),
      (ut.transition = l);
  } else e.current = n;
  if (
    (Yl && ((Yl = !1), (pn = e), ($o = i)),
    (l = e.pendingLanes),
    l === 0 && (xn = null),
    n0(n.stateNode),
    Ye(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vo) throw ((Vo = !1), (e = Au), (Au = null), e);
  return (
    $o & 1 && e.tag !== 0 && $r(),
    (l = e.pendingLanes),
    l & 1 ? (e === _u ? Bi++ : ((Bi = 0), (_u = e))) : (Bi = 0),
    Ln(),
    null
  );
}
function $r() {
  if (pn !== null) {
    var e = Hp($o),
      t = ut.transition,
      n = X;
    try {
      if (((ut.transition = null), (X = 16 > e ? 16 : e), pn === null))
        var r = !1;
      else {
        if (((e = pn), (pn = null), ($o = 0), q & 6)) throw Error(N(331));
        var i = q;
        for (q |= 4, P = e.current; P !== null; ) {
          var l = P,
            o = l.child;
          if (P.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(8, c, l);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (P = f);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var d = c.sibling,
                        h = c.return;
                      if ((eg(c), c === u)) {
                        P = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (P = d);
                        break;
                      }
                      P = h;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              P = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (P = o);
          else
            e: for (; P !== null; ) {
              if (((l = P), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zi(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (P = p);
                break e;
              }
              P = l.return;
            }
        }
        var m = e.current;
        for (P = m; P !== null; ) {
          o = P;
          var E = o.child;
          if (o.subtreeFlags & 2064 && E !== null) (E.return = o), (P = E);
          else
            e: for (o = m; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vs(9, s);
                  }
                } catch (_) {
                  ge(s, s.return, _);
                }
              if (s === o) {
                P = null;
                break e;
              }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (P = g);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((q = i), Ln(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(us, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (ut.transition = t);
    }
  }
  return !1;
}
function If(e, t, n) {
  (t = ti(n, t)),
    (t = Wm(e, t, 1)),
    (e = bn(e, t, 1)),
    (t = Be()),
    e !== null && (wl(e, 1, t), Ye(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) If(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        If(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xn === null || !xn.has(r)))
        ) {
          (e = ti(n, e)),
            (e = Vm(t, e, 1)),
            (t = bn(t, e, 1)),
            (e = Be()),
            t !== null && (wl(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Dw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Me & n) === n &&
      (_e === 4 || (_e === 3 && (Me & 130023424) === Me && 500 > we() - Ic)
        ? er(e, 0)
        : (Mc |= n)),
    Ye(e, t);
}
function cg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zl), (zl <<= 1), !(zl & 130023424) && (zl = 4194304))
      : (t = 1));
  var n = Be();
  (e = qt(e, t)), e !== null && (wl(e, t, n), Ye(e, n));
}
function Tw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cg(e, n);
}
function Nw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), cg(e, n);
}
var dg;
dg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), yw(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else (Ve = !1), ae && t.flags & 1048576 && pm(t, jo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      mo(e, t), (e = t.pendingProps);
      var i = Kr(t, ze.current);
      Vr(t, n), (i = _c(null, t, r, e, i, n));
      var l = kc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(r) ? ((l = !0), Oo(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Sc(t),
            (i.updater = ms),
            (t.stateNode = i),
            (i._reactInternals = t),
            pu(t, r, e, n),
            (t = vu(null, t, r, !0, l, n)))
          : ((t.tag = 0), ae && l && pc(t), Fe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (mo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Iw(r)),
          (e = mt(r, e)),
          i)
        ) {
          case 0:
            t = gu(null, t, r, e, n);
            break e;
          case 1:
            t = xf(null, t, r, e, n);
            break e;
          case 11:
            t = Sf(null, t, r, e, n);
            break e;
          case 14:
            t = bf(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        gu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        xf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ym(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          ym(e, t),
          Fo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = ti(Error(N(423)), t)), (t = Cf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ti(Error(N(424)), t)), (t = Cf(e, t, r, n, i));
            break e;
          } else
            for (
              Xe = Sn(t.stateNode.containerInfo.firstChild),
                Je = t,
                ae = !0,
                yt = null,
                n = bm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xr(), r === i)) {
            t = Zt(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xm(t),
        e === null && du(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ou(r, i) ? (o = null) : l !== null && ou(r, l) && (t.flags |= 32),
        Gm(e, t),
        Fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && du(t), null;
    case 13:
      return qm(e, t, n);
    case 4:
      return (
        bc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jr(t, null, r, n)) : Fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        Sf(e, t, r, i, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          re(Lo, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (St(l.value, o)) {
            if (l.children === i.children && !Qe.current) {
              t = Zt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                o = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Qt(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      fu(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  fu(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        Fe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vr(t, n),
        (i = ct(i)),
        (r = r(i)),
        (t.flags |= 1),
        Fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = mt(r, t.pendingProps)),
        (i = mt(r.type, i)),
        bf(e, t, r, i, n)
      );
    case 15:
      return $m(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : mt(r, i)),
        mo(e, t),
        (t.tag = 1),
        Ge(r) ? ((e = !0), Oo(t)) : (e = !1),
        Vr(t, n),
        Em(t, r, i),
        pu(t, r, i, n),
        vu(null, t, r, !0, e, n)
      );
    case 19:
      return Zm(e, t, n);
    case 22:
      return Qm(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function fg(e, t) {
  return zp(e, t);
}
function Mw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new Mw(e, t, n, r);
}
function Lc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Iw(e) {
  if (typeof e == "function") return Lc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nc)) return 11;
    if (e === rc) return 14;
  }
  return 2;
}
function An(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yo(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) Lc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case _r:
        return tr(n.children, i, l, t);
      case tc:
        (o = 8), (i |= 8);
        break;
      case za:
        return (
          (e = st(12, n, t, i | 2)), (e.elementType = za), (e.lanes = l), e
        );
      case Fa:
        return (e = st(13, n, t, i)), (e.elementType = Fa), (e.lanes = l), e;
      case Ba:
        return (e = st(19, n, t, i)), (e.elementType = Ba), (e.lanes = l), e;
      case Sp:
        return ws(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wp:
              o = 10;
              break e;
            case Ep:
              o = 9;
              break e;
            case nc:
              o = 11;
              break e;
            case rc:
              o = 14;
              break e;
            case un:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function tr(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function ws(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Sp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ha(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function pa(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ow(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ys(0)),
    (this.expirationTimes = Ys(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ys(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function zc(e, t, n, r, i, l, o, s, a) {
  return (
    (e = new Ow(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = st(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Sc(l),
    e
  );
}
function Pw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ar,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function hg(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (pr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ge(n)) return fm(e, n, t);
  }
  return t;
}
function pg(e, t, n, r, i, l, o, s, a) {
  return (
    (e = zc(n, r, !0, e, i, l, o, s, a)),
    (e.context = hg(null)),
    (n = e.current),
    (r = Be()),
    (i = Cn(n)),
    (l = Qt(r, i)),
    (l.callback = t ?? null),
    bn(n, l, i),
    (e.current.lanes = i),
    wl(e, i, r),
    Ye(e, r),
    e
  );
}
function Es(e, t, n, r) {
  var i = t.current,
    l = Be(),
    o = Cn(i);
  return (
    (n = hg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qt(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bn(i, t, o)),
    e !== null && (Et(e, i, o, l), fo(e, i, o)),
    o
  );
}
function Go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Of(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fc(e, t) {
  Of(e, t), (e = e.alternate) && Of(e, t);
}
function jw() {
  return null;
}
var mg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bc(e) {
  this._internalRoot = e;
}
Ss.prototype.render = Bc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Es(e, t, null, null);
};
Ss.prototype.unmount = Bc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function () {
      Es(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function Ss(e) {
  this._internalRoot = e;
}
Ss.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $p();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
    dn.splice(n, 0, e), n === 0 && Gp(e);
  }
};
function Uc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function bs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pf() {}
function Lw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Go(o);
        l.call(u);
      };
    }
    var o = pg(t, r, e, 0, null, !1, !1, "", Pf);
    return (
      (e._reactRootContainer = o),
      (e[Yt] = o.current),
      tl(e.nodeType === 8 ? e.parentNode : e),
      or(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Go(a);
      s.call(u);
    };
  }
  var a = zc(e, 0, !1, null, null, !1, !1, "", Pf);
  return (
    (e._reactRootContainer = a),
    (e[Yt] = a.current),
    tl(e.nodeType === 8 ? e.parentNode : e),
    or(function () {
      Es(t, a, n, r);
    }),
    a
  );
}
function xs(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = Go(o);
        s.call(a);
      };
    }
    Es(t, o, e, i);
  } else o = Lw(n, t, e, i, r);
  return Go(o);
}
Wp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Di(t.pendingLanes);
        n !== 0 &&
          (oc(t, n | 1), Ye(t, we()), !(q & 6) && ((ni = we() + 500), Ln()));
      }
      break;
    case 13:
      or(function () {
        var r = qt(e, 1);
        if (r !== null) {
          var i = Be();
          Et(r, e, 1, i);
        }
      }),
        Fc(e, 1);
  }
};
sc = function (e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = Be();
      Et(t, e, 134217728, n);
    }
    Fc(e, 134217728);
  }
};
Vp = function (e) {
  if (e.tag === 13) {
    var t = Cn(e),
      n = qt(e, t);
    if (n !== null) {
      var r = Be();
      Et(n, e, t, r);
    }
    Fc(e, t);
  }
};
$p = function () {
  return X;
};
Qp = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = hs(r);
            if (!i) throw Error(N(90));
            xp(r), Wa(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ap(e, n);
      break;
    case "select":
      (t = n.value), t != null && Br(e, !!n.multiple, t, !1);
  }
};
Mp = Oc;
Ip = or;
var zw = { usingClientEntryPoint: !1, Events: [Sl, Tr, hs, Tp, Np, Oc] },
  bi = {
    findFiberByHostInstance: qn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Fw = {
    bundleType: bi.bundleType,
    version: bi.version,
    rendererPackageName: bi.rendererPackageName,
    rendererConfig: bi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: en.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: bi.findFiberByHostInstance || jw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ql.isDisabled && ql.supportsFiber)
    try {
      (us = ql.inject(Fw)), (Nt = ql);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zw;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uc(t)) throw Error(N(200));
  return Pw(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Uc(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = mg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = zc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Yt] = t.current),
    tl(e.nodeType === 8 ? e.parentNode : e),
    new Bc(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = jp(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return or(e);
};
nt.hydrate = function (e, t, n) {
  if (!bs(t)) throw Error(N(200));
  return xs(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Uc(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    o = mg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = pg(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[Yt] = t.current),
    tl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ss(t);
};
nt.render = function (e, t, n) {
  if (!bs(t)) throw Error(N(200));
  return xs(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!bs(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (or(function () {
        xs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = Oc;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!bs(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return xs(e, t, n, !1, r);
};
nt.version = "18.2.0-next-9e3b772b8-20220608";
function gg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gg);
    } catch (e) {
      console.error(e);
    }
}
gg(), (pp.exports = nt);
var Hc = pp.exports,
  jf = Hc;
(ja.createRoot = jf.createRoot), (ja.hydrateRoot = jf.hydrateRoot);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function se() {
  return (
    (se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    se.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const Lf = "popstate";
function Bw(e) {
  e === void 0 && (e = {});
  function t(i, l) {
    let {
      pathname: o = "/",
      search: s = "",
      hash: a = "",
    } = Pt(i.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      cl(
        "",
        { pathname: o, search: s, hash: a },
        (l.state && l.state.usr) || null,
        (l.state && l.state.key) || "default"
      )
    );
  }
  function n(i, l) {
    let o = i.document.querySelector("base"),
      s = "";
    if (o && o.getAttribute("href")) {
      let a = i.location.href,
        u = a.indexOf("#");
      s = u === -1 ? a : a.slice(0, u);
    }
    return s + "#" + (typeof l == "string" ? l : Tn(l));
  }
  function r(i, l) {
    sr(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(l) +
        ")"
    );
  }
  return Hw(t, n, r, e);
}
function $(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Uw() {
  return Math.random().toString(36).substr(2, 8);
}
function zf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    se(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Pt(t) : t,
      { state: n, key: (t && t.key) || r || Uw() }
    )
  );
}
function Tn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Pt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Hw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    o = i.history,
    s = Se.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(se({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    s = Se.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), a && a({ action: s, location: y.location, delta: p });
  }
  function d(S, p) {
    s = Se.Push;
    let m = cl(y.location, S, p);
    n && n(m, S), (u = c() + 1);
    let E = zf(m, u),
      g = y.createHref(m);
    try {
      o.pushState(E, "", g);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(g);
    }
    l && a && a({ action: s, location: y.location, delta: 1 });
  }
  function h(S, p) {
    s = Se.Replace;
    let m = cl(y.location, S, p);
    n && n(m, S), (u = c());
    let E = zf(m, u),
      g = y.createHref(m);
    o.replaceState(E, "", g),
      l && a && a({ action: s, location: y.location, delta: 0 });
  }
  function v(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof S == "string" ? S : Tn(S);
    return (
      $(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, p)
    );
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Lf, f),
        (a = S),
        () => {
          i.removeEventListener(Lf, f), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: v,
    encodeLocation(S) {
      let p = v(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: h,
    go(S) {
      return o.go(S);
    },
  };
  return y;
}
var ye;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ye || (ye = {}));
const Ww = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Vw(e) {
  return e.index === !0;
}
function Du(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, l) => {
      let o = [...n, l],
        s = typeof i.id == "string" ? i.id : o.join("-");
      if (
        ($(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        $(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Vw(i))
      ) {
        let a = se({}, i, t(i), { id: s });
        return (r[s] = a), a;
      } else {
        let a = se({}, i, t(i), { id: s, children: void 0 });
        return (
          (r[s] = a), i.children && (a.children = Du(i.children, t, o, r)), a
        );
      }
    })
  );
}
function Lr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Pt(t) : t,
    i = Nn(r.pathname || "/", n);
  if (i == null) return null;
  let l = vg(e);
  Qw(l);
  let o = null;
  for (let s = 0; o == null && s < l.length; ++s) o = tE(l[s], iE(i));
  return o;
}
function $w(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function vg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (l, o, s) => {
    let a = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: o,
      route: l,
    };
    a.relativePath.startsWith("/") &&
      ($(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = It([r, a.relativePath]),
      c = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      ($(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      vg(l.children, t, c, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: Jw(u, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, o) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) i(l, o);
      else for (let a of yg(l.path)) i(l, o, a);
    }),
    t
  );
}
function yg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [l, ""] : [l];
  let o = yg(r.join("/")),
    s = [];
  return (
    s.push(...o.map((a) => (a === "" ? l : [l, a].join("/")))),
    i && s.push(...o),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Qw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : eE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Gw = /^:\w+$/,
  Yw = 3,
  qw = 2,
  Zw = 1,
  Kw = 10,
  Xw = -2,
  Ff = (e) => e === "*";
function Jw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ff) && (r += Xw),
    t && (r += qw),
    n
      .filter((i) => !Ff(i))
      .reduce((i, l) => i + (Gw.test(l) ? Yw : l === "" ? Zw : Kw), r)
  );
}
function eE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function tE(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    l = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      a = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = nE(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    l.push({
      params: r,
      pathname: It([i, c.pathname]),
      pathnameBase: aE(It([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (i = It([i, c.pathnameBase]));
  }
  return l;
}
function nE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = rE(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    o = l.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let d = s[f] || "";
        o = l.slice(0, l.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = lE(s[f] || "", c)), u;
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  };
}
function rE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function iE(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      sr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function lE(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      sr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Nn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function oE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Pt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : sE(n, t)) : t,
    search: uE(r),
    hash: cE(i),
  };
}
function sE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ma(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xl(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Cs(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Pt(e))
    : ((i = se({}, e)),
      $(
        !i.pathname || !i.pathname.includes("?"),
        ma("?", "pathname", "search", i)
      ),
      $(
        !i.pathname || !i.pathname.includes("#"),
        ma("#", "pathname", "hash", i)
      ),
      $(!i.search || !i.search.includes("#"), ma("#", "search", "hash", i)));
  let l = e === "" || i.pathname === "",
    o = l ? "/" : i.pathname,
    s;
  if (r || o == null) s = n;
  else {
    let f = t.length - 1;
    if (o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let a = oE(i, s),
    u = o && o !== "/" && o.endsWith("/"),
    c = (l || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
  aE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  uE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  cE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  dE = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let i = new Headers(r.headers);
    return i.set("Location", t), new Response(null, se({}, r, { headers: i }));
  },
  fE = (e, t) => {
    let n = dE(e, t);
    return n.headers.set("X-Remix-Reload-Document", "true"), n;
  };
class Wc {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function wg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Eg = ["post", "put", "patch", "delete"],
  hE = new Set(Eg),
  pE = ["get", ...Eg],
  mE = new Set(pE),
  gE = new Set([301, 302, 303, 307, 308]),
  vE = new Set([307, 308]),
  ga = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  yE = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Sg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wE = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function EE(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  $(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let x = e.detectErrorBoundary;
    i = (A) => ({ hasErrorBoundary: x(A) });
  } else i = wE;
  let l = {},
    o = Du(e.routes, i, void 0, l),
    s,
    a = e.basename || "/",
    u = se({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    c = null,
    f = new Set(),
    d = null,
    h = null,
    v = null,
    y = e.hydrationData != null,
    S = Lr(o, e.history.location, a),
    p = null;
  if (S == null) {
    let x = it(404, { pathname: e.history.location.pathname }),
      { matches: A, route: R } = Gf(o);
    (S = A), (p = { [R.id]: x });
  }
  let m =
      !S.some((x) => x.route.lazy) &&
      (!S.some((x) => x.route.loader) || e.hydrationData != null),
    E,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: m,
      navigation: ga,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = Se.Pop,
    M = !1,
    D,
    T = !1,
    Q = !1,
    B = [],
    ke = [],
    te = new Map(),
    xt = 0,
    rn = -1,
    ln = new Map(),
    Ze = new Set(),
    Ct = new Map(),
    I = new Map(),
    z = new Map(),
    W = !1;
  function ce() {
    return (
      (c = e.history.listen((x) => {
        let { action: A, location: R, delta: O } = x;
        if (W) {
          W = !1;
          return;
        }
        sr(
          z.size === 0 || O != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let H = xd({
          currentLocation: g.location,
          nextLocation: R,
          historyAction: A,
        });
        if (H && O != null) {
          (W = !0),
            e.history.go(O * -1),
            Nl(H, {
              state: "blocked",
              location: R,
              proceed() {
                Nl(H, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  e.history.go(O);
              },
              reset() {
                let U = new Map(g.blockers);
                U.set(H, xi), ne({ blockers: U });
              },
            });
          return;
        }
        return Un(A, R);
      })),
      g.initialized || Un(Se.Pop, g.location),
      E
    );
  }
  function Ee() {
    c && c(),
      f.clear(),
      D && D.abort(),
      g.fetchers.forEach((x, A) => js(A)),
      g.blockers.forEach((x, A) => bd(A));
  }
  function Er(x) {
    return f.add(x), () => f.delete(x);
  }
  function ne(x) {
    (g = se({}, g, x)), f.forEach((A) => A(g));
  }
  function jt(x, A) {
    var R, O;
    let H =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        vt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((R = x.state) == null ? void 0 : R._isRedirect) !== !0,
      U;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (U = A.actionData)
        : (U = null)
      : H
      ? (U = g.actionData)
      : (U = null);
    let V = A.loaderData
        ? Qf(g.loaderData, A.loaderData, A.matches || [], A.errors)
        : g.loaderData,
      F = g.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((de, Oe) => F.set(Oe, xi)));
    let j =
      M === !0 ||
      (g.navigation.formMethod != null &&
        vt(g.navigation.formMethod) &&
        ((O = x.state) == null ? void 0 : O._isRedirect) !== !0);
    s && ((o = s), (s = void 0)),
      T ||
        _ === Se.Pop ||
        (_ === Se.Push
          ? e.history.push(x, x.state)
          : _ === Se.Replace && e.history.replace(x, x.state)),
      ne(
        se({}, A, {
          actionData: U,
          loaderData: V,
          historyAction: _,
          location: x,
          initialized: !0,
          navigation: ga,
          revalidation: "idle",
          restoreScrollPosition: Ad(x, A.matches || g.matches),
          preventScrollReset: j,
          blockers: F,
        })
      ),
      (_ = Se.Pop),
      (M = !1),
      (T = !1),
      (Q = !1),
      (B = []),
      (ke = []);
  }
  async function At(x, A) {
    if (typeof x == "number") {
      e.history.go(x);
      return;
    }
    let R = Tu(
        g.location,
        g.matches,
        a,
        u.v7_prependBasename,
        x,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative
      ),
      {
        path: O,
        submission: H,
        error: U,
      } = Bf(u.v7_normalizeFormMethod, !1, R, A),
      V = g.location,
      F = cl(g.location, O, A && A.state);
    F = se({}, F, e.history.encodeLocation(F));
    let j = A && A.replace != null ? A.replace : void 0,
      de = Se.Push;
    j === !0
      ? (de = Se.Replace)
      : j === !1 ||
        (H != null &&
          vt(H.formMethod) &&
          H.formAction === g.location.pathname + g.location.search &&
          (de = Se.Replace));
    let Oe =
        A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
      Z = xd({ currentLocation: V, nextLocation: F, historyAction: de });
    if (Z) {
      Nl(Z, {
        state: "blocked",
        location: F,
        proceed() {
          Nl(Z, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            At(x, A);
        },
        reset() {
          let ee = new Map(g.blockers);
          ee.set(Z, xi), ne({ blockers: ee });
        },
      });
      return;
    }
    return await Un(de, F, {
      submission: H,
      pendingError: U,
      preventScrollReset: Oe,
      replace: A && A.replace,
    });
  }
  function Sr() {
    if (
      (Ps(),
      ne({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        Un(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Un(_ || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function Un(x, A, R) {
    D && D.abort(),
      (D = null),
      (_ = x),
      (T = (R && R.startUninterruptedRevalidation) === !0),
      cy(g.location, g.matches),
      (M = (R && R.preventScrollReset) === !0);
    let O = s || o,
      H = R && R.overrideNavigation,
      U = Lr(O, A, a);
    if (!U) {
      let ee = it(404, { pathname: A.pathname }),
        { matches: ve, route: Hn } = Gf(O);
      Ls(), jt(A, { matches: ve, loaderData: {}, errors: { [Hn.id]: ee } });
      return;
    }
    if (
      g.initialized &&
      !Q &&
      AE(g.location, A) &&
      !(R && R.submission && vt(R.submission.formMethod))
    ) {
      jt(A, { matches: U });
      return;
    }
    D = new AbortController();
    let V = Ai(e.history, A, D.signal, R && R.submission),
      F,
      j;
    if (R && R.pendingError) j = { [zr(U).route.id]: R.pendingError };
    else if (R && R.submission && vt(R.submission.formMethod)) {
      let ee = await ry(V, A, R.submission, U, { replace: R.replace });
      if (ee.shortCircuited) return;
      (F = ee.pendingActionData),
        (j = ee.pendingActionError),
        (H = va(A, R.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: de,
      loaderData: Oe,
      errors: Z,
    } = await iy(
      V,
      A,
      U,
      H,
      R && R.submission,
      R && R.fetcherSubmission,
      R && R.replace,
      F,
      j
    );
    de ||
      ((D = null),
      jt(
        A,
        se({ matches: U }, F ? { actionData: F } : {}, {
          loaderData: Oe,
          errors: Z,
        })
      ));
  }
  async function ry(x, A, R, O, H) {
    H === void 0 && (H = {}), Ps();
    let U = DE(A, R);
    ne({ navigation: U });
    let V,
      F = Mu(O, A);
    if (!F.route.action && !F.route.lazy)
      V = {
        type: ye.error,
        error: it(405, {
          method: x.method,
          pathname: A.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((V = await Ci("action", x, F, O, l, i, a)), x.signal.aborted))
      return { shortCircuited: !0 };
    if (Qr(V)) {
      let j;
      return (
        H && H.replace != null
          ? (j = H.replace)
          : (j = V.location === g.location.pathname + g.location.search),
        await fi(g, V, { submission: R, replace: j }),
        { shortCircuited: !0 }
      );
    }
    if (Ui(V)) {
      let j = zr(O, F.route.id);
      return (
        (H && H.replace) !== !0 && (_ = Se.Push),
        { pendingActionData: {}, pendingActionError: { [j.route.id]: V.error } }
      );
    }
    if (Xn(V)) throw it(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: V.data } };
  }
  async function iy(x, A, R, O, H, U, V, F, j) {
    let de = O || va(A, H),
      Oe = H || U || Zf(de),
      Z = s || o,
      [ee, ve] = Uf(e.history, g, R, Oe, A, Q, B, ke, Ct, Ze, Z, a, F, j);
    if (
      (Ls(
        (J) =>
          !(R && R.some((ht) => ht.route.id === J)) ||
          (ee && ee.some((ht) => ht.route.id === J))
      ),
      (rn = ++xt),
      ee.length === 0 && ve.length === 0)
    ) {
      let J = Ed();
      return (
        jt(
          A,
          se(
            { matches: R, loaderData: {}, errors: j || null },
            F ? { actionData: F } : {},
            J ? { fetchers: new Map(g.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!T) {
      ve.forEach((ht) => {
        let sn = g.fetchers.get(ht.key),
          Hs = _i(void 0, sn ? sn.data : void 0);
        g.fetchers.set(ht.key, Hs);
      });
      let J = F || g.actionData;
      ne(
        se(
          { navigation: de },
          J
            ? Object.keys(J).length === 0
              ? { actionData: null }
              : { actionData: J }
            : {},
          ve.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
        )
      );
    }
    ve.forEach((J) => {
      te.has(J.key) && on(J.key), J.controller && te.set(J.key, J.controller);
    });
    let Hn = () => ve.forEach((J) => on(J.key));
    D && D.signal.addEventListener("abort", Hn);
    let {
      results: Wn,
      loaderResults: hi,
      fetcherResults: zs,
    } = await yd(g.matches, R, ee, ve, x);
    if (x.signal.aborted) return { shortCircuited: !0 };
    D && D.signal.removeEventListener("abort", Hn),
      ve.forEach((J) => te.delete(J.key));
    let Lt = Yf(Wn);
    if (Lt) {
      if (Lt.idx >= ee.length) {
        let J = ve[Lt.idx - ee.length].key;
        Ze.add(J);
      }
      return await fi(g, Lt.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: zt, errors: Ml } = $f(g, R, ee, hi, j, ve, zs, I);
    I.forEach((J, ht) => {
      J.subscribe((sn) => {
        (sn || J.done) && I.delete(ht);
      });
    });
    let Fs = Ed(),
      Bs = Sd(rn),
      Us = Fs || Bs || ve.length > 0;
    return se(
      { loaderData: zt, errors: Ml },
      Us ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function vd(x) {
    return g.fetchers.get(x) || yE;
  }
  function ly(x, A, R, O) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    te.has(x) && on(x);
    let H = s || o,
      U = Tu(
        g.location,
        g.matches,
        a,
        u.v7_prependBasename,
        R,
        A,
        O == null ? void 0 : O.relative
      ),
      V = Lr(H, U, a);
    if (!V) {
      Tl(x, A, it(404, { pathname: U }));
      return;
    }
    let {
      path: F,
      submission: j,
      error: de,
    } = Bf(u.v7_normalizeFormMethod, !0, U, O);
    if (de) {
      Tl(x, A, de);
      return;
    }
    let Oe = Mu(V, F);
    if (((M = (O && O.preventScrollReset) === !0), j && vt(j.formMethod))) {
      oy(x, A, F, Oe, V, j);
      return;
    }
    Ct.set(x, { routeId: A, path: F }), sy(x, A, F, Oe, V, j);
  }
  async function oy(x, A, R, O, H, U) {
    if ((Ps(), Ct.delete(x), !O.route.action && !O.route.lazy)) {
      let Ce = it(405, { method: U.formMethod, pathname: R, routeId: A });
      Tl(x, A, Ce);
      return;
    }
    let V = g.fetchers.get(x),
      F = TE(U, V);
    g.fetchers.set(x, F), ne({ fetchers: new Map(g.fetchers) });
    let j = new AbortController(),
      de = Ai(e.history, R, j.signal, U);
    te.set(x, j);
    let Oe = xt,
      Z = await Ci("action", de, O, H, l, i, a);
    if (de.signal.aborted) {
      te.get(x) === j && te.delete(x);
      return;
    }
    if (Qr(Z))
      if ((te.delete(x), rn > Oe)) {
        let Ce = xr(void 0);
        g.fetchers.set(x, Ce), ne({ fetchers: new Map(g.fetchers) });
        return;
      } else {
        Ze.add(x);
        let Ce = _i(U);
        return (
          g.fetchers.set(x, Ce),
          ne({ fetchers: new Map(g.fetchers) }),
          fi(g, Z, { fetcherSubmission: U })
        );
      }
    if (Ui(Z)) {
      Tl(x, A, Z.error);
      return;
    }
    if (Xn(Z)) throw it(400, { type: "defer-action" });
    let ee = g.navigation.location || g.location,
      ve = Ai(e.history, ee, j.signal),
      Hn = s || o,
      Wn =
        g.navigation.state !== "idle"
          ? Lr(Hn, g.navigation.location, a)
          : g.matches;
    $(Wn, "Didn't find any matches after fetcher action");
    let hi = ++xt;
    ln.set(x, hi);
    let zs = _i(U, Z.data);
    g.fetchers.set(x, zs);
    let [Lt, zt] = Uf(
      e.history,
      g,
      Wn,
      U,
      ee,
      Q,
      B,
      ke,
      Ct,
      Ze,
      Hn,
      a,
      { [O.route.id]: Z.data },
      void 0
    );
    zt
      .filter((Ce) => Ce.key !== x)
      .forEach((Ce) => {
        let pi = Ce.key,
          _d = g.fetchers.get(pi),
          fy = _i(void 0, _d ? _d.data : void 0);
        g.fetchers.set(pi, fy),
          te.has(pi) && on(pi),
          Ce.controller && te.set(pi, Ce.controller);
      }),
      ne({ fetchers: new Map(g.fetchers) });
    let Ml = () => zt.forEach((Ce) => on(Ce.key));
    j.signal.addEventListener("abort", Ml);
    let {
      results: Fs,
      loaderResults: Bs,
      fetcherResults: Us,
    } = await yd(g.matches, Wn, Lt, zt, ve);
    if (j.signal.aborted) return;
    j.signal.removeEventListener("abort", Ml),
      ln.delete(x),
      te.delete(x),
      zt.forEach((Ce) => te.delete(Ce.key));
    let J = Yf(Fs);
    if (J) {
      if (J.idx >= Lt.length) {
        let Ce = zt[J.idx - Lt.length].key;
        Ze.add(Ce);
      }
      return fi(g, J.result);
    }
    let { loaderData: ht, errors: sn } = $f(
      g,
      g.matches,
      Lt,
      Bs,
      void 0,
      zt,
      Us,
      I
    );
    if (g.fetchers.has(x)) {
      let Ce = xr(Z.data);
      g.fetchers.set(x, Ce);
    }
    let Hs = Sd(hi);
    g.navigation.state === "loading" && hi > rn
      ? ($(_, "Expected pending action"),
        D && D.abort(),
        jt(g.navigation.location, {
          matches: Wn,
          loaderData: ht,
          errors: sn,
          fetchers: new Map(g.fetchers),
        }))
      : (ne(
          se(
            { errors: sn, loaderData: Qf(g.loaderData, ht, Wn, sn) },
            Hs || zt.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
          )
        ),
        (Q = !1));
  }
  async function sy(x, A, R, O, H, U) {
    let V = g.fetchers.get(x),
      F = _i(U, V ? V.data : void 0);
    g.fetchers.set(x, F), ne({ fetchers: new Map(g.fetchers) });
    let j = new AbortController(),
      de = Ai(e.history, R, j.signal);
    te.set(x, j);
    let Oe = xt,
      Z = await Ci("loader", de, O, H, l, i, a);
    if (
      (Xn(Z) && (Z = (await Cg(Z, de.signal, !0)) || Z),
      te.get(x) === j && te.delete(x),
      de.signal.aborted)
    )
      return;
    if (Qr(Z))
      if (rn > Oe) {
        let ve = xr(void 0);
        g.fetchers.set(x, ve), ne({ fetchers: new Map(g.fetchers) });
        return;
      } else {
        Ze.add(x), await fi(g, Z);
        return;
      }
    if (Ui(Z)) {
      let ve = zr(g.matches, A);
      g.fetchers.delete(x),
        ne({
          fetchers: new Map(g.fetchers),
          errors: { [ve.route.id]: Z.error },
        });
      return;
    }
    $(!Xn(Z), "Unhandled fetcher deferred data");
    let ee = xr(Z.data);
    g.fetchers.set(x, ee), ne({ fetchers: new Map(g.fetchers) });
  }
  async function fi(x, A, R) {
    let {
      submission: O,
      fetcherSubmission: H,
      replace: U,
    } = R === void 0 ? {} : R;
    A.revalidate && (Q = !0);
    let V = cl(x.location, A.location, { _isRedirect: !0 });
    if (($(V, "Expected a location on the redirect navigation"), n)) {
      let ee = !1;
      if (A.reloadDocument) ee = !0;
      else if (Sg.test(A.location)) {
        const ve = e.history.createURL(A.location);
        ee = ve.origin !== t.location.origin || Nn(ve.pathname, a) == null;
      }
      if (ee) {
        U ? t.location.replace(A.location) : t.location.assign(A.location);
        return;
      }
    }
    D = null;
    let F = U === !0 ? Se.Replace : Se.Push,
      { formMethod: j, formAction: de, formEncType: Oe } = x.navigation;
    !O && !H && j && de && Oe && (O = Zf(x.navigation));
    let Z = O || H;
    if (vE.has(A.status) && Z && vt(Z.formMethod))
      await Un(F, V, {
        submission: se({}, Z, { formAction: A.location }),
        preventScrollReset: M,
      });
    else {
      let ee = va(V, O);
      await Un(F, V, {
        overrideNavigation: ee,
        fetcherSubmission: H,
        preventScrollReset: M,
      });
    }
  }
  async function yd(x, A, R, O, H) {
    let U = await Promise.all([
        ...R.map((j) => Ci("loader", H, j, A, l, i, a)),
        ...O.map((j) =>
          j.matches && j.match && j.controller
            ? Ci(
                "loader",
                Ai(e.history, j.path, j.controller.signal),
                j.match,
                j.matches,
                l,
                i,
                a
              )
            : { type: ye.error, error: it(404, { pathname: j.path }) }
        ),
      ]),
      V = U.slice(0, R.length),
      F = U.slice(R.length);
    return (
      await Promise.all([
        qf(
          x,
          R,
          V,
          V.map(() => H.signal),
          !1,
          g.loaderData
        ),
        qf(
          x,
          O.map((j) => j.match),
          F,
          O.map((j) => (j.controller ? j.controller.signal : null)),
          !0
        ),
      ]),
      { results: U, loaderResults: V, fetcherResults: F }
    );
  }
  function Ps() {
    (Q = !0),
      B.push(...Ls()),
      Ct.forEach((x, A) => {
        te.has(A) && (ke.push(A), on(A));
      });
  }
  function Tl(x, A, R) {
    let O = zr(g.matches, A);
    js(x), ne({ errors: { [O.route.id]: R }, fetchers: new Map(g.fetchers) });
  }
  function js(x) {
    let A = g.fetchers.get(x);
    te.has(x) && !(A && A.state === "loading" && ln.has(x)) && on(x),
      Ct.delete(x),
      ln.delete(x),
      Ze.delete(x),
      g.fetchers.delete(x);
  }
  function on(x) {
    let A = te.get(x);
    $(A, "Expected fetch controller: " + x), A.abort(), te.delete(x);
  }
  function wd(x) {
    for (let A of x) {
      let R = vd(A),
        O = xr(R.data);
      g.fetchers.set(A, O);
    }
  }
  function Ed() {
    let x = [],
      A = !1;
    for (let R of Ze) {
      let O = g.fetchers.get(R);
      $(O, "Expected fetcher: " + R),
        O.state === "loading" && (Ze.delete(R), x.push(R), (A = !0));
    }
    return wd(x), A;
  }
  function Sd(x) {
    let A = [];
    for (let [R, O] of ln)
      if (O < x) {
        let H = g.fetchers.get(R);
        $(H, "Expected fetcher: " + R),
          H.state === "loading" && (on(R), ln.delete(R), A.push(R));
      }
    return wd(A), A.length > 0;
  }
  function ay(x, A) {
    let R = g.blockers.get(x) || xi;
    return z.get(x) !== A && z.set(x, A), R;
  }
  function bd(x) {
    g.blockers.delete(x), z.delete(x);
  }
  function Nl(x, A) {
    let R = g.blockers.get(x) || xi;
    $(
      (R.state === "unblocked" && A.state === "blocked") ||
        (R.state === "blocked" && A.state === "blocked") ||
        (R.state === "blocked" && A.state === "proceeding") ||
        (R.state === "blocked" && A.state === "unblocked") ||
        (R.state === "proceeding" && A.state === "unblocked"),
      "Invalid blocker state transition: " + R.state + " -> " + A.state
    );
    let O = new Map(g.blockers);
    O.set(x, A), ne({ blockers: O });
  }
  function xd(x) {
    let { currentLocation: A, nextLocation: R, historyAction: O } = x;
    if (z.size === 0) return;
    z.size > 1 && sr(!1, "A router only supports one blocker at a time");
    let H = Array.from(z.entries()),
      [U, V] = H[H.length - 1],
      F = g.blockers.get(U);
    if (
      !(F && F.state === "proceeding") &&
      V({ currentLocation: A, nextLocation: R, historyAction: O })
    )
      return U;
  }
  function Ls(x) {
    let A = [];
    return (
      I.forEach((R, O) => {
        (!x || x(O)) && (R.cancel(), A.push(O), I.delete(O));
      }),
      A
    );
  }
  function uy(x, A, R) {
    if (((d = x), (v = A), (h = R || null), !y && g.navigation === ga)) {
      y = !0;
      let O = Ad(g.location, g.matches);
      O != null && ne({ restoreScrollPosition: O });
    }
    return () => {
      (d = null), (v = null), (h = null);
    };
  }
  function Cd(x, A) {
    return (
      (h &&
        h(
          x,
          A.map((O) => $w(O, g.loaderData))
        )) ||
      x.key
    );
  }
  function cy(x, A) {
    if (d && v) {
      let R = Cd(x, A);
      d[R] = v();
    }
  }
  function Ad(x, A) {
    if (d) {
      let R = Cd(x, A),
        O = d[R];
      if (typeof O == "number") return O;
    }
    return null;
  }
  function dy(x) {
    (l = {}), (s = Du(x, i, void 0, l));
  }
  return (
    (E = {
      get basename() {
        return a;
      },
      get state() {
        return g;
      },
      get routes() {
        return o;
      },
      initialize: ce,
      subscribe: Er,
      enableScrollRestoration: uy,
      navigate: At,
      fetch: ly,
      revalidate: Sr,
      createHref: (x) => e.history.createHref(x),
      encodeLocation: (x) => e.history.encodeLocation(x),
      getFetcher: vd,
      deleteFetcher: js,
      dispose: Ee,
      getBlocker: ay,
      deleteBlocker: bd,
      _internalFetchControllers: te,
      _internalActiveDeferreds: I,
      _internalSetRoutes: dy,
    }),
    E
  );
}
function SE(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Tu(e, t, n, r, i, l, o) {
  let s, a;
  if (l != null && o !== "path") {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === l)) {
        a = c;
        break;
      }
  } else (s = t), (a = t[t.length - 1]);
  let u = Cs(
    i || ".",
    xl(s).map((c) => c.pathnameBase),
    Nn(e.pathname, n) || e.pathname,
    o === "path"
  );
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      a &&
      a.route.index &&
      !Vc(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : It([n, u.pathname])),
    Tn(u)
  );
}
function Bf(e, t, n, r) {
  if (!r || !SE(r)) return { path: n };
  if (r.formMethod && !RE(r.formMethod))
    return { path: n, error: it(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: it(400, { type: "invalid-body" }) }),
    l = r.formMethod || "get",
    o = e ? l.toUpperCase() : l.toLowerCase(),
    s = xg(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!vt(o)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((h, v) => {
              let [y, S] = v;
              return (
                "" +
                h +
                y +
                "=" +
                S +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!vt(o)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  $(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, u;
  if (r.formData) (a = Nu(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (a = Nu(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (u = Vf(a));
  else if (r.body == null) (a = new URLSearchParams()), (u = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (u = Vf(a));
    } catch {
      return i();
    }
  let c = {
    formMethod: o,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (vt(c.formMethod)) return { path: n, submission: c };
  let f = Pt(n);
  return (
    t && f.search && Vc(f.search) && a.append("index", ""),
    (f.search = "?" + a),
    { path: Tn(f), submission: c }
  );
}
function bE(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Uf(e, t, n, r, i, l, o, s, a, u, c, f, d, h) {
  let v = h ? Object.values(h)[0] : d ? Object.values(d)[0] : void 0,
    y = e.createURL(t.location),
    S = e.createURL(i),
    p = h ? Object.keys(h)[0] : void 0,
    E = bE(n, p).filter((_, M) => {
      if (_.route.lazy) return !0;
      if (_.route.loader == null) return !1;
      if (xE(t.loaderData, t.matches[M], _) || o.some((Q) => Q === _.route.id))
        return !0;
      let D = t.matches[M],
        T = _;
      return Hf(
        _,
        se(
          {
            currentUrl: y,
            currentParams: D.params,
            nextUrl: S,
            nextParams: T.params,
          },
          r,
          {
            actionResult: v,
            defaultShouldRevalidate:
              l ||
              y.pathname + y.search === S.pathname + S.search ||
              y.search !== S.search ||
              bg(D, T),
          }
        )
      );
    }),
    g = [];
  return (
    a.forEach((_, M) => {
      if (!n.some((ke) => ke.route.id === _.routeId)) return;
      let D = Lr(c, _.path, f);
      if (!D) {
        g.push({
          key: M,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(M),
        Q = Mu(D, _.path),
        B = !1;
      u.has(M)
        ? (B = !1)
        : s.includes(M)
        ? (B = !0)
        : T && T.state !== "idle" && T.data === void 0
        ? (B = l)
        : (B = Hf(
            Q,
            se(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: S,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: v, defaultShouldRevalidate: l }
            )
          )),
        B &&
          g.push({
            key: M,
            routeId: _.routeId,
            path: _.path,
            matches: D,
            match: Q,
            controller: new AbortController(),
          });
    }),
    [E, g]
  );
}
function xE(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function bg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Hf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Wf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  $(i, "No route found in manifest");
  let l = {};
  for (let o in r) {
    let a = i[o] !== void 0 && o !== "hasErrorBoundary";
    sr(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !a && !Ww.has(o) && (l[o] = r[o]);
  }
  Object.assign(i, l), Object.assign(i, se({}, t(i), { lazy: void 0 }));
}
async function Ci(e, t, n, r, i, l, o, s) {
  s === void 0 && (s = {});
  let a,
    u,
    c,
    f = (v) => {
      let y,
        S = new Promise((p, m) => (y = m));
      return (
        (c = () => y()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          v({ request: t, params: n.params, context: s.requestContext }),
          S,
        ])
      );
    };
  try {
    let v = n.route[e];
    if (n.route.lazy)
      if (v) {
        let y,
          S = await Promise.all([
            f(v).catch((p) => {
              y = p;
            }),
            Wf(n.route, l, i),
          ]);
        if (y) throw y;
        u = S[0];
      } else if ((await Wf(n.route, l, i), (v = n.route[e]), v)) u = await f(v);
      else if (e === "action") {
        let y = new URL(t.url),
          S = y.pathname + y.search;
        throw it(405, { method: t.method, pathname: S, routeId: n.route.id });
      } else return { type: ye.data, data: void 0 };
    else if (v) u = await f(v);
    else {
      let y = new URL(t.url),
        S = y.pathname + y.search;
      throw it(404, { pathname: S });
    }
    $(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (v) {
    (a = ye.error), (u = v);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (kE(u)) {
    let v = u.status;
    if (gE.has(v)) {
      let p = u.headers.get("Location");
      if (
        ($(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Sg.test(p))
      )
        p = Tu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, p);
      else if (!s.isStaticRequest) {
        let m = new URL(t.url),
          E = p.startsWith("//") ? new URL(m.protocol + p) : new URL(p),
          g = Nn(E.pathname, o) != null;
        E.origin === m.origin && g && (p = E.pathname + E.search + E.hash);
      }
      if (s.isStaticRequest) throw (u.headers.set("Location", p), u);
      return {
        type: ye.redirect,
        status: v,
        location: p,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (s.isRouteRequest)
      throw { type: a === ye.error ? ye.error : ye.data, response: u };
    let y,
      S = u.headers.get("Content-Type");
    return (
      S && /\bapplication\/json\b/.test(S)
        ? (y = await u.json())
        : (y = await u.text()),
      a === ye.error
        ? { type: a, error: new Wc(v, u.statusText, y), headers: u.headers }
        : { type: ye.data, data: y, statusCode: u.status, headers: u.headers }
    );
  }
  if (a === ye.error) return { type: a, error: u };
  if (_E(u)) {
    var d, h;
    return {
      type: ye.deferred,
      deferredData: u,
      statusCode: (d = u.init) == null ? void 0 : d.status,
      headers:
        ((h = u.init) == null ? void 0 : h.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: ye.data, data: u };
}
function Ai(e, t, n, r) {
  let i = e.createURL(xg(t)).toString(),
    l = { signal: n };
  if (r && vt(r.formMethod)) {
    let { formMethod: o, formEncType: s } = r;
    (l.method = o.toUpperCase()),
      s === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": s })),
          (l.body = JSON.stringify(r.json)))
        : s === "text/plain"
        ? (l.body = r.text)
        : s === "application/x-www-form-urlencoded" && r.formData
        ? (l.body = Nu(r.formData))
        : (l.body = r.formData);
  }
  return new Request(i, l);
}
function Nu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Vf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function CE(e, t, n, r, i) {
  let l = {},
    o = null,
    s,
    a = !1,
    u = {};
  return (
    n.forEach((c, f) => {
      let d = t[f].route.id;
      if (
        ($(!Qr(c), "Cannot handle redirect results in processLoaderData"),
        Ui(c))
      ) {
        let h = zr(e, d),
          v = c.error;
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[h.route.id] == null && (o[h.route.id] = v),
          (l[d] = void 0),
          a || ((a = !0), (s = wg(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        Xn(c)
          ? (i.set(d, c.deferredData), (l[d] = c.deferredData.data))
          : (l[d] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (s = c.statusCode),
          c.headers && (u[d] = c.headers);
    }),
    r && ((o = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: o, statusCode: s || 200, loaderHeaders: u }
  );
}
function $f(e, t, n, r, i, l, o, s) {
  let { loaderData: a, errors: u } = CE(t, n, r, i, s);
  for (let c = 0; c < l.length; c++) {
    let { key: f, match: d, controller: h } = l[c];
    $(
      o !== void 0 && o[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let v = o[c];
    if (!(h && h.signal.aborted))
      if (Ui(v)) {
        let y = zr(e.matches, d == null ? void 0 : d.route.id);
        (u && u[y.route.id]) || (u = se({}, u, { [y.route.id]: v.error })),
          e.fetchers.delete(f);
      } else if (Qr(v)) $(!1, "Unhandled fetcher revalidation redirect");
      else if (Xn(v)) $(!1, "Unhandled fetcher deferred data");
      else {
        let y = xr(v.data);
        e.fetchers.set(f, y);
      }
  }
  return { loaderData: a, errors: u };
}
function Qf(e, t, n, r) {
  let i = se({}, t);
  for (let l of n) {
    let o = l.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && l.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function zr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Gf(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function it(e, t) {
  let { pathname: n, routeId: r, method: i, type: l } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (s =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l === "defer-action"
          ? (s = "defer() is not supported in actions")
          : l === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && n && r
          ? (s =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Wc(e || 500, o, new Error(s), !0)
  );
}
function Yf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Qr(n)) return { result: n, idx: t };
  }
}
function xg(e) {
  let t = typeof e == "string" ? Pt(e) : e;
  return Tn(se({}, t, { hash: "" }));
}
function AE(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Xn(e) {
  return e.type === ye.deferred;
}
function Ui(e) {
  return e.type === ye.error;
}
function Qr(e) {
  return (e && e.type) === ye.redirect;
}
function _E(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function kE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function RE(e) {
  return mE.has(e.toLowerCase());
}
function vt(e) {
  return hE.has(e.toLowerCase());
}
async function qf(e, t, n, r, i, l) {
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      a = t[o];
    if (!a) continue;
    let u = e.find((f) => f.route.id === a.route.id),
      c = u != null && !bg(u, a) && (l && l[a.route.id]) !== void 0;
    if (Xn(s) && (i || c)) {
      let f = r[o];
      $(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Cg(s, f, i).then((d) => {
          d && (n[o] = d || n[o]);
        });
    }
  }
}
async function Cg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ye.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: ye.error, error: i };
      }
    return { type: ye.data, data: e.deferredData.data };
  }
}
function Vc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Mu(e, t) {
  let n = typeof t == "string" ? Pt(t).search : t.search;
  if (e[e.length - 1].route.index && Vc(n || "")) return e[e.length - 1];
  let r = xl(e);
  return r[r.length - 1];
}
function Zf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: l,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function va(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function DE(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function _i(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function TE(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function xr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yo() {
  return (
    (Yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yo.apply(this, arguments)
  );
}
const Cl = k.createContext(null),
  $c = k.createContext(null),
  tn = k.createContext(null),
  As = k.createContext(null),
  bt = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ag = k.createContext(null);
function NE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  di() || $(!1);
  let { basename: r, navigator: i } = k.useContext(tn),
    { hash: l, pathname: o, search: s } = _s(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : It([r, o])),
    i.createHref({ pathname: a, search: s, hash: l })
  );
}
function di() {
  return k.useContext(As) != null;
}
function nn() {
  return di() || $(!1), k.useContext(As).location;
}
function _g(e) {
  k.useContext(tn).static || k.useLayoutEffect(e);
}
function Qc() {
  let { isDataRoute: e } = k.useContext(bt);
  return e ? QE() : ME();
}
function ME() {
  di() || $(!1);
  let e = k.useContext(Cl),
    { basename: t, navigator: n } = k.useContext(tn),
    { matches: r } = k.useContext(bt),
    { pathname: i } = nn(),
    l = JSON.stringify(xl(r).map((a) => a.pathnameBase)),
    o = k.useRef(!1);
  return (
    _g(() => {
      o.current = !0;
    }),
    k.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Cs(a, JSON.parse(l), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : It([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, l, i, e]
    )
  );
}
const kg = k.createContext(null);
function IE() {
  return k.useContext(kg);
}
function OE(e) {
  let t = k.useContext(bt).outlet;
  return t && k.createElement(kg.Provider, { value: e }, t);
}
function PE() {
  let { matches: e } = k.useContext(bt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function _s(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = k.useContext(bt),
    { pathname: i } = nn(),
    l = JSON.stringify(xl(r).map((o) => o.pathnameBase));
  return k.useMemo(() => Cs(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function jE(e, t, n) {
  di() || $(!1);
  let { navigator: r } = k.useContext(tn),
    { matches: i } = k.useContext(bt),
    l = i[i.length - 1],
    o = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let a = nn(),
    u;
  if (t) {
    var c;
    let y = typeof t == "string" ? Pt(t) : t;
    s === "/" || ((c = y.pathname) != null && c.startsWith(s)) || $(!1),
      (u = y);
  } else u = a;
  let f = u.pathname || "/",
    d = s === "/" ? f : f.slice(s.length) || "/",
    h = Lr(e, { pathname: d }),
    v = UE(
      h &&
        h.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: It([
              s,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? s
                : It([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && v
    ? k.createElement(
        As.Provider,
        {
          value: {
            location: Yo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Se.Pop,
          },
        },
        v
      )
    : v;
}
function LE() {
  let e = Tg(),
    t = wg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: i }, n) : null,
    l
  );
}
const zE = k.createElement(LE, null);
class FE extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? k.createElement(
          bt.Provider,
          { value: this.props.routeContext },
          k.createElement(Ag.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function BE(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = k.useContext(Cl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(bt.Provider, { value: t }, r)
  );
}
function UE(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let s = l.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    s >= 0 || $(!1), (l = l.slice(0, Math.min(l.length, s + 1)));
  }
  return l.reduceRight((s, a, u) => {
    let c = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      f = null;
    n && (f = a.route.errorElement || zE);
    let d = t.concat(l.slice(0, u + 1)),
      h = () => {
        let v;
        return (
          c
            ? (v = f)
            : a.route.Component
            ? (v = k.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = s),
          k.createElement(BE, {
            match: a,
            routeContext: { outlet: s, matches: d, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? k.createElement(FE, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: h(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Rg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Rg || {}),
  ar = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ar || {});
function HE(e) {
  let t = k.useContext(Cl);
  return t || $(!1), t;
}
function Dg(e) {
  let t = k.useContext($c);
  return t || $(!1), t;
}
function WE(e) {
  let t = k.useContext(bt);
  return t || $(!1), t;
}
function ks(e) {
  let t = WE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || $(!1), n.route.id;
}
function VE() {
  return ks(ar.UseRouteId);
}
function $E() {
  let e = Dg(ar.UseLoaderData),
    t = ks(ar.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function Tg() {
  var e;
  let t = k.useContext(Ag),
    n = Dg(ar.UseRouteError),
    r = ks(ar.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function QE() {
  let { router: e } = HE(Rg.UseNavigateStable),
    t = ks(ar.UseNavigateStable),
    n = k.useRef(!1);
  return (
    _g(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (i, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Yo({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const GE = "startTransition",
  Kf = Ty[GE];
function YE(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, l] = k.useState(n.state),
    { v7_startTransition: o } = r || {},
    s = k.useCallback(
      (f) => {
        o && Kf ? Kf(() => l(f)) : l(f);
      },
      [l, o]
    );
  k.useLayoutEffect(() => n.subscribe(s), [n, s]);
  let a = k.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (f) => n.navigate(f),
        push: (f, d, h) =>
          n.navigate(f, {
            state: d,
            preventScrollReset: h == null ? void 0 : h.preventScrollReset,
          }),
        replace: (f, d, h) =>
          n.navigate(f, {
            replace: !0,
            state: d,
            preventScrollReset: h == null ? void 0 : h.preventScrollReset,
          }),
      }),
      [n]
    ),
    u = n.basename || "/",
    c = k.useMemo(
      () => ({ router: n, navigator: a, static: !1, basename: u }),
      [n, a, u]
    );
  return k.createElement(
    k.Fragment,
    null,
    k.createElement(
      Cl.Provider,
      { value: c },
      k.createElement(
        $c.Provider,
        { value: i },
        k.createElement(
          KE,
          {
            basename: u,
            location: i.location,
            navigationType: i.historyAction,
            navigator: a,
          },
          i.initialized
            ? k.createElement(qE, { routes: n.routes, state: i })
            : t
        )
      )
    ),
    null
  );
}
function qE(e) {
  let { routes: t, state: n } = e;
  return jE(t, void 0, n);
}
function Xf(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  di() || $(!1);
  let { matches: l } = k.useContext(bt),
    { pathname: o } = nn(),
    s = Qc(),
    a = Cs(
      t,
      xl(l).map((c) => c.pathnameBase),
      o,
      i === "path"
    ),
    u = JSON.stringify(a);
  return (
    k.useEffect(
      () => s(JSON.parse(u), { replace: n, state: r, relative: i }),
      [s, u, i, n, r]
    ),
    null
  );
}
function ZE(e) {
  return OE(e.context);
}
function KE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Se.Pop,
    navigator: l,
    static: o = !1,
  } = e;
  di() && $(!1);
  let s = t.replace(/^\/*/, "/"),
    a = k.useMemo(() => ({ basename: s, navigator: l, static: o }), [s, l, o]);
  typeof r == "string" && (r = Pt(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: h = "default",
    } = r,
    v = k.useMemo(() => {
      let y = Nn(u, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: d, key: h },
            navigationType: i,
          };
    }, [s, u, c, f, d, h, i]);
  return v == null
    ? null
    : k.createElement(
        tn.Provider,
        { value: a },
        k.createElement(As.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function XE(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kt() {
  return (
    (Kt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kt.apply(this, arguments)
  );
}
function Gc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const wo = "get",
  ya = "application/x-www-form-urlencoded";
function Rs(e) {
  return e != null && typeof e.tagName == "string";
}
function JE(e) {
  return Rs(e) && e.tagName.toLowerCase() === "button";
}
function eS(e) {
  return Rs(e) && e.tagName.toLowerCase() === "form";
}
function tS(e) {
  return Rs(e) && e.tagName.toLowerCase() === "input";
}
function nS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !nS(e);
}
let Zl = null;
function iS() {
  if (Zl === null)
    try {
      new FormData(document.createElement("form"), 0), (Zl = !1);
    } catch {
      Zl = !0;
    }
  return Zl;
}
const lS = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wa(e) {
  return e != null && !lS.has(e) ? null : e;
}
function oS(e, t) {
  let n, r, i, l, o;
  if (eS(e)) {
    let s = e.getAttribute("action");
    (r = s ? Nn(s, t) : null),
      (n = e.getAttribute("method") || wo),
      (i = wa(e.getAttribute("enctype")) || ya),
      (l = new FormData(e));
  } else if (JE(e) || (tS(e) && (e.type === "submit" || e.type === "image"))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let a = e.getAttribute("formaction") || s.getAttribute("action");
    if (
      ((r = a ? Nn(a, t) : null),
      (n = e.getAttribute("formmethod") || s.getAttribute("method") || wo),
      (i =
        wa(e.getAttribute("formenctype")) ||
        wa(s.getAttribute("enctype")) ||
        ya),
      (l = new FormData(s, e)),
      !iS())
    ) {
      let { name: u, type: c, value: f } = e;
      if (c === "image") {
        let d = u ? u + "." : "";
        l.append(d + "x", "0"), l.append(d + "y", "0");
      } else u && l.append(u, f);
    }
  } else {
    if (Rs(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = wo), (r = null), (i = ya), (o = e);
  }
  return (
    l && i === "text/plain" && ((o = l), (l = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: l, body: o }
  );
}
const sS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  aS = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  uS = [
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "submit",
    "relative",
    "preventScrollReset",
  ];
function cS(e, t) {
  return EE({
    basename: t == null ? void 0 : t.basename,
    future: Kt({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Bw({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || dS(),
    routes: e,
    mapRouteProperties: XE,
  }).initialize();
}
function dS() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Kt({}, t, { errors: fS(t.errors) })), t;
}
function fS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Wc(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let l = window[i.__subType];
        if (typeof l == "function")
          try {
            let o = new l(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(i.message);
        (l.stack = ""), (n[r] = l);
      }
    } else n[r] = i;
  return n;
}
const hS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  mS = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: l,
        replace: o,
        state: s,
        target: a,
        to: u,
        preventScrollReset: c,
      } = t,
      f = Gc(t, sS),
      { basename: d } = k.useContext(tn),
      h,
      v = !1;
    if (typeof u == "string" && pS.test(u) && ((h = u), hS))
      try {
        let m = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          g = Nn(E.pathname, d);
        E.origin === m.origin && g != null
          ? (u = g + E.search + E.hash)
          : (v = !0);
      } catch {}
    let y = NE(u, { relative: i }),
      S = wS(u, {
        replace: o,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: i,
      });
    function p(m) {
      r && r(m), m.defaultPrevented || S(m);
    }
    return k.createElement(
      "a",
      Kt({}, f, { href: h || y, onClick: v || l ? r : p, ref: n, target: a })
    );
  }),
  ur = k.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: l = "",
        end: o = !1,
        style: s,
        to: a,
        children: u,
      } = t,
      c = Gc(t, aS),
      f = _s(a, { relative: c.relative }),
      d = nn(),
      h = k.useContext($c),
      { navigator: v } = k.useContext(tn),
      y = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname,
      S = d.pathname,
      p =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    i ||
      ((S = S.toLowerCase()),
      (p = p ? p.toLowerCase() : null),
      (y = y.toLowerCase()));
    let m = S === y || (!o && S.startsWith(y) && S.charAt(y.length) === "/"),
      E =
        p != null &&
        (p === y || (!o && p.startsWith(y) && p.charAt(y.length) === "/")),
      g = m ? r : void 0,
      _;
    typeof l == "function"
      ? (_ = l({ isActive: m, isPending: E }))
      : (_ = [l, m ? "active" : null, E ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let M = typeof s == "function" ? s({ isActive: m, isPending: E }) : s;
    return k.createElement(
      mS,
      Kt({}, c, { "aria-current": g, className: _, ref: n, style: M, to: a }),
      typeof u == "function" ? u({ isActive: m, isPending: E }) : u
    );
  }),
  gS = k.forwardRef((e, t) => {
    let n = SS();
    return k.createElement(vS, Kt({}, e, { submit: n, ref: t }));
  }),
  vS = k.forwardRef((e, t) => {
    let {
        reloadDocument: n,
        replace: r,
        state: i,
        method: l = wo,
        action: o,
        onSubmit: s,
        submit: a,
        relative: u,
        preventScrollReset: c,
      } = e,
      f = Gc(e, uS),
      d = l.toLowerCase() === "get" ? "get" : "post",
      h = bS(o, { relative: u }),
      v = (y) => {
        if ((s && s(y), y.defaultPrevented)) return;
        y.preventDefault();
        let S = y.nativeEvent.submitter,
          p = (S == null ? void 0 : S.getAttribute("formmethod")) || l;
        a(S || y.currentTarget, {
          method: p,
          replace: r,
          state: i,
          relative: u,
          preventScrollReset: c,
        });
      };
    return k.createElement(
      "form",
      Kt({ ref: t, method: d, action: h, onSubmit: n ? s : v }, f)
    );
  });
var Iu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Iu || (Iu = {}));
var Jf;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Jf || (Jf = {}));
function yS(e) {
  let t = k.useContext(Cl);
  return t || $(!1), t;
}
function wS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: l,
      relative: o,
    } = t === void 0 ? {} : t,
    s = Qc(),
    a = nn(),
    u = _s(e, { relative: o });
  return k.useCallback(
    (c) => {
      if (rS(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : Tn(a) === Tn(u);
        s(e, { replace: f, state: i, preventScrollReset: l, relative: o });
      }
    },
    [a, s, u, r, i, n, e, l, o]
  );
}
function ES() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
    );
}
function SS() {
  let { router: e } = yS(Iu.UseSubmit),
    { basename: t } = k.useContext(tn),
    n = VE();
  return k.useCallback(
    function (r, i) {
      i === void 0 && (i = {}), ES();
      let { action: l, method: o, encType: s, formData: a, body: u } = oS(r, t);
      e.navigate(i.action || l, {
        preventScrollReset: i.preventScrollReset,
        formData: a,
        body: u,
        formMethod: i.method || o,
        formEncType: i.encType || s,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
      });
    },
    [e, t, n]
  );
}
function bS(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = k.useContext(tn),
    i = k.useContext(bt);
  i || $(!1);
  let [l] = i.matches.slice(-1),
    o = Kt({}, _s(e || ".", { relative: n })),
    s = nn();
  if (e == null && ((o.search = s.search), l.route.index)) {
    let a = new URLSearchParams(o.search);
    a.delete("index"), (o.search = a.toString() ? "?" + a.toString() : "");
  }
  return (
    (!e || e === ".") &&
      l.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : It([r, o.pathname])),
    Tn(o)
  );
}
function Yc(e) {
  return `${xS(e)}/${CS(e)}/${AS(e)} (${_S(e)}) ${RS(e)}:${DS(e)}`;
}
function Ds(e) {
  return e.toString().padStart(2, "0");
}
function xS(e) {
  return e.getFullYear();
}
function CS(e) {
  return Ds(e.getMonth() + 1);
}
function AS(e) {
  return Ds(e.getDate());
}
function _S(e) {
  return kS[e.getDay()];
}
const kS = ["日", "月", "火", "水", "木", "金", "土"];
function RS(e) {
  return Ds(e.getHours());
}
function DS(e) {
  return Ds(e.getMinutes());
}
function Ea({
  activeClasses: e,
  currentSelection: t,
  inactiveClasses: n,
  text: r,
  to: i,
}) {
  const l =
    "flex justify-center items-center gap-1 text-center p-1 basis-1/3 md:-skew-x-12 md:before:w-[50px] before:hidden md:before:block md:before:absolute md:before:skew-x-12 rounded before:rounded relative";
  return i === void 0
    ? w.jsx("h5", {
        className: `${l} border-button text-ku-button before:bg-main-background font-bold ${n}`,
        children: w.jsxs("span", {
          className: "md:skew-x-12",
          children: [r, t ? `：${t}` : null],
        }),
      })
    : w.jsx(ur, {
        to: i,
        className: ({ isActive: o }) =>
          o
            ? `bg-ku-orange before:bg-ku-orange text-white ${l} ${e}`
            : `border-button text-ku-secondary before:bg-main-background ${l} ${n}`,
        children: w.jsxs("h5", {
          className: "md:skew-x-12",
          children: [
            w.jsx("span", { className: "font-bold", children: r }),
            t ? `： ${t}` : null,
          ],
        }),
      });
}
function TS(e) {
  const t = k.useRef(null),
    n = nn(),
    { schoolId: r, schoolName: i, setsumeikaiDate: l, setsumeikaiId: o } = e,
    s = "before:border-[2px] before:border-ku-button before:h-full rounded";
  return (
    k.useEffect(() => {
      if (t.current) {
        const a = t.current.getBoundingClientRect().top,
          u = 100,
          c = window.scrollY,
          f = a + c - u;
        window.scrollTo({ top: f, behavior: "smooth" });
      }
    }, [n]),
    w.jsxs("nav", {
      id: "progressNav",
      className:
        "flex flex-col md:flex-row p-3 gap-1 justify-evenly before:bg-main-background",
      ref: t,
      children: [
        w.jsx(Ea, {
          activeClasses: "before:-left-1.5 before:rounded-e-none before:h-full",
          currentSelection: i,
          inactiveClasses: `before:-left-1.5 before:border-r-0 before:rounded-e-none ${s}`,
          text: "スクール",
          to: "/school_list",
        }),
        w.jsx(Ea, {
          activeClasses: "before:hidden",
          inactiveClasses: "before:hidden",
          currentSelection: l ? Yc(l) : "",
          text: "説明会日付",
          to: r ? `/calendar/${r}/${o}` : void 0,
        }),
        w.jsx(Ea, {
          activeClasses: "before:-right-1 before:rounded-s-none before:h-full",
          inactiveClasses: `before:-right-1 before:border-l-0 before:rounded-s-none ${s}`,
          text: "お申し込み",
          to: o ? `/form/${r}/${o}` : void 0,
        }),
      ],
    })
  );
}
function NS({ currentStep: e, selections: t }) {
  const { schoolId: n, setsumeikaiId: r } = t,
    i =
      "border-button flex justify-center items-center text-ku-secondary font-semibold basis-2/5 md:basis-1/4 rounded text-center p-1 hover:bg-ku-button hover:text-white";
  return e.includes("/school_list")
    ? null
    : e.includes("/calendar")
    ? w.jsx(ur, { to: "/school_list", className: i, children: "スクール変更" })
    : w.jsx(ur, {
        to: `/calendar/${n}/${r}`,
        className: i,
        children: "説明会日変更",
      });
}
function MS({ currentStep: e, selections: t }) {
  const {
      schoolId: n,
      schoolName: r,
      setsumeikaiDate: i,
      setsumeikaiId: l,
    } = t,
    o =
      "bg-ku-orange flex justify-center items-center text-neutral-100 font-semibold p-1 md:basis-1/4 rounded text-center hover:opacity-90",
    s = e.includes("/school_list") && r === "",
    a = e.includes("/calendar") && i === void 0;
  function u(c) {
    (s || a) && c.preventDefault();
  }
  return e.includes("/school_list")
    ? r
      ? w.jsx(ur, {
          to: `/calendar/${n}/${l}`,
          className: s
            ? o.concat(" cursor-not-allowed opacity-80 basis-full")
            : o,
          onClick: (c) => u(c),
          children: `${r}の説明会カレンダー`,
        })
      : null
    : e.includes("/calendar") && i
    ? w.jsx(ur, {
        to: `/form/${n}/${l}`,
        className: a ? o.concat(" cursor-not-allowed opacity-80 basis-2/5") : o,
        onClick: (c) => u(c),
        children: `説明会申し込み: ${Yc(i)}`,
      })
    : null;
}
function IS({ currentStep: e, selections: t }) {
  return w.jsxs("nav", {
    className:
      "z-40 sticky bottom-0 flex justify-between gap-1 py-2 px-3 md:p-2 bg-main-background",
    children: [
      w.jsx(NS, { currentStep: e, selections: t }),
      w.jsx("div", { className: "flex-grow" }),
      w.jsx(MS, { currentStep: e, selections: t }),
    ],
  });
}
function OS({ selections: e, setSelections: t, schools: n }) {
  const { schoolId: r, setsumeikaiId: i } = PE();
  if (e.schoolId === void 0 && r) {
    const l = n.find((o) => o.id === r);
    if (
      l &&
      (t({ ...e, schoolId: l.id, schoolName: l.name }),
      e.setsumeikaiId === void 0 && i)
    ) {
      const o = l.setsumeikais.find((s) => s.id === i);
      o && t({ ...e, setsumeikaiId: o.id, setsumeikaiDate: new Date(o.start) });
    }
  }
}
function PS() {
  const e = $E(),
    t = nn(),
    [n, r] = k.useState({
      schoolName: "",
      schoolId: void 0,
      setsumeikaiDate: void 0,
      setsumeikaiId: void 0,
    });
  return (
    OS({ selections: n, setSelections: r, schools: e }),
    w.jsxs("div", {
      className: "bg-main-background mt-4 md:mx-[5vw]",
      children: [
        w.jsx(TS, { ...n }),
        w.jsx(ZE, { context: { schools: e, selections: n, setSelections: r } }),
        w.jsx(IS, { currentStep: t.pathname, selections: n }),
      ],
    })
  );
}
function jS() {
  const e = Tg();
  return e instanceof Error
    ? w.jsxs("main", {
        id: "error-page",
        className: "bg-main-background text-center text-rose-500",
        children: [
          w.jsx("h1", {
            className: "font-bold text-5xl",
            children:
              "学校のリストは入手できなかった。しばらく待ってからページを更新して再試行してください。",
          }),
          w.jsx("h3", { className: "", children: e.name }),
          w.jsx("i", { children: e.message }),
        ],
      })
    : w.jsx("div", {
        children: "Congrats, you got an error that's not an error!",
      });
}
var Ts,
  L,
  Ng,
  Mg,
  ri,
  Yn,
  eh,
  Ig,
  Og,
  qo = {},
  Pg = [],
  LS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function mn(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function jg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function b(e, t, n) {
  var r,
    i,
    l,
    o = {};
  for (l in t)
    l == "key" ? (r = t[l]) : l == "ref" ? (i = t[l]) : (o[l] = t[l]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? Ts.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
  )
    for (l in e.defaultProps) o[l] === void 0 && (o[l] = e.defaultProps[l]);
  return Eo(e, o, r, i, null);
}
function Eo(e, t, n, r, i) {
  var l = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: i ?? ++Ng,
  };
  return i == null && L.vnode != null && L.vnode(l), l;
}
function Xt() {
  return { current: null };
}
function he(e) {
  return e.children;
}
function zS(e, t, n, r, i) {
  var l;
  for (l in n)
    l === "children" || l === "key" || l in t || Zo(e, l, null, n[l], r);
  for (l in t)
    (i && typeof t[l] != "function") ||
      l === "children" ||
      l === "key" ||
      l === "value" ||
      l === "checked" ||
      n[l] === t[l] ||
      Zo(e, l, t[l], n[l], r);
}
function th(e, t, n) {
  t[0] === "-"
    ? e.setProperty(t, n ?? "")
    : (e[t] =
        n == null ? "" : typeof n != "number" || LS.test(t) ? n : n + "px");
}
function Zo(e, t, n, r, i) {
  var l;
  e: if (t === "style")
    if (typeof n == "string") e.style.cssText = n;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || th(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || th(e.style, t, n[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (l = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + l] = n),
      n
        ? r || e.addEventListener(t, l ? rh : nh, l)
        : e.removeEventListener(t, l ? rh : nh, l);
  else if (t !== "dangerouslySetInnerHTML") {
    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "width" &&
      t !== "height" &&
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t in e
    )
      try {
        e[t] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n == null || (n === !1 && t.indexOf("-") == -1)
        ? e.removeAttribute(t)
        : e.setAttribute(t, n));
  }
}
function nh(e) {
  ri = !0;
  try {
    return this.l[e.type + !1](L.event ? L.event(e) : e);
  } finally {
    ri = !1;
  }
}
function rh(e) {
  ri = !0;
  try {
    return this.l[e.type + !0](L.event ? L.event(e) : e);
  } finally {
    ri = !1;
  }
}
function et(e, t) {
  (this.props = e), (this.context = t);
}
function dl(e, t) {
  if (t == null) return e.__ ? dl(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? dl(e) : null;
}
function Lg(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Lg(e);
  }
}
function FS(e) {
  ri ? setTimeout(e) : Ig(e);
}
function Ou(e) {
  ((!e.__d && (e.__d = !0) && Yn.push(e) && !Ko.__r++) ||
    eh !== L.debounceRendering) &&
    ((eh = L.debounceRendering) || FS)(Ko);
}
function Ko() {
  var e, t, n, r, i, l, o, s;
  for (
    Yn.sort(function (a, u) {
      return a.__v.__b - u.__v.__b;
    });
    (e = Yn.shift());

  )
    e.__d &&
      ((t = Yn.length),
      (r = void 0),
      (i = void 0),
      (o = (l = (n = e).__v).__e),
      (s = n.__P) &&
        ((r = []),
        ((i = mn({}, l)).__v = l.__v + 1),
        qc(
          s,
          l,
          i,
          n.__n,
          s.ownerSVGElement !== void 0,
          l.__h != null ? [o] : null,
          r,
          o ?? dl(l),
          l.__h
        ),
        Hg(r, l),
        l.__e != o && Lg(l)),
      Yn.length > t &&
        Yn.sort(function (a, u) {
          return a.__v.__b - u.__v.__b;
        }));
  Ko.__r = 0;
}
function zg(e, t, n, r, i, l, o, s, a, u) {
  var c,
    f,
    d,
    h,
    v,
    y,
    S,
    p = (r && r.__k) || Pg,
    m = p.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if (
      (h = n.__k[c] =
        (h = t[c]) == null || typeof h == "boolean"
          ? null
          : typeof h == "string" || typeof h == "number" || typeof h == "bigint"
          ? Eo(null, h, null, null, h)
          : Array.isArray(h)
          ? Eo(he, { children: h }, null, null, null)
          : h.__b > 0
          ? Eo(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v)
          : h) != null
    ) {
      if (
        ((h.__ = n),
        (h.__b = n.__b + 1),
        (d = p[c]) === null || (d && h.key == d.key && h.type === d.type))
      )
        p[c] = void 0;
      else
        for (f = 0; f < m; f++) {
          if ((d = p[f]) && h.key == d.key && h.type === d.type) {
            p[f] = void 0;
            break;
          }
          d = null;
        }
      qc(e, h, (d = d || qo), i, l, o, s, a, u),
        (v = h.__e),
        (f = h.ref) &&
          d.ref != f &&
          (S || (S = []),
          d.ref && S.push(d.ref, null, h),
          S.push(f, h.__c || v, h)),
        v != null
          ? (y == null && (y = v),
            typeof h.type == "function" && h.__k === d.__k
              ? (h.__d = a = Fg(h, a, e))
              : (a = Bg(e, h, d, p, v, a)),
            typeof n.type == "function" && (n.__d = a))
          : a && d.__e == a && a.parentNode != e && (a = dl(d));
    }
  for (n.__e = y, c = m; c--; )
    p[c] != null &&
      (typeof n.type == "function" &&
        p[c].__e != null &&
        p[c].__e == n.__d &&
        (n.__d = Ug(r).nextSibling),
      Vg(p[c], p[c]));
  if (S) for (c = 0; c < S.length; c++) Wg(S[c], S[++c], S[++c]);
}
function Fg(e, t, n) {
  for (var r, i = e.__k, l = 0; i && l < i.length; l++)
    (r = i[l]) &&
      ((r.__ = e),
      (t =
        typeof r.type == "function" ? Fg(r, t, n) : Bg(n, r, r, i, r.__e, t)));
  return t;
}
function Xo(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Array.isArray(e)
        ? e.some(function (n) {
            Xo(n, t);
          })
        : t.push(e)),
    t
  );
}
function Bg(e, t, n, r, i, l) {
  var o, s, a;
  if (t.__d !== void 0) (o = t.__d), (t.__d = void 0);
  else if (n == null || i != l || i.parentNode == null)
    e: if (l == null || l.parentNode !== e) e.appendChild(i), (o = null);
    else {
      for (s = l, a = 0; (s = s.nextSibling) && a < r.length; a += 1)
        if (s == i) break e;
      e.insertBefore(i, l), (o = l);
    }
  return o !== void 0 ? o : i.nextSibling;
}
function Ug(e) {
  var t, n, r;
  if (e.type == null || typeof e.type == "string") return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (r = Ug(n))) return r;
  }
  return null;
}
function qc(e, t, n, r, i, l, o, s, a) {
  var u,
    c,
    f,
    d,
    h,
    v,
    y,
    S,
    p,
    m,
    E,
    g,
    _,
    M,
    D,
    T = t.type;
  if (t.constructor !== void 0) return null;
  n.__h != null &&
    ((a = n.__h), (s = t.__e = n.__e), (t.__h = null), (l = [s])),
    (u = L.__b) && u(t);
  try {
    e: if (typeof T == "function") {
      if (
        ((S = t.props),
        (p = (u = T.contextType) && r[u.__c]),
        (m = u ? (p ? p.props.value : u.__) : r),
        n.__c
          ? (y = (c = t.__c = n.__c).__ = c.__E)
          : ("prototype" in T && T.prototype.render
              ? (t.__c = c = new T(S, m))
              : ((t.__c = c = new et(S, m)),
                (c.constructor = T),
                (c.render = US)),
            p && p.sub(c),
            (c.props = S),
            c.state || (c.state = {}),
            (c.context = m),
            (c.__n = r),
            (f = c.__d = !0),
            (c.__h = []),
            (c._sb = [])),
        c.__s == null && (c.__s = c.state),
        T.getDerivedStateFromProps != null &&
          (c.__s == c.state && (c.__s = mn({}, c.__s)),
          mn(c.__s, T.getDerivedStateFromProps(S, c.__s))),
        (d = c.props),
        (h = c.state),
        (c.__v = t),
        f)
      )
        T.getDerivedStateFromProps == null &&
          c.componentWillMount != null &&
          c.componentWillMount(),
          c.componentDidMount != null && c.__h.push(c.componentDidMount);
      else {
        if (
          (T.getDerivedStateFromProps == null &&
            S !== d &&
            c.componentWillReceiveProps != null &&
            c.componentWillReceiveProps(S, m),
          (!c.__e &&
            c.shouldComponentUpdate != null &&
            c.shouldComponentUpdate(S, c.__s, m) === !1) ||
            t.__v === n.__v)
        ) {
          for (
            t.__v !== n.__v && ((c.props = S), (c.state = c.__s), (c.__d = !1)),
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.forEach(function (Q) {
                Q && (Q.__ = t);
              }),
              E = 0;
            E < c._sb.length;
            E++
          )
            c.__h.push(c._sb[E]);
          (c._sb = []), c.__h.length && o.push(c);
          break e;
        }
        c.componentWillUpdate != null && c.componentWillUpdate(S, c.__s, m),
          c.componentDidUpdate != null &&
            c.__h.push(function () {
              c.componentDidUpdate(d, h, v);
            });
      }
      if (
        ((c.context = m),
        (c.props = S),
        (c.__P = e),
        (g = L.__r),
        (_ = 0),
        "prototype" in T && T.prototype.render)
      ) {
        for (
          c.state = c.__s,
            c.__d = !1,
            g && g(t),
            u = c.render(c.props, c.state, c.context),
            M = 0;
          M < c._sb.length;
          M++
        )
          c.__h.push(c._sb[M]);
        c._sb = [];
      } else
        do
          (c.__d = !1),
            g && g(t),
            (u = c.render(c.props, c.state, c.context)),
            (c.state = c.__s);
        while (c.__d && ++_ < 25);
      (c.state = c.__s),
        c.getChildContext != null && (r = mn(mn({}, r), c.getChildContext())),
        f ||
          c.getSnapshotBeforeUpdate == null ||
          (v = c.getSnapshotBeforeUpdate(d, h)),
        (D =
          u != null && u.type === he && u.key == null ? u.props.children : u),
        zg(e, Array.isArray(D) ? D : [D], t, n, r, i, l, o, s, a),
        (c.base = t.__e),
        (t.__h = null),
        c.__h.length && o.push(c),
        y && (c.__E = c.__ = null),
        (c.__e = !1);
    } else
      l == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = BS(n.__e, t, n, r, i, l, o, a));
    (u = L.diffed) && u(t);
  } catch (Q) {
    (t.__v = null),
      (a || l != null) &&
        ((t.__e = s), (t.__h = !!a), (l[l.indexOf(s)] = null)),
      L.__e(Q, t, n);
  }
}
function Hg(e, t) {
  L.__c && L.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        L.__e(r, n.__v);
      }
    });
}
function BS(e, t, n, r, i, l, o, s) {
  var a,
    u,
    c,
    f = n.props,
    d = t.props,
    h = t.type,
    v = 0;
  if ((h === "svg" && (i = !0), l != null)) {
    for (; v < l.length; v++)
      if (
        (a = l[v]) &&
        "setAttribute" in a == !!h &&
        (h ? a.localName === h : a.nodeType === 3)
      ) {
        (e = a), (l[v] = null);
        break;
      }
  }
  if (e == null) {
    if (h === null) return document.createTextNode(d);
    (e = i
      ? document.createElementNS("http://www.w3.org/2000/svg", h)
      : document.createElement(h, d.is && d)),
      (l = null),
      (s = !1);
  }
  if (h === null) f === d || (s && e.data === d) || (e.data = d);
  else {
    if (
      ((l = l && Ts.call(e.childNodes)),
      (u = (f = n.props || qo).dangerouslySetInnerHTML),
      (c = d.dangerouslySetInnerHTML),
      !s)
    ) {
      if (l != null)
        for (f = {}, v = 0; v < e.attributes.length; v++)
          f[e.attributes[v].name] = e.attributes[v].value;
      (c || u) &&
        ((c && ((u && c.__html == u.__html) || c.__html === e.innerHTML)) ||
          (e.innerHTML = (c && c.__html) || ""));
    }
    if ((zS(e, d, f, i, s), c)) t.__k = [];
    else if (
      ((v = t.props.children),
      zg(
        e,
        Array.isArray(v) ? v : [v],
        t,
        n,
        r,
        i && h !== "foreignObject",
        l,
        o,
        l ? l[0] : n.__k && dl(n, 0),
        s
      ),
      l != null)
    )
      for (v = l.length; v--; ) l[v] != null && jg(l[v]);
    s ||
      ("value" in d &&
        (v = d.value) !== void 0 &&
        (v !== e.value ||
          (h === "progress" && !v) ||
          (h === "option" && v !== f.value)) &&
        Zo(e, "value", v, f.value, !1),
      "checked" in d &&
        (v = d.checked) !== void 0 &&
        v !== e.checked &&
        Zo(e, "checked", v, f.checked, !1));
  }
  return e;
}
function Wg(e, t, n) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (r) {
    L.__e(r, n);
  }
}
function Vg(e, t, n) {
  var r, i;
  if (
    (L.unmount && L.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Wg(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (l) {
        L.__e(l, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && Vg(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || jg(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function US(e, t, n) {
  return this.constructor(e, n);
}
function fl(e, t, n) {
  var r, i, l;
  L.__ && L.__(e, t),
    (i = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
    (l = []),
    qc(
      t,
      (e = ((!r && n) || t).__k = b(he, null, [e])),
      i || qo,
      qo,
      t.ownerSVGElement !== void 0,
      !r && n ? [n] : i ? null : t.firstChild ? Ts.call(t.childNodes) : null,
      l,
      !r && n ? n : i ? i.__e : t.firstChild,
      r
    ),
    Hg(l, e);
}
function HS(e, t) {
  var n = {
    __c: (t = "__cC" + Og++),
    __: e,
    Consumer: function (r, i) {
      return r.children(i);
    },
    Provider: function (r) {
      var i, l;
      return (
        this.getChildContext ||
          ((i = []),
          ((l = {})[t] = this),
          (this.getChildContext = function () {
            return l;
          }),
          (this.shouldComponentUpdate = function (o) {
            this.props.value !== o.value &&
              i.some(function (s) {
                (s.__e = !0), Ou(s);
              });
          }),
          (this.sub = function (o) {
            i.push(o);
            var s = o.componentWillUnmount;
            o.componentWillUnmount = function () {
              i.splice(i.indexOf(o), 1), s && s.call(o);
            };
          })),
        r.children
      );
    },
  };
  return (n.Provider.__ = n.Consumer.contextType = n);
}
(Ts = Pg.slice),
  (L = {
    __e: function (e, t, n, r) {
      for (var i, l, o; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((l = i.constructor) &&
                l.getDerivedStateFromError != null &&
                (i.setState(l.getDerivedStateFromError(e)), (o = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, r || {}), (o = i.__d)),
              o)
            )
              return (i.__E = i);
          } catch (s) {
            e = s;
          }
      throw e;
    },
  }),
  (Ng = 0),
  (Mg = function (e) {
    return e != null && e.constructor === void 0;
  }),
  (ri = !1),
  (et.prototype.setState = function (e, t) {
    var n;
    (n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = mn({}, this.state))),
      typeof e == "function" && (e = e(mn({}, n), this.props)),
      e && mn(n, e),
      e != null && this.__v && (t && this._sb.push(t), Ou(this));
  }),
  (et.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Ou(this));
  }),
  (et.prototype.render = he),
  (Yn = []),
  (Ig =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Ko.__r = 0),
  (Og = 0);
var Dt,
  Sa,
  ih,
  $g = [],
  ba = [],
  lh = L.__b,
  oh = L.__r,
  sh = L.diffed,
  ah = L.__c,
  uh = L.unmount;
function WS() {
  for (var e; (e = $g.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(So), e.__H.__h.forEach(Pu), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), L.__e(t, e.__v);
      }
}
(L.__b = function (e) {
  (Dt = null), lh && lh(e);
}),
  (L.__r = function (e) {
    oh && oh(e);
    var t = (Dt = e.__c).__H;
    t &&
      (Sa === Dt
        ? ((t.__h = []),
          (Dt.__h = []),
          t.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.__V = ba), (n.__N = n.i = void 0);
          }))
        : (t.__h.forEach(So), t.__h.forEach(Pu), (t.__h = []))),
      (Sa = Dt);
  }),
  (L.diffed = function (e) {
    sh && sh(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        (($g.push(t) !== 1 && ih === L.requestAnimationFrame) ||
          ((ih = L.requestAnimationFrame) || VS)(WS)),
      t.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i),
          n.__V !== ba && (n.__ = n.__V),
          (n.i = void 0),
          (n.__V = ba);
      })),
      (Sa = Dt = null);
  }),
  (L.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(So),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || Pu(r);
          }));
      } catch (r) {
        t.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (t = []),
          L.__e(r, n.__v);
      }
    }),
      ah && ah(e, t);
  }),
  (L.unmount = function (e) {
    uh && uh(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          So(r);
        } catch (i) {
          t = i;
        }
      }),
      (n.__H = void 0),
      t && L.__e(t, n.__v));
  });
var ch = typeof requestAnimationFrame == "function";
function VS(e) {
  var t,
    n = function () {
      clearTimeout(r), ch && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(n, 100);
  ch && (t = requestAnimationFrame(n));
}
function So(e) {
  var t = Dt,
    n = e.__c;
  typeof n == "function" && ((e.__c = void 0), n()), (Dt = t);
}
function Pu(e) {
  var t = Dt;
  (e.__c = e.__()), (Dt = t);
}
function $S(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function dh(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function fh(e) {
  this.props = e;
}
((fh.prototype = new et()).isPureReactComponent = !0),
  (fh.prototype.shouldComponentUpdate = function (e, t) {
    return dh(this.props, e) || dh(this.state, t);
  });
var hh = L.__b;
L.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    hh && hh(e);
};
var QS = L.__e;
L.__e = function (e, t, n, r) {
  if (e.then) {
    for (var i, l = t; (l = l.__); )
      if ((i = l.__c) && i.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
  }
  QS(e, t, n, r);
};
var ph = L.unmount;
function Qg(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (e.__c.__H = null)),
      (e = $S({}, e)).__c != null &&
        (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return Qg(r, t, n);
        }))),
    e
  );
}
function Gg(e, t, n) {
  return (
    e &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return Gg(r, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.insertBefore(e.__e, e.__d),
        (e.__c.__e = !0),
        (e.__c.__P = n))),
    e
  );
}
function xa() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function Yg(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Kl() {
  (this.u = null), (this.o = null);
}
(L.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), ph && ph(e);
}),
  ((xa.prototype = new et()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var i = Yg(r.__v),
      l = !1,
      o = function () {
        l || ((l = !0), (n.__R = null), i ? i(s) : s());
      };
    n.__R = o;
    var s = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var u = r.state.__a;
            r.__v.__k[0] = Gg(u, u.__c.__P, u.__c.__O);
          }
          var c;
          for (r.setState({ __a: (r.__b = null) }); (c = r.t.pop()); )
            c.forceUpdate();
        }
      },
      a = t.__h === !0;
    r.__u++ || a || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(o, o);
  }),
  (xa.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (xa.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = Qg(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__a && b(he, null, e.fallback);
    return i && (i.__h = null), [b(he, null, t.__a ? null : e.children), i];
  });
var mh = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function GS(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function YS(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    fl(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
          ((t.i = n),
          (t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (r) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            insertBefore: function (r, i) {
              this.childNodes.push(r), t.i.appendChild(r);
            },
            removeChild: function (r) {
              this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                t.i.removeChild(r);
            },
          })),
        fl(b(GS, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function qS(e, t) {
  var n = b(YS, { __v: e, i: t });
  return (n.containerInfo = t), n;
}
((Kl.prototype = new et()).__a = function (e) {
  var t = this,
    n = Yg(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (i) {
      var l = function () {
        t.props.revealOrder ? (r.push(i), mh(t, e, r)) : i();
      };
      n ? n(l) : l();
    }
  );
}),
  (Kl.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = Xo(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (Kl.prototype.componentDidUpdate = Kl.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        mh(e, n, t);
      });
    });
var ZS =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  KS =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  XS = typeof document < "u",
  JS = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/i
        : /fil|che|ra/i
    ).test(e);
  };
(et.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(et.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var gh = L.event;
function eb() {}
function tb() {
  return this.cancelBubble;
}
function nb() {
  return this.defaultPrevented;
}
L.event = function (e) {
  return (
    gh && (e = gh(e)),
    (e.persist = eb),
    (e.isPropagationStopped = tb),
    (e.isDefaultPrevented = nb),
    (e.nativeEvent = e)
  );
};
var vh = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  yh = L.vnode;
L.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if (typeof t == "string") {
    var i = t.indexOf("-") === -1;
    for (var l in ((r = {}), n)) {
      var o = n[l];
      (XS && l === "children" && t === "noscript") ||
        (l === "value" && "defaultValue" in n && o == null) ||
        (l === "defaultValue" && "value" in n && n.value == null
          ? (l = "value")
          : l === "download" && o === !0
          ? (o = "")
          : /ondoubleclick/i.test(l)
          ? (l = "ondblclick")
          : /^onchange(textarea|input)/i.test(l + t) && !JS(n.type)
          ? (l = "oninput")
          : /^onfocus$/i.test(l)
          ? (l = "onfocusin")
          : /^onblur$/i.test(l)
          ? (l = "onfocusout")
          : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(l)
          ? (l = l.toLowerCase())
          : i && KS.test(l)
          ? (l = l.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
          : o === null && (o = void 0),
        /^oninput$/i.test(l) &&
          ((l = l.toLowerCase()), r[l] && (l = "oninputCapture")),
        (r[l] = o));
    }
    t == "select" &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = Xo(n.children).forEach(function (s) {
        s.props.selected = r.value.indexOf(s.props.value) != -1;
      })),
      t == "select" &&
        r.defaultValue != null &&
        (r.value = Xo(n.children).forEach(function (s) {
          s.props.selected = r.multiple
            ? r.defaultValue.indexOf(s.props.value) != -1
            : r.defaultValue == s.props.value;
        })),
      (e.props = r),
      n.class != n.className &&
        ((vh.enumerable = "className" in n),
        n.className != null && (r.class = n.className),
        Object.defineProperty(r, "className", vh));
  }
  (e.$$typeof = ZS), yh && yh(e);
};
var wh = L.__r;
L.__r = function (e) {
  wh && wh(e), e.__c;
};
const qg = [],
  ju = new Map();
function Zc(e) {
  qg.push(e),
    ju.forEach((t) => {
      Kg(t, e);
    });
}
function rb(e) {
  e.isConnected && Zg(e.getRootNode());
}
function Zg(e) {
  let t = ju.get(e);
  if (!t || !t.isConnected) {
    if (((t = e.querySelector("style[data-fullcalendar]")), !t)) {
      (t = document.createElement("style")),
        t.setAttribute("data-fullcalendar", "");
      const n = lb();
      n && (t.nonce = n);
      const r = e === document ? document.head : e,
        i =
          e === document
            ? r.querySelector(
                "script,link[rel=stylesheet],link[as=style],style"
              )
            : r.firstChild;
      r.insertBefore(t, i);
    }
    ju.set(e, t), ib(t);
  }
}
function ib(e) {
  for (const t of qg) Kg(e, t);
}
function Kg(e, t) {
  const { sheet: n } = e,
    r = n.cssRules.length;
  t.split("}").forEach((i, l) => {
    (i = i.trim()), i && n.insertRule(i + "}", r + l);
  });
}
let Ca;
function lb() {
  return Ca === void 0 && (Ca = ob()), Ca;
}
function ob() {
  const e = document.querySelector('meta[name="csp-nonce"]');
  if (e && e.hasAttribute("content")) return e.getAttribute("content");
  const t = document.querySelector("script[nonce]");
  return (t && t.nonce) || "";
}
typeof document < "u" && Zg(document);
var sb =
  ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
Zc(sb);
class Kc {
  constructor(t) {
    (this.drainedOption = t),
      (this.isRunning = !1),
      (this.isDirty = !1),
      (this.pauseDepths = {}),
      (this.timeoutId = 0);
  }
  request(t) {
    (this.isDirty = !0),
      this.isPaused() ||
        (this.clearTimeout(),
        t == null
          ? this.tryDrain()
          : (this.timeoutId = setTimeout(this.tryDrain.bind(this), t)));
  }
  pause(t = "") {
    let { pauseDepths: n } = this;
    (n[t] = (n[t] || 0) + 1), this.clearTimeout();
  }
  resume(t = "", n) {
    let { pauseDepths: r } = this;
    t in r &&
      (n ? delete r[t] : ((r[t] -= 1), r[t] <= 0 && delete r[t]),
      this.tryDrain());
  }
  isPaused() {
    return Object.keys(this.pauseDepths).length;
  }
  tryDrain() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        (this.isDirty = !1), this.drained();
      this.isRunning = !1;
    }
  }
  clear() {
    this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
  }
  clearTimeout() {
    this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0));
  }
  drained() {
    this.drainedOption && this.drainedOption();
  }
}
function ab(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ht(e, t) {
  if (e.closest) return e.closest(t);
  if (!document.documentElement.contains(e)) return null;
  do {
    if (ub(e, t)) return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null && e.nodeType === 1);
  return null;
}
function ub(e, t) {
  return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
}
function cb(e, t) {
  let n = e instanceof HTMLElement ? [e] : e,
    r = [];
  for (let i = 0; i < n.length; i += 1) {
    let l = n[i].querySelectorAll(t);
    for (let o = 0; o < l.length; o += 1) r.push(l[o]);
  }
  return r;
}
const db = /(top|left|right|bottom|width|height)$/i;
function fb(e, t) {
  for (let n in t) Xg(e, n, t[n]);
}
function Xg(e, t, n) {
  n == null
    ? (e.style[t] = "")
    : typeof n == "number" && db.test(t)
    ? (e.style[t] = `${n}px`)
    : (e.style[t] = n);
}
function hb(e) {
  var t, n;
  return (n =
    (t = e.composedPath) === null || t === void 0 ? void 0 : t.call(e)[0]) !==
    null && n !== void 0
    ? n
    : e.target;
}
let Eh = 0;
function _n() {
  return (Eh += 1), "fc-dom-" + Eh;
}
function pb(e, t) {
  return (n) => {
    let r = Ht(n.target, e);
    r && t.call(r, n, r);
  };
}
function Jg(e, t, n, r) {
  let i = pb(n, r);
  return (
    e.addEventListener(t, i),
    () => {
      e.removeEventListener(t, i);
    }
  );
}
function mb(e, t, n, r) {
  let i;
  return Jg(e, "mouseover", t, (l, o) => {
    if (o !== i) {
      (i = o), n(l, o);
      let s = (a) => {
        (i = null), r(a, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
function ev(e) {
  return Object.assign({ onClick: e }, tv(e));
}
function tv(e) {
  return {
    tabIndex: 0,
    onKeyDown(t) {
      (t.key === "Enter" || t.key === " ") && (e(t), t.preventDefault());
    },
  };
}
let Sh = 0;
function mr() {
  return (Sh += 1), String(Sh);
}
function gb(e) {
  let t = [],
    n = [],
    r,
    i;
  for (
    typeof e == "string"
      ? (n = e.split(/\s*,\s*/))
      : typeof e == "function"
      ? (n = [e])
      : Array.isArray(e) && (n = e),
      r = 0;
    r < n.length;
    r += 1
  )
    (i = n[r]),
      typeof i == "string"
        ? t.push(
            i.charAt(0) === "-"
              ? { field: i.substring(1), order: -1 }
              : { field: i, order: 1 }
          )
        : typeof i == "function" && t.push({ func: i });
  return t;
}
function vb(e, t, n) {
  let r, i;
  for (r = 0; r < n.length; r += 1) if (((i = yb(e, t, n[r])), i)) return i;
  return 0;
}
function yb(e, t, n) {
  return n.func ? n.func(e, t) : wb(e[n.field], t[n.field]) * (n.order || 1);
}
function wb(e, t) {
  return !e && !t
    ? 0
    : t == null
    ? -1
    : e == null
    ? 1
    : typeof e == "string" || typeof t == "string"
    ? String(e).localeCompare(String(t))
    : e - t;
}
function Aa(e, t) {
  let n = String(e);
  return "000".substr(0, t - n.length) + n;
}
function Hi(e, t, n) {
  return typeof e == "function"
    ? e(...t)
    : typeof e == "string"
    ? t.reduce((r, i, l) => r.replace("$" + l, i || ""), e)
    : n;
}
function _a(e) {
  return e % 1 === 0;
}
function Eb(e) {
  let t = e.querySelector(".fc-scrollgrid-shrink-frame"),
    n = e.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return (
    e.getBoundingClientRect().width -
    t.getBoundingClientRect().width +
    n.getBoundingClientRect().width
  );
}
const Sb = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function K(e, t) {
  return typeof e == "string"
    ? bb(e)
    : typeof e == "object" && e
    ? bh(e)
    : typeof e == "number"
    ? bh({ [t || "milliseconds"]: e })
    : null;
}
function bb(e) {
  let t = Sb.exec(e);
  if (t) {
    let n = t[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (t[2] ? parseInt(t[2], 10) : 0),
      milliseconds:
        n *
        ((t[3] ? parseInt(t[3], 10) : 0) * 60 * 60 * 1e3 +
          (t[4] ? parseInt(t[4], 10) : 0) * 60 * 1e3 +
          (t[5] ? parseInt(t[5], 10) : 0) * 1e3 +
          (t[6] ? parseInt(t[6], 10) : 0)),
    };
  }
  return null;
}
function bh(e) {
  let t = {
      years: e.years || e.year || 0,
      months: e.months || e.month || 0,
      days: e.days || e.day || 0,
      milliseconds:
        (e.hours || e.hour || 0) * 60 * 60 * 1e3 +
        (e.minutes || e.minute || 0) * 60 * 1e3 +
        (e.seconds || e.second || 0) * 1e3 +
        (e.milliseconds || e.millisecond || e.ms || 0),
    },
    n = e.weeks || e.week;
  return n && ((t.days += n * 7), (t.specifiedWeeks = !0)), t;
}
function xb(e, t) {
  return (
    e.years === t.years &&
    e.months === t.months &&
    e.days === t.days &&
    e.milliseconds === t.milliseconds
  );
}
function Cb(e, t) {
  return {
    years: e.years - t.years,
    months: e.months - t.months,
    days: e.days - t.days,
    milliseconds: e.milliseconds - t.milliseconds,
  };
}
function Ab(e) {
  return Gr(e) / 365;
}
function _b(e) {
  return Gr(e) / 30;
}
function Gr(e) {
  return hl(e) / 864e5;
}
function hl(e) {
  return (
    e.years * (365 * 864e5) +
    e.months * (30 * 864e5) +
    e.days * 864e5 +
    e.milliseconds
  );
}
function Lu(e) {
  let t = e.milliseconds;
  if (t) {
    if (t % 1e3 !== 0) return { unit: "millisecond", value: t };
    if (t % (1e3 * 60) !== 0) return { unit: "second", value: t / 1e3 };
    if (t % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: t / (1e3 * 60) };
    if (t) return { unit: "hour", value: t / (1e3 * 60 * 60) };
  }
  return e.days
    ? e.specifiedWeeks && e.days % 7 === 0
      ? { unit: "week", value: e.days / 7 }
      : { unit: "day", value: e.days }
    : e.months
    ? { unit: "month", value: e.months }
    : e.years
    ? { unit: "year", value: e.years }
    : { unit: "millisecond", value: 0 };
}
function Mn(e, t, n) {
  if (e === t) return !0;
  let r = e.length,
    i;
  if (r !== t.length) return !1;
  for (i = 0; i < r; i += 1)
    if (!(n ? n(e[i], t[i]) : e[i] === t[i])) return !1;
  return !0;
}
const kb = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function xh(e, t) {
  let n = gn(e);
  return (n[2] += t * 7), $e(n);
}
function Te(e, t) {
  let n = gn(e);
  return (n[2] += t), $e(n);
}
function In(e, t) {
  let n = gn(e);
  return (n[6] += t), $e(n);
}
function Rb(e, t) {
  return gr(e, t) / 7;
}
function gr(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Db(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60);
}
function Tb(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60);
}
function Nb(e, t) {
  return (t.valueOf() - e.valueOf()) / 1e3;
}
function Mb(e, t) {
  let n = ue(e),
    r = ue(t);
  return {
    years: 0,
    months: 0,
    days: Math.round(gr(n, r)),
    milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
  };
}
function Ib(e, t) {
  let n = Jo(e, t);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Jo(e, t) {
  return vn(e) === vn(t) ? Math.round(gr(e, t)) : null;
}
function ue(e) {
  return $e([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
}
function Ob(e) {
  return $e([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
  ]);
}
function Pb(e) {
  return $e([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
  ]);
}
function jb(e) {
  return $e([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds(),
  ]);
}
function Lb(e, t, n) {
  let r = e.getUTCFullYear(),
    i = ka(e, r, t, n);
  if (i < 1) return ka(e, r - 1, t, n);
  let l = ka(e, r + 1, t, n);
  return l >= 1 ? Math.min(i, l) : i;
}
function ka(e, t, n, r) {
  let i = $e([t, 0, 1 + zb(t, n, r)]),
    l = ue(e),
    o = Math.round(gr(i, l));
  return Math.floor(o / 7) + 1;
}
function zb(e, t, n) {
  let r = 7 + t - n;
  return -((7 + $e([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
}
function Ch(e) {
  return [
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds(),
  ];
}
function Ah(e) {
  return new Date(
    e[0],
    e[1] || 0,
    e[2] == null ? 1 : e[2],
    e[3] || 0,
    e[4] || 0,
    e[5] || 0
  );
}
function gn(e) {
  return [
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds(),
    e.getUTCMilliseconds(),
  ];
}
function $e(e) {
  return e.length === 1 && (e = e.concat([0])), new Date(Date.UTC(...e));
}
function nv(e) {
  return !isNaN(e.valueOf());
}
function vn(e) {
  return (
    e.getUTCHours() * 1e3 * 60 * 60 +
    e.getUTCMinutes() * 1e3 * 60 +
    e.getUTCSeconds() * 1e3 +
    e.getUTCMilliseconds()
  );
}
function Fb(e, t, n = !1) {
  let r = e.toISOString();
  return (
    (r = r.replace(".000", "")),
    n && (r = r.replace("T00:00:00Z", "")),
    r.length > 10 &&
      (t == null
        ? (r = r.replace("Z", ""))
        : t !== 0 && (r = r.replace("Z", Xc(t, !0)))),
    r
  );
}
function Al(e) {
  return e.toISOString().replace(/T.*$/, "");
}
function Bb(e) {
  return e.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function Xc(e, t = !1) {
  let n = e < 0 ? "-" : "+",
    r = Math.abs(e),
    i = Math.floor(r / 60),
    l = Math.round(r % 60);
  return t
    ? `${n + Aa(i, 2)}:${Aa(l, 2)}`
    : `GMT${n}${i}${l ? `:${Aa(l, 2)}` : ""}`;
}
function Y(e, t, n) {
  let r, i;
  return function (...l) {
    if (!r) i = e.apply(this, l);
    else if (!Mn(r, l)) {
      n && n(i);
      let o = e.apply(this, l);
      (!t || !t(o, i)) && (i = o);
    }
    return (r = l), i;
  };
}
function bo(e, t, n) {
  let r, i;
  return (l) => {
    if (!r) i = e.call(this, l);
    else if (!Ot(r, l)) {
      n && n(i);
      let o = e.call(this, l);
      (!t || !t(o, i)) && (i = o);
    }
    return (r = l), i;
  };
}
const _h = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0,
  },
  es = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1,
  },
  Xl = /\s*([ap])\.?m\.?/i,
  Ub = /,/g,
  Hb = /\s+/g,
  Wb = /\u200e/g,
  Vb = /UTC|GMT/;
class $b {
  constructor(t) {
    let n = {},
      r = {},
      i = 0;
    for (let l in t)
      l in _h
        ? ((r[l] = t[l]), (i = Math.max(_h[l], i)))
        : ((n[l] = t[l]), l in es && (i = Math.max(es[l], i)));
    (this.standardDateProps = n),
      (this.extendedSettings = r),
      (this.severity = i),
      (this.buildFormattingFunc = Y(kh));
  }
  format(t, n) {
    return this.buildFormattingFunc(
      this.standardDateProps,
      this.extendedSettings,
      n
    )(t);
  }
  formatRange(t, n, r, i) {
    let { standardDateProps: l, extendedSettings: o } = this,
      s = Kb(t.marker, n.marker, r.calendarSystem);
    if (!s) return this.format(t, r);
    let a = s;
    a > 1 &&
      (l.year === "numeric" || l.year === "2-digit") &&
      (l.month === "numeric" || l.month === "2-digit") &&
      (l.day === "numeric" || l.day === "2-digit") &&
      (a = 1);
    let u = this.format(t, r),
      c = this.format(n, r);
    if (u === c) return u;
    let f = Xb(l, a),
      d = kh(f, o, r),
      h = d(t),
      v = d(n),
      y = Jb(u, h, c, v),
      S = o.separator || i || r.defaultSeparator || "";
    return y ? y.before + h + S + v + y.after : u + S + c;
  }
  getLargestUnit() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }
}
function kh(e, t, n) {
  let r = Object.keys(e).length;
  return r === 1 && e.timeZoneName === "short"
    ? (i) => Xc(i.timeZoneOffset)
    : r === 0 && t.week
    ? (i) =>
        Zb(
          n.computeWeekNumber(i.marker),
          n.weekText,
          n.weekTextLong,
          n.locale,
          t.week
        )
    : Qb(e, t, n);
}
function Qb(e, t, n) {
  (e = Object.assign({}, e)),
    (t = Object.assign({}, t)),
    Gb(e, t),
    (e.timeZone = "UTC");
  let r = new Intl.DateTimeFormat(n.locale.codes, e),
    i;
  if (t.omitZeroMinute) {
    let l = Object.assign({}, e);
    delete l.minute, (i = new Intl.DateTimeFormat(n.locale.codes, l));
  }
  return (l) => {
    let { marker: o } = l,
      s;
    i && !o.getUTCMinutes() ? (s = i) : (s = r);
    let a = s.format(o);
    return Yb(a, l, e, t, n);
  };
}
function Gb(e, t) {
  e.timeZoneName &&
    (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")),
    e.timeZoneName === "long" && (e.timeZoneName = "short"),
    t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
}
function Yb(e, t, n, r, i) {
  return (
    (e = e.replace(Wb, "")),
    n.timeZoneName === "short" &&
      (e = qb(
        e,
        i.timeZone === "UTC" || t.timeZoneOffset == null
          ? "UTC"
          : Xc(t.timeZoneOffset)
      )),
    r.omitCommas && (e = e.replace(Ub, "").trim()),
    r.omitZeroMinute && (e = e.replace(":00", "")),
    r.meridiem === !1
      ? (e = e.replace(Xl, "").trim())
      : r.meridiem === "narrow"
      ? (e = e.replace(Xl, (l, o) => o.toLocaleLowerCase()))
      : r.meridiem === "short"
      ? (e = e.replace(Xl, (l, o) => `${o.toLocaleLowerCase()}m`))
      : r.meridiem === "lowercase" &&
        (e = e.replace(Xl, (l) => l.toLocaleLowerCase())),
    (e = e.replace(Hb, " ")),
    (e = e.trim()),
    e
  );
}
function qb(e, t) {
  let n = !1;
  return (e = e.replace(Vb, () => ((n = !0), t))), n || (e += ` ${t}`), e;
}
function Zb(e, t, n, r, i) {
  let l = [];
  return (
    i === "long" ? l.push(n) : (i === "short" || i === "narrow") && l.push(t),
    (i === "long" || i === "short") && l.push(" "),
    l.push(r.simpleNumberFormat.format(e)),
    r.options.direction === "rtl" && l.reverse(),
    l.join("")
  );
}
function Kb(e, t, n) {
  return n.getMarkerYear(e) !== n.getMarkerYear(t)
    ? 5
    : n.getMarkerMonth(e) !== n.getMarkerMonth(t)
    ? 4
    : n.getMarkerDay(e) !== n.getMarkerDay(t)
    ? 2
    : vn(e) !== vn(t)
    ? 1
    : 0;
}
function Xb(e, t) {
  let n = {};
  for (let r in e) (!(r in es) || es[r] <= t) && (n[r] = e[r]);
  return n;
}
function Jb(e, t, n, r) {
  let i = 0;
  for (; i < e.length; ) {
    let l = e.indexOf(t, i);
    if (l === -1) break;
    let o = e.substr(0, l);
    i = l + t.length;
    let s = e.substr(i),
      a = 0;
    for (; a < n.length; ) {
      let u = n.indexOf(r, a);
      if (u === -1) break;
      let c = n.substr(0, u);
      a = u + r.length;
      let f = n.substr(a);
      if (o === c && s === f) return { before: o, after: s };
    }
  }
  return null;
}
function Rh(e, t) {
  let n = t.markerToArray(e.marker);
  return {
    marker: e.marker,
    timeZoneOffset: e.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6],
  };
}
function ts(e, t, n, r) {
  let i = Rh(e, n.calendarSystem),
    l = t ? Rh(t, n.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: l,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: r || n.defaultSeparator,
  };
}
class ex {
  constructor(t) {
    this.cmdStr = t;
  }
  format(t, n, r) {
    return n.cmdFormatter(this.cmdStr, ts(t, null, n, r));
  }
  formatRange(t, n, r, i) {
    return r.cmdFormatter(this.cmdStr, ts(t, n, r, i));
  }
}
class tx {
  constructor(t) {
    this.func = t;
  }
  format(t, n, r) {
    return this.func(ts(t, null, n, r));
  }
  formatRange(t, n, r, i) {
    return this.func(ts(t, n, r, i));
  }
}
function xe(e) {
  return typeof e == "object" && e
    ? new $b(e)
    : typeof e == "string"
    ? new ex(e)
    : typeof e == "function"
    ? new tx(e)
    : null;
}
const Dh = {
    navLinkDayClick: C,
    navLinkWeekClick: C,
    duration: K,
    bootstrapFontAwesome: C,
    buttonIcons: C,
    customButtons: C,
    defaultAllDayEventDuration: K,
    defaultTimedEventDuration: K,
    nextDayThreshold: K,
    scrollTime: K,
    scrollTimeReset: Boolean,
    slotMinTime: K,
    slotMaxTime: K,
    dayPopoverFormat: xe,
    slotDuration: K,
    snapDuration: K,
    headerToolbar: C,
    footerToolbar: C,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: xe,
    dayHeaderClassNames: C,
    dayHeaderContent: C,
    dayHeaderDidMount: C,
    dayHeaderWillUnmount: C,
    dayCellClassNames: C,
    dayCellContent: C,
    dayCellDidMount: C,
    dayCellWillUnmount: C,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: C,
    weekNumbers: Boolean,
    weekNumberClassNames: C,
    weekNumberContent: C,
    weekNumberDidMount: C,
    weekNumberWillUnmount: C,
    editable: Boolean,
    viewClassNames: C,
    viewDidMount: C,
    viewWillUnmount: C,
    nowIndicator: Boolean,
    nowIndicatorClassNames: C,
    nowIndicatorContent: C,
    nowIndicatorDidMount: C,
    nowIndicatorWillUnmount: C,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: C,
    locale: C,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: C,
    eventOrder: gb,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: C,
    contentHeight: C,
    direction: String,
    weekNumberFormat: xe,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: C,
    initialDate: C,
    now: C,
    eventDataTransform: C,
    stickyHeaderDates: C,
    stickyFooterScrollbar: C,
    viewHeight: C,
    defaultAllDay: Boolean,
    eventSourceFailure: C,
    eventSourceSuccess: C,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: C,
    eventConstraint: C,
    eventAllow: C,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: C,
    eventContent: C,
    eventDidMount: C,
    eventWillUnmount: C,
    selectConstraint: C,
    selectOverlap: C,
    selectAllow: C,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: C,
    slotLaneClassNames: C,
    slotLaneContent: C,
    slotLaneDidMount: C,
    slotLaneWillUnmount: C,
    slotLabelClassNames: C,
    slotLabelContent: C,
    slotLabelDidMount: C,
    slotLabelWillUnmount: C,
    dayMaxEvents: C,
    dayMaxEventRows: C,
    dayMinWidth: Number,
    slotLabelInterval: K,
    allDayText: String,
    allDayClassNames: C,
    allDayContent: C,
    allDayDidMount: C,
    allDayWillUnmount: C,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: xe,
    rerenderDelay: Number,
    moreLinkText: C,
    moreLinkHint: C,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: C,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: K,
    hiddenDays: C,
    fixedWeekCount: Boolean,
    validRange: C,
    visibleRange: C,
    titleFormat: C,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: C,
    navLinkHint: C,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: C,
    moreLinkClassNames: C,
    moreLinkContent: C,
    moreLinkDidMount: C,
    moreLinkWillUnmount: C,
    monthStartFormat: xe,
    handleCustomRendering: C,
    customRenderingMetaMap: C,
  },
  Wi = {
    eventDisplay: "auto",
    defaultRangeSeparator: " - ",
    titleRangeSeparator: " – ",
    defaultTimedEventDuration: "01:00:00",
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: !1,
    nextDayThreshold: "00:00:00",
    dayHeaders: !0,
    initialView: "",
    aspectRatio: 1.35,
    headerToolbar: { start: "title", center: "", end: "today prev,next" },
    weekends: !0,
    weekNumbers: !1,
    weekNumberCalculation: "local",
    editable: !1,
    nowIndicator: !1,
    scrollTime: "06:00:00",
    scrollTimeReset: !0,
    slotMinTime: "00:00:00",
    slotMaxTime: "24:00:00",
    showNonCurrentDates: !0,
    lazyFetching: !0,
    startParam: "start",
    endParam: "end",
    timeZoneParam: "timeZone",
    timeZone: "local",
    locales: [],
    locale: "",
    themeSystem: "standard",
    dragRevertDuration: 500,
    dragScroll: !0,
    allDayMaintainDuration: !1,
    unselectAuto: !0,
    dropAccept: "*",
    eventOrder: "start,-duration,allDay,title",
    dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
    handleWindowResize: !0,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: !1,
    navLinks: !1,
    selectable: !1,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
    monthStartFormat: { month: "long", day: "numeric" },
  },
  Th = {
    datesSet: C,
    eventsSet: C,
    eventAdd: C,
    eventChange: C,
    eventRemove: C,
    windowResize: C,
    eventClick: C,
    eventMouseEnter: C,
    eventMouseLeave: C,
    select: C,
    unselect: C,
    loading: C,
    _unmount: C,
    _beforeprint: C,
    _afterprint: C,
    _noEventDrop: C,
    _noEventResize: C,
    _resize: C,
    _scrollRequest: C,
  },
  Nh = {
    buttonText: C,
    buttonHints: C,
    views: C,
    plugins: C,
    initialEvents: C,
    events: C,
    eventSources: C,
  },
  Qn = {
    headerToolbar: Gn,
    footerToolbar: Gn,
    buttonText: Gn,
    buttonHints: Gn,
    buttonIcons: Gn,
    dateIncrement: Gn,
    plugins: Jl,
    events: Jl,
    eventSources: Jl,
    resources: Jl,
  };
function Gn(e, t) {
  return typeof e == "object" && typeof t == "object" && e && t
    ? Ot(e, t)
    : e === t;
}
function Jl(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? Mn(e, t) : e === t;
}
const nx = {
  type: String,
  component: C,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: C,
  usesMinMaxTime: Boolean,
  classNames: C,
  content: C,
  didMount: C,
  willUnmount: C,
};
function Ra(e) {
  return ed(e, Qn);
}
function Jc(e, t) {
  let n = {},
    r = {};
  for (let i in t) i in e && (n[i] = t[i](e[i]));
  for (let i in e) i in t || (r[i] = e[i]);
  return { refined: n, extra: r };
}
function C(e) {
  return e;
}
const { hasOwnProperty: ns } = Object.prototype;
function ed(e, t) {
  let n = {};
  if (t) {
    for (let r in t)
      if (t[r] === Gn) {
        let i = [];
        for (let l = e.length - 1; l >= 0; l -= 1) {
          let o = e[l][r];
          if (typeof o == "object" && o) i.unshift(o);
          else if (o !== void 0) {
            n[r] = o;
            break;
          }
        }
        i.length && (n[r] = ed(i));
      }
  }
  for (let r = e.length - 1; r >= 0; r -= 1) {
    let i = e[r];
    for (let l in i) l in n || (n[l] = i[l]);
  }
  return n;
}
function ii(e, t) {
  let n = {};
  for (let r in e) t(e[r], r) && (n[r] = e[r]);
  return n;
}
function _l(e, t) {
  let n = {};
  for (let r in e) n[r] = t(e[r], r);
  return n;
}
function rv(e) {
  let t = {};
  for (let n of e) t[n] = !0;
  return t;
}
function td(e) {
  let t = [];
  for (let n in e) t.push(e[n]);
  return t;
}
function Ot(e, t) {
  if (e === t) return !0;
  for (let n in e) if (ns.call(e, n) && !(n in t)) return !1;
  for (let n in t) if (ns.call(t, n) && e[n] !== t[n]) return !1;
  return !0;
}
const rx = /^on[A-Z]/;
function ix(e, t) {
  const n = zu(e, t);
  for (let r of n) if (!rx.test(r)) return !1;
  return !0;
}
function zu(e, t) {
  let n = [];
  for (let r in e) ns.call(e, r) && (r in t || n.push(r));
  for (let r in t) ns.call(t, r) && e[r] !== t[r] && n.push(r);
  return n;
}
function Da(e, t, n = {}) {
  if (e === t) return !0;
  for (let r in t) if (!(r in e && lx(e[r], t[r], n[r]))) return !1;
  for (let r in e) if (!(r in t)) return !1;
  return !0;
}
function lx(e, t, n) {
  return e === t || n === !0 ? !0 : n ? n(e, t) : !1;
}
function ox(e, t = 0, n, r = 1) {
  let i = [];
  n == null && (n = Object.keys(e).length);
  for (let l = t; l < n; l += r) {
    let o = e[l];
    o !== void 0 && i.push(o);
  }
  return i;
}
let iv = {};
function sx(e, t) {
  iv[e] = t;
}
function ax(e) {
  return new iv[e]();
}
class ux {
  getMarkerYear(t) {
    return t.getUTCFullYear();
  }
  getMarkerMonth(t) {
    return t.getUTCMonth();
  }
  getMarkerDay(t) {
    return t.getUTCDate();
  }
  arrayToMarker(t) {
    return $e(t);
  }
  markerToArray(t) {
    return gn(t);
  }
}
sx("gregory", ux);
const cx =
  /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function dx(e) {
  let t = cx.exec(e);
  if (t) {
    let n = new Date(
      Date.UTC(
        Number(t[1]),
        t[3] ? Number(t[3]) - 1 : 0,
        Number(t[5] || 1),
        Number(t[7] || 0),
        Number(t[8] || 0),
        Number(t[10] || 0),
        t[12] ? +`0.${t[12]}` * 1e3 : 0
      )
    );
    if (nv(n)) {
      let r = null;
      return (
        t[13] &&
          (r =
            (t[15] === "-" ? -1 : 1) *
            (Number(t[16] || 0) * 60 + Number(t[18] || 0))),
        { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r }
      );
    }
  }
  return null;
}
class fx {
  constructor(t) {
    let n = (this.timeZone = t.timeZone),
      r = n !== "local" && n !== "UTC";
    t.namedTimeZoneImpl &&
      r &&
      (this.namedTimeZoneImpl = new t.namedTimeZoneImpl(n)),
      (this.canComputeOffset = !!(!r || this.namedTimeZoneImpl)),
      (this.calendarSystem = ax(t.calendarSystem)),
      (this.locale = t.locale),
      (this.weekDow = t.locale.week.dow),
      (this.weekDoy = t.locale.week.doy),
      t.weekNumberCalculation === "ISO" &&
        ((this.weekDow = 1), (this.weekDoy = 4)),
      typeof t.firstDay == "number" && (this.weekDow = t.firstDay),
      typeof t.weekNumberCalculation == "function" &&
        (this.weekNumberFunc = t.weekNumberCalculation),
      (this.weekText =
        t.weekText != null ? t.weekText : t.locale.options.weekText),
      (this.weekTextLong =
        (t.weekTextLong != null
          ? t.weekTextLong
          : t.locale.options.weekTextLong) || this.weekText),
      (this.cmdFormatter = t.cmdFormatter),
      (this.defaultSeparator = t.defaultSeparator);
  }
  createMarker(t) {
    let n = this.createMarkerMeta(t);
    return n === null ? null : n.marker;
  }
  createNowMarker() {
    return this.canComputeOffset
      ? this.timestampToMarker(new Date().valueOf())
      : $e(Ch(new Date()));
  }
  createMarkerMeta(t) {
    if (typeof t == "string") return this.parse(t);
    let n = null;
    return (
      typeof t == "number"
        ? (n = this.timestampToMarker(t))
        : t instanceof Date
        ? ((t = t.valueOf()), isNaN(t) || (n = this.timestampToMarker(t)))
        : Array.isArray(t) && (n = $e(t)),
      n === null || !nv(n)
        ? null
        : { marker: n, isTimeUnspecified: !1, forcedTzo: null }
    );
  }
  parse(t) {
    let n = dx(t);
    if (n === null) return null;
    let { marker: r } = n,
      i = null;
    return (
      n.timeZoneOffset !== null &&
        (this.canComputeOffset
          ? (r = this.timestampToMarker(
              r.valueOf() - n.timeZoneOffset * 60 * 1e3
            ))
          : (i = n.timeZoneOffset)),
      { marker: r, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: i }
    );
  }
  getYear(t) {
    return this.calendarSystem.getMarkerYear(t);
  }
  getMonth(t) {
    return this.calendarSystem.getMarkerMonth(t);
  }
  getDay(t) {
    return this.calendarSystem.getMarkerDay(t);
  }
  add(t, n) {
    let r = this.calendarSystem.markerToArray(t);
    return (
      (r[0] += n.years),
      (r[1] += n.months),
      (r[2] += n.days),
      (r[6] += n.milliseconds),
      this.calendarSystem.arrayToMarker(r)
    );
  }
  subtract(t, n) {
    let r = this.calendarSystem.markerToArray(t);
    return (
      (r[0] -= n.years),
      (r[1] -= n.months),
      (r[2] -= n.days),
      (r[6] -= n.milliseconds),
      this.calendarSystem.arrayToMarker(r)
    );
  }
  addYears(t, n) {
    let r = this.calendarSystem.markerToArray(t);
    return (r[0] += n), this.calendarSystem.arrayToMarker(r);
  }
  addMonths(t, n) {
    let r = this.calendarSystem.markerToArray(t);
    return (r[1] += n), this.calendarSystem.arrayToMarker(r);
  }
  diffWholeYears(t, n) {
    let { calendarSystem: r } = this;
    return vn(t) === vn(n) &&
      r.getMarkerDay(t) === r.getMarkerDay(n) &&
      r.getMarkerMonth(t) === r.getMarkerMonth(n)
      ? r.getMarkerYear(n) - r.getMarkerYear(t)
      : null;
  }
  diffWholeMonths(t, n) {
    let { calendarSystem: r } = this;
    return vn(t) === vn(n) && r.getMarkerDay(t) === r.getMarkerDay(n)
      ? r.getMarkerMonth(n) -
          r.getMarkerMonth(t) +
          (r.getMarkerYear(n) - r.getMarkerYear(t)) * 12
      : null;
  }
  greatestWholeUnit(t, n) {
    let r = this.diffWholeYears(t, n);
    return r !== null
      ? { unit: "year", value: r }
      : ((r = this.diffWholeMonths(t, n)),
        r !== null
          ? { unit: "month", value: r }
          : ((r = Ib(t, n)),
            r !== null
              ? { unit: "week", value: r }
              : ((r = Jo(t, n)),
                r !== null
                  ? { unit: "day", value: r }
                  : ((r = Db(t, n)),
                    _a(r)
                      ? { unit: "hour", value: r }
                      : ((r = Tb(t, n)),
                        _a(r)
                          ? { unit: "minute", value: r }
                          : ((r = Nb(t, n)),
                            _a(r)
                              ? { unit: "second", value: r }
                              : {
                                  unit: "millisecond",
                                  value: n.valueOf() - t.valueOf(),
                                }))))));
  }
  countDurationsBetween(t, n, r) {
    let i;
    return r.years && ((i = this.diffWholeYears(t, n)), i !== null)
      ? i / Ab(r)
      : r.months && ((i = this.diffWholeMonths(t, n)), i !== null)
      ? i / _b(r)
      : r.days && ((i = Jo(t, n)), i !== null)
      ? i / Gr(r)
      : (n.valueOf() - t.valueOf()) / hl(r);
  }
  startOf(t, n) {
    return n === "year"
      ? this.startOfYear(t)
      : n === "month"
      ? this.startOfMonth(t)
      : n === "week"
      ? this.startOfWeek(t)
      : n === "day"
      ? ue(t)
      : n === "hour"
      ? Ob(t)
      : n === "minute"
      ? Pb(t)
      : n === "second"
      ? jb(t)
      : null;
  }
  startOfYear(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
    ]);
  }
  startOfMonth(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
      this.calendarSystem.getMarkerMonth(t),
    ]);
  }
  startOfWeek(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
      this.calendarSystem.getMarkerMonth(t),
      t.getUTCDate() - ((t.getUTCDay() - this.weekDow + 7) % 7),
    ]);
  }
  computeWeekNumber(t) {
    return this.weekNumberFunc
      ? this.weekNumberFunc(this.toDate(t))
      : Lb(t, this.weekDow, this.weekDoy);
  }
  format(t, n, r = {}) {
    return n.format(
      {
        marker: t,
        timeZoneOffset:
          r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(t),
      },
      this
    );
  }
  formatRange(t, n, r, i = {}) {
    return (
      i.isEndExclusive && (n = In(n, -1)),
      r.formatRange(
        {
          marker: t,
          timeZoneOffset:
            i.forcedStartTzo != null
              ? i.forcedStartTzo
              : this.offsetForMarker(t),
        },
        {
          marker: n,
          timeZoneOffset:
            i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(n),
        },
        this,
        i.defaultSeparator
      )
    );
  }
  formatIso(t, n = {}) {
    let r = null;
    return (
      n.omitTimeZoneOffset ||
        (n.forcedTzo != null
          ? (r = n.forcedTzo)
          : (r = this.offsetForMarker(t))),
      Fb(t, r, n.omitTime)
    );
  }
  timestampToMarker(t) {
    return this.timeZone === "local"
      ? $e(Ch(new Date(t)))
      : this.timeZone === "UTC" || !this.namedTimeZoneImpl
      ? new Date(t)
      : $e(this.namedTimeZoneImpl.timestampToArray(t));
  }
  offsetForMarker(t) {
    return this.timeZone === "local"
      ? -Ah(gn(t)).getTimezoneOffset()
      : this.timeZone === "UTC"
      ? 0
      : this.namedTimeZoneImpl
      ? this.namedTimeZoneImpl.offsetForArray(gn(t))
      : null;
  }
  toDate(t, n) {
    return this.timeZone === "local"
      ? Ah(gn(t))
      : this.timeZone === "UTC"
      ? new Date(t.valueOf())
      : this.namedTimeZoneImpl
      ? new Date(
          t.valueOf() - this.namedTimeZoneImpl.offsetForArray(gn(t)) * 1e3 * 60
        )
      : new Date(t.valueOf() - (n || 0));
  }
}
class kl {
  constructor(t) {
    this.iconOverrideOption && this.setIconOverride(t[this.iconOverrideOption]);
  }
  setIconOverride(t) {
    let n, r;
    if (typeof t == "object" && t) {
      n = Object.assign({}, this.iconClasses);
      for (r in t) n[r] = this.applyIconOverridePrefix(t[r]);
      this.iconClasses = n;
    } else t === !1 && (this.iconClasses = {});
  }
  applyIconOverridePrefix(t) {
    let n = this.iconOverridePrefix;
    return n && t.indexOf(n) !== 0 && (t = n + t), t;
  }
  getClass(t) {
    return this.classes[t] || "";
  }
  getIconClass(t, n) {
    let r;
    return (
      n && this.rtlIconClasses
        ? (r = this.rtlIconClasses[t] || this.iconClasses[t])
        : (r = this.iconClasses[t]),
      r ? `${this.baseIconClass} ${r}` : ""
    );
  }
  getCustomButtonIconClass(t) {
    let n;
    return this.iconOverrideCustomButtonOption &&
      ((n = t[this.iconOverrideCustomButtonOption]), n)
      ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}`
      : "";
  }
}
kl.prototype.classes = {};
kl.prototype.iconClasses = {};
kl.prototype.baseIconClass = "";
kl.prototype.iconOverridePrefix = "";
function Mh(e) {
  e();
  let t = L.debounceRendering,
    n = [];
  function r(i) {
    n.push(i);
  }
  for (
    L.debounceRendering = r, fl(b(hx, {}), document.createElement("div"));
    n.length;

  )
    n.shift()();
  L.debounceRendering = t;
}
class hx extends et {
  render() {
    return b("div", {});
  }
  componentDidMount() {
    this.setState({});
  }
}
function lv(e) {
  let t = HS(e),
    n = t.Provider;
  return (
    (t.Provider = function () {
      let r = !this.getChildContext,
        i = n.apply(this, arguments);
      if (r) {
        let l = [];
        (this.shouldComponentUpdate = (o) => {
          this.props.value !== o.value &&
            l.forEach((s) => {
              (s.context = o.value), s.forceUpdate();
            });
        }),
          (this.sub = (o) => {
            l.push(o);
            let s = o.componentWillUnmount;
            o.componentWillUnmount = () => {
              l.splice(l.indexOf(o), 1), s && s.call(o);
            };
          });
      }
      return i;
    }),
    t
  );
}
class px {
  constructor(t, n, r, i) {
    (this.execFunc = t),
      (this.emitter = n),
      (this.scrollTime = r),
      (this.scrollTimeReset = i),
      (this.handleScrollRequest = (l) => {
        (this.queuedRequest = Object.assign({}, this.queuedRequest || {}, l)),
          this.drain();
      }),
      n.on("_scrollRequest", this.handleScrollRequest),
      this.fireInitialScroll();
  }
  detach() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }
  update(t) {
    t && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }
  fireInitialScroll() {
    this.handleScrollRequest({ time: this.scrollTime });
  }
  drain() {
    this.queuedRequest &&
      this.execFunc(this.queuedRequest) &&
      (this.queuedRequest = null);
  }
}
const vr = lv({});
function mx(e, t, n, r, i, l, o, s, a, u, c, f, d) {
  return {
    dateEnv: i,
    options: n,
    pluginHooks: o,
    emitter: u,
    dispatch: s,
    getCurrentData: a,
    calendarApi: c,
    viewSpec: e,
    viewApi: t,
    dateProfileGenerator: r,
    theme: l,
    isRtl: n.direction === "rtl",
    addResizeHandler(h) {
      u.on("_resize", h);
    },
    removeResizeHandler(h) {
      u.off("_resize", h);
    },
    createScrollResponder(h) {
      return new px(h, u, K(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: f,
    unregisterInteractiveComponent: d,
  };
}
class yr extends et {
  shouldComponentUpdate(t, n) {
    return (
      this.debug && console.log(zu(t, this.props), zu(n, this.state)),
      !Da(this.props, t, this.propEquality) ||
        !Da(this.state, n, this.stateEquality)
    );
  }
  safeSetState(t) {
    Da(
      this.state,
      Object.assign(Object.assign({}, this.state), t),
      this.stateEquality
    ) || this.setState(t);
  }
}
yr.addPropsEquality = gx;
yr.addStateEquality = vx;
yr.contextType = vr;
yr.prototype.propEquality = {};
yr.prototype.stateEquality = {};
class oe extends yr {}
oe.contextType = vr;
function gx(e) {
  let t = Object.create(this.prototype.propEquality);
  Object.assign(t, e), (this.prototype.propEquality = t);
}
function vx(e) {
  let t = Object.create(this.prototype.stateEquality);
  Object.assign(t, e), (this.prototype.stateEquality = t);
}
function Jt(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
class nd extends oe {
  constructor() {
    super(...arguments),
      (this.id = mr()),
      (this.queuedDomNodes = []),
      (this.currentDomNodes = []),
      (this.handleEl = (t) => {
        Fu(this.props.generatorName, this.context.options) ||
          this.updateElRef(t);
      }),
      (this.updateElRef = (t) => {
        this.props.elRef && Jt(this.props.elRef, t);
      });
  }
  render() {
    const { props: t, context: n } = this,
      { options: r } = n,
      { customGenerator: i, defaultGenerator: l, renderProps: o } = t,
      s = ov(t, [], this.handleEl);
    let a = !1,
      u,
      c = [],
      f;
    if (i != null) {
      const d = typeof i == "function" ? i(o, b) : i;
      if (d === !0) a = !0;
      else {
        const h = d && typeof d == "object";
        h && "html" in d
          ? (s.dangerouslySetInnerHTML = { __html: d.html })
          : h && "domNodes" in d
          ? (c = Array.prototype.slice.call(d.domNodes))
          : (h ? Mg(d) : typeof d != "function")
          ? (u = d)
          : (f = d);
      }
    } else a = !Fu(t.generatorName, r);
    return (
      a && l && (u = l(o)),
      (this.queuedDomNodes = c),
      (this.currentGeneratorMeta = f),
      b(t.elTag, s, u)
    );
  }
  componentDidMount() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentDidUpdate() {
    this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
  }
  componentWillUnmount() {
    this.triggerCustomRendering(!1);
  }
  triggerCustomRendering(t) {
    var n;
    const { props: r, context: i } = this,
      { handleCustomRendering: l, customRenderingMetaMap: o } = i.options;
    if (l) {
      const s =
        (n = this.currentGeneratorMeta) !== null && n !== void 0
          ? n
          : o == null
          ? void 0
          : o[r.generatorName];
      s &&
        l(
          Object.assign(
            Object.assign(
              {
                id: this.id,
                isActive: t,
                containerEl: this.base,
                reportNewContainerEl: this.updateElRef,
                generatorMeta: s,
              },
              r
            ),
            { elClasses: (r.elClasses || []).filter(yx) }
          )
        );
    }
  }
  applyQueueudDomNodes() {
    const { queuedDomNodes: t, currentDomNodes: n } = this,
      r = this.base;
    if (!Mn(t, n)) {
      n.forEach(ab);
      for (let i of t) r.appendChild(i);
      this.currentDomNodes = t;
    }
  }
}
nd.addPropsEquality({
  elClasses: Mn,
  elStyle: Ot,
  elAttrs: ix,
  renderProps: Ot,
});
function Fu(e, t) {
  var n;
  return !!(
    t.handleCustomRendering &&
    e &&
    !((n = t.customRenderingMetaMap) === null || n === void 0) &&
    n[e]
  );
}
function ov(e, t, n) {
  const r = Object.assign(Object.assign({}, e.elAttrs), { ref: n });
  return (
    (e.elClasses || t) &&
      (r.className = (e.elClasses || [])
        .concat(t || [])
        .concat(r.className || [])
        .filter(Boolean)
        .join(" ")),
    e.elStyle && (r.style = e.elStyle),
    r
  );
}
function yx(e) {
  return !!e;
}
const sv = lv(0);
class ft extends et {
  constructor() {
    super(...arguments),
      (this.InnerContent = wx.bind(void 0, this)),
      (this.handleEl = (t) => {
        (this.el = t), this.props.elRef && Jt(this.props.elRef, t);
      });
  }
  render() {
    const { props: t } = this,
      n = Ex(t.classNameGenerator, t.renderProps);
    if (t.children) {
      const r = ov(t, n, this.handleEl),
        i = t.children(this.InnerContent, t.renderProps, r);
      return t.elTag ? b(t.elTag, r, i) : i;
    } else
      return b(
        nd,
        Object.assign(Object.assign({}, t), {
          elRef: this.handleEl,
          elTag: t.elTag || "div",
          elClasses: (t.elClasses || []).concat(n),
          renderId: this.context,
        })
      );
  }
  componentDidMount() {
    var t, n;
    (n = (t = this.props).didMount) === null ||
      n === void 0 ||
      n.call(
        t,
        Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.el,
        })
      );
  }
  componentWillUnmount() {
    var t, n;
    (n = (t = this.props).willUnmount) === null ||
      n === void 0 ||
      n.call(
        t,
        Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.el,
        })
      );
  }
}
ft.contextType = sv;
function wx(e, t) {
  const n = e.props;
  return b(
    nd,
    Object.assign(
      {
        renderProps: n.renderProps,
        generatorName: n.generatorName,
        customGenerator: n.customGenerator,
        defaultGenerator: n.defaultGenerator,
        renderId: e.context,
      },
      t
    )
  );
}
function Ex(e, t) {
  const n = typeof e == "function" ? e(t) : e || [];
  return typeof n == "string" ? [n] : n;
}
class Bu extends oe {
  render() {
    let { props: t, context: n } = this,
      { options: r } = n,
      i = { view: n.viewApi };
    return b(
      ft,
      Object.assign({}, t, {
        elTag: t.elTag || "div",
        elClasses: [...av(t.viewSpec), ...(t.elClasses || [])],
        renderProps: i,
        classNameGenerator: r.viewClassNames,
        generatorName: void 0,
        didMount: r.viewDidMount,
        willUnmount: r.viewWillUnmount,
      }),
      () => t.children
    );
  }
}
function av(e) {
  return [`fc-${e.type}-view`, "fc-view"];
}
function Sx(e, t) {
  let n = null,
    r = null;
  return (
    e.start && (n = t.createMarker(e.start)),
    e.end && (r = t.createMarker(e.end)),
    (!n && !r) || (n && r && r < n) ? null : { start: n, end: r }
  );
}
function Ih(e, t) {
  let n = [],
    { start: r } = t,
    i,
    l;
  for (e.sort(bx), i = 0; i < e.length; i += 1)
    (l = e[i]),
      l.start > r && n.push({ start: r, end: l.start }),
      l.end > r && (r = l.end);
  return r < t.end && n.push({ start: r, end: t.end }), n;
}
function bx(e, t) {
  return e.start.valueOf() - t.start.valueOf();
}
function cr(e, t) {
  let { start: n, end: r } = e,
    i = null;
  return (
    t.start !== null &&
      (n === null
        ? (n = t.start)
        : (n = new Date(Math.max(n.valueOf(), t.start.valueOf())))),
    t.end != null &&
      (r === null
        ? (r = t.end)
        : (r = new Date(Math.min(r.valueOf(), t.end.valueOf())))),
    (n === null || r === null || n < r) && (i = { start: n, end: r }),
    i
  );
}
function xx(e, t) {
  return (
    (e.end === null || t.start === null || e.end > t.start) &&
    (e.start === null || t.end === null || e.start < t.end)
  );
}
function kn(e, t) {
  return (e.start === null || t >= e.start) && (e.end === null || t < e.end);
}
function Cx(e, t) {
  return t.start != null && e < t.start
    ? t.start
    : t.end != null && e >= t.end
    ? new Date(t.end.valueOf() - 1)
    : e;
}
function uv(e) {
  let t = Math.floor(gr(e.start, e.end)) || 1,
    n = ue(e.start),
    r = Te(n, t);
  return { start: n, end: r };
}
function rd(e, t = K(0)) {
  let n = null,
    r = null;
  if (e.end) {
    r = ue(e.end);
    let i = e.end.valueOf() - r.valueOf();
    i && i >= hl(t) && (r = Te(r, 1));
  }
  return (
    e.start && ((n = ue(e.start)), r && r <= n && (r = Te(n, 1))),
    { start: n, end: r }
  );
}
function Ax(e) {
  let t = rd(e);
  return gr(t.start, t.end) > 1;
}
function eo(e, t, n, r) {
  return r === "year"
    ? K(n.diffWholeYears(e, t), "year")
    : r === "month"
    ? K(n.diffWholeMonths(e, t), "month")
    : Mb(e, t);
}
function _x(e, t) {
  switch (t.type) {
    case "CHANGE_DATE":
      return t.dateMarker;
    default:
      return e;
  }
}
function kx(e, t) {
  let n = e.initialDate;
  return n != null ? t.createMarker(n) : Rl(e.now, t);
}
function Rl(e, t) {
  return (
    typeof e == "function" && (e = e()),
    e == null ? t.createNowMarker() : t.createMarker(e)
  );
}
class cv {
  constructor(t) {
    (this.props = t),
      (this.nowDate = Rl(t.nowInput, t.dateEnv)),
      this.initHiddenDays();
  }
  buildPrev(t, n, r) {
    let { dateEnv: i } = this.props,
      l = i.subtract(i.startOf(n, t.currentRangeUnit), t.dateIncrement);
    return this.build(l, -1, r);
  }
  buildNext(t, n, r) {
    let { dateEnv: i } = this.props,
      l = i.add(i.startOf(n, t.currentRangeUnit), t.dateIncrement);
    return this.build(l, 1, r);
  }
  build(t, n, r = !0) {
    let { props: i } = this,
      l,
      o,
      s,
      a,
      u,
      c;
    return (
      (l = this.buildValidRange()),
      (l = this.trimHiddenDays(l)),
      r && (t = Cx(t, l)),
      (o = this.buildCurrentRangeInfo(t, n)),
      (s = /^(year|month|week|day)$/.test(o.unit)),
      (a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s)),
      (a = this.trimHiddenDays(a)),
      (u = a),
      i.showNonCurrentDates || (u = cr(u, o.range)),
      (u = this.adjustActiveRange(u)),
      (u = cr(u, l)),
      (c = xx(o.range, l)),
      kn(a, t) || (t = a.start),
      {
        currentDate: t,
        validRange: l,
        currentRange: o.range,
        currentRangeUnit: o.unit,
        isRangeAllDay: s,
        activeRange: u,
        renderRange: a,
        slotMinTime: i.slotMinTime,
        slotMaxTime: i.slotMaxTime,
        isValid: c,
        dateIncrement: this.buildDateIncrement(o.duration),
      }
    );
  }
  buildValidRange() {
    let t = this.props.validRangeInput,
      n =
        typeof t == "function"
          ? t.call(this.props.calendarApi, this.nowDate)
          : t;
    return this.refineRange(n) || { start: null, end: null };
  }
  buildCurrentRangeInfo(t, n) {
    let { props: r } = this,
      i = null,
      l = null,
      o = null,
      s;
    return (
      r.duration
        ? ((i = r.duration),
          (l = r.durationUnit),
          (o = this.buildRangeFromDuration(t, n, i, l)))
        : (s = this.props.dayCount)
        ? ((l = "day"), (o = this.buildRangeFromDayCount(t, n, s)))
        : (o = this.buildCustomVisibleRange(t))
        ? (l = r.dateEnv.greatestWholeUnit(o.start, o.end).unit)
        : ((i = this.getFallbackDuration()),
          (l = Lu(i).unit),
          (o = this.buildRangeFromDuration(t, n, i, l))),
      { duration: i, unit: l, range: o }
    );
  }
  getFallbackDuration() {
    return K({ day: 1 });
  }
  adjustActiveRange(t) {
    let {
        dateEnv: n,
        usesMinMaxTime: r,
        slotMinTime: i,
        slotMaxTime: l,
      } = this.props,
      { start: o, end: s } = t;
    return (
      r &&
        (Gr(i) < 0 && ((o = ue(o)), (o = n.add(o, i))),
        Gr(l) > 1 && ((s = ue(s)), (s = Te(s, -1)), (s = n.add(s, l)))),
      { start: o, end: s }
    );
  }
  buildRangeFromDuration(t, n, r, i) {
    let { dateEnv: l, dateAlignment: o } = this.props,
      s,
      a,
      u;
    if (!o) {
      let { dateIncrement: f } = this.props;
      f && hl(f) < hl(r) ? (o = Lu(f).unit) : (o = i);
    }
    Gr(r) <= 1 &&
      this.isHiddenDay(s) &&
      ((s = this.skipHiddenDays(s, n)), (s = ue(s)));
    function c() {
      (s = l.startOf(t, o)), (a = l.add(s, r)), (u = { start: s, end: a });
    }
    return (
      c(), this.trimHiddenDays(u) || ((t = this.skipHiddenDays(t, n)), c()), u
    );
  }
  buildRangeFromDayCount(t, n, r) {
    let { dateEnv: i, dateAlignment: l } = this.props,
      o = 0,
      s = t,
      a;
    l && (s = i.startOf(s, l)),
      (s = ue(s)),
      (s = this.skipHiddenDays(s, n)),
      (a = s);
    do (a = Te(a, 1)), this.isHiddenDay(a) || (o += 1);
    while (o < r);
    return { start: s, end: a };
  }
  buildCustomVisibleRange(t) {
    let { props: n } = this,
      r = n.visibleRangeInput,
      i =
        typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(t)) : r,
      l = this.refineRange(i);
    return l && (l.start == null || l.end == null) ? null : l;
  }
  buildRenderRange(t, n, r) {
    return t;
  }
  buildDateIncrement(t) {
    let { dateIncrement: n } = this.props,
      r;
    return (
      n || ((r = this.props.dateAlignment) ? K(1, r) : t || K({ days: 1 }))
    );
  }
  refineRange(t) {
    if (t) {
      let n = Sx(t, this.props.dateEnv);
      return n && (n = rd(n)), n;
    }
    return null;
  }
  initHiddenDays() {
    let t = this.props.hiddenDays || [],
      n = [],
      r = 0,
      i;
    for (this.props.weekends === !1 && t.push(0, 6), i = 0; i < 7; i += 1)
      (n[i] = t.indexOf(i) !== -1) || (r += 1);
    if (!r) throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }
  trimHiddenDays(t) {
    let { start: n, end: r } = t;
    return (
      n && (n = this.skipHiddenDays(n)),
      r && (r = this.skipHiddenDays(r, -1, !0)),
      n == null || r == null || n < r ? { start: n, end: r } : null
    );
  }
  isHiddenDay(t) {
    return t instanceof Date && (t = t.getUTCDay()), this.isHiddenDayHash[t];
  }
  skipHiddenDays(t, n = 1, r = !1) {
    for (; this.isHiddenDayHash[(t.getUTCDay() + (r ? n : 0) + 7) % 7]; )
      t = Te(t, n);
    return t;
  }
}
function id(e, t, n, r) {
  return {
    instanceId: mr(),
    defId: e,
    range: t,
    forcedStartTzo: n ?? null,
    forcedEndTzo: r ?? null,
  };
}
function Rx(e, t, n, r) {
  for (let i = 0; i < r.length; i += 1) {
    let l = r[i].parse(e, n);
    if (l) {
      let { allDay: o } = e;
      return (
        o == null &&
          ((o = t), o == null && ((o = l.allDayGuess), o == null && (o = !1))),
        { allDay: o, duration: l.duration, typeData: l.typeData, typeId: i }
      );
    }
  }
  return null;
}
function Dl(e, t, n) {
  let { dateEnv: r, pluginHooks: i, options: l } = n,
    { defs: o, instances: s } = e;
  s = ii(s, (a) => !o[a.defId].recurringDef);
  for (let a in o) {
    let u = o[a];
    if (u.recurringDef) {
      let { duration: c } = u.recurringDef;
      c ||
        (c = u.allDay
          ? l.defaultAllDayEventDuration
          : l.defaultTimedEventDuration);
      let f = Dx(u, c, t, r, i.recurringTypes);
      for (let d of f) {
        let h = id(a, { start: d, end: r.add(d, c) });
        s[h.instanceId] = h;
      }
    }
  }
  return { defs: o, instances: s };
}
function Dx(e, t, n, r, i) {
  let o = i[e.recurringDef.typeId].expand(
    e.recurringDef.typeData,
    { start: r.subtract(n.start, t), end: n.end },
    r
  );
  return e.allDay && (o = o.map(ue)), o;
}
const xo = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean,
  },
  dv = { start: C, end: C, date: C, allDay: Boolean },
  Tx = Object.assign(Object.assign(Object.assign({}, xo), dv), {
    extendedProps: C,
  });
function fv(e, t, n, r, i = ld(n), l, o) {
  let { refined: s, extra: a } = hv(e, n, i),
    u = Mx(t, n),
    c = Rx(s, u, n.dateEnv, n.pluginHooks.recurringTypes);
  if (c) {
    let d = Uu(s, a, t ? t.sourceId : "", c.allDay, !!c.duration, n, l);
    return (
      (d.recurringDef = {
        typeId: c.typeId,
        typeData: c.typeData,
        duration: c.duration,
      }),
      { def: d, instance: null }
    );
  }
  let f = Nx(s, u, n, r);
  if (f) {
    let d = Uu(s, a, t ? t.sourceId : "", f.allDay, f.hasEnd, n, l),
      h = id(d.defId, f.range, f.forcedStartTzo, f.forcedEndTzo);
    return (
      o && d.publicId && o[d.publicId] && (h.instanceId = o[d.publicId]),
      { def: d, instance: h }
    );
  }
  return null;
}
function hv(e, t, n = ld(t)) {
  return Jc(e, n);
}
function ld(e) {
  return Object.assign(
    Object.assign(Object.assign({}, rs), Tx),
    e.pluginHooks.eventRefiners
  );
}
function Uu(e, t, n, r, i, l, o) {
  let s = {
    title: e.title || "",
    groupId: e.groupId || "",
    publicId: e.id || "",
    url: e.url || "",
    recurringDef: null,
    defId: (o && e.id ? o[e.id] : "") || mr(),
    sourceId: n,
    allDay: r,
    hasEnd: i,
    interactive: e.interactive,
    ui: is(e, l),
    extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t),
  };
  for (let a of l.pluginHooks.eventDefMemberAdders) Object.assign(s, a(e));
  return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
}
function Nx(e, t, n, r) {
  let { allDay: i } = e,
    l,
    o = null,
    s = !1,
    a,
    u = null,
    c = e.start != null ? e.start : e.date;
  if (((l = n.dateEnv.createMarkerMeta(c)), l)) o = l.marker;
  else if (!r) return null;
  return (
    e.end != null && (a = n.dateEnv.createMarkerMeta(e.end)),
    i == null &&
      (t != null
        ? (i = t)
        : (i = (!l || l.isTimeUnspecified) && (!a || a.isTimeUnspecified))),
    i && o && (o = ue(o)),
    a && ((u = a.marker), i && (u = ue(u)), o && u <= o && (u = null)),
    u
      ? (s = !0)
      : r ||
        ((s = n.options.forceEventDuration || !1),
        (u = n.dateEnv.add(
          o,
          i
            ? n.options.defaultAllDayEventDuration
            : n.options.defaultTimedEventDuration
        ))),
    {
      allDay: i,
      hasEnd: s,
      range: { start: o, end: u },
      forcedStartTzo: l ? l.forcedTzo : null,
      forcedEndTzo: a ? a.forcedTzo : null,
    }
  );
}
function Mx(e, t) {
  let n = null;
  return (
    e && (n = e.defaultAllDay), n == null && (n = t.options.defaultAllDay), n
  );
}
function pl(e, t, n, r, i, l) {
  let o = dr(),
    s = ld(n);
  for (let a of e) {
    let u = fv(a, t, n, r, s, i, l);
    u && Hu(u, o);
  }
  return o;
}
function Hu(e, t = dr()) {
  return (
    (t.defs[e.def.defId] = e.def),
    e.instance && (t.instances[e.instance.instanceId] = e.instance),
    t
  );
}
function Ix(e, t) {
  let n = e.instances[t];
  if (n) {
    let r = e.defs[n.defId],
      i = sd(e, (l) => Ox(r, l));
    return (i.defs[r.defId] = r), (i.instances[n.instanceId] = n), i;
  }
  return dr();
}
function Ox(e, t) {
  return !!(e.groupId && e.groupId === t.groupId);
}
function dr() {
  return { defs: {}, instances: {} };
}
function od(e, t) {
  return {
    defs: Object.assign(Object.assign({}, e.defs), t.defs),
    instances: Object.assign(Object.assign({}, e.instances), t.instances),
  };
}
function sd(e, t) {
  let n = ii(e.defs, t),
    r = ii(e.instances, (i) => n[i.defId]);
  return { defs: n, instances: r };
}
function Px(e, t) {
  let { defs: n, instances: r } = e,
    i = {},
    l = {};
  for (let o in n) t.defs[o] || (i[o] = n[o]);
  for (let o in r) !t.instances[o] && i[r[o].defId] && (l[o] = r[o]);
  return { defs: i, instances: l };
}
function jx(e, t) {
  return Array.isArray(e)
    ? pl(e, null, t, !0)
    : typeof e == "object" && e
    ? pl([e], null, t, !0)
    : e != null
    ? String(e)
    : null;
}
function Oh(e) {
  return Array.isArray(e) ? e : typeof e == "string" ? e.split(/\s+/) : [];
}
const rs = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: C,
    overlap: C,
    allow: C,
    className: Oh,
    classNames: Oh,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String,
  },
  Lx = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    classNames: [],
  };
function is(e, t) {
  let n = jx(e.constraint, t);
  return {
    display: e.display || null,
    startEditable: e.startEditable != null ? e.startEditable : e.editable,
    durationEditable:
      e.durationEditable != null ? e.durationEditable : e.editable,
    constraints: n != null ? [n] : [],
    overlap: e.overlap != null ? e.overlap : null,
    allows: e.allow != null ? [e.allow] : [],
    backgroundColor: e.backgroundColor || e.color || "",
    borderColor: e.borderColor || e.color || "",
    textColor: e.textColor || "",
    classNames: (e.className || []).concat(e.classNames || []),
  };
}
function zx(e) {
  return e.reduce(Fx, Lx);
}
function Fx(e, t) {
  return {
    display: t.display != null ? t.display : e.display,
    startEditable: t.startEditable != null ? t.startEditable : e.startEditable,
    durationEditable:
      t.durationEditable != null ? t.durationEditable : e.durationEditable,
    constraints: e.constraints.concat(t.constraints),
    overlap: typeof t.overlap == "boolean" ? t.overlap : e.overlap,
    allows: e.allows.concat(t.allows),
    backgroundColor: t.backgroundColor || e.backgroundColor,
    borderColor: t.borderColor || e.borderColor,
    textColor: t.textColor || e.textColor,
    classNames: e.classNames.concat(t.classNames),
  };
}
const Bx = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: C,
  eventDataTransform: C,
  success: C,
  failure: C,
};
function pv(e, t, n = mv(t)) {
  let r;
  if (
    (typeof e == "string"
      ? (r = { url: e })
      : typeof e == "function" || Array.isArray(e)
      ? (r = { events: e })
      : typeof e == "object" && e && (r = e),
    r)
  ) {
    let { refined: i, extra: l } = Jc(r, n),
      o = Ux(i, t);
    if (o)
      return {
        _raw: e,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: mr(),
        sourceDefId: o.sourceDefId,
        meta: o.meta,
        ui: is(i, t),
        extendedProps: l,
      };
  }
  return null;
}
function mv(e) {
  return Object.assign(
    Object.assign(Object.assign({}, rs), Bx),
    e.pluginHooks.eventSourceRefiners
  );
}
function Ux(e, t) {
  let n = t.pluginHooks.eventSourceDefs;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    let l = n[r].parseMeta(e);
    if (l) return { sourceDefId: r, meta: l };
  }
  return null;
}
function Hx(e, t, n, r, i) {
  switch (t.type) {
    case "RECEIVE_EVENTS":
      return Wx(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
    case "RESET_RAW_EVENTS":
      return Vx(e, n[t.sourceId], t.rawEvents, r.activeRange, i);
    case "ADD_EVENTS":
      return $x(e, t.eventStore, r ? r.activeRange : null, i);
    case "RESET_EVENTS":
      return t.eventStore;
    case "MERGE_EVENTS":
      return od(e, t.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Dl(e, r.activeRange, i) : e;
    case "REMOVE_EVENTS":
      return Px(e, t.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return vv(e, t.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return sd(e, (l) => !l.sourceId);
    case "REMOVE_ALL_EVENTS":
      return dr();
    default:
      return e;
  }
}
function Wx(e, t, n, r, i, l) {
  if (t && n === t.latestFetchId) {
    let o = pl(gv(i, t, l), t, l);
    return r && (o = Dl(o, r, l)), od(vv(e, t.sourceId), o);
  }
  return e;
}
function Vx(e, t, n, r, i) {
  const { defIdMap: l, instanceIdMap: o } = Qx(e);
  let s = pl(gv(n, t, i), t, i, !1, l, o);
  return Dl(s, r, i);
}
function gv(e, t, n) {
  let r = n.options.eventDataTransform,
    i = t ? t.eventDataTransform : null;
  return i && (e = Ph(e, i)), r && (e = Ph(e, r)), e;
}
function Ph(e, t) {
  let n;
  if (!t) n = e;
  else {
    n = [];
    for (let r of e) {
      let i = t(r);
      i ? n.push(i) : i == null && n.push(r);
    }
  }
  return n;
}
function $x(e, t, n, r) {
  return n && (t = Dl(t, n, r)), od(e, t);
}
function jh(e, t, n) {
  let { defs: r } = e,
    i = _l(e.instances, (l) =>
      r[l.defId].allDay
        ? l
        : Object.assign(Object.assign({}, l), {
            range: {
              start: n.createMarker(t.toDate(l.range.start, l.forcedStartTzo)),
              end: n.createMarker(t.toDate(l.range.end, l.forcedEndTzo)),
            },
            forcedStartTzo: n.canComputeOffset ? null : l.forcedStartTzo,
            forcedEndTzo: n.canComputeOffset ? null : l.forcedEndTzo,
          })
    );
  return { defs: r, instances: i };
}
function vv(e, t) {
  return sd(e, (n) => n.sourceId !== t);
}
function Qx(e) {
  const { defs: t, instances: n } = e,
    r = {},
    i = {};
  for (let l in t) {
    const o = t[l],
      { publicId: s } = o;
    s && (r[s] = l);
  }
  for (let l in n) {
    const o = n[l],
      s = t[o.defId],
      { publicId: a } = s;
    a && (i[a] = l);
  }
  return { defIdMap: r, instanceIdMap: i };
}
class Gx {
  constructor() {
    (this.handlers = {}), (this.thisContext = null);
  }
  setThisContext(t) {
    this.thisContext = t;
  }
  setOptions(t) {
    this.options = t;
  }
  on(t, n) {
    Yx(this.handlers, t, n);
  }
  off(t, n) {
    qx(this.handlers, t, n);
  }
  trigger(t, ...n) {
    let r = this.handlers[t] || [],
      i = this.options && this.options[t],
      l = [].concat(i || [], r);
    for (let o of l) o.apply(this.thisContext, n);
  }
  hasHandlers(t) {
    return !!(
      (this.handlers[t] && this.handlers[t].length) ||
      (this.options && this.options[t])
    );
  }
}
function Yx(e, t, n) {
  (e[t] || (e[t] = [])).push(n);
}
function qx(e, t, n) {
  n ? e[t] && (e[t] = e[t].filter((r) => r !== n)) : delete e[t];
}
const Zx = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours",
};
function Kx(e, t) {
  return pl(Xx(e), null, t);
}
function Xx(e) {
  let t;
  return (
    e === !0
      ? (t = [{}])
      : Array.isArray(e)
      ? (t = e.filter((n) => n.daysOfWeek))
      : typeof e == "object" && e
      ? (t = [e])
      : (t = []),
    (t = t.map((n) => Object.assign(Object.assign({}, Zx), n))),
    t
  );
}
function Jx(e, t, n) {
  n.emitter.trigger(
    "select",
    Object.assign(Object.assign({}, tC(e, n)), {
      jsEvent: t ? t.origEvent : null,
      view: n.viewApi || n.calendarApi.view,
    })
  );
}
function eC(e, t) {
  t.emitter.trigger("unselect", {
    jsEvent: e ? e.origEvent : null,
    view: t.viewApi || t.calendarApi.view,
  });
}
function tC(e, t) {
  let n = {};
  for (let r of t.pluginHooks.dateSpanTransforms) Object.assign(n, r(e, t));
  return Object.assign(n, pC(e, t.dateEnv)), n;
}
function Lh(e, t, n) {
  let { dateEnv: r, options: i } = n,
    l = t;
  return (
    e
      ? ((l = ue(l)), (l = r.add(l, i.defaultAllDayEventDuration)))
      : (l = r.add(l, i.defaultTimedEventDuration)),
    l
  );
}
function nC(e, t, n, r) {
  let i = wv(e.defs, t),
    l = dr();
  for (let o in e.defs) {
    let s = e.defs[o];
    l.defs[o] = rC(s, i[o], n, r);
  }
  for (let o in e.instances) {
    let s = e.instances[o],
      a = l.defs[s.defId];
    l.instances[o] = iC(s, a, i[s.defId], n, r);
  }
  return l;
}
function rC(e, t, n, r) {
  let i = n.standardProps || {};
  i.hasEnd == null &&
    t.durationEditable &&
    (n.startDelta || n.endDelta) &&
    (i.hasEnd = !0);
  let l = Object.assign(Object.assign(Object.assign({}, e), i), {
    ui: Object.assign(Object.assign({}, e.ui), i.ui),
  });
  n.extendedProps &&
    (l.extendedProps = Object.assign(
      Object.assign({}, l.extendedProps),
      n.extendedProps
    ));
  for (let o of r.pluginHooks.eventDefMutationAppliers) o(l, n, r);
  return !l.hasEnd && r.options.forceEventDuration && (l.hasEnd = !0), l;
}
function iC(e, t, n, r, i) {
  let { dateEnv: l } = i,
    o = r.standardProps && r.standardProps.allDay === !0,
    s = r.standardProps && r.standardProps.hasEnd === !1,
    a = Object.assign({}, e);
  return (
    o && (a.range = uv(a.range)),
    r.datesDelta &&
      n.startEditable &&
      (a.range = {
        start: l.add(a.range.start, r.datesDelta),
        end: l.add(a.range.end, r.datesDelta),
      }),
    r.startDelta &&
      n.durationEditable &&
      (a.range = {
        start: l.add(a.range.start, r.startDelta),
        end: a.range.end,
      }),
    r.endDelta &&
      n.durationEditable &&
      (a.range = { start: a.range.start, end: l.add(a.range.end, r.endDelta) }),
    s &&
      (a.range = { start: a.range.start, end: Lh(t.allDay, a.range.start, i) }),
    t.allDay && (a.range = { start: ue(a.range.start), end: ue(a.range.end) }),
    a.range.end < a.range.start &&
      (a.range.end = Lh(t.allDay, a.range.start, i)),
    a
  );
}
class Cr {
  constructor(t, n) {
    (this.context = t), (this.internalEventSource = n);
  }
  remove() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId,
    });
  }
  refetch() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0,
    });
  }
  get id() {
    return this.internalEventSource.publicId;
  }
  get url() {
    return this.internalEventSource.meta.url;
  }
  get format() {
    return this.internalEventSource.meta.format;
  }
}
class at {
  constructor(t, n, r) {
    (this._context = t), (this._def = n), (this._instance = r || null);
  }
  setProp(t, n) {
    if (t in dv)
      console.warn(
        "Could not set date-related prop 'name'. Use one of the date-related methods instead."
      );
    else if (t === "id")
      (n = xo[t](n)), this.mutate({ standardProps: { publicId: n } });
    else if (t in xo)
      (n = xo[t](n)), this.mutate({ standardProps: { [t]: n } });
    else if (t in rs) {
      let r = rs[t](n);
      t === "color"
        ? (r = { backgroundColor: n, borderColor: n })
        : t === "editable"
        ? (r = { startEditable: n, durationEditable: n })
        : (r = { [t]: n }),
        this.mutate({ standardProps: { ui: r } });
    } else
      console.warn(`Could not set prop '${t}'. Use setExtendedProp instead.`);
  }
  setExtendedProp(t, n) {
    this.mutate({ extendedProps: { [t]: n } });
  }
  setStart(t, n = {}) {
    let { dateEnv: r } = this._context,
      i = r.createMarker(t);
    if (i && this._instance) {
      let l = this._instance.range,
        o = eo(l.start, i, r, n.granularity);
      n.maintainDuration
        ? this.mutate({ datesDelta: o })
        : this.mutate({ startDelta: o });
    }
  }
  setEnd(t, n = {}) {
    let { dateEnv: r } = this._context,
      i;
    if (!(t != null && ((i = r.createMarker(t)), !i)) && this._instance)
      if (i) {
        let l = eo(this._instance.range.end, i, r, n.granularity);
        this.mutate({ endDelta: l });
      } else this.mutate({ standardProps: { hasEnd: !1 } });
  }
  setDates(t, n, r = {}) {
    let { dateEnv: i } = this._context,
      l = { allDay: r.allDay },
      o = i.createMarker(t),
      s;
    if (o && !(n != null && ((s = i.createMarker(n)), !s)) && this._instance) {
      let a = this._instance.range;
      r.allDay === !0 && (a = uv(a));
      let u = eo(a.start, o, i, r.granularity);
      if (s) {
        let c = eo(a.end, s, i, r.granularity);
        xb(u, c)
          ? this.mutate({ datesDelta: u, standardProps: l })
          : this.mutate({ startDelta: u, endDelta: c, standardProps: l });
      } else (l.hasEnd = !1), this.mutate({ datesDelta: u, standardProps: l });
    }
  }
  moveStart(t) {
    let n = K(t);
    n && this.mutate({ startDelta: n });
  }
  moveEnd(t) {
    let n = K(t);
    n && this.mutate({ endDelta: n });
  }
  moveDates(t) {
    let n = K(t);
    n && this.mutate({ datesDelta: n });
  }
  setAllDay(t, n = {}) {
    let r = { allDay: t },
      { maintainDuration: i } = n;
    i == null && (i = this._context.options.allDayMaintainDuration),
      this._def.allDay !== t && (r.hasEnd = i),
      this.mutate({ standardProps: r });
  }
  formatRange(t) {
    let { dateEnv: n } = this._context,
      r = this._instance,
      i = xe(t);
    return this._def.hasEnd
      ? n.formatRange(r.range.start, r.range.end, i, {
          forcedStartTzo: r.forcedStartTzo,
          forcedEndTzo: r.forcedEndTzo,
        })
      : n.format(r.range.start, i, { forcedTzo: r.forcedStartTzo });
  }
  mutate(t) {
    let n = this._instance;
    if (n) {
      let r = this._def,
        i = this._context,
        { eventStore: l } = i.getCurrentData(),
        o = Ix(l, n.instanceId);
      o = nC(
        o,
        {
          "": {
            display: "",
            startEditable: !0,
            durationEditable: !0,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: [],
          },
        },
        t,
        i
      );
      let a = new at(i, r, n);
      (this._def = o.defs[r.defId]),
        (this._instance = o.instances[n.instanceId]),
        i.dispatch({ type: "MERGE_EVENTS", eventStore: o }),
        i.emitter.trigger("eventChange", {
          oldEvent: a,
          event: this,
          relatedEvents: ad(o, i, n),
          revert() {
            i.dispatch({ type: "RESET_EVENTS", eventStore: l });
          },
        });
    }
  }
  remove() {
    let t = this._context,
      n = yv(this);
    t.dispatch({ type: "REMOVE_EVENTS", eventStore: n }),
      t.emitter.trigger("eventRemove", {
        event: this,
        relatedEvents: [],
        revert() {
          t.dispatch({ type: "MERGE_EVENTS", eventStore: n });
        },
      });
  }
  get source() {
    let { sourceId: t } = this._def;
    return t
      ? new Cr(this._context, this._context.getCurrentData().eventSources[t])
      : null;
  }
  get start() {
    return this._instance
      ? this._context.dateEnv.toDate(this._instance.range.start)
      : null;
  }
  get end() {
    return this._instance && this._def.hasEnd
      ? this._context.dateEnv.toDate(this._instance.range.end)
      : null;
  }
  get startStr() {
    let t = this._instance;
    return t
      ? this._context.dateEnv.formatIso(t.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: t.forcedStartTzo,
        })
      : "";
  }
  get endStr() {
    let t = this._instance;
    return t && this._def.hasEnd
      ? this._context.dateEnv.formatIso(t.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: t.forcedEndTzo,
        })
      : "";
  }
  get id() {
    return this._def.publicId;
  }
  get groupId() {
    return this._def.groupId;
  }
  get allDay() {
    return this._def.allDay;
  }
  get title() {
    return this._def.title;
  }
  get url() {
    return this._def.url;
  }
  get display() {
    return this._def.ui.display || "auto";
  }
  get startEditable() {
    return this._def.ui.startEditable;
  }
  get durationEditable() {
    return this._def.ui.durationEditable;
  }
  get constraint() {
    return this._def.ui.constraints[0] || null;
  }
  get overlap() {
    return this._def.ui.overlap;
  }
  get allow() {
    return this._def.ui.allows[0] || null;
  }
  get backgroundColor() {
    return this._def.ui.backgroundColor;
  }
  get borderColor() {
    return this._def.ui.borderColor;
  }
  get textColor() {
    return this._def.ui.textColor;
  }
  get classNames() {
    return this._def.ui.classNames;
  }
  get extendedProps() {
    return this._def.extendedProps;
  }
  toPlainObject(t = {}) {
    let n = this._def,
      { ui: r } = n,
      { startStr: i, endStr: l } = this,
      o = { allDay: n.allDay };
    return (
      n.title && (o.title = n.title),
      i && (o.start = i),
      l && (o.end = l),
      n.publicId && (o.id = n.publicId),
      n.groupId && (o.groupId = n.groupId),
      n.url && (o.url = n.url),
      r.display && r.display !== "auto" && (o.display = r.display),
      t.collapseColor &&
      r.backgroundColor &&
      r.backgroundColor === r.borderColor
        ? (o.color = r.backgroundColor)
        : (r.backgroundColor && (o.backgroundColor = r.backgroundColor),
          r.borderColor && (o.borderColor = r.borderColor)),
      r.textColor && (o.textColor = r.textColor),
      r.classNames.length && (o.classNames = r.classNames),
      Object.keys(n.extendedProps).length &&
        (t.collapseExtendedProps
          ? Object.assign(o, n.extendedProps)
          : (o.extendedProps = n.extendedProps)),
      o
    );
  }
  toJSON() {
    return this.toPlainObject();
  }
}
function yv(e) {
  let t = e._def,
    n = e._instance;
  return { defs: { [t.defId]: t }, instances: n ? { [n.instanceId]: n } : {} };
}
function ad(e, t, n) {
  let { defs: r, instances: i } = e,
    l = [],
    o = n ? n.instanceId : "";
  for (let s in i) {
    let a = i[s],
      u = r[a.defId];
    a.instanceId !== o && l.push(new at(t, u, a));
  }
  return l;
}
function Wu(e, t, n, r) {
  let i = {},
    l = {},
    o = {},
    s = [],
    a = [],
    u = wv(e.defs, t);
  for (let c in e.defs) {
    let f = e.defs[c];
    u[f.defId].display === "inverse-background" &&
      (f.groupId
        ? ((i[f.groupId] = []), o[f.groupId] || (o[f.groupId] = f))
        : (l[c] = []));
  }
  for (let c in e.instances) {
    let f = e.instances[c],
      d = e.defs[f.defId],
      h = u[d.defId],
      v = f.range,
      y = !d.allDay && r ? rd(v, r) : v,
      S = cr(y, n);
    S &&
      (h.display === "inverse-background"
        ? d.groupId
          ? i[d.groupId].push(S)
          : l[f.defId].push(S)
        : h.display !== "none" &&
          (h.display === "background" ? s : a).push({
            def: d,
            ui: h,
            instance: f,
            range: S,
            isStart: y.start && y.start.valueOf() === S.start.valueOf(),
            isEnd: y.end && y.end.valueOf() === S.end.valueOf(),
          }));
  }
  for (let c in i) {
    let f = i[c],
      d = Ih(f, n);
    for (let h of d) {
      let v = o[c],
        y = u[v.defId];
      s.push({
        def: v,
        ui: y,
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1,
      });
    }
  }
  for (let c in l) {
    let f = l[c],
      d = Ih(f, n);
    for (let h of d)
      s.push({
        def: e.defs[c],
        ui: u[c],
        instance: null,
        range: h,
        isStart: !1,
        isEnd: !1,
      });
  }
  return { bg: s, fg: a };
}
function zh(e, t) {
  e.fcSeg = t;
}
function Vu(e) {
  return e.fcSeg || e.parentNode.fcSeg || null;
}
function wv(e, t) {
  return _l(e, (n) => Ev(n, t));
}
function Ev(e, t) {
  let n = [];
  return (
    t[""] && n.push(t[""]),
    t[e.defId] && n.push(t[e.defId]),
    n.push(e.ui),
    zx(n)
  );
}
function Sv(e, t) {
  let n = e.map(lC);
  return n.sort((r, i) => vb(r, i, t)), n.map((r) => r._seg);
}
function lC(e) {
  let { eventRange: t } = e,
    n = t.def,
    r = t.instance ? t.instance.range : t.range,
    i = r.start ? r.start.valueOf() : 0,
    l = r.end ? r.end.valueOf() : 0;
  return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
    id: n.publicId,
    start: i,
    end: l,
    duration: l - i,
    allDay: Number(n.allDay),
    _seg: e,
  });
}
function oC(e, t) {
  let { pluginHooks: n } = t,
    r = n.isDraggableTransformers,
    { def: i, ui: l } = e.eventRange,
    o = l.startEditable;
  for (let s of r) o = s(o, i, l, t);
  return o;
}
function sC(e, t) {
  return (
    e.isStart &&
    e.eventRange.ui.durationEditable &&
    t.options.eventResizableFromStart
  );
}
function aC(e, t) {
  return e.isEnd && e.eventRange.ui.durationEditable;
}
function Vi(e, t, n, r, i, l, o) {
  let { dateEnv: s, options: a } = n,
    { displayEventTime: u, displayEventEnd: c } = a,
    f = e.eventRange.def,
    d = e.eventRange.instance;
  u == null && (u = r !== !1), c == null && (c = i !== !1);
  let h = d.range.start,
    v = d.range.end,
    y = l || e.start || e.eventRange.range.start,
    S = o || e.end || e.eventRange.range.end,
    p = ue(h).valueOf() === ue(y).valueOf(),
    m = ue(In(v, -1)).valueOf() === ue(In(S, -1)).valueOf();
  return u && !f.allDay && (p || m)
    ? ((y = p ? h : y),
      (S = m ? v : S),
      c && f.hasEnd
        ? s.formatRange(y, S, t, {
            forcedStartTzo: l ? null : d.forcedStartTzo,
            forcedEndTzo: o ? null : d.forcedEndTzo,
          })
        : s.format(y, t, { forcedTzo: l ? null : d.forcedStartTzo }))
    : "";
}
function Yr(e, t, n) {
  let r = e.eventRange.range;
  return {
    isPast: r.end < (n || t.start),
    isFuture: r.start >= (n || t.end),
    isToday: t && kn(t, r.start),
  };
}
function uC(e) {
  let t = ["fc-event"];
  return (
    e.isMirror && t.push("fc-event-mirror"),
    e.isDraggable && t.push("fc-event-draggable"),
    (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
    e.isDragging && t.push("fc-event-dragging"),
    e.isResizing && t.push("fc-event-resizing"),
    e.isSelected && t.push("fc-event-selected"),
    e.isStart && t.push("fc-event-start"),
    e.isEnd && t.push("fc-event-end"),
    e.isPast && t.push("fc-event-past"),
    e.isToday && t.push("fc-event-today"),
    e.isFuture && t.push("fc-event-future"),
    t
  );
}
function cC(e) {
  return e.instance
    ? e.instance.instanceId
    : `${e.def.defId}:${e.range.start.toISOString()}`;
}
function ud(e, t) {
  let { def: n, instance: r } = e.eventRange,
    { url: i } = n;
  if (i) return { href: i };
  let { emitter: l, options: o } = t,
    { eventInteractive: s } = o;
  return (
    s == null &&
      ((s = n.interactive), s == null && (s = !!l.hasHandlers("eventClick"))),
    s
      ? tv((a) => {
          l.trigger("eventClick", {
            el: a.target,
            event: new at(t, n, r),
            jsEvent: a,
            view: t.viewApi,
          });
        })
      : {}
  );
}
const dC = { start: C, end: C, allDay: Boolean };
function fC(e, t, n) {
  let r = hC(e, t),
    { range: i } = r;
  if (!i.start) return null;
  if (!i.end) {
    if (n == null) return null;
    i.end = t.add(i.start, n);
  }
  return r;
}
function hC(e, t) {
  let { refined: n, extra: r } = Jc(e, dC),
    i = n.start ? t.createMarkerMeta(n.start) : null,
    l = n.end ? t.createMarkerMeta(n.end) : null,
    { allDay: o } = n;
  return (
    o == null && (o = i && i.isTimeUnspecified && (!l || l.isTimeUnspecified)),
    Object.assign(
      {
        range: { start: i ? i.marker : null, end: l ? l.marker : null },
        allDay: o,
      },
      r
    )
  );
}
function pC(e, t) {
  return Object.assign(Object.assign({}, xv(e.range, t, e.allDay)), {
    allDay: e.allDay,
  });
}
function bv(e, t, n) {
  return Object.assign(Object.assign({}, xv(e, t, n)), {
    timeZone: t.timeZone,
  });
}
function xv(e, t, n) {
  return {
    start: t.toDate(e.start),
    end: t.toDate(e.end),
    startStr: t.formatIso(e.start, { omitTime: n }),
    endStr: t.formatIso(e.end, { omitTime: n }),
  };
}
function mC(e, t, n) {
  let r = hv({ editable: !1 }, n),
    i = Uu(r.refined, r.extra, "", e.allDay, !0, n);
  return {
    def: i,
    ui: Ev(i, t),
    instance: id(i.defId, e.range),
    range: e.range,
    isStart: !0,
    isEnd: !0,
  };
}
function gC(e, t, n) {
  let r = !1,
    i = function (s) {
      r || ((r = !0), t(s));
    },
    l = function (s) {
      r || ((r = !0), n(s));
    },
    o = e(i, l);
  o && typeof o.then == "function" && o.then(i, l);
}
class Fh extends Error {
  constructor(t, n) {
    super(t), (this.response = n);
  }
}
function vC(e, t, n) {
  e = e.toUpperCase();
  const r = { method: e };
  return (
    e === "GET"
      ? (t += (t.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n))
      : ((r.body = new URLSearchParams(n)),
        (r.headers = { "Content-Type": "application/x-www-form-urlencoded" })),
    fetch(t, r).then((i) => {
      if (i.ok)
        return i.json().then(
          (l) => [l, i],
          () => {
            throw new Fh("Failure parsing JSON", i);
          }
        );
      throw new Fh("Request failed", i);
    })
  );
}
let Ta;
function Cv() {
  return Ta == null && (Ta = yC()), Ta;
}
function yC() {
  if (typeof document > "u") return !0;
  let e = document.createElement("div");
  (e.style.position = "absolute"),
    (e.style.top = "0px"),
    (e.style.left = "0px"),
    (e.innerHTML = "<table><tr><td><div></div></td></tr></table>"),
    (e.querySelector("table").style.height = "100px"),
    (e.querySelector("div").style.height = "100%"),
    document.body.appendChild(e);
  let n = e.querySelector("div").offsetHeight > 0;
  return document.body.removeChild(e), n;
}
class wC extends oe {
  constructor() {
    super(...arguments),
      (this.state = { forPrint: !1 }),
      (this.handleBeforePrint = () => {
        this.setState({ forPrint: !0 });
      }),
      (this.handleAfterPrint = () => {
        this.setState({ forPrint: !1 });
      });
  }
  render() {
    let { props: t } = this,
      { options: n } = t,
      { forPrint: r } = this.state,
      i = r || n.height === "auto" || n.contentHeight === "auto",
      l = !i && n.height != null ? n.height : "",
      o = [
        "fc",
        r ? "fc-media-print" : "fc-media-screen",
        `fc-direction-${n.direction}`,
        t.theme.getClass("root"),
      ];
    return Cv() || o.push("fc-liquid-hack"), t.children(o, l, i, r);
  }
  componentDidMount() {
    let { emitter: t } = this.props;
    t.on("_beforeprint", this.handleBeforePrint),
      t.on("_afterprint", this.handleAfterPrint);
  }
  componentWillUnmount() {
    let { emitter: t } = this.props;
    t.off("_beforeprint", this.handleBeforePrint),
      t.off("_afterprint", this.handleAfterPrint);
  }
}
class Av {
  constructor(t) {
    (this.component = t.component),
      (this.isHitComboAllowed = t.isHitComboAllowed || null);
  }
  destroy() {}
}
function EC(e, t) {
  return {
    component: e,
    el: t.el,
    useEventCenter: t.useEventCenter != null ? t.useEventCenter : !0,
    isHitComboAllowed: t.isHitComboAllowed || null,
  };
}
const Bh = {};
class SC {
  getCurrentData() {
    return this.currentDataManager.getCurrentData();
  }
  dispatch(t) {
    this.currentDataManager.dispatch(t);
  }
  get view() {
    return this.getCurrentData().viewApi;
  }
  batchRendering(t) {
    t();
  }
  updateSize() {
    this.trigger("_resize", !0);
  }
  setOption(t, n) {
    this.dispatch({ type: "SET_OPTION", optionName: t, rawOptionValue: n });
  }
  getOption(t) {
    return this.currentDataManager.currentCalendarOptionsInput[t];
  }
  getAvailableLocaleCodes() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }
  on(t, n) {
    let { currentDataManager: r } = this;
    r.currentCalendarOptionsRefiners[t]
      ? r.emitter.on(t, n)
      : console.warn(`Unknown listener name '${t}'`);
  }
  off(t, n) {
    this.currentDataManager.emitter.off(t, n);
  }
  trigger(t, ...n) {
    this.currentDataManager.emitter.trigger(t, ...n);
  }
  changeView(t, n) {
    this.batchRendering(() => {
      if ((this.unselect(), n))
        if (n.start && n.end)
          this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t }),
            this.dispatch({
              type: "SET_OPTION",
              optionName: "visibleRange",
              rawOptionValue: n,
            });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: t,
            dateMarker: r.createMarker(n),
          });
        }
      else this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t });
    });
  }
  zoomTo(t, n) {
    let r = this.getCurrentData(),
      i;
    (n = n || "day"),
      (i = r.viewSpecs[n] || this.getUnitViewSpec(n)),
      this.unselect(),
      i
        ? this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: i.type,
            dateMarker: t,
          })
        : this.dispatch({ type: "CHANGE_DATE", dateMarker: t });
  }
  getUnitViewSpec(t) {
    let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(),
      i = [].concat(
        r.header ? r.header.viewsWithButtons : [],
        r.footer ? r.footer.viewsWithButtons : []
      ),
      l,
      o;
    for (let s in n) i.push(s);
    for (l = 0; l < i.length; l += 1)
      if (((o = n[i[l]]), o && o.singleUnit === t)) return o;
    return null;
  }
  prev() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }
  next() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }
  prevYear() {
    let t = this.getCurrentData();
    this.unselect(),
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: t.dateEnv.addYears(t.currentDate, -1),
      });
  }
  nextYear() {
    let t = this.getCurrentData();
    this.unselect(),
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: t.dateEnv.addYears(t.currentDate, 1),
      });
  }
  today() {
    let t = this.getCurrentData();
    this.unselect(),
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: Rl(t.calendarOptions.now, t.dateEnv),
      });
  }
  gotoDate(t) {
    let n = this.getCurrentData();
    this.unselect(),
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: n.dateEnv.createMarker(t),
      });
  }
  incrementDate(t) {
    let n = this.getCurrentData(),
      r = K(t);
    r &&
      (this.unselect(),
      this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: n.dateEnv.add(n.currentDate, r),
      }));
  }
  getDate() {
    let t = this.getCurrentData();
    return t.dateEnv.toDate(t.currentDate);
  }
  formatDate(t, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.format(r.createMarker(t), xe(n));
  }
  formatRange(t, n, r) {
    let { dateEnv: i } = this.getCurrentData();
    return i.formatRange(i.createMarker(t), i.createMarker(n), xe(r), r);
  }
  formatIso(t, n) {
    let { dateEnv: r } = this.getCurrentData();
    return r.formatIso(r.createMarker(t), { omitTime: n });
  }
  select(t, n) {
    let r;
    n == null
      ? t.start != null
        ? (r = t)
        : (r = { start: t, end: null })
      : (r = { start: t, end: n });
    let i = this.getCurrentData(),
      l = fC(r, i.dateEnv, K({ days: 1 }));
    l &&
      (this.dispatch({ type: "SELECT_DATES", selection: l }), Jx(l, null, i));
  }
  unselect(t) {
    let n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), eC(t, n));
  }
  addEvent(t, n) {
    if (t instanceof at) {
      let o = t._def,
        s = t._instance;
      return (
        this.getCurrentData().eventStore.defs[o.defId] ||
          (this.dispatch({
            type: "ADD_EVENTS",
            eventStore: Hu({ def: o, instance: s }),
          }),
          this.triggerEventAdd(t)),
        t
      );
    }
    let r = this.getCurrentData(),
      i;
    if (n instanceof Cr) i = n.internalEventSource;
    else if (typeof n == "boolean") n && ([i] = td(r.eventSources));
    else if (n != null) {
      let o = this.getEventSourceById(n);
      if (!o)
        return (
          console.warn(`Could not find an event source with ID "${n}"`), null
        );
      i = o.internalEventSource;
    }
    let l = fv(t, i, r, !1);
    if (l) {
      let o = new at(r, l.def, l.def.recurringDef ? null : l.instance);
      return (
        this.dispatch({ type: "ADD_EVENTS", eventStore: Hu(l) }),
        this.triggerEventAdd(o),
        o
      );
    }
    return null;
  }
  triggerEventAdd(t) {
    let { emitter: n } = this.getCurrentData();
    n.trigger("eventAdd", {
      event: t,
      relatedEvents: [],
      revert: () => {
        this.dispatch({ type: "REMOVE_EVENTS", eventStore: yv(t) });
      },
    });
  }
  getEventById(t) {
    let n = this.getCurrentData(),
      { defs: r, instances: i } = n.eventStore;
    t = String(t);
    for (let l in r) {
      let o = r[l];
      if (o.publicId === t) {
        if (o.recurringDef) return new at(n, o, null);
        for (let s in i) {
          let a = i[s];
          if (a.defId === o.defId) return new at(n, o, a);
        }
      }
    }
    return null;
  }
  getEvents() {
    let t = this.getCurrentData();
    return ad(t.eventStore, t);
  }
  removeAllEvents() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }
  getEventSources() {
    let t = this.getCurrentData(),
      n = t.eventSources,
      r = [];
    for (let i in n) r.push(new Cr(t, n[i]));
    return r;
  }
  getEventSourceById(t) {
    let n = this.getCurrentData(),
      r = n.eventSources;
    t = String(t);
    for (let i in r) if (r[i].publicId === t) return new Cr(n, r[i]);
    return null;
  }
  addEventSource(t) {
    let n = this.getCurrentData();
    if (t instanceof Cr)
      return (
        n.eventSources[t.internalEventSource.sourceId] ||
          this.dispatch({
            type: "ADD_EVENT_SOURCES",
            sources: [t.internalEventSource],
          }),
        t
      );
    let r = pv(t, n);
    return r
      ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [r] }),
        new Cr(n, r))
      : null;
  }
  removeAllEventSources() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }
  refetchEvents() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }
  scrollToTime(t) {
    let n = K(t);
    n && this.trigger("_scrollRequest", { time: n });
  }
}
function bC(e, t) {
  let n = {
    left: Math.max(e.left, t.left),
    right: Math.min(e.right, t.right),
    top: Math.max(e.top, t.top),
    bottom: Math.min(e.bottom, t.bottom),
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function cd(e, t, n, r) {
  return {
    dow: e.getUTCDay(),
    isDisabled: !!(r && !kn(r.activeRange, e)),
    isOther: !!(r && !kn(r.currentRange, e)),
    isToday: !!(t && kn(t, e)),
    isPast: !!(n ? e < n : t && e < t.start),
    isFuture: !!(n ? e > n : t && e >= t.end),
  };
}
function Ns(e, t) {
  let n = ["fc-day", `fc-day-${kb[e.dow]}`];
  return (
    e.isDisabled
      ? n.push("fc-day-disabled")
      : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))),
        e.isPast && n.push("fc-day-past"),
        e.isFuture && n.push("fc-day-future"),
        e.isOther && n.push("fc-day-other")),
    n
  );
}
const xC = xe({ year: "numeric", month: "long", day: "numeric" }),
  CC = xe({ week: "long" });
function ml(e, t, n = "day", r = !0) {
  const { dateEnv: i, options: l, calendarApi: o } = e;
  let s = i.format(t, n === "week" ? CC : xC);
  if (l.navLinks) {
    let a = i.toDate(t);
    const u = (c) => {
      let f =
        n === "day"
          ? l.navLinkDayClick
          : n === "week"
          ? l.navLinkWeekClick
          : null;
      typeof f == "function"
        ? f.call(o, i.toDate(t), c)
        : (typeof f == "string" && (n = f), o.zoomTo(t, n));
    };
    return Object.assign(
      { title: Hi(l.navLinkHint, [s, a], s), "data-navlink": "" },
      r ? ev(u) : { onClick: u }
    );
  }
  return { "aria-label": s };
}
let Na;
function AC() {
  return Na || (Na = _C()), Na;
}
function _C() {
  let e = document.createElement("div");
  (e.style.overflow = "scroll"),
    (e.style.position = "absolute"),
    (e.style.top = "-9999px"),
    (e.style.left = "-9999px"),
    document.body.appendChild(e);
  let t = kC(e);
  return document.body.removeChild(e), t;
}
function kC(e) {
  return {
    x: e.offsetHeight - e.clientHeight,
    y: e.offsetWidth - e.clientWidth,
  };
}
function RC(e) {
  let t = DC(e),
    n = e.getBoundingClientRect();
  for (let r of t) {
    let i = bC(n, r.getBoundingClientRect());
    if (i) n = i;
    else return null;
  }
  return n;
}
function DC(e) {
  let t = [];
  for (; e instanceof HTMLElement; ) {
    let n = window.getComputedStyle(e);
    if (n.position === "fixed") break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
      (e = e.parentNode);
  }
  return t;
}
class ls {
  constructor(t, n, r, i) {
    this.els = n;
    let l = (this.originClientRect = t.getBoundingClientRect());
    r && this.buildElHorizontals(l.left), i && this.buildElVerticals(l.top);
  }
  buildElHorizontals(t) {
    let n = [],
      r = [];
    for (let i of this.els) {
      let l = i.getBoundingClientRect();
      n.push(l.left - t), r.push(l.right - t);
    }
    (this.lefts = n), (this.rights = r);
  }
  buildElVerticals(t) {
    let n = [],
      r = [];
    for (let i of this.els) {
      let l = i.getBoundingClientRect();
      n.push(l.top - t), r.push(l.bottom - t);
    }
    (this.tops = n), (this.bottoms = r);
  }
  leftToIndex(t) {
    let { lefts: n, rights: r } = this,
      i = n.length,
      l;
    for (l = 0; l < i; l += 1) if (t >= n[l] && t < r[l]) return l;
  }
  topToIndex(t) {
    let { tops: n, bottoms: r } = this,
      i = n.length,
      l;
    for (l = 0; l < i; l += 1) if (t >= n[l] && t < r[l]) return l;
  }
  getWidth(t) {
    return this.rights[t] - this.lefts[t];
  }
  getHeight(t) {
    return this.bottoms[t] - this.tops[t];
  }
  similarTo(t) {
    return (
      to(this.tops || [], t.tops || []) &&
      to(this.bottoms || [], t.bottoms || []) &&
      to(this.lefts || [], t.lefts || []) &&
      to(this.rights || [], t.rights || [])
    );
  }
}
function to(e, t) {
  const n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++)
    if (Math.round(e[r]) !== Math.round(t[r])) return !1;
  return !0;
}
class zn extends oe {
  constructor() {
    super(...arguments), (this.uid = mr());
  }
  prepareHits() {}
  queryHit(t, n, r, i) {
    return null;
  }
  isValidSegDownEl(t) {
    return (
      !this.props.eventDrag &&
      !this.props.eventResize &&
      !Ht(t, ".fc-event-mirror")
    );
  }
  isValidDateDownEl(t) {
    return (
      !Ht(t, ".fc-event:not(.fc-bg-event)") &&
      !Ht(t, ".fc-more-link") &&
      !Ht(t, "a[data-navlink]") &&
      !Ht(t, ".fc-popover")
    );
  }
}
class TC {
  constructor(t = (n) => n.thickness) {
    (this.getEntryThickness = t),
      (this.strictOrder = !1),
      (this.allowReslicing = !1),
      (this.maxCoord = -1),
      (this.maxStackCnt = -1),
      (this.levelCoords = []),
      (this.entriesByLevel = []),
      (this.stackCnts = {});
  }
  addSegs(t) {
    let n = [];
    for (let r of t) this.insertEntry(r, n);
    return n;
  }
  insertEntry(t, n) {
    let r = this.findInsertion(t);
    return this.isInsertionValid(r, t)
      ? (this.insertEntryAt(t, r), 1)
      : this.handleInvalidInsertion(r, t, n);
  }
  isInsertionValid(t, n) {
    return (
      (this.maxCoord === -1 ||
        t.levelCoord + this.getEntryThickness(n) <= this.maxCoord) &&
      (this.maxStackCnt === -1 || t.stackCnt < this.maxStackCnt)
    );
  }
  handleInvalidInsertion(t, n, r) {
    return this.allowReslicing && t.touchingEntry
      ? this.splitEntry(n, t.touchingEntry, r)
      : (r.push(n), 0);
  }
  splitEntry(t, n, r) {
    let i = 0,
      l = [],
      o = t.span,
      s = n.span;
    return (
      o.start < s.start &&
        (i += this.insertEntry(
          {
            index: t.index,
            thickness: t.thickness,
            span: { start: o.start, end: s.start },
          },
          l
        )),
      o.end > s.end &&
        (i += this.insertEntry(
          {
            index: t.index,
            thickness: t.thickness,
            span: { start: s.end, end: o.end },
          },
          l
        )),
      i
        ? (r.push(
            { index: t.index, thickness: t.thickness, span: _v(s, o) },
            ...l
          ),
          i)
        : (r.push(t), 0)
    );
  }
  insertEntryAt(t, n) {
    let { entriesByLevel: r, levelCoords: i } = this;
    n.lateral === -1
      ? (Ma(i, n.level, n.levelCoord), Ma(r, n.level, [t]))
      : Ma(r[n.level], n.lateral, t),
      (this.stackCnts[$i(t)] = n.stackCnt);
  }
  findInsertion(t) {
    let {
        levelCoords: n,
        entriesByLevel: r,
        strictOrder: i,
        stackCnts: l,
      } = this,
      o = n.length,
      s = 0,
      a = -1,
      u = -1,
      c = null,
      f = 0;
    for (let v = 0; v < o; v += 1) {
      let y = n[v];
      if (!i && y >= s + this.getEntryThickness(t)) break;
      let S = r[v],
        p,
        m = Hh(S, t.span.start, Uh),
        E = m[0] + m[1];
      for (; (p = S[E]) && p.span.start < t.span.end; ) {
        let g = y + this.getEntryThickness(p);
        g > s && ((s = g), (c = p), (a = v), (u = E)),
          g === s && (f = Math.max(f, l[$i(p)] + 1)),
          (E += 1);
      }
    }
    let d = 0;
    if (c) for (d = a + 1; d < o && n[d] < s; ) d += 1;
    let h = -1;
    return (
      d < o && n[d] === s && (h = Hh(r[d], t.span.end, Uh)[0]),
      {
        touchingLevel: a,
        touchingLateral: u,
        touchingEntry: c,
        stackCnt: f,
        levelCoord: s,
        level: d,
        lateral: h,
      }
    );
  }
  toRects() {
    let { entriesByLevel: t, levelCoords: n } = this,
      r = t.length,
      i = [];
    for (let l = 0; l < r; l += 1) {
      let o = t[l],
        s = n[l];
      for (let a of o)
        i.push(
          Object.assign(Object.assign({}, a), {
            thickness: this.getEntryThickness(a),
            levelCoord: s,
          })
        );
    }
    return i;
  }
}
function Uh(e) {
  return e.span.end;
}
function $i(e) {
  return e.index + ":" + e.span.start;
}
function _v(e, t) {
  let n = Math.max(e.start, t.start),
    r = Math.min(e.end, t.end);
  return n < r ? { start: n, end: r } : null;
}
function Ma(e, t, n) {
  e.splice(t, 0, n);
}
function Hh(e, t, n) {
  let r = 0,
    i = e.length;
  if (!i || t < n(e[r])) return [0, 0];
  if (t > n(e[i - 1])) return [i, 0];
  for (; r < i; ) {
    let l = Math.floor(r + (i - r) / 2),
      o = n(e[l]);
    if (t < o) i = l;
    else if (t > o) r = l + 1;
    else return [l, 1];
  }
  return [r, 0];
}
function NC(e, t) {
  return !e || t > 10
    ? xe({ weekday: "short" })
    : t > 1
    ? xe({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 })
    : xe({ weekday: "long" });
}
const kv = "fc-col-header-cell";
function Rv(e) {
  return e.text;
}
class MC extends oe {
  render() {
    let { dateEnv: t, options: n, theme: r, viewApi: i } = this.context,
      { props: l } = this,
      { date: o, dateProfile: s } = l,
      a = cd(o, l.todayRange, null, s),
      u = [kv].concat(Ns(a, r)),
      c = t.format(o, l.dayHeaderFormat),
      f = !a.isDisabled && l.colCnt > 1 ? ml(this.context, o) : {},
      d = Object.assign(
        Object.assign(
          Object.assign({ date: t.toDate(o), view: i }, l.extraRenderProps),
          { text: c }
        ),
        a
      );
    return b(
      ft,
      {
        elTag: "th",
        elClasses: u,
        elAttrs: Object.assign(
          {
            role: "columnheader",
            colSpan: l.colSpan,
            "data-date": a.isDisabled ? void 0 : Al(o),
          },
          l.extraDataAttrs
        ),
        renderProps: d,
        generatorName: "dayHeaderContent",
        customGenerator: n.dayHeaderContent,
        defaultGenerator: Rv,
        classNameGenerator: n.dayHeaderClassNames,
        didMount: n.dayHeaderDidMount,
        willUnmount: n.dayHeaderWillUnmount,
      },
      (h) =>
        b(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          !a.isDisabled &&
            b(h, {
              elTag: "a",
              elAttrs: f,
              elClasses: [
                "fc-col-header-cell-cushion",
                l.isSticky && "fc-sticky",
              ],
            })
        )
    );
  }
}
const IC = xe({ weekday: "long" });
class OC extends oe {
  render() {
    let { props: t } = this,
      { dateEnv: n, theme: r, viewApi: i, options: l } = this.context,
      o = Te(new Date(2592e5), t.dow),
      s = {
        dow: t.dow,
        isDisabled: !1,
        isFuture: !1,
        isPast: !1,
        isToday: !1,
        isOther: !1,
      },
      a = n.format(o, t.dayHeaderFormat),
      u = Object.assign(
        Object.assign(
          Object.assign(Object.assign({ date: o }, s), { view: i }),
          t.extraRenderProps
        ),
        { text: a }
      );
    return b(
      ft,
      {
        elTag: "th",
        elClasses: [kv, ...Ns(s, r), ...(t.extraClassNames || [])],
        elAttrs: Object.assign(
          { role: "columnheader", colSpan: t.colSpan },
          t.extraDataAttrs
        ),
        renderProps: u,
        generatorName: "dayHeaderContent",
        customGenerator: l.dayHeaderContent,
        defaultGenerator: Rv,
        classNameGenerator: l.dayHeaderClassNames,
        didMount: l.dayHeaderDidMount,
        willUnmount: l.dayHeaderWillUnmount,
      },
      (c) =>
        b(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          b(c, {
            elTag: "a",
            elClasses: [
              "fc-col-header-cell-cushion",
              t.isSticky && "fc-sticky",
            ],
            elAttrs: { "aria-label": n.format(o, IC) },
          })
        )
    );
  }
}
class Ms extends et {
  constructor(t, n) {
    super(t, n),
      (this.initialNowDate = Rl(n.options.now, n.dateEnv)),
      (this.initialNowQueriedMs = new Date().valueOf()),
      (this.state = this.computeTiming().currentState);
  }
  render() {
    let { props: t, state: n } = this;
    return t.children(n.nowDate, n.todayRange);
  }
  componentDidMount() {
    this.setTimeout();
  }
  componentDidUpdate(t) {
    t.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }
  componentWillUnmount() {
    this.clearTimeout();
  }
  computeTiming() {
    let { props: t, context: n } = this,
      r = In(
        this.initialNowDate,
        new Date().valueOf() - this.initialNowQueriedMs
      ),
      i = n.dateEnv.startOf(r, t.unit),
      l = n.dateEnv.add(i, K(1, t.unit)),
      o = l.valueOf() - r.valueOf();
    return (
      (o = Math.min(1e3 * 60 * 60 * 24, o)),
      {
        currentState: { nowDate: i, todayRange: Wh(i) },
        nextState: { nowDate: l, todayRange: Wh(l) },
        waitMs: o,
      }
    );
  }
  setTimeout() {
    let { nextState: t, waitMs: n } = this.computeTiming();
    this.timeoutId = setTimeout(() => {
      this.setState(t, () => {
        this.setTimeout();
      });
    }, n);
  }
  clearTimeout() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }
}
Ms.contextType = vr;
function Wh(e) {
  let t = ue(e),
    n = Te(t, 1);
  return { start: t, end: n };
}
class PC extends oe {
  constructor() {
    super(...arguments), (this.createDayHeaderFormatter = Y(jC));
  }
  render() {
    let { context: t } = this,
      {
        dates: n,
        dateProfile: r,
        datesRepDistinctDays: i,
        renderIntro: l,
      } = this.props,
      o = this.createDayHeaderFormatter(t.options.dayHeaderFormat, i, n.length);
    return b(Ms, { unit: "day" }, (s, a) =>
      b(
        "tr",
        { role: "row" },
        l && l("day"),
        n.map((u) =>
          i
            ? b(MC, {
                key: u.toISOString(),
                date: u,
                dateProfile: r,
                todayRange: a,
                colCnt: n.length,
                dayHeaderFormat: o,
              })
            : b(OC, {
                key: u.getUTCDay(),
                dow: u.getUTCDay(),
                dayHeaderFormat: o,
              })
        )
      )
    );
  }
}
function jC(e, t, n) {
  return e || NC(t, n);
}
class LC {
  constructor(t, n) {
    let r = t.start,
      { end: i } = t,
      l = [],
      o = [],
      s = -1;
    for (; r < i; )
      n.isHiddenDay(r) ? l.push(s + 0.5) : ((s += 1), l.push(s), o.push(r)),
        (r = Te(r, 1));
    (this.dates = o), (this.indices = l), (this.cnt = o.length);
  }
  sliceRange(t) {
    let n = this.getDateDayIndex(t.start),
      r = this.getDateDayIndex(Te(t.end, -1)),
      i = Math.max(0, n),
      l = Math.min(this.cnt - 1, r);
    return (
      (i = Math.ceil(i)),
      (l = Math.floor(l)),
      i <= l
        ? { firstIndex: i, lastIndex: l, isStart: n === i, isEnd: r === l }
        : null
    );
  }
  getDateDayIndex(t) {
    let { indices: n } = this,
      r = Math.floor(gr(this.dates[0], t));
    return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
  }
}
class zC {
  constructor(t, n) {
    let { dates: r } = t,
      i,
      l,
      o;
    if (n) {
      for (
        l = r[0].getUTCDay(), i = 1;
        i < r.length && r[i].getUTCDay() !== l;
        i += 1
      );
      o = Math.ceil(r.length / i);
    } else (o = 1), (i = r.length);
    (this.rowCnt = o),
      (this.colCnt = i),
      (this.daySeries = t),
      (this.cells = this.buildCells()),
      (this.headerDates = this.buildHeaderDates());
  }
  buildCells() {
    let t = [];
    for (let n = 0; n < this.rowCnt; n += 1) {
      let r = [];
      for (let i = 0; i < this.colCnt; i += 1) r.push(this.buildCell(n, i));
      t.push(r);
    }
    return t;
  }
  buildCell(t, n) {
    let r = this.daySeries.dates[t * this.colCnt + n];
    return { key: r.toISOString(), date: r };
  }
  buildHeaderDates() {
    let t = [];
    for (let n = 0; n < this.colCnt; n += 1) t.push(this.cells[0][n].date);
    return t;
  }
  sliceRange(t) {
    let { colCnt: n } = this,
      r = this.daySeries.sliceRange(t),
      i = [];
    if (r) {
      let { firstIndex: l, lastIndex: o } = r,
        s = l;
      for (; s <= o; ) {
        let a = Math.floor(s / n),
          u = Math.min((a + 1) * n, o + 1);
        i.push({
          row: a,
          firstCol: s % n,
          lastCol: (u - 1) % n,
          isStart: r.isStart && s === l,
          isEnd: r.isEnd && u - 1 === o,
        }),
          (s = u);
      }
    }
    return i;
  }
}
class FC {
  constructor() {
    (this.sliceBusinessHours = Y(this._sliceBusinessHours)),
      (this.sliceDateSelection = Y(this._sliceDateSpan)),
      (this.sliceEventStore = Y(this._sliceEventStore)),
      (this.sliceEventDrag = Y(this._sliceInteraction)),
      (this.sliceEventResize = Y(this._sliceInteraction)),
      (this.forceDayIfListItem = !1);
  }
  sliceProps(t, n, r, i, ...l) {
    let { eventUiBases: o } = t,
      s = this.sliceEventStore(t.eventStore, o, n, r, ...l);
    return {
      dateSelectionSegs: this.sliceDateSelection(
        t.dateSelection,
        n,
        r,
        o,
        i,
        ...l
      ),
      businessHourSegs: this.sliceBusinessHours(t.businessHours, n, r, i, ...l),
      fgEventSegs: s.fg,
      bgEventSegs: s.bg,
      eventDrag: this.sliceEventDrag(t.eventDrag, o, n, r, ...l),
      eventResize: this.sliceEventResize(t.eventResize, o, n, r, ...l),
      eventSelection: t.eventSelection,
    };
  }
  sliceNowDate(t, n, r, i, ...l) {
    return this._sliceDateSpan(
      { range: { start: t, end: In(t, 1) }, allDay: !1 },
      n,
      r,
      {},
      i,
      ...l
    );
  }
  _sliceBusinessHours(t, n, r, i, ...l) {
    return t
      ? this._sliceEventStore(Dl(t, no(n, !!r), i), {}, n, r, ...l).bg
      : [];
  }
  _sliceEventStore(t, n, r, i, ...l) {
    if (t) {
      let o = Wu(t, n, no(r, !!i), i);
      return {
        bg: this.sliceEventRanges(o.bg, l),
        fg: this.sliceEventRanges(o.fg, l),
      };
    }
    return { bg: [], fg: [] };
  }
  _sliceInteraction(t, n, r, i, ...l) {
    if (!t) return null;
    let o = Wu(t.mutatedEvents, n, no(r, !!i), i);
    return {
      segs: this.sliceEventRanges(o.fg, l),
      affectedInstances: t.affectedEvents.instances,
      isEvent: t.isEvent,
    };
  }
  _sliceDateSpan(t, n, r, i, l, ...o) {
    if (!t) return [];
    let s = no(n, !!r),
      a = cr(t.range, s);
    if (a) {
      t = Object.assign(Object.assign({}, t), { range: a });
      let u = mC(t, i, l),
        c = this.sliceRange(t.range, ...o);
      for (let f of c) f.eventRange = u;
      return c;
    }
    return [];
  }
  sliceEventRanges(t, n) {
    let r = [];
    for (let i of t) r.push(...this.sliceEventRange(i, n));
    return r;
  }
  sliceEventRange(t, n) {
    let r = t.range;
    this.forceDayIfListItem &&
      t.ui.display === "list-item" &&
      (r = { start: r.start, end: Te(r.start, 1) });
    let i = this.sliceRange(r, ...n);
    for (let l of i)
      (l.eventRange = t),
        (l.isStart = t.isStart && l.isStart),
        (l.isEnd = t.isEnd && l.isEnd);
    return i;
  }
}
function no(e, t) {
  let n = e.activeRange;
  return t
    ? n
    : {
        start: In(n.start, e.slotMinTime.milliseconds),
        end: In(n.end, e.slotMaxTime.milliseconds - 864e5),
      };
}
const ro = /^(visible|hidden)$/;
class Dv extends oe {
  constructor() {
    super(...arguments),
      (this.handleEl = (t) => {
        (this.el = t), Jt(this.props.elRef, t);
      });
  }
  render() {
    let { props: t } = this,
      { liquid: n, liquidIsAbsolute: r } = t,
      i = n && r,
      l = ["fc-scroller"];
    return (
      n &&
        (r
          ? l.push("fc-scroller-liquid-absolute")
          : l.push("fc-scroller-liquid")),
      b(
        "div",
        {
          ref: this.handleEl,
          className: l.join(" "),
          style: {
            overflowX: t.overflowX,
            overflowY: t.overflowY,
            left: (i && -(t.overcomeLeft || 0)) || "",
            right: (i && -(t.overcomeRight || 0)) || "",
            bottom: (i && -(t.overcomeBottom || 0)) || "",
            marginLeft: (!i && -(t.overcomeLeft || 0)) || "",
            marginRight: (!i && -(t.overcomeRight || 0)) || "",
            marginBottom: (!i && -(t.overcomeBottom || 0)) || "",
            maxHeight: t.maxHeight || "",
          },
        },
        t.children
      )
    );
  }
  needsXScrolling() {
    if (ro.test(this.props.overflowX)) return !1;
    let { el: t } = this,
      n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
      { children: r } = t;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().width > n) return !0;
    return !1;
  }
  needsYScrolling() {
    if (ro.test(this.props.overflowY)) return !1;
    let { el: t } = this,
      n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
      { children: r } = t;
    for (let i = 0; i < r.length; i += 1)
      if (r[i].getBoundingClientRect().height > n) return !0;
    return !1;
  }
  getXScrollbarWidth() {
    return ro.test(this.props.overflowX)
      ? 0
      : this.el.offsetHeight - this.el.clientHeight;
  }
  getYScrollbarWidth() {
    return ro.test(this.props.overflowY)
      ? 0
      : this.el.offsetWidth - this.el.clientWidth;
  }
}
class Jn {
  constructor(t) {
    (this.masterCallback = t),
      (this.currentMap = {}),
      (this.depths = {}),
      (this.callbackMap = {}),
      (this.handleValue = (n, r) => {
        let { depths: i, currentMap: l } = this,
          o = !1,
          s = !1;
        n !== null
          ? ((o = r in l), (l[r] = n), (i[r] = (i[r] || 0) + 1), (s = !0))
          : ((i[r] -= 1),
            i[r] || (delete l[r], delete this.callbackMap[r], (o = !0))),
          this.masterCallback &&
            (o && this.masterCallback(null, String(r)),
            s && this.masterCallback(n, String(r)));
      });
  }
  createRef(t) {
    let n = this.callbackMap[t];
    return (
      n ||
        (n = this.callbackMap[t] =
          (r) => {
            this.handleValue(r, String(t));
          }),
      n
    );
  }
  collect(t, n, r) {
    return ox(this.currentMap, t, n, r);
  }
  getAll() {
    return td(this.currentMap);
  }
}
function BC(e) {
  let t = cb(e, ".fc-scrollgrid-shrink"),
    n = 0;
  for (let r of t) n = Math.max(n, Eb(r));
  return Math.ceil(n);
}
function Tv(e, t) {
  return e.liquid && t.liquid;
}
function UC(e, t) {
  return t.maxHeight != null || Tv(e, t);
}
function HC(e, t, n, r) {
  let { expandRows: i } = n;
  return typeof t.content == "function"
    ? t.content(n)
    : b(
        "table",
        {
          role: "presentation",
          className: [
            t.tableClassName,
            e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
          ].join(" "),
          style: {
            minWidth: n.tableMinWidth,
            width: n.clientWidth,
            height: i ? n.clientHeight : "",
          },
        },
        n.tableColGroupNode,
        b(
          r ? "thead" : "tbody",
          { role: "presentation" },
          typeof t.rowContent == "function" ? t.rowContent(n) : t.rowContent
        )
      );
}
function WC(e, t) {
  return Mn(e, t, Ot);
}
function VC(e, t) {
  let n = [];
  for (let r of e) {
    let i = r.span || 1;
    for (let l = 0; l < i; l += 1)
      n.push(
        b("col", {
          style: {
            width: r.width === "shrink" ? $C(t) : r.width || "",
            minWidth: r.minWidth || "",
          },
        })
      );
  }
  return b("colgroup", {}, ...n);
}
function $C(e) {
  return e ?? 4;
}
function QC(e) {
  for (let t of e) if (t.width === "shrink") return !0;
  return !1;
}
function GC(e, t) {
  let n = ["fc-scrollgrid", t.theme.getClass("table")];
  return e && n.push("fc-scrollgrid-liquid"), n;
}
function YC(e, t) {
  let n = [
    "fc-scrollgrid-section",
    `fc-scrollgrid-section-${e.type}`,
    e.className,
  ];
  return (
    t &&
      e.liquid &&
      e.maxHeight == null &&
      n.push("fc-scrollgrid-section-liquid"),
    e.isSticky && n.push("fc-scrollgrid-section-sticky"),
    n
  );
}
function qC(e) {
  return b("div", {
    className: "fc-scrollgrid-sticky-shim",
    style: { width: e.clientWidth, minWidth: e.tableMinWidth },
  });
}
function Vh(e) {
  let { stickyHeaderDates: t } = e;
  return (
    (t == null || t === "auto") &&
      (t = e.height === "auto" || e.viewHeight === "auto"),
    t
  );
}
function ZC(e) {
  let { stickyFooterScrollbar: t } = e;
  return (
    (t == null || t === "auto") &&
      (t = e.height === "auto" || e.viewHeight === "auto"),
    t
  );
}
class Nv extends oe {
  constructor() {
    super(...arguments),
      (this.processCols = Y((t) => t, WC)),
      (this.renderMicroColGroup = Y(VC)),
      (this.scrollerRefs = new Jn()),
      (this.scrollerElRefs = new Jn(this._handleScrollerEl.bind(this))),
      (this.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {},
      }),
      (this.handleSizing = () => {
        this.safeSetState(
          Object.assign(
            { shrinkWidth: this.computeShrinkWidth() },
            this.computeScrollerDims()
          )
        );
      });
  }
  render() {
    let { props: t, state: n, context: r } = this,
      i = t.sections || [],
      l = this.processCols(t.cols),
      o = this.renderMicroColGroup(l, n.shrinkWidth),
      s = GC(t.liquid, r);
    t.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
    let a = i.length,
      u = 0,
      c,
      f = [],
      d = [],
      h = [];
    for (; u < a && (c = i[u]).type === "header"; )
      f.push(this.renderSection(c, o, !0)), (u += 1);
    for (; u < a && (c = i[u]).type === "body"; )
      d.push(this.renderSection(c, o, !1)), (u += 1);
    for (; u < a && (c = i[u]).type === "footer"; )
      h.push(this.renderSection(c, o, !0)), (u += 1);
    let v = !Cv();
    const y = { role: "rowgroup" };
    return b(
      "table",
      { role: "grid", className: s.join(" "), style: { height: t.height } },
      !!(!v && f.length) && b("thead", y, ...f),
      !!(!v && d.length) && b("tbody", y, ...d),
      !!(!v && h.length) && b("tfoot", y, ...h),
      v && b("tbody", y, ...f, ...d, ...h)
    );
  }
  renderSection(t, n, r) {
    return "outerContent" in t
      ? b(he, { key: t.key }, t.outerContent)
      : b(
          "tr",
          {
            key: t.key,
            role: "presentation",
            className: YC(t, this.props.liquid).join(" "),
          },
          this.renderChunkTd(t, n, t.chunk, r)
        );
  }
  renderChunkTd(t, n, r, i) {
    if ("outerContent" in r) return r.outerContent;
    let { props: l } = this,
      {
        forceYScrollbars: o,
        scrollerClientWidths: s,
        scrollerClientHeights: a,
      } = this.state,
      u = UC(l, t),
      c = Tv(l, t),
      f = l.liquid ? (o ? "scroll" : u ? "auto" : "hidden") : "visible",
      d = t.key,
      h = HC(
        t,
        r,
        {
          tableColGroupNode: n,
          tableMinWidth: "",
          clientWidth: !l.collapsibleWidth && s[d] !== void 0 ? s[d] : null,
          clientHeight: a[d] !== void 0 ? a[d] : null,
          expandRows: t.expandRows,
          syncRowHeights: !1,
          rowSyncHeights: [],
          reportRowHeightChange: () => {},
        },
        i
      );
    return b(
      i ? "th" : "td",
      { ref: r.elRef, role: "presentation" },
      b(
        "div",
        {
          className: `fc-scroller-harness${
            c ? " fc-scroller-harness-liquid" : ""
          }`,
        },
        b(
          Dv,
          {
            ref: this.scrollerRefs.createRef(d),
            elRef: this.scrollerElRefs.createRef(d),
            overflowY: f,
            overflowX: l.liquid ? "hidden" : "visible",
            maxHeight: t.maxHeight,
            liquid: c,
            liquidIsAbsolute: !0,
          },
          h
        )
      )
    );
  }
  _handleScrollerEl(t, n) {
    let r = KC(this.props.sections, n);
    r && Jt(r.chunk.scrollerElRef, t);
  }
  componentDidMount() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }
  componentDidUpdate() {
    this.handleSizing();
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleSizing);
  }
  computeShrinkWidth() {
    return QC(this.props.cols) ? BC(this.scrollerElRefs.getAll()) : 0;
  }
  computeScrollerDims() {
    let t = AC(),
      { scrollerRefs: n, scrollerElRefs: r } = this,
      i = !1,
      l = {},
      o = {};
    for (let s in n.currentMap) {
      let a = n.currentMap[s];
      if (a && a.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (let s of this.props.sections) {
      let a = s.key,
        u = r.currentMap[a];
      if (u) {
        let c = u.parentNode;
        (l[a] = Math.floor(c.getBoundingClientRect().width - (i ? t.y : 0))),
          (o[a] = Math.floor(c.getBoundingClientRect().height));
      }
    }
    return {
      forceYScrollbars: i,
      scrollerClientWidths: l,
      scrollerClientHeights: o,
    };
  }
}
Nv.addStateEquality({ scrollerClientWidths: Ot, scrollerClientHeights: Ot });
function KC(e, t) {
  for (let n of e) if (n.key === t) return n;
  return null;
}
class Is extends oe {
  constructor() {
    super(...arguments),
      (this.handleEl = (t) => {
        (this.el = t), t && zh(t, this.props.seg);
      });
  }
  render() {
    const { props: t, context: n } = this,
      { options: r } = n,
      { seg: i } = t,
      { eventRange: l } = i,
      { ui: o } = l,
      s = {
        event: new at(n, l.def, l.instance),
        view: n.viewApi,
        timeText: t.timeText,
        textColor: o.textColor,
        backgroundColor: o.backgroundColor,
        borderColor: o.borderColor,
        isDraggable: !t.disableDragging && oC(i, n),
        isStartResizable: !t.disableResizing && sC(i, n),
        isEndResizable: !t.disableResizing && aC(i),
        isMirror: !!(t.isDragging || t.isResizing || t.isDateSelecting),
        isStart: !!i.isStart,
        isEnd: !!i.isEnd,
        isPast: !!t.isPast,
        isFuture: !!t.isFuture,
        isToday: !!t.isToday,
        isSelected: !!t.isSelected,
        isDragging: !!t.isDragging,
        isResizing: !!t.isResizing,
      };
    return b(
      ft,
      Object.assign({}, t, {
        elRef: this.handleEl,
        elClasses: [
          ...uC(s),
          ...i.eventRange.ui.classNames,
          ...(t.elClasses || []),
        ],
        renderProps: s,
        generatorName: "eventContent",
        customGenerator: r.eventContent,
        defaultGenerator: t.defaultGenerator,
        classNameGenerator: r.eventClassNames,
        didMount: r.eventDidMount,
        willUnmount: r.eventWillUnmount,
      })
    );
  }
  componentDidUpdate(t) {
    this.el && this.props.seg !== t.seg && zh(this.el, this.props.seg);
  }
}
class XC extends oe {
  render() {
    let { props: t, context: n } = this,
      { options: r } = n,
      { seg: i } = t,
      { ui: l } = i.eventRange,
      o = r.eventTimeFormat || t.defaultTimeFormat,
      s = Vi(i, o, n, t.defaultDisplayEventTime, t.defaultDisplayEventEnd);
    return b(
      Is,
      Object.assign({}, t, {
        elTag: "a",
        elStyle: {
          borderColor: l.borderColor,
          backgroundColor: l.backgroundColor,
        },
        elAttrs: ud(i, n),
        defaultGenerator: JC,
        timeText: s,
      }),
      (a, u) =>
        b(
          he,
          null,
          b(a, {
            elTag: "div",
            elClasses: ["fc-event-main"],
            elStyle: { color: u.textColor },
          }),
          !!u.isStartResizable &&
            b("div", { className: "fc-event-resizer fc-event-resizer-start" }),
          !!u.isEndResizable &&
            b("div", { className: "fc-event-resizer fc-event-resizer-end" })
        )
    );
  }
}
function JC(e) {
  return b(
    "div",
    { className: "fc-event-main-frame" },
    e.timeText && b("div", { className: "fc-event-time" }, e.timeText),
    b(
      "div",
      { className: "fc-event-title-container" },
      b(
        "div",
        { className: "fc-event-title fc-sticky" },
        e.event.title || b(he, null, " ")
      )
    )
  );
}
const eA = xe({ day: "numeric" });
class Mv extends oe {
  constructor() {
    super(...arguments), (this.refineRenderProps = bo(tA));
  }
  render() {
    let { props: t, context: n } = this,
      { options: r } = n,
      i = this.refineRenderProps({
        date: t.date,
        dateProfile: t.dateProfile,
        todayRange: t.todayRange,
        isMonthStart: t.isMonthStart || !1,
        showDayNumber: t.showDayNumber,
        extraRenderProps: t.extraRenderProps,
        viewApi: n.viewApi,
        dateEnv: n.dateEnv,
        monthStartFormat: r.monthStartFormat,
      });
    return b(
      ft,
      Object.assign({}, t, {
        elClasses: [...Ns(i, n.theme), ...(t.elClasses || [])],
        elAttrs: Object.assign(
          Object.assign({}, t.elAttrs),
          i.isDisabled ? {} : { "data-date": Al(t.date) }
        ),
        renderProps: i,
        generatorName: "dayCellContent",
        customGenerator: r.dayCellContent,
        defaultGenerator: t.defaultGenerator,
        classNameGenerator: i.isDisabled ? void 0 : r.dayCellClassNames,
        didMount: r.dayCellDidMount,
        willUnmount: r.dayCellWillUnmount,
      })
    );
  }
}
function Iv(e) {
  return !!(e.dayCellContent || Fu("dayCellContent", e));
}
function tA(e) {
  let { date: t, dateEnv: n, dateProfile: r, isMonthStart: i } = e,
    l = cd(t, e.todayRange, null, r),
    o = e.showDayNumber ? n.format(t, i ? e.monthStartFormat : eA) : "";
  return Object.assign(
    Object.assign(Object.assign({ date: n.toDate(t), view: e.viewApi }, l), {
      isMonthStart: i,
      dayNumberText: o,
    }),
    e.extraRenderProps
  );
}
class nA extends oe {
  render() {
    let { props: t } = this,
      { seg: n } = t;
    return b(Is, {
      elTag: "div",
      elClasses: ["fc-bg-event"],
      elStyle: { backgroundColor: n.eventRange.ui.backgroundColor },
      defaultGenerator: rA,
      seg: n,
      timeText: "",
      isDragging: !1,
      isResizing: !1,
      isDateSelecting: !1,
      isSelected: !1,
      isPast: t.isPast,
      isFuture: t.isFuture,
      isToday: t.isToday,
      disableDragging: !0,
      disableResizing: !0,
    });
  }
}
function rA(e) {
  let { title: t } = e.event;
  return t && b("div", { className: "fc-event-title" }, e.event.title);
}
function iA(e) {
  return b("div", { className: `fc-${e}` });
}
const lA = (e) =>
  b(vr.Consumer, null, (t) => {
    let { dateEnv: n, options: r } = t,
      { date: i } = e,
      l = r.weekNumberFormat || e.defaultFormat,
      o = n.computeWeekNumber(i),
      s = n.format(i, l);
    return b(
      ft,
      Object.assign({}, e, {
        renderProps: { num: o, text: s, date: i },
        generatorName: "weekNumberContent",
        customGenerator: r.weekNumberContent,
        defaultGenerator: oA,
        classNameGenerator: r.weekNumberClassNames,
        didMount: r.weekNumberDidMount,
        willUnmount: r.weekNumberWillUnmount,
      })
    );
  });
function oA(e) {
  return e.text;
}
const Ia = 10;
class sA extends oe {
  constructor() {
    super(...arguments),
      (this.state = { titleId: _n() }),
      (this.handleRootEl = (t) => {
        (this.rootEl = t), this.props.elRef && Jt(this.props.elRef, t);
      }),
      (this.handleDocumentMouseDown = (t) => {
        const n = hb(t);
        this.rootEl.contains(n) || this.handleCloseClick();
      }),
      (this.handleDocumentKeyDown = (t) => {
        t.key === "Escape" && this.handleCloseClick();
      }),
      (this.handleCloseClick = () => {
        let { onClose: t } = this.props;
        t && t();
      });
  }
  render() {
    let { theme: t, options: n } = this.context,
      { props: r, state: i } = this,
      l = ["fc-popover", t.getClass("popover")].concat(r.extraClassNames || []);
    return qS(
      b(
        "div",
        Object.assign({}, r.extraAttrs, {
          id: r.id,
          className: l.join(" "),
          "aria-labelledby": i.titleId,
          ref: this.handleRootEl,
        }),
        b(
          "div",
          { className: "fc-popover-header " + t.getClass("popoverHeader") },
          b("span", { className: "fc-popover-title", id: i.titleId }, r.title),
          b("span", {
            className: "fc-popover-close " + t.getIconClass("close"),
            title: n.closeHint,
            onClick: this.handleCloseClick,
          })
        ),
        b(
          "div",
          { className: "fc-popover-body " + t.getClass("popoverContent") },
          r.children
        )
      ),
      r.parentEl
    );
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown),
      document.addEventListener("keydown", this.handleDocumentKeyDown),
      this.updateSize();
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown),
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  updateSize() {
    let { isRtl: t } = this.context,
      { alignmentEl: n, alignGridTop: r } = this.props,
      { rootEl: i } = this,
      l = RC(n);
    if (l) {
      let o = i.getBoundingClientRect(),
        s = r ? Ht(n, ".fc-scrollgrid").getBoundingClientRect().top : l.top,
        a = t ? l.right - o.width : l.left;
      (s = Math.max(s, Ia)),
        (a = Math.min(a, document.documentElement.clientWidth - Ia - o.width)),
        (a = Math.max(a, Ia));
      let u = i.offsetParent.getBoundingClientRect();
      fb(i, { top: s - u.top, left: a - u.left });
    }
  }
}
class aA extends zn {
  constructor() {
    super(...arguments),
      (this.handleRootEl = (t) => {
        (this.rootEl = t),
          t
            ? this.context.registerInteractiveComponent(this, {
                el: t,
                useEventCenter: !1,
              })
            : this.context.unregisterInteractiveComponent(this);
      });
  }
  render() {
    let { options: t, dateEnv: n } = this.context,
      { props: r } = this,
      { startDate: i, todayRange: l, dateProfile: o } = r,
      s = n.format(i, t.dayPopoverFormat);
    return b(
      Mv,
      { elRef: this.handleRootEl, date: i, dateProfile: o, todayRange: l },
      (a, u, c) =>
        b(
          sA,
          {
            elRef: c.ref,
            id: r.id,
            title: s,
            extraClassNames: ["fc-more-popover"].concat(c.className || []),
            extraAttrs: c,
            parentEl: r.parentEl,
            alignmentEl: r.alignmentEl,
            alignGridTop: r.alignGridTop,
            onClose: r.onClose,
          },
          Iv(t) && b(a, { elTag: "div", elClasses: ["fc-more-popover-misc"] }),
          r.children
        )
    );
  }
  queryHit(t, n, r, i) {
    let { rootEl: l, props: o } = this;
    return t >= 0 && t < r && n >= 0 && n < i
      ? {
          dateProfile: o.dateProfile,
          dateSpan: Object.assign(
            {
              allDay: !o.forceTimed,
              range: { start: o.startDate, end: o.endDate },
            },
            o.extraDateSpan
          ),
          dayEl: l,
          rect: { left: 0, top: 0, right: r, bottom: i },
          layer: 1,
        }
      : null;
  }
}
class uA extends oe {
  constructor() {
    super(...arguments),
      (this.state = { isPopoverOpen: !1, popoverId: _n() }),
      (this.handleLinkEl = (t) => {
        (this.linkEl = t), this.props.elRef && Jt(this.props.elRef, t);
      }),
      (this.handleClick = (t) => {
        let { props: n, context: r } = this,
          { moreLinkClick: i } = r.options,
          l = $h(n).start;
        function o(s) {
          let { def: a, instance: u, range: c } = s.eventRange;
          return {
            event: new at(r, a, u),
            start: r.dateEnv.toDate(c.start),
            end: r.dateEnv.toDate(c.end),
            isStart: s.isStart,
            isEnd: s.isEnd,
          };
        }
        typeof i == "function" &&
          (i = i({
            date: l,
            allDay: !!n.allDayDate,
            allSegs: n.allSegs.map(o),
            hiddenSegs: n.hiddenSegs.map(o),
            jsEvent: t,
            view: r.viewApi,
          })),
          !i || i === "popover"
            ? this.setState({ isPopoverOpen: !0 })
            : typeof i == "string" && r.calendarApi.zoomTo(l, i);
      }),
      (this.handlePopoverClose = () => {
        this.setState({ isPopoverOpen: !1 });
      });
  }
  render() {
    let { props: t, state: n } = this;
    return b(vr.Consumer, null, (r) => {
      let { viewApi: i, options: l, calendarApi: o } = r,
        { moreLinkText: s } = l,
        { moreCnt: a } = t,
        u = $h(t),
        c = typeof s == "function" ? s.call(o, a) : `+${a} ${s}`,
        f = Hi(l.moreLinkHint, [a], c),
        d = { num: a, shortText: `+${a}`, text: c, view: i };
      return b(
        he,
        null,
        !!t.moreCnt &&
          b(
            ft,
            {
              elTag: t.elTag || "a",
              elRef: this.handleLinkEl,
              elClasses: [...(t.elClasses || []), "fc-more-link"],
              elStyle: t.elStyle,
              elAttrs: Object.assign(
                Object.assign(
                  Object.assign({}, t.elAttrs),
                  ev(this.handleClick)
                ),
                {
                  title: f,
                  "aria-expanded": n.isPopoverOpen,
                  "aria-controls": n.isPopoverOpen ? n.popoverId : "",
                }
              ),
              renderProps: d,
              generatorName: "moreLinkContent",
              customGenerator: l.moreLinkContent,
              defaultGenerator: t.defaultGenerator || cA,
              classNameGenerator: l.moreLinkClassNames,
              didMount: l.moreLinkDidMount,
              willUnmount: l.moreLinkWillUnmount,
            },
            t.children
          ),
        n.isPopoverOpen &&
          b(
            aA,
            {
              id: n.popoverId,
              startDate: u.start,
              endDate: u.end,
              dateProfile: t.dateProfile,
              todayRange: t.todayRange,
              extraDateSpan: t.extraDateSpan,
              parentEl: this.parentEl,
              alignmentEl: t.alignmentElRef
                ? t.alignmentElRef.current
                : this.linkEl,
              alignGridTop: t.alignGridTop,
              forceTimed: t.forceTimed,
              onClose: this.handlePopoverClose,
            },
            t.popoverContent()
          )
      );
    });
  }
  componentDidMount() {
    this.updateParentEl();
  }
  componentDidUpdate() {
    this.updateParentEl();
  }
  updateParentEl() {
    this.linkEl && (this.parentEl = Ht(this.linkEl, ".fc-view-harness"));
  }
}
function cA(e) {
  return e.text;
}
function $h(e) {
  if (e.allDayDate) return { start: e.allDayDate, end: Te(e.allDayDate, 1) };
  let { hiddenSegs: t } = e;
  return { start: dA(t), end: hA(t) };
}
function dA(e) {
  return e.reduce(fA).eventRange.range.start;
}
function fA(e, t) {
  return e.eventRange.range.start < t.eventRange.range.start ? e : t;
}
function hA(e) {
  return e.reduce(pA).eventRange.range.end;
}
function pA(e, t) {
  return e.eventRange.range.end > t.eventRange.range.end ? e : t;
}
class mA {
  constructor() {
    this.handlers = [];
  }
  set(t) {
    this.currentValue = t;
    for (let n of this.handlers) n(t);
  }
  subscribe(t) {
    this.handlers.push(t), this.currentValue !== void 0 && t(this.currentValue);
  }
}
class gA extends mA {
  constructor() {
    super(...arguments), (this.map = new Map());
  }
  handle(t) {
    const { map: n } = this;
    let r = !1;
    t.isActive
      ? (n.set(t.id, t), (r = !0))
      : n.has(t.id) && (n.delete(t.id), (r = !0)),
      r && this.set(n);
  }
}
const vA = [],
  Ov = {
    code: "en",
    week: { dow: 0, doy: 4 },
    direction: "ltr",
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day",
      list: "list",
    },
    weekText: "W",
    weekTextLong: "Week",
    closeHint: "Close",
    timeHint: "Time",
    eventHint: "Event",
    allDayText: "all-day",
    moreLinkText: "more",
    noEventsText: "No events to display",
  },
  Pv = Object.assign(Object.assign({}, Ov), {
    buttonHints: {
      prev: "Previous $0",
      next: "Next $0",
      today(e, t) {
        return t === "day" ? "Today" : `This ${e}`;
      },
    },
    viewHint: "$0 view",
    navLinkHint: "Go to $0",
    moreLinkHint(e) {
      return `Show ${e} more event${e === 1 ? "" : "s"}`;
    },
  });
function yA(e) {
  let t = e.length > 0 ? e[0].code : "en",
    n = vA.concat(e),
    r = { en: Pv };
  for (let i of n) r[i.code] = i;
  return { map: r, defaultCode: t };
}
function jv(e, t) {
  return typeof e == "object" && !Array.isArray(e)
    ? Lv(e.code, [e.code], e)
    : wA(e, t);
}
function wA(e, t) {
  let n = [].concat(e || []),
    r = EA(n, t) || Pv;
  return Lv(e, n, r);
}
function EA(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n].toLocaleLowerCase().split("-");
    for (let i = r.length; i > 0; i -= 1) {
      let l = r.slice(0, i).join("-");
      if (t[l]) return t[l];
    }
  }
  return null;
}
function Lv(e, t, n) {
  let r = ed([Ov, n], ["buttonText"]);
  delete r.code;
  let { week: i } = r;
  return (
    delete r.week,
    {
      codeArg: e,
      codes: t,
      week: i,
      simpleNumberFormat: new Intl.NumberFormat(e),
      options: r,
    }
  );
}
function Fn(e) {
  return {
    id: mr(),
    name: e.name,
    premiumReleaseDate: e.premiumReleaseDate
      ? new Date(e.premiumReleaseDate)
      : void 0,
    deps: e.deps || [],
    reducers: e.reducers || [],
    isLoadingFuncs: e.isLoadingFuncs || [],
    contextInit: [].concat(e.contextInit || []),
    eventRefiners: e.eventRefiners || {},
    eventDefMemberAdders: e.eventDefMemberAdders || [],
    eventSourceRefiners: e.eventSourceRefiners || {},
    isDraggableTransformers: e.isDraggableTransformers || [],
    eventDragMutationMassagers: e.eventDragMutationMassagers || [],
    eventDefMutationAppliers: e.eventDefMutationAppliers || [],
    dateSelectionTransformers: e.dateSelectionTransformers || [],
    datePointTransforms: e.datePointTransforms || [],
    dateSpanTransforms: e.dateSpanTransforms || [],
    views: e.views || {},
    viewPropsTransformers: e.viewPropsTransformers || [],
    isPropsValid: e.isPropsValid || null,
    externalDefTransforms: e.externalDefTransforms || [],
    viewContainerAppends: e.viewContainerAppends || [],
    eventDropTransformers: e.eventDropTransformers || [],
    componentInteractions: e.componentInteractions || [],
    calendarInteractions: e.calendarInteractions || [],
    themeClasses: e.themeClasses || {},
    eventSourceDefs: e.eventSourceDefs || [],
    cmdFormatter: e.cmdFormatter,
    recurringTypes: e.recurringTypes || [],
    namedTimeZonedImpl: e.namedTimeZonedImpl,
    initialView: e.initialView || "",
    elementDraggingImpl: e.elementDraggingImpl,
    optionChangeHandlers: e.optionChangeHandlers || {},
    scrollGridImpl: e.scrollGridImpl || null,
    listenerRefiners: e.listenerRefiners || {},
    optionRefiners: e.optionRefiners || {},
    propSetHandlers: e.propSetHandlers || {},
  };
}
function SA(e, t) {
  let n = {},
    r = {
      premiumReleaseDate: void 0,
      reducers: [],
      isLoadingFuncs: [],
      contextInit: [],
      eventRefiners: {},
      eventDefMemberAdders: [],
      eventSourceRefiners: {},
      isDraggableTransformers: [],
      eventDragMutationMassagers: [],
      eventDefMutationAppliers: [],
      dateSelectionTransformers: [],
      datePointTransforms: [],
      dateSpanTransforms: [],
      views: {},
      viewPropsTransformers: [],
      isPropsValid: null,
      externalDefTransforms: [],
      viewContainerAppends: [],
      eventDropTransformers: [],
      componentInteractions: [],
      calendarInteractions: [],
      themeClasses: {},
      eventSourceDefs: [],
      cmdFormatter: null,
      recurringTypes: [],
      namedTimeZonedImpl: null,
      initialView: "",
      elementDraggingImpl: null,
      optionChangeHandlers: {},
      scrollGridImpl: null,
      listenerRefiners: {},
      optionRefiners: {},
      propSetHandlers: {},
    };
  function i(l) {
    for (let o of l) {
      const s = o.name,
        a = n[s];
      a === void 0
        ? ((n[s] = o.id), i(o.deps), (r = xA(r, o)))
        : a !== o.id && console.warn(`Duplicate plugin '${s}'`);
    }
  }
  return e && i(e), i(t), r;
}
function bA() {
  let e = [],
    t = [],
    n;
  return (r, i) => (
    (!n || !Mn(r, e) || !Mn(i, t)) && (n = SA(r, i)), (e = r), (t = i), n
  );
}
function xA(e, t) {
  return {
    premiumReleaseDate: CA(e.premiumReleaseDate, t.premiumReleaseDate),
    reducers: e.reducers.concat(t.reducers),
    isLoadingFuncs: e.isLoadingFuncs.concat(t.isLoadingFuncs),
    contextInit: e.contextInit.concat(t.contextInit),
    eventRefiners: Object.assign(
      Object.assign({}, e.eventRefiners),
      t.eventRefiners
    ),
    eventDefMemberAdders: e.eventDefMemberAdders.concat(t.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(
      Object.assign({}, e.eventSourceRefiners),
      t.eventSourceRefiners
    ),
    isDraggableTransformers: e.isDraggableTransformers.concat(
      t.isDraggableTransformers
    ),
    eventDragMutationMassagers: e.eventDragMutationMassagers.concat(
      t.eventDragMutationMassagers
    ),
    eventDefMutationAppliers: e.eventDefMutationAppliers.concat(
      t.eventDefMutationAppliers
    ),
    dateSelectionTransformers: e.dateSelectionTransformers.concat(
      t.dateSelectionTransformers
    ),
    datePointTransforms: e.datePointTransforms.concat(t.datePointTransforms),
    dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms),
    views: Object.assign(Object.assign({}, e.views), t.views),
    viewPropsTransformers: e.viewPropsTransformers.concat(
      t.viewPropsTransformers
    ),
    isPropsValid: t.isPropsValid || e.isPropsValid,
    externalDefTransforms: e.externalDefTransforms.concat(
      t.externalDefTransforms
    ),
    viewContainerAppends: e.viewContainerAppends.concat(t.viewContainerAppends),
    eventDropTransformers: e.eventDropTransformers.concat(
      t.eventDropTransformers
    ),
    calendarInteractions: e.calendarInteractions.concat(t.calendarInteractions),
    componentInteractions: e.componentInteractions.concat(
      t.componentInteractions
    ),
    themeClasses: Object.assign(
      Object.assign({}, e.themeClasses),
      t.themeClasses
    ),
    eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs),
    cmdFormatter: t.cmdFormatter || e.cmdFormatter,
    recurringTypes: e.recurringTypes.concat(t.recurringTypes),
    namedTimeZonedImpl: t.namedTimeZonedImpl || e.namedTimeZonedImpl,
    initialView: e.initialView || t.initialView,
    elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl,
    optionChangeHandlers: Object.assign(
      Object.assign({}, e.optionChangeHandlers),
      t.optionChangeHandlers
    ),
    scrollGridImpl: t.scrollGridImpl || e.scrollGridImpl,
    listenerRefiners: Object.assign(
      Object.assign({}, e.listenerRefiners),
      t.listenerRefiners
    ),
    optionRefiners: Object.assign(
      Object.assign({}, e.optionRefiners),
      t.optionRefiners
    ),
    propSetHandlers: Object.assign(
      Object.assign({}, e.propSetHandlers),
      t.propSetHandlers
    ),
  };
}
function CA(e, t) {
  return e === void 0
    ? t
    : t === void 0
    ? e
    : new Date(Math.max(e.valueOf(), t.valueOf()));
}
class Bn extends kl {}
Bn.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active",
};
Bn.prototype.baseIconClass = "fc-icon";
Bn.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right",
};
Bn.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left",
};
Bn.prototype.iconOverrideOption = "buttonIcons";
Bn.prototype.iconOverrideCustomButtonOption = "icon";
Bn.prototype.iconOverridePrefix = "fc-icon-";
function AA(e, t) {
  let n = {},
    r;
  for (r in e) $u(r, n, e, t);
  for (r in t) $u(r, n, e, t);
  return n;
}
function $u(e, t, n, r) {
  if (t[e]) return t[e];
  let i = _A(e, t, n, r);
  return i && (t[e] = i), i;
}
function _A(e, t, n, r) {
  let i = n[e],
    l = r[e],
    o = (c) => (i && i[c] !== null ? i[c] : l && l[c] !== null ? l[c] : null),
    s = o("component"),
    a = o("superType"),
    u = null;
  if (a) {
    if (a === e)
      throw new Error("Can't have a custom view type that references itself");
    u = $u(a, t, n, r);
  }
  return (
    !s && u && (s = u.component),
    s
      ? {
          type: e,
          component: s,
          defaults: Object.assign(
            Object.assign({}, u ? u.defaults : {}),
            i ? i.rawOptions : {}
          ),
          overrides: Object.assign(
            Object.assign({}, u ? u.overrides : {}),
            l ? l.rawOptions : {}
          ),
        }
      : null
  );
}
function Qh(e) {
  return _l(e, kA);
}
function kA(e) {
  let t = typeof e == "function" ? { component: e } : e,
    { component: n } = t;
  return (
    t.content
      ? (n = Gh(t))
      : n &&
        !(n.prototype instanceof oe) &&
        (n = Gh(Object.assign(Object.assign({}, t), { content: n }))),
    { superType: t.type, component: n, rawOptions: t }
  );
}
function Gh(e) {
  return (t) =>
    b(vr.Consumer, null, (n) =>
      b(ft, {
        elTag: "div",
        elClasses: av(n.viewSpec),
        renderProps: Object.assign(Object.assign({}, t), {
          nextDayThreshold: n.options.nextDayThreshold,
        }),
        generatorName: void 0,
        customGenerator: e.content,
        classNameGenerator: e.classNames,
        didMount: e.didMount,
        willUnmount: e.willUnmount,
      })
    );
}
function RA(e, t, n, r) {
  let i = Qh(e),
    l = Qh(t.views),
    o = AA(i, l);
  return _l(o, (s) => DA(s, l, t, n, r));
}
function DA(e, t, n, r, i) {
  let l =
      e.overrides.duration || e.defaults.duration || r.duration || n.duration,
    o = null,
    s = "",
    a = "",
    u = {};
  if (l && ((o = TA(l)), o)) {
    let d = Lu(o);
    (s = d.unit), d.value === 1 && ((a = s), (u = t[s] ? t[s].rawOptions : {}));
  }
  let c = (d) => {
      let h = d.buttonText || {},
        v = e.defaults.buttonTextKey;
      return v != null && h[v] != null
        ? h[v]
        : h[e.type] != null
        ? h[e.type]
        : h[a] != null
        ? h[a]
        : null;
    },
    f = (d) => {
      let h = d.buttonHints || {},
        v = e.defaults.buttonTextKey;
      return v != null && h[v] != null
        ? h[v]
        : h[e.type] != null
        ? h[e.type]
        : h[a] != null
        ? h[a]
        : null;
    };
  return {
    type: e.type,
    component: e.component,
    duration: o,
    durationUnit: s,
    singleUnit: a,
    optionDefaults: e.defaults,
    optionOverrides: Object.assign(Object.assign({}, u), e.overrides),
    buttonTextOverride: c(r) || c(n) || e.overrides.buttonText,
    buttonTextDefault: c(i) || e.defaults.buttonText || c(Wi) || e.type,
    buttonTitleOverride: f(r) || f(n) || e.overrides.buttonHint,
    buttonTitleDefault: f(i) || e.defaults.buttonHint || f(Wi),
  };
}
let Yh = {};
function TA(e) {
  let t = JSON.stringify(e),
    n = Yh[t];
  return n === void 0 && ((n = K(e)), (Yh[t] = n)), n;
}
function NA(e, t) {
  switch (t.type) {
    case "CHANGE_VIEW_TYPE":
      e = t.viewType;
  }
  return e;
}
function MA(e, t) {
  switch (t.type) {
    case "SET_OPTION":
      return Object.assign(Object.assign({}, e), {
        [t.optionName]: t.rawOptionValue,
      });
    default:
      return e;
  }
}
function IA(e, t, n, r) {
  let i;
  switch (t.type) {
    case "CHANGE_VIEW_TYPE":
      return r.build(t.dateMarker || n);
    case "CHANGE_DATE":
      return r.build(t.dateMarker);
    case "PREV":
      if (((i = r.buildPrev(e, n)), i.isValid)) return i;
      break;
    case "NEXT":
      if (((i = r.buildNext(e, n)), i.isValid)) return i;
      break;
  }
  return e;
}
function OA(e, t, n) {
  let r = t ? t.activeRange : null;
  return Fv({}, UA(e, n), r, n);
}
function PA(e, t, n, r) {
  let i = n ? n.activeRange : null;
  switch (t.type) {
    case "ADD_EVENT_SOURCES":
      return Fv(e, t.sources, i, r);
    case "REMOVE_EVENT_SOURCE":
      return LA(e, t.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? Bv(e, i, r) : e;
    case "FETCH_EVENT_SOURCES":
      return dd(
        e,
        t.sourceIds ? rv(t.sourceIds) : Uv(e, r),
        i,
        t.isRefetch || !1,
        r
      );
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return BA(e, t.sourceId, t.fetchId, t.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return e;
  }
}
function jA(e, t, n) {
  let r = t ? t.activeRange : null;
  return dd(e, Uv(e, n), r, !0, n);
}
function zv(e) {
  for (let t in e) if (e[t].isFetching) return !0;
  return !1;
}
function Fv(e, t, n, r) {
  let i = {};
  for (let l of t) i[l.sourceId] = l;
  return n && (i = Bv(i, n, r)), Object.assign(Object.assign({}, e), i);
}
function LA(e, t) {
  return ii(e, (n) => n.sourceId !== t);
}
function Bv(e, t, n) {
  return dd(
    e,
    ii(e, (r) => zA(r, t, n)),
    t,
    !1,
    n
  );
}
function zA(e, t, n) {
  return Hv(e, n)
    ? !n.options.lazyFetching ||
        !e.fetchRange ||
        e.isFetching ||
        t.start < e.fetchRange.start ||
        t.end > e.fetchRange.end
    : !e.latestFetchId;
}
function dd(e, t, n, r, i) {
  let l = {};
  for (let o in e) {
    let s = e[o];
    t[o] ? (l[o] = FA(s, n, r, i)) : (l[o] = s);
  }
  return l;
}
function FA(e, t, n, r) {
  let { options: i, calendarApi: l } = r,
    o = r.pluginHooks.eventSourceDefs[e.sourceDefId],
    s = mr();
  return (
    o.fetch(
      { eventSource: e, range: t, isRefetch: n, context: r },
      (a) => {
        let { rawEvents: u } = a;
        i.eventSourceSuccess &&
          (u = i.eventSourceSuccess.call(l, u, a.response) || u),
          e.success && (u = e.success.call(l, u, a.response) || u),
          r.dispatch({
            type: "RECEIVE_EVENTS",
            sourceId: e.sourceId,
            fetchId: s,
            fetchRange: t,
            rawEvents: u,
          });
      },
      (a) => {
        let u = !1;
        i.eventSourceFailure && (i.eventSourceFailure.call(l, a), (u = !0)),
          e.failure && (e.failure(a), (u = !0)),
          u || console.warn(a.message, a),
          r.dispatch({
            type: "RECEIVE_EVENT_ERROR",
            sourceId: e.sourceId,
            fetchId: s,
            fetchRange: t,
            error: a,
          });
      }
    ),
    Object.assign(Object.assign({}, e), { isFetching: !0, latestFetchId: s })
  );
}
function BA(e, t, n, r) {
  let i = e[t];
  return i && n === i.latestFetchId
    ? Object.assign(Object.assign({}, e), {
        [t]: Object.assign(Object.assign({}, i), {
          isFetching: !1,
          fetchRange: r,
        }),
      })
    : e;
}
function Uv(e, t) {
  return ii(e, (n) => Hv(n, t));
}
function UA(e, t) {
  let n = mv(t),
    r = [].concat(e.eventSources || []),
    i = [];
  e.initialEvents && r.unshift(e.initialEvents),
    e.events && r.unshift(e.events);
  for (let l of r) {
    let o = pv(l, t, n);
    o && i.push(o);
  }
  return i;
}
function Hv(e, t) {
  return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
}
function HA(e, t) {
  switch (t.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return t.selection;
    default:
      return e;
  }
}
function WA(e, t) {
  switch (t.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return t.eventInstanceId;
    default:
      return e;
  }
}
function VA(e, t) {
  let n;
  switch (t.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return (
        (n = t.state),
        {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent,
        }
      );
    default:
      return e;
  }
}
function $A(e, t) {
  let n;
  switch (t.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return (
        (n = t.state),
        {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent,
        }
      );
    default:
      return e;
  }
}
function QA(e, t, n, r, i) {
  let l = e.headerToolbar ? qh(e.headerToolbar, e, t, n, r, i) : null,
    o = e.footerToolbar ? qh(e.footerToolbar, e, t, n, r, i) : null;
  return { header: l, footer: o };
}
function qh(e, t, n, r, i, l) {
  let o = {},
    s = [],
    a = !1;
  for (let u in e) {
    let c = e[u],
      f = GA(c, t, n, r, i, l);
    (o[u] = f.widgets), s.push(...f.viewsWithButtons), (a = a || f.hasTitle);
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: a };
}
function GA(e, t, n, r, i, l) {
  let o = t.direction === "rtl",
    s = t.customButtons || {},
    a = n.buttonText || {},
    u = t.buttonText || {},
    c = n.buttonHints || {},
    f = t.buttonHints || {},
    d = e ? e.split(" ") : [],
    h = [],
    v = !1;
  return {
    widgets: d.map((S) =>
      S.split(",").map((p) => {
        if (p === "title") return (v = !0), { buttonName: p };
        let m, E, g, _, M, D;
        if ((m = s[p]))
          (g = (T) => {
            m.click && m.click.call(T.target, T, T.target);
          }),
            (_ = r.getCustomButtonIconClass(m)) ||
              (_ = r.getIconClass(p, o)) ||
              (M = m.text),
            (D = m.hint || m.text);
        else if ((E = i[p])) {
          h.push(p),
            (g = () => {
              l.changeView(p);
            }),
            (M = E.buttonTextOverride) ||
              (_ = r.getIconClass(p, o)) ||
              (M = E.buttonTextDefault);
          let T = E.buttonTextOverride || E.buttonTextDefault;
          D = Hi(
            E.buttonTitleOverride || E.buttonTitleDefault || t.viewHint,
            [T, p],
            T
          );
        } else if (l[p])
          if (
            ((g = () => {
              l[p]();
            }),
            (M = a[p]) || (_ = r.getIconClass(p, o)) || (M = u[p]),
            p === "prevYear" || p === "nextYear")
          ) {
            let T = p === "prevYear" ? "prev" : "next";
            D = Hi(c[T] || f[T], [u.year || "year", "year"], u[p]);
          } else D = (T) => Hi(c[p] || f[p], [u[T] || T, T], u[p]);
        return {
          buttonName: p,
          buttonClick: g,
          buttonIcon: _,
          buttonText: M,
          buttonHint: D,
        };
      })
    ),
    viewsWithButtons: h,
    hasTitle: v,
  };
}
class YA {
  constructor(t, n, r) {
    (this.type = t), (this.getCurrentData = n), (this.dateEnv = r);
  }
  get calendar() {
    return this.getCurrentData().calendarApi;
  }
  get title() {
    return this.getCurrentData().viewTitle;
  }
  get activeStart() {
    return this.dateEnv.toDate(
      this.getCurrentData().dateProfile.activeRange.start
    );
  }
  get activeEnd() {
    return this.dateEnv.toDate(
      this.getCurrentData().dateProfile.activeRange.end
    );
  }
  get currentStart() {
    return this.dateEnv.toDate(
      this.getCurrentData().dateProfile.currentRange.start
    );
  }
  get currentEnd() {
    return this.dateEnv.toDate(
      this.getCurrentData().dateProfile.currentRange.end
    );
  }
  getOption(t) {
    return this.getCurrentData().options[t];
  }
}
let qA = {
  ignoreRange: !0,
  parseMeta(e) {
    return Array.isArray(e.events) ? e.events : null;
  },
  fetch(e, t) {
    t({ rawEvents: e.eventSource.meta });
  },
};
const ZA = Fn({ name: "array-event-source", eventSourceDefs: [qA] });
let KA = {
  parseMeta(e) {
    return typeof e.events == "function" ? e.events : null;
  },
  fetch(e, t, n) {
    const { dateEnv: r } = e.context,
      i = e.eventSource.meta;
    gC(i.bind(null, bv(e.range, r)), (l) => t({ rawEvents: l }), n);
  },
};
const XA = Fn({ name: "func-event-source", eventSourceDefs: [KA] }),
  JA = {
    method: String,
    extraParams: C,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
  };
let e1 = {
  parseMeta(e) {
    return e.url && (e.format === "json" || !e.format)
      ? {
          url: e.url,
          format: "json",
          method: (e.method || "GET").toUpperCase(),
          extraParams: e.extraParams,
          startParam: e.startParam,
          endParam: e.endParam,
          timeZoneParam: e.timeZoneParam,
        }
      : null;
  },
  fetch(e, t, n) {
    const { meta: r } = e.eventSource,
      i = n1(r, e.range, e.context);
    vC(r.method, r.url, i).then(([l, o]) => {
      t({ rawEvents: l, response: o });
    }, n);
  },
};
const t1 = Fn({
  name: "json-event-source",
  eventSourceRefiners: JA,
  eventSourceDefs: [e1],
});
function n1(e, t, n) {
  let { dateEnv: r, options: i } = n,
    l,
    o,
    s,
    a,
    u = {};
  return (
    (l = e.startParam),
    l == null && (l = i.startParam),
    (o = e.endParam),
    o == null && (o = i.endParam),
    (s = e.timeZoneParam),
    s == null && (s = i.timeZoneParam),
    typeof e.extraParams == "function"
      ? (a = e.extraParams())
      : (a = e.extraParams || {}),
    Object.assign(u, a),
    (u[l] = r.formatIso(t.start)),
    (u[o] = r.formatIso(t.end)),
    r.timeZone !== "local" && (u[s] = r.timeZone),
    u
  );
}
const r1 = {
  daysOfWeek: C,
  startTime: K,
  endTime: K,
  duration: K,
  startRecur: C,
  endRecur: C,
};
let i1 = {
  parse(e, t) {
    if (
      e.daysOfWeek ||
      e.startTime ||
      e.endTime ||
      e.startRecur ||
      e.endRecur
    ) {
      let n = {
          daysOfWeek: e.daysOfWeek || null,
          startTime: e.startTime || null,
          endTime: e.endTime || null,
          startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
          endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
        },
        r;
      return (
        e.duration && (r = e.duration),
        !r && e.startTime && e.endTime && (r = Cb(e.endTime, e.startTime)),
        { allDayGuess: !e.startTime && !e.endTime, duration: r, typeData: n }
      );
    }
    return null;
  },
  expand(e, t, n) {
    let r = cr(t, { start: e.startRecur, end: e.endRecur });
    return r ? o1(e.daysOfWeek, e.startTime, r, n) : [];
  },
};
const l1 = Fn({
  name: "simple-recurring-event",
  recurringTypes: [i1],
  eventRefiners: r1,
});
function o1(e, t, n, r) {
  let i = e ? rv(e) : null,
    l = ue(n.start),
    o = n.end,
    s = [];
  for (; l < o; ) {
    let a;
    (!i || i[l.getUTCDay()]) && (t ? (a = r.add(l, t)) : (a = l), s.push(a)),
      (l = Te(l, 1));
  }
  return s;
}
const s1 = Fn({
  name: "change-handler",
  optionChangeHandlers: {
    events(e, t) {
      Zh([e], t);
    },
    eventSources: Zh,
  },
});
function Zh(e, t) {
  let n = td(t.getCurrentData().eventSources);
  if (
    n.length === 1 &&
    e.length === 1 &&
    Array.isArray(n[0]._raw) &&
    Array.isArray(e[0])
  ) {
    t.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: e[0],
    });
    return;
  }
  let r = [];
  for (let i of e) {
    let l = !1;
    for (let o = 0; o < n.length; o += 1)
      if (n[o]._raw === i) {
        n.splice(o, 1), (l = !0);
        break;
      }
    l || r.push(i);
  }
  for (let i of n)
    t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: i.sourceId });
  for (let i of r) t.calendarApi.addEventSource(i);
}
function a1(e, t) {
  t.emitter.trigger(
    "datesSet",
    Object.assign(Object.assign({}, bv(e.activeRange, t.dateEnv)), {
      view: t.viewApi,
    })
  );
}
function u1(e, t) {
  let { emitter: n } = t;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", ad(e, t));
}
const c1 = [
  ZA,
  XA,
  t1,
  l1,
  s1,
  Fn({
    name: "misc",
    isLoadingFuncs: [(e) => zv(e.eventSources)],
    propSetHandlers: { dateProfile: a1, eventStore: u1 },
  }),
];
class d1 {
  constructor(t, n) {
    (this.runTaskOption = t),
      (this.drainedOption = n),
      (this.queue = []),
      (this.delayedRunner = new Kc(this.drain.bind(this)));
  }
  request(t, n) {
    this.queue.push(t), this.delayedRunner.request(n);
  }
  pause(t) {
    this.delayedRunner.pause(t);
  }
  resume(t, n) {
    this.delayedRunner.resume(t, n);
  }
  drain() {
    let { queue: t } = this;
    for (; t.length; ) {
      let n = [],
        r;
      for (; (r = t.shift()); ) this.runTask(r), n.push(r);
      this.drained(n);
    }
  }
  runTask(t) {
    this.runTaskOption && this.runTaskOption(t);
  }
  drained(t) {
    this.drainedOption && this.drainedOption(t);
  }
}
function f1(e, t, n) {
  let r;
  return (
    /^(year|month)$/.test(e.currentRangeUnit)
      ? (r = e.currentRange)
      : (r = e.activeRange),
    n.formatRange(r.start, r.end, xe(t.titleFormat || h1(e)), {
      isEndExclusive: e.isRangeAllDay,
      defaultSeparator: t.titleRangeSeparator,
    })
  );
}
function h1(e) {
  let { currentRangeUnit: t } = e;
  if (t === "year") return { year: "numeric" };
  if (t === "month") return { year: "numeric", month: "long" };
  let n = Jo(e.currentRange.start, e.currentRange.end);
  return n !== null && n > 1
    ? { year: "numeric", month: "short", day: "numeric" }
    : { year: "numeric", month: "long", day: "numeric" };
}
class p1 {
  constructor(t) {
    (this.computeCurrentViewData = Y(this._computeCurrentViewData)),
      (this.organizeRawLocales = Y(yA)),
      (this.buildLocale = Y(jv)),
      (this.buildPluginHooks = bA()),
      (this.buildDateEnv = Y(m1)),
      (this.buildTheme = Y(g1)),
      (this.parseToolbars = Y(QA)),
      (this.buildViewSpecs = Y(RA)),
      (this.buildDateProfileGenerator = bo(v1)),
      (this.buildViewApi = Y(y1)),
      (this.buildViewUiProps = bo(S1)),
      (this.buildEventUiBySource = Y(w1, Ot)),
      (this.buildEventUiBases = Y(E1)),
      (this.parseContextBusinessHours = bo(b1)),
      (this.buildTitle = Y(f1)),
      (this.emitter = new Gx()),
      (this.actionRunner = new d1(
        this._handleAction.bind(this),
        this.updateData.bind(this)
      )),
      (this.currentCalendarOptionsInput = {}),
      (this.currentCalendarOptionsRefined = {}),
      (this.currentViewOptionsInput = {}),
      (this.currentViewOptionsRefined = {}),
      (this.currentCalendarOptionsRefiners = {}),
      (this.optionsForRefining = []),
      (this.optionsForHandling = []),
      (this.getCurrentData = () => this.data),
      (this.dispatch = (d) => {
        this.actionRunner.request(d);
      }),
      (this.props = t),
      this.actionRunner.pause();
    let n = {},
      r = this.computeOptionsData(t.optionOverrides, n, t.calendarApi),
      i = r.calendarOptions.initialView || r.pluginHooks.initialView,
      l = this.computeCurrentViewData(i, r, t.optionOverrides, n);
    (t.calendarApi.currentDataManager = this),
      this.emitter.setThisContext(t.calendarApi),
      this.emitter.setOptions(l.options);
    let o = kx(r.calendarOptions, r.dateEnv),
      s = l.dateProfileGenerator.build(o);
    kn(s.activeRange, o) || (o = s.currentRange.start);
    let a = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: t.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData,
    };
    for (let d of r.pluginHooks.contextInit) d(a);
    let u = OA(r.calendarOptions, s, a),
      c = {
        dynamicOptionOverrides: n,
        currentViewType: i,
        currentDate: o,
        dateProfile: s,
        businessHours: this.parseContextBusinessHours(a),
        eventSources: u,
        eventUiBases: {},
        eventStore: dr(),
        renderableEventStore: dr(),
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(a).selectionConfig,
      },
      f = Object.assign(Object.assign({}, a), c);
    for (let d of r.pluginHooks.reducers) Object.assign(c, d(null, null, f));
    Oa(c, a) && this.emitter.trigger("loading", !0),
      (this.state = c),
      this.updateData(),
      this.actionRunner.resume();
  }
  resetOptions(t, n) {
    let { props: r } = this;
    n === void 0
      ? (r.optionOverrides = t)
      : ((r.optionOverrides = Object.assign(
          Object.assign({}, r.optionOverrides || {}),
          t
        )),
        this.optionsForRefining.push(...n)),
      (n === void 0 || n.length) &&
        this.actionRunner.request({ type: "NOTHING" });
  }
  _handleAction(t) {
    let { props: n, state: r, emitter: i } = this,
      l = MA(r.dynamicOptionOverrides, t),
      o = this.computeOptionsData(n.optionOverrides, l, n.calendarApi),
      s = NA(r.currentViewType, t),
      a = this.computeCurrentViewData(s, o, n.optionOverrides, l);
    (n.calendarApi.currentDataManager = this),
      i.setThisContext(n.calendarApi),
      i.setOptions(a.options);
    let u = {
        dateEnv: o.dateEnv,
        options: o.calendarOptions,
        pluginHooks: o.pluginHooks,
        calendarApi: n.calendarApi,
        dispatch: this.dispatch,
        emitter: i,
        getCurrentData: this.getCurrentData,
      },
      { currentDate: c, dateProfile: f } = r;
    this.data &&
      this.data.dateProfileGenerator !== a.dateProfileGenerator &&
      (f = a.dateProfileGenerator.build(c)),
      (c = _x(c, t)),
      (f = IA(f, t, c, a.dateProfileGenerator)),
      (t.type === "PREV" || t.type === "NEXT" || !kn(f.currentRange, c)) &&
        (c = f.currentRange.start);
    let d = PA(r.eventSources, t, f, u),
      h = Hx(r.eventStore, t, d, f, u),
      y =
        (zv(d) &&
          !a.options.progressiveEventRendering &&
          r.renderableEventStore) ||
        h,
      { eventUiSingleBase: S, selectionConfig: p } = this.buildViewUiProps(u),
      m = this.buildEventUiBySource(d),
      E = this.buildEventUiBases(y.defs, S, m),
      g = {
        dynamicOptionOverrides: l,
        currentViewType: s,
        currentDate: c,
        dateProfile: f,
        eventSources: d,
        eventStore: h,
        renderableEventStore: y,
        selectionConfig: p,
        eventUiBases: E,
        businessHours: this.parseContextBusinessHours(u),
        dateSelection: HA(r.dateSelection, t),
        eventSelection: WA(r.eventSelection, t),
        eventDrag: VA(r.eventDrag, t),
        eventResize: $A(r.eventResize, t),
      },
      _ = Object.assign(Object.assign({}, u), g);
    for (let T of o.pluginHooks.reducers) Object.assign(g, T(r, t, _));
    let M = Oa(r, u),
      D = Oa(g, u);
    !M && D ? i.trigger("loading", !0) : M && !D && i.trigger("loading", !1),
      (this.state = g),
      n.onAction && n.onAction(t);
  }
  updateData() {
    let { props: t, state: n } = this,
      r = this.data,
      i = this.computeOptionsData(
        t.optionOverrides,
        n.dynamicOptionOverrides,
        t.calendarApi
      ),
      l = this.computeCurrentViewData(
        n.currentViewType,
        i,
        t.optionOverrides,
        n.dynamicOptionOverrides
      ),
      o = (this.data = Object.assign(
        Object.assign(
          Object.assign(
            {
              viewTitle: this.buildTitle(n.dateProfile, l.options, i.dateEnv),
              calendarApi: t.calendarApi,
              dispatch: this.dispatch,
              emitter: this.emitter,
              getCurrentData: this.getCurrentData,
            },
            i
          ),
          l
        ),
        n
      )),
      s = i.pluginHooks.optionChangeHandlers,
      a = r && r.calendarOptions,
      u = i.calendarOptions;
    if (a && a !== u) {
      a.timeZone !== u.timeZone &&
        ((n.eventSources = o.eventSources =
          jA(o.eventSources, n.dateProfile, o)),
        (n.eventStore = o.eventStore = jh(o.eventStore, r.dateEnv, o.dateEnv)),
        (n.renderableEventStore = o.renderableEventStore =
          jh(o.renderableEventStore, r.dateEnv, o.dateEnv)));
      for (let c in s)
        (this.optionsForHandling.indexOf(c) !== -1 || a[c] !== u[c]) &&
          s[c](u[c], o);
    }
    (this.optionsForHandling = []), t.onData && t.onData(o);
  }
  computeOptionsData(t, n, r) {
    if (
      !this.optionsForRefining.length &&
      t === this.stableOptionOverrides &&
      n === this.stableDynamicOptionOverrides
    )
      return this.stableCalendarOptionsData;
    let {
      refinedOptions: i,
      pluginHooks: l,
      localeDefaults: o,
      availableLocaleData: s,
      extra: a,
    } = this.processRawCalendarOptions(t, n);
    Kh(a);
    let u = this.buildDateEnv(
        i.timeZone,
        i.locale,
        i.weekNumberCalculation,
        i.firstDay,
        i.weekText,
        l,
        s,
        i.defaultRangeSeparator
      ),
      c = this.buildViewSpecs(
        l.views,
        this.stableOptionOverrides,
        this.stableDynamicOptionOverrides,
        o
      ),
      f = this.buildTheme(i, l),
      d = this.parseToolbars(i, this.stableOptionOverrides, f, c, r);
    return (this.stableCalendarOptionsData = {
      calendarOptions: i,
      pluginHooks: l,
      dateEnv: u,
      viewSpecs: c,
      theme: f,
      toolbarConfig: d,
      localeDefaults: o,
      availableRawLocales: s.map,
    });
  }
  processRawCalendarOptions(t, n) {
    let { locales: r, locale: i } = Ra([Wi, t, n]),
      l = this.organizeRawLocales(r),
      o = l.map,
      s = this.buildLocale(i || l.defaultCode, o).options,
      a = this.buildPluginHooks(t.plugins || [], c1),
      u = (this.currentCalendarOptionsRefiners = Object.assign(
        Object.assign(
          Object.assign(Object.assign(Object.assign({}, Dh), Th), Nh),
          a.listenerRefiners
        ),
        a.optionRefiners
      )),
      c = {},
      f = Ra([Wi, s, t, n]),
      d = {},
      h = this.currentCalendarOptionsInput,
      v = this.currentCalendarOptionsRefined,
      y = !1;
    for (let S in f)
      this.optionsForRefining.indexOf(S) === -1 &&
      (f[S] === h[S] || (Qn[S] && S in h && Qn[S](h[S], f[S])))
        ? (d[S] = v[S])
        : u[S]
        ? ((d[S] = u[S](f[S])), (y = !0))
        : (c[S] = h[S]);
    return (
      y &&
        ((this.currentCalendarOptionsInput = f),
        (this.currentCalendarOptionsRefined = d),
        (this.stableOptionOverrides = t),
        (this.stableDynamicOptionOverrides = n)),
      this.optionsForHandling.push(...this.optionsForRefining),
      (this.optionsForRefining = []),
      {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: a,
        availableLocaleData: l,
        localeDefaults: s,
        extra: c,
      }
    );
  }
  _computeCurrentViewData(t, n, r, i) {
    let l = n.viewSpecs[t];
    if (!l)
      throw new Error(
        `viewType "${t}" is not available. Please make sure you've loaded all neccessary plugins`
      );
    let { refinedOptions: o, extra: s } = this.processRawViewOptions(
      l,
      n.pluginHooks,
      n.localeDefaults,
      r,
      i
    );
    Kh(s);
    let a = this.buildDateProfileGenerator({
        dateProfileGeneratorClass: l.optionDefaults.dateProfileGeneratorClass,
        duration: l.duration,
        durationUnit: l.durationUnit,
        usesMinMaxTime: l.optionDefaults.usesMinMaxTime,
        dateEnv: n.dateEnv,
        calendarApi: this.props.calendarApi,
        slotMinTime: o.slotMinTime,
        slotMaxTime: o.slotMaxTime,
        showNonCurrentDates: o.showNonCurrentDates,
        dayCount: o.dayCount,
        dateAlignment: o.dateAlignment,
        dateIncrement: o.dateIncrement,
        hiddenDays: o.hiddenDays,
        weekends: o.weekends,
        nowInput: o.now,
        validRangeInput: o.validRange,
        visibleRangeInput: o.visibleRange,
        fixedWeekCount: o.fixedWeekCount,
      }),
      u = this.buildViewApi(t, this.getCurrentData, n.dateEnv);
    return { viewSpec: l, options: o, dateProfileGenerator: a, viewApi: u };
  }
  processRawViewOptions(t, n, r, i, l) {
    let o = Ra([Wi, t.optionDefaults, r, i, t.optionOverrides, l]),
      s = Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign(Object.assign({}, Dh), Th), Nh),
            nx
          ),
          n.listenerRefiners
        ),
        n.optionRefiners
      ),
      a = {},
      u = this.currentViewOptionsInput,
      c = this.currentViewOptionsRefined,
      f = !1,
      d = {};
    for (let h in o)
      o[h] === u[h] || (Qn[h] && Qn[h](o[h], u[h]))
        ? (a[h] = c[h])
        : (o[h] === this.currentCalendarOptionsInput[h] ||
          (Qn[h] && Qn[h](o[h], this.currentCalendarOptionsInput[h]))
            ? h in this.currentCalendarOptionsRefined &&
              (a[h] = this.currentCalendarOptionsRefined[h])
            : s[h]
            ? (a[h] = s[h](o[h]))
            : (d[h] = o[h]),
          (f = !0));
    return (
      f &&
        ((this.currentViewOptionsInput = o),
        (this.currentViewOptionsRefined = a)),
      {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: d,
      }
    );
  }
}
function m1(e, t, n, r, i, l, o, s) {
  let a = jv(t || o.defaultCode, o.map);
  return new fx({
    calendarSystem: "gregory",
    timeZone: e,
    namedTimeZoneImpl: l.namedTimeZonedImpl,
    locale: a,
    weekNumberCalculation: n,
    firstDay: r,
    weekText: i,
    cmdFormatter: l.cmdFormatter,
    defaultSeparator: s,
  });
}
function g1(e, t) {
  let n = t.themeClasses[e.themeSystem] || Bn;
  return new n(e);
}
function v1(e) {
  let t = e.dateProfileGeneratorClass || cv;
  return new t(e);
}
function y1(e, t, n) {
  return new YA(e, t, n);
}
function w1(e) {
  return _l(e, (t) => t.ui);
}
function E1(e, t, n) {
  let r = { "": t };
  for (let i in e) {
    let l = e[i];
    l.sourceId && n[l.sourceId] && (r[i] = n[l.sourceId]);
  }
  return r;
}
function S1(e) {
  let { options: t } = e;
  return {
    eventUiSingleBase: is(
      {
        display: t.eventDisplay,
        editable: t.editable,
        startEditable: t.eventStartEditable,
        durationEditable: t.eventDurationEditable,
        constraint: t.eventConstraint,
        overlap: typeof t.eventOverlap == "boolean" ? t.eventOverlap : void 0,
        allow: t.eventAllow,
        backgroundColor: t.eventBackgroundColor,
        borderColor: t.eventBorderColor,
        textColor: t.eventTextColor,
        color: t.eventColor,
      },
      e
    ),
    selectionConfig: is(
      {
        constraint: t.selectConstraint,
        overlap: typeof t.selectOverlap == "boolean" ? t.selectOverlap : void 0,
        allow: t.selectAllow,
      },
      e
    ),
  };
}
function Oa(e, t) {
  for (let n of t.pluginHooks.isLoadingFuncs) if (n(e)) return !0;
  return !1;
}
function b1(e) {
  return Kx(e.options.businessHours, e);
}
function Kh(e, t) {
  for (let n in e)
    console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ""));
}
class x1 extends oe {
  render() {
    let t = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
    return b("div", { className: "fc-toolbar-chunk" }, ...t);
  }
  renderWidgetGroup(t) {
    let { props: n } = this,
      { theme: r } = this.context,
      i = [],
      l = !0;
    for (let o of t) {
      let {
        buttonName: s,
        buttonClick: a,
        buttonText: u,
        buttonIcon: c,
        buttonHint: f,
      } = o;
      if (s === "title")
        (l = !1),
          i.push(
            b("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title)
          );
      else {
        let d = s === n.activeButton,
          h =
            (!n.isTodayEnabled && s === "today") ||
            (!n.isPrevEnabled && s === "prev") ||
            (!n.isNextEnabled && s === "next"),
          v = [`fc-${s}-button`, r.getClass("button")];
        d && v.push(r.getClass("buttonActive")),
          i.push(
            b(
              "button",
              {
                type: "button",
                title: typeof f == "function" ? f(n.navUnit) : f,
                disabled: h,
                "aria-pressed": d,
                className: v.join(" "),
                onClick: a,
              },
              u || (c ? b("span", { className: c }) : "")
            )
          );
      }
    }
    if (i.length > 1) {
      let o = (l && r.getClass("buttonGroup")) || "";
      return b("div", { className: o }, ...i);
    }
    return i[0];
  }
}
class Xh extends oe {
  render() {
    let { model: t, extraClassName: n } = this.props,
      r = !1,
      i,
      l,
      o = t.sectionWidgets,
      s = o.center;
    return (
      o.left ? ((r = !0), (i = o.left)) : (i = o.start),
      o.right ? ((r = !0), (l = o.right)) : (l = o.end),
      b(
        "div",
        {
          className: [n || "", "fc-toolbar", r ? "fc-toolbar-ltr" : ""].join(
            " "
          ),
        },
        this.renderSection("start", i || []),
        this.renderSection("center", s || []),
        this.renderSection("end", l || [])
      )
    );
  }
  renderSection(t, n) {
    let { props: r } = this;
    return b(x1, {
      key: t,
      widgetGroups: n,
      title: r.title,
      navUnit: r.navUnit,
      activeButton: r.activeButton,
      isTodayEnabled: r.isTodayEnabled,
      isPrevEnabled: r.isPrevEnabled,
      isNextEnabled: r.isNextEnabled,
      titleId: r.titleId,
    });
  }
}
class C1 extends oe {
  constructor() {
    super(...arguments),
      (this.state = { availableWidth: null }),
      (this.handleEl = (t) => {
        (this.el = t), Jt(this.props.elRef, t), this.updateAvailableWidth();
      }),
      (this.handleResize = () => {
        this.updateAvailableWidth();
      });
  }
  render() {
    let { props: t, state: n } = this,
      { aspectRatio: r } = t,
      i = [
        "fc-view-harness",
        r || t.liquid || t.height
          ? "fc-view-harness-active"
          : "fc-view-harness-passive",
      ],
      l = "",
      o = "";
    return (
      r
        ? n.availableWidth !== null
          ? (l = n.availableWidth / r)
          : (o = `${(1 / r) * 100}%`)
        : (l = t.height || ""),
      b(
        "div",
        {
          "aria-labelledby": t.labeledById,
          ref: this.handleEl,
          className: i.join(" "),
          style: { height: l, paddingBottom: o },
        },
        t.children
      )
    );
  }
  componentDidMount() {
    this.context.addResizeHandler(this.handleResize);
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  updateAvailableWidth() {
    this.el &&
      this.props.aspectRatio &&
      this.setState({ availableWidth: this.el.offsetWidth });
  }
}
class A1 extends Av {
  constructor(t) {
    super(t),
      (this.handleSegClick = (n, r) => {
        let { component: i } = this,
          { context: l } = i,
          o = Vu(r);
        if (o && i.isValidSegDownEl(n.target)) {
          let s = Ht(n.target, ".fc-event-forced-url"),
            a = s ? s.querySelector("a[href]").href : "";
          l.emitter.trigger("eventClick", {
            el: r,
            event: new at(i.context, o.eventRange.def, o.eventRange.instance),
            jsEvent: n,
            view: l.viewApi,
          }),
            a && !n.defaultPrevented && (window.location.href = a);
        }
      }),
      (this.destroy = Jg(t.el, "click", ".fc-event", this.handleSegClick));
  }
}
class _1 extends Av {
  constructor(t) {
    super(t),
      (this.handleEventElRemove = (n) => {
        n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
      }),
      (this.handleSegEnter = (n, r) => {
        Vu(r) &&
          ((this.currentSegEl = r), this.triggerEvent("eventMouseEnter", n, r));
      }),
      (this.handleSegLeave = (n, r) => {
        this.currentSegEl &&
          ((this.currentSegEl = null),
          this.triggerEvent("eventMouseLeave", n, r));
      }),
      (this.removeHoverListeners = mb(
        t.el,
        ".fc-event",
        this.handleSegEnter,
        this.handleSegLeave
      ));
  }
  destroy() {
    this.removeHoverListeners();
  }
  triggerEvent(t, n, r) {
    let { component: i } = this,
      { context: l } = i,
      o = Vu(r);
    (!n || i.isValidSegDownEl(n.target)) &&
      l.emitter.trigger(t, {
        el: r,
        event: new at(l, o.eventRange.def, o.eventRange.instance),
        jsEvent: n,
        view: l.viewApi,
      });
  }
}
class k1 extends yr {
  constructor() {
    super(...arguments),
      (this.buildViewContext = Y(mx)),
      (this.buildViewPropTransformers = Y(D1)),
      (this.buildToolbarProps = Y(R1)),
      (this.headerRef = Xt()),
      (this.footerRef = Xt()),
      (this.interactionsStore = {}),
      (this.state = { viewLabelId: _n() }),
      (this.registerInteractiveComponent = (t, n) => {
        let r = EC(t, n),
          o = [A1, _1]
            .concat(this.props.pluginHooks.componentInteractions)
            .map((s) => new s(r));
        (this.interactionsStore[t.uid] = o), (Bh[t.uid] = r);
      }),
      (this.unregisterInteractiveComponent = (t) => {
        let n = this.interactionsStore[t.uid];
        if (n) {
          for (let r of n) r.destroy();
          delete this.interactionsStore[t.uid];
        }
        delete Bh[t.uid];
      }),
      (this.resizeRunner = new Kc(() => {
        this.props.emitter.trigger("_resize", !0),
          this.props.emitter.trigger("windowResize", {
            view: this.props.viewApi,
          });
      })),
      (this.handleWindowResize = (t) => {
        let { options: n } = this.props;
        n.handleWindowResize &&
          t.target === window &&
          this.resizeRunner.request(n.windowResizeDelay);
      });
  }
  render() {
    let { props: t } = this,
      { toolbarConfig: n, options: r } = t,
      i = this.buildToolbarProps(
        t.viewSpec,
        t.dateProfile,
        t.dateProfileGenerator,
        t.currentDate,
        Rl(t.options.now, t.dateEnv),
        t.viewTitle
      ),
      l = !1,
      o = "",
      s;
    t.isHeightAuto || t.forPrint
      ? (o = "")
      : r.height != null
      ? (l = !0)
      : r.contentHeight != null
      ? (o = r.contentHeight)
      : (s = Math.max(r.aspectRatio, 0.5));
    let a = this.buildViewContext(
        t.viewSpec,
        t.viewApi,
        t.options,
        t.dateProfileGenerator,
        t.dateEnv,
        t.theme,
        t.pluginHooks,
        t.dispatch,
        t.getCurrentData,
        t.emitter,
        t.calendarApi,
        this.registerInteractiveComponent,
        this.unregisterInteractiveComponent
      ),
      u = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return b(
      vr.Provider,
      { value: a },
      n.header &&
        b(
          Xh,
          Object.assign(
            {
              ref: this.headerRef,
              extraClassName: "fc-header-toolbar",
              model: n.header,
              titleId: u,
            },
            i
          )
        ),
      b(
        C1,
        { liquid: l, height: o, aspectRatio: s, labeledById: u },
        this.renderView(t),
        this.buildAppendContent()
      ),
      n.footer &&
        b(
          Xh,
          Object.assign(
            {
              ref: this.footerRef,
              extraClassName: "fc-footer-toolbar",
              model: n.footer,
              titleId: "",
            },
            i
          )
        )
    );
  }
  componentDidMount() {
    let { props: t } = this;
    (this.calendarInteractions = t.pluginHooks.calendarInteractions.map(
      (r) => new r(t)
    )),
      window.addEventListener("resize", this.handleWindowResize);
    let { propSetHandlers: n } = t.pluginHooks;
    for (let r in n) n[r](t[r], t);
  }
  componentDidUpdate(t) {
    let { props: n } = this,
      { propSetHandlers: r } = n.pluginHooks;
    for (let i in r) n[i] !== t[i] && r[i](n[i], n);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize),
      this.resizeRunner.clear();
    for (let t of this.calendarInteractions) t.destroy();
    this.props.emitter.trigger("_unmount");
  }
  buildAppendContent() {
    let { props: t } = this,
      n = t.pluginHooks.viewContainerAppends.map((r) => r(t));
    return b(he, {}, ...n);
  }
  renderView(t) {
    let { pluginHooks: n } = t,
      { viewSpec: r } = t,
      i = {
        dateProfile: t.dateProfile,
        businessHours: t.businessHours,
        eventStore: t.renderableEventStore,
        eventUiBases: t.eventUiBases,
        dateSelection: t.dateSelection,
        eventSelection: t.eventSelection,
        eventDrag: t.eventDrag,
        eventResize: t.eventResize,
        isHeightAuto: t.isHeightAuto,
        forPrint: t.forPrint,
      },
      l = this.buildViewPropTransformers(n.viewPropsTransformers);
    for (let s of l) Object.assign(i, s.transform(i, t));
    let o = r.component;
    return b(o, Object.assign({}, i));
  }
}
function R1(e, t, n, r, i, l) {
  let o = n.build(i, void 0, !1),
    s = n.buildPrev(t, r, !1),
    a = n.buildNext(t, r, !1);
  return {
    title: l,
    activeButton: e.type,
    navUnit: e.singleUnit,
    isTodayEnabled: o.isValid && !kn(t.currentRange, i),
    isPrevEnabled: s.isValid,
    isNextEnabled: a.isValid,
  };
}
function D1(e) {
  return e.map((t) => new t());
}
let T1 = class extends SC {
  constructor(t, n = {}) {
    super(),
      (this.isRendering = !1),
      (this.isRendered = !1),
      (this.currentClassNames = []),
      (this.customContentRenderId = 0),
      (this.handleAction = (r) => {
        switch (r.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            this.renderRunner.tryDrain();
        }
      }),
      (this.handleData = (r) => {
        (this.currentData = r),
          this.renderRunner.request(r.calendarOptions.rerenderDelay);
      }),
      (this.handleRenderRequest = () => {
        if (this.isRendering) {
          this.isRendered = !0;
          let { currentData: r } = this;
          Mh(() => {
            fl(
              b(
                wC,
                {
                  options: r.calendarOptions,
                  theme: r.theme,
                  emitter: r.emitter,
                },
                (i, l, o, s) => (
                  this.setClassNames(i),
                  this.setHeight(l),
                  b(
                    sv.Provider,
                    { value: this.customContentRenderId },
                    b(k1, Object.assign({ isHeightAuto: o, forPrint: s }, r))
                  )
                )
              ),
              this.el
            );
          });
        } else
          this.isRendered &&
            ((this.isRendered = !1),
            fl(null, this.el),
            this.setClassNames([]),
            this.setHeight(""));
      }),
      rb(t),
      (this.el = t),
      (this.renderRunner = new Kc(this.handleRenderRequest)),
      new p1({
        optionOverrides: n,
        calendarApi: this,
        onAction: this.handleAction,
        onData: this.handleData,
      });
  }
  render() {
    let t = this.isRendering;
    t ? (this.customContentRenderId += 1) : (this.isRendering = !0),
      this.renderRunner.request(),
      t && this.updateSize();
  }
  destroy() {
    this.isRendering && ((this.isRendering = !1), this.renderRunner.request());
  }
  updateSize() {
    Mh(() => {
      super.updateSize();
    });
  }
  batchRendering(t) {
    this.renderRunner.pause("batchRendering"),
      t(),
      this.renderRunner.resume("batchRendering");
  }
  pauseRendering() {
    this.renderRunner.pause("pauseRendering");
  }
  resumeRendering() {
    this.renderRunner.resume("pauseRendering", !0);
  }
  resetOptions(t, n) {
    this.currentDataManager.resetOptions(t, n);
  }
  setClassNames(t) {
    if (!Mn(t, this.currentClassNames)) {
      let { classList: n } = this.el;
      for (let r of this.currentClassNames) n.remove(r);
      for (let r of t) n.add(r);
      this.currentClassNames = t;
    }
  }
  setHeight(t) {
    Xg(this.el, "height", t);
  }
};
var N1 =
  ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
Zc(N1);
function io(e, t) {
  let n = [];
  for (let r = 0; r < t; r += 1) n[r] = [];
  for (let r of e) n[r.row].push(r);
  return n;
}
function lo(e, t) {
  let n = [];
  for (let r = 0; r < t; r += 1) n[r] = [];
  for (let r of e) n[r.firstCol].push(r);
  return n;
}
function Jh(e, t) {
  let n = [];
  if (e) {
    for (let r = 0; r < t; r += 1)
      n[r] = {
        affectedInstances: e.affectedInstances,
        isEvent: e.isEvent,
        segs: [],
      };
    for (let r of e.segs) n[r.row].segs.push(r);
  } else for (let r = 0; r < t; r += 1) n[r] = null;
  return n;
}
const Wv = xe({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow",
});
function Vv(e) {
  let { display: t } = e.eventRange.ui;
  return (
    t === "list-item" ||
    (t === "auto" &&
      !e.eventRange.def.allDay &&
      e.firstCol === e.lastCol &&
      e.isStart &&
      e.isEnd)
  );
}
class $v extends oe {
  render() {
    let { props: t } = this;
    return b(
      XC,
      Object.assign({}, t, {
        elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
        defaultTimeFormat: Wv,
        defaultDisplayEventEnd: t.defaultDisplayEventEnd,
        disableResizing: !t.seg.eventRange.def.allDay,
      })
    );
  }
}
class Qv extends oe {
  render() {
    let { props: t, context: n } = this,
      { options: r } = n,
      { seg: i } = t,
      l = r.eventTimeFormat || Wv,
      o = Vi(i, l, n, !0, t.defaultDisplayEventEnd);
    return b(
      Is,
      Object.assign({}, t, {
        elTag: "a",
        elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
        elAttrs: ud(t.seg, n),
        defaultGenerator: M1,
        timeText: o,
        isResizing: !1,
        isDateSelecting: !1,
      })
    );
  }
}
function M1(e) {
  return b(
    he,
    null,
    b("div", {
      className: "fc-daygrid-event-dot",
      style: { borderColor: e.borderColor || e.backgroundColor },
    }),
    e.timeText && b("div", { className: "fc-event-time" }, e.timeText),
    b("div", { className: "fc-event-title" }, e.event.title || b(he, null, " "))
  );
}
class I1 extends oe {
  constructor() {
    super(...arguments), (this.compileSegs = Y(O1));
  }
  render() {
    let { props: t } = this,
      { allSegs: n, invisibleSegs: r } = this.compileSegs(t.singlePlacements);
    return b(uA, {
      elClasses: ["fc-daygrid-more-link"],
      dateProfile: t.dateProfile,
      todayRange: t.todayRange,
      allDayDate: t.allDayDate,
      moreCnt: t.moreCnt,
      allSegs: n,
      hiddenSegs: r,
      alignmentElRef: t.alignmentElRef,
      alignGridTop: t.alignGridTop,
      extraDateSpan: t.extraDateSpan,
      popoverContent: () => {
        let i =
          (t.eventDrag ? t.eventDrag.affectedInstances : null) ||
          (t.eventResize ? t.eventResize.affectedInstances : null) ||
          {};
        return b(
          he,
          null,
          n.map((l) => {
            let o = l.eventRange.instance.instanceId;
            return b(
              "div",
              {
                className: "fc-daygrid-event-harness",
                key: o,
                style: { visibility: i[o] ? "hidden" : "" },
              },
              Vv(l)
                ? b(
                    Qv,
                    Object.assign(
                      {
                        seg: l,
                        isDragging: !1,
                        isSelected: o === t.eventSelection,
                        defaultDisplayEventEnd: !1,
                      },
                      Yr(l, t.todayRange)
                    )
                  )
                : b(
                    $v,
                    Object.assign(
                      {
                        seg: l,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: o === t.eventSelection,
                        defaultDisplayEventEnd: !1,
                      },
                      Yr(l, t.todayRange)
                    )
                  )
            );
          })
        );
      },
    });
  }
}
function O1(e) {
  let t = [],
    n = [];
  for (let r of e) t.push(r.seg), r.isVisible || n.push(r.seg);
  return { allSegs: t, invisibleSegs: n };
}
const P1 = xe({ week: "narrow" });
class j1 extends zn {
  constructor() {
    super(...arguments),
      (this.rootElRef = Xt()),
      (this.state = { dayNumberId: _n() }),
      (this.handleRootEl = (t) => {
        Jt(this.rootElRef, t), Jt(this.props.elRef, t);
      });
  }
  render() {
    let { context: t, props: n, state: r, rootElRef: i } = this,
      { options: l, dateEnv: o } = t,
      { date: s, dateProfile: a } = n;
    const u = n.showDayNumber && z1(s, a.currentRange, o);
    return b(
      Mv,
      {
        elTag: "td",
        elRef: this.handleRootEl,
        elClasses: ["fc-daygrid-day", ...(n.extraClassNames || [])],
        elAttrs: Object.assign(
          Object.assign(
            Object.assign({}, n.extraDataAttrs),
            n.showDayNumber ? { "aria-labelledby": r.dayNumberId } : {}
          ),
          { role: "gridcell" }
        ),
        defaultGenerator: L1,
        date: s,
        dateProfile: a,
        todayRange: n.todayRange,
        showDayNumber: n.showDayNumber,
        isMonthStart: u,
        extraRenderProps: n.extraRenderProps,
      },
      (c, f) =>
        b(
          "div",
          {
            ref: n.innerElRef,
            className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
            style: { minHeight: n.minHeight },
          },
          n.showWeekNumber &&
            b(lA, {
              elTag: "a",
              elClasses: ["fc-daygrid-week-number"],
              elAttrs: ml(t, s, "week"),
              date: s,
              defaultFormat: P1,
            }),
          !f.isDisabled && (n.showDayNumber || Iv(l) || n.forceDayTop)
            ? b(
                "div",
                { className: "fc-daygrid-day-top" },
                b(c, {
                  elTag: "a",
                  elClasses: [
                    "fc-daygrid-day-number",
                    u && "fc-daygrid-month-start",
                  ],
                  elAttrs: Object.assign(Object.assign({}, ml(t, s)), {
                    id: r.dayNumberId,
                  }),
                })
              )
            : n.showDayNumber
            ? b(
                "div",
                {
                  className: "fc-daygrid-day-top",
                  style: { visibility: "hidden" },
                },
                b("a", { className: "fc-daygrid-day-number" }, " ")
              )
            : void 0,
          b(
            "div",
            { className: "fc-daygrid-day-events", ref: n.fgContentElRef },
            n.fgContent,
            b(
              "div",
              {
                className: "fc-daygrid-day-bottom",
                style: { marginTop: n.moreMarginTop },
              },
              b(I1, {
                allDayDate: s,
                singlePlacements: n.singlePlacements,
                moreCnt: n.moreCnt,
                alignmentElRef: i,
                alignGridTop: !n.showDayNumber,
                extraDateSpan: n.extraDateSpan,
                dateProfile: n.dateProfile,
                eventSelection: n.eventSelection,
                eventDrag: n.eventDrag,
                eventResize: n.eventResize,
                todayRange: n.todayRange,
              })
            )
          ),
          b("div", { className: "fc-daygrid-day-bg" }, n.bgContent)
        )
    );
  }
}
function L1(e) {
  return e.dayNumberText || b(he, null, " ");
}
function z1(e, t, n) {
  const { start: r, end: i } = t,
    l = In(i, -1),
    o = n.getYear(r),
    s = n.getMonth(r),
    a = n.getYear(l),
    u = n.getMonth(l);
  return (
    !(o === a && s === u) &&
    (e.valueOf() === r.valueOf() ||
      (n.getDay(e) === 1 && e.valueOf() < i.valueOf()))
  );
}
function Gv(e) {
  return e.eventRange.instance.instanceId + ":" + e.firstCol;
}
function Yv(e) {
  return Gv(e) + ":" + e.lastCol;
}
function F1(e, t, n, r, i, l, o) {
  let s = new H1((p) => {
    let m =
      e[p.index].eventRange.instance.instanceId +
      ":" +
      p.span.start +
      ":" +
      (p.span.end - 1);
    return i[m];
  });
  (s.allowReslicing = !0),
    (s.strictOrder = r),
    t === !0 || n === !0
      ? ((s.maxCoord = l), (s.hiddenConsumes = !0))
      : typeof t == "number"
      ? (s.maxStackCnt = t)
      : typeof n == "number" && ((s.maxStackCnt = n), (s.hiddenConsumes = !0));
  let a = [],
    u = [];
  for (let p = 0; p < e.length; p += 1) {
    let m = e[p],
      E = Yv(m);
    i[E] != null
      ? a.push({ index: p, span: { start: m.firstCol, end: m.lastCol + 1 } })
      : u.push(m);
  }
  let c = s.addSegs(a),
    f = s.toRects(),
    {
      singleColPlacements: d,
      multiColPlacements: h,
      leftoverMargins: v,
    } = B1(f, e, o),
    y = [],
    S = [];
  for (let p of u) {
    h[p.firstCol].push({
      seg: p,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0,
    });
    for (let m = p.firstCol; m <= p.lastCol; m += 1)
      d[m].push({
        seg: qr(p, m, m + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0,
      });
  }
  for (let p = 0; p < o.length; p += 1) y.push(0);
  for (let p of c) {
    let m = e[p.index],
      E = p.span;
    h[E.start].push({
      seg: qr(m, E.start, E.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0,
    });
    for (let g = E.start; g < E.end; g += 1)
      (y[g] += 1),
        d[g].push({
          seg: qr(m, g, g + 1, o),
          isVisible: !1,
          isAbsolute: !1,
          absoluteTop: 0,
          marginTop: 0,
        });
  }
  for (let p = 0; p < o.length; p += 1) S.push(v[p]);
  return {
    singleColPlacements: d,
    multiColPlacements: h,
    moreCnts: y,
    moreMarginTops: S,
  };
}
function B1(e, t, n) {
  let r = U1(e, n.length),
    i = [],
    l = [],
    o = [];
  for (let s = 0; s < n.length; s += 1) {
    let a = r[s],
      u = [],
      c = 0,
      f = 0;
    for (let h of a) {
      let v = t[h.index];
      u.push({
        seg: qr(v, s, s + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: h.levelCoord - c,
      }),
        (c = h.levelCoord + h.thickness);
    }
    let d = [];
    (c = 0), (f = 0);
    for (let h of a) {
      let v = t[h.index],
        y = h.span.end - h.span.start > 1,
        S = h.span.start === s;
      (f += h.levelCoord - c),
        (c = h.levelCoord + h.thickness),
        y
          ? ((f += h.thickness),
            S &&
              d.push({
                seg: qr(v, h.span.start, h.span.end, n),
                isVisible: !0,
                isAbsolute: !0,
                absoluteTop: h.levelCoord,
                marginTop: 0,
              }))
          : S &&
            (d.push({
              seg: qr(v, h.span.start, h.span.end, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: h.levelCoord,
              marginTop: f,
            }),
            (f = 0));
    }
    i.push(u), l.push(d), o.push(f);
  }
  return { singleColPlacements: i, multiColPlacements: l, leftoverMargins: o };
}
function U1(e, t) {
  let n = [];
  for (let r = 0; r < t; r += 1) n.push([]);
  for (let r of e)
    for (let i = r.span.start; i < r.span.end; i += 1) n[i].push(r);
  return n;
}
function qr(e, t, n, r) {
  if (e.firstCol === t && e.lastCol === n - 1) return e;
  let i = e.eventRange,
    l = i.range,
    o = cr(l, { start: r[t].date, end: Te(r[n - 1].date, 1) });
  return Object.assign(Object.assign({}, e), {
    firstCol: t,
    lastCol: n - 1,
    eventRange: {
      def: i.def,
      ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
      instance: i.instance,
      range: o,
    },
    isStart: e.isStart && o.start.valueOf() === l.start.valueOf(),
    isEnd: e.isEnd && o.end.valueOf() === l.end.valueOf(),
  });
}
class H1 extends TC {
  constructor() {
    super(...arguments), (this.hiddenConsumes = !1), (this.forceHidden = {});
  }
  addSegs(t) {
    const n = super.addSegs(t),
      { entriesByLevel: r } = this,
      i = (l) => !this.forceHidden[$i(l)];
    for (let l = 0; l < r.length; l += 1) r[l] = r[l].filter(i);
    return n;
  }
  handleInvalidInsertion(t, n, r) {
    const { entriesByLevel: i, forceHidden: l } = this,
      { touchingEntry: o, touchingLevel: s, touchingLateral: a } = t;
    if (this.hiddenConsumes && o) {
      const u = $i(o);
      if (!l[u])
        if (this.allowReslicing) {
          const c = Object.assign(Object.assign({}, o), {
              span: _v(o.span, n.span),
            }),
            f = $i(c);
          (l[f] = !0), (i[s][a] = c), this.splitEntry(o, n, r);
        } else (l[u] = !0), r.push(o);
    }
    return super.handleInvalidInsertion(t, n, r);
  }
}
class qv extends zn {
  constructor() {
    super(...arguments),
      (this.cellElRefs = new Jn()),
      (this.frameElRefs = new Jn()),
      (this.fgElRefs = new Jn()),
      (this.segHarnessRefs = new Jn()),
      (this.rootElRef = Xt()),
      (this.state = {
        framePositions: null,
        maxContentHeight: null,
        segHeights: {},
      }),
      (this.handleResize = (t) => {
        t && this.updateSizing(!0);
      });
  }
  render() {
    let { props: t, state: n, context: r } = this,
      { options: i } = r,
      l = t.cells.length,
      o = lo(t.businessHourSegs, l),
      s = lo(t.bgEventSegs, l),
      a = lo(this.getHighlightSegs(), l),
      u = lo(this.getMirrorSegs(), l),
      {
        singleColPlacements: c,
        multiColPlacements: f,
        moreCnts: d,
        moreMarginTops: h,
      } = F1(
        Sv(t.fgEventSegs, i.eventOrder),
        t.dayMaxEvents,
        t.dayMaxEventRows,
        i.eventOrderStrict,
        n.segHeights,
        n.maxContentHeight,
        t.cells
      ),
      v =
        (t.eventDrag && t.eventDrag.affectedInstances) ||
        (t.eventResize && t.eventResize.affectedInstances) ||
        {};
    return b(
      "tr",
      { ref: this.rootElRef, role: "row" },
      t.renderIntro && t.renderIntro(),
      t.cells.map((y, S) => {
        let p = this.renderFgSegs(S, t.forPrint ? c[S] : f[S], t.todayRange, v),
          m = this.renderFgSegs(
            S,
            W1(u[S], f),
            t.todayRange,
            {},
            !!t.eventDrag,
            !!t.eventResize,
            !1
          );
        return b(j1, {
          key: y.key,
          elRef: this.cellElRefs.createRef(y.key),
          innerElRef: this.frameElRefs.createRef(y.key),
          dateProfile: t.dateProfile,
          date: y.date,
          showDayNumber: t.showDayNumbers,
          showWeekNumber: t.showWeekNumbers && S === 0,
          forceDayTop: t.showWeekNumbers,
          todayRange: t.todayRange,
          eventSelection: t.eventSelection,
          eventDrag: t.eventDrag,
          eventResize: t.eventResize,
          extraRenderProps: y.extraRenderProps,
          extraDataAttrs: y.extraDataAttrs,
          extraClassNames: y.extraClassNames,
          extraDateSpan: y.extraDateSpan,
          moreCnt: d[S],
          moreMarginTop: h[S],
          singlePlacements: c[S],
          fgContentElRef: this.fgElRefs.createRef(y.key),
          fgContent: b(he, null, b(he, null, p), b(he, null, m)),
          bgContent: b(
            he,
            null,
            this.renderFillSegs(a[S], "highlight"),
            this.renderFillSegs(o[S], "non-business"),
            this.renderFillSegs(s[S], "bg-event")
          ),
          minHeight: t.cellMinHeight,
        });
      })
    );
  }
  componentDidMount() {
    this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(t, n) {
    let r = this.props;
    this.updateSizing(!Ot(t, r));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let { props: t } = this;
    return t.eventDrag && t.eventDrag.segs.length
      ? t.eventDrag.segs
      : t.eventResize && t.eventResize.segs.length
      ? t.eventResize.segs
      : t.dateSelectionSegs;
  }
  getMirrorSegs() {
    let { props: t } = this;
    return t.eventResize && t.eventResize.segs.length ? t.eventResize.segs : [];
  }
  renderFgSegs(t, n, r, i, l, o, s) {
    let { context: a } = this,
      { eventSelection: u } = this.props,
      { framePositions: c } = this.state,
      f = this.props.cells.length === 1,
      d = l || o || s,
      h = [];
    if (c)
      for (let v of n) {
        let { seg: y } = v,
          { instanceId: S } = y.eventRange.instance,
          p = v.isVisible && !i[S],
          m = v.isAbsolute,
          E = "",
          g = "";
        m &&
          (a.isRtl
            ? ((g = 0), (E = c.lefts[y.lastCol] - c.lefts[y.firstCol]))
            : ((E = 0), (g = c.rights[y.firstCol] - c.rights[y.lastCol]))),
          h.push(
            b(
              "div",
              {
                className:
                  "fc-daygrid-event-harness" +
                  (m ? " fc-daygrid-event-harness-abs" : ""),
                key: Gv(y),
                ref: d ? null : this.segHarnessRefs.createRef(Yv(y)),
                style: {
                  visibility: p ? "" : "hidden",
                  marginTop: m ? "" : v.marginTop,
                  top: m ? v.absoluteTop : "",
                  left: E,
                  right: g,
                },
              },
              Vv(y)
                ? b(
                    Qv,
                    Object.assign(
                      {
                        seg: y,
                        isDragging: l,
                        isSelected: S === u,
                        defaultDisplayEventEnd: f,
                      },
                      Yr(y, r)
                    )
                  )
                : b(
                    $v,
                    Object.assign(
                      {
                        seg: y,
                        isDragging: l,
                        isResizing: o,
                        isDateSelecting: s,
                        isSelected: S === u,
                        defaultDisplayEventEnd: f,
                      },
                      Yr(y, r)
                    )
                  )
            )
          );
      }
    return h;
  }
  renderFillSegs(t, n) {
    let { isRtl: r } = this.context,
      { todayRange: i } = this.props,
      { framePositions: l } = this.state,
      o = [];
    if (l)
      for (let s of t) {
        let a = r
          ? { right: 0, left: l.lefts[s.lastCol] - l.lefts[s.firstCol] }
          : { left: 0, right: l.rights[s.firstCol] - l.rights[s.lastCol] };
        o.push(
          b(
            "div",
            {
              key: cC(s.eventRange),
              className: "fc-daygrid-bg-harness",
              style: a,
            },
            n === "bg-event"
              ? b(nA, Object.assign({ seg: s }, Yr(s, i)))
              : iA(n)
          )
        );
      }
    return b(he, {}, ...o);
  }
  updateSizing(t) {
    let { props: n, state: r, frameElRefs: i } = this;
    if (!n.forPrint && n.clientWidth !== null) {
      if (t) {
        let a = n.cells.map((u) => i.currentMap[u.key]);
        if (a.length) {
          let u = this.rootElRef.current,
            c = new ls(u, a, !0, !1);
          (!r.framePositions || !r.framePositions.similarTo(c)) &&
            this.setState({ framePositions: new ls(u, a, !0, !1) });
        }
      }
      const l = this.state.segHeights,
        o = this.querySegHeights(),
        s = n.dayMaxEvents === !0 || n.dayMaxEventRows === !0;
      this.safeSetState({
        segHeights: Object.assign(Object.assign({}, l), o),
        maxContentHeight: s ? this.computeMaxContentHeight() : null,
      });
    }
  }
  querySegHeights() {
    let t = this.segHarnessRefs.currentMap,
      n = {};
    for (let r in t) {
      let i = Math.round(t[r].getBoundingClientRect().height);
      n[r] = Math.max(n[r] || 0, i);
    }
    return n;
  }
  computeMaxContentHeight() {
    let t = this.props.cells[0].key,
      n = this.cellElRefs.currentMap[t],
      r = this.fgElRefs.currentMap[t];
    return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }
  getCellEls() {
    let t = this.cellElRefs.currentMap;
    return this.props.cells.map((n) => t[n.key]);
  }
}
qv.addStateEquality({ segHeights: Ot });
function W1(e, t) {
  if (!e.length) return [];
  let n = V1(t);
  return e.map((r) => ({
    seg: r,
    isVisible: !0,
    isAbsolute: !0,
    absoluteTop: n[r.eventRange.instance.instanceId],
    marginTop: 0,
  }));
}
function V1(e) {
  let t = {};
  for (let n of e)
    for (let r of n) t[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
  return t;
}
class $1 extends zn {
  constructor() {
    super(...arguments),
      (this.splitBusinessHourSegs = Y(io)),
      (this.splitBgEventSegs = Y(io)),
      (this.splitFgEventSegs = Y(io)),
      (this.splitDateSelectionSegs = Y(io)),
      (this.splitEventDrag = Y(Jh)),
      (this.splitEventResize = Y(Jh)),
      (this.rowRefs = new Jn());
  }
  render() {
    let { props: t, context: n } = this,
      r = t.cells.length,
      i = this.splitBusinessHourSegs(t.businessHourSegs, r),
      l = this.splitBgEventSegs(t.bgEventSegs, r),
      o = this.splitFgEventSegs(t.fgEventSegs, r),
      s = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
      a = this.splitEventDrag(t.eventDrag, r),
      u = this.splitEventResize(t.eventResize, r),
      c =
        r >= 7 && t.clientWidth
          ? t.clientWidth / n.options.aspectRatio / 6
          : null;
    return b(Ms, { unit: "day" }, (f, d) =>
      b(
        he,
        null,
        t.cells.map((h, v) =>
          b(qv, {
            ref: this.rowRefs.createRef(v),
            key: h.length ? h[0].date.toISOString() : v,
            showDayNumbers: r > 1,
            showWeekNumbers: t.showWeekNumbers,
            todayRange: d,
            dateProfile: t.dateProfile,
            cells: h,
            renderIntro: t.renderRowIntro,
            businessHourSegs: i[v],
            eventSelection: t.eventSelection,
            bgEventSegs: l[v].filter(Q1),
            fgEventSegs: o[v],
            dateSelectionSegs: s[v],
            eventDrag: a[v],
            eventResize: u[v],
            dayMaxEvents: t.dayMaxEvents,
            dayMaxEventRows: t.dayMaxEventRows,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            cellMinHeight: c,
            forPrint: t.forPrint,
          })
        )
      )
    );
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      const t = this.rowRefs.currentMap[0].getCellEls()[0],
        n = t ? t.closest(".fc-daygrid-body") : null;
      n &&
        ((this.rootEl = n),
        this.context.registerInteractiveComponent(this, {
          el: n,
          isHitComboAllowed: this.props.isHitComboAllowed,
        }));
    }
  }
  componentWillUnmount() {
    this.rootEl &&
      (this.context.unregisterInteractiveComponent(this), (this.rootEl = null));
  }
  prepareHits() {
    (this.rowPositions = new ls(
      this.rootEl,
      this.rowRefs.collect().map((t) => t.getCellEls()[0]),
      !1,
      !0
    )),
      (this.colPositions = new ls(
        this.rootEl,
        this.rowRefs.currentMap[0].getCellEls(),
        !0,
        !1
      ));
  }
  queryHit(t, n) {
    let { colPositions: r, rowPositions: i } = this,
      l = r.leftToIndex(t),
      o = i.topToIndex(n);
    if (o != null && l != null) {
      let s = this.props.cells[o][l];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign(
          { range: this.getCellRange(o, l), allDay: !0 },
          s.extraDateSpan
        ),
        dayEl: this.getCellEl(o, l),
        rect: {
          left: r.lefts[l],
          right: r.rights[l],
          top: i.tops[o],
          bottom: i.bottoms[o],
        },
        layer: 0,
      };
    }
    return null;
  }
  getCellEl(t, n) {
    return this.rowRefs.currentMap[t].getCellEls()[n];
  }
  getCellRange(t, n) {
    let r = this.props.cells[t][n].date,
      i = Te(r, 1);
    return { start: r, end: i };
  }
}
function Q1(e) {
  return e.eventRange.def.allDay;
}
class G1 extends zn {
  constructor() {
    super(...arguments), (this.elRef = Xt()), (this.needsScrollReset = !1);
  }
  render() {
    let { props: t } = this,
      { dayMaxEventRows: n, dayMaxEvents: r, expandRows: i } = t,
      l = r === !0 || n === !0;
    l && !i && ((l = !1), (n = null), (r = null));
    let o = [
      "fc-daygrid-body",
      l ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      i ? "" : "fc-daygrid-body-natural",
    ];
    return b(
      "div",
      {
        ref: this.elRef,
        className: o.join(" "),
        style: { width: t.clientWidth, minWidth: t.tableMinWidth },
      },
      b(
        "table",
        {
          role: "presentation",
          className: "fc-scrollgrid-sync-table",
          style: {
            width: t.clientWidth,
            minWidth: t.tableMinWidth,
            height: i ? t.clientHeight : "",
          },
        },
        t.colGroupNode,
        b(
          "tbody",
          { role: "presentation" },
          b($1, {
            dateProfile: t.dateProfile,
            cells: t.cells,
            renderRowIntro: t.renderRowIntro,
            showWeekNumbers: t.showWeekNumbers,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            businessHourSegs: t.businessHourSegs,
            bgEventSegs: t.bgEventSegs,
            fgEventSegs: t.fgEventSegs,
            dateSelectionSegs: t.dateSelectionSegs,
            eventSelection: t.eventSelection,
            eventDrag: t.eventDrag,
            eventResize: t.eventResize,
            dayMaxEvents: r,
            dayMaxEventRows: n,
            forPrint: t.forPrint,
            isHitComboAllowed: t.isHitComboAllowed,
          })
        )
      )
    );
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(t) {
    t.dateProfile !== this.props.dateProfile
      ? this.requestScrollReset()
      : this.flushScrollReset();
  }
  requestScrollReset() {
    (this.needsScrollReset = !0), this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth) {
      const t = Y1(this.elRef.current, this.props.dateProfile);
      if (t) {
        const n = t.closest(".fc-daygrid-body"),
          r = n.closest(".fc-scroller"),
          i = t.getBoundingClientRect().top - n.getBoundingClientRect().top;
        r.scrollTop = i ? i + 1 : 0;
      }
      this.needsScrollReset = !1;
    }
  }
}
function Y1(e, t) {
  let n;
  return (
    t.currentRangeUnit.match(/year|month/) &&
      (n = e.querySelector(`[data-date="${Bb(t.currentDate)}-01"]`)),
    n || (n = e.querySelector(`[data-date="${Al(t.currentDate)}"]`)),
    n
  );
}
class q1 extends FC {
  constructor() {
    super(...arguments), (this.forceDayIfListItem = !0);
  }
  sliceRange(t, n) {
    return n.sliceRange(t);
  }
}
class Z1 extends zn {
  constructor() {
    super(...arguments), (this.slicer = new q1()), (this.tableRef = Xt());
  }
  render() {
    let { props: t, context: n } = this;
    return b(
      G1,
      Object.assign(
        { ref: this.tableRef },
        this.slicer.sliceProps(
          t,
          t.dateProfile,
          t.nextDayThreshold,
          n,
          t.dayTableModel
        ),
        {
          dateProfile: t.dateProfile,
          cells: t.dayTableModel.cells,
          colGroupNode: t.colGroupNode,
          tableMinWidth: t.tableMinWidth,
          renderRowIntro: t.renderRowIntro,
          dayMaxEvents: t.dayMaxEvents,
          dayMaxEventRows: t.dayMaxEventRows,
          showWeekNumbers: t.showWeekNumbers,
          expandRows: t.expandRows,
          headerAlignElRef: t.headerAlignElRef,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          forPrint: t.forPrint,
        }
      )
    );
  }
}
class K1 extends cv {
  buildRenderRange(t, n, r) {
    let i = super.buildRenderRange(t, n, r),
      { props: l } = this;
    return X1({
      currentRange: i,
      snapToWeek: /^(year|month)$/.test(n),
      fixedWeekCount: l.fixedWeekCount,
      dateEnv: l.dateEnv,
    });
  }
}
function X1(e) {
  let { dateEnv: t, currentRange: n } = e,
    { start: r, end: i } = n,
    l;
  if (
    (e.snapToWeek &&
      ((r = t.startOfWeek(r)),
      (l = t.startOfWeek(i)),
      l.valueOf() !== i.valueOf() && (i = xh(l, 1))),
    e.fixedWeekCount)
  ) {
    let o = t.startOfWeek(t.startOfMonth(Te(n.end, -1))),
      s = Math.ceil(Rb(o, i));
    i = xh(i, 6 - s);
  }
  return { start: r, end: i };
}
class J1 extends zn {
  constructor() {
    super(...arguments), (this.headerElRef = Xt());
  }
  renderSimpleLayout(t, n) {
    let { props: r, context: i } = this,
      l = [],
      o = Vh(i.options);
    return (
      t &&
        l.push({
          type: "header",
          key: "header",
          isSticky: o,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: t,
          },
        }),
      l.push({ type: "body", key: "body", liquid: !0, chunk: { content: n } }),
      b(
        Bu,
        { elClasses: ["fc-daygrid"], viewSpec: i.viewSpec },
        b(Nv, {
          liquid: !r.isHeightAuto && !r.forPrint,
          collapsibleWidth: r.forPrint,
          cols: [],
          sections: l,
        })
      )
    );
  }
  renderHScrollLayout(t, n, r, i) {
    let l = this.context.pluginHooks.scrollGridImpl;
    if (!l) throw new Error("No ScrollGrid implementation");
    let { props: o, context: s } = this,
      a = !o.forPrint && Vh(s.options),
      u = !o.forPrint && ZC(s.options),
      c = [];
    return (
      t &&
        c.push({
          type: "header",
          key: "header",
          isSticky: a,
          chunks: [
            {
              key: "main",
              elRef: this.headerElRef,
              tableClassName: "fc-col-header",
              rowContent: t,
            },
          ],
        }),
      c.push({
        type: "body",
        key: "body",
        liquid: !0,
        chunks: [{ key: "main", content: n }],
      }),
      u &&
        c.push({
          type: "footer",
          key: "footer",
          isSticky: !0,
          chunks: [{ key: "main", content: qC }],
        }),
      b(
        Bu,
        { elClasses: ["fc-daygrid"], viewSpec: s.viewSpec },
        b(l, {
          liquid: !o.isHeightAuto && !o.forPrint,
          forPrint: o.forPrint,
          collapsibleWidth: o.forPrint,
          colGroups: [{ cols: [{ span: r, minWidth: i }] }],
          sections: c,
        })
      )
    );
  }
}
class e_ extends J1 {
  constructor() {
    super(...arguments),
      (this.buildDayTableModel = Y(t_)),
      (this.headerRef = Xt()),
      (this.tableRef = Xt());
  }
  render() {
    let { options: t, dateProfileGenerator: n } = this.context,
      { props: r } = this,
      i = this.buildDayTableModel(r.dateProfile, n),
      l =
        t.dayHeaders &&
        b(PC, {
          ref: this.headerRef,
          dateProfile: r.dateProfile,
          dates: i.headerDates,
          datesRepDistinctDays: i.rowCnt === 1,
        }),
      o = (s) =>
        b(Z1, {
          ref: this.tableRef,
          dateProfile: r.dateProfile,
          dayTableModel: i,
          businessHours: r.businessHours,
          dateSelection: r.dateSelection,
          eventStore: r.eventStore,
          eventUiBases: r.eventUiBases,
          eventSelection: r.eventSelection,
          eventDrag: r.eventDrag,
          eventResize: r.eventResize,
          nextDayThreshold: t.nextDayThreshold,
          colGroupNode: s.tableColGroupNode,
          tableMinWidth: s.tableMinWidth,
          dayMaxEvents: t.dayMaxEvents,
          dayMaxEventRows: t.dayMaxEventRows,
          showWeekNumbers: t.weekNumbers,
          expandRows: !r.isHeightAuto,
          headerAlignElRef: this.headerElRef,
          clientWidth: s.clientWidth,
          clientHeight: s.clientHeight,
          forPrint: r.forPrint,
        });
    return t.dayMinWidth
      ? this.renderHScrollLayout(l, o, i.colCnt, t.dayMinWidth)
      : this.renderSimpleLayout(l, o);
  }
}
function t_(e, t) {
  let n = new LC(e.renderRange, t);
  return new zC(n, /year|month|week/.test(e.currentRangeUnit));
}
var n_ = Fn({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: { component: e_, dateProfileGeneratorClass: K1 },
    dayGridDay: { type: "dayGrid", duration: { days: 1 } },
    dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      fixedWeekCount: !0,
    },
    dayGridYear: { type: "dayGrid", duration: { years: 1 } },
  },
});
class r_ extends oe {
  constructor() {
    super(...arguments), (this.state = { textId: _n() });
  }
  render() {
    let { theme: t, dateEnv: n, options: r, viewApi: i } = this.context,
      { cellId: l, dayDate: o, todayRange: s } = this.props,
      { textId: a } = this.state,
      u = cd(o, s),
      c = r.listDayFormat ? n.format(o, r.listDayFormat) : "",
      f = r.listDaySideFormat ? n.format(o, r.listDaySideFormat) : "",
      d = Object.assign(
        {
          date: n.toDate(o),
          view: i,
          textId: a,
          text: c,
          sideText: f,
          navLinkAttrs: ml(this.context, o),
          sideNavLinkAttrs: ml(this.context, o, "day", !1),
        },
        u
      );
    return b(
      ft,
      {
        elTag: "tr",
        elClasses: ["fc-list-day", ...Ns(u, t)],
        elAttrs: { "data-date": Al(o) },
        renderProps: d,
        generatorName: "dayHeaderContent",
        customGenerator: r.dayHeaderContent,
        defaultGenerator: i_,
        classNameGenerator: r.dayHeaderClassNames,
        didMount: r.dayHeaderDidMount,
        willUnmount: r.dayHeaderWillUnmount,
      },
      (h) =>
        b(
          "th",
          { scope: "colgroup", colSpan: 3, id: l, "aria-labelledby": a },
          b(h, {
            elTag: "div",
            elClasses: ["fc-list-day-cushion", t.getClass("tableCellShaded")],
          })
        )
    );
  }
}
function i_(e) {
  return b(
    he,
    null,
    e.text &&
      b(
        "a",
        Object.assign(
          { id: e.textId, className: "fc-list-day-text" },
          e.navLinkAttrs
        ),
        e.text
      ),
    e.sideText &&
      b(
        "a",
        Object.assign(
          { "aria-hidden": !0, className: "fc-list-day-side-text" },
          e.sideNavLinkAttrs
        ),
        e.sideText
      )
  );
}
const l_ = xe({ hour: "numeric", minute: "2-digit", meridiem: "short" });
class o_ extends oe {
  render() {
    let { props: t, context: n } = this,
      { options: r } = n,
      { seg: i, timeHeaderId: l, eventHeaderId: o, dateHeaderId: s } = t,
      a = r.eventTimeFormat || l_;
    return b(
      Is,
      Object.assign({}, t, {
        elTag: "tr",
        elClasses: [
          "fc-list-event",
          i.eventRange.def.url && "fc-event-forced-url",
        ],
        defaultGenerator: () => s_(i, n),
        seg: i,
        timeText: "",
        disableDragging: !0,
        disableResizing: !0,
      }),
      (u, c) =>
        b(
          he,
          null,
          a_(i, a, n, l, s),
          b(
            "td",
            { "aria-hidden": !0, className: "fc-list-event-graphic" },
            b("span", {
              className: "fc-list-event-dot",
              style: { borderColor: c.borderColor || c.backgroundColor },
            })
          ),
          b(u, {
            elTag: "td",
            elClasses: ["fc-list-event-title"],
            elAttrs: { headers: `${o} ${s}` },
          })
        )
    );
  }
}
function s_(e, t) {
  let n = ud(e, t);
  return b("a", Object.assign({}, n), e.eventRange.def.title);
}
function a_(e, t, n, r, i) {
  let { options: l } = n;
  if (l.displayEventTime !== !1) {
    let o = e.eventRange.def,
      s = e.eventRange.instance,
      a = !1,
      u;
    if (
      (o.allDay
        ? (a = !0)
        : Ax(e.eventRange.range)
        ? e.isStart
          ? (u = Vi(e, t, n, null, null, s.range.start, e.end))
          : e.isEnd
          ? (u = Vi(e, t, n, null, null, e.start, s.range.end))
          : (a = !0)
        : (u = Vi(e, t, n)),
      a)
    ) {
      let c = { text: n.options.allDayText, view: n.viewApi };
      return b(ft, {
        elTag: "td",
        elClasses: ["fc-list-event-time"],
        elAttrs: { headers: `${r} ${i}` },
        renderProps: c,
        generatorName: "allDayContent",
        customGenerator: l.allDayContent,
        defaultGenerator: u_,
        classNameGenerator: l.allDayClassNames,
        didMount: l.allDayDidMount,
        willUnmount: l.allDayWillUnmount,
      });
    }
    return b("td", { className: "fc-list-event-time" }, u);
  }
  return null;
}
function u_(e) {
  return e.text;
}
class c_ extends zn {
  constructor() {
    super(...arguments),
      (this.computeDateVars = Y(f_)),
      (this.eventStoreToSegs = Y(this._eventStoreToSegs)),
      (this.state = {
        timeHeaderId: _n(),
        eventHeaderId: _n(),
        dateHeaderIdRoot: _n(),
      }),
      (this.setRootEl = (t) => {
        t
          ? this.context.registerInteractiveComponent(this, { el: t })
          : this.context.unregisterInteractiveComponent(this);
      });
  }
  render() {
    let { props: t, context: n } = this,
      { dayDates: r, dayRanges: i } = this.computeDateVars(t.dateProfile),
      l = this.eventStoreToSegs(t.eventStore, t.eventUiBases, i);
    return b(
      Bu,
      {
        elRef: this.setRootEl,
        elClasses: [
          "fc-list",
          n.theme.getClass("table"),
          n.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : "",
        ],
        viewSpec: n.viewSpec,
      },
      b(
        Dv,
        {
          liquid: !t.isHeightAuto,
          overflowX: t.isHeightAuto ? "visible" : "hidden",
          overflowY: t.isHeightAuto ? "visible" : "auto",
        },
        l.length > 0 ? this.renderSegList(l, r) : this.renderEmptyMessage()
      )
    );
  }
  renderEmptyMessage() {
    let { options: t, viewApi: n } = this.context,
      r = { text: t.noEventsText, view: n };
    return b(
      ft,
      {
        elTag: "div",
        elClasses: ["fc-list-empty"],
        renderProps: r,
        generatorName: "noEventsContent",
        customGenerator: t.noEventsContent,
        defaultGenerator: d_,
        classNameGenerator: t.noEventsClassNames,
        didMount: t.noEventsDidMount,
        willUnmount: t.noEventsWillUnmount,
      },
      (i) => b(i, { elTag: "div", elClasses: ["fc-list-empty-cushion"] })
    );
  }
  renderSegList(t, n) {
    let { theme: r, options: i } = this.context,
      { timeHeaderId: l, eventHeaderId: o, dateHeaderIdRoot: s } = this.state,
      a = h_(t);
    return b(Ms, { unit: "day" }, (u, c) => {
      let f = [];
      for (let d = 0; d < a.length; d += 1) {
        let h = a[d];
        if (h) {
          let v = Al(n[d]),
            y = s + "-" + v;
          f.push(b(r_, { key: v, cellId: y, dayDate: n[d], todayRange: c })),
            (h = Sv(h, i.eventOrder));
          for (let S of h)
            f.push(
              b(
                o_,
                Object.assign(
                  {
                    key: v + ":" + S.eventRange.instance.instanceId,
                    seg: S,
                    isDragging: !1,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: !1,
                    timeHeaderId: l,
                    eventHeaderId: o,
                    dateHeaderId: y,
                  },
                  Yr(S, c, u)
                )
              )
            );
        }
      }
      return b(
        "table",
        { className: "fc-list-table " + r.getClass("table") },
        b(
          "thead",
          null,
          b(
            "tr",
            null,
            b("th", { scope: "col", id: l }, i.timeHint),
            b("th", { scope: "col", "aria-hidden": !0 }),
            b("th", { scope: "col", id: o }, i.eventHint)
          )
        ),
        b("tbody", null, f)
      );
    });
  }
  _eventStoreToSegs(t, n, r) {
    return this.eventRangesToSegs(
      Wu(
        t,
        n,
        this.props.dateProfile.activeRange,
        this.context.options.nextDayThreshold
      ).fg,
      r
    );
  }
  eventRangesToSegs(t, n) {
    let r = [];
    for (let i of t) r.push(...this.eventRangeToSegs(i, n));
    return r;
  }
  eventRangeToSegs(t, n) {
    let { dateEnv: r } = this.context,
      { nextDayThreshold: i } = this.context.options,
      l = t.range,
      o = t.def.allDay,
      s,
      a,
      u,
      c = [];
    for (s = 0; s < n.length; s += 1)
      if (
        ((a = cr(l, n[s])),
        a &&
          ((u = {
            component: this,
            eventRange: t,
            start: a.start,
            end: a.end,
            isStart: t.isStart && a.start.valueOf() === l.start.valueOf(),
            isEnd: t.isEnd && a.end.valueOf() === l.end.valueOf(),
            dayIndex: s,
          }),
          c.push(u),
          !u.isEnd &&
            !o &&
            s + 1 < n.length &&
            l.end < r.add(n[s + 1].start, i)))
      ) {
        (u.end = l.end), (u.isEnd = !0);
        break;
      }
    return c;
  }
}
function d_(e) {
  return e.text;
}
function f_(e) {
  let t = ue(e.renderRange.start),
    n = e.renderRange.end,
    r = [],
    i = [];
  for (; t < n; )
    r.push(t), i.push({ start: t, end: Te(t, 1) }), (t = Te(t, 1));
  return { dayDates: r, dayRanges: i };
}
function h_(e) {
  let t = [],
    n,
    r;
  for (n = 0; n < e.length; n += 1)
    (r = e[n]), (t[r.dayIndex] || (t[r.dayIndex] = [])).push(r);
  return t;
}
var p_ =
  ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
Zc(p_);
const m_ = {
  listDayFormat: ep,
  listDaySideFormat: ep,
  noEventsClassNames: C,
  noEventsContent: C,
  noEventsDidMount: C,
  noEventsWillUnmount: C,
};
function ep(e) {
  return e === !1 ? null : xe(e);
}
var g_ = Fn({
  name: "@fullcalendar/list",
  optionRefiners: m_,
  views: {
    list: {
      component: c_,
      buttonTextKey: "list",
      listDayFormat: { month: "long", day: "numeric", year: "numeric" },
    },
    listDay: {
      type: "list",
      duration: { days: 1 },
      listDayFormat: { weekday: "long" },
    },
    listWeek: {
      type: "list",
      duration: { weeks: 1 },
      listDayFormat: { weekday: "long" },
      listDaySideFormat: { month: "long", day: "numeric", year: "numeric" },
    },
    listMonth: {
      type: "list",
      duration: { month: 1 },
      listDaySideFormat: { weekday: "long" },
    },
    listYear: {
      type: "list",
      duration: { year: 1 },
      listDaySideFormat: { weekday: "long" },
    },
  },
});
const v_ = parseInt(String(Qi.version).split(".")[0]),
  y_ = v_ < 18;
class Zv extends k.Component {
  constructor() {
    super(...arguments),
      (this.elRef = k.createRef()),
      (this.isUpdating = !1),
      (this.isUnmounting = !1),
      (this.state = { customRenderingMap: new Map() }),
      (this.requestResize = () => {
        this.isUnmounting ||
          (this.cancelResize(),
          (this.resizeId = requestAnimationFrame(() => {
            this.doResize();
          })));
      });
  }
  render() {
    const t = [];
    for (const n of this.state.customRenderingMap.values())
      t.push(Qi.createElement(w_, { key: n.id, customRendering: n }));
    return Qi.createElement("div", { ref: this.elRef }, t);
  }
  componentDidMount() {
    const t = new gA();
    (this.handleCustomRendering = t.handle.bind(t)),
      (this.calendar = new T1(
        this.elRef.current,
        Object.assign(Object.assign({}, this.props), {
          handleCustomRendering: this.handleCustomRendering,
        })
      )),
      this.calendar.render();
    let n;
    t.subscribe((r) => {
      const i = Date.now(),
        l = !n;
      (y_ || l || this.isUpdating || this.isUnmounting || i - n < 100
        ? Kv
        : Hc.flushSync)(() => {
        this.setState({ customRenderingMap: r }, () => {
          (n = i), l ? this.doResize() : this.requestResize();
        });
      });
    });
  }
  componentDidUpdate() {
    (this.isUpdating = !0),
      this.calendar.resetOptions(
        Object.assign(Object.assign({}, this.props), {
          handleCustomRendering: this.handleCustomRendering,
        })
      ),
      (this.isUpdating = !1);
  }
  componentWillUnmount() {
    (this.isUnmounting = !0), this.cancelResize(), this.calendar.destroy();
  }
  doResize() {
    this.calendar.updateSize();
  }
  cancelResize() {
    this.resizeId !== void 0 &&
      (cancelAnimationFrame(this.resizeId), (this.resizeId = void 0));
  }
  getApi() {
    return this.calendar;
  }
}
Zv.act = Kv;
class w_ extends k.PureComponent {
  render() {
    const { customRendering: t } = this.props,
      { generatorMeta: n } = t,
      r = typeof n == "function" ? n(t.renderProps) : n;
    return Hc.createPortal(r, t.containerEl);
  }
}
function Kv(e) {
  e();
}
var E_ = {
  code: "ja",
  buttonText: {
    prev: "前",
    next: "次",
    today: "今日",
    year: "年",
    month: "月",
    week: "週",
    day: "日",
    list: "予定リスト",
  },
  weekText: "週",
  allDayText: "終日",
  moreLinkText(e) {
    return "他 " + e + " 件";
  },
  noEventsText: "表示する予定はありません",
};
function fd() {
  return IE();
}
function S_(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), 1),
    n = new Date(x_(e), b_(e.getMonth()), 1);
  return { start: t, end: n };
}
function b_(e) {
  return e === 10 ? 1 : e + 3;
}
function x_(e) {
  return e.getMonth() === 10 ? e.getFullYear() + 1 : e.getFullYear();
}
function tp() {
  return window.innerWidth < 700 ? "listMonth" : "dayGridMonth";
}
function C_(e) {
  const t = e.view.currentEnd.getMonth(),
    n = new Date().getMonth() + 4;
  t < n && e.view.calendar.next();
}
function A_() {
  var a;
  const { schools: e, selections: t, setSelections: n } = fd(),
    r = Qc(),
    i =
      (a = e.find((u) => u.id === t.schoolId)) == null
        ? void 0
        : a.setsumeikais.map((u) =>
            u.full ? { ...u, title: "満席", borderColor: "#918779" } : u
          ),
    { start: l, end: o } = S_(new Date()),
    s = k.useRef(null);
  return w.jsx("main", {
    ref: s,
    children: w.jsx(Zv, {
      contentHeight: "auto",
      datesSet: () => {
        if (s.current) {
          const u = s.current.getBoundingClientRect().top,
            c = 100,
            f = window.scrollY,
            d = u + f - c;
          window.scrollTo({ top: d, behavior: "smooth" });
        }
      },
      dayCellClassNames:
        "font-semibold text-ku-button rounded border-secondary",
      dayHeaderClassNames:
        "md:bg-ku-orange md:rounded md:border-none md:text-white md:text-lg",
      events: i,
      eventColor: "#ef8200",
      eventClassNames: function (c) {
        return c.event._def.extendedProps.full
          ? [
              "cursor-not-allowed",
              "md:bg-ku-secondary",
              "md:border-ku-secondary",
            ]
          : ["cursor-pointer"];
      },
      eventClick: (u) => {
        const c = u.event;
        c._def.extendedProps.full ||
          (c != null &&
            c.start &&
            (n({ ...t, setsumeikaiId: c.id, setsumeikaiDate: c.start }),
            r(`/form/${t.schoolId}/${c.id}`)));
      },
      eventDisplay: "block",
      firstDay: 1,
      footerToolbar: { start: "title", center: "", end: "today prev,next" },
      initialView: tp(),
      locale: E_,
      noEventsDidMount: (u) => C_(u),
      noEventsText: "今月の説明会はありません",
      plugins: [n_, g_],
      validRange: { start: l, end: o },
      windowResize: (u) => u.view.calendar.changeView(tp()),
    }),
  });
}
function __({ selections: e, plannedSchool: t, venue: n }) {
  const r = "flex flex-col items-center basis-1/3 gap-3",
    i = "font-bold text-2xl text-ku-orange",
    l = "text-ku-secondary font-bold";
  return w.jsxs("div", {
    className:
      "w-full flex flex-col md:flex-row justify-evenly items-center p-2 rounded-md selections-border gap-5",
    children: [
      t
        ? w.jsxs("div", {
            className: r,
            children: [
              w.jsx("h3", {
                className: i,
                children: "通学をご検討中のスクール",
              }),
              w.jsx("p", { className: l, children: t }),
            ],
          })
        : null,
      w.jsxs("div", {
        className: r,
        children: [
          w.jsx("h3", { className: i, children: "説明会場" }),
          w.jsx("p", { className: l, children: n }),
        ],
      }),
      w.jsxs("div", {
        className: r,
        children: [
          w.jsx("h3", { className: i, children: "参加日程" }),
          w.jsx("p", {
            className: l,
            children: e.setsumeikaiDate ? Yc(e.setsumeikaiDate) : "",
          }),
        ],
      }),
    ],
  });
}
function Ft({ type: e, label: t, name: n, placeholder: r, required: i }) {
  return e === "textarea"
    ? w.jsxs("div", {
        className: "flex flex-col w-full gap-2",
        children: [
          w.jsxs("label", {
            htmlFor: n,
            className: "self-start font-semibold text-lg",
            children: [
              w.jsx("span", {
                className: "text-ku-secondary text-base",
                children: t,
              }),
              w.jsx("span", {
                className: `label text-xs ${
                  i ? "label-required" : "label-premium"
                }`,
                children: i ? "必須" : "任意",
              }),
            ],
          }),
          w.jsx("textarea", {
            name: n,
            placeholder: r,
            required: i,
            rows: 4,
            className:
              "border border-secondary rounded-md p-3 focus-visible:shadow-input-orange focus-visible:outline-none bg-white placeholder:text-ku-placeholder placeholder:font-medium text-ku-secondary",
          }),
        ],
      })
    : w.jsxs("div", {
        className: "flex flex-col basis-[45%] gap-2",
        children: [
          w.jsxs("label", {
            htmlFor: n,
            className: "self-start font-semibold text-lg",
            children: [
              w.jsx("span", {
                className: "text-ku-secondary text-base",
                children: t,
              }),
              w.jsx("span", {
                className: `label text-xs ${
                  i ? "label-required" : "label-premium"
                }`,
                children: i ? "必須" : "任意",
              }),
            ],
          }),
          w.jsx("input", {
            type: e,
            name: n,
            placeholder: r,
            required: i,
            className:
              "border border-secondary rounded-md p-2 bg-white placeholder:text-ku-placeholder placeholder:font-medium text-ku-secondary focus-visible:outline-none focus-visible:shadow-input-orange",
          }),
          t === "電話番号"
            ? w.jsx("p", {
                className: "text-start text-sm",
                children:
                  "※お電話での回答を希望される方は、以下の「お問い合わせ内容」に通話可能な日時をご記載ください。",
              })
            : null,
        ],
      });
}
function k_({ label: e, name: t, options: n, required: r, selected: i }) {
  return w.jsxs("div", {
    className: "flex basis-[45%] flex-col gap-2 text-lg",
    children: [
      w.jsxs("label", {
        htmlFor: t,
        className: "self-start font-semibold",
        children: [
          w.jsx("span", {
            className: "text-base text-ku-secondary",
            children: e,
          }),
          w.jsx("span", {
            className: `label text-xs ${
              r ? "label-required" : "label-premium"
            }`,
            children: r ? "必須" : "任意",
          }),
        ],
      }),
      w.jsxs("select", {
        name: t,
        required: r,
        className:
          "border-secondary border-secondary rounded-md border bg-white p-2 text-ku-secondary focus:text-ku-orange focus:shadow-input-orange focus-visible:shadow-input-orange focus-visible:outline-none",
        children: [
          w.jsx("option", {
            value: "",
            className: "text-black",
            children: "選択してください",
          }),
          n.map((l) =>
            w.jsx(
              "option",
              {
                value: l.value,
                className: "text-black",
                selected: i === l.name,
                children: l.name,
              },
              l.value
            )
          ),
        ],
      }),
    ],
  });
}
function R_({ label: e, name: t, options: n }) {
  return w.jsxs("fieldset", {
    className:
      "basis-[45%] flex flex-row flex-wrap justify-center p-3 fieldset-border rounded-md",
    children: [
      w.jsxs("legend", {
        className: "font-semibold text-lg mx-auto p-1",
        children: [
          w.jsx("span", {
            className: "text-ku-secondary text-base",
            children: e,
          }),
          w.jsx("span", {
            className: "label label-premium text-xs",
            children: "任意",
          }),
        ],
      }),
      n.map((r) =>
        w.jsxs(
          "div",
          {
            className: "basis-1/3 flex items-center gap-2 font-bold",
            children: [
              w.jsx("input", {
                type: "radio",
                name: t,
                id: r.name,
                value: r.value,
                className:
                  "relative appearance-none rounded-full border-2 border-ku-faded w-[14px] h-[14px] checked:border-ku-orange checked:before:bg-ku-orange checked:before:w-[8px] checked:before:h-[8px] checked:before:rounded-full flex items-center justify-center",
              }),
              w.jsx("label", {
                htmlFor: r.name,
                className: "text-ku-secondary",
                children: r.name,
              }),
            ],
          },
          r.name
        )
      ),
    ],
  });
}
function D_({ policyAccepted: e, setPolicyAccepted: t }) {
  const [n, r] = k.useState(!1),
    i = k.useRef(null);
  return (
    k.useEffect(() => {
      var l, o;
      n
        ? (l = i.current) == null || l.showModal()
        : (o = i.current) == null || o.close();
    }, [n]),
    w.jsxs("div", {
      className: "flex flex-col gap-2",
      children: [
        w.jsxs("div", {
          className: "flex justify-center items-center gap-2",
          children: [
            w.jsx("input", {
              type: "checkbox",
              name: "privacy_policy",
              id: "privacy_policy",
              checked: e,
              required: !0,
              onChange: () => t(!e),
              className:
                "appearance-none rounded border-2 border-ku-faded w-[14px] h-[14px] checked:border-ku-orange checked:before:bg-ku-orange checked:before:w-[10px] checked:before:h-[10px] flex items-center justify-center",
            }),
            w.jsx("label", {
              htmlFor: "privacy_policy",
              className: "text-ku-secondary font-semibold text-base",
              children: "個人情報保護方針に同意する",
            }),
          ],
        }),
        w.jsx("button", {
          type: "button",
          onClick: () => r(!0),
          className:
            "border-button rounded px-2 py-1 font-semibold text-base hover:bg-main-background hover:text-ku-secondary bg-ku-button text-white",
          children: "個人情報保護方針を見る",
        }),
        w.jsx("dialog", {
          ref: i,
          onClose: () => r(!1),
          className:
            "z-50 fixed inset-0 h-screen w-screen p-10 rounded text-start bg-main-background backdrop:bg-black backdrop:opacity-75 m-auto",
          children: w.jsxs("div", {
            className: "modal",
            children: [
              w.jsxs("div", {
                className:
                  "modal-header flex justify-between items-center text-xl",
                children: [
                  w.jsx("h2", {
                    className: "font-semibold",
                    children: "プライバシーポリシー",
                  }),
                  w.jsx("button", {
                    type: "button",
                    className:
                      "h-5 w-5 flex items-center justify-center p-4 border-button rounded font-semibold text-base text-ku-secondary hover:bg-ku-button hover:text-white",
                    onClick: () => r(!1),
                    children: "X",
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "modal-content",
                children: [
                  w.jsx("h5", {
                    children: "株式会社P-UP World（ピーアップワールド）",
                  }),
                  w.jsx("h5", { children: "代表取締役社長　中込 正典" }),
                  w.jsx("br", {}),
                  w.jsx("p", {
                    children:
                      "株式会社P-UP World及びその子会社各社（以下「当社グループ各社」といい、具体的には下表記載の各社をいいます。）は、お客様または利用者の個人情報（生存する個人に関する情報であって、お名前、電子メールアドレス、電話番号、住所その他の記述等により特定の個人を識別できる情報および個人識別符号が含まれる情報。以下「個人情報」といいます。）を含む当社グループ各社が取得したすべての個人情報を安全に保管し、お客様および利用者の意思を尊重した利用・取扱いを行う環境を築き、お客様および利用者からの信頼を頂くとともに、安全でより良いサービスの提供を行い、法令を遵守するとともに、以下の方針に基づき、当社グループ各社が収集し利用するすべての個人情報の適切な取扱いに取り組んでまいります。",
                  }),
                  w.jsx("br", {}),
                  w.jsxs("ol", {
                    className: "list-decimal",
                    children: [
                      w.jsx("li", { children: "個人情報の取得" }),
                      w.jsx("p", {
                        children:
                          "当社グループ各社は、第２項に定める利用目的のために必要な範囲で、適切かつ公正な手段によって個人情報を取得いたします。 また、当社グループ各社は、お客様または利用者の個人情報を取得しようとする場合または取得した場合には、その利用目的をお客様または利用者に明示しまたは公表（もしくは通知）いたします。",
                      }),
                      w.jsx("br", {}),
                      w.jsx("li", { children: "個人情報の利用目的" }),
                      w.jsx("p", {
                        children:
                          "当社グループ各社は、保有する個人情報を、次の目的で利用いたします。",
                      }),
                      w.jsxs("ol", {
                        className: "list-disc",
                        children: [
                          w.jsx("li", {
                            children:
                              "当社グループ各社が取扱うサービス・商品及びその関連するサービス・商品についての情報の、お客様または利用者及びお取引関係者へのご提供",
                          }),
                          w.jsx("li", {
                            children:
                              "当社グループ各社のお客様または利用者に対するサービスのご提供 キャンペーン・イベントまたはアンケート等のご案内、商品または製品などの発送、料金の計算およびそのご請求",
                          }),
                          w.jsx("li", {
                            children:
                              "電話、電子メール等を利用してのご連絡、お問い合わせに対するご返答",
                          }),
                          w.jsx("li", {
                            children:
                              "サービスにおける本人確認、ユーザー登録、サービス向上のための利用状況の調査",
                          }),
                          w.jsx("li", {
                            children:
                              "当社グループ各社の従業員の個人情報については、雇用及び人事管理",
                          }),
                          w.jsx("li", {
                            children:
                              "防犯カメラ・録音機の設置及び取得した情報（個人情報を含みます）による防犯・防災",
                          }),
                          w.jsx("li", {
                            children:
                              "利便性向上及び満足度向上、レイアウトの改善等の店舗運営",
                          }),
                        ],
                      }),
                      w.jsx("p", {}),
                      w.jsx("br", {}),
                      w.jsx("li", { children: "個人情報の共同利用" }),
                      w.jsx("p", {
                        children:
                          "当社グループ各社は、お客様または利用者からご提供頂いた個人情報（お名前、電子メールアドレス、電話番号、ご住所等の情報及び公開情報等、前項に定める目的の達成に必要な範囲の項目）、ならびに店舗内カメラで取得したお客様または利用者の映像等から得られたデータに基づき統計処理した情報を、前項の目的のため、当社グループ各社と共同利用することがございます。 個人情報を共同利用する場合、株式会社P-UP Worldがその責任において管理します。株式会社P-UP Worldの住所および代表者氏名については、こちらをご覧ください。",
                      }),
                      w.jsx("br", {}),
                      w.jsx("li", { children: "個人情報の第三者への提供" }),
                      w.jsx("p", {
                        children:
                          "当社グループ各社は、次の各号のいずれかに該当すると認められるときは、個人情報を第三者に提供することがございます。",
                      }),
                      w.jsxs("ol", {
                        className: "list-disc",
                        children: [
                          w.jsx("li", { children: "法令に基づく場合" }),
                          w.jsx("li", {
                            children:
                              "人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき",
                          }),
                          w.jsx("li", {
                            children:
                              "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき",
                          }),
                          w.jsx("li", {
                            children:
                              "国の機関若しくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき",
                          }),
                          w.jsx("li", {
                            children:
                              "学術研究機関等（大学その他の学術研究を目的とする機関若しくは団体又はそれらに属する者）に個人情報を提供する場合であって、当該学術研究機関等が当該個人情報を学術研究目的で取り扱う必要がある場合（当該個人情報を取り扱う目的の一部が学術研究目的である場合を含み、個人の権利利益を不当に侵害するおそれがある場合を除きます。）",
                          }),
                        ],
                      }),
                      w.jsx("p", {}),
                      w.jsx("br", {}),
                      w.jsx("li", { children: "個人情報の管理" }),
                      w.jsx("p", {
                        children:
                          "当社グループ各社は、お客様また利用者の個人情報の安全管理に関する規程を整備し、必要かつ適切な措置を講ずるとともに個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えい等を防止するため、必要な技術的措置を講じます。また、当社グループ各社は、個人情報保護に関する管理体制の継続的改善のため、計画・実施・監視・要因分析・改善施策実施というプロセスを継続的に運用し、適切な管理体制の維持に努めます。",
                      }),
                      w.jsx("br", {}),
                      w.jsx("li", { children: "個人情報取扱業務の外部委託" }),
                      w.jsx("p", {
                        children:
                          "当社グループ各社は、個人情報の取扱いの全部または一部を外部に委託することがあります。この場合、委託先において個人情報の安全管理が図られるよう、法の定めに従い必要かつ適切な監督を行います。",
                      }),
                      w.jsx("br", {}),
                      w.jsx("li", {
                        children: "個人情報の開示・訂正・利用停止・消去等",
                      }),
                      w.jsxs("p", {
                        children: [
                          "お客様または利用者ご本人またはその代理人は、当社グループ各社に対し、当該当社グループ各社の保有個人データの開示（第三者提供記録の開示を含みます。）を求めることができます。ただし、次の各号のいずれかに該当する場合には、当社グループ各社として開示しないことができます。",
                          w.jsx("br", {}),
                        ],
                      }),
                      w.jsxs("ol", {
                        className: "list-disc",
                        children: [
                          w.jsx("li", {
                            children:
                              "お客様または利用者本人または第三者の生命、身体、財産その他利益を害するおそれがある場合",
                          }),
                          w.jsx("li", {
                            children:
                              "当社グループ各社の業務の適正な実施に著しい支障を及ぼすおそれがある場合",
                          }),
                          w.jsx("li", {
                            children: "法令に違反することとなる場合",
                          }),
                        ],
                      }),
                      w.jsx("br", {}),
                      "当社グループ各社は、お客様若しくは利用者ご本人またはその代理人から保有個人データの内容の訂正、追加、削除、第三者への提供の停止を求められたときは、法令に従って、利用目的の達成に必要な範囲内において、遅滞なく調査を行います。その結果に基づき、法令に定める範囲で、当該個人情報の内容の訂正、追加、削除、または第三者への提供の停止を行います。",
                      w.jsx("p", {}),
                      w.jsx("br", {}),
                      w.jsx("li", {
                        children: "プライバシーポリシーに関するお問い合わせ先",
                      }),
                      w.jsx("br", {}),
                      w.jsx("p", {
                        children:
                          "当社グループ各社が保有する個人情報に関するご連絡、ご要望、お問合せ等は、下記までご連絡ください。",
                      }),
                      w.jsxs("ol", {
                        className: "list-disc",
                        children: [
                          w.jsx("li", {
                            children:
                              "プライバシーポリシーに関するお問い合わせ先",
                          }),
                          w.jsx("li", {
                            children: "受付窓口　本社カスタマーセンター",
                          }),
                          w.jsx("li", { children: "E‐Mail　　ir@p-up.jp" }),
                          w.jsx("li", {
                            children: "受付電話番号　　03-3870- 0099",
                          }),
                          w.jsx("li", {
                            children:
                              "受付時間　　平日午前10時から午後6時まで。但し、12月31日から1月3日、システムメンテナンス日を除く。",
                          }),
                        ],
                      }),
                      w.jsx("p", {}),
                      w.jsx("br", {}),
                    ],
                  }),
                  w.jsxs("p", {
                    children: [
                      "P-UPWorld グループ各社",
                      w.jsx("br", {}),
                      "本ポリシーにおける当社グループ各社は、下表記載の株式会社P-UP World グループ各社をいいます。",
                      w.jsx("br", {}),
                      "社名",
                      w.jsx("br", {}),
                      "株式会社P-UP World",
                      w.jsx("br", {}),
                      "株式会社ピーアップ",
                      w.jsx("br", {}),
                      "株式会社Kids-UP",
                      w.jsx("br", {}),
                      "株式会社デライトアップ",
                      w.jsx("br", {}),
                      "株式会社Moto-UP",
                      w.jsx("br", {}),
                      "株式会社Mogu-UP",
                      w.jsx("br", {}),
                      "KauUP株式会社",
                      w.jsx("br", {}),
                      "株式会社P-UPneo",
                      w.jsx("br", {}),
                      "株式会社Back-UP",
                      w.jsx("br", {}),
                      "株式会社P-up Challenge",
                      w.jsx("br", {}),
                      w.jsx("br", {}),
                      "改訂履歴",
                      w.jsx("br", {}),
                      "2020年03月03日　作成",
                      w.jsx("br", {}),
                      "2021年01月05日　改訂",
                      w.jsx("br", {}),
                      "2022年04月04日　改訂",
                      w.jsx("br", {}),
                      "2022年06月06日　改訂",
                    ],
                  }),
                ],
              }),
              w.jsx("div", {
                className: "modal-footer flex justify-end items-center",
                children: w.jsx("button", {
                  type: "button",
                  className:
                    "border-button flex justify-center items-center text-ku-secondary font-semibold basis-2/5 md:basis-1/4 rounded text-center p-1 hover:bg-ku-button hover:text-white",
                  onClick: () => r(!1),
                  children: "閉じる",
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function T_() {
  var u;
  const { schools: e, selections: t } = fd(),
    n =
      t.schoolName === "Kids UP オンラインコース"
        ? "自宅からオンラインで参加"
        : t.schoolName;
  function r(c) {
    const f = c.find((d) => d.id === "2");
    return t.setsumeikaiId &&
      f != null &&
      f.setsumeikais.map((d) => d.id).includes(t.setsumeikaiId)
      ? [{ name: f.name, value: f.id }]
      : c.map((d) => ({ name: d.name, value: d.id }));
  }
  const i = r(e),
    [l, o] = k.useState(!1),
    [s, a] = k.useState(!1);
  return w.jsxs("div", {
    className: "flex flex-col items-center justify-between gap-y-5 p-3",
    children: [
      w.jsx(__, { selections: t, venue: n }),
      t.schoolId !== "2" &&
      ((u = t.setsumeikaiDate) == null ? void 0 : u.getHours()) === 16
        ? w.jsxs("div", {
            className:
              "fieldset-border w-full rounded border-ku-orange p-2 text-center font-semibold text-ku-orange md:w-4/5",
            children: [
              w.jsx("p", { children: "※事前にご確認ください！※" }),
              w.jsx("p", {
                children:
                  "平日16時台の説明会は、通常レッスン内での体験となるため、大人数に不慣れなお子様は教室に入れないケースが御座います。",
              }),
              w.jsx("p", {
                children:
                  "人見知りのお子様、特に幼児のお子様の体験は、少人数で行う「平日18時以降」及び「土曜日」の参加を強く推奨いたします。",
              }),
            ],
          })
        : null,
      w.jsxs(gS, {
        method: "post",
        className:
          "flex w-full flex-col justify-evenly gap-y-5 pt-3 text-center md:w-4/5",
        onSubmit: (c) => {
          s ? c.preventDefault() : (a(!0), o(!1));
        },
        children: [
          w.jsx("input", {
            type: "hidden",
            name: "setsumeikai_id",
            value: t.setsumeikaiId,
          }),
          w.jsx("input", { type: "hidden", name: "category", value: "R" }),
          w.jsx(Ft, {
            type: "text",
            label: "保護者のお名前",
            name: "parent_name",
            placeholder: "保護者のお名前を入力してください",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "tel",
            label: "電話番号",
            name: "phone",
            placeholder: "電話番号を入力してください(ハイフン無し)",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "email",
            label: "メール",
            name: "email",
            placeholder: "メールアドレスを入力してください",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "text",
            label: "お子様のお名前",
            name: "child_name",
            placeholder: "お子様のお名前(フルネーム)必須　　例) 鈴木 太郎",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "date",
            label: "お子様の生年月日",
            name: "child_birthday",
            placeholder: "",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "text",
            label: "保育園・幼稚園名と在園状況",
            name: "kindy",
            placeholder: "例) ○○保育園　来年4月から・卒園済",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "text",
            label: "小学校名と在学状況",
            name: "ele_school",
            placeholder: "例)  ○○小学校に来年4月から",
            required: !0,
          }),
          w.jsx(Ft, {
            type: "date",
            label: "ご希望の利用開始時期",
            name: "start_date",
            placeholder: "保護者のお名前を入力してください",
            required: !1,
          }),
          w.jsx(k_, {
            label: "通学をご検討中のスクール",
            name: "school_id",
            options: i,
            required: !0,
            selected: t.schoolName,
          }),
          w.jsx("div", { className: "hidden md:block md:basis-[45%]" }),
          w.jsx(R_, {
            label: "お申し込みのきっかけ",
            name: "referrer",
            options: [
              { name: "チラシ", value: "チラシ" },
              { name: "口コミ", value: "口コミ" },
              { name: "ホームページ", value: "ホームページ" },
              { name: "看板", value: "看板" },
              { name: "資料", value: "資料" },
              { name: "その他", value: "その他" },
            ],
          }),
          w.jsx(Ft, {
            type: "textarea",
            label: "説明会で聞きたい内容・ご要望",
            name: "requests",
            placeholder:
              "スクール、サービス、お子様について気になる点があれば記入ください。例）送迎について詳しく聞きたい２歳の弟も一緒に参加したい",
            required: !1,
          }),
          w.jsx(D_, { policyAccepted: l, setPolicyAccepted: o }),
          w.jsx("button", {
            type: "submit",
            className: `w-full rounded bg-ku-orange p-1 text-base font-semibold text-white ${
              l ? "hover:opacity-90" : "opacity-50"
            }`,
            disabled: !l,
            children: l
              ? "無料体験レッスンを申し込む"
              : "個人情報保護方針に同意の上、次へお進みください",
          }),
        ],
      }),
    ],
  });
}
function N_({ setQuery: e, query: t }) {
  function n(r) {
    r.currentTarget instanceof HTMLInputElement && e(r.currentTarget.value);
  }
  return w.jsxs("div", {
    className:
      "flex items-center gap-2 w-full rounded pl-2 text-ku-secondary bg-white border border-secondary focus-within:shadow-input-orange",
    children: [
      w.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: "w-5 h-5 opacity-50",
        children: w.jsx("path", {
          fillRule: "evenodd",
          d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
          clipRule: "evenodd",
        }),
      }),
      w.jsx("input", {
        type: "search",
        name: "schoolSearch",
        className:
          "w-full p-1 rounded border-secondary placeholder:text-ku-faded focus-visible:outline-none focus-visible:shadow-input-orange font-normal",
        id: "schoolSearch",
        placeholder: "スクール名検索、住所検索、電話番号検索、エリア検索",
        onChange: n,
        value: t,
      }),
    ],
  });
}
function M_({ school: e, setSchool: t }) {
  return e.name === "Kids UP オンラインコース"
    ? w.jsxs(ur, {
        to: `/calendar/${e.id}/undefined`,
        type: "button",
        className:
          "border-secondary flex basis-full flex-col justify-start gap-2 rounded bg-white p-2 text-start text-sm text-ku-secondary md:basis-[21vw]",
        onClick: () => t(e.name),
        children: [
          w.jsx("div", {
            className: "h-[25vh] bg-cover bg-center",
            style: { backgroundImage: `url(${e.image})` },
          }),
          w.jsxs("div", {
            className: "flex flex-col justify-between gap-1",
            children: [
              w.jsx("h5", {
                className:
                  "w-full text-center text-2xl font-bold text-ku-orange",
                children: "Kids UP オンラインコース",
              }),
              w.jsx("p", { children: "楽しみながら学べるおうちで英会話！" }),
              w.jsx("br", {}),
              w.jsx("p", { children: "KidsUPのレッスンをご家庭で！" }),
              w.jsx("br", {}),
              w.jsx("p", {
                children: "お子様の学びをサポートするコンテンツを",
              }),
              w.jsx("br", {}),
              w.jsx("p", { children: "豊富にご用意しております。" }),
            ],
          }),
        ],
      })
    : w.jsxs(ur, {
        to: `/calendar/${e.id}/undefined`,
        type: "button",
        className:
          "border-secondary flex basis-full flex-col justify-start gap-2 rounded bg-white p-2 text-start text-sm text-ku-secondary md:basis-[21vw]",
        onClick: () => t(e.name),
        children: [
          w.jsx("div", {
            className: "h-[25vh] bg-cover bg-center",
            style: { backgroundImage: `url(${e.image})` },
          }),
          w.jsxs("div", {
            className: "flex flex-col justify-between gap-1",
            children: [
              w.jsx("h5", {
                className:
                  "w-full text-center text-2xl font-bold text-ku-orange",
                children: e.name,
              }),
              w.jsx("p", { children: e.address }),
              e.busAreas.length
                ? w.jsxs("p", {
                    children: [
                      w.jsx("span", {
                        className: "font-semibold",
                        children: "送迎対象地域:",
                      }),
                      " ",
                      e.busAreas.join("、 "),
                    ],
                  })
                : null,
              e.nearbyStations.length
                ? w.jsxs("p", {
                    children: [
                      w.jsx("span", {
                        className: "font-semibold",
                        children: "最寄駅:",
                      }),
                      " ",
                      e.nearbyStations.join("、 "),
                    ],
                  })
                : null,
            ],
          }),
        ],
      });
}
const Xv = new Set(),
  qe = new WeakMap(),
  li = new WeakMap(),
  fr = new WeakMap(),
  Qu = new WeakMap(),
  I_ = new WeakMap(),
  oi = new WeakMap(),
  os = new WeakMap(),
  Ni = new WeakSet();
let On,
  hd = 0,
  pd = 0;
const $t = "__aa_tgt",
  gl = "__aa_del",
  ss = "__aa_new",
  O_ = (e) => {
    const t = F_(e);
    t && t.forEach((n) => B_(n));
  },
  P_ = (e) => {
    e.forEach((t) => {
      t.target === On && L_(), qe.has(t.target) && wr(t.target);
    });
  };
function j_(e) {
  const t = Qu.get(e);
  t == null || t.disconnect();
  let n = qe.get(e),
    r = 0;
  const i = 5;
  n || ((n = si(e)), qe.set(e, n));
  const { offsetWidth: l, offsetHeight: o } = On,
    a = [
      n.top - i,
      l - (n.left + i + n.width),
      o - (n.top + i + n.height),
      n.left - i,
    ]
      .map((c) => `${-1 * Math.floor(c)}px`)
      .join(" "),
    u = new IntersectionObserver(
      () => {
        ++r > 1 && wr(e);
      },
      { root: On, threshold: 1, rootMargin: a }
    );
  u.observe(e), Qu.set(e, u);
}
function wr(e) {
  clearTimeout(os.get(e));
  const t = Os(e),
    n = vl(t) ? 500 : t.duration;
  os.set(
    e,
    setTimeout(async () => {
      const r = fr.get(e);
      try {
        await (r == null ? void 0 : r.finished), qe.set(e, si(e)), j_(e);
      } catch {}
    }, n)
  );
}
function L_() {
  clearTimeout(os.get(On)),
    os.set(
      On,
      setTimeout(() => {
        Xv.forEach((e) => ny(e, (t) => Jv(() => wr(t))));
      }, 100)
    );
}
function z_(e) {
  setTimeout(() => {
    I_.set(
      e,
      setInterval(() => Jv(wr.bind(null, e)), 2e3)
    );
  }, Math.round(2e3 * Math.random()));
}
function Jv(e) {
  typeof requestIdleCallback == "function"
    ? requestIdleCallback(() => e())
    : requestAnimationFrame(() => e());
}
let Gu, Fr;
typeof window < "u" &&
  ((On = document.documentElement),
  (Gu = new MutationObserver(O_)),
  (Fr = new ResizeObserver(P_)),
  window.addEventListener("scroll", () => {
    (pd = window.scrollY), (hd = window.scrollX);
  }),
  Fr.observe(On));
function F_(e) {
  return e
    .reduce(
      (r, i) => [
        ...r,
        ...Array.from(i.addedNodes),
        ...Array.from(i.removedNodes),
      ],
      []
    )
    .every((r) => r.nodeName === "#comment")
    ? !1
    : e.reduce((r, i) => {
        if (r === !1) return !1;
        if (i.target instanceof Element) {
          if ((Pa(i.target), !r.has(i.target))) {
            r.add(i.target);
            for (let l = 0; l < i.target.children.length; l++) {
              const o = i.target.children.item(l);
              if (o) {
                if (gl in o) return !1;
                Pa(i.target, o), r.add(o);
              }
            }
          }
          if (i.removedNodes.length)
            for (let l = 0; l < i.removedNodes.length; l++) {
              const o = i.removedNodes[l];
              if (gl in o) return !1;
              o instanceof Element &&
                (r.add(o),
                Pa(i.target, o),
                li.set(o, [i.previousSibling, i.nextSibling]));
            }
        }
        return r;
      }, new Set());
}
function Pa(e, t) {
  !t && !($t in e)
    ? Object.defineProperty(e, $t, { value: e })
    : t && !($t in t) && Object.defineProperty(t, $t, { value: e });
}
function B_(e) {
  var t;
  const n = e.isConnected,
    r = qe.has(e);
  n && li.has(e) && li.delete(e),
    fr.has(e) && ((t = fr.get(e)) === null || t === void 0 || t.cancel()),
    ss in e ? np(e) : r && n ? H_(e) : r && !n ? W_(e) : np(e);
}
function Rt(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function U_(e) {
  let t = e.parentElement;
  for (; t; ) {
    if (t.scrollLeft || t.scrollTop) return { x: t.scrollLeft, y: t.scrollTop };
    t = t.parentElement;
  }
  return { x: 0, y: 0 };
}
function si(e) {
  const t = e.getBoundingClientRect(),
    { x: n, y: r } = U_(e);
  return { top: t.top + r, left: t.left + n, width: t.width, height: t.height };
}
function ey(e, t, n) {
  let r = t.width,
    i = t.height,
    l = n.width,
    o = n.height;
  const s = getComputedStyle(e);
  if (s.getPropertyValue("box-sizing") === "content-box") {
    const u =
        Rt(s.paddingTop) +
        Rt(s.paddingBottom) +
        Rt(s.borderTopWidth) +
        Rt(s.borderBottomWidth),
      c =
        Rt(s.paddingLeft) +
        Rt(s.paddingRight) +
        Rt(s.borderRightWidth) +
        Rt(s.borderLeftWidth);
    (r -= c), (l -= c), (i -= u), (o -= u);
  }
  return [r, l, i, o].map(Math.round);
}
function Os(e) {
  return $t in e && oi.has(e[$t])
    ? oi.get(e[$t])
    : { duration: 250, easing: "ease-in-out" };
}
function ty(e) {
  if ($t in e) return e[$t];
}
function md(e) {
  const t = ty(e);
  return t ? Ni.has(t) : !1;
}
function ny(e, ...t) {
  t.forEach((n) => n(e, oi.has(e)));
  for (let n = 0; n < e.children.length; n++) {
    const r = e.children.item(n);
    r && t.forEach((i) => i(r, oi.has(r)));
  }
}
function gd(e) {
  return Array.isArray(e) ? e : [e];
}
function vl(e) {
  return typeof e == "function";
}
function H_(e) {
  const t = qe.get(e),
    n = si(e);
  if (!md(e)) return qe.set(e, n);
  let r;
  if (!t) return;
  const i = Os(e);
  if (typeof i != "function") {
    const l = t.left - n.left,
      o = t.top - n.top,
      [s, a, u, c] = ey(e, t, n),
      f = { transform: `translate(${l}px, ${o}px)` },
      d = { transform: "translate(0, 0)" };
    s !== a && ((f.width = `${s}px`), (d.width = `${a}px`)),
      u !== c && ((f.height = `${u}px`), (d.height = `${c}px`)),
      (r = e.animate([f, d], { duration: i.duration, easing: i.easing }));
  } else {
    const [l] = gd(i(e, "remain", t, n));
    (r = new Animation(l)), r.play();
  }
  fr.set(e, r), qe.set(e, n), r.addEventListener("finish", wr.bind(null, e));
}
function np(e) {
  ss in e && delete e[ss];
  const t = si(e);
  qe.set(e, t);
  const n = Os(e);
  if (!md(e)) return;
  let r;
  if (typeof n != "function")
    r = e.animate(
      [
        { transform: "scale(.98)", opacity: 0 },
        { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
        { transform: "scale(1)", opacity: 1 },
      ],
      { duration: n.duration * 1.5, easing: "ease-in" }
    );
  else {
    const [i] = gd(n(e, "add", t));
    (r = new Animation(i)), r.play();
  }
  fr.set(e, r), r.addEventListener("finish", wr.bind(null, e));
}
function rp(e, t) {
  var n;
  e.remove(),
    qe.delete(e),
    li.delete(e),
    fr.delete(e),
    (n = Qu.get(e)) === null || n === void 0 || n.disconnect(),
    setTimeout(() => {
      if (
        (gl in e && delete e[gl],
        Object.defineProperty(e, ss, { value: !0, configurable: !0 }),
        t && e instanceof HTMLElement)
      )
        for (const r in t) e.style[r] = "";
    }, 0);
}
function W_(e) {
  var t;
  if (!li.has(e) || !qe.has(e)) return;
  const [n, r] = li.get(e);
  Object.defineProperty(e, gl, { value: !0, configurable: !0 });
  const i = window.scrollX,
    l = window.scrollY;
  if (
    (r && r.parentNode && r.parentNode instanceof Element
      ? r.parentNode.insertBefore(e, r)
      : n && n.parentNode
      ? n.parentNode.appendChild(e)
      : (t = ty(e)) === null || t === void 0 || t.appendChild(e),
    !md(e))
  )
    return rp(e);
  const [o, s, a, u] = $_(e),
    c = Os(e),
    f = qe.get(e);
  (i !== hd || l !== pd) && V_(e, i, l, c);
  let d,
    h = {
      position: "absolute",
      top: `${o}px`,
      left: `${s}px`,
      width: `${a}px`,
      height: `${u}px`,
      margin: "0",
      pointerEvents: "none",
      transformOrigin: "center",
      zIndex: "100",
    };
  if (!vl(c))
    Object.assign(e.style, h),
      (d = e.animate(
        [
          { transform: "scale(1)", opacity: 1 },
          { transform: "scale(.98)", opacity: 0 },
        ],
        { duration: c.duration, easing: "ease-out" }
      ));
  else {
    const [v, y] = gd(c(e, "remove", f));
    (y == null ? void 0 : y.styleReset) !== !1 &&
      ((h = (y == null ? void 0 : y.styleReset) || h),
      Object.assign(e.style, h)),
      (d = new Animation(v)),
      d.play();
  }
  fr.set(e, d), d.addEventListener("finish", rp.bind(null, e, h));
}
function V_(e, t, n, r) {
  const i = hd - t,
    l = pd - n,
    o = document.documentElement.style.scrollBehavior;
  if (
    (getComputedStyle(On).scrollBehavior === "smooth" &&
      (document.documentElement.style.scrollBehavior = "auto"),
    window.scrollTo(window.scrollX + i, window.scrollY + l),
    !e.parentElement)
  )
    return;
  const a = e.parentElement;
  let u = a.clientHeight,
    c = a.clientWidth;
  const f = performance.now();
  function d() {
    requestAnimationFrame(() => {
      if (!vl(r)) {
        const h = u - a.clientHeight,
          v = c - a.clientWidth;
        f + r.duration > performance.now()
          ? (window.scrollTo({
              left: window.scrollX - v,
              top: window.scrollY - h,
            }),
            (u = a.clientHeight),
            (c = a.clientWidth),
            d())
          : (document.documentElement.style.scrollBehavior = o);
      }
    });
  }
  d();
}
function $_(e) {
  const t = qe.get(e),
    [n, , r] = ey(e, t, si(e));
  let i = e.parentElement;
  for (
    ;
    i &&
    (getComputedStyle(i).position === "static" || i instanceof HTMLBodyElement);

  )
    i = i.parentElement;
  i || (i = document.body);
  const l = getComputedStyle(i),
    o = qe.get(i) || si(i),
    s = Math.round(t.top - o.top) - Rt(l.borderTopWidth),
    a = Math.round(t.left - o.left) - Rt(l.borderLeftWidth);
  return [s, a, n, r];
}
function Q_(e, t = {}) {
  return (
    Gu &&
      Fr &&
      ((window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        !vl(t) &&
        !t.disrespectUserMotionPreference) ||
        (Ni.add(e),
        getComputedStyle(e).position === "static" &&
          Object.assign(e.style, { position: "relative" }),
        ny(e, wr, z_, (i) => (Fr == null ? void 0 : Fr.observe(i))),
        vl(t)
          ? oi.set(e, t)
          : oi.set(e, { duration: 250, easing: "ease-in-out", ...t }),
        Gu.observe(e, { childList: !0 }),
        Xv.add(e))),
    Object.freeze({
      parent: e,
      enable: () => {
        Ni.add(e);
      },
      disable: () => {
        Ni.delete(e);
      },
      isEnabled: () => Ni.has(e),
    })
  );
}
function G_(e) {
  const [t, n] = k.useState(),
    r = k.useCallback(
      (l) => {
        l instanceof HTMLElement ? n(Q_(l, e)) : n(void 0);
      },
      [e]
    ),
    i = k.useCallback(
      (l) => {
        t && (l ? t.enable() : t.disable());
      },
      [t]
    );
  return [r, i];
}
function Y_({ prefectures: e, prefectureFilter: t, setPrefectureFitler: n }) {
  if (e.size === 0) return null;
  e.delete(""), e.delete("online");
  const r = "border-button rounded-xl p-2 text-center font-bold text-ku-button",
    i = "border-ku-orange bg-ku-orange text-white";
  return w.jsxs("nav", {
    className: "flex flex-wrap items-center justify-center gap-3",
    children: [
      w.jsx(
        "button",
        {
          type: "button",
          className: `${r} ${t === "" ? i : ""}`,
          onClick: () => n(""),
          children: "ALL",
        },
        "all"
      ),
      [...e].map((l) =>
        w.jsx(
          "button",
          {
            type: "button",
            className: `${r} ${l === t ? i : ""}`,
            onClick: () => n(l),
            children: l,
          },
          l
        )
      ),
    ],
  });
}
function q_() {
  const { schools: e, setSelections: t } = fd(),
    [n, r] = k.useState(""),
    [i] = G_(),
    l = new Set(e.map((u) => u.prefecture)),
    [o, s] = k.useState(""),
    a = e.filter(
      (u) =>
        (o === "" || u.prefecture === o) &&
        (u.name.toUpperCase().includes(n.toUpperCase()) ||
          u.address.includes(n) ||
          u.phone.includes(n) ||
          u.busAreas.some((c) => c.includes(n)) ||
          u.nearbyStations.some((c) => c.includes(n)) ||
          u.hiragana.some((c) => c.includes(n)) ||
          u.nearbySchools.some((c) => c.includes(n)))
    );
  return w.jsxs("main", {
    className: "flex flex-wrap justify-evenly gap-2 px-3 md:px-2",
    children: [
      w.jsx(N_, { setQuery: r, query: n }),
      w.jsx(Y_, {
        prefectures: l,
        prefectureFilter: o,
        setPrefectureFitler: s,
      }),
      w.jsx("div", {
        className:
          "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5",
        ref: i,
        children: a
          .sort(
            (u, c) => Number.parseInt(u.position) - Number.parseInt(c.position)
          )
          .map((u) => {
            if (u)
              return w.jsx(
                M_,
                {
                  school: u,
                  setSchool: () =>
                    t({
                      setsumeikaiDate: void 0,
                      setsumeikaiId: void 0,
                      schoolName: u.name,
                      schoolId: u.id,
                    }),
                },
                u.id
              );
          }),
      }),
    ],
  });
}
async function Z_() {
  const e = await fetch("https://kids-up.app/setsu_schools.json").then(
    (n) => n,
    (n) => console.log(n)
  );
  return e
    ? (await e.json()).map((n) => ({ ...n, name: `Kids UP ${n.name}` }))
    : [];
}
async function K_(e, t) {
  const n = await t.formData(),
    r = Object.fromEntries(n),
    i = new Headers({ "Content-Type": "application/json" }),
    l = await fetch("https://kids-up.app/create_inquiry.json", {
      method: "POST",
      headers: i,
      body: JSON.stringify({ inquiry: r }),
    });
  return l.status !== 200 ? console.log(l) : fE("https://kids-up.jp/complete/");
}
function X_() {
  return cS([
    {
      path: "/",
      element: w.jsx(PS, {}),
      errorElement: w.jsx(jS, {}),
      loader: Z_,
      children: [
        { path: "*", element: w.jsx(Xf, { to: "/school_list" }) },
        { index: !0, element: w.jsx(Xf, { to: "/school_list" }) },
        { path: "/school_list", element: w.jsx(q_, {}) },
        { path: "/calendar/:schoolId/:setsumeikaiId", element: w.jsx(A_, {}) },
        {
          path: "/form/:schoolId/:setsumeikaiId",
          element: w.jsx(T_, {}),
          action: ({ params: e, request: t }) => K_(e, t),
        },
      ],
    },
  ]);
}
const J_ = X_();
ja.createRoot(document.getElementById("root")).render(
  w.jsx(Qi.StrictMode, { children: w.jsx(YE, { router: J_ }) })
);
