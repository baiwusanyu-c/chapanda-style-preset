var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { codeToHtml } from "https://esm.sh/shiki@1.0.0";
var require_index = __commonJS({
  "index.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e2 = m2[i];
        if (typeof e2 !== "string" && !Array.isArray(e2)) {
          for (const k2 in e2) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d2 = Object.getOwnPropertyDescriptor(e2, k2);
              if (d2) {
                Object.defineProperty(n2, k2, d2.get ? d2 : {
                  enumerable: true,
                  get: () => e2[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node2 of mutation.addedNodes) {
            if (node2.tagName === "LINK" && node2.rel === "modulepreload")
              processPreload(node2);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity) fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
        else fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
    function A$1(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z$1 && a[z$1] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function(a, b2) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b2, "setState");
    };
    E$1.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D$1;
      this.updater = e2 || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b2, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (1 === g2) c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
      return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
    }
    function N$1(a, b2) {
      return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$2;
    }
    function escape(a) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b2[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b2) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
    }
    function R$1(a, b2, e2, d2, c2) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2) a = null;
      var h2 = false;
      if (null === a) h2 = true;
      else switch (k2) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l$2:
            case n$2:
              h2 = true;
          }
      }
      if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
        return a2;
      })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I$1(a)) for (var g2 = 0; g2 < a.length; g2++) {
        k2 = a[g2];
        var f2 = d2 + Q$1(k2, g2);
        h2 += R$1(k2, b2, e2, f2, c2);
      }
      else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
      else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S$1(a, b2, e2) {
      if (null == a) return a;
      var d2 = [], c2 = 0;
      R$1(a, d2, "", "", function(a2) {
        return b2.call(e2, a2, c2++);
      });
      return d2;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b2 = a._result;
        b2 = b2();
        b2.then(function(b3) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
        }, function(b3) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
        });
        -1 === a._status && (a._status = 0, a._result = b2);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    function X$1() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
      S$1(a, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a) {
      var b2 = 0;
      S$1(a, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a) {
      return S$1(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$3;
    react_production_min.Profiler = r;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$2;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.act = X$1;
    react_production_min.cloneElement = function(a, b2, e2) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
      if (null != b2) {
        void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
        void 0 !== b2.key && (c2 = "" + b2.key);
        if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
        for (f2 in b2) J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2) d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l$2, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    react_production_min.createContext = function(a) {
      a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t$1, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function(a) {
      var b2 = M$1.bind(null, a);
      b2.type = a;
      return b2;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a) {
      return { $$typeof: v$2, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function(a, b2) {
      return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
    };
    react_production_min.startTransition = function(a) {
      var b2 = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b2;
      }
    };
    react_production_min.unstable_act = X$1;
    react_production_min.useCallback = function(a, b2) {
      return U$1.current.useCallback(a, b2);
    };
    react_production_min.useContext = function(a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function(a, b2) {
      return U$1.current.useEffect(a, b2);
    };
    react_production_min.useId = function() {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function(a, b2, e2) {
      return U$1.current.useImperativeHandle(a, b2, e2);
    };
    react_production_min.useInsertionEffect = function(a, b2) {
      return U$1.current.useInsertionEffect(a, b2);
    };
    react_production_min.useLayoutEffect = function(a, b2) {
      return U$1.current.useLayoutEffect(a, b2);
    };
    react_production_min.useMemo = function(a, b2) {
      return U$1.current.useMemo(a, b2);
    };
    react_production_min.useReducer = function(a, b2, e2) {
      return U$1.current.useReducer(a, b2, e2);
    };
    react_production_min.useRef = function(a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function(a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function(a, b2, e2) {
      return U$1.current.useSyncExternalStore(a, b2, e2);
    };
    react_production_min.useTransition = function() {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const React$1 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: React
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
    function q$1(c2, a, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a.key && (e2 = "" + a.key);
      void 0 !== a.ref && (h2 = a.ref);
      for (b2 in a) m$2.call(a, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a[b2]);
      if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
      return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
    }
    reactJsxRuntime_production_min.Fragment = l$1;
    reactJsxRuntime_production_min.jsx = q$1;
    reactJsxRuntime_production_min.jsxs = q$1;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a, b2) {
        var c2 = a.length;
        a.push(b2);
        a: for (; 0 < c2; ) {
          var d2 = c2 - 1 >>> 1, e2 = a[d2];
          if (0 < g2(e2, b2)) a[d2] = b2, a[c2] = e2, c2 = d2;
          else break a;
        }
      }
      function h2(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b2 = a[0], c2 = a.pop();
        if (c2 !== b2) {
          a[0] = c2;
          a: for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
            var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
            if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
            else if (n2 < e2 && 0 > g2(x2, c2)) a[d2] = x2, a[n2] = c2, d2 = n2;
            else break a;
          }
        }
        return b2;
      }
      function g2(a, b2) {
        var c2 = a.sortIndex - b2.sortIndex;
        return 0 !== c2 ? c2 : a.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b2 = h2(t2); null !== b2; ) {
          if (null === b2.callback) k2(t2);
          else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
          else break;
          b2 = h2(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
        else {
          var b2 = h2(t2);
          null !== b2 && K2(H2, b2.startTime - a);
        }
      }
      function J2(a, b2) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b2);
          for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b2);
              b2 = exports2.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
              G2(b2);
            } else k2(r2);
            v2 = h2(r2);
          }
          if (null !== v2) var w2 = true;
          else {
            var m2 = h2(t2);
            null !== m2 && K2(H2, m2.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b2 = true;
          try {
            b2 = O2(true, a);
          } finally {
            b2 ? S2() : (N2 = false, O2 = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function() {
        F2(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else S2 = function() {
        D2(R2, 0);
      };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b2) {
        L2 = D2(function() {
          a(exports2.unstable_now());
        }, b2);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h2(r2);
      };
      exports2.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c2 = y2;
        y2 = b2;
        try {
          return a();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a, b2) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c2 = y2;
        y2 = a;
        try {
          return b2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_scheduleCallback = function(a, b2, c2) {
        var d2 = exports2.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a) {
        var b2 = y2;
        return function() {
          var c2 = y2;
          y2 = b2;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p$1(a) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b2) {
      ha(a, b2);
      ha(a + "Capture", b2);
    }
    function ha(a, b2) {
      ea[a] = b2;
      for (a = 0; a < b2.length; a++) da.add(b2[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b2, c2, d2) {
      if (null !== c2 && 0 === c2.type) return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2) return false;
          if (null !== c2) return !c2.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b2, c2, d2) {
      if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
      if (d2) return false;
      if (null !== c2) switch (c2.type) {
        case 3:
          return !b2;
        case 4:
          return false === b2;
        case 5:
          return isNaN(b2);
        case 6:
          return isNaN(b2) || 1 > b2;
      }
      return false;
    }
    function v$1(a, b2, c2, d2, e2, f2, g2) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a;
      this.type = b2;
      this.sanitizeURL = f2;
      this.removeEmptyString = g2;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v$1(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b2 = a[0];
      z[b2] = new v$1(b2, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v$1(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v$1(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v$1(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v$1(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b2 = a.replace(
        ra,
        sa
      );
      z[b2] = new v$1(b2, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b2 = a.replace(ra, sa);
      z[b2] = new v$1(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b2, c2, d2) {
      var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
      if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c2) {
        var b2 = c2.stack.trim().match(/\n( *(at )?)/);
        La = b2 && b2[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b2) {
      if (!a || Na) return "";
      Na = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b2) if (b2 = function() {
          throw Error();
        }, Object.defineProperty(b2.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b2, []);
          } catch (l2) {
            var d2 = l2;
          }
          Reflect.construct(a, [], b2);
        } else {
          try {
            b2.call();
          } catch (l2) {
            d2 = l2;
          }
          a.call(b2.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
            if (1 !== g2 || 1 !== h2) {
              do
                if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                  var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g2 && 0 <= h2);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c2;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b2 = a.render;
          a = a.displayName;
          a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
        case Ha:
          b2 = a._payload;
          a = a._init;
          try {
            return Qa(a(b2));
          } catch (c2) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b2 = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b2.displayName || "Context") + ".Consumer";
        case 10:
          return (b2._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b2;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b2);
        case 8:
          return b2 === za ? "StrictMode" : "Mode";
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
          if ("function" === typeof b2) return b2.displayName || b2.name || null;
          if ("string" === typeof b2) return b2;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b2 = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
    }
    function Ua(a) {
      var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
      if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
        var e2 = c2.get, f2 = c2.set;
        Object.defineProperty(a, b2, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a2) {
          d2 = "" + a2;
          f2.call(this, a2);
        } });
        Object.defineProperty(a, b2, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a2) {
          d2 = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b2];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b2 = a._valueTracker;
      if (!b2) return true;
      var c2 = b2.getValue();
      var d2 = "";
      a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d2;
      return a !== c2 ? (b2.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b2) {
        return a.body;
      }
    }
    function Ya(a, b2) {
      var c2 = b2.checked;
      return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
    }
    function Za(a, b2) {
      var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
      c2 = Sa(null != b2.value ? b2.value : c2);
      a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
    }
    function ab(a, b2) {
      b2 = b2.checked;
      null != b2 && ta(a, "checked", b2, false);
    }
    function bb(a, b2) {
      ab(a, b2);
      var c2 = Sa(b2.value), d2 = b2.type;
      if (null != c2) if ("number" === d2) {
        if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
      } else a.value !== "" + c2 && (a.value = "" + c2);
      else if ("submit" === d2 || "reset" === d2) {
        a.removeAttribute("value");
        return;
      }
      b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
      null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
    }
    function db(a, b2, c2) {
      if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
        var d2 = b2.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
        b2 = "" + a._wrapperState.initialValue;
        c2 || b2 === a.value || (a.value = b2);
        a.defaultValue = b2;
      }
      c2 = a.name;
      "" !== c2 && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c2 && (a.name = c2);
    }
    function cb(a, b2, c2) {
      if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
    }
    var eb = Array.isArray;
    function fb(a, b2, c2, d2) {
      a = a.options;
      if (b2) {
        b2 = {};
        for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a.length; c2++) e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b2 = null;
        for (e2 = 0; e2 < a.length; e2++) {
          if (a[e2].value === c2) {
            a[e2].selected = true;
            d2 && (a[e2].defaultSelected = true);
            return;
          }
          null !== b2 || a[e2].disabled || (b2 = a[e2]);
        }
        null !== b2 && (b2.selected = true);
      }
    }
    function gb(a, b2) {
      if (null != b2.dangerouslySetInnerHTML) throw Error(p$1(91));
      return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b2) {
      var c2 = b2.value;
      if (null == c2) {
        c2 = b2.children;
        b2 = b2.defaultValue;
        if (null != c2) {
          if (null != b2) throw Error(p$1(92));
          if (eb(c2)) {
            if (1 < c2.length) throw Error(p$1(93));
            c2 = c2[0];
          }
          b2 = c2;
        }
        null == b2 && (b2 = "");
        c2 = b2;
      }
      a._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a, b2) {
      var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
      null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
      null != d2 && (a.defaultValue = "" + d2);
    }
    function jb(a) {
      var b2 = a.textContent;
      b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b2) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b2, c2, d2, e2);
        });
      } : a;
    }(function(a, b2) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
        for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b2.firstChild; ) a.appendChild(b2.firstChild);
      }
    });
    function ob(a, b2) {
      if (b2) {
        var c2 = a.firstChild;
        if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
          c2.nodeValue = b2;
          return;
        }
      }
      a.textContent = b2;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b2) {
        b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b2] = pb[a];
      });
    });
    function rb(a, b2, c2) {
      return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
    }
    function sb(a, b2) {
      a = a.style;
      for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
        var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
        "float" === c2 && (c2 = "cssFloat");
        d2 ? a.setProperty(c2, e2) : a[c2] = e2;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b2) {
      if (b2) {
        if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
        if (null != b2.dangerouslySetInnerHTML) {
          if (null != b2.children) throw Error(p$1(60));
          if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$1(61));
        }
        if (null != b2.style && "object" !== typeof b2.style) throw Error(p$1(62));
      }
    }
    function vb(a, b2) {
      if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p$1(280));
        var b2 = a.stateNode;
        b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b2 = Ab;
        Ab = zb = null;
        Bb(a);
        if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
      }
    }
    function Gb(a, b2) {
      return a(b2);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b2, c2) {
      if (Ib) return a(b2, c2);
      Ib = true;
      try {
        return Gb(a, b2, c2);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b2) {
      var c2 = a.stateNode;
      if (null === c2) return null;
      var d2 = Db(c2);
      if (null === d2) return null;
      c2 = d2[b2];
      a: switch (b2) {
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
          (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d2;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c2 && "function" !== typeof c2) throw Error(p$1(231, b2, typeof c2));
      return c2;
    }
    var Lb = false;
    if (ia) try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b2.apply(c2, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p$1(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b2 = a, c2 = a;
      if (a.alternate) for (; b2.return; ) b2 = b2.return;
      else {
        a = b2;
        do
          b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
        while (a);
      }
      return 3 === b2.tag ? c2 : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b2 = a.memoizedState;
        null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
        if (null !== b2) return b2.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p$1(188));
    }
    function Yb(a) {
      var b2 = a.alternate;
      if (!b2) {
        b2 = Vb(a);
        if (null === b2) throw Error(p$1(188));
        return b2 !== a ? null : a;
      }
      for (var c2 = a, d2 = b2; ; ) {
        var e2 = c2.return;
        if (null === e2) break;
        var f2 = e2.alternate;
        if (null === f2) {
          d2 = e2.return;
          if (null !== d2) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f2.child) {
          for (f2 = e2.child; f2; ) {
            if (f2 === c2) return Xb(e2), a;
            if (f2 === d2) return Xb(e2), b2;
            f2 = f2.sibling;
          }
          throw Error(p$1(188));
        }
        if (c2.return !== d2.return) c2 = e2, d2 = f2;
        else {
          for (var g2 = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = e2;
              d2 = f2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e2;
              c2 = f2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f2.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = f2;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f2;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2) throw Error(p$1(189));
          }
        }
        if (c2.alternate !== d2) throw Error(p$1(190));
      }
      if (3 !== c2.tag) throw Error(p$1(188));
      return c2.stateNode.current === c2 ? a : b2;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b2 = $b(a);
        if (null !== b2) return b2;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b2) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
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
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b2) {
      var c2 = a.pendingLanes;
      if (0 === c2) return 0;
      var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
      if (0 !== g2) {
        var h2 = g2 & ~e2;
        0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
      } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
      if (0 === d2) return 0;
      if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
      0 !== (d2 & 4) && (d2 |= c2 & 16);
      b2 = a.entangledLanes;
      if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
      return d2;
    }
    function vc(a, b2) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b2 + 250;
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
          return b2 + 5e3;
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
    function wc(a, b2) {
      for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
        var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
        if (-1 === k2) {
          if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
        } else k2 <= b2 && (a.expiredLanes |= h2);
        f2 &= ~h2;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
      return b2;
    }
    function Ac(a, b2, c2) {
      a.pendingLanes |= b2;
      536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b2 = 31 - oc(b2);
      a[b2] = c2;
    }
    function Bc(a, b2) {
      var c2 = a.pendingLanes & ~b2;
      a.pendingLanes = b2;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b2;
      a.mutableReadLanes &= b2;
      a.entangledLanes &= b2;
      b2 = a.entanglements;
      var d2 = a.eventTimes;
      for (a = a.expirationTimes; 0 < c2; ) {
        var e2 = 31 - oc(c2), f2 = 1 << e2;
        b2[e2] = 0;
        d2[e2] = -1;
        a[e2] = -1;
        c2 &= ~f2;
      }
    }
    function Cc(a, b2) {
      var c2 = a.entangledLanes |= b2;
      for (a = a.entanglements; c2; ) {
        var d2 = 31 - oc(c2), e2 = 1 << d2;
        e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
        c2 &= ~e2;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b2) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b2.pointerId);
      }
    }
    function Tc(a, b2, c2, d2, e2, f2) {
      if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
      a.eventSystemFlags |= d2;
      b2 = a.targetContainers;
      null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
      return a;
    }
    function Uc(a, b2, c2, d2, e2) {
      switch (b2) {
        case "focusin":
          return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
        case "pointerover":
          var f2 = e2.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
      }
      return false;
    }
    function Vc(a) {
      var b2 = Wc(a.target);
      if (null !== b2) {
        var c2 = Vb(b2);
        if (null !== c2) {
          if (b2 = c2.tag, 13 === b2) {
            if (b2 = Wb(c2), null !== b2) {
              a.blockedOn = b2;
              Ic(a.priority, function() {
                Gc(c2);
              });
              return;
            }
          } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b2 = a.targetContainers; 0 < b2.length; ) {
        var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
        if (null === c2) {
          c2 = a.nativeEvent;
          var d2 = new c2.constructor(c2.type, c2);
          wb = d2;
          c2.target.dispatchEvent(d2);
          wb = null;
        } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
        b2.shift();
      }
      return true;
    }
    function Zc(a, b2, c2) {
      Xc(a) && c2.delete(b2);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b2) {
      a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b2(b3) {
        return ad(b3, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c2 = 1; c2 < Kc.length; c2++) {
          var d2 = Kc[c2];
          d2.blockedOn === a && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b2);
      Pc.forEach(b2);
      for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function gd(a, b2, c2, d2) {
      var e2 = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b2, c2, d2);
      } finally {
        C = e2, cd.transition = f2;
      }
    }
    function fd(a, b2, c2, d2) {
      if (dd) {
        var e2 = Yc(a, b2, c2, d2);
        if (null === e2) hd(a, b2, d2, id, c2), Sc(a, d2);
        else if (Uc(e2, a, b2, c2, d2)) d2.stopPropagation();
        else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e2; ) {
            var f2 = Cb(e2);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b2, c2, d2);
            null === f2 && hd(a, b2, d2, id, c2);
            if (f2 === e2) break;
            e2 = f2;
          }
          null !== e2 && d2.stopPropagation();
        } else hd(a, b2, d2, null, c2);
      }
    }
    var id = null;
    function Yc(a, b2, c2, d2) {
      id = null;
      a = xb(d2);
      a = Wc(a);
      if (null !== a) if (b2 = Vb(a), null === b2) a = null;
      else if (c2 = b2.tag, 13 === c2) {
        a = Wb(b2);
        if (null !== a) return a;
        a = null;
      } else if (3 === c2) {
        if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
        a = null;
      } else b2 !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
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
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md) return md;
      var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
      for (a = 0; a < c2 && b2[a] === e2[a]; a++) ;
      var g2 = c2 - a;
      for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
      return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a) {
      var b2 = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b2(b3, d2, e2, f2, g2) {
        this._reactName = b3;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f2;
        this.target = g2;
        this.currentTarget = null;
        for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b2;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
      MozPrintableKey: "Unidentified"
    }, Nd = {
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
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b2 = this.nativeEvent;
      return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b2 = Md[a.key] || a.key;
        if ("Unidentified" !== b2) return b2;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b2) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b2.keyCode);
        case "keydown":
          return 229 !== b2.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b2) {
      switch (a) {
        case "compositionend":
          return he(b2);
        case "keypress":
          if (32 !== b2.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b2.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b2) {
      if (ie) return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
            if (b2.char && 1 < b2.char.length) return b2.char;
            if (b2.which) return String.fromCharCode(b2.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b2.locale ? null : b2.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
    }
    function ne(a, b2, c2, d2) {
      Eb(d2);
      b2 = oe(b2, "onChange");
      0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
    }
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b2 = ue(a);
      if (Wa(b2)) return a;
    }
    function ve(a, b2) {
      if ("change" === a) return b2;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b2 = [];
        ne(b2, qe, a, xb(a));
        Jb(re, b2);
      }
    }
    function Ce(a, b2, c2) {
      "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b2) {
      if ("click" === a) return te(b2);
    }
    function Fe(a, b2) {
      if ("input" === a || "change" === a) return te(b2);
    }
    function Ge(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b2) {
      if (He(a, b2)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
      var c2 = Object.keys(a), d2 = Object.keys(b2);
      if (c2.length !== d2.length) return false;
      for (d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        if (!ja.call(b2, e2) || !He(a[e2], b2[e2])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b2) {
      var c2 = Je(a);
      a = 0;
      for (var d2; c2; ) {
        if (3 === c2.nodeType) {
          d2 = a + c2.textContent.length;
          if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
          a = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Je(c2);
      }
    }
    function Le(a, b2) {
      return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
        try {
          var c2 = "string" === typeof b2.contentWindow.location.href;
        } catch (d2) {
          c2 = false;
        }
        if (c2) a = b2.contentWindow;
        else break;
        b2 = Xa(a.document);
      }
      return b2;
    }
    function Ne(a) {
      var b2 = a && a.nodeName && a.nodeName.toLowerCase();
      return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
      if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
        if (null !== d2 && Ne(c2)) {
          if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
          else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
            d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
            !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
            e2 = Ke(c2, f2);
            var g2 = Ke(
              c2,
              d2
            );
            e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
          }
        }
        b2 = [];
        for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c2.focus && c2.focus();
        for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b2, c2) {
      var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
      Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
    }
    function Ve(a, b2) {
      var c2 = {};
      c2[a.toLowerCase()] = b2.toLowerCase();
      c2["Webkit" + a] = "webkit" + b2;
      c2["Moz" + a] = "moz" + b2;
      return c2;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b2 = We[a], c2;
      for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a] = b2[c2];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b2) {
      df.set(a, b2);
      fa(b2, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b2, c2) {
      var d2 = a.type || "unknown-event";
      a.currentTarget = c2;
      Ub(d2, b2, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b2) {
      b2 = 0 !== (b2 & 4);
      for (var c2 = 0; c2 < a.length; c2++) {
        var d2 = a[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f2 = void 0;
          if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
            var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped()) break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
          else for (g2 = 0; g2 < d2.length; g2++) {
            h2 = d2[g2];
            k2 = h2.instance;
            l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e2.isPropagationStopped()) break a;
            nf(e2, h2, l2);
            f2 = k2;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b2) {
      var c2 = b2[of];
      void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
      var d2 = a + "__bubble";
      c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
    }
    function qf(a, b2, c2) {
      var d2 = 0;
      b2 && (d2 |= 4);
      pf(c2, a, d2, b2);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b3) {
          "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
        });
        var b2 = 9 === a.nodeType ? a : a.ownerDocument;
        null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
      }
    }
    function pf(a, b2, c2, d2) {
      switch (jd(b2)) {
        case 1:
          var e2 = ed;
          break;
        case 4:
          e2 = gd;
          break;
        default:
          e2 = fd;
      }
      c2 = e2.bind(null, b2, c2, a);
      e2 = void 0;
      !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
      d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
    }
    function hd(a, b2, c2, d2, e2) {
      var f2 = d2;
      if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
        if (null === d2) return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
          if (4 === g2) for (g2 = d2.return; null !== g2; ) {
            var k2 = g2.tag;
            if (3 === k2 || 4 === k2) {
              if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
            }
            g2 = g2.return;
          }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2) return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
      Jb(function() {
        var d3 = f2, e3 = xb(c2), g3 = [];
        a: {
          var h3 = df.get(a);
          if (void 0 !== h3) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c2)) break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c2.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
            t2 = [];
            for (var w2 = d3, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2) break;
              w2 = w2.return;
            }
            0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
          }
        }
        if (0 === (b2 & 7)) {
          a: {
            h3 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
              } else k3 = null, n2 = d3;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h3 : ue(k3);
                u2 = null == n2 ? h3 : ue(n2);
                h3 = new t2(F2, w2 + "leave", k3, c2, e3);
                h3.target = J2;
                h3.relatedTarget = u2;
                F2 = null;
                Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2) b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2)) w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2)) u2++;
                  for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
                else t2 = null;
                null !== k3 && wf(g3, h3, k3, t2, false);
                null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve;
            else if (me(h3)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
            if (na && (na = na(a, d3))) {
              ne(g3, na, c2, e3);
              break a;
            }
            xa && xa(a, h3, d3);
            "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue(d3) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d3, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g3, c2, e3);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g3, c2, e3);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c2) : ke(a, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
        }
        se(g3, b2);
      });
    }
    function tf(a, b2, c2) {
      return { instance: a, listener: b2, currentTarget: c2 };
    }
    function oe(a, b2) {
      for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
        var e2 = a, f2 = e2.stateNode;
        5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
        a = a.return;
      }
      return d2;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b2, c2, d2, e2) {
      for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (null !== k2 && k2 === d2) break;
        5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
        c2 = c2.return;
      }
      0 !== g2.length && a.push({ event: b2, listeners: g2 });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b2, c2) {
      b2 = zf(b2);
      if (zf(a) !== b2 && c2) throw Error(p$1(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b2) {
      return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b2) {
      var c2 = b2, d2 = 0;
      do {
        var e2 = c2.nextSibling;
        a.removeChild(c2);
        if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
          if (0 === d2) {
            a.removeChild(e2);
            bd(b2);
            return;
          }
          d2--;
        } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
        c2 = e2;
      } while (c2);
      bd(b2);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b2 = a.nodeType;
        if (1 === b2 || 3 === b2) break;
        if (8 === b2) {
          b2 = a.data;
          if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
          if ("/$" === b2) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("$" === c2 || "$!" === c2 || "$?" === c2) {
            if (0 === b2) return a;
            b2--;
          } else "/$" === c2 && b2++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b2 = a[Of];
      if (b2) return b2;
      for (var c2 = a.parentNode; c2; ) {
        if (b2 = c2[uf] || c2[Of]) {
          c2 = b2.alternate;
          if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
            if (c2 = a[Of]) return c2;
            a = Mf(a);
          }
          return b2;
        }
        a = c2;
        c2 = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p$1(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b2) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b2;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b2) {
      var c2 = a.type.contextTypes;
      if (!c2) return Vf;
      var d2 = a.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f2;
      for (f2 in c2) e2[f2] = b2[f2];
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b2, c2) {
      if (H.current !== Vf) throw Error(p$1(168));
      G(H, b2);
      G(Wf, c2);
    }
    function bg(a, b2, c2) {
      var d2 = a.stateNode;
      b2 = b2.childContextTypes;
      if ("function" !== typeof d2.getChildContext) return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2) if (!(e2 in b2)) throw Error(p$1(108, Ra(a) || "Unknown", e2));
      return A({}, c2, d2);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b2, c2) {
      var d2 = a.stateNode;
      if (!d2) throw Error(p$1(169));
      c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c2);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b2 = C;
        try {
          var c2 = eg;
          for (C = 1; a < c2.length; a++) {
            var d2 = c2[a];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e2) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
        } finally {
          C = b2, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b2) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b2;
    }
    function ug(a, b2, c2) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d2 = rg;
      a = sg;
      var e2 = 32 - oc(d2) - 1;
      d2 &= ~(1 << e2);
      c2 += 1;
      var f2 = 32 - oc(b2) + e2;
      if (30 < f2) {
        var g2 = e2 - e2 % 5;
        f2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        e2 -= g2;
        rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
        sg = f2 + a;
      } else rg = 1 << f2 | c2 << e2 | d2, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b2) {
      var c2 = Bg(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.stateNode = b2;
      c2.return = a;
      b2 = a.deletions;
      null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
    }
    function Cg(a, b2) {
      switch (a.tag) {
        case 5:
          var c2 = a.type;
          b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
          return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
        case 6:
          return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
        case 13:
          return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b2 = yg;
        if (b2) {
          var c2 = b2;
          if (!Cg(a, b2)) {
            if (Dg(a)) throw Error(p$1(418));
            b2 = Lf(c2.nextSibling);
            var d2 = xg;
            b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p$1(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b2;
      (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
      if (b2 && (b2 = yg)) {
        if (Dg(a)) throw Hg(), Error(p$1(418));
        for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p$1(317));
        a: {
          a = a.nextSibling;
          for (b2 = 0; a; ) {
            if (8 === a.nodeType) {
              var c2 = a.data;
              if ("/$" === c2) {
                if (0 === b2) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b2--;
              } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b2, c2) {
      a = c2.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (1 !== c2.tag) throw Error(p$1(309));
            var d2 = c2.stateNode;
          }
          if (!d2) throw Error(p$1(147, a));
          var e2 = d2, f2 = "" + a;
          if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
          b2 = function(a2) {
            var b3 = e2.refs;
            null === a2 ? delete b3[f2] : b3[f2] = a2;
          };
          b2._stringRef = f2;
          return b2;
        }
        if ("string" !== typeof a) throw Error(p$1(284));
        if (!c2._owner) throw Error(p$1(290, a));
      }
      return a;
    }
    function Mg(a, b2) {
      a = Object.prototype.toString.call(b2);
      throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b2 = a._init;
      return b2(a._payload);
    }
    function Og(a) {
      function b2(b3, c3) {
        if (a) {
          var d3 = b3.deletions;
          null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
        }
      }
      function c2(c3, d3) {
        if (!a) return null;
        for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a2, b3) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
        return a2;
      }
      function e2(a2, b3) {
        a2 = Pg(a2, b3);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b3, c3, d3) {
        b3.index = d3;
        if (!a) return b3.flags |= 1048576, c3;
        d3 = b3.alternate;
        if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
        b3.flags |= 2;
        return c3;
      }
      function g2(b3) {
        a && null === b3.alternate && (b3.flags |= 2);
        return b3;
      }
      function h2(a2, b3, c3, d3) {
        if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function k2(a2, b3, c3, d3) {
        var f3 = c3.type;
        if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
        if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
        d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
        d3.ref = Lg(a2, b3, c3);
        d3.return = a2;
        return d3;
      }
      function l2(a2, b3, c3, d3) {
        if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
        b3 = e2(b3, c3.children || []);
        b3.return = a2;
        return b3;
      }
      function m2(a2, b3, c3, d3, f3) {
        if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
        b3 = e2(b3, c3);
        b3.return = a2;
        return b3;
      }
      function q2(a2, b3, c3) {
        if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
        if ("object" === typeof b3 && null !== b3) {
          switch (b3.$$typeof) {
            case va:
              return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
            case wa:
              return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
            case Ha:
              var d3 = b3._init;
              return q2(a2, d3(b3._payload), c3);
          }
          if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
          Mg(a2, b3);
        }
        return null;
      }
      function r2(a2, b3, c3, d3) {
        var e3 = null !== b3 ? b3.key : null;
        if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
        if ("object" === typeof c3 && null !== c3) {
          switch (c3.$$typeof) {
            case va:
              return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
            case wa:
              return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
            case Ha:
              return e3 = c3._init, r2(
                a2,
                b3,
                e3(c3._payload),
                d3
              );
          }
          if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a2, b3, c3, d3, null);
          Mg(a2, c3);
        }
        return null;
      }
      function y2(a2, b3, c3, d3, e3) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
            case wa:
              return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
            case Ha:
              var f3 = d3._init;
              return y2(a2, b3, c3, f3(d3._payload), e3);
          }
          if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
          Mg(b3, d3);
        }
        return null;
      }
      function n2(e3, g3, h3, k3) {
        for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e3, u2, h3[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b2(e3, u2);
          g3 = f2(n3, g3, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h3.length) return c2(e3, u2), I && tg(e3, w2), l3;
        if (null === u2) {
          for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I && tg(e3, w2);
          return l3;
        }
        for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function(a2) {
          return b2(e3, a2);
        });
        I && tg(e3, w2);
        return l3;
      }
      function t2(e3, g3, h3, k3) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3) throw Error(p$1(150));
        h3 = l3.call(h3);
        if (null == h3) throw Error(p$1(151));
        for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e3, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b2(e3, m3);
          g3 = f2(t3, g3, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done) return c2(
          e3,
          m3
        ), I && tg(e3, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I && tg(e3, w2);
          return l3;
        }
        for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function(a2) {
          return b2(e3, a2);
        });
        I && tg(e3, w2);
        return l3;
      }
      function J2(a2, d3, f3, h3) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c2(a2, l3.sibling);
                        d3 = e2(l3, f3.props.children);
                        d3.return = a2;
                        a2 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                      c2(a2, l3.sibling);
                      d3 = e2(l3, f3.props);
                      d3.ref = Lg(a2, l3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    c2(a2, l3);
                    break;
                  } else b2(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f3), h3.return = a2, a2 = h3);
              }
              return g2(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d3; ) {
                  if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                    c2(a2, d3.sibling);
                    d3 = e2(d3, f3.children || []);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  } else {
                    c2(a2, d3);
                    break;
                  }
                  else b2(a2, d3);
                  d3 = d3.sibling;
                }
                d3 = Sg(f3, a2.mode, h3);
                d3.return = a2;
                a2 = d3;
              }
              return g2(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
          }
          if (eb(f3)) return n2(a2, d3, f3, h3);
          if (Ka(f3)) return t2(a2, d3, f3, h3);
          Mg(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
      }
      return J2;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b2 = Wg.current;
      E(Wg);
      a._currentValue = b2;
    }
    function bh(a, b2, c2) {
      for (; null !== a; ) {
        var d2 = a.alternate;
        (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
        if (a === c2) break;
        a = a.return;
      }
    }
    function ch(a, b2) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b2 = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
        if (null === Xg) throw Error(p$1(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b2;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b2, c2, d2) {
      var e2 = b2.interleaved;
      null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
      b2.interleaved = c2;
      return ih(a, d2);
    }
    function ih(a, b2) {
      a.lanes |= b2;
      var c2 = a.alternate;
      null !== c2 && (c2.lanes |= b2);
      c2 = a;
      for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
      return 3 === c2.tag ? c2.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b2) {
      a = a.updateQueue;
      b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b2) {
      return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b2, c2) {
      var d2 = a.updateQueue;
      if (null === d2) return null;
      d2 = d2.shared;
      if (0 !== (K & 2)) {
        var e2 = d2.pending;
        null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
        d2.pending = b2;
        return ih(a, c2);
      }
      e2 = d2.interleaved;
      null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
      d2.interleaved = b2;
      return ih(a, c2);
    }
    function oh(a, b2, c2) {
      b2 = b2.updateQueue;
      if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    function ph(a, b2) {
      var c2 = a.updateQueue, d2 = a.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f2 = null;
        c2 = c2.firstBaseUpdate;
        if (null !== c2) {
          do {
            var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
            c2 = c2.next;
          } while (null !== c2);
          null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
        } else e2 = f2 = b2;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
        a.updateQueue = c2;
        return;
      }
      a = c2.lastBaseUpdate;
      null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
      c2.lastBaseUpdate = b2;
    }
    function qh(a, b2, c2, d2) {
      var e2 = a.updateQueue;
      jh = false;
      var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (null !== h2) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        null === g2 ? f2 = l2 : g2.next = l2;
        g2 = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e2.baseState;
        g2 = 0;
        m2 = l2 = k2 = null;
        h2 = f2;
        do {
          var r2 = h2.lane, y2 = h2.eventTime;
          if ((d2 & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h2;
              r2 = b2;
              y2 = c2;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2) break a;
                  q2 = A({}, q2, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
          } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
          h2 = h2.next;
          if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
          else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = m2;
        b2 = e2.shared.interleaved;
        if (null !== b2) {
          e2 = b2;
          do
            g2 |= e2.lane, e2 = e2.next;
          while (e2 !== b2);
        } else null === f2 && (e2.shared.lanes = 0);
        rh |= g2;
        a.lanes = g2;
        a.memoizedState = q2;
      }
    }
    function sh(a, b2, c2) {
      a = b2.effects;
      b2.effects = null;
      if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
        var d2 = a[b2], e2 = d2.callback;
        if (null !== e2) {
          d2.callback = null;
          d2 = c2;
          if ("function" !== typeof e2) throw Error(p$1(191, e2));
          e2.call(d2);
        }
      }
    }
    var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p$1(174));
      return a;
    }
    function yh(a, b2) {
      G(wh, b2);
      G(vh, a);
      G(uh, th);
      a = b2.nodeType;
      switch (a) {
        case 9:
        case 11:
          b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
      }
      E(uh);
      G(uh, b2);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b2 = xh(uh.current);
      var c2 = lb(b2, a.type);
      b2 !== c2 && (G(vh, a), G(uh, c2));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b2 = a; null !== b2; ) {
        if (13 === b2.tag) {
          var c2 = b2.memoizedState;
          if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
        } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
          if (0 !== (b2.flags & 128)) return b2;
        } else if (null !== b2.child) {
          b2.child.return = b2;
          b2 = b2.child;
          continue;
        }
        if (b2 === a) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a) return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p$1(321));
    }
    function Mh(a, b2) {
      if (null === b2) return false;
      for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He(a[c2], b2[c2])) return false;
      return true;
    }
    function Nh(a, b2, c2, d2, e2, f2) {
      Hh = f2;
      M = b2;
      b2.memoizedState = null;
      b2.updateQueue = null;
      b2.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c2(d2, e2);
      if (Jh) {
        f2 = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f2) throw Error(p$1(301));
          f2 += 1;
          O = N = null;
          b2.updateQueue = null;
          Fh.current = Qh;
          a = c2(d2, e2);
        } while (Jh);
      }
      Fh.current = Rh;
      b2 = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b2) throw Error(p$1(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b2 = null === O ? M.memoizedState : O.next;
      if (null !== b2) O = b2, N = a;
      else {
        if (null === a) throw Error(p$1(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b2) {
      return "function" === typeof b2 ? b2(a) : b2;
    }
    function Wh(a) {
      var b2 = Uh(), c2 = b2.queue;
      if (null === c2) throw Error(p$1(311));
      c2.lastRenderedReducer = a;
      var d2 = N, e2 = d2.baseQueue, f2 = c2.pending;
      if (null !== f2) {
        if (null !== e2) {
          var g2 = e2.next;
          e2.next = f2.next;
          f2.next = g2;
        }
        d2.baseQueue = e2 = f2;
        c2.pending = null;
      }
      if (null !== e2) {
        f2 = e2.next;
        d2 = d2.baseState;
        var h2 = g2 = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
            M.lanes |= m2;
            rh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g2 = d2 : k2.next = h2;
        He(d2, b2.memoizedState) || (dh = true);
        b2.memoizedState = d2;
        b2.baseState = g2;
        b2.baseQueue = k2;
        c2.lastRenderedState = d2;
      }
      a = c2.interleaved;
      if (null !== a) {
        e2 = a;
        do
          f2 = e2.lane, M.lanes |= f2, rh |= f2, e2 = e2.next;
        while (e2 !== a);
      } else null === e2 && (c2.lanes = 0);
      return [b2.memoizedState, c2.dispatch];
    }
    function Xh(a) {
      var b2 = Uh(), c2 = b2.queue;
      if (null === c2) throw Error(p$1(311));
      c2.lastRenderedReducer = a;
      var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
      if (null !== e2) {
        c2.pending = null;
        var g2 = e2 = e2.next;
        do
          f2 = a(f2, g2.action), g2 = g2.next;
        while (g2 !== e2);
        He(f2, b2.memoizedState) || (dh = true);
        b2.memoizedState = f2;
        null === b2.baseQueue && (b2.baseState = f2);
        c2.lastRenderedState = f2;
      }
      return [f2, d2];
    }
    function Yh() {
    }
    function Zh(a, b2) {
      var c2 = M, d2 = Uh(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
      f2 && (d2.memoizedState = e2, dh = true);
      d2 = d2.queue;
      $h(ai.bind(null, c2, d2, a), [a]);
      if (d2.getSnapshot !== b2 || f2 || null !== O && O.memoizedState.tag & 1) {
        c2.flags |= 2048;
        bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
        if (null === Q) throw Error(p$1(349));
        0 !== (Hh & 30) || di(c2, b2, e2);
      }
      return e2;
    }
    function di(a, b2, c2) {
      a.flags |= 16384;
      a = { getSnapshot: b2, value: c2 };
      b2 = M.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
    }
    function ci(a, b2, c2, d2) {
      b2.value = c2;
      b2.getSnapshot = d2;
      ei(b2) && fi(a);
    }
    function ai(a, b2, c2) {
      return c2(function() {
        ei(b2) && fi(a);
      });
    }
    function ei(a) {
      var b2 = a.getSnapshot;
      a = a.value;
      try {
        var c2 = b2();
        return !He(a, c2);
      } catch (d2) {
        return true;
      }
    }
    function fi(a) {
      var b2 = ih(a, 1);
      null !== b2 && gi(b2, a, 1, -1);
    }
    function hi(a) {
      var b2 = Th();
      "function" === typeof a && (a = a());
      b2.memoizedState = b2.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b2.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b2.memoizedState, a];
    }
    function bi(a, b2, c2, d2) {
      a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
      b2 = M.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b2, c2, d2) {
      var e2 = Th();
      M.flags |= a;
      e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
    }
    function li(a, b2, c2, d2) {
      var e2 = Uh();
      d2 = void 0 === d2 ? null : d2;
      var f2 = void 0;
      if (null !== N) {
        var g2 = N.memoizedState;
        f2 = g2.destroy;
        if (null !== d2 && Mh(d2, g2.deps)) {
          e2.memoizedState = bi(b2, c2, f2, d2);
          return;
        }
      }
      M.flags |= a;
      e2.memoizedState = bi(1 | b2, c2, f2, d2);
    }
    function mi(a, b2) {
      return ki(8390656, 8, a, b2);
    }
    function $h(a, b2) {
      return li(2048, 8, a, b2);
    }
    function ni(a, b2) {
      return li(4, 2, a, b2);
    }
    function oi(a, b2) {
      return li(4, 4, a, b2);
    }
    function pi(a, b2) {
      if ("function" === typeof b2) return a = a(), b2(a), function() {
        b2(null);
      };
      if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
        b2.current = null;
      };
    }
    function qi(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return li(4, 4, pi.bind(null, b2, a), c2);
    }
    function ri() {
    }
    function si(a, b2) {
      var c2 = Uh();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
      c2.memoizedState = [a, b2];
      return a;
    }
    function ti(a, b2) {
      var c2 = Uh();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }
    function ui(a, b2, c2) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
      He(c2, b2) || (c2 = yc(), M.lanes |= c2, rh |= c2, a.baseState = true);
      return b2;
    }
    function vi(a, b2) {
      var c2 = C;
      C = 0 !== c2 && 4 > c2 ? c2 : 4;
      a(true);
      var d2 = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b2();
      } finally {
        C = c2, Gh.transition = d2;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b2, c2) {
      var d2 = yi(a);
      c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b2, c2);
      else if (c2 = hh(a, b2, c2, d2), null !== c2) {
        var e2 = R();
        gi(c2, a, d2, e2);
        Bi(c2, b2, d2);
      }
    }
    function ii(a, b2, c2) {
      var d2 = yi(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b2, e2);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
          var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
          e2.hasEagerState = true;
          e2.eagerState = h2;
          if (He(h2, g2)) {
            var k2 = b2.interleaved;
            null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
            b2.interleaved = e2;
            return;
          }
        } catch (l2) {
        } finally {
        }
        c2 = hh(a, b2, e2, d2);
        null !== c2 && (e2 = R(), gi(c2, a, d2, e2), Bi(c2, b2, d2));
      }
    }
    function zi(a) {
      var b2 = a.alternate;
      return a === M || null !== b2 && b2 === M;
    }
    function Ai(a, b2) {
      Jh = Ih = true;
      var c2 = a.pending;
      null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
      a.pending = b2;
    }
    function Bi(a, b2, c2) {
      if (0 !== (c2 & 4194240)) {
        var d2 = b2.lanes;
        d2 &= a.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a, c2);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
      Th().memoizedState = [a, void 0 === b2 ? null : b2];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b2, a),
        c2
      );
    }, useLayoutEffect: function(a, b2) {
      return ki(4194308, 4, a, b2);
    }, useInsertionEffect: function(a, b2) {
      return ki(4, 2, a, b2);
    }, useMemo: function(a, b2) {
      var c2 = Th();
      b2 = void 0 === b2 ? null : b2;
      a = a();
      c2.memoizedState = [a, b2];
      return a;
    }, useReducer: function(a, b2, c2) {
      var d2 = Th();
      b2 = void 0 !== c2 ? c2(b2) : b2;
      d2.memoizedState = d2.baseState = b2;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
      d2.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d2.memoizedState, a];
    }, useRef: function(a) {
      var b2 = Th();
      a = { current: a };
      return b2.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b2 = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b2, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b2, c2) {
      var d2 = M, e2 = Th();
      if (I) {
        if (void 0 === c2) throw Error(p$1(407));
        c2 = c2();
      } else {
        c2 = b2();
        if (null === Q) throw Error(p$1(349));
        0 !== (Hh & 30) || di(d2, b2, c2);
      }
      e2.memoizedState = c2;
      var f2 = { value: c2, getSnapshot: b2 };
      e2.queue = f2;
      mi(ai.bind(
        null,
        d2,
        f2,
        a
      ), [a]);
      d2.flags |= 2048;
      bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
      return c2;
    }, useId: function() {
      var a = Th(), b2 = Q.identifierPrefix;
      if (I) {
        var c2 = sg;
        var d2 = rg;
        c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
        b2 = ":" + b2 + "R" + c2;
        c2 = Kh++;
        0 < c2 && (b2 += "H" + c2.toString(32));
        b2 += ":";
      } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
      return a.memoizedState = b2;
    }, unstable_isNewReconciler: false }, Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b2 = Uh();
        return ui(b2, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b2 = Uh().memoizedState;
        return [a, b2];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b2 = Uh();
      return null === N ? b2.memoizedState = a : ui(b2, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b2 = Uh().memoizedState;
      return [a, b2];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b2) {
      if (a && a.defaultProps) {
        b2 = A({}, b2);
        a = a.defaultProps;
        for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
        return b2;
      }
      return b2;
    }
    function Di(a, b2, c2, d2) {
      b2 = a.memoizedState;
      c2 = c2(d2, b2);
      c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
      a.memoizedState = c2;
      0 === a.lanes && (a.updateQueue.baseState = c2);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = R(), e2 = yi(a), f2 = mh(d2, e2);
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = nh(a, f2, e2);
      null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
    }, enqueueReplaceState: function(a, b2, c2) {
      a = a._reactInternals;
      var d2 = R(), e2 = yi(a), f2 = mh(d2, e2);
      f2.tag = 1;
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = nh(a, f2, e2);
      null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
    }, enqueueForceUpdate: function(a, b2) {
      a = a._reactInternals;
      var c2 = R(), d2 = yi(a), e2 = mh(c2, d2);
      e2.tag = 2;
      void 0 !== b2 && null !== b2 && (e2.callback = b2);
      b2 = nh(a, e2, d2);
      null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
    } };
    function Fi(a, b2, c2, d2, e2, f2, g2) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
    }
    function Gi(a, b2, c2) {
      var d2 = false, e2 = Vf;
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
      b2 = new b2(c2, f2);
      a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
      b2.updater = Ei;
      a.stateNode = b2;
      b2._reactInternals = a;
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b2;
    }
    function Hi(a, b2, c2, d2) {
      a = b2.state;
      "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
      "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
      b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
    }
    function Ii(a, b2, c2, d2) {
      var e2 = a.stateNode;
      e2.props = c2;
      e2.state = a.memoizedState;
      e2.refs = {};
      kh(a);
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
      e2.state = a.memoizedState;
      f2 = b2.getDerivedStateFromProps;
      "function" === typeof f2 && (Di(a, b2, f2, c2), e2.state = a.memoizedState);
      "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c2, e2, d2), e2.state = a.memoizedState);
      "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b2) {
      try {
        var c2 = "", d2 = b2;
        do
          c2 += Pa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f2) {
        e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b2, stack: e2, digest: null };
    }
    function Ki(a, b2, c2) {
      return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
    }
    function Li(a, b2) {
      try {
        console.error(b2.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b2, c2) {
      c2 = mh(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b2.value;
      c2.callback = function() {
        Oi || (Oi = true, Pi = d2);
        Li(a, b2);
      };
      return c2;
    }
    function Qi(a, b2, c2) {
      c2 = mh(-1, c2);
      c2.tag = 3;
      var d2 = a.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e2 = b2.value;
        c2.payload = function() {
          return d2(e2);
        };
        c2.callback = function() {
          Li(a, b2);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
        Li(a, b2);
        "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c3 = b2.stack;
        this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
      });
      return c2;
    }
    function Si(a, b2, c2) {
      var d2 = a.pingCache;
      if (null === d2) {
        d2 = a.pingCache = new Mi();
        var e2 = /* @__PURE__ */ new Set();
        d2.set(b2, e2);
      } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
      e2.has(c2) || (e2.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
    }
    function Ui(a) {
      do {
        var b2;
        if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
        if (b2) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b2, c2, d2, e2) {
      if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e2;
      return a;
    }
    var Wi = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b2, c2, d2) {
      b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
    }
    function Yi(a, b2, c2, d2, e2) {
      c2 = c2.render;
      var f2 = b2.ref;
      ch(b2, e2);
      d2 = Nh(a, b2, c2, d2, f2, e2);
      c2 = Sh();
      if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
      I && c2 && vg(b2);
      b2.flags |= 1;
      Xi(a, b2, d2, e2);
      return b2.child;
    }
    function $i(a, b2, c2, d2, e2) {
      if (null === a) {
        var f2 = c2.type;
        if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e2);
        a = Rg(c2.type, null, d2, b2, b2.mode, e2);
        a.ref = b2.ref;
        a.return = b2;
        return b2.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e2)) {
        var g2 = f2.memoizedProps;
        c2 = c2.compare;
        c2 = null !== c2 ? c2 : Ie;
        if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e2);
      }
      b2.flags |= 1;
      a = Pg(f2, d2);
      a.ref = b2.ref;
      a.return = b2;
      return b2.child = a;
    }
    function bj(a, b2, c2, d2, e2) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
        else return b2.lanes = a.lanes, Zi(a, b2, e2);
      }
      return cj(a, b2, c2, d2, e2);
    }
    function dj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c2;
      else {
        if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(ej, fj), fj |= a, null;
        b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d2 = null !== f2 ? f2.baseLanes : c2;
        G(ej, fj);
        fj |= d2;
      }
      else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(ej, fj), fj |= d2;
      Xi(a, b2, e2, c2);
      return b2.child;
    }
    function gj(a, b2) {
      var c2 = b2.ref;
      if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
    }
    function cj(a, b2, c2, d2, e2) {
      var f2 = Zf(c2) ? Xf : H.current;
      f2 = Yf(b2, f2);
      ch(b2, e2);
      c2 = Nh(a, b2, c2, d2, f2, e2);
      d2 = Sh();
      if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
      I && d2 && vg(b2);
      b2.flags |= 1;
      Xi(a, b2, c2, e2);
      return b2.child;
    }
    function hj(a, b2, c2, d2, e2) {
      if (Zf(c2)) {
        var f2 = true;
        cg(b2);
      } else f2 = false;
      ch(b2, e2);
      if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
      else if (null === a) {
        var g2 = b2.stateNode, h2 = b2.memoizedProps;
        g2.props = h2;
        var k2 = g2.context, l2 = c2.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
        var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
        jh = false;
        var r2 = b2.memoizedState;
        g2.state = r2;
        qh(b2, d2, g2, e2);
        k2 = b2.memoizedState;
        h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
      } else {
        g2 = b2.stateNode;
        lh(a, b2);
        h2 = b2.memoizedProps;
        l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
        g2.props = l2;
        q2 = b2.pendingProps;
        r2 = g2.context;
        k2 = c2.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
        var y2 = c2.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
        jh = false;
        r2 = b2.memoizedState;
        g2.state = r2;
        qh(b2, d2, g2, e2);
        var n2 = b2.memoizedState;
        h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
      }
      return jj(a, b2, c2, d2, f2, e2);
    }
    function jj(a, b2, c2, d2, e2, f2) {
      gj(a, b2);
      var g2 = 0 !== (b2.flags & 128);
      if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a, b2, f2);
      d2 = b2.stateNode;
      Wi.current = b2;
      var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
      b2.flags |= 1;
      null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
      b2.memoizedState = d2.state;
      e2 && dg(b2, c2, true);
      return b2.child;
    }
    function kj(a) {
      var b2 = a.stateNode;
      b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
      yh(a, b2.containerInfo);
    }
    function lj(a, b2, c2, d2, e2) {
      Ig();
      Jg(e2);
      b2.flags |= 256;
      Xi(a, b2, c2, d2);
      return b2.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = L.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
      (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
      if (h2) f2 = true, b2.flags &= -129;
      else if (null === a || null !== a.memoizedState) e2 |= 1;
      G(L, e2 & 1);
      if (null === a) {
        Eg(b2);
        a = b2.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
        g2 = d2.children;
        a = d2.fallback;
        return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
      }
      e2 = a.memoizedState;
      if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b2, g2, d2, h2, e2, c2);
      if (f2) {
        f2 = d2.fallback;
        g2 = b2.mode;
        e2 = a.child;
        h2 = e2.sibling;
        var k2 = { mode: "hidden", children: d2.children };
        0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
        null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
        f2.return = b2;
        d2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        d2 = f2;
        f2 = b2.child;
        g2 = a.child.memoizedState;
        g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
        f2.memoizedState = g2;
        f2.childLanes = a.childLanes & ~c2;
        b2.memoizedState = mj;
        return d2;
      }
      f2 = a.child;
      a = f2.sibling;
      d2 = Pg(f2, { mode: "visible", children: d2.children });
      0 === (b2.mode & 1) && (d2.lanes = c2);
      d2.return = b2;
      d2.sibling = null;
      null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
      b2.child = d2;
      b2.memoizedState = null;
      return d2;
    }
    function qj(a, b2) {
      b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
      b2.return = a;
      return a.child = b2;
    }
    function sj(a, b2, c2, d2) {
      null !== d2 && Jg(d2);
      Ug(b2, a.child, null, c2);
      a = qj(b2, b2.pendingProps.children);
      a.flags |= 2;
      b2.memoizedState = null;
      return a;
    }
    function rj(a, b2, c2, d2, e2, f2, g2) {
      if (c2) {
        if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$1(422))), sj(a, b2, g2, d2);
        if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = Tg(f2, e2, g2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
        b2.child.memoizedState = nj(g2);
        b2.memoizedState = mj;
        return f2;
      }
      if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
      if ("$!" === e2.data) {
        d2 = e2.nextSibling && e2.nextSibling.dataset;
        if (d2) var h2 = d2.dgst;
        d2 = h2;
        f2 = Error(p$1(419));
        d2 = Ki(f2, d2, void 0);
        return sj(a, b2, g2, d2);
      }
      h2 = 0 !== (g2 & a.childLanes);
      if (dh || h2) {
        d2 = Q;
        if (null !== d2) {
          switch (g2 & -g2) {
            case 4:
              e2 = 2;
              break;
            case 16:
              e2 = 8;
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
              e2 = 32;
              break;
            case 536870912:
              e2 = 268435456;
              break;
            default:
              e2 = 0;
          }
          e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
          0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d2, a, e2, -1));
        }
        tj();
        d2 = Ki(Error(p$1(421)));
        return sj(a, b2, g2, d2);
      }
      if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
      a = f2.treeContext;
      yg = Lf(e2.nextSibling);
      xg = b2;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
      b2 = qj(b2, d2.children);
      b2.flags |= 4096;
      return b2;
    }
    function vj(a, b2, c2) {
      a.lanes |= b2;
      var d2 = a.alternate;
      null !== d2 && (d2.lanes |= b2);
      bh(a.return, b2, c2);
    }
    function wj(a, b2, c2, d2, e2) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
    }
    function xj(a, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
      Xi(a, b2, d2.children, c2);
      d2 = L.current;
      if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
          else if (19 === a.tag) vj(a, c2, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d2 &= 1;
      }
      G(L, d2);
      if (0 === (b2.mode & 1)) b2.memoizedState = null;
      else switch (e2) {
        case "forwards":
          c2 = b2.child;
          for (e2 = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e2 = c2), c2 = c2.sibling;
          c2 = e2;
          null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
          wj(b2, false, e2, c2, f2);
          break;
        case "backwards":
          c2 = null;
          e2 = b2.child;
          for (b2.child = null; null !== e2; ) {
            a = e2.alternate;
            if (null !== a && null === Ch(a)) {
              b2.child = e2;
              break;
            }
            a = e2.sibling;
            e2.sibling = c2;
            c2 = e2;
            e2 = a;
          }
          wj(b2, true, c2, null, f2);
          break;
        case "together":
          wj(b2, false, null, null, void 0);
          break;
        default:
          b2.memoizedState = null;
      }
      return b2.child;
    }
    function ij(a, b2) {
      0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
    }
    function Zi(a, b2, c2) {
      null !== a && (b2.dependencies = a.dependencies);
      rh |= b2.lanes;
      if (0 === (c2 & b2.childLanes)) return null;
      if (null !== a && b2.child !== a.child) throw Error(p$1(153));
      if (null !== b2.child) {
        a = b2.child;
        c2 = Pg(a, a.pendingProps);
        b2.child = c2;
        for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
        c2.sibling = null;
      }
      return b2.child;
    }
    function yj(a, b2, c2) {
      switch (b2.tag) {
        case 3:
          kj(b2);
          Ig();
          break;
        case 5:
          Ah(b2);
          break;
        case 1:
          Zf(b2.type) && cg(b2);
          break;
        case 4:
          yh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b2.type._context, e2 = b2.memoizedProps.value;
          G(Wg, d2._currentValue);
          d2._currentValue = e2;
          break;
        case 13:
          d2 = b2.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated) return G(L, L.current & 1), b2.flags |= 128, null;
            if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
            G(L, L.current & 1);
            a = Zi(a, b2, c2);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d2) return xj(a, b2, c2);
            b2.flags |= 128;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          G(L, L.current);
          if (d2) break;
          else return null;
        case 22:
        case 23:
          return b2.lanes = 0, dj(a, b2, c2);
      }
      return Zi(a, b2, c2);
    }
    var zj, Aj, Bj, Cj;
    zj = function(a, b2) {
      for (var c2 = b2.child; null !== c2; ) {
        if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
        else if (4 !== c2.tag && null !== c2.child) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2) break;
        for (; null === c2.sibling; ) {
          if (null === c2.return || c2.return === b2) return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b2, c2, d2) {
      var e2 = a.memoizedProps;
      if (e2 !== d2) {
        a = b2.stateNode;
        xh(uh.current);
        var f2 = null;
        switch (c2) {
          case "input":
            e2 = Ya(a, e2);
            d2 = Ya(a, d2);
            f2 = [];
            break;
          case "select":
            e2 = A({}, e2, { value: void 0 });
            d2 = A({}, d2, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e2 = gb(a, e2);
            d2 = gb(a, d2);
            f2 = [];
            break;
          default:
            "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
        }
        ub(c2, d2);
        var g2;
        c2 = null;
        for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = null != e2 ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
            for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else c2 || (f2 || (f2 = []), f2.push(
            l2,
            c2
          )), c2 = k2;
          else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c2 && (f2 = f2 || []).push("style", c2);
        var l2 = f2;
        if (b2.updateQueue = l2) b2.flags |= 4;
      }
    };
    Cj = function(a, b2, c2, d2) {
      c2 !== d2 && (b2.flags |= 4);
    };
    function Dj(a, b2) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b2 = a.tail;
          for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
          null === c2 ? a.tail = null : c2.sibling = null;
          break;
        case "collapsed":
          c2 = a.tail;
          for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
          null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
      }
    }
    function S(a) {
      var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
      if (b2) for (var e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
      else for (e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
      a.subtreeFlags |= d2;
      a.childLanes = c2;
      return b2;
    }
    function Ej(a, b2, c2) {
      var d2 = b2.pendingProps;
      wg(b2);
      switch (b2.tag) {
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
          return S(b2), null;
        case 1:
          return Zf(b2.type) && $f(), S(b2), null;
        case 3:
          d2 = b2.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b2);
          S(b2);
          return null;
        case 5:
          Bh(b2);
          var e2 = xh(wh.current);
          c2 = b2.type;
          if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b2.stateNode) throw Error(p$1(166));
              S(b2);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.type;
              var f2 = b2.memoizedProps;
              d2[Of] = b2;
              d2[Pf] = f2;
              a = 0 !== (b2.mode & 1);
              switch (c2) {
                case "dialog":
                  D("cancel", d2);
                  D("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], d2);
                  break;
                case "source":
                  D("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d2
                  );
                  D("load", d2);
                  break;
                case "details":
                  D("toggle", d2);
                  break;
                case "input":
                  Za(d2, f2);
                  D("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f2), D("invalid", d2);
              }
              ub(c2, f2);
              e2 = null;
              for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
                var h2 = f2[g2];
                "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                  d2.textContent,
                  h2,
                  a
                ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
              }
              switch (c2) {
                case "input":
                  Va(d2);
                  db(d2, f2, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d2.onclick = Bf);
              }
              d2 = e2;
              b2.updateQueue = d2;
              null !== d2 && (b2.flags |= 4);
            } else {
              g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
              a[Of] = b2;
              a[Pf] = d2;
              zj(a, b2, false, false);
              b2.stateNode = a;
              a: {
                g2 = vb(c2, d2);
                switch (c2) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e2 = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e2 = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++) D(lf[e2], a);
                    e2 = d2;
                    break;
                  case "source":
                    D("error", a);
                    e2 = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e2 = d2;
                    break;
                  case "details":
                    D("toggle", a);
                    e2 = d2;
                    break;
                  case "input":
                    Za(a, d2);
                    e2 = Ya(a, d2);
                    D("invalid", a);
                    break;
                  case "option":
                    e2 = d2;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d2.multiple };
                    e2 = A({}, d2, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d2);
                    e2 = gb(a, d2);
                    D("invalid", a);
                    break;
                  default:
                    e2 = d2;
                }
                ub(c2, e2);
                h2 = e2;
                for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                  var k2 = h2[f2];
                  "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
                }
                switch (c2) {
                  case "input":
                    Va(a);
                    db(a, d2, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a.multiple = !!d2.multiple;
                    f2 = d2.value;
                    null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                      a,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e2.onClick && (a.onclick = Bf);
                }
                switch (c2) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b2.flags |= 4);
            }
            null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          }
          S(b2);
          return null;
        case 6:
          if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$1(166));
            c2 = xh(wh.current);
            xh(uh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.memoizedProps;
              d2[Of] = b2;
              if (f2 = d2.nodeValue !== c2) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                }
              }
              f2 && (b2.flags |= 4);
            } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
          }
          S(b2);
          return null;
        case 13:
          E(L);
          d2 = b2.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
            else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
              if (null === a) {
                if (!f2) throw Error(p$1(318));
                f2 = b2.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2) throw Error(p$1(317));
                f2[Of] = b2;
              } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
              S(b2);
              f2 = false;
            } else null !== zg && (Fj(zg), zg = null), f2 = true;
            if (!f2) return b2.flags & 65536 ? b2 : null;
          }
          if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
          d2 = null !== d2;
          d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b2.updateQueue && (b2.flags |= 4);
          S(b2);
          return null;
        case 4:
          return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
        case 10:
          return ah(b2.type._context), S(b2), null;
        case 17:
          return Zf(b2.type) && $f(), S(b2), null;
        case 19:
          E(L);
          f2 = b2.memoizedState;
          if (null === f2) return S(b2), null;
          d2 = 0 !== (b2.flags & 128);
          g2 = f2.rendering;
          if (null === g2) if (d2) Dj(f2, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
              g2 = Ch(a);
              if (null !== g2) {
                b2.flags |= 128;
                Dj(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                G(L, L.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
            null !== f2.tail && B() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          }
          else {
            if (!d2) if (a = Ch(g2), null !== a) {
              if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I) return S(b2), null;
            } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
            f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
          }
          if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = L.current, G(L, d2 ? c2 & 1 | 2 : c2 & 1), b2;
          S(b2);
          return null;
        case 22:
        case 23:
          return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p$1(156, b2.tag));
    }
    function Ij(a, b2) {
      wg(b2);
      switch (b2.tag) {
        case 1:
          return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
        case 5:
          return Bh(b2), null;
        case 13:
          E(L);
          a = b2.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b2.alternate) throw Error(p$1(340));
            Ig();
          }
          a = b2.flags;
          return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b2.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Lj(a, b2) {
      var c2 = a.ref;
      if (null !== c2) if ("function" === typeof c2) try {
        c2(null);
      } catch (d2) {
        W(a, b2, d2);
      }
      else c2.current = null;
    }
    function Mj(a, b2, c2) {
      try {
        c2();
      } catch (d2) {
        W(a, b2, d2);
      }
    }
    var Nj = false;
    function Oj(a, b2) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
          var d2 = c2.getSelection && c2.getSelection();
          if (d2 && 0 !== d2.rangeCount) {
            c2 = d2.anchorNode;
            var e2 = d2.anchorOffset, f2 = d2.focusNode;
            d2 = d2.focusOffset;
            try {
              c2.nodeType, f2.nodeType;
            } catch (F2) {
              c2 = null;
              break a;
            }
            var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
            b: for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild)) break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a) break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling)) break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
            c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
          } else c2 = null;
        }
        c2 = c2 || { start: 0, end: 0 };
      } else c2 = null;
      Df = { focusedElem: a, selectionRange: c2 };
      dd = false;
      for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
      else for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n2) {
                var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
                x2.__reactInternalSnapshotBeforeUpdate = w2;
              }
              break;
            case 3:
              var u2 = b2.stateNode.containerInfo;
              1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p$1(163));
          }
        } catch (F2) {
          W(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V = a;
          break;
        }
        V = b2.return;
      }
      n2 = Nj;
      Nj = false;
      return n2;
    }
    function Pj(a, b2, c2) {
      var d2 = b2.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e2 = d2 = d2.next;
        do {
          if ((e2.tag & a) === a) {
            var f2 = e2.destroy;
            e2.destroy = void 0;
            void 0 !== f2 && Mj(b2, c2, f2);
          }
          e2 = e2.next;
        } while (e2 !== d2);
      }
    }
    function Qj(a, b2) {
      b2 = b2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        var c2 = b2 = b2.next;
        do {
          if ((c2.tag & a) === a) {
            var d2 = c2.create;
            c2.destroy = d2();
          }
          c2 = c2.next;
        } while (c2 !== b2);
      }
    }
    function Rj(a) {
      var b2 = a.ref;
      if (null !== b2) {
        var c2 = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c2;
            break;
          default:
            a = c2;
        }
        "function" === typeof b2 ? b2(a) : b2.current = a;
      }
    }
    function Sj(a) {
      var b2 = a.alternate;
      null !== b2 && (a.alternate = null, Sj(b2));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
      else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
    }
    function Wj(a, b2, c2) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
      else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
    }
    var X = null, Xj = false;
    function Yj(a, b2, c2) {
      for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
    }
    function Zj(a, b2, c2) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c2);
      } catch (h2) {
      }
      switch (c2.tag) {
        case 5:
          U || Lj(c2, b2);
        case 6:
          var d2 = X, e2 = Xj;
          X = null;
          Yj(a, b2, c2);
          X = d2;
          Xj = e2;
          null !== X && (Xj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
          break;
        case 18:
          null !== X && (Xj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
          break;
        case 4:
          d2 = X;
          e2 = Xj;
          X = c2.stateNode.containerInfo;
          Xj = true;
          Yj(a, b2, c2);
          X = d2;
          Xj = e2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e2 = d2 = d2.next;
            do {
              var f2 = e2, g2 = f2.destroy;
              f2 = f2.tag;
              void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
              e2 = e2.next;
            } while (e2 !== d2);
          }
          Yj(a, b2, c2);
          break;
        case 1:
          if (!U && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
            d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
          } catch (h2) {
            W(c2, b2, h2);
          }
          Yj(a, b2, c2);
          break;
        case 21:
          Yj(a, b2, c2);
          break;
        case 22:
          c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Yj(a, b2, c2), U = d2) : Yj(a, b2, c2);
          break;
        default:
          Yj(a, b2, c2);
      }
    }
    function ak(a) {
      var b2 = a.updateQueue;
      if (null !== b2) {
        a.updateQueue = null;
        var c2 = a.stateNode;
        null === c2 && (c2 = a.stateNode = new Kj());
        b2.forEach(function(b3) {
          var d2 = bk.bind(null, a, b3);
          c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
        });
      }
    }
    function ck(a, b2) {
      var c2 = b2.deletions;
      if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        try {
          var f2 = a, g2 = b2, h2 = g2;
          a: for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Xj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h2 = h2.return;
          }
          if (null === X) throw Error(p$1(160));
          Zj(f2, g2, e2);
          X = null;
          Xj = false;
          var k2 = e2.alternate;
          null !== k2 && (k2.return = null);
          e2.return = null;
        } catch (l2) {
          W(e2, b2, l2);
        }
      }
      if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
    }
    function dk(a, b2) {
      var c2 = a.alternate, d2 = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b2, a);
          ek(a);
          if (d2 & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t2) {
              W(a, a.return, t2);
            }
            try {
              Pj(5, a, a.return);
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 1:
          ck(b2, a);
          ek(a);
          d2 & 512 && null !== c2 && Lj(c2, c2.return);
          break;
        case 5:
          ck(b2, a);
          ek(a);
          d2 & 512 && null !== c2 && Lj(c2, c2.return);
          if (a.flags & 32) {
            var e2 = a.stateNode;
            try {
              ob(e2, "");
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
            var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2) try {
              "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
              vb(h2, g2);
              var l2 = vb(h2, f2);
              for (g2 = 0; g2 < k2.length; g2 += 2) {
                var m2 = k2[g2], q2 = k2[g2 + 1];
                "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
              }
              switch (h2) {
                case "input":
                  bb(e2, f2);
                  break;
                case "textarea":
                  ib(e2, f2);
                  break;
                case "select":
                  var r2 = e2._wrapperState.wasMultiple;
                  e2._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e2,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e2[Pf] = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 6:
          ck(b2, a);
          ek(a);
          if (d2 & 4) {
            if (null === a.stateNode) throw Error(p$1(162));
            e2 = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e2.nodeValue = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 3:
          ck(b2, a);
          ek(a);
          if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
            bd(b2.containerInfo);
          } catch (t2) {
            W(a, a.return, t2);
          }
          break;
        case 4:
          ck(b2, a);
          ek(a);
          break;
        case 13:
          ck(b2, a);
          ek(a);
          e2 = a.child;
          e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B()));
          d2 & 4 && ak(a);
          break;
        case 22:
          m2 = null !== c2 && null !== c2.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m2, ck(b2, a), U = l2) : ck(b2, a);
          ek(a);
          if (d2 & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
              for (q2 = V = m2; null !== V; ) {
                r2 = V;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d2 = r2;
                      c2 = r2.return;
                      try {
                        b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W(d2, c2, t2);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
              }
              m2 = m2.sibling;
            }
            a: for (m2 = null, q2 = a; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2) try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a) break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a) break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
          }
          break;
        case 19:
          ck(b2, a);
          ek(a);
          d2 & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b2,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b2 = a.flags;
      if (b2 & 2) {
        try {
          a: {
            for (var c2 = a.return; null !== c2; ) {
              if (Tj(c2)) {
                var d2 = c2;
                break a;
              }
              c2 = c2.return;
            }
            throw Error(p$1(160));
          }
          switch (d2.tag) {
            case 5:
              var e2 = d2.stateNode;
              d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
              var f2 = Uj(a);
              Wj(a, f2, e2);
              break;
            case 3:
            case 4:
              var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
              Vj(a, h2, g2);
              break;
            default:
              throw Error(p$1(161));
          }
        } catch (k2) {
          W(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b2 & 4096 && (a.flags &= -4097);
    }
    function hk(a, b2, c2) {
      V = a;
      ik(a);
    }
    function ik(a, b2, c2) {
      for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
        var e2 = V, f2 = e2.child;
        if (22 === e2.tag && d2) {
          var g2 = null !== e2.memoizedState || Jj;
          if (!g2) {
            var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
            h2 = Jj;
            var l2 = U;
            Jj = g2;
            if ((U = k2) && !l2) for (V = e2; null !== V; ) g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V = k2) : jk(e2);
            for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
            V = e2;
            Jj = h2;
            U = l2;
          }
          kk(a);
        } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b2 = V;
        if (0 !== (b2.flags & 8772)) {
          var c2 = b2.alternate;
          try {
            if (0 !== (b2.flags & 8772)) switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b2);
                break;
              case 1:
                var d2 = b2.stateNode;
                if (b2.flags & 4 && !U) if (null === c2) d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
                var f2 = b2.updateQueue;
                null !== f2 && sh(b2, f2, d2);
                break;
              case 3:
                var g2 = b2.updateQueue;
                if (null !== g2) {
                  c2 = null;
                  if (null !== b2.child) switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                  sh(b2, g2, c2);
                }
                break;
              case 5:
                var h2 = b2.stateNode;
                if (null === c2 && b2.flags & 4) {
                  c2 = h2;
                  var k2 = b2.memoizedProps;
                  switch (b2.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c2.focus();
                      break;
                    case "img":
                      k2.src && (c2.src = k2.src);
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
                if (null === b2.memoizedState) {
                  var l2 = b2.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
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
                throw Error(p$1(163));
            }
            U || b2.flags & 512 && Rj(b2);
          } catch (r2) {
            W(b2, b2.return, r2);
          }
        }
        if (b2 === a) {
          V = null;
          break;
        }
        c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V = c2;
          break;
        }
        V = b2.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b2 = V;
        if (b2 === a) {
          V = null;
          break;
        }
        var c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V = c2;
          break;
        }
        V = b2.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b2 = V;
        try {
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              var c2 = b2.return;
              try {
                Qj(4, b2);
              } catch (k2) {
                W(b2, c2, k2);
              }
              break;
            case 1:
              var d2 = b2.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e2 = b2.return;
                try {
                  d2.componentDidMount();
                } catch (k2) {
                  W(b2, e2, k2);
                }
              }
              var f2 = b2.return;
              try {
                Rj(b2);
              } catch (k2) {
                W(b2, f2, k2);
              }
              break;
            case 5:
              var g2 = b2.return;
              try {
                Rj(b2);
              } catch (k2) {
                W(b2, g2, k2);
              }
          }
        } catch (k2) {
          W(b2, b2.return, k2);
        }
        if (b2 === a) {
          V = null;
          break;
        }
        var h2 = b2.sibling;
        if (null !== h2) {
          h2.return = b2.return;
          V = h2;
          break;
        }
        V = b2.return;
      }
    }
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b2, c2, d2) {
      if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
      Ac(a, c2, d2);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c2), 4 === T && Ck(a, Z)), Dk(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b2) {
      var c2 = a.callbackNode;
      wc(a, b2);
      var d2 = uc(a, a === Q ? Z : 0);
      if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
      else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
        null != c2 && bc(c2);
        if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c2 = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c2 = fc;
              break;
            case 4:
              c2 = gc;
              break;
            case 16:
              c2 = hc;
              break;
            case 536870912:
              c2 = jc;
              break;
            default:
              c2 = hc;
          }
          c2 = Fk(c2, Gk.bind(null, a));
        }
        a.callbackPriority = b2;
        a.callbackNode = c2;
      }
    }
    function Gk(a, b2) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p$1(327));
      var c2 = a.callbackNode;
      if (Hk() && a.callbackNode !== c2) return null;
      var d2 = uc(a, a === Q ? Z : 0);
      if (0 === d2) return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
      else {
        b2 = d2;
        var e2 = K;
        K |= 2;
        var f2 = Jk();
        if (Q !== a || Z !== b2) uk = null, Gj = B() + 500, Kk(a, b2);
        do
          try {
            Lk();
            break;
          } catch (h2) {
            Mk(a, h2);
          }
        while (1);
        $g();
        mk.current = f2;
        K = e2;
        null !== Y ? b2 = 0 : (Q = null, Z = 0, b2 = T);
      }
      if (0 !== b2) {
        2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Nk(a, e2)));
        if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
        if (6 === b2) Ck(a, d2);
        else {
          e2 = a.current.alternate;
          if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
          a.finishedWork = e2;
          a.finishedLanes = d2;
          switch (b2) {
            case 0:
            case 1:
              throw Error(p$1(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d2);
              if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B(), 10 < b2)) {
                if (0 !== uc(a, 0)) break;
                e2 = a.suspendedLanes;
                if ((e2 & d2) !== d2) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e2;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d2);
              if ((d2 & 4194240) === d2) break;
              b2 = a.eventTimes;
              for (e2 = -1; 0 < d2; ) {
                var g2 = 31 - oc(d2);
                f2 = 1 << g2;
                g2 = b2[g2];
                g2 > e2 && (e2 = g2);
                d2 &= ~f2;
              }
              d2 = e2;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
              if (10 < d2) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p$1(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c2 ? Gk.bind(null, a) : null;
    }
    function Nk(a, b2) {
      var c2 = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
      a = Ik(a, b2);
      2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b2 = a; ; ) {
        if (b2.flags & 16384) {
          var c2 = b2.updateQueue;
          if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
            var e2 = c2[d2], f2 = e2.getSnapshot;
            e2 = e2.value;
            try {
              if (!He(f2(), e2)) return false;
            } catch (g2) {
              return false;
            }
          }
        }
        c2 = b2.child;
        if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
        else {
          if (b2 === a) break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a) return true;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
      }
      return true;
    }
    function Ck(a, b2) {
      b2 &= ~rk;
      b2 &= ~qk;
      a.suspendedLanes |= b2;
      a.pingedLanes &= ~b2;
      for (a = a.expirationTimes; 0 < b2; ) {
        var c2 = 31 - oc(b2), d2 = 1 << c2;
        a[c2] = -1;
        b2 &= ~d2;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p$1(327));
      Hk();
      var b2 = uc(a, 0);
      if (0 === (b2 & 1)) return Dk(a, B()), null;
      var c2 = Ik(a, b2);
      if (0 !== a.tag && 2 === c2) {
        var d2 = xc(a);
        0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
      }
      if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B()), c2;
      if (6 === c2) throw Error(p$1(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b2;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b2) {
      var c2 = K;
      K |= 1;
      try {
        return a(b2);
      } finally {
        K = c2, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b2 = K;
      K |= 1;
      var c2 = ok.transition, d2 = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d2, ok.transition = c2, K = b2, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b2) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c2 = a.timeoutHandle;
      -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
      if (null !== Y) for (c2 = Y.return; null !== c2; ) {
        var d2 = c2;
        wg(d2);
        switch (d2.tag) {
          case 1:
            d2 = d2.type.childContextTypes;
            null !== d2 && void 0 !== d2 && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d2);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d2.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c2 = c2.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b2;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
          c2.interleaved = null;
          var e2 = d2.next, f2 = c2.pending;
          if (null !== f2) {
            var g2 = f2.next;
            f2.next = e2;
            d2.next = g2;
          }
          c2.pending = d2;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b2) {
      do {
        var c2 = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d2 = M.memoizedState; null !== d2; ) {
              var e2 = d2.queue;
              null !== e2 && (e2.pending = null);
              d2 = d2.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c2 || null === c2.return) {
            T = 1;
            pk = b2;
            Y = null;
            break;
          }
          a: {
            var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
            b2 = Z;
            h2.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h2, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Ui(g2);
              if (null !== y2) {
                y2.flags &= -257;
                Vi(y2, g2, h2, f2, b2);
                y2.mode & 1 && Si(f2, l2, b2);
                b2 = y2;
                k2 = l2;
                var n2 = b2.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b2.updateQueue = t2;
                } else n2.add(k2);
                break a;
              } else {
                if (0 === (b2 & 1)) {
                  Si(f2, l2, b2);
                  tj();
                  break a;
                }
                k2 = Error(p$1(426));
              }
            } else if (I && h2.mode & 1) {
              var J2 = Ui(g2);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Vi(J2, g2, h2, f2, b2);
                Jg(Ji(k2, h2));
                break a;
              }
            }
            f2 = k2 = Ji(k2, h2);
            4 !== T && (T = 2);
            null === sk ? sk = [f2] : sk.push(f2);
            f2 = g2;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var x2 = Ni(f2, k2, b2);
                  ph(f2, x2);
                  break a;
                case 1:
                  h2 = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var F2 = Qi(f2, h2, b2);
                    ph(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Sk(c2);
        } catch (na) {
          b2 = na;
          Y === c2 && null !== c2 && (Y = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b2) {
      var c2 = K;
      K |= 2;
      var d2 = Jk();
      if (Q !== a || Z !== b2) uk = null, Kk(a, b2);
      do
        try {
          Tk();
          break;
        } catch (e2) {
          Mk(a, e2);
        }
      while (1);
      $g();
      K = c2;
      mk.current = d2;
      if (null !== Y) throw Error(p$1(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b2 = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b2 ? Sk(a) : Y = b2;
      nk.current = null;
    }
    function Sk(a) {
      var b2 = a;
      do {
        var c2 = b2.alternate;
        a = b2.return;
        if (0 === (b2.flags & 32768)) {
          if (c2 = Ej(c2, b2, fj), null !== c2) {
            Y = c2;
            return;
          }
        } else {
          c2 = Ij(c2, b2);
          if (null !== c2) {
            c2.flags &= 32767;
            Y = c2;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b2 = b2.sibling;
        if (null !== b2) {
          Y = b2;
          return;
        }
        Y = b2 = a;
      } while (null !== b2);
      0 === T && (T = 5);
    }
    function Pk(a, b2, c2) {
      var d2 = C, e2 = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b2, c2, d2);
      } finally {
        ok.transition = e2, C = d2;
      }
      return null;
    }
    function Wk(a, b2, c2, d2) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p$1(327));
      c2 = a.finishedWork;
      var e2 = a.finishedLanes;
      if (null === c2) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c2 === a.current) throw Error(p$1(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c2.lanes | c2.childLanes;
      Bc(a, f2);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f2 = 0 !== (c2.flags & 15990);
      if (0 !== (c2.subtreeFlags & 15990) || f2) {
        f2 = ok.transition;
        ok.transition = null;
        var g2 = C;
        C = 1;
        var h2 = K;
        K |= 4;
        nk.current = null;
        Oj(a, c2);
        dk(c2, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c2;
        hk(c2);
        dc();
        K = h2;
        C = g2;
        ok.transition = f2;
      } else a.current = c2;
      vk && (vk = false, wk = a, xk = e2);
      f2 = a.pendingLanes;
      0 === f2 && (Ri = null);
      mc(c2.stateNode);
      Dk(a, B());
      if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b2 = ok.transition, c2 = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d2 = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p$1(331));
            var e2 = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f2 = V, g2 = f2.child;
              if (0 !== (V.flags & 16)) {
                var h2 = f2.deletions;
                if (null !== h2) {
                  for (var k2 = 0; k2 < h2.length; k2++) {
                    var l2 = h2[k2];
                    for (V = l2; null !== V; ) {
                      var m2 = V;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2) q2.return = m2, V = q2;
                      else for (; null !== V; ) {
                        m2 = V;
                        var r2 = m2.sibling, y2 = m2.return;
                        Sj(m2);
                        if (m2 === l2) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V = r2;
                          break;
                        }
                        V = y2;
                      }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V = g2;
              else b: for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f2, f2.return);
                }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
            }
            var w2 = a.current;
            for (V = w2; null !== V; ) {
              g2 = V;
              var u2 = g2.child;
              if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V = u2;
              else b: for (g2 = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048)) try {
                  switch (h2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h2);
                  }
                } catch (na) {
                  W(h2, h2.return, na);
                }
                if (h2 === g2) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
            }
            K = e2;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d2 = true;
          }
          return d2;
        } finally {
          C = c2, ok.transition = b2;
        }
      }
      return false;
    }
    function Xk(a, b2, c2) {
      b2 = Ji(c2, b2);
      b2 = Ni(a, b2, 1);
      a = nh(a, b2, 1);
      b2 = R();
      null !== a && (Ac(a, 1, b2), Dk(a, b2));
    }
    function W(a, b2, c2) {
      if (3 === a.tag) Xk(a, a, c2);
      else for (; null !== b2; ) {
        if (3 === b2.tag) {
          Xk(b2, a, c2);
          break;
        } else if (1 === b2.tag) {
          var d2 = b2.stateNode;
          if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
            a = Ji(c2, a);
            a = Qi(b2, a, 1);
            b2 = nh(b2, a, 1);
            a = R();
            null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
            break;
          }
        }
        b2 = b2.return;
      }
    }
    function Ti(a, b2, c2) {
      var d2 = a.pingCache;
      null !== d2 && d2.delete(b2);
      b2 = R();
      a.pingedLanes |= a.suspendedLanes & c2;
      Q === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c2);
      Dk(a, b2);
    }
    function Yk(a, b2) {
      0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c2 = R();
      a = ih(a, b2);
      null !== a && (Ac(a, b2, c2), Dk(a, c2));
    }
    function uj(a) {
      var b2 = a.memoizedState, c2 = 0;
      null !== b2 && (c2 = b2.retryLane);
      Yk(a, c2);
    }
    function bk(a, b2) {
      var c2 = 0;
      switch (a.tag) {
        case 13:
          var d2 = a.stateNode;
          var e2 = a.memoizedState;
          null !== e2 && (c2 = e2.retryLane);
          break;
        case 19:
          d2 = a.stateNode;
          break;
        default:
          throw Error(p$1(314));
      }
      null !== d2 && d2.delete(b2);
      Yk(a, c2);
    }
    var Vk;
    Vk = function(a, b2, c2) {
      if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
      b2.lanes = 0;
      switch (b2.tag) {
        case 2:
          var d2 = b2.type;
          ij(a, b2);
          a = b2.pendingProps;
          var e2 = Yf(b2, H.current);
          ch(b2, c2);
          e2 = Nh(null, b2, d2, a, e2, c2);
          var f2 = Sh();
          b2.flags |= 1;
          "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
          return b2;
        case 16:
          d2 = b2.elementType;
          a: {
            ij(a, b2);
            a = b2.pendingProps;
            e2 = d2._init;
            d2 = e2(d2._payload);
            b2.type = d2;
            e2 = b2.tag = Zk(d2);
            a = Ci(d2, a);
            switch (e2) {
              case 0:
                b2 = cj(null, b2, d2, a, c2);
                break a;
              case 1:
                b2 = hj(null, b2, d2, a, c2);
                break a;
              case 11:
                b2 = Yi(null, b2, d2, a, c2);
                break a;
              case 14:
                b2 = $i(null, b2, d2, Ci(d2.type, a), c2);
                break a;
            }
            throw Error(p$1(
              306,
              d2,
              ""
            ));
          }
          return b2;
        case 0:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a, b2, d2, e2, c2);
        case 1:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a, b2, d2, e2, c2);
        case 3:
          a: {
            kj(b2);
            if (null === a) throw Error(p$1(387));
            d2 = b2.pendingProps;
            f2 = b2.memoizedState;
            e2 = f2.element;
            lh(a, b2);
            qh(b2, d2, null, c2);
            var g2 = b2.memoizedState;
            d2 = g2.element;
            if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
              e2 = Ji(Error(p$1(423)), b2);
              b2 = lj(a, b2, d2, c2, e2);
              break a;
            } else if (d2 !== e2) {
              e2 = Ji(Error(p$1(424)), b2);
              b2 = lj(a, b2, d2, c2, e2);
              break a;
            } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
            else {
              Ig();
              if (d2 === e2) {
                b2 = Zi(a, b2, c2);
                break a;
              }
              Xi(a, b2, d2, c2);
            }
            b2 = b2.child;
          }
          return b2;
        case 5:
          return Ah(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
        case 6:
          return null === a && Eg(b2), null;
        case 13:
          return oj(a, b2, c2);
        case 4:
          return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
        case 11:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a, b2, d2, e2, c2);
        case 7:
          return Xi(a, b2, b2.pendingProps, c2), b2.child;
        case 8:
          return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 12:
          return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
        case 10:
          a: {
            d2 = b2.type._context;
            e2 = b2.pendingProps;
            f2 = b2.memoizedProps;
            g2 = e2.value;
            G(Wg, d2._currentValue);
            d2._currentValue = g2;
            if (null !== f2) if (He(f2.value, g2)) {
              if (f2.children === e2.children && !Wf.current) {
                b2 = Zi(a, b2, c2);
                break a;
              }
            } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = mh(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    bh(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2) throw Error(p$1(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                bh(g2, c2, b2);
                g2 = f2.sibling;
              } else g2 = f2.child;
              if (null !== g2) g2.return = f2;
              else for (g2 = f2; null !== g2; ) {
                if (g2 === b2) {
                  g2 = null;
                  break;
                }
                f2 = g2.sibling;
                if (null !== f2) {
                  f2.return = g2.return;
                  g2 = f2;
                  break;
                }
                g2 = g2.return;
              }
              f2 = g2;
            }
            Xi(a, b2, e2.children, c2);
            b2 = b2.child;
          }
          return b2;
        case 9:
          return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
        case 14:
          return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a, b2, d2, e2, c2);
        case 15:
          return bj(a, b2, b2.type, b2.pendingProps, c2);
        case 17:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a, c2);
        case 19:
          return xj(a, b2, c2);
        case 22:
          return dj(a, b2, c2);
      }
      throw Error(p$1(156, b2.tag));
    };
    function Fk(a, b2) {
      return ac(a, b2);
    }
    function $k(a, b2, c2, d2) {
      this.tag = a;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b2;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b2, c2, d2) {
      return new $k(a, b2, c2, d2);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b2) {
      var c2 = a.alternate;
      null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
      c2.flags = a.flags & 14680064;
      c2.childLanes = a.childLanes;
      c2.lanes = a.lanes;
      c2.child = a.child;
      c2.memoizedProps = a.memoizedProps;
      c2.memoizedState = a.memoizedState;
      c2.updateQueue = a.updateQueue;
      b2 = a.dependencies;
      c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
      c2.sibling = a.sibling;
      c2.index = a.index;
      c2.ref = a.ref;
      return c2;
    }
    function Rg(a, b2, c2, d2, e2, f2) {
      var g2 = 2;
      d2 = a;
      if ("function" === typeof a) aj(a) && (g2 = 1);
      else if ("string" === typeof a) g2 = 5;
      else a: switch (a) {
        case ya:
          return Tg(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return pj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g2 = 10;
              break a;
            case Ca:
              g2 = 9;
              break a;
            case Da:
              g2 = 11;
              break a;
            case Ga:
              g2 = 14;
              break a;
            case Ha:
              g2 = 16;
              d2 = null;
              break a;
          }
          throw Error(p$1(130, null == a ? a : typeof a, ""));
      }
      b2 = Bg(g2, c2, b2, e2);
      b2.elementType = a;
      b2.type = d2;
      b2.lanes = f2;
      return b2;
    }
    function Tg(a, b2, c2, d2) {
      a = Bg(7, a, d2, b2);
      a.lanes = c2;
      return a;
    }
    function pj(a, b2, c2, d2) {
      a = Bg(22, a, d2, b2);
      a.elementType = Ia;
      a.lanes = c2;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b2, c2) {
      a = Bg(6, a, null, b2);
      a.lanes = c2;
      return a;
    }
    function Sg(a, b2, c2) {
      b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
      b2.lanes = c2;
      b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b2;
    }
    function al(a, b2, c2, d2, e2) {
      this.tag = b2;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e2;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = new al(a, b2, c2, h2, k2);
      1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
      f2 = Bg(3, null, null, b2);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f2);
      return a;
    }
    function cl(a, b2, c2) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
        var b2 = a;
        do {
          switch (b2.tag) {
            case 3:
              b2 = b2.stateNode.context;
              break a;
            case 1:
              if (Zf(b2.type)) {
                b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b2 = b2.return;
        } while (null !== b2);
        throw Error(p$1(171));
      }
      if (1 === a.tag) {
        var c2 = a.type;
        if (Zf(c2)) return bg(a, c2, b2);
      }
      return b2;
    }
    function el(a, b2, c2, d2, e2, f2, g2, h2, k2) {
      a = bl(c2, d2, true, a, e2, f2, g2, h2, k2);
      a.context = dl(null);
      c2 = a.current;
      d2 = R();
      e2 = yi(c2);
      f2 = mh(d2, e2);
      f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
      nh(c2, f2, e2);
      a.current.lanes = e2;
      Ac(a, e2, d2);
      Dk(a, d2);
      return a;
    }
    function fl(a, b2, c2, d2) {
      var e2 = b2.current, f2 = R(), g2 = yi(e2);
      c2 = dl(c2);
      null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
      b2 = mh(f2, g2);
      b2.payload = { element: a };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b2.callback = d2);
      a = nh(e2, b2, g2);
      null !== a && (gi(a, e2, g2, f2), oh(a, e2, g2));
      return g2;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b2) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c2 = a.retryLane;
        a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
      }
    }
    function il(a, b2) {
      hl(a, b2);
      (a = a.alternate) && hl(a, b2);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b2 = this._internalRoot;
      if (null === b2) throw Error(p$1(409));
      fl(a, b2, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b2 = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b2[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b2 = Hc();
        a = { blockedOn: null, target: a, priority: b2 };
        for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
        Qc.splice(c2, 0, a);
        0 === c2 && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b2, c2, d2, e2) {
      if (e2) {
        if ("function" === typeof d2) {
          var f2 = d2;
          d2 = function() {
            var a2 = gl(g2);
            f2.call(a2);
          };
        }
        var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g2;
        a[uf] = g2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g2;
      }
      for (; e2 = a.lastChild; ) a.removeChild(e2);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a2 = gl(k2);
          h2.call(a2);
        };
      }
      var k2 = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b2, k2, c2, d2);
      });
      return k2;
    }
    function rl(a, b2, c2, d2, e2) {
      var f2 = c2._reactRootContainer;
      if (f2) {
        var g2 = f2;
        if ("function" === typeof e2) {
          var h2 = e2;
          e2 = function() {
            var a2 = gl(g2);
            h2.call(a2);
          };
        }
        fl(b2, g2, a, e2);
      } else g2 = ql(c2, b2, a, e2, d2);
      return gl(g2);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b2 = a.stateNode;
          if (b2.current.memoizedState.isDehydrated) {
            var c2 = tc(b2.pendingLanes);
            0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b3 = ih(a, 1);
            if (null !== b3) {
              var c3 = R();
              gi(b3, a, 1, c3);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b2 = ih(a, 134217728);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 134217728, c2);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b2 = yi(a), c2 = ih(a, b2);
        if (null !== c2) {
          var d2 = R();
          gi(c2, a, b2, d2);
        }
        il(a, b2);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b2) {
      var c2 = C;
      try {
        return C = a, b2();
      } finally {
        C = c2;
      }
    };
    yb = function(a, b2, c2) {
      switch (b2) {
        case "input":
          bb(a, c2);
          b2 = c2.name;
          if ("radio" === c2.type && null != b2) {
            for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
            for (b2 = 0; b2 < c2.length; b2++) {
              var d2 = c2[b2];
              if (d2 !== a && d2.form === a.form) {
                var e2 = Db(d2);
                if (!e2) throw Error(p$1(90));
                Wa(d2);
                bb(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c2);
          break;
        case "select":
          b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function(a, b2) {
      var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b2)) throw Error(p$1(200));
      return cl(a, b2, null, c2);
    };
    reactDom_production_min.createRoot = function(a, b2) {
      if (!nl(a)) throw Error(p$1(299));
      var c2 = false, d2 = "", e2 = kl;
      null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
      b2 = bl(a, 1, false, null, null, c2, false, d2, e2);
      a[uf] = b2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b2);
    };
    reactDom_production_min.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b2 = a._reactInternals;
      if (void 0 === b2) {
        if ("function" === typeof a.render) throw Error(p$1(188));
        a = Object.keys(a).join(",");
        throw Error(p$1(268, a));
      }
      a = Zb(b2);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function(a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function(a, b2, c2) {
      if (!ol(b2)) throw Error(p$1(200));
      return rl(null, a, b2, true, c2);
    };
    reactDom_production_min.hydrateRoot = function(a, b2, c2) {
      if (!nl(a)) throw Error(p$1(405));
      var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
      null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
      b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
      a[uf] = b2.current;
      sf(a);
      if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
      return new ml(b2);
    };
    reactDom_production_min.render = function(a, b2, c2) {
      if (!ol(b2)) throw Error(p$1(200));
      return rl(null, a, b2, false, c2);
    };
    reactDom_production_min.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p$1(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
      if (!ol(c2)) throw Error(p$1(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
      return rl(a, b2, c2, false, d2);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
    const ReactDOM$1 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: ReactDOM
    }, [reactDomExports]);
    var createRoot$1;
    var m$1 = reactDomExports;
    {
      createRoot$1 = m$1.createRoot;
      m$1.hydrateRoot;
    }
    var define_process_env_default = {};
    var __create$1 = Object.create;
    var __defProp$1 = Object.defineProperty;
    var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames$1 = Object.getOwnPropertyNames;
    var __getProtoOf$1 = Object.getPrototypeOf;
    var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
    var __commonJS$1 = (cb2, mod2) => function __require() {
      return mod2 || (0, cb2[__getOwnPropNames$1(cb2)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
    };
    var __copyProps$1 = (to2, from2, except, desc) => {
      if (from2 && typeof from2 === "object" || typeof from2 === "function") {
        for (let key of __getOwnPropNames$1(from2))
          if (!__hasOwnProp$1.call(to2, key) && key !== except)
            __defProp$1(to2, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc$1(from2, key)) || desc.enumerable });
      }
      return to2;
    };
    var __toESM$1 = (mod2, isNodeMode, target) => (target = mod2 != null ? __create$1(__getProtoOf$1(mod2)) : {}, __copyProps$1(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      __defProp$1(target, "default", { value: mod2, enumerable: true }),
      mod2
    ));
    var require_symbols = __commonJS$1({
      "../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/symbols.js"(exports2, module2) {
        var isHyper = typeof process !== "undefined" && define_process_env_default.TERM_PROGRAM === "Hyper";
        var isWindows = typeof process !== "undefined" && process.platform === "win32";
        var isLinux = typeof process !== "undefined" && process.platform === "linux";
        var common = {
          ballotDisabled: "☒",
          ballotOff: "☐",
          ballotOn: "☑",
          bullet: "•",
          bulletWhite: "◦",
          fullBlock: "█",
          heart: "❤",
          identicalTo: "≡",
          line: "─",
          mark: "※",
          middot: "·",
          minus: "－",
          multiplication: "×",
          obelus: "÷",
          pencilDownRight: "✎",
          pencilRight: "✏",
          pencilUpRight: "✐",
          percent: "%",
          pilcrow2: "❡",
          pilcrow: "¶",
          plusMinus: "±",
          question: "?",
          section: "§",
          starsOff: "☆",
          starsOn: "★",
          upDownArrow: "↕"
        };
        var windows = Object.assign({}, common, {
          check: "√",
          cross: "×",
          ellipsisLarge: "...",
          ellipsis: "...",
          info: "i",
          questionSmall: "?",
          pointer: ">",
          pointerSmall: "»",
          radioOff: "( )",
          radioOn: "(*)",
          warning: "‼"
        });
        var other = Object.assign({}, common, {
          ballotCross: "✘",
          check: "✔",
          cross: "✖",
          ellipsisLarge: "⋯",
          ellipsis: "…",
          info: "ℹ",
          questionFull: "？",
          questionSmall: "﹖",
          pointer: isLinux ? "▸" : "❯",
          pointerSmall: isLinux ? "‣" : "›",
          radioOff: "◯",
          radioOn: "◉",
          warning: "⚠"
        });
        module2.exports = isWindows && !isHyper ? windows : other;
        Reflect.defineProperty(module2.exports, "common", { enumerable: false, value: common });
        Reflect.defineProperty(module2.exports, "windows", { enumerable: false, value: windows });
        Reflect.defineProperty(module2.exports, "other", { enumerable: false, value: other });
      }
    });
    var require_ansi_colors = __commonJS$1({
      "../node_modules/.pnpm/ansi-colors@4.1.3/node_modules/ansi-colors/index.js"(exports2, module2) {
        var isObject2 = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
        var ANSI_REGEX = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g;
        var hasColor = () => {
          if (typeof process !== "undefined") {
            return define_process_env_default.FORCE_COLOR !== "0";
          }
          return false;
        };
        var create = () => {
          const colors2 = {
            enabled: hasColor(),
            visible: true,
            styles: {},
            keys: {}
          };
          const ansi = (style22) => {
            let open2 = style22.open = `\x1B[${style22.codes[0]}m`;
            let close = style22.close = `\x1B[${style22.codes[1]}m`;
            let regex = style22.regex = new RegExp(`\\u001b\\[${style22.codes[1]}m`, "g");
            style22.wrap = (input, newline) => {
              if (input.includes(close))
                input = input.replace(regex, close + open2);
              let output = open2 + input + close;
              return newline ? output.replace(/\r*\n/g, `${close}$&${open2}`) : output;
            };
            return style22;
          };
          const wrap = (style22, input, newline) => {
            return typeof style22 === "function" ? style22(input) : style22.wrap(input, newline);
          };
          const style2 = (input, stack) => {
            if (input === "" || input == null)
              return "";
            if (colors2.enabled === false)
              return input;
            if (colors2.visible === false)
              return "";
            let str = "" + input;
            let nl2 = str.includes("\n");
            let n2 = stack.length;
            if (n2 > 0 && stack.includes("unstyle")) {
              stack = [.../* @__PURE__ */ new Set(["unstyle", ...stack])].reverse();
            }
            while (n2-- > 0)
              str = wrap(colors2.styles[stack[n2]], str, nl2);
            return str;
          };
          const define = (name, codes, type) => {
            colors2.styles[name] = ansi({ name, codes });
            let keys2 = colors2.keys[type] || (colors2.keys[type] = []);
            keys2.push(name);
            Reflect.defineProperty(colors2, name, {
              configurable: true,
              enumerable: true,
              set(value) {
                colors2.alias(name, value);
              },
              get() {
                let color = (input) => style2(input, color.stack);
                Reflect.setPrototypeOf(color, colors2);
                color.stack = this.stack ? this.stack.concat(name) : [name];
                return color;
              }
            });
          };
          define("reset", [0, 0], "modifier");
          define("bold", [1, 22], "modifier");
          define("dim", [2, 22], "modifier");
          define("italic", [3, 23], "modifier");
          define("underline", [4, 24], "modifier");
          define("inverse", [7, 27], "modifier");
          define("hidden", [8, 28], "modifier");
          define("strikethrough", [9, 29], "modifier");
          define("black", [30, 39], "color");
          define("red", [31, 39], "color");
          define("green", [32, 39], "color");
          define("yellow", [33, 39], "color");
          define("blue", [34, 39], "color");
          define("magenta", [35, 39], "color");
          define("cyan", [36, 39], "color");
          define("white", [37, 39], "color");
          define("gray", [90, 39], "color");
          define("grey", [90, 39], "color");
          define("bgBlack", [40, 49], "bg");
          define("bgRed", [41, 49], "bg");
          define("bgGreen", [42, 49], "bg");
          define("bgYellow", [43, 49], "bg");
          define("bgBlue", [44, 49], "bg");
          define("bgMagenta", [45, 49], "bg");
          define("bgCyan", [46, 49], "bg");
          define("bgWhite", [47, 49], "bg");
          define("blackBright", [90, 39], "bright");
          define("redBright", [91, 39], "bright");
          define("greenBright", [92, 39], "bright");
          define("yellowBright", [93, 39], "bright");
          define("blueBright", [94, 39], "bright");
          define("magentaBright", [95, 39], "bright");
          define("cyanBright", [96, 39], "bright");
          define("whiteBright", [97, 39], "bright");
          define("bgBlackBright", [100, 49], "bgBright");
          define("bgRedBright", [101, 49], "bgBright");
          define("bgGreenBright", [102, 49], "bgBright");
          define("bgYellowBright", [103, 49], "bgBright");
          define("bgBlueBright", [104, 49], "bgBright");
          define("bgMagentaBright", [105, 49], "bgBright");
          define("bgCyanBright", [106, 49], "bgBright");
          define("bgWhiteBright", [107, 49], "bgBright");
          colors2.ansiRegex = ANSI_REGEX;
          colors2.hasColor = colors2.hasAnsi = (str) => {
            colors2.ansiRegex.lastIndex = 0;
            return typeof str === "string" && str !== "" && colors2.ansiRegex.test(str);
          };
          colors2.alias = (name, color) => {
            let fn = typeof color === "string" ? colors2[color] : color;
            if (typeof fn !== "function") {
              throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
            }
            if (!fn.stack) {
              Reflect.defineProperty(fn, "name", { value: name });
              colors2.styles[name] = fn;
              fn.stack = [name];
            }
            Reflect.defineProperty(colors2, name, {
              configurable: true,
              enumerable: true,
              set(value) {
                colors2.alias(name, value);
              },
              get() {
                let color2 = (input) => style2(input, color2.stack);
                Reflect.setPrototypeOf(color2, colors2);
                color2.stack = this.stack ? this.stack.concat(fn.stack) : fn.stack;
                return color2;
              }
            });
          };
          colors2.theme = (custom) => {
            if (!isObject2(custom))
              throw new TypeError("Expected theme to be an object");
            for (let name of Object.keys(custom)) {
              colors2.alias(name, custom[name]);
            }
            return colors2;
          };
          colors2.alias("unstyle", (str) => {
            if (typeof str === "string" && str !== "") {
              colors2.ansiRegex.lastIndex = 0;
              return str.replace(colors2.ansiRegex, "");
            }
            return "";
          });
          colors2.alias("noop", (str) => str);
          colors2.none = colors2.clear = colors2.noop;
          colors2.stripColor = colors2.unstyle;
          colors2.symbols = require_symbols();
          colors2.define = define;
          return colors2;
        };
        module2.exports = create();
        module2.exports.create = create;
      }
    });
    __toESM$1(require_ansi_colors());
    var extend$1 = (objFir, objSec) => {
      return Object.assign({}, objFir, objSec);
    };
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS2 = (cb2, mod2) => function __require() {
      return mod2 || (0, cb2[__getOwnPropNames2(cb2)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
    };
    var __copyProps = (to2, from2, except, desc) => {
      if (from2 && typeof from2 === "object" || typeof from2 === "function") {
        for (let key of __getOwnPropNames2(from2))
          if (!__hasOwnProp.call(to2, key) && key !== except)
            __defProp(to2, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
      }
      return to2;
    };
    var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      __defProp(target, "default", { value: mod2, enumerable: true }),
      mod2
    ));
    var require_hash_sum = __commonJS2({
      "../node_modules/.pnpm/hash-sum@2.0.0/node_modules/hash-sum/hash-sum.js"(exports2, module2) {
        function pad(hash2, len) {
          while (hash2.length < len) {
            hash2 = "0" + hash2;
          }
          return hash2;
        }
        function fold(hash2, text) {
          var i;
          var chr;
          var len;
          if (text.length === 0) {
            return hash2;
          }
          for (i = 0, len = text.length; i < len; i++) {
            chr = text.charCodeAt(i);
            hash2 = (hash2 << 5) - hash2 + chr;
            hash2 |= 0;
          }
          return hash2 < 0 ? hash2 * -2 : hash2;
        }
        function foldObject(hash2, o, seen) {
          return Object.keys(o).sort().reduce(foldKey, hash2);
          function foldKey(hash3, key) {
            return foldValue(hash3, o[key], key, seen);
          }
        }
        function foldValue(input, value, key, seen) {
          var hash2 = fold(fold(fold(input, key), toString2(value)), typeof value);
          if (value === null) {
            return fold(hash2, "null");
          }
          if (value === void 0) {
            return fold(hash2, "undefined");
          }
          if (typeof value === "object" || typeof value === "function") {
            if (seen.indexOf(value) !== -1) {
              return fold(hash2, "[Circular]" + key);
            }
            seen.push(value);
            var objHash = foldObject(hash2, value, seen);
            if (!("valueOf" in value) || typeof value.valueOf !== "function") {
              return objHash;
            }
            try {
              return fold(objHash, String(value.valueOf()));
            } catch (err) {
              return fold(objHash, "[valueOf exception]" + (err.stack || err.message));
            }
          }
          return fold(hash2, value.toString());
        }
        function toString2(o) {
          return Object.prototype.toString.call(o);
        }
        function sum(o) {
          return pad(foldValue(0, o, "", []).toString(16), 8);
        }
        module2.exports = sum;
      }
    });
    __toESM(require_hash_sum());
    var copyText = (content, resolve, err) => {
      navigator.clipboard.writeText(content).then(() => {
      }).catch((error) => {
      });
    };
    //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var hookCallback;
    function hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
    }
    function isObject$1(input) {
      return input != null && Object.prototype.toString.call(input) === "[object Object]";
    }
    function hasOwnProp(a, b2) {
      return Object.prototype.hasOwnProperty.call(a, b2);
    }
    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k2;
        for (k2 in obj) {
          if (hasOwnProp(obj, k2)) {
            return false;
          }
        }
        return true;
      }
    }
    function isUndefined(input) {
      return input === void 0;
    }
    function isNumber(input) {
      return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
    }
    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
      var res = [], i, arrLen = arr.length;
      for (i = 0; i < arrLen; ++i) {
        res.push(fn(arr[i], i));
      }
      return res;
    }
    function extend(a, b2) {
      for (var i in b2) {
        if (hasOwnProp(b2, i)) {
          a[i] = b2[i];
        }
      }
      if (hasOwnProp(b2, "toString")) {
        a.toString = b2.toString;
      }
      if (hasOwnProp(b2, "valueOf")) {
        a.valueOf = b2.valueOf;
      }
      return a;
    }
    function createUTC(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }
    function getParsingFlags(m2) {
      if (m2._pf == null) {
        m2._pf = defaultParsingFlags();
      }
      return m2._pf;
    }
    var some;
    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function(fun) {
        var t2 = Object(this), len = t2.length >>> 0, i;
        for (i = 0; i < len; i++) {
          if (i in t2 && fun.call(this, t2[i], i, t2)) {
            return true;
          }
        }
        return false;
      };
    }
    function isValid(m2) {
      var flags = null, parsedParts = false, isNowValid = m2._d && !isNaN(m2._d.getTime());
      if (isNowValid) {
        flags = getParsingFlags(m2);
        parsedParts = some.call(flags.parsedDateParts, function(i) {
          return i != null;
        });
        isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
        if (m2._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
        }
      }
      if (Object.isFrozen == null || !Object.isFrozen(m2)) {
        m2._isValid = isNowValid;
      } else {
        return isNowValid;
      }
      return m2._isValid;
    }
    function createInvalid(flags) {
      var m2 = createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m2), flags);
      } else {
        getParsingFlags(m2).userInvalidated = true;
      }
      return m2;
    }
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to2, from2) {
      var i, prop, val, momentPropertiesLen = momentProperties.length;
      if (!isUndefined(from2._isAMomentObject)) {
        to2._isAMomentObject = from2._isAMomentObject;
      }
      if (!isUndefined(from2._i)) {
        to2._i = from2._i;
      }
      if (!isUndefined(from2._f)) {
        to2._f = from2._f;
      }
      if (!isUndefined(from2._l)) {
        to2._l = from2._l;
      }
      if (!isUndefined(from2._strict)) {
        to2._strict = from2._strict;
      }
      if (!isUndefined(from2._tzm)) {
        to2._tzm = from2._tzm;
      }
      if (!isUndefined(from2._isUTC)) {
        to2._isUTC = from2._isUTC;
      }
      if (!isUndefined(from2._offset)) {
        to2._offset = from2._offset;
      }
      if (!isUndefined(from2._pf)) {
        to2._pf = getParsingFlags(from2);
      }
      if (!isUndefined(from2._locale)) {
        to2._locale = from2._locale;
      }
      if (momentPropertiesLen > 0) {
        for (i = 0; i < momentPropertiesLen; i++) {
          prop = momentProperties[i];
          val = from2[prop];
          if (!isUndefined(val)) {
            to2[prop] = val;
          }
        }
      }
      return to2;
    }
    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = /* @__PURE__ */ new Date(NaN);
      }
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
        console.warn("Deprecation warning: " + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [], arg, i, key, argLen = arguments.length;
          for (i = 0; i < argLen; i++) {
            arg = "";
            if (typeof arguments[i] === "object") {
              arg += "\n[" + i + "] ";
              for (key in arguments[0]) {
                if (hasOwnProp(arguments[0], key)) {
                  arg += key + ": " + arguments[0][key] + ", ";
                }
              }
              arg = arg.slice(0, -2);
            } else {
              arg = arguments[i];
            }
            args.push(arg);
          }
          warn(
            msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
          );
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
      return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
    }
    function set$1(config) {
      var prop, i;
      for (i in config) {
        if (hasOwnProp(config, i)) {
          prop = config[i];
          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this["_" + i] = prop;
          }
        }
      }
      this._config = config;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject$1(parentConfig[prop]) && isObject$1(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }
      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject$1(parentConfig[prop])) {
          res[prop] = extend({}, res[prop]);
        }
      }
      return res;
    }
    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }
    var keys$1;
    if (Object.keys) {
      keys$1 = Object.keys;
    } else {
      keys$1 = function(obj) {
        var i, res = [];
        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }
        return res;
      };
    }
    var defaultCalendar = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function calendar(key, mom, now2) {
      var output = this._calendar[key] || this._calendar["sameElse"];
      return isFunction(output) ? output.call(mom, now2) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
      return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    function addFormatToken(token2, padded, ordinal2, callback) {
      var func = callback;
      if (typeof callback === "string") {
        func = function() {
          return this[callback]();
        };
      }
      if (token2) {
        formatTokenFunctions[token2] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal2) {
        formatTokenFunctions[ordinal2] = function() {
          return this.localeData().ordinal(
            func.apply(this, arguments),
            token2
          );
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format2) {
      var array = format2.match(formattingTokens), i, length2;
      for (i = 0, length2 = array.length; i < length2; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function(mom) {
        var output = "", i2;
        for (i2 = 0; i2 < length2; i2++) {
          output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
        }
        return output;
      };
    }
    function formatMoment(m2, format2) {
      if (!m2.isValid()) {
        return m2.localeData().invalidDate();
      }
      format2 = expandFormat(format2, m2.localeData());
      formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
      return formatFunctions[format2](m2);
    }
    function expandFormat(format2, locale2) {
      var i = 5;
      function replaceLongDateFormatTokens(input) {
        return locale2.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format2)) {
        format2 = format2.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }
      return format2;
    }
    var defaultLongDateFormat = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function longDateFormat(key) {
      var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
      if (format2 || !formatUpper) {
        return format2;
      }
      this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
        if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
          return tok.slice(1);
        }
        return tok;
      }).join("");
      return this._longDateFormat[key];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff2, output) {
      var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
      return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
    }
    var aliases = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year"
    };
    function normalizeUnits(units) {
      return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {}, normalizedProp, prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    var priorities = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1
    };
    function getPrioritizedUnits(unitsObj) {
      var units = [], u2;
      for (u2 in unitsObj) {
        if (hasOwnProp(unitsObj, u2)) {
          units.push({ unit: u2, priority: priorities[u2] });
        }
      }
      units.sort(function(a, b2) {
        return a.priority - b2.priority;
      });
      return units;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
    regexes = {};
    function addRegexToken(token2, regex, strictRegex) {
      regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }
    function getParseRegexForToken(token2, config) {
      if (!hasOwnProp(regexes, token2)) {
        return new RegExp(unescapeFormat(token2));
      }
      return regexes[token2](config._strict, config._locale);
    }
    function unescapeFormat(s) {
      return regexEscape(
        s.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }
        )
      );
    }
    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion, value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }
      return value;
    }
    var tokens = {};
    function addParseToken(token2, callback) {
      var i, func = callback, tokenLen;
      if (typeof token2 === "string") {
        token2 = [token2];
      }
      if (isNumber(callback)) {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      tokenLen = token2.length;
      for (i = 0; i < tokenLen; i++) {
        tokens[token2[i]] = func;
      }
    }
    function addWeekParseToken(token2, callback) {
      addParseToken(token2, function(input, array, config, token3) {
        config._w = config._w || {};
        callback(input, config._w, config, token3);
      });
    }
    function addTimeToArrayFromToken(token2, input, config) {
      if (input != null && hasOwnProp(tokens, token2)) {
        tokens[token2](input, config._a, config, token2);
      }
    }
    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    addFormatToken("Y", 0, 0, function() {
      var y2 = this.year();
      return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
    });
    addFormatToken(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function(input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function(input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function makeGetSet(unit2, keepTime) {
      return function(value) {
        if (value != null) {
          set$1$1(this, unit2, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get$1(this, unit2);
        }
      };
    }
    function get$1(mom, unit2) {
      if (!mom.isValid()) {
        return NaN;
      }
      var d2 = mom._d, isUTC = mom._isUTC;
      switch (unit2) {
        case "Milliseconds":
          return isUTC ? d2.getUTCMilliseconds() : d2.getMilliseconds();
        case "Seconds":
          return isUTC ? d2.getUTCSeconds() : d2.getSeconds();
        case "Minutes":
          return isUTC ? d2.getUTCMinutes() : d2.getMinutes();
        case "Hours":
          return isUTC ? d2.getUTCHours() : d2.getHours();
        case "Date":
          return isUTC ? d2.getUTCDate() : d2.getDate();
        case "Day":
          return isUTC ? d2.getUTCDay() : d2.getDay();
        case "Month":
          return isUTC ? d2.getUTCMonth() : d2.getMonth();
        case "FullYear":
          return isUTC ? d2.getUTCFullYear() : d2.getFullYear();
        default:
          return NaN;
      }
    }
    function set$1$1(mom, unit2, value) {
      var d2, isUTC, year, month, date;
      if (!mom.isValid() || isNaN(value)) {
        return;
      }
      d2 = mom._d;
      isUTC = mom._isUTC;
      switch (unit2) {
        case "Milliseconds":
          return void (isUTC ? d2.setUTCMilliseconds(value) : d2.setMilliseconds(value));
        case "Seconds":
          return void (isUTC ? d2.setUTCSeconds(value) : d2.setSeconds(value));
        case "Minutes":
          return void (isUTC ? d2.setUTCMinutes(value) : d2.setMinutes(value));
        case "Hours":
          return void (isUTC ? d2.setUTCHours(value) : d2.setHours(value));
        case "Date":
          return void (isUTC ? d2.setUTCDate(value) : d2.setDate(value));
        case "FullYear":
          break;
        default:
          return;
      }
      year = value;
      month = mom.month();
      date = mom.date();
      date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
      void (isUTC ? d2.setUTCFullYear(year, month, date) : d2.setFullYear(year, month, date));
    }
    function stringGet(units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units]();
      }
      return this;
    }
    function stringSet(units, value) {
      if (typeof units === "object") {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
        for (i = 0; i < prioritizedLen; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value);
        }
      }
      return this;
    }
    function mod(n2, x2) {
      return (n2 % x2 + x2) % x2;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(o) {
        var i;
        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }
        return -1;
      };
    }
    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    addFormatToken("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format2) {
      return this.localeData().monthsShort(this, format2);
    });
    addFormatToken("MMMM", 0, 0, function(format2) {
      return this.localeData().months(this, format2);
    });
    addRegexToken("M", match1to2, match1to2NoLeadingZero);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale2) {
      return locale2.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function(isStrict, locale2) {
      return locale2.monthsRegex(isStrict);
    });
    addParseToken(["M", "MM"], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
      var month = config._locale.monthsParse(input, token2, config._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m2, format2) {
      if (!m2) {
        return isArray(this._months) ? this._months : this._months["standalone"];
      }
      return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
    }
    function localeMonthsShort(m2, format2) {
      if (!m2) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
    }
    function handleStrictParse(monthName, format2, strict) {
      var i, ii2, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
          mom = createUTC([2e3, i]);
          this._shortMonthsParse[i] = this.monthsShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeMonthsParse(monthName, format2, strict) {
      var i, mom, regex;
      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format2, strict);
      }
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp(
            "^" + this.months(mom, "").replace(".", "") + "$",
            "i"
          );
          this._shortMonthsParse[i] = new RegExp(
            "^" + this.monthsShort(mom, "").replace(".", "") + "$",
            "i"
          );
        }
        if (!strict && !this._monthsParse[i]) {
          regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
          this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    }
    function setMonth(mom, value) {
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value === "string") {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value);
          if (!isNumber(value)) {
            return mom;
          }
        }
      }
      var month = value, date = mom.date();
      date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
      void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
      return mom;
    }
    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get$1(this, "Month");
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsShortRegex")) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsRegex")) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a, b2) {
        return b2.length - a.length;
      }
      var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
      for (i = 0; i < 12; i++) {
        mom = createUTC([2e3, i]);
        shortP = regexEscape(this.monthsShort(mom, ""));
        longP = regexEscape(this.months(mom, ""));
        shortPieces.push(shortP);
        longPieces.push(longP);
        mixedPieces.push(longP);
        mixedPieces.push(shortP);
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._monthsShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
    }
    function createDate(y2, m2, d2, h2, M2, s, ms) {
      var date;
      if (y2 < 100 && y2 >= 0) {
        date = new Date(y2 + 400, m2, d2, h2, M2, s, ms);
        if (isFinite(date.getFullYear())) {
          date.setFullYear(y2);
        }
      } else {
        date = new Date(y2, m2, d2, h2, M2, s, ms);
      }
      return date;
    }
    function createUTCDate(y2) {
      var date, args;
      if (y2 < 100 && y2 >= 0) {
        args = Array.prototype.slice.call(arguments);
        args[0] = y2 + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y2);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }
      return date;
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addRegexToken("w", match1to2, match1to2NoLeadingZero);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2, match1to2NoLeadingZero);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(
      ["w", "ww", "W", "WW"],
      function(input, week, config, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      }
    );
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format2) {
      return this.localeData().weekdaysMin(this, format2);
    });
    addFormatToken("ddd", 0, 0, function(format2) {
      return this.localeData().weekdaysShort(this, format2);
    });
    addFormatToken("dddd", 0, 0, function(format2) {
      return this.localeData().weekdays(this, format2);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale2) {
      return locale2.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function(isStrict, locale2) {
      return locale2.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function(isStrict, locale2) {
      return locale2.weekdaysRegex(isStrict);
    });
    addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
      var weekday = config._locale.weekdaysParse(input, token2, config._strict);
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
      week[token2] = toInt(input);
    });
    function parseWeekday(input, locale2) {
      if (typeof input !== "string") {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale2.weekdaysParse(input);
      if (typeof input === "number") {
        return input;
      }
      return null;
    }
    function parseIsoWeekday(input, locale2) {
      if (typeof input === "string") {
        return locale2.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }
    function shiftWeekdays(ws, n2) {
      return ws.slice(n2, 7).concat(ws.slice(0, n2));
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m2, format2) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
      return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
    }
    function localeWeekdaysShort(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format2, strict) {
      var i, ii2, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];
        for (i = 0; i < 7; ++i) {
          mom = createUTC([2e3, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(
            mom,
            ""
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeWeekdaysParse(weekdayName, format2, strict) {
      var i, mom, regex;
      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format2, strict);
      }
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp(
            "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._shortWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._minWeekdaysParse[i] = new RegExp(
            "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
        }
        if (!this._weekdaysParse[i]) {
          regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
          this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = get$1(this, "Day");
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, "d");
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysShortRegex")) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysMinRegex")) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }
    function computeWeekdaysParse() {
      function cmpLenRev(a, b2) {
        return b2.length - a.length;
      }
      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
      for (i = 0; i < 7; i++) {
        mom = createUTC([2e3, 1]).day(i);
        minp = regexEscape(this.weekdaysMin(mom, ""));
        shortp = regexEscape(this.weekdaysShort(mom, ""));
        longp = regexEscape(this.weekdays(mom, ""));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp(
        "^(" + minPieces.join("|") + ")",
        "i"
      );
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    function kFormat() {
      return this.hours() || 24;
    }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken("Hmm", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token2, lowercase) {
      addFormatToken(token2, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase
        );
      });
    }
    meridiem("a", true);
    meridiem("A", false);
    function matchMeridiem(isStrict, locale2) {
      return locale2._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2, match1to2HasZero);
    addRegexToken("h", match1to2, match1to2NoLeadingZero);
    addRegexToken("k", match1to2, match1to2NoLeadingZero);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function(input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function(input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(["h", "hh"], function(input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmm", function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmmss", function(input, array, config) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("Hmm", function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function(input, array, config) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours2, minutes2, isLower) {
      if (hours2 > 11) {
        return isLower ? "pm" : "PM";
      } else {
        return isLower ? "am" : "AM";
      }
    }
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    };
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
      var i, minl = Math.min(arr1.length, arr2.length);
      for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }
      return minl;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names2) {
      var i = 0, j, next2, locale2, split;
      while (i < names2.length) {
        split = normalizeLocale(names2[i]).split("-");
        j = split.length;
        next2 = normalizeLocale(names2[i + 1]);
        next2 = next2 ? next2.split("-") : null;
        while (j > 0) {
          locale2 = loadLocale(split.slice(0, j).join("-"));
          if (locale2) {
            return locale2;
          }
          if (next2 && next2.length >= j && commonPrefix(split, next2) >= j - 1) {
            break;
          }
          j--;
        }
        i++;
      }
      return globalLocale;
    }
    function isLocaleNameSane(name) {
      return !!(name && name.match("^[^/\\\\]*$"));
    }
    function loadLocale(name) {
      var oldLocale = null, aliasedRequire;
      if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale(oldLocale);
        } catch (e2) {
          locales[name] = null;
        }
      }
      return locales[name];
    }
    function getSetGlobalLocale(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              "Locale " + key + " not found. Did you forget to load it?"
            );
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, config) {
      if (config !== null) {
        var locale2, parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          );
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale2 = loadLocale(config.parentLocale);
            if (locale2 != null) {
              parentConfig = locale2._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                name,
                config
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x2) {
            defineLocale(x2.name, x2.config);
          });
        }
        getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function updateLocale(name, config) {
      if (config != null) {
        var locale2, tmpLocale, parentConfig = baseConfig;
        if (locales[name] != null && locales[name].parentLocale != null) {
          locales[name].set(mergeConfigs(locales[name]._config, config));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          if (tmpLocale == null) {
            config.abbr = name;
          }
          locale2 = new Locale(config);
          locale2.parentLocale = locales[name];
          locales[name] = locale2;
        }
        getSetGlobalLocale(name);
      } else {
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }
    function getLocale(key) {
      var locale2;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray(key)) {
        locale2 = loadLocale(key);
        if (locale2) {
          return locale2;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    function listLocales() {
      return keys$1(locales);
    }
    function checkOverflow(m2) {
      var overflow, a = m2._a;
      if (a && getParsingFlags(m2).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m2).overflow = overflow;
      }
      return m2;
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, false],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, false],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, false],
      ["YYYY", /\d{4}/, false]
    ], isoTimes = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function configFromISO(config) {
      var i, l2, string = config._i, match5 = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
      if (match5) {
        getParsingFlags(config).iso = true;
        for (i = 0, l2 = isoDatesLen; i < l2; i++) {
          if (isoDates[i][1].exec(match5[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config._isValid = false;
          return;
        }
        if (match5[3]) {
          for (i = 0, l2 = isoTimesLen; i < l2; i++) {
            if (isoTimes[i][1].exec(match5[3])) {
              timeFormat = (match5[2] || " ") + isoTimes[i][0];
              break;
            }
          }
          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }
        if (match5[4]) {
          if (tzRegex.exec(match5[4])) {
            tzFormat = "Z";
          } else {
            config._isValid = false;
            return;
          }
        }
        config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
      ];
      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }
      return result;
    }
    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2e3 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }
    function preprocessRFC2822(s) {
      return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
          parsedInput[0],
          parsedInput[1],
          parsedInput[2]
        ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }
      return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        return 0;
      } else {
        var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
        return h2 * 60 + m2;
      }
    }
    function configFromRFC2822(config) {
      var match5 = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
      if (match5) {
        parsedArray = extractFromRFC2822Strings(
          match5[4],
          match5[3],
          match5[2],
          match5[5],
          match5[6],
          match5[7]
        );
        if (!checkWeekday(match5[1], parsedArray, config)) {
          return;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match5[8], match5[9], match5[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    }
    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);
      if (matched !== null) {
        config._d = /* @__PURE__ */ new Date(+matched[1]);
        return;
      }
      configFromISO(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      configFromRFC2822(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      if (config._strict) {
        config._isValid = false;
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    hooks.createFromInputFallback = deprecate(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(config) {
        config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
      }
    );
    function defaults(a, b2, c2) {
      if (a != null) {
        return a;
      }
      if (b2 != null) {
        return b2;
      }
      return c2;
    }
    function currentDateArray(config) {
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate()
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config) {
      var i, date, input = [], currentDate, expectedWeekday, yearToUse;
      if (config._d) {
        return;
      }
      currentDate = currentDateArray(config);
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }
      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      }
      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      }
      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }
      config._d = (config._useUTC ? createUTCDate : createDate).apply(
        null,
        input
      );
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }
      if (config._nextDay) {
        config._a[HOUR] = 24;
      }
      if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }
    function dayOfYearFromWeekInfo(config) {
      var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w2 = config._w;
      if (w2.GG != null || w2.W != null || w2.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(
          w2.GG,
          config._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year
        );
        week = defaults(w2.W, 1);
        weekday = defaults(w2.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
        week = defaults(w2.w, curWeek.week);
        if (w2.d != null) {
          weekday = w2.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w2.e != null) {
          weekday = w2.e + dow;
          if (w2.e < 0 || w2.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    }
    hooks.ISO_8601 = function() {
    };
    hooks.RFC_2822 = function() {
    };
    function configFromStringAndFormat(config) {
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }
      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;
      var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
      tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      tokenLen = tokens2.length;
      for (i = 0; i < tokenLen; i++) {
        token2 = tokens2[i];
        parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length
          );
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token2]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token2);
          }
          addTimeToArrayFromToken(token2, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token2);
        }
      }
      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      }
      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
      }
      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      config._a[HOUR] = meridiemFixWrap(
        config._locale,
        config._a[HOUR],
        config._meridiem
      );
      era = getParsingFlags(config).era;
      if (era !== null) {
        config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
      }
      configFromArray(config);
      checkOverflow(config);
    }
    function meridiemFixWrap(locale2, hour, meridiem2) {
      var isPm;
      if (meridiem2 == null) {
        return hour;
      }
      if (locale2.meridiemHour != null) {
        return locale2.meridiemHour(hour, meridiem2);
      } else if (locale2.isPM != null) {
        isPm = locale2.isPM(meridiem2);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
      if (configfLen === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (i = 0; i < configfLen; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (isValid(tempConfig)) {
          validFormatFound = true;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (!bestFormatIsValid) {
          if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }
      extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
      if (config._d) {
        return;
      }
      var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
      config._a = map(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function(obj) {
          return obj && parseInt(obj, 10);
        }
      );
      configFromArray(config);
    }
    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
        res.add(1, "d");
        res._nextDay = void 0;
      }
      return res;
    }
    function prepareConfig(config) {
      var input = config._i, format2 = config._f;
      config._locale = config._locale || getLocale(config._l);
      if (input === null || format2 === void 0 && input === "") {
        return createInvalid({ nullInput: true });
      }
      if (typeof input === "string") {
        config._i = input = config._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format2)) {
        configFromStringAndArray(config);
      } else if (format2) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }
      if (!isValid(config)) {
        config._d = null;
      }
      return config;
    }
    function configFromInput(config) {
      var input = config._i;
      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === "string") {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject$1(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
      var c2 = {};
      if (format2 === true || format2 === false) {
        strict = format2;
        format2 = void 0;
      }
      if (locale2 === true || locale2 === false) {
        strict = locale2;
        locale2 = void 0;
      }
      if (isObject$1(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = void 0;
      }
      c2._isAMomentObject = true;
      c2._useUTC = c2._isUTC = isUTC;
      c2._l = locale2;
      c2._i = input;
      c2._f = format2;
      c2._strict = strict;
      return createFromConfig(c2);
    }
    function createLocal(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, false);
    }
    var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }
    ), prototypeMax = deprecate(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }
    );
    function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isBefore", args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isAfter", args);
    }
    var now = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    };
    var ordering = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function isDurationValid(m2) {
      var key, unitHasDecimal = false, i, orderLen = ordering.length;
      for (key in m2) {
        if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
          return false;
        }
      }
      for (i = 0; i < orderLen; ++i) {
        if (m2[ordering[i]]) {
          if (unitHasDecimal) {
            return false;
          }
          if (parseFloat(m2[ordering[i]]) !== toInt(m2[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }
      return true;
    }
    function isValid$1() {
      return this._isValid;
    }
    function createInvalid$1() {
      return createDuration(NaN);
    }
    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput);
      this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
      minutes2 * 6e4 + // 1000 * 60
      hours2 * 1e3 * 60 * 60;
      this._days = +days2 + weeks2 * 7;
      this._months = +months2 + quarters * 3 + years2 * 12;
      this._data = {};
      this._locale = getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
      for (i = 0; i < len; i++) {
        if (toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function offset(token2, separator) {
      addFormatToken(token2, 0, 0, function() {
        var offset2 = this.utcOffset(), sign2 = "+";
        if (offset2 < 0) {
          offset2 = -offset2;
          sign2 = "-";
        }
        return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
      });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function(input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = (string || "").match(matcher), chunk, parts, minutes2;
      if (matches === null) {
        return null;
      }
      chunk = matches[matches.length - 1] || [];
      parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
      minutes2 = +(parts[1] * 60) + toInt(parts[2]);
      return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
    }
    function cloneWithOffset(input, model) {
      var res, diff2;
      if (model._isUTC) {
        res = model.clone();
        diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        res._d.setTime(res._d.valueOf() + diff2);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }
    function getDateOffset(m2) {
      return -Math.round(m2._d.getTimezoneOffset());
    }
    hooks.updateOffset = function() {
    };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset2 = this._offset || 0, localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === "string") {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, "m");
        }
        if (offset2 !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(
              this,
              createDuration(input - offset2, "m"),
              1,
              false
            );
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset2 : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== "string") {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), "m");
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === "string") {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c2 = {}, other;
      copyConfig(c2, this);
      c2 = prepareConfig(c2);
      if (c2._a) {
        other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
        this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
      var duration = input, match5 = null, sign2, ret, diffRes;
      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
          duration[key] = +input;
        } else {
          duration.milliseconds = +input;
        }
      } else if (match5 = aspNetRegex.exec(input)) {
        sign2 = match5[1] === "-" ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match5[DATE]) * sign2,
          h: toInt(match5[HOUR]) * sign2,
          m: toInt(match5[MINUTE]) * sign2,
          s: toInt(match5[SECOND]) * sign2,
          ms: toInt(absRound(match5[MILLISECOND] * 1e3)) * sign2
          // the millisecond decimal point is included in the match
        };
      } else if (match5 = isoRegex.exec(input)) {
        sign2 = match5[1] === "-" ? -1 : 1;
        duration = {
          y: parseIso(match5[2], sign2),
          M: parseIso(match5[3], sign2),
          w: parseIso(match5[4], sign2),
          d: parseIso(match5[5], sign2),
          h: parseIso(match5[6], sign2),
          m: parseIso(match5[7], sign2),
          s: parseIso(match5[8], sign2)
        };
      } else if (duration == null) {
        duration = {};
      } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
        diffRes = momentsDifference(
          createLocal(duration.from),
          createLocal(duration.to)
        );
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }
      ret = new Duration(duration);
      if (isDuration(input) && hasOwnProp(input, "_locale")) {
        ret._locale = input._locale;
      }
      if (isDuration(input) && hasOwnProp(input, "_isValid")) {
        ret._isValid = input._isValid;
      }
      return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign2) {
      var res = inp && parseFloat(inp.replace(",", "."));
      return (isNaN(res) ? 0 : res) * sign2;
    }
    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, "M").isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +base.clone().add(res.months, "M");
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur, tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          );
          tmp = val;
          val = period;
          period = tmp;
        }
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (months2) {
        setMonth(mom, get$1(mom, "Month") + months2 * isAdding);
      }
      if (days2) {
        set$1$1(mom, "Date", get$1(mom, "Date") + days2 * isAdding);
      }
      if (milliseconds2) {
        mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days2 || months2);
      }
    }
    var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
    function isString(input) {
      return typeof input === "string" || input instanceof String;
    }
    function isMomentInput(input) {
      return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
    }
    function isMomentInputObject(input) {
      var objectTest = isObject$1(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], i, property, propertyLen = properties.length;
      for (i = 0; i < propertyLen; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input), dataTypeTest = false;
      if (arrayTest) {
        dataTypeTest = input.filter(function(item) {
          return !isNumber(item) && isString(input);
        }).length === 0;
      }
      return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
      var objectTest = isObject$1(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], i, property;
      for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now2) {
      var diff2 = myMoment.diff(now2, "days", true);
      return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
    }
    function calendar$1(time, formats) {
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = void 0;
          formats = void 0;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = void 0;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = void 0;
        }
      }
      var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
      return this.format(
        output || this.localeData().calendar(format2, this, createLocal(now2))
      );
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }
    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }
    function isBetween(from2, to2, units, inclusivity) {
      var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }
      inclusivity = inclusivity || "()";
      return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input), inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }
    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
      var that, zoneDelta, output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);
      switch (units) {
        case "year":
          output = monthDiff(this, that) / 12;
          break;
        case "month":
          output = monthDiff(this, that);
          break;
        case "quarter":
          output = monthDiff(this, that) / 3;
          break;
        case "second":
          output = (this - that) / 1e3;
          break;
        case "minute":
          output = (this - that) / 6e4;
          break;
        case "hour":
          output = (this - that) / 36e5;
          break;
        case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;
        case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;
        default:
          output = this - that;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b2) {
      if (a.date() < b2.date()) {
        return -monthDiff(b2, a);
      }
      var wholeMonthDiff = (b2.year() - a.year()) * 12 + (b2.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
      if (b2 - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
        adjust = (b2 - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
        adjust = (b2 - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
      if (m2.year() < 0 || m2.year() > 9999) {
        return formatMoment(
          m2,
          utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
        }
      }
      return formatMoment(
        m2,
        utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function inspect() {
      if (!this.isValid()) {
        return "moment.invalid(/* " + this._i + " */)";
      }
      var func = "moment", zone = "", prefix, year, datetime, suffix;
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
        zone = "Z";
      }
      prefix = "[" + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
      datetime = "-MM-DD[T]HH:mm:ss.SSS";
      suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }
    function from$1(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }
    function locale$4(key) {
      var newLocaleData;
      if (key === void 0) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(key) {
        if (key === void 0) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }
    );
    function localeData() {
      return this._locale;
    }
    var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return new Date(y2, m2, d2).valueOf();
      }
    }
    function utcStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y2, m2, d2);
      }
    }
    function startOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year(), 0, 1);
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;
        case "hour":
          time = this._d.valueOf();
          time -= mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          );
          break;
        case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;
        case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function endOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          ) - 1;
          break;
        case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;
        case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function toDate() {
      return new Date(this.valueOf());
    }
    function toArray() {
      var m2 = this;
      return [
        m2.year(),
        m2.month(),
        m2.date(),
        m2.hour(),
        m2.minute(),
        m2.second(),
        m2.millisecond()
      ];
    }
    function toObject() {
      var m2 = this;
      return {
        years: m2.year(),
        months: m2.month(),
        date: m2.date(),
        hours: m2.hours(),
        minutes: m2.minutes(),
        seconds: m2.seconds(),
        milliseconds: m2.milliseconds()
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
      return isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", ["y", 1], "yo", "eraYear");
    addFormatToken("y", ["yy", 2], 0, "eraYear");
    addFormatToken("y", ["yyy", 3], 0, "eraYear");
    addFormatToken("y", ["yyyy", 4], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(input, array, config, token2) {
        var era = config._locale.erasParse(input, token2, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      }
    );
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
    addParseToken(["yo"], function(input, array, config, token2) {
      var match5;
      if (config._locale._eraYearOrdinalRegex) {
        match5 = input.match(config._locale._eraYearOrdinalRegex);
      }
      if (config._locale.eraYearOrdinalParse) {
        array[YEAR] = config._locale.eraYearOrdinalParse(input, match5);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });
    function localeEras(m2, format2) {
      var i, l2, date, eras = this._eras || getLocale("en")._eras;
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        switch (typeof eras[i].since) {
          case "string":
            date = hooks(eras[i].since).startOf("day");
            eras[i].since = date.valueOf();
            break;
        }
        switch (typeof eras[i].until) {
          case "undefined":
            eras[i].until = Infinity;
            break;
          case "string":
            date = hooks(eras[i].until).startOf("day").valueOf();
            eras[i].until = date.valueOf();
            break;
        }
      }
      return eras;
    }
    function localeErasParse(eraName, format2, strict) {
      var i, l2, eras = this.eras(), name, abbr, narrow;
      eraName = eraName.toUpperCase();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();
        if (strict) {
          switch (format2) {
            case "N":
            case "NN":
            case "NNN":
              if (abbr === eraName) {
                return eras[i];
              }
              break;
            case "NNNN":
              if (name === eraName) {
                return eras[i];
              }
              break;
            case "NNNNN":
              if (narrow === eraName) {
                return eras[i];
              }
              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i];
        }
      }
    }
    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? 1 : -1;
      if (year === void 0) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }
    function getEraName() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].name;
        }
      }
      return "";
    }
    function getEraNarrow() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].narrow;
        }
      }
      return "";
    }
    function getEraAbbr() {
      var i, l2, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].abbr;
        }
      }
      return "";
    }
    function getEraYear() {
      var i, l2, dir, val, eras = this.localeData().eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        dir = eras[i].since <= eras[i].until ? 1 : -1;
        val = this.clone().startOf("day").valueOf();
        if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
          return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
      }
      return this.year();
    }
    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNameRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, "_erasAbbrRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNarrowRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale2) {
      return locale2.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale2) {
      return locale2.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale2) {
      return locale2.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale2) {
      return locale2._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
      var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l2, erasName, erasAbbr, erasNarrow, eras = this.eras();
      for (i = 0, l2 = eras.length; i < l2; ++i) {
        erasName = regexEscape(eras[i].name);
        erasAbbr = regexEscape(eras[i].abbr);
        erasNarrow = regexEscape(eras[i].narrow);
        namePieces.push(erasName);
        abbrPieces.push(erasAbbr);
        narrowPieces.push(erasNarrow);
        mixedPieces.push(erasName);
        mixedPieces.push(erasAbbr);
        mixedPieces.push(erasNarrow);
      }
      this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
      this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
      this._erasNarrowRegex = new RegExp(
        "^(" + narrowPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token2, getter) {
      addFormatToken(0, [token2, token2.length], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(input, week, config, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      }
    );
    addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
      week[token2] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addRegexToken("D", match1to2, match1to2NoLeadingZero);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale2) {
      return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function(input, array, config) {
      config._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addRegexToken("m", match1to2, match1to2HasZero);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addRegexToken("s", match1to2, match1to2HasZero);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    });
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token$1, getSetMillisecond;
    for (token$1 = "SSSS"; token$1.length <= 9; token$1 += "S") {
      addRegexToken(token$1, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(("0." + input) * 1e3);
    }
    for (token$1 = "S"; token$1.length <= 9; token$1 += "S") {
      addParseToken(token$1, parseMs);
    }
    getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
      return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from$1;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale$4;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) {
      proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
      "dates accessor is deprecated. Use date instead.",
      getSetDayOfMonth
    );
    proto.months = deprecate(
      "months accessor is deprecated. Use month instead",
      getSetMonth
    );
    proto.years = deprecate(
      "years accessor is deprecated. Use year instead",
      getSetYear
    );
    proto.zone = deprecate(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      getSetZone
    );
    proto.isDSTShifted = deprecate(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      isDaylightSavingTimeShifted
    );
    function createUnix(input) {
      return createLocal(input * 1e3);
    }
    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
      return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set$1;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1$1(format2, index, field, setter) {
      var locale2 = getLocale(), utc = createUTC().set(setter, index);
      return locale2[field](utc, format2);
    }
    function listMonthsImpl(format2, index, field) {
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
      if (index != null) {
        return get$1$1(format2, index, field, "month");
      }
      var i, out = [];
      for (i = 0; i < 12; i++) {
        out[i] = get$1$1(format2, i, field, "month");
      }
      return out;
    }
    function listWeekdaysImpl(localeSorted, format2, index, field) {
      if (typeof localeSorted === "boolean") {
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      } else {
        format2 = localeSorted;
        index = format2;
        localeSorted = false;
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      }
      var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
      if (index != null) {
        return get$1$1(format2, (index + shift) % 7, field, "day");
      }
      for (i = 0; i < 7; i++) {
        out[i] = get$1$1(format2, (i + shift) % 7, field, "day");
      }
      return out;
    }
    function listMonths(format2, index) {
      return listMonthsImpl(format2, index, "months");
    }
    function listMonthsShort(format2, index) {
      return listMonthsImpl(format2, index, "monthsShort");
    }
    function listWeekdays(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
      eras: [
        {
          since: "0001-01-01",
          until: Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
        return number + output;
      }
    });
    hooks.lang = deprecate(
      "moment.lang is deprecated. Use moment.locale instead.",
      getSetGlobalLocale
    );
    hooks.langData = deprecate(
      "moment.langData is deprecated. Use moment.localeData instead.",
      getLocale
    );
    var mathAbs = Math.abs;
    function abs$1() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    }
    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    }
    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
      if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
        milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
        days2 = 0;
        months2 = 0;
      }
      data.milliseconds = milliseconds2 % 1e3;
      seconds2 = absFloor(milliseconds2 / 1e3);
      data.seconds = seconds2 % 60;
      minutes2 = absFloor(seconds2 / 60);
      data.minutes = minutes2 % 60;
      hours2 = absFloor(minutes2 / 60);
      data.hours = hours2 % 24;
      days2 += absFloor(hours2 / 24);
      monthsFromDays = absFloor(daysToMonths(days2));
      months2 += monthsFromDays;
      days2 -= absCeil(monthsToDays(monthsFromDays));
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      data.days = days2;
      data.months = months2;
      data.years = years2;
      return this;
    }
    function daysToMonths(days2) {
      return days2 * 4800 / 146097;
    }
    function monthsToDays(months2) {
      return months2 * 146097 / 4800;
    }
    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }
      var days2, months2, milliseconds2 = this._milliseconds;
      units = normalizeUnits(units);
      if (units === "month" || units === "quarter" || units === "year") {
        days2 = this._days + milliseconds2 / 864e5;
        months2 = this._months + daysToMonths(days2);
        switch (units) {
          case "month":
            return months2;
          case "quarter":
            return months2 / 3;
          case "year":
            return months2 / 12;
        }
      } else {
        days2 = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case "week":
            return days2 / 7 + milliseconds2 / 6048e5;
          case "day":
            return days2 + milliseconds2 / 864e5;
          case "hour":
            return days2 * 24 + milliseconds2 / 36e5;
          case "minute":
            return days2 * 1440 + milliseconds2 / 6e4;
          case "second":
            return days2 * 86400 + milliseconds2 / 1e3;
          case "millisecond":
            return Math.floor(days2 * 864e5) + milliseconds2;
          default:
            throw new Error("Unknown unit " + units);
        }
      }
    }
    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
    function clone$1() {
      return createDuration(this);
    }
    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + "s"]() : NaN;
    }
    function makeGetter(name) {
      return function() {
        return this.isValid() ? this._data[name] : NaN;
      };
    }
    var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
      return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
      var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
      if (thresholds2.w != null) {
        a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
      }
      a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale2;
      return substituteTimeAgo.apply(null, a);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === void 0) {
        return round;
      }
      if (typeof roundingFunction === "function") {
        round = roundingFunction;
        return true;
      }
      return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === void 0) {
        return false;
      }
      if (limit === void 0) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === "s") {
        thresholds.ss = limit - 1;
      }
      return true;
    }
    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var withSuffix = false, th2 = thresholds, locale2, output;
      if (typeof argWithSuffix === "object") {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }
      if (typeof argWithSuffix === "boolean") {
        withSuffix = argWithSuffix;
      }
      if (typeof argThresholds === "object") {
        th2 = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
          th2.ss = argThresholds.s - 1;
        }
      }
      locale2 = this.localeData();
      output = relativeTime$1(this, !withSuffix, th2, locale2);
      if (withSuffix) {
        output = locale2.pastFuture(+this, output);
      }
      return locale2.postformat(output);
    }
    var abs$1$1 = Math.abs;
    function sign(x2) {
      return (x2 > 0) - (x2 < 0) || +x2;
    }
    function toISOString$1() {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var seconds2 = abs$1$1(this._milliseconds) / 1e3, days2 = abs$1$1(this._days), months2 = abs$1$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
      if (!total) {
        return "P0D";
      }
      minutes2 = absFloor(seconds2 / 60);
      hours2 = absFloor(minutes2 / 60);
      seconds2 %= 60;
      minutes2 %= 60;
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
      totalSign = total < 0 ? "-" : "";
      ymSign = sign(this._months) !== sign(total) ? "-" : "";
      daysSign = sign(this._days) !== sign(total) ? "-" : "";
      hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
      return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs$1;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale$4;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      toISOString$1
    );
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config) {
      config._d = new Date(parseFloat(input) * 1e3);
    });
    addParseToken("x", function(input, array, config) {
      config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.30.1";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    };
    var yellow$1 = {
      "1": "#FFF7EB",
      "2": "#FFBB33",
      "3": "#FF9900",
      "4": "#EB8120",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "#fef6c8",
      "6": "#f99784",
      "7": "#FABF00"
    };
    var red$1 = {
      "1": "#FFF1F2",
      "2": "#FF808A",
      "3": "#FF5F66",
      "4": "#F53F3F",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "#dc0407",
      "6": "#F12B43"
    };
    var green$1 = {
      "1": "#F1F7EA",
      "2": "#95DB42",
      "3": "#72B22F",
      "4": "#529908",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "#f3feee",
      "6": "#c5f89b",
      "7": "#06A561",
      "8": "#33D65F",
      "9": "#6ACC48"
    };
    var mint = {
      "1": "#E9F7F9",
      "2": "#77D5D4",
      "3": "#14C7B8",
      "4": "#00A590",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "#008489"
    };
    var purple$1 = {
      "1": "#EFEBFF",
      "2": "#887DFD",
      "3": "#5348CE",
      "4": "#352BA5"
    };
    var gray = {
      // 浅色背景
      "1": "#F9FAFC",
      // 深色背景/浅色分割线、边框
      "2": "#F0F1F5",
      // 深色色分割线、边框
      "3": "#E5E6EB",
      // 置灰/引导信息
      "4": "#C9CDD4",
      // 次要信息/辅助说明
      "5": "#86909C",
      // 次强调信息
      "6": "#4E5969",
      // 强调信息、基础的文字颜色
      "7": "#1D2129",
      // 以下为不在设计规范中但UI使用的颜色
      "8": "#2c3e50",
      "9": "#d0d0d0",
      "10": "#d3dce6",
      "11": "#99a9bf",
      "12": "#97a8be",
      "13": "#5a5e66",
      "14": "#2b2f3a",
      "15": "#676a6c",
      "16": "#707070",
      "17": "#484848",
      "18": "#bdc1c8",
      "19": "#D9E1EC",
      "20": "#1A1819",
      "21": "#131523",
      "22": "#5A607F",
      "23": "#888F9E",
      "24": "#535C6B",
      "25": "#969799",
      "26": "#ECF2FF",
      "27": "#1D2026",
      "28": "#586070",
      "29": "#8D97A8",
      "30": "#F5F8FC",
      "31": "#323233",
      "32": "#F5F5F5",
      "33": "#1c1c1e",
      "34": "#3a3a3c",
      "35": "#6C7294",
      "36": "#5C5C5C",
      "37": "#F5F6FA",
      "38": "#E2E2E2",
      "39": "#BBBDBF",
      "40": "#d9d9d9",
      "41": "#d4d4d4",
      "42": "#F2F4FD",
      "43": "#4f4f4f",
      "44": "#F7F8FC",
      "45": "#F7F8FA",
      "46": "#282F38",
      "47": "#F4F5F7",
      "48": "#8C94A3",
      "49": "#EDF0F7",
      "50": "#F8F8F8",
      "51": "#e1e8ee",
      "52": "#f3f4f6",
      "53": "#ebedf0",
      "54": "#EAEDF0",
      "55": "#7f8fa4",
      "56": "#f4f4f4",
      "57": "#e6e6e7"
    };
    var brand = {
      // 浅色背景
      "1": "#F2F5FD",
      // 特殊场景
      "2": "#ECF1FD",
      // 填充/悬浮
      "3": "#3775FC",
      // 填充/常规
      "4": "#105CFF",
      // 品牌色/字体/点击
      "5": "#0A4CDE",
      // 深色填充/字体
      "6": "#18284A",
      // 以下为不在设计规范中但UI使用的颜色
      "7": "#F7F9FF",
      "8": "#bcd1ff",
      "9": "#337ab7",
      "10": "#4662e6",
      "11": "#476DAB",
      "12": "#5a89cf",
      "13": "#CEDDFF",
      "14": "#94BFFF",
      "15": "#a9e6f8",
      "16": "#3f9fe9",
      "17": "#1a5da1",
      "18": "#1E5EFF",
      "19": "#2457FF",
      "20": "#E6F7FF"
    };
    var defaultThemeColors = {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      yellow: yellow$1,
      red: red$1,
      green: green$1,
      mint,
      purple: purple$1,
      gray,
      brand
    };
    var yellow2 = {
      "1": "基础黄 1",
      "2": "基础黄 2",
      "3": "基础黄 3/警告色",
      "4": "基础黄 4",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "不在设计规范中但UI使用",
      "6": "不在设计规范中但UI使用",
      "7": "不在设计规范中但UI使用"
    };
    var red2 = {
      "1": "基础红 1",
      "2": "基础红 2",
      "3": "基础红 3/错误色",
      "4": "基础红 4",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "不在设计规范中但UI使用",
      "6": "不在设计规范中但UI使用"
    };
    var green2 = {
      "1": "基础绿 1",
      "2": "基础绿 2",
      "3": "基础绿 3/成功色",
      "4": "基础绿 4",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "不在设计规范中但UI使用",
      "6": "不在设计规范中但UI使用",
      "7": "不在设计规范中但UI使用",
      "8": "不在设计规范中但UI使用",
      "9": "不在设计规范中但UI使用"
    };
    var mint2 = {
      "1": "基础青 1",
      "2": "基础青 2",
      "3": "基础青 3",
      "4": "基础青 4",
      // 以下为不在设计规范中但UI使用的颜色
      "5": "不在设计规范中但UI使用"
    };
    var purple2 = {
      "1": "基础紫 1",
      "2": "基础紫 2",
      "3": "基础紫 3",
      "4": "基础紫 4"
    };
    var gray2 = {
      // 浅色背景
      "1": "浅色背景",
      // 深色背景/浅色分割线、边框
      "2": "深色背景/浅色分割线、边框",
      // 深色色分割线、边框
      "3": "深色色分割线、边框",
      // 置灰/引导信息
      "4": "置灰/引导信息",
      // 次要信息/辅助说明
      "5": "次要信息/辅助说明",
      // 次强调信息
      "6": "次强调信息",
      // 强调信息、基础的文字颜色
      "7": "强调信息、基础的文字颜色",
      // 以下为不在设计规范中但UI使用的颜色
      "8": "不在设计规范中但UI使用",
      "9": "不在设计规范中但UI使用",
      "10": "不在设计规范中但UI使用",
      "11": "不在设计规范中但UI使用",
      "12": "不在设计规范中但UI使用",
      "13": "不在设计规范中但UI使用",
      "14": "不在设计规范中但UI使用",
      "15": "不在设计规范中但UI使用",
      "16": "不在设计规范中但UI使用",
      "17": "不在设计规范中但UI使用",
      "18": "不在设计规范中但UI使用",
      "19": "不在设计规范中但UI使用",
      "20": "不在设计规范中但UI使用",
      "21": "不在设计规范中但UI使用",
      "22": "不在设计规范中但UI使用",
      "23": "不在设计规范中但UI使用",
      "24": "不在设计规范中但UI使用",
      "25": "不在设计规范中但UI使用",
      "26": "不在设计规范中但UI使用",
      "27": "不在设计规范中但UI使用",
      "28": "不在设计规范中但UI使用",
      "29": "不在设计规范中但UI使用",
      "30": "不在设计规范中但UI使用",
      "31": "不在设计规范中但UI使用",
      "32": "不在设计规范中但UI使用",
      "33": "不在设计规范中但UI使用",
      "34": "不在设计规范中但UI使用",
      "35": "不在设计规范中但UI使用",
      "36": "不在设计规范中但UI使用",
      "37": "不在设计规范中但UI使用",
      "38": "不在设计规范中但UI使用",
      "39": "不在设计规范中但UI使用",
      "40": "不在设计规范中但UI使用",
      "41": "不在设计规范中但UI使用",
      "42": "不在设计规范中但UI使用",
      "43": "不在设计规范中但UI使用",
      "44": "不在设计规范中但UI使用",
      "45": "不在设计规范中但UI使用",
      "46": "不在设计规范中但UI使用",
      "47": "不在设计规范中但UI使用",
      "48": "不在设计规范中但UI使用",
      "49": "不在设计规范中但UI使用",
      "50": "不在设计规范中但UI使用",
      "51": "不在设计规范中但UI使用",
      "52": "不在设计规范中但UI使用",
      "53": "不在设计规范中但UI使用",
      "54": "不在设计规范中但UI使用",
      "55": "不在设计规范中但UI使用",
      "56": "不在设计规范中但UI使用",
      "57": "不在设计规范中但UI使用"
    };
    var brand2 = {
      // 浅色背景
      "1": "浅色背景",
      // 特殊场景
      "2": "特殊场景",
      // 填充/悬浮
      "3": "填充/悬浮",
      // 填充/常规
      "4": "填充/常规",
      // 品牌色/字体/点击
      "5": "品牌色/字体/点击变换",
      // 深色填充/字体
      "6": "深色填充/字体",
      // 以下为不在设计规范中但UI使用的颜色
      "7": "不在设计规范中但UI使用",
      "8": "不在设计规范中但UI使用",
      "9": "不在设计规范中但UI使用",
      "10": "不在设计规范中但UI使用",
      "11": "不在设计规范中但UI使用",
      "12": "不在设计规范中但UI使用",
      "13": "不在设计规范中但UI使用",
      "14": "不在设计规范中但UI使用",
      "15": "不在设计规范中但UI使用",
      "16": "不在设计规范中但UI使用",
      "17": "不在设计规范中但UI使用",
      "18": "不在设计规范中但UI使用",
      "19": "不在设计规范中但UI使用"
    };
    var defaultThemeColorsDescription = {
      transparent: "透明色",
      black: "默认黑",
      white: "默认白",
      yellow: yellow2,
      red: red2,
      green: green2,
      mint: mint2,
      purple: purple2,
      gray: gray2,
      brand: brand2
    };
    var COLOR_PREFIX = "cbd";
    var genThemeColors = (themeColors = defaultThemeColors, mix2 = false, prefix = COLOR_PREFIX) => {
      const resolveThemeColors = mix2 ? extend$1(themeColors, defaultThemeColors) : themeColors;
      let preflights = "";
      const colorsVariable = {};
      const colors = {};
      Object.keys(resolveThemeColors).forEach((k2) => {
        const key = k2;
        if (typeof resolveThemeColors[key] === "string") {
          const resolveKey = `--${prefix}-${k2}`;
          const resolveValue = resolveThemeColors[key];
          colorsVariable[resolveKey] = resolveValue;
          colors[`${prefix}-${k2}`] = `${resolveValue}`;
          preflights = preflights + `
${resolveKey}:${resolveValue};`;
        } else {
          Object.keys(resolveThemeColors[key]).forEach((v2) => {
            const keyV = v2;
            const resolveKey = `--${prefix}-${k2}-${v2}`;
            const resolveValue = resolveThemeColors[key][keyV];
            colorsVariable[resolveKey] = resolveValue;
            colors[`${prefix}-${k2}-${v2}`] = `${resolveValue}`;
            preflights = preflights + `
${resolveKey}:${resolveValue};`;
          });
        }
      });
      const colorsDescription = {};
      Object.keys(defaultThemeColorsDescription).forEach((k2) => {
        const key = k2;
        if (typeof defaultThemeColorsDescription[key] === "string") {
          const resolveKey = `--${prefix}-${k2}`;
          colorsDescription[resolveKey] = defaultThemeColorsDescription[key];
        } else {
          Object.keys(defaultThemeColorsDescription[key]).forEach((v2) => {
            const keyV = v2;
            const resolveKey = `--${prefix}-${k2}-${v2}`;
            colorsDescription[resolveKey] = defaultThemeColorsDescription[key][keyV];
          });
        }
      });
      return {
        preflights,
        colorsVariable,
        colorsDescription,
        colors
      };
    };
    function _typeof$2(obj) {
      "@babel/helpers - typeof";
      return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof$2(obj);
    }
    var trimLeft = /^\s+/;
    var trimRight = /\s+$/;
    function tinycolor(color, opts) {
      color = color ? color : "";
      opts = opts || {};
      if (color instanceof tinycolor) {
        return color;
      }
      if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
      }
      var rgb = inputToRGB$1(color);
      this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;
      if (this._r < 1) this._r = Math.round(this._r);
      if (this._g < 1) this._g = Math.round(this._g);
      if (this._b < 1) this._b = Math.round(this._b);
      this._ok = rgb.ok;
    }
    tinycolor.prototype = {
      isDark: function isDark() {
        return this.getBrightness() < 128;
      },
      isLight: function isLight() {
        return !this.isDark();
      },
      isValid: function isValid2() {
        return this._ok;
      },
      getOriginalInput: function getOriginalInput() {
        return this._originalInput;
      },
      getFormat: function getFormat() {
        return this._format;
      },
      getAlpha: function getAlpha() {
        return this._a;
      },
      getBrightness: function getBrightness() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      },
      getLuminance: function getLuminance() {
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R2, G2, B2;
        RsRGB = rgb.r / 255;
        GsRGB = rgb.g / 255;
        BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) R2 = RsRGB / 12.92;
        else R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        if (GsRGB <= 0.03928) G2 = GsRGB / 12.92;
        else G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        if (BsRGB <= 0.03928) B2 = BsRGB / 12.92;
        else B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
      },
      setAlpha: function setAlpha(value) {
        this._a = boundAlpha$1(value);
        this._roundA = Math.round(100 * this._a) / 100;
        return this;
      },
      toHsv: function toHsv2() {
        var hsv = rgbToHsv$1(this._r, this._g, this._b);
        return {
          h: hsv.h * 360,
          s: hsv.s,
          v: hsv.v,
          a: this._a
        };
      },
      toHsvString: function toHsvString() {
        var hsv = rgbToHsv$1(this._r, this._g, this._b);
        var h2 = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h2 + ", " + s + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s + "%, " + v2 + "%, " + this._roundA + ")";
      },
      toHsl: function toHsl() {
        var hsl = rgbToHsl$1(this._r, this._g, this._b);
        return {
          h: hsl.h * 360,
          s: hsl.s,
          l: hsl.l,
          a: this._a
        };
      },
      toHslString: function toHslString() {
        var hsl = rgbToHsl$1(this._r, this._g, this._b);
        var h2 = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l2 = Math.round(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h2 + ", " + s + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s + "%, " + l2 + "%, " + this._roundA + ")";
      },
      toHex: function toHex2(allow3Char) {
        return rgbToHex$1(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function toHexString(allow3Char) {
        return "#" + this.toHex(allow3Char);
      },
      toHex8: function toHex8(allow4Char) {
        return rgbaToHex$1(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function toHex8String(allow4Char) {
        return "#" + this.toHex8(allow4Char);
      },
      toRgb: function toRgb() {
        return {
          r: Math.round(this._r),
          g: Math.round(this._g),
          b: Math.round(this._b),
          a: this._a
        };
      },
      toRgbString: function toRgbString() {
        return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function toPercentageRgb() {
        return {
          r: Math.round(bound01$1(this._r, 255) * 100) + "%",
          g: Math.round(bound01$1(this._g, 255) * 100) + "%",
          b: Math.round(bound01$1(this._b, 255) * 100) + "%",
          a: this._a
        };
      },
      toPercentageRgbString: function toPercentageRgbString() {
        return this._a == 1 ? "rgb(" + Math.round(bound01$1(this._r, 255) * 100) + "%, " + Math.round(bound01$1(this._g, 255) * 100) + "%, " + Math.round(bound01$1(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01$1(this._r, 255) * 100) + "%, " + Math.round(bound01$1(this._g, 255) * 100) + "%, " + Math.round(bound01$1(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function toName() {
        if (this._a === 0) {
          return "transparent";
        }
        if (this._a < 1) {
          return false;
        }
        return hexNames[rgbToHex$1(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function toFilter(secondColor) {
        var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";
        if (secondColor) {
          var s = tinycolor(secondColor);
          secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
      },
      toString: function toString2(format2) {
        var formatSet = !!format2;
        format2 = format2 || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format2 === "hex" || format2 === "hex6" || format2 === "hex3" || format2 === "hex4" || format2 === "hex8" || format2 === "name");
        if (needsAlphaFormat) {
          if (format2 === "name" && this._a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format2 === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format2 === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format2 === "hex" || format2 === "hex6") {
          formattedString = this.toHexString();
        }
        if (format2 === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format2 === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format2 === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format2 === "name") {
          formattedString = this.toName();
        }
        if (format2 === "hsl") {
          formattedString = this.toHslString();
        }
        if (format2 === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      },
      clone: function clone2() {
        return tinycolor(this.toString());
      },
      _applyModification: function _applyModification(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function lighten() {
        return this._applyModification(_lighten, arguments);
      },
      brighten: function brighten() {
        return this._applyModification(_brighten, arguments);
      },
      darken: function darken() {
        return this._applyModification(_darken, arguments);
      },
      desaturate: function desaturate() {
        return this._applyModification(_desaturate, arguments);
      },
      saturate: function saturate() {
        return this._applyModification(_saturate, arguments);
      },
      greyscale: function greyscale() {
        return this._applyModification(_greyscale, arguments);
      },
      spin: function spin() {
        return this._applyModification(_spin, arguments);
      },
      _applyCombination: function _applyCombination(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function analogous() {
        return this._applyCombination(_analogous, arguments);
      },
      complement: function complement() {
        return this._applyCombination(_complement, arguments);
      },
      monochromatic: function monochromatic() {
        return this._applyCombination(_monochromatic, arguments);
      },
      splitcomplement: function splitcomplement() {
        return this._applyCombination(_splitcomplement, arguments);
      },
      // Disabled until https://github.com/bgrins/TinyColor/issues/254
      // polyad: function (number) {
      //   return this._applyCombination(polyad, [number]);
      // },
      triad: function triad() {
        return this._applyCombination(polyad, [3]);
      },
      tetrad: function tetrad() {
        return this._applyCombination(polyad, [4]);
      }
    };
    tinycolor.fromRatio = function(color, opts) {
      if (_typeof$2(color) == "object") {
        var newColor = {};
        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            } else {
              newColor[i] = convertToPercentage$1(color[i]);
            }
          }
        }
        color = newColor;
      }
      return tinycolor(color, opts);
    };
    function inputToRGB$1(color) {
      var rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      var a = 1;
      var s = null;
      var v2 = null;
      var l2 = null;
      var ok2 = false;
      var format2 = false;
      if (typeof color == "string") {
        color = stringInputToObject$1(color);
      }
      if (_typeof$2(color) == "object") {
        if (isValidCSSUnit$1(color.r) && isValidCSSUnit$1(color.g) && isValidCSSUnit$1(color.b)) {
          rgb = rgbToRgb$1(color.r, color.g, color.b);
          ok2 = true;
          format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit$1(color.h) && isValidCSSUnit$1(color.s) && isValidCSSUnit$1(color.v)) {
          s = convertToPercentage$1(color.s);
          v2 = convertToPercentage$1(color.v);
          rgb = hsvToRgb$1(color.h, s, v2);
          ok2 = true;
          format2 = "hsv";
        } else if (isValidCSSUnit$1(color.h) && isValidCSSUnit$1(color.s) && isValidCSSUnit$1(color.l)) {
          s = convertToPercentage$1(color.s);
          l2 = convertToPercentage$1(color.l);
          rgb = hslToRgb$1(color.h, s, l2);
          ok2 = true;
          format2 = "hsl";
        }
        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }
      a = boundAlpha$1(a);
      return {
        ok: ok2,
        format: color.format || format2,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a
      };
    }
    function rgbToRgb$1(r2, g2, b2) {
      return {
        r: bound01$1(r2, 255) * 255,
        g: bound01$1(g2, 255) * 255,
        b: bound01$1(b2, 255) * 255
      };
    }
    function rgbToHsl$1(r2, g2, b2) {
      r2 = bound01$1(r2, 255);
      g2 = bound01$1(g2, 255);
      b2 = bound01$1(b2, 255);
      var max2 = Math.max(r2, g2, b2), min2 = Math.min(r2, g2, b2);
      var h2, s, l2 = (max2 + min2) / 2;
      if (max2 == min2) {
        h2 = s = 0;
      } else {
        var d2 = max2 - min2;
        s = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
        switch (max2) {
          case r2:
            h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
            break;
          case g2:
            h2 = (b2 - r2) / d2 + 2;
            break;
          case b2:
            h2 = (r2 - g2) / d2 + 4;
            break;
        }
        h2 /= 6;
      }
      return {
        h: h2,
        s,
        l: l2
      };
    }
    function hslToRgb$1(h2, s, l2) {
      var r2, g2, b2;
      h2 = bound01$1(h2, 360);
      s = bound01$1(s, 100);
      l2 = bound01$1(l2, 100);
      function hue2rgb2(p3, q3, t2) {
        if (t2 < 0) t2 += 1;
        if (t2 > 1) t2 -= 1;
        if (t2 < 1 / 6) return p3 + (q3 - p3) * 6 * t2;
        if (t2 < 1 / 2) return q3;
        if (t2 < 2 / 3) return p3 + (q3 - p3) * (2 / 3 - t2) * 6;
        return p3;
      }
      if (s === 0) {
        r2 = g2 = b2 = l2;
      } else {
        var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
        var p2 = 2 * l2 - q2;
        r2 = hue2rgb2(p2, q2, h2 + 1 / 3);
        g2 = hue2rgb2(p2, q2, h2);
        b2 = hue2rgb2(p2, q2, h2 - 1 / 3);
      }
      return {
        r: r2 * 255,
        g: g2 * 255,
        b: b2 * 255
      };
    }
    function rgbToHsv$1(r2, g2, b2) {
      r2 = bound01$1(r2, 255);
      g2 = bound01$1(g2, 255);
      b2 = bound01$1(b2, 255);
      var max2 = Math.max(r2, g2, b2), min2 = Math.min(r2, g2, b2);
      var h2, s, v2 = max2;
      var d2 = max2 - min2;
      s = max2 === 0 ? 0 : d2 / max2;
      if (max2 == min2) {
        h2 = 0;
      } else {
        switch (max2) {
          case r2:
            h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
            break;
          case g2:
            h2 = (b2 - r2) / d2 + 2;
            break;
          case b2:
            h2 = (r2 - g2) / d2 + 4;
            break;
        }
        h2 /= 6;
      }
      return {
        h: h2,
        s,
        v: v2
      };
    }
    function hsvToRgb$1(h2, s, v2) {
      h2 = bound01$1(h2, 360) * 6;
      s = bound01$1(s, 100);
      v2 = bound01$1(v2, 100);
      var i = Math.floor(h2), f2 = h2 - i, p2 = v2 * (1 - s), q2 = v2 * (1 - f2 * s), t2 = v2 * (1 - (1 - f2) * s), mod2 = i % 6, r2 = [v2, q2, p2, p2, t2, v2][mod2], g2 = [t2, v2, v2, q2, p2, p2][mod2], b2 = [p2, p2, t2, v2, v2, q2][mod2];
      return {
        r: r2 * 255,
        g: g2 * 255,
        b: b2 * 255
      };
    }
    function rgbToHex$1(r2, g2, b2, allow3Char) {
      var hex = [pad2$1(Math.round(r2).toString(16)), pad2$1(Math.round(g2).toString(16)), pad2$1(Math.round(b2).toString(16))];
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex$1(r2, g2, b2, a, allow4Char) {
      var hex = [pad2$1(Math.round(r2).toString(16)), pad2$1(Math.round(g2).toString(16)), pad2$1(Math.round(b2).toString(16)), pad2$1(convertDecimalToHex$1(a))];
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToArgbHex(r2, g2, b2, a) {
      var hex = [pad2$1(convertDecimalToHex$1(a)), pad2$1(Math.round(r2).toString(16)), pad2$1(Math.round(g2).toString(16)), pad2$1(Math.round(b2).toString(16))];
      return hex.join("");
    }
    tinycolor.equals = function(color1, color2) {
      if (!color1 || !color2) return false;
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
      return tinycolor.fromRatio({
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
      });
    };
    function _desaturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01$1(hsl.s);
      return tinycolor(hsl);
    }
    function _saturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01$1(hsl.s);
      return tinycolor(hsl);
    }
    function _greyscale(color) {
      return tinycolor(color).desaturate(100);
    }
    function _lighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01$1(hsl.l);
      return tinycolor(hsl);
    }
    function _brighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var rgb = tinycolor(color).toRgb();
      rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
      rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
      rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
      return tinycolor(rgb);
    }
    function _darken(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01$1(hsl.l);
      return tinycolor(hsl);
    }
    function _spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
    }
    function _complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
    }
    function polyad(color, number) {
      if (isNaN(number) || number <= 0) {
        throw new Error("Argument to polyad must be a positive number");
      }
      var hsl = tinycolor(color).toHsl();
      var result = [tinycolor(color)];
      var step = 360 / number;
      for (var i = 1; i < number; i++) {
        result.push(tinycolor({
          h: (hsl.h + i * step) % 360,
          s: hsl.s,
          l: hsl.l
        }));
      }
      return result;
    }
    function _splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h2 = hsl.h;
      return [tinycolor(color), tinycolor({
        h: (h2 + 72) % 360,
        s: hsl.s,
        l: hsl.l
      }), tinycolor({
        h: (h2 + 216) % 360,
        s: hsl.s,
        l: hsl.l
      })];
    }
    function _analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;
      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
      }
      return ret;
    }
    function _monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h2 = hsv.h, s = hsv.s, v2 = hsv.v;
      var ret = [];
      var modification = 1 / results;
      while (results--) {
        ret.push(tinycolor({
          h: h2,
          s,
          v: v2
        }));
        v2 = (v2 + modification) % 1;
      }
      return ret;
    }
    tinycolor.mix = function(color1, color2, amount) {
      amount = amount === 0 ? 0 : amount || 50;
      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();
      var p2 = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
        a: (rgb2.a - rgb1.a) * p2 + rgb1.a
      };
      return tinycolor(rgba);
    };
    tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    tinycolor.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor.readability(color1, color2);
      var wcag2Parms, out;
      out = false;
      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
          out = readability >= 4.5;
          break;
        case "AAlarge":
          out = readability >= 3;
          break;
        case "AAAsmall":
          out = readability >= 7;
          break;
      }
      return out;
    };
    tinycolor.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors;
      level = args.level;
      size = args.size;
      for (var i = 0; i < colorList.length; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
          bestScore = readability;
          bestColor = tinycolor(colorList[i]);
        }
      }
      if (tinycolor.isReadable(baseColor, bestColor, {
        level,
        size
      }) || !includeFallbackColors) {
        return bestColor;
      } else {
        args.includeFallbackColors = false;
        return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
      }
    };
    var names$1 = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var hexNames = tinycolor.hexNames = flip(names$1);
    function flip(o) {
      var flipped = {};
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }
      return flipped;
    }
    function boundAlpha$1(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function bound01$1(n2, max2) {
      if (isOnePointZero$1(n2)) n2 = "100%";
      var processPercent = isPercentage$1(n2);
      n2 = Math.min(max2, Math.max(0, parseFloat(n2)));
      if (processPercent) {
        n2 = parseInt(n2 * max2, 10) / 100;
      }
      if (Math.abs(n2 - max2) < 1e-6) {
        return 1;
      }
      return n2 % max2 / parseFloat(max2);
    }
    function clamp01$1(val) {
      return Math.min(1, Math.max(0, val));
    }
    function parseIntFromHex$1(val) {
      return parseInt(val, 16);
    }
    function isOnePointZero$1(n2) {
      return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
    }
    function isPercentage$1(n2) {
      return typeof n2 === "string" && n2.indexOf("%") != -1;
    }
    function pad2$1(c2) {
      return c2.length == 1 ? "0" + c2 : "" + c2;
    }
    function convertToPercentage$1(n2) {
      if (n2 <= 1) {
        n2 = n2 * 100 + "%";
      }
      return n2;
    }
    function convertDecimalToHex$1(d2) {
      return Math.round(parseFloat(d2) * 255).toString(16);
    }
    function convertHexToDecimal$1(h2) {
      return parseIntFromHex$1(h2) / 255;
    }
    var matchers$1 = function() {
      var CSS_INTEGER2 = "[-\\+]?\\d+%?";
      var CSS_NUMBER2 = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT2 = "(?:" + CSS_NUMBER2 + ")|(?:" + CSS_INTEGER2 + ")";
      var PERMISSIVE_MATCH32 = "[\\s|\\(]+(" + CSS_UNIT2 + ")[,|\\s]+(" + CSS_UNIT2 + ")[,|\\s]+(" + CSS_UNIT2 + ")\\s*\\)?";
      var PERMISSIVE_MATCH42 = "[\\s|\\(]+(" + CSS_UNIT2 + ")[,|\\s]+(" + CSS_UNIT2 + ")[,|\\s]+(" + CSS_UNIT2 + ")[,|\\s]+(" + CSS_UNIT2 + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(CSS_UNIT2),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH32),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH42),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH32),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH42),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH32),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH42),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function isValidCSSUnit$1(color) {
      return !!matchers$1.CSS_UNIT.exec(color);
    }
    function stringInputToObject$1(color) {
      color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
      var named = false;
      if (names$1[color]) {
        color = names$1[color];
        named = true;
      } else if (color == "transparent") {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
      }
      var match5;
      if (match5 = matchers$1.rgb.exec(color)) {
        return {
          r: match5[1],
          g: match5[2],
          b: match5[3]
        };
      }
      if (match5 = matchers$1.rgba.exec(color)) {
        return {
          r: match5[1],
          g: match5[2],
          b: match5[3],
          a: match5[4]
        };
      }
      if (match5 = matchers$1.hsl.exec(color)) {
        return {
          h: match5[1],
          s: match5[2],
          l: match5[3]
        };
      }
      if (match5 = matchers$1.hsla.exec(color)) {
        return {
          h: match5[1],
          s: match5[2],
          l: match5[3],
          a: match5[4]
        };
      }
      if (match5 = matchers$1.hsv.exec(color)) {
        return {
          h: match5[1],
          s: match5[2],
          v: match5[3]
        };
      }
      if (match5 = matchers$1.hsva.exec(color)) {
        return {
          h: match5[1],
          s: match5[2],
          v: match5[3],
          a: match5[4]
        };
      }
      if (match5 = matchers$1.hex8.exec(color)) {
        return {
          r: parseIntFromHex$1(match5[1]),
          g: parseIntFromHex$1(match5[2]),
          b: parseIntFromHex$1(match5[3]),
          a: convertHexToDecimal$1(match5[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match5 = matchers$1.hex6.exec(color)) {
        return {
          r: parseIntFromHex$1(match5[1]),
          g: parseIntFromHex$1(match5[2]),
          b: parseIntFromHex$1(match5[3]),
          format: named ? "name" : "hex"
        };
      }
      if (match5 = matchers$1.hex4.exec(color)) {
        return {
          r: parseIntFromHex$1(match5[1] + "" + match5[1]),
          g: parseIntFromHex$1(match5[2] + "" + match5[2]),
          b: parseIntFromHex$1(match5[3] + "" + match5[3]),
          a: convertHexToDecimal$1(match5[4] + "" + match5[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match5 = matchers$1.hex3.exec(color)) {
        return {
          r: parseIntFromHex$1(match5[1] + "" + match5[1]),
          g: parseIntFromHex$1(match5[2] + "" + match5[2]),
          b: parseIntFromHex$1(match5[3] + "" + match5[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function validateWCAG2Parms(parms) {
      var level, size;
      parms = parms || {
        level: "AA",
        size: "small"
      };
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
        level = "AA";
      }
      if (size !== "small" && size !== "large") {
        size = "small";
      }
      return {
        level,
        size
      };
    }
    var classnames = { exports: {} };
    /*!
    	Copyright (c) 2018 Jed Watson.
    	Licensed under the MIT License (MIT), see
    	http://jedwatson.github.io/classnames
    */
    (function(module2) {
      (function() {
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (module2.exports) {
          classNames2.default = classNames2;
          module2.exports = classNames2;
        } else {
          window.classNames = classNames2;
        }
      })();
    })(classnames);
    var classnamesExports = classnames.exports;
    const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
    function _extends$1() {
      return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t2 = arguments[e2];
          for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
        }
        return n2;
      }, _extends$1.apply(null, arguments);
    }
    var reactIs = { exports: {} };
    var reactIs_production_min = {};
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if ("object" === typeof a && null !== a) {
        var r2 = a.$$typeof;
        switch (r2) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case m:
              case n:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p:
                  case g:
                    return a;
                  default:
                    return r2;
                }
            }
          case c:
            return r2;
        }
      }
    }
    reactIs_production_min.ContextConsumer = h;
    reactIs_production_min.ContextProvider = g;
    reactIs_production_min.Element = b;
    reactIs_production_min.ForwardRef = l;
    reactIs_production_min.Fragment = d;
    reactIs_production_min.Lazy = q;
    reactIs_production_min.Memo = p;
    reactIs_production_min.Portal = c;
    reactIs_production_min.Profiler = f;
    reactIs_production_min.StrictMode = e;
    reactIs_production_min.Suspense = m;
    reactIs_production_min.SuspenseList = n;
    reactIs_production_min.isAsyncMode = function() {
      return false;
    };
    reactIs_production_min.isConcurrentMode = function() {
      return false;
    };
    reactIs_production_min.isContextConsumer = function(a) {
      return v(a) === h;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return v(a) === g;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return v(a) === l;
    };
    reactIs_production_min.isFragment = function(a) {
      return v(a) === d;
    };
    reactIs_production_min.isLazy = function(a) {
      return v(a) === q;
    };
    reactIs_production_min.isMemo = function(a) {
      return v(a) === p;
    };
    reactIs_production_min.isPortal = function(a) {
      return v(a) === c;
    };
    reactIs_production_min.isProfiler = function(a) {
      return v(a) === f;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return v(a) === e;
    };
    reactIs_production_min.isSuspense = function(a) {
      return v(a) === m;
    };
    reactIs_production_min.isSuspenseList = function(a) {
      return v(a) === n;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
    };
    reactIs_production_min.typeOf = v;
    {
      reactIs.exports = reactIs_production_min;
    }
    var reactIsExports = reactIs.exports;
    var warned = {};
    var preMessage = function preMessage2(fn) {
    };
    function warning$1(valid, message2) {
    }
    function note(valid, message2) {
    }
    function resetWarned() {
      warned = {};
    }
    function call(method, valid, message2) {
      if (!valid && !warned[message2]) {
        method(false, message2);
        warned[message2] = true;
      }
    }
    function warningOnce(valid, message2) {
      call(warning$1, valid, message2);
    }
    function noteOnce(valid, message2) {
      call(note, valid, message2);
    }
    warningOnce.preMessage = preMessage;
    warningOnce.resetWarned = resetWarned;
    warningOnce.noteOnce = noteOnce;
    function _typeof$1(o) {
      "@babel/helpers - typeof";
      return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof$1(o);
    }
    function toPrimitive$1(t2, r2) {
      if ("object" != _typeof$1(t2) || !t2) return t2;
      var e2 = t2[Symbol.toPrimitive];
      if (void 0 !== e2) {
        var i = e2.call(t2, r2 || "default");
        if ("object" != _typeof$1(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r2 ? String : Number)(t2);
    }
    function toPropertyKey$1(t2) {
      var i = toPrimitive$1(t2, "string");
      return "symbol" == _typeof$1(i) ? i : i + "";
    }
    function _defineProperty$1(e2, r2, t2) {
      return (r2 = toPropertyKey$1(r2)) in e2 ? Object.defineProperty(e2, r2, {
        value: t2,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e2[r2] = t2, e2;
    }
    function ownKeys$1(e2, r2) {
      var t2 = Object.keys(e2);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e2);
        r2 && (o = o.filter(function(r3) {
          return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
        })), t2.push.apply(t2, o);
      }
      return t2;
    }
    function _objectSpread2$1(e2) {
      for (var r2 = 1; r2 < arguments.length; r2++) {
        var t2 = null != arguments[r2] ? arguments[r2] : {};
        r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
          _defineProperty$1(e2, r3, t2[r3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
          Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
        });
      }
      return e2;
    }
    function isDOM(node2) {
      return node2 instanceof HTMLElement || node2 instanceof SVGElement;
    }
    function getDOM(node2) {
      if (node2 && _typeof$1(node2) === "object" && isDOM(node2.nativeElement)) {
        return node2.nativeElement;
      }
      if (isDOM(node2)) {
        return node2;
      }
      return null;
    }
    function findDOMNode(node2) {
      var domNode = getDOM(node2);
      if (domNode) {
        return domNode;
      }
      if (node2 instanceof React.Component) {
        var _ReactDOM$findDOMNode;
        return (_ReactDOM$findDOMNode = ReactDOM.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(ReactDOM, node2);
      }
      return null;
    }
    function useMemo(getValue2, condition, shouldUpdate) {
      var cacheRef = reactExports.useRef({});
      if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
        cacheRef.current.value = getValue2();
        cacheRef.current.condition = condition;
      }
      return cacheRef.current.value;
    }
    var fillRef = function fillRef2(ref, node2) {
      if (typeof ref === "function") {
        ref(node2);
      } else if (_typeof$1(ref) === "object" && ref && "current" in ref) {
        ref.current = node2;
      }
    };
    var supportRef = function supportRef2(nodeOrComponent) {
      var _type$prototype, _nodeOrComponent$prot;
      var type = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
      if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== reactIsExports.ForwardRef) {
        return false;
      }
      if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports.ForwardRef) {
        return false;
      }
      return true;
    };
    function isReactElement(node2) {
      return /* @__PURE__ */ reactExports.isValidElement(node2) && !reactIsExports.isFragment(node2);
    }
    Number(reactExports.version.split(".")[0]) >= 19 ? (
      // >= React 19
      function(node2) {
        if (isReactElement(node2)) {
          return node2.props.ref;
        }
        return null;
      }
    ) : (
      // < React 19
      function(node2) {
        if (isReactElement(node2)) {
          return node2.ref;
        }
        return null;
      }
    );
    function _classCallCheck(a, n2) {
      if (!(a instanceof n2)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e2, r2) {
      for (var t2 = 0; t2 < r2.length; t2++) {
        var o = r2[t2];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, toPropertyKey$1(o.key), o);
      }
    }
    function _createClass(e2, r2, t2) {
      return r2 && _defineProperties(e2.prototype, r2), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
        writable: false
      }), e2;
    }
    function _setPrototypeOf(t2, e2) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
        return t3.__proto__ = e3, t3;
      }, _setPrototypeOf(t2, e2);
    }
    function _inherits(t2, e2) {
      if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
      t2.prototype = Object.create(e2 && e2.prototype, {
        constructor: {
          value: t2,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(t2, "prototype", {
        writable: false
      }), e2 && _setPrototypeOf(t2, e2);
    }
    function _getPrototypeOf(t2) {
      return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      }, _getPrototypeOf(t2);
    }
    function _isNativeReflectConstruct() {
      try {
        var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t3) {
      }
      return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t2;
      })();
    }
    function _assertThisInitialized(e2) {
      if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function _possibleConstructorReturn(t2, e2) {
      if (e2 && ("object" == _typeof$1(e2) || "function" == typeof e2)) return e2;
      if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
      return _assertThisInitialized(t2);
    }
    function _createSuper(t2) {
      var r2 = _isNativeReflectConstruct();
      return function() {
        var e2, o = _getPrototypeOf(t2);
        if (r2) {
          var s = _getPrototypeOf(this).constructor;
          e2 = Reflect.construct(o, arguments, s);
        } else e2 = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e2);
      };
    }
    function _arrayLikeToArray$1(r2, a) {
      (null == a || a > r2.length) && (a = r2.length);
      for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r2[e2];
      return n2;
    }
    function _arrayWithoutHoles(r2) {
      if (Array.isArray(r2)) return _arrayLikeToArray$1(r2);
    }
    function _iterableToArray(r2) {
      if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
    }
    function _unsupportedIterableToArray$1(r2, a) {
      if (r2) {
        if ("string" == typeof r2) return _arrayLikeToArray$1(r2, a);
        var t2 = {}.toString.call(r2).slice(8, -1);
        return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$1(r2, a) : void 0;
      }
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(r2) {
      return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray$1(r2) || _nonIterableSpread();
    }
    var raf = function raf2(callback) {
      return +setTimeout(callback, 16);
    };
    var caf = function caf2(num) {
      return clearTimeout(num);
    };
    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      raf = function raf3(callback) {
        return window.requestAnimationFrame(callback);
      };
      caf = function caf3(handle) {
        return window.cancelAnimationFrame(handle);
      };
    }
    var rafUUID = 0;
    var rafIds = /* @__PURE__ */ new Map();
    function cleanup(id2) {
      rafIds.delete(id2);
    }
    var wrapperRaf = function wrapperRaf2(callback) {
      var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      rafUUID += 1;
      var id2 = rafUUID;
      function callRef(leftTimes) {
        if (leftTimes === 0) {
          cleanup(id2);
          callback();
        } else {
          var realId = raf(function() {
            callRef(leftTimes - 1);
          });
          rafIds.set(id2, realId);
        }
      }
      callRef(times);
      return id2;
    };
    wrapperRaf.cancel = function(id2) {
      var realId = rafIds.get(id2);
      cleanup(id2);
      return caf(realId);
    };
    function _arrayWithHoles$1(r2) {
      if (Array.isArray(r2)) return r2;
    }
    function _iterableToArrayLimit$1(r2, l2) {
      var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
      if (null != t2) {
        var e2, n2, i, u2, a = [], f2 = true, o = false;
        try {
          if (i = (t2 = t2.call(r2)).next, 0 === l2) {
            if (Object(t2) !== t2) return;
            f2 = false;
          } else for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true) ;
        } catch (r3) {
          o = true, n2 = r3;
        } finally {
          try {
            if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
          } finally {
            if (o) throw n2;
          }
        }
        return a;
      }
    }
    function _nonIterableRest$1() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _slicedToArray$1(r2, e2) {
      return _arrayWithHoles$1(r2) || _iterableToArrayLimit$1(r2, e2) || _unsupportedIterableToArray$1(r2, e2) || _nonIterableRest$1();
    }
    function murmur2(str) {
      var h2 = 0;
      var k2, i = 0, len = str.length;
      for (; len >= 4; ++i, len -= 4) {
        k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
        k2 ^= /* k >>> r: */
        k2 >>> 24;
        h2 = /* Math.imul(k, m): */
        (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      switch (len) {
        case 3:
          h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h2 ^= str.charCodeAt(i) & 255;
          h2 = /* Math.imul(h, m): */
          (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      }
      h2 ^= h2 >>> 13;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
      return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
    }
    function canUseDom() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }
    function contains(root, n2) {
      if (!root) {
        return false;
      }
      if (root.contains) {
        return root.contains(n2);
      }
      var node2 = n2;
      while (node2) {
        if (node2 === root) {
          return true;
        }
        node2 = node2.parentNode;
      }
      return false;
    }
    var APPEND_ORDER = "data-rc-order";
    var APPEND_PRIORITY = "data-rc-priority";
    var MARK_KEY = "rc-util-key";
    var containerCache = /* @__PURE__ */ new Map();
    function getMark() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
      if (mark) {
        return mark.startsWith("data-") ? mark : "data-".concat(mark);
      }
      return MARK_KEY;
    }
    function getContainer(option) {
      if (option.attachTo) {
        return option.attachTo;
      }
      var head = document.querySelector("head");
      return head || document.body;
    }
    function getOrder(prepend) {
      if (prepend === "queue") {
        return "prependQueue";
      }
      return prepend ? "prepend" : "append";
    }
    function findStyles(container) {
      return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
        return node2.tagName === "STYLE";
      });
    }
    function injectCSS(css) {
      var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!canUseDom()) {
        return null;
      }
      var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
      var mergedOrder = getOrder(prepend);
      var isPrependQueue = mergedOrder === "prependQueue";
      var styleNode = document.createElement("style");
      styleNode.setAttribute(APPEND_ORDER, mergedOrder);
      if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
      }
      if (csp !== null && csp !== void 0 && csp.nonce) {
        styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
      }
      styleNode.innerHTML = css;
      var container = getContainer(option);
      var firstChild = container.firstChild;
      if (prepend) {
        if (isPrependQueue) {
          var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
            if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
              return false;
            }
            var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
            return priority >= nodePriority;
          });
          if (existStyle.length) {
            container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
            return styleNode;
          }
        }
        container.insertBefore(styleNode, firstChild);
      } else {
        container.appendChild(styleNode);
      }
      return styleNode;
    }
    function findExistNode(key) {
      var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var container = getContainer(option);
      return (option.styles || findStyles(container)).find(function(node2) {
        return node2.getAttribute(getMark(option)) === key;
      });
    }
    function removeCSS(key) {
      var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var existNode = findExistNode(key, option);
      if (existNode) {
        var container = getContainer(option);
        container.removeChild(existNode);
      }
    }
    function syncRealContainer(container, option) {
      var cachedRealContainer = containerCache.get(container);
      if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
        var placeholderStyle = injectCSS("", option);
        var parentNode = placeholderStyle.parentNode;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
      }
    }
    function updateCSS(css, key) {
      var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var container = getContainer(originOption);
      var styles = findStyles(container);
      var option = _objectSpread2$1(_objectSpread2$1({}, originOption), {}, {
        styles
      });
      syncRealContainer(container, option);
      var existNode = findExistNode(key, option);
      if (existNode) {
        var _option$csp, _option$csp2;
        if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
          var _option$csp3;
          existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
        }
        if (existNode.innerHTML !== css) {
          existNode.innerHTML = css;
        }
        return existNode;
      }
      var newNode = injectCSS(css, option);
      newNode.setAttribute(getMark(option), key);
      return newNode;
    }
    function _objectWithoutPropertiesLoose$1(r2, e2) {
      if (null == r2) return {};
      var t2 = {};
      for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
        if (e2.includes(n2)) continue;
        t2[n2] = r2[n2];
      }
      return t2;
    }
    function _objectWithoutProperties$1(e2, t2) {
      if (null == e2) return {};
      var o, r2, i = _objectWithoutPropertiesLoose$1(e2, t2);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e2);
        for (r2 = 0; r2 < s.length; r2++) o = s[r2], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
      }
      return i;
    }
    function isEqual(obj1, obj2) {
      var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var refSet = /* @__PURE__ */ new Set();
      function deepEqual(a, b2) {
        var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var circular = refSet.has(a);
        warningOnce(!circular, "Warning: There may be circular references");
        if (circular) {
          return false;
        }
        if (a === b2) {
          return true;
        }
        if (shallow && level > 1) {
          return false;
        }
        refSet.add(a);
        var newLevel = level + 1;
        if (Array.isArray(a)) {
          if (!Array.isArray(b2) || a.length !== b2.length) {
            return false;
          }
          for (var i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b2[i], newLevel)) {
              return false;
            }
          }
          return true;
        }
        if (a && b2 && _typeof$1(a) === "object" && _typeof$1(b2) === "object") {
          var keys2 = Object.keys(a);
          if (keys2.length !== Object.keys(b2).length) {
            return false;
          }
          return keys2.every(function(key) {
            return deepEqual(a[key], b2[key], newLevel);
          });
        }
        return false;
      }
      return deepEqual(obj1, obj2);
    }
    var SPLIT = "%";
    function pathKey(keys2) {
      return keys2.join(SPLIT);
    }
    var Entity = /* @__PURE__ */ function() {
      function Entity2(instanceId) {
        _classCallCheck(this, Entity2);
        _defineProperty$1(this, "instanceId", void 0);
        _defineProperty$1(this, "cache", /* @__PURE__ */ new Map());
        this.instanceId = instanceId;
      }
      _createClass(Entity2, [{
        key: "get",
        value: function get2(keys2) {
          return this.opGet(pathKey(keys2));
        }
        /** A fast get cache with `get` concat. */
      }, {
        key: "opGet",
        value: function opGet(keyPathStr) {
          return this.cache.get(keyPathStr) || null;
        }
      }, {
        key: "update",
        value: function update(keys2, valueFn) {
          return this.opUpdate(pathKey(keys2), valueFn);
        }
        /** A fast get cache with `get` concat. */
      }, {
        key: "opUpdate",
        value: function opUpdate(keyPathStr, valueFn) {
          var prevValue = this.cache.get(keyPathStr);
          var nextValue = valueFn(prevValue);
          if (nextValue === null) {
            this.cache.delete(keyPathStr);
          } else {
            this.cache.set(keyPathStr, nextValue);
          }
        }
      }]);
      return Entity2;
    }();
    var ATTR_TOKEN = "data-token-hash";
    var ATTR_MARK = "data-css-hash";
    var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
    function createCache() {
      var cssinjsInstanceId = Math.random().toString(12).slice(2);
      if (typeof document !== "undefined" && document.head && document.body) {
        var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
        var firstChild = document.head.firstChild;
        Array.from(styles).forEach(function(style2) {
          style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
          if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            document.head.insertBefore(style2, firstChild);
          }
        });
        var styleHash = {};
        Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
          var hash = style2.getAttribute(ATTR_MARK);
          if (styleHash[hash]) {
            if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
              var _style$parentNode;
              (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
            }
          } else {
            styleHash[hash] = true;
          }
        });
      }
      return new Entity(cssinjsInstanceId);
    }
    var StyleContext = /* @__PURE__ */ reactExports.createContext({
      hashPriority: "low",
      cache: createCache(),
      defaultCache: true
    });
    function sameDerivativeOption(left, right) {
      if (left.length !== right.length) {
        return false;
      }
      for (var i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
          return false;
        }
      }
      return true;
    }
    var ThemeCache = /* @__PURE__ */ function() {
      function ThemeCache2() {
        _classCallCheck(this, ThemeCache2);
        _defineProperty$1(this, "cache", void 0);
        _defineProperty$1(this, "keys", void 0);
        _defineProperty$1(this, "cacheCallTimes", void 0);
        this.cache = /* @__PURE__ */ new Map();
        this.keys = [];
        this.cacheCallTimes = 0;
      }
      _createClass(ThemeCache2, [{
        key: "size",
        value: function size() {
          return this.keys.length;
        }
      }, {
        key: "internalGet",
        value: function internalGet(derivativeOption) {
          var _cache2, _cache3;
          var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var cache = {
            map: this.cache
          };
          derivativeOption.forEach(function(derivative2) {
            if (!cache) {
              cache = void 0;
            } else {
              var _cache;
              cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
            }
          });
          if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
            cache.value[1] = this.cacheCallTimes++;
          }
          return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
        }
      }, {
        key: "get",
        value: function get2(derivativeOption) {
          var _this$internalGet;
          return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
        }
      }, {
        key: "has",
        value: function has(derivativeOption) {
          return !!this.internalGet(derivativeOption);
        }
      }, {
        key: "set",
        value: function set2(derivativeOption, value) {
          var _this = this;
          if (!this.has(derivativeOption)) {
            if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
              var _this$keys$reduce = this.keys.reduce(function(result, key) {
                var _result = _slicedToArray$1(result, 2), callTimes = _result[1];
                if (_this.internalGet(key)[1] < callTimes) {
                  return [key, _this.internalGet(key)[1]];
                }
                return result;
              }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray$1(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
              this.delete(targetKey);
            }
            this.keys.push(derivativeOption);
          }
          var cache = this.cache;
          derivativeOption.forEach(function(derivative2, index) {
            if (index === derivativeOption.length - 1) {
              cache.set(derivative2, {
                value: [value, _this.cacheCallTimes++]
              });
            } else {
              var cacheValue = cache.get(derivative2);
              if (!cacheValue) {
                cache.set(derivative2, {
                  map: /* @__PURE__ */ new Map()
                });
              } else if (!cacheValue.map) {
                cacheValue.map = /* @__PURE__ */ new Map();
              }
              cache = cache.get(derivative2).map;
            }
          });
        }
      }, {
        key: "deleteByPath",
        value: function deleteByPath(currentCache, derivatives) {
          var cache = currentCache.get(derivatives[0]);
          if (derivatives.length === 1) {
            var _cache$value;
            if (!cache.map) {
              currentCache.delete(derivatives[0]);
            } else {
              currentCache.set(derivatives[0], {
                map: cache.map
              });
            }
            return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
          }
          var result = this.deleteByPath(cache.map, derivatives.slice(1));
          if ((!cache.map || cache.map.size === 0) && !cache.value) {
            currentCache.delete(derivatives[0]);
          }
          return result;
        }
      }, {
        key: "delete",
        value: function _delete(derivativeOption) {
          if (this.has(derivativeOption)) {
            this.keys = this.keys.filter(function(item) {
              return !sameDerivativeOption(item, derivativeOption);
            });
            return this.deleteByPath(this.cache, derivativeOption);
          }
          return void 0;
        }
      }]);
      return ThemeCache2;
    }();
    _defineProperty$1(ThemeCache, "MAX_CACHE_SIZE", 20);
    _defineProperty$1(ThemeCache, "MAX_CACHE_OFFSET", 5);
    var uuid = 0;
    var Theme = /* @__PURE__ */ function() {
      function Theme2(derivatives) {
        _classCallCheck(this, Theme2);
        _defineProperty$1(this, "derivatives", void 0);
        _defineProperty$1(this, "id", void 0);
        this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
        this.id = uuid;
        if (derivatives.length === 0) {
          warning$1(derivatives.length > 0);
        }
        uuid += 1;
      }
      _createClass(Theme2, [{
        key: "getDerivativeToken",
        value: function getDerivativeToken(token2) {
          return this.derivatives.reduce(function(result, derivative2) {
            return derivative2(token2, result);
          }, void 0);
        }
      }]);
      return Theme2;
    }();
    var cacheThemes = new ThemeCache();
    function createTheme(derivatives) {
      var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
      if (!cacheThemes.has(derivativeArr)) {
        cacheThemes.set(derivativeArr, new Theme(derivativeArr));
      }
      return cacheThemes.get(derivativeArr);
    }
    var resultCache = /* @__PURE__ */ new WeakMap();
    var RESULT_VALUE = {};
    function memoResult(callback, deps) {
      var current = resultCache;
      for (var i = 0; i < deps.length; i += 1) {
        var dep = deps[i];
        if (!current.has(dep)) {
          current.set(dep, /* @__PURE__ */ new WeakMap());
        }
        current = current.get(dep);
      }
      if (!current.has(RESULT_VALUE)) {
        current.set(RESULT_VALUE, callback());
      }
      return current.get(RESULT_VALUE);
    }
    var flattenTokenCache = /* @__PURE__ */ new WeakMap();
    function flattenToken(token2) {
      var hashed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var str = flattenTokenCache.get(token2) || "";
      if (!str) {
        Object.keys(token2).forEach(function(key) {
          var value = token2[key];
          str += key;
          if (value instanceof Theme) {
            str += value.id;
          } else if (value && _typeof$1(value) === "object") {
            str += flattenToken(value, hashed);
          } else {
            str += value;
          }
        });
        if (hashed) {
          str = murmur2(str);
        }
        flattenTokenCache.set(token2, str);
      }
      return str;
    }
    function token2key(token2, salt) {
      return murmur2("".concat(salt, "_").concat(flattenToken(token2, true)));
    }
    var isClientSide = canUseDom();
    function unit$1(num) {
      if (typeof num === "number") {
        return "".concat(num, "px");
      }
      return num;
    }
    function toStyleStr(style2, tokenKey, styleId) {
      var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      if (plain) {
        return style2;
      }
      var attrs = _objectSpread2$1(_objectSpread2$1({}, customizeAttrs), {}, _defineProperty$1(_defineProperty$1({}, ATTR_TOKEN, tokenKey), ATTR_MARK, styleId));
      var attrStr = Object.keys(attrs).map(function(attr) {
        var val = attrs[attr];
        return val ? "".concat(attr, '="').concat(val, '"') : null;
      }).filter(function(v2) {
        return v2;
      }).join(" ");
      return "<style ".concat(attrStr, ">").concat(style2, "</style>");
    }
    var token2CSSVar = function token2CSSVar2(token2) {
      var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return "--".concat(prefix ? "".concat(prefix, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
    };
    var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
      if (!Object.keys(cssVars).length) {
        return "";
      }
      return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2), key = _ref2[0], value = _ref2[1];
        return "".concat(key, ":").concat(value, ";");
      }).join(""), "}");
    };
    var transformToken = function transformToken2(token2, themeKey, config) {
      var cssVars = {};
      var result = {};
      Object.entries(token2).forEach(function(_ref3) {
        var _config$preserve, _config$ignore;
        var _ref4 = _slicedToArray$1(_ref3, 2), key = _ref4[0], value = _ref4[1];
        if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
          result[key] = value;
        } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
          var _config$unitless;
          var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
          cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
          result[key] = "var(".concat(cssVar, ")");
        }
      });
      return [result, serializeCSSVar(cssVars, themeKey, {
        scope: config === null || config === void 0 ? void 0 : config.scope
      })];
    };
    var useInternalLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
    var useLayoutEffect = function useLayoutEffect2(callback, deps) {
      var firstMountRef = reactExports.useRef(true);
      useInternalLayoutEffect(function() {
        return callback(firstMountRef.current);
      }, deps);
      useInternalLayoutEffect(function() {
        firstMountRef.current = false;
        return function() {
          firstMountRef.current = true;
        };
      }, []);
    };
    var fullClone$3 = _objectSpread2$1({}, React$1);
    var useInsertionEffect$1 = fullClone$3.useInsertionEffect;
    var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
      reactExports.useMemo(renderEffect, deps);
      useLayoutEffect(function() {
        return effect(true);
      }, deps);
    };
    var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
      return useInsertionEffect$1(function() {
        renderEffect();
        return effect();
      }, deps);
    } : useInsertionEffectPolyfill;
    var fullClone$2 = _objectSpread2$1({}, React$1);
    var useInsertionEffect = fullClone$2.useInsertionEffect;
    var useCleanupRegister = function useCleanupRegister2(deps) {
      var effectCleanups = [];
      var cleanupFlag = false;
      function register(fn) {
        if (cleanupFlag) {
          return;
        }
        effectCleanups.push(fn);
      }
      reactExports.useEffect(function() {
        cleanupFlag = false;
        return function() {
          cleanupFlag = true;
          if (effectCleanups.length) {
            effectCleanups.forEach(function(fn) {
              return fn();
            });
          }
        };
      }, deps);
      return register;
    };
    var useRun = function useRun2() {
      return function(fn) {
        fn();
      };
    };
    var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
    function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
      var _React$useContext = reactExports.useContext(StyleContext), globalCache = _React$useContext.cache;
      var fullPath = [prefix].concat(_toConsumableArray(keyPath));
      var fullPathStr = pathKey(fullPath);
      var register = useEffectCleanupRegister([fullPathStr]);
      var buildCache = function buildCache2(updater) {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
          var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray$1(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
          var tmpCache = cache;
          var mergedCache = tmpCache || cacheFn();
          var data = [times, mergedCache];
          return updater ? updater(data) : data;
        });
      };
      reactExports.useMemo(
        function() {
          buildCache();
        },
        /* eslint-disable react-hooks/exhaustive-deps */
        [fullPathStr]
        /* eslint-enable */
      );
      var cacheEntity = globalCache.opGet(fullPathStr);
      var cacheContent = cacheEntity[1];
      useCompatibleInsertionEffect(function() {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
      }, function(polyfill) {
        buildCache(function(_ref3) {
          var _ref4 = _slicedToArray$1(_ref3, 2), times = _ref4[0], cache = _ref4[1];
          if (polyfill && times === 0) {
            onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
          }
          return [times + 1, cache];
        });
        return function() {
          globalCache.opUpdate(fullPathStr, function(prevCache) {
            var _ref5 = prevCache || [], _ref6 = _slicedToArray$1(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
            var nextCount = times - 1;
            if (nextCount === 0) {
              register(function() {
                if (polyfill || !globalCache.opGet(fullPathStr)) {
                  onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
                }
              });
              return null;
            }
            return [times - 1, cache];
          });
        };
      }, [fullPathStr]);
      return cacheContent;
    }
    var EMPTY_OVERRIDE = {};
    var hashPrefix = "css";
    var tokenKeys = /* @__PURE__ */ new Map();
    function recordCleanToken(tokenKey) {
      tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
    }
    function removeStyleTags(key, instanceId) {
      if (typeof document !== "undefined") {
        var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
        styles.forEach(function(style2) {
          if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
            var _style$parentNode;
            (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
          }
        });
      }
    }
    var TOKEN_THRESHOLD = 0;
    function cleanTokenStyle(tokenKey, instanceId) {
      tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
      var tokenKeyList = Array.from(tokenKeys.keys());
      var cleanableKeyList = tokenKeyList.filter(function(key) {
        var count = tokenKeys.get(key) || 0;
        return count <= 0;
      });
      if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
        cleanableKeyList.forEach(function(key) {
          removeStyleTags(key, instanceId);
          tokenKeys.delete(key);
        });
      }
    }
    var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme, format2) {
      var derivativeToken = theme.getDerivativeToken(originToken);
      var mergedDerivativeToken = _objectSpread2$1(_objectSpread2$1({}, derivativeToken), overrideToken);
      if (format2) {
        mergedDerivativeToken = format2(mergedDerivativeToken);
      }
      return mergedDerivativeToken;
    };
    var TOKEN_PREFIX = "token";
    function useCacheToken(theme, tokens2) {
      var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _useContext = reactExports.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
      var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
      var mergedToken = memoResult(function() {
        return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens2)));
      }, tokens2);
      var tokenStr = flattenToken(mergedToken);
      var overrideTokenStr = flattenToken(override);
      var cssVarStr = cssVar ? flattenToken(cssVar) : "";
      var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
        var _cssVar$key;
        var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken2);
        var actualToken = _objectSpread2$1({}, mergedDerivativeToken);
        var cssVarsStr = "";
        if (!!cssVar) {
          var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
            prefix: cssVar.prefix,
            ignore: cssVar.ignore,
            unitless: cssVar.unitless,
            preserve: cssVar.preserve
          });
          var _transformToken2 = _slicedToArray$1(_transformToken, 2);
          mergedDerivativeToken = _transformToken2[0];
          cssVarsStr = _transformToken2[1];
        }
        var tokenKey = token2key(mergedDerivativeToken, salt);
        mergedDerivativeToken._tokenKey = tokenKey;
        actualToken._tokenKey = token2key(actualToken, salt);
        var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
        mergedDerivativeToken._themeKey = themeKey;
        recordCleanToken(themeKey);
        var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
        mergedDerivativeToken._hashId = hashId;
        return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
      }, function(cache) {
        cleanTokenStyle(cache[0]._themeKey, instanceId);
      }, function(_ref) {
        var _ref2 = _slicedToArray$1(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
        if (cssVar && cssVarsStr) {
          var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
            mark: ATTR_MARK,
            prepend: "queue",
            attachTo: container,
            priority: -999
          });
          style2[CSS_IN_JS_INSTANCE] = instanceId;
          style2.setAttribute(ATTR_TOKEN, token2._themeKey);
        }
      });
      return cachedToken;
    }
    var extract$2 = function extract2(cache, effectStyles, options) {
      var _cache = _slicedToArray$1(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
      var _ref3 = options || {}, plain = _ref3.plain;
      if (!styleStr) {
        return null;
      }
      var styleId = realToken._tokenKey;
      var order = -999;
      var sharedAttrs = {
        "data-rc-order": "prependQueue",
        "data-rc-priority": "".concat(order)
      };
      var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
      return [order, styleId, styleText];
    };
    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      // SVG-related properties
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    var COMMENT = "comm";
    var RULESET = "rule";
    var DECLARATION = "decl";
    var IMPORT = "@import";
    var KEYFRAMES = "@keyframes";
    var LAYER = "@layer";
    var abs = Math.abs;
    var from = String.fromCharCode;
    function trim(value) {
      return value.trim();
    }
    function replace(value, pattern, replacement) {
      return value.replace(pattern, replacement);
    }
    function indexof(value, search, position2) {
      return value.indexOf(search, position2);
    }
    function charat(value, index) {
      return value.charCodeAt(index) | 0;
    }
    function substr(value, begin, end) {
      return value.slice(begin, end);
    }
    function strlen(value) {
      return value.length;
    }
    function sizeof(value) {
      return value.length;
    }
    function append(value, array) {
      return array.push(value), value;
    }
    var line = 1;
    var column = 1;
    var length = 0;
    var position = 0;
    var character = 0;
    var characters = "";
    function node(value, root, parent, type, props, children, length2, siblings) {
      return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
    }
    function char() {
      return character;
    }
    function prev() {
      character = position > 0 ? charat(characters, --position) : 0;
      if (column--, character === 10)
        column = 1, line--;
      return character;
    }
    function next() {
      character = position < length ? charat(characters, position++) : 0;
      if (column++, character === 10)
        column = 1, line++;
      return character;
    }
    function peek() {
      return charat(characters, position);
    }
    function caret() {
      return position;
    }
    function slice(begin, end) {
      return substr(characters, begin, end);
    }
    function token(type) {
      switch (type) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function alloc(value) {
      return line = column = 1, length = strlen(characters = value), position = 0, [];
    }
    function dealloc(value) {
      return characters = "", value;
    }
    function delimit(type) {
      return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
    }
    function whitespace(type) {
      while (character = peek())
        if (character < 33)
          next();
        else
          break;
      return token(type) > 2 || token(character) > 3 ? "" : " ";
    }
    function escaping(index, count) {
      while (--count && next())
        if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
          break;
      return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
    }
    function delimiter(type) {
      while (next())
        switch (character) {
          case type:
            return position;
          case 34:
          case 39:
            if (type !== 34 && type !== 39)
              delimiter(character);
            break;
          case 40:
            if (type === 41)
              delimiter(type);
            break;
          case 92:
            next();
            break;
        }
      return position;
    }
    function commenter(type, index) {
      while (next())
        if (type + character === 47 + 10)
          break;
        else if (type + character === 42 + 42 && peek() === 47)
          break;
      return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
    }
    function identifier(index) {
      while (!token(peek()))
        next();
      return slice(index, position);
    }
    function compile(value) {
      return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
    }
    function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
      var index = 0;
      var offset2 = 0;
      var length2 = pseudo;
      var atrule = 0;
      var property = 0;
      var previous = 0;
      var variable = 1;
      var scanning = 1;
      var ampersand = 1;
      var character2 = 0;
      var type = "";
      var props = rules;
      var children = rulesets;
      var reference = rule;
      var characters2 = type;
      while (scanning)
        switch (previous = character2, character2 = next()) {
          case 40:
            if (previous != 108 && charat(characters2, length2 - 1) == 58) {
              if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
                ampersand = -1;
              break;
            }
          case 34:
          case 39:
          case 91:
            characters2 += delimit(character2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            characters2 += whitespace(previous);
            break;
          case 92:
            characters2 += escaping(caret() - 1, 7);
            continue;
          case 47:
            switch (peek()) {
              case 42:
              case 47:
                append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
                if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
                break;
              default:
                characters2 += "/";
            }
            break;
          case 123 * variable:
            points[index++] = strlen(characters2) * ampersand;
          case 125 * variable:
          case 59:
          case 0:
            switch (character2) {
              case 0:
              case 125:
                scanning = 0;
              case 59 + offset2:
                if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
                if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
                  append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
                break;
              case 59:
                characters2 += ";";
              default:
                append(reference = ruleset(characters2, root, parent, index, offset2, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
                if (character2 === 123)
                  if (offset2 === 0)
                    parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                  else
                    switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                        break;
                      default:
                        parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                    }
            }
            index = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
            break;
          case 58:
            length2 = 1 + strlen(characters2), property = previous;
          default:
            if (variable < 1) {
              if (character2 == 123)
                --variable;
              else if (character2 == 125 && variable++ == 0 && prev() == 125)
                continue;
            }
            switch (characters2 += from(character2), character2 * variable) {
              case 38:
                ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
                break;
              case 44:
                points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
                break;
              case 64:
                if (peek() === 45)
                  characters2 += delimit(next());
                atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
                break;
              case 45:
                if (previous === 45 && strlen(characters2) == 2)
                  variable = 0;
            }
        }
      return rulesets;
    }
    function ruleset(value, root, parent, index, offset2, rules, points, type, props, children, length2, siblings) {
      var post = offset2 - 1;
      var rule = offset2 === 0 ? rules : [""];
      var size = sizeof(rule);
      for (var i = 0, j = 0, k2 = 0; i < index; ++i)
        for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
          if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
            props[k2++] = z2;
      return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2, siblings);
    }
    function comment(value, root, parent, siblings) {
      return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
    }
    function declaration(value, root, parent, length2, siblings) {
      return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
    }
    function serialize(children, callback) {
      var output = "";
      for (var i = 0; i < children.length; i++)
        output += callback(children[i], i, children, callback) || "";
      return output;
    }
    function stringify(element, index, children, callback) {
      switch (element.type) {
        case LAYER:
          if (element.children.length) break;
        case IMPORT:
        case DECLARATION:
          return element.return = element.return || element.value;
        case COMMENT:
          return "";
        case KEYFRAMES:
          return element.return = element.value + "{" + serialize(element.children, callback) + "}";
        case RULESET:
          if (!strlen(element.value = element.props.join(","))) return "";
      }
      return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
    }
    var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
    var CSS_FILE_STYLE = "_FILE_STYLE__";
    var cachePathMap;
    var fromCSSFile = true;
    function prepare() {
      if (!cachePathMap) {
        cachePathMap = {};
        if (canUseDom()) {
          var div = document.createElement("div");
          div.className = ATTR_CACHE_MAP;
          div.style.position = "fixed";
          div.style.visibility = "hidden";
          div.style.top = "-9999px";
          document.body.appendChild(div);
          var content = getComputedStyle(div).content || "";
          content = content.replace(/^"/, "").replace(/"$/, "");
          content.split(";").forEach(function(item) {
            var _item$split = item.split(":"), _item$split2 = _slicedToArray$1(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
            cachePathMap[path] = hash;
          });
          var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
          if (inlineMapStyle) {
            var _inlineMapStyle$paren;
            fromCSSFile = false;
            (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
          }
          document.body.removeChild(div);
        }
      }
    }
    function existPath(path) {
      prepare();
      return !!cachePathMap[path];
    }
    function getStyleAndHash(path) {
      var hash = cachePathMap[path];
      var styleStr = null;
      if (hash && canUseDom()) {
        if (fromCSSFile) {
          styleStr = CSS_FILE_STYLE;
        } else {
          var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path], '"]'));
          if (_style) {
            styleStr = _style.innerHTML;
          } else {
            delete cachePathMap[path];
          }
        }
      }
      return [styleStr, hash];
    }
    var SKIP_CHECK = "_skip_check_";
    var MULTI_VALUE = "_multi_value_";
    function normalizeStyle(styleStr) {
      var serialized = serialize(compile(styleStr), stringify);
      return serialized.replace(/\{%%%\:[^;];}/g, ";");
    }
    function isCompoundCSSProperty(value) {
      return _typeof$1(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
    }
    function injectSelectorHash(key, hashId, hashPriority) {
      if (!hashId) {
        return key;
      }
      var hashClassName = ".".concat(hashId);
      var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
      var keys2 = key.split(",").map(function(k2) {
        var _firstPath$match;
        var fullPath = k2.trim().split(/\s+/);
        var firstPath = fullPath[0] || "";
        var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
        firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
        return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
      });
      return keys2.join(",");
    }
    var parseStyle = function parseStyle2(interpolation) {
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        root: true,
        parentSelectors: []
      }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
      var hashId = config.hashId, layer = config.layer;
      config.path;
      var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
      config.linters;
      var styleStr = "";
      var effectStyle = {};
      function parseKeyframes(keyframes) {
        var animationName = keyframes.getName(hashId);
        if (!effectStyle[animationName]) {
          var _parseStyle = parseStyle2(keyframes.style, config, {
            root: false,
            parentSelectors
          }), _parseStyle2 = _slicedToArray$1(_parseStyle, 1), _parsedStr = _parseStyle2[0];
          effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
        }
      }
      function flattenList(list) {
        var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        list.forEach(function(item) {
          if (Array.isArray(item)) {
            flattenList(item, fullList);
          } else if (item) {
            fullList.push(item);
          }
        });
        return fullList;
      }
      var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
      flattenStyleList.forEach(function(originStyle) {
        var style2 = typeof originStyle === "string" && !root ? {} : originStyle;
        if (typeof style2 === "string") {
          styleStr += "".concat(style2, "\n");
        } else if (style2._keyframe) {
          parseKeyframes(style2);
        } else {
          var mergedStyle = transformers.reduce(function(prev2, trans) {
            var _trans$visit;
            return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
          }, style2);
          Object.keys(mergedStyle).forEach(function(key) {
            var value = mergedStyle[key];
            if (_typeof$1(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
              var subInjectHash = false;
              var mergedKey = key.trim();
              var nextRoot = false;
              if ((root || injectHash) && hashId) {
                if (mergedKey.startsWith("@")) {
                  subInjectHash = true;
                } else if (mergedKey === "&") {
                  mergedKey = injectSelectorHash("", hashId, hashPriority);
                } else {
                  mergedKey = injectSelectorHash(key, hashId, hashPriority);
                }
              } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
                mergedKey = "";
                nextRoot = true;
              }
              var _parseStyle3 = parseStyle2(value, config, {
                root: nextRoot,
                injectHash: subInjectHash,
                parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
              }), _parseStyle4 = _slicedToArray$1(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
              effectStyle = _objectSpread2$1(_objectSpread2$1({}, effectStyle), childEffectStyle);
              styleStr += "".concat(mergedKey).concat(_parsedStr2);
            } else {
              let appendStyle = function(cssKey, cssValue) {
                var styleName = cssKey.replace(/[A-Z]/g, function(match5) {
                  return "-".concat(match5.toLowerCase());
                });
                var formatValue = cssValue;
                if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                  formatValue = "".concat(formatValue, "px");
                }
                if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                  parseKeyframes(cssValue);
                  formatValue = cssValue.getName(hashId);
                }
                styleStr += "".concat(styleName, ":").concat(formatValue, ";");
              };
              var _value;
              var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
              if (_typeof$1(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
                actualValue.forEach(function(item) {
                  appendStyle(key, item);
                });
              } else {
                appendStyle(key, actualValue);
              }
            }
          });
        }
      });
      if (!root) {
        styleStr = "{".concat(styleStr, "}");
      } else if (layer) {
        styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
        if (layer.dependencies) {
          effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
            return "@layer ".concat(deps, ", ").concat(layer.name, ";");
          }).join("\n");
        }
      }
      return [styleStr, effectStyle];
    };
    function uniqueHash(path, styleStr) {
      return murmur2("".concat(path.join("%")).concat(styleStr));
    }
    function Empty() {
      return null;
    }
    var STYLE_PREFIX = "style";
    function useStyleRegister(info, styleFn) {
      var token2 = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
      var _React$useContext = reactExports.useContext(StyleContext), autoClear = _React$useContext.autoClear;
      _React$useContext.mock;
      var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
      var tokenKey = token2._tokenKey;
      var fullPath = [tokenKey];
      if (enableLayer) {
        fullPath.push("layer");
      }
      fullPath.push.apply(fullPath, _toConsumableArray(path));
      var isMergedClientSide = isClientSide;
      var _useGlobalCache = useGlobalCache(
        STYLE_PREFIX,
        fullPath,
        // Create cache if needed
        function() {
          var cachePath = fullPath.join("|");
          if (existPath(cachePath)) {
            var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray$1(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
            if (inlineCacheStyleStr) {
              return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
            }
          }
          var styleObj = styleFn();
          var _parseStyle5 = parseStyle(styleObj, {
            hashId,
            hashPriority,
            layer: enableLayer ? layer : void 0,
            path: path.join("-"),
            transformers,
            linters
          }), _parseStyle6 = _slicedToArray$1(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
          var styleStr = normalizeStyle(parsedStyle);
          var styleId = uniqueHash(fullPath, styleStr);
          return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
        },
        // Remove cache if no need
        function(_ref2, fromHMR) {
          var _ref3 = _slicedToArray$1(_ref2, 3), styleId = _ref3[2];
          if ((fromHMR || autoClear) && isClientSide) {
            removeCSS(styleId, {
              mark: ATTR_MARK
            });
          }
        },
        // Effect: Inject style here
        function(_ref4) {
          var _ref5 = _slicedToArray$1(_ref4, 4), styleStr = _ref5[0];
          _ref5[1];
          var styleId = _ref5[2], effectStyle = _ref5[3];
          if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
            var mergedCSSConfig = {
              mark: ATTR_MARK,
              prepend: enableLayer ? false : "queue",
              attachTo: container,
              priority: order
            };
            var nonceStr = typeof nonce === "function" ? nonce() : nonce;
            if (nonceStr) {
              mergedCSSConfig.csp = {
                nonce: nonceStr
              };
            }
            var effectLayerKeys = [];
            var effectRestKeys = [];
            Object.keys(effectStyle).forEach(function(key) {
              if (key.startsWith("@layer")) {
                effectLayerKeys.push(key);
              } else {
                effectRestKeys.push(key);
              }
            });
            effectLayerKeys.forEach(function(effectKey) {
              updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2$1(_objectSpread2$1({}, mergedCSSConfig), {}, {
                prepend: true
              }));
            });
            var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
            style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
            style2.setAttribute(ATTR_TOKEN, tokenKey);
            effectRestKeys.forEach(function(effectKey) {
              updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
            });
          }
        }
      ), _useGlobalCache2 = _slicedToArray$1(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
      return function(node2) {
        var styleNode;
        if (!ssrInline || isMergedClientSide || !defaultCache) {
          styleNode = /* @__PURE__ */ reactExports.createElement(Empty, null);
        } else {
          styleNode = /* @__PURE__ */ reactExports.createElement("style", _extends$1({}, _defineProperty$1(_defineProperty$1({}, ATTR_TOKEN, cachedTokenKey), ATTR_MARK, cachedStyleId), {
            dangerouslySetInnerHTML: {
              __html: cachedStyleStr
            }
          }));
        }
        return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, styleNode, node2);
      };
    }
    var extract$1 = function extract2(cache, effectStyles, options) {
      var _cache = _slicedToArray$1(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
      var _ref7 = options || {}, plain = _ref7.plain;
      if (clientOnly) {
        return null;
      }
      var keyStyleText = styleStr;
      var sharedAttrs = {
        "data-rc-order": "prependQueue",
        "data-rc-priority": "".concat(order)
      };
      keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
      if (effectStyle) {
        Object.keys(effectStyle).forEach(function(effectKey) {
          if (!effectStyles[effectKey]) {
            effectStyles[effectKey] = true;
            var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
            var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
            if (effectKey.startsWith("@layer")) {
              keyStyleText = effectStyleHTML + keyStyleText;
            } else {
              keyStyleText += effectStyleHTML;
            }
          }
        });
      }
      return [order, styleId, keyStyleText];
    };
    var CSS_VAR_PREFIX = "cssVar";
    var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
      var key = config.key, prefix = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
      var _useContext = reactExports.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
      var tokenKey = token2._tokenKey;
      var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
      var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
        var originToken = fn();
        var _transformToken = transformToken(originToken, key, {
          prefix,
          unitless: unitless2,
          ignore: ignore2,
          scope
        }), _transformToken2 = _slicedToArray$1(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
        var styleId = uniqueHash(stylePath, cssVarsStr);
        return [mergedToken, cssVarsStr, styleId, key];
      }, function(_ref) {
        var _ref2 = _slicedToArray$1(_ref, 3), styleId = _ref2[2];
        if (isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK
          });
        }
      }, function(_ref3) {
        var _ref4 = _slicedToArray$1(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
        if (!cssVarsStr) {
          return;
        }
        var style2 = updateCSS(cssVarsStr, styleId, {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: -999
        });
        style2[CSS_IN_JS_INSTANCE] = instanceId;
        style2.setAttribute(ATTR_TOKEN, key);
      });
      return cache;
    };
    var extract = function extract2(cache, effectStyles, options) {
      var _cache = _slicedToArray$1(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
      var _ref5 = options || {}, plain = _ref5.plain;
      if (!styleStr) {
        return null;
      }
      var order = -999;
      var sharedAttrs = {
        "data-rc-order": "prependQueue",
        "data-rc-priority": "".concat(order)
      };
      var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
      return [order, styleId, styleText];
    };
    _defineProperty$1(_defineProperty$1(_defineProperty$1({}, STYLE_PREFIX, extract$1), TOKEN_PREFIX, extract$2), CSS_VAR_PREFIX, extract);
    var Keyframe = /* @__PURE__ */ function() {
      function Keyframe2(name, style2) {
        _classCallCheck(this, Keyframe2);
        _defineProperty$1(this, "name", void 0);
        _defineProperty$1(this, "style", void 0);
        _defineProperty$1(this, "_keyframe", true);
        this.name = name;
        this.style = style2;
      }
      _createClass(Keyframe2, [{
        key: "getName",
        value: function getName() {
          var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
        }
      }]);
      return Keyframe2;
    }();
    function noSplit(list) {
      list.notSplit = true;
      return list;
    }
    ({
      // Inset
      inset: ["top", "right", "bottom", "left"],
      insetBlock: ["top", "bottom"],
      insetBlockStart: ["top"],
      insetBlockEnd: ["bottom"],
      insetInline: ["left", "right"],
      insetInlineStart: ["left"],
      insetInlineEnd: ["right"],
      // Margin
      marginBlock: ["marginTop", "marginBottom"],
      marginBlockStart: ["marginTop"],
      marginBlockEnd: ["marginBottom"],
      marginInline: ["marginLeft", "marginRight"],
      marginInlineStart: ["marginLeft"],
      marginInlineEnd: ["marginRight"],
      // Padding
      paddingBlock: ["paddingTop", "paddingBottom"],
      paddingBlockStart: ["paddingTop"],
      paddingBlockEnd: ["paddingBottom"],
      paddingInline: ["paddingLeft", "paddingRight"],
      paddingInlineStart: ["paddingLeft"],
      paddingInlineEnd: ["paddingRight"],
      // Border
      borderBlock: noSplit(["borderTop", "borderBottom"]),
      borderBlockStart: noSplit(["borderTop"]),
      borderBlockEnd: noSplit(["borderBottom"]),
      borderInline: noSplit(["borderLeft", "borderRight"]),
      borderInlineStart: noSplit(["borderLeft"]),
      borderInlineEnd: noSplit(["borderRight"]),
      // Border width
      borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
      borderBlockStartWidth: ["borderTopWidth"],
      borderBlockEndWidth: ["borderBottomWidth"],
      borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
      borderInlineStartWidth: ["borderLeftWidth"],
      borderInlineEndWidth: ["borderRightWidth"],
      // Border style
      borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
      borderBlockStartStyle: ["borderTopStyle"],
      borderBlockEndStyle: ["borderBottomStyle"],
      borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
      borderInlineStartStyle: ["borderLeftStyle"],
      borderInlineEndStyle: ["borderRightStyle"],
      // Border color
      borderBlockColor: ["borderTopColor", "borderBottomColor"],
      borderBlockStartColor: ["borderTopColor"],
      borderBlockEndColor: ["borderBottomColor"],
      borderInlineColor: ["borderLeftColor", "borderRightColor"],
      borderInlineStartColor: ["borderLeftColor"],
      borderInlineEndColor: ["borderRightColor"],
      // Border radius
      borderStartStartRadius: ["borderTopLeftRadius"],
      borderStartEndRadius: ["borderTopRightRadius"],
      borderEndStartRadius: ["borderBottomLeftRadius"],
      borderEndEndRadius: ["borderBottomRightRadius"]
    });
    var IconContext = /* @__PURE__ */ reactExports.createContext({});
    function _toArray(r2) {
      return _arrayWithHoles$1(r2) || _iterableToArray(r2) || _unsupportedIterableToArray$1(r2) || _nonIterableRest$1();
    }
    function get(entity, path) {
      var current = entity;
      for (var i = 0; i < path.length; i += 1) {
        if (current === null || current === void 0) {
          return void 0;
        }
        current = current[path[i]];
      }
      return current;
    }
    function internalSet(entity, paths, value, removeIfUndefined) {
      if (!paths.length) {
        return value;
      }
      var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
      var clone2;
      if (!entity && typeof path === "number") {
        clone2 = [];
      } else if (Array.isArray(entity)) {
        clone2 = _toConsumableArray(entity);
      } else {
        clone2 = _objectSpread2$1({}, entity);
      }
      if (removeIfUndefined && value === void 0 && restPath.length === 1) {
        delete clone2[path][restPath[0]];
      } else {
        clone2[path] = internalSet(clone2[path], restPath, value, removeIfUndefined);
      }
      return clone2;
    }
    function set(entity, paths, value) {
      var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
        return entity;
      }
      return internalSet(entity, paths, value, removeIfUndefined);
    }
    function isObject(obj) {
      return _typeof$1(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
    }
    function createEmpty(source) {
      return Array.isArray(source) ? [] : {};
    }
    var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
    function merge$1() {
      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      var clone2 = createEmpty(sources[0]);
      sources.forEach(function(src) {
        function internalMerge(path, parentLoopSet) {
          var loopSet = new Set(parentLoopSet);
          var value = get(src, path);
          var isArr = Array.isArray(value);
          if (isArr || isObject(value)) {
            if (!loopSet.has(value)) {
              loopSet.add(value);
              var originValue = get(clone2, path);
              if (isArr) {
                clone2 = set(clone2, path, []);
              } else if (!originValue || _typeof$1(originValue) !== "object") {
                clone2 = set(clone2, path, createEmpty(value));
              }
              keys(value).forEach(function(key) {
                internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
              });
            }
          } else {
            clone2 = set(clone2, path, value);
          }
        }
        internalMerge([]);
      });
      return clone2;
    }
    const WarningContext = /* @__PURE__ */ reactExports.createContext({});
    const ValidateMessagesContext = /* @__PURE__ */ reactExports.createContext(void 0);
    var locale$3 = {
      // Options
      items_per_page: "/ page",
      jump_to: "Go to",
      jump_to_confirm: "confirm",
      page: "Page",
      // Pagination
      prev_page: "Previous Page",
      next_page: "Next Page",
      prev_5: "Previous 5 Pages",
      next_5: "Next 5 Pages",
      prev_3: "Previous 3 Pages",
      next_3: "Next 3 Pages",
      page_size: "Page Size"
    };
    var commonLocale = {
      yearFormat: "YYYY",
      dayFormat: "D",
      cellMeridiemFormat: "A",
      monthBeforeYear: true
    };
    var locale$2 = _objectSpread2$1(_objectSpread2$1({}, commonLocale), {}, {
      locale: "en_US",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "OK",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "select time",
      dateSelect: "select date",
      weekSelect: "Choose a week",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      dateFormat: "M/D/YYYY",
      dateTimeFormat: "M/D/YYYY HH:mm:ss",
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century"
    });
    const locale$1 = {
      placeholder: "Select time",
      rangePlaceholder: ["Start time", "End time"]
    };
    const locale = {
      lang: Object.assign({
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"]
      }, locale$2),
      timePickerLocale: Object.assign({}, locale$1)
    };
    const typeTemplate = "${label} is not a valid ${type}";
    const localeValues = {
      locale: "en",
      Pagination: locale$3,
      DatePicker: locale,
      TimePicker: locale$1,
      Calendar: locale,
      global: {
        placeholder: "Please select"
      },
      Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting"
      },
      Tour: {
        Next: "Next",
        Previous: "Previous",
        Finish: "Finish"
      },
      Modal: {
        okText: "OK",
        cancelText: "Cancel",
        justOkText: "OK"
      },
      Popconfirm: {
        okText: "OK",
        cancelText: "Cancel"
      },
      Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        deselectAll: "Deselect all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page"
      },
      Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file"
      },
      Empty: {
        description: "No data"
      },
      Icon: {
        icon: "icon"
      },
      Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand",
        collapse: "Collapse"
      },
      Form: {
        optional: "(optional)",
        defaultValidateMessages: {
          default: "Field validation error for ${label}",
          required: "Please enter ${label}",
          enum: "${label} must be one of [${enum}]",
          whitespace: "${label} cannot be a blank character",
          date: {
            format: "${label} date format is invalid",
            parse: "${label} cannot be converted to a date",
            invalid: "${label} is an invalid date"
          },
          types: {
            string: typeTemplate,
            method: typeTemplate,
            array: typeTemplate,
            object: typeTemplate,
            number: typeTemplate,
            date: typeTemplate,
            boolean: typeTemplate,
            integer: typeTemplate,
            float: typeTemplate,
            regexp: typeTemplate,
            email: typeTemplate,
            url: typeTemplate,
            hex: typeTemplate
          },
          string: {
            len: "${label} must be ${len} characters",
            min: "${label} must be at least ${min} characters",
            max: "${label} must be up to ${max} characters",
            range: "${label} must be between ${min}-${max} characters"
          },
          number: {
            len: "${label} must be equal to ${len}",
            min: "${label} must be minimum ${min}",
            max: "${label} must be maximum ${max}",
            range: "${label} must be between ${min}-${max}"
          },
          array: {
            len: "Must be ${len} ${label}",
            min: "At least ${min} ${label}",
            max: "At most ${max} ${label}",
            range: "The amount of ${label} must be between ${min}-${max}"
          },
          pattern: {
            mismatch: "${label} does not match the pattern ${pattern}"
          }
        }
      },
      Image: {
        preview: "Preview"
      },
      QRCode: {
        expired: "QR code expired",
        refresh: "Refresh",
        scanned: "Scanned"
      },
      ColorPicker: {
        presetEmpty: "Empty",
        transparent: "Transparent",
        singleColor: "Single",
        gradientColor: "Gradient"
      }
    };
    Object.assign({}, localeValues.Modal);
    let localeList = [];
    const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), localeValues.Modal);
    function changeConfirmLocale(newLocale) {
      if (newLocale) {
        const cloneLocale = Object.assign({}, newLocale);
        localeList.push(cloneLocale);
        generateLocale();
        return () => {
          localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
          generateLocale();
        };
      }
      Object.assign({}, localeValues.Modal);
    }
    const LocaleContext = /* @__PURE__ */ reactExports.createContext(void 0);
    const ANT_MARK = "internalMark";
    const LocaleProvider = (props) => {
      const {
        locale: locale2 = {},
        children,
        _ANT_MARK__
      } = props;
      reactExports.useEffect(() => {
        const clearLocale = changeConfirmLocale(locale2 === null || locale2 === void 0 ? void 0 : locale2.Modal);
        return clearLocale;
      }, [locale2]);
      const getMemoizedContextValue = reactExports.useMemo(() => Object.assign(Object.assign({}, locale2), {
        exist: true
      }), [locale2]);
      return /* @__PURE__ */ reactExports.createElement(LocaleContext.Provider, {
        value: getMemoizedContextValue
      }, children);
    };
    function bound01(n2, max2) {
      if (isOnePointZero(n2)) {
        n2 = "100%";
      }
      var isPercent = isPercentage(n2);
      n2 = max2 === 360 ? n2 : Math.min(max2, Math.max(0, parseFloat(n2)));
      if (isPercent) {
        n2 = parseInt(String(n2 * max2), 10) / 100;
      }
      if (Math.abs(n2 - max2) < 1e-6) {
        return 1;
      }
      if (max2 === 360) {
        n2 = (n2 < 0 ? n2 % max2 + max2 : n2 % max2) / parseFloat(String(max2));
      } else {
        n2 = n2 % max2 / parseFloat(String(max2));
      }
      return n2;
    }
    function clamp01(val) {
      return Math.min(1, Math.max(0, val));
    }
    function isOnePointZero(n2) {
      return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
    }
    function isPercentage(n2) {
      return typeof n2 === "string" && n2.indexOf("%") !== -1;
    }
    function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function convertToPercentage(n2) {
      if (n2 <= 1) {
        return "".concat(Number(n2) * 100, "%");
      }
      return n2;
    }
    function pad2(c2) {
      return c2.length === 1 ? "0" + c2 : String(c2);
    }
    function rgbToRgb(r2, g2, b2) {
      return {
        r: bound01(r2, 255) * 255,
        g: bound01(g2, 255) * 255,
        b: bound01(b2, 255) * 255
      };
    }
    function rgbToHsl(r2, g2, b2) {
      r2 = bound01(r2, 255);
      g2 = bound01(g2, 255);
      b2 = bound01(b2, 255);
      var max2 = Math.max(r2, g2, b2);
      var min2 = Math.min(r2, g2, b2);
      var h2 = 0;
      var s = 0;
      var l2 = (max2 + min2) / 2;
      if (max2 === min2) {
        s = 0;
        h2 = 0;
      } else {
        var d2 = max2 - min2;
        s = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
        switch (max2) {
          case r2:
            h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
            break;
          case g2:
            h2 = (b2 - r2) / d2 + 2;
            break;
          case b2:
            h2 = (r2 - g2) / d2 + 4;
            break;
        }
        h2 /= 6;
      }
      return { h: h2, s, l: l2 };
    }
    function hue2rgb(p2, q2, t2) {
      if (t2 < 0) {
        t2 += 1;
      }
      if (t2 > 1) {
        t2 -= 1;
      }
      if (t2 < 1 / 6) {
        return p2 + (q2 - p2) * (6 * t2);
      }
      if (t2 < 1 / 2) {
        return q2;
      }
      if (t2 < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
      }
      return p2;
    }
    function hslToRgb(h2, s, l2) {
      var r2;
      var g2;
      var b2;
      h2 = bound01(h2, 360);
      s = bound01(s, 100);
      l2 = bound01(l2, 100);
      if (s === 0) {
        g2 = l2;
        b2 = l2;
        r2 = l2;
      } else {
        var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
        var p2 = 2 * l2 - q2;
        r2 = hue2rgb(p2, q2, h2 + 1 / 3);
        g2 = hue2rgb(p2, q2, h2);
        b2 = hue2rgb(p2, q2, h2 - 1 / 3);
      }
      return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
    }
    function rgbToHsv(r2, g2, b2) {
      r2 = bound01(r2, 255);
      g2 = bound01(g2, 255);
      b2 = bound01(b2, 255);
      var max2 = Math.max(r2, g2, b2);
      var min2 = Math.min(r2, g2, b2);
      var h2 = 0;
      var v2 = max2;
      var d2 = max2 - min2;
      var s = max2 === 0 ? 0 : d2 / max2;
      if (max2 === min2) {
        h2 = 0;
      } else {
        switch (max2) {
          case r2:
            h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
            break;
          case g2:
            h2 = (b2 - r2) / d2 + 2;
            break;
          case b2:
            h2 = (r2 - g2) / d2 + 4;
            break;
        }
        h2 /= 6;
      }
      return { h: h2, s, v: v2 };
    }
    function hsvToRgb(h2, s, v2) {
      h2 = bound01(h2, 360) * 6;
      s = bound01(s, 100);
      v2 = bound01(v2, 100);
      var i = Math.floor(h2);
      var f2 = h2 - i;
      var p2 = v2 * (1 - s);
      var q2 = v2 * (1 - f2 * s);
      var t2 = v2 * (1 - (1 - f2) * s);
      var mod2 = i % 6;
      var r2 = [v2, q2, p2, p2, t2, v2][mod2];
      var g2 = [t2, v2, v2, q2, p2, p2][mod2];
      var b2 = [p2, p2, t2, v2, v2, q2][mod2];
      return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
    }
    function rgbToHex(r2, g2, b2, allow3Char) {
      var hex = [
        pad2(Math.round(r2).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16))
      ];
      if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex(r2, g2, b2, a, allow4Char) {
      var hex = [
        pad2(Math.round(r2).toString(16)),
        pad2(Math.round(g2).toString(16)),
        pad2(Math.round(b2).toString(16)),
        pad2(convertDecimalToHex(a))
      ];
      if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function convertDecimalToHex(d2) {
      return Math.round(parseFloat(d2) * 255).toString(16);
    }
    function convertHexToDecimal(h2) {
      return parseIntFromHex(h2) / 255;
    }
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }
    function numberInputToObject(color) {
      return {
        r: color >> 16,
        g: (color & 65280) >> 8,
        b: color & 255
      };
    }
    var names = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      goldenrod: "#daa520",
      gold: "#ffd700",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavenderblush: "#fff0f5",
      lavender: "#e6e6fa",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
    function inputToRGB(color) {
      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v2 = null;
      var l2 = null;
      var ok2 = false;
      var format2 = false;
      if (typeof color === "string") {
        color = stringInputToObject(color);
      }
      if (typeof color === "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok2 = true;
          format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = convertToPercentage(color.s);
          v2 = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, s, v2);
          ok2 = true;
          format2 = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = convertToPercentage(color.s);
          l2 = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, s, l2);
          ok2 = true;
          format2 = "hsl";
        }
        if (Object.prototype.hasOwnProperty.call(color, "a")) {
          a = color.a;
        }
      }
      a = boundAlpha(a);
      return {
        ok: ok2,
        format: color.format || format2,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a
      };
    }
    var CSS_INTEGER = "[-\\+]?\\d+%?";
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
    var matchers = {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function stringInputToObject(color) {
      color = color.trim().toLowerCase();
      if (color.length === 0) {
        return false;
      }
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color === "transparent") {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }
      var match5 = matchers.rgb.exec(color);
      if (match5) {
        return { r: match5[1], g: match5[2], b: match5[3] };
      }
      match5 = matchers.rgba.exec(color);
      if (match5) {
        return { r: match5[1], g: match5[2], b: match5[3], a: match5[4] };
      }
      match5 = matchers.hsl.exec(color);
      if (match5) {
        return { h: match5[1], s: match5[2], l: match5[3] };
      }
      match5 = matchers.hsla.exec(color);
      if (match5) {
        return { h: match5[1], s: match5[2], l: match5[3], a: match5[4] };
      }
      match5 = matchers.hsv.exec(color);
      if (match5) {
        return { h: match5[1], s: match5[2], v: match5[3] };
      }
      match5 = matchers.hsva.exec(color);
      if (match5) {
        return { h: match5[1], s: match5[2], v: match5[3], a: match5[4] };
      }
      match5 = matchers.hex8.exec(color);
      if (match5) {
        return {
          r: parseIntFromHex(match5[1]),
          g: parseIntFromHex(match5[2]),
          b: parseIntFromHex(match5[3]),
          a: convertHexToDecimal(match5[4]),
          format: named ? "name" : "hex8"
        };
      }
      match5 = matchers.hex6.exec(color);
      if (match5) {
        return {
          r: parseIntFromHex(match5[1]),
          g: parseIntFromHex(match5[2]),
          b: parseIntFromHex(match5[3]),
          format: named ? "name" : "hex"
        };
      }
      match5 = matchers.hex4.exec(color);
      if (match5) {
        return {
          r: parseIntFromHex(match5[1] + match5[1]),
          g: parseIntFromHex(match5[2] + match5[2]),
          b: parseIntFromHex(match5[3] + match5[3]),
          a: convertHexToDecimal(match5[4] + match5[4]),
          format: named ? "name" : "hex8"
        };
      }
      match5 = matchers.hex3.exec(color);
      if (match5) {
        return {
          r: parseIntFromHex(match5[1] + match5[1]),
          g: parseIntFromHex(match5[2] + match5[2]),
          b: parseIntFromHex(match5[3] + match5[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function isValidCSSUnit(color) {
      return Boolean(matchers.CSS_UNIT.exec(String(color)));
    }
    var TinyColor = (
      /** @class */
      function() {
        function TinyColor2(color, opts) {
          if (color === void 0) {
            color = "";
          }
          if (opts === void 0) {
            opts = {};
          }
          var _a;
          if (color instanceof TinyColor2) {
            return color;
          }
          if (typeof color === "number") {
            color = numberInputToObject(color);
          }
          this.originalInput = color;
          var rgb = inputToRGB(color);
          this.originalInput = color;
          this.r = rgb.r;
          this.g = rgb.g;
          this.b = rgb.b;
          this.a = rgb.a;
          this.roundA = Math.round(100 * this.a) / 100;
          this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
          this.gradientType = opts.gradientType;
          if (this.r < 1) {
            this.r = Math.round(this.r);
          }
          if (this.g < 1) {
            this.g = Math.round(this.g);
          }
          if (this.b < 1) {
            this.b = Math.round(this.b);
          }
          this.isValid = rgb.ok;
        }
        TinyColor2.prototype.isDark = function() {
          return this.getBrightness() < 128;
        };
        TinyColor2.prototype.isLight = function() {
          return !this.isDark();
        };
        TinyColor2.prototype.getBrightness = function() {
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
        };
        TinyColor2.prototype.getLuminance = function() {
          var rgb = this.toRgb();
          var R2;
          var G2;
          var B2;
          var RsRGB = rgb.r / 255;
          var GsRGB = rgb.g / 255;
          var BsRGB = rgb.b / 255;
          if (RsRGB <= 0.03928) {
            R2 = RsRGB / 12.92;
          } else {
            R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
          }
          if (GsRGB <= 0.03928) {
            G2 = GsRGB / 12.92;
          } else {
            G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
          }
          if (BsRGB <= 0.03928) {
            B2 = BsRGB / 12.92;
          } else {
            B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
        };
        TinyColor2.prototype.getAlpha = function() {
          return this.a;
        };
        TinyColor2.prototype.setAlpha = function(alpha) {
          this.a = boundAlpha(alpha);
          this.roundA = Math.round(100 * this.a) / 100;
          return this;
        };
        TinyColor2.prototype.isMonochrome = function() {
          var s = this.toHsl().s;
          return s === 0;
        };
        TinyColor2.prototype.toHsv = function() {
          var hsv = rgbToHsv(this.r, this.g, this.b);
          return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
        };
        TinyColor2.prototype.toHsvString = function() {
          var hsv = rgbToHsv(this.r, this.g, this.b);
          var h2 = Math.round(hsv.h * 360);
          var s = Math.round(hsv.s * 100);
          var v2 = Math.round(hsv.v * 100);
          return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toHsl = function() {
          var hsl = rgbToHsl(this.r, this.g, this.b);
          return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
        };
        TinyColor2.prototype.toHslString = function() {
          var hsl = rgbToHsl(this.r, this.g, this.b);
          var h2 = Math.round(hsl.h * 360);
          var s = Math.round(hsl.s * 100);
          var l2 = Math.round(hsl.l * 100);
          return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toHex = function(allow3Char) {
          if (allow3Char === void 0) {
            allow3Char = false;
          }
          return rgbToHex(this.r, this.g, this.b, allow3Char);
        };
        TinyColor2.prototype.toHexString = function(allow3Char) {
          if (allow3Char === void 0) {
            allow3Char = false;
          }
          return "#" + this.toHex(allow3Char);
        };
        TinyColor2.prototype.toHex8 = function(allow4Char) {
          if (allow4Char === void 0) {
            allow4Char = false;
          }
          return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
        };
        TinyColor2.prototype.toHex8String = function(allow4Char) {
          if (allow4Char === void 0) {
            allow4Char = false;
          }
          return "#" + this.toHex8(allow4Char);
        };
        TinyColor2.prototype.toHexShortString = function(allowShortChar) {
          if (allowShortChar === void 0) {
            allowShortChar = false;
          }
          return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
        };
        TinyColor2.prototype.toRgb = function() {
          return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
          };
        };
        TinyColor2.prototype.toRgbString = function() {
          var r2 = Math.round(this.r);
          var g2 = Math.round(this.g);
          var b2 = Math.round(this.b);
          return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toPercentageRgb = function() {
          var fmt = function(x2) {
            return "".concat(Math.round(bound01(x2, 255) * 100), "%");
          };
          return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a
          };
        };
        TinyColor2.prototype.toPercentageRgbString = function() {
          var rnd = function(x2) {
            return Math.round(bound01(x2, 255) * 100);
          };
          return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
        };
        TinyColor2.prototype.toName = function() {
          if (this.a === 0) {
            return "transparent";
          }
          if (this.a < 1) {
            return false;
          }
          var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
          for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
              return key;
            }
          }
          return false;
        };
        TinyColor2.prototype.toString = function(format2) {
          var formatSet = Boolean(format2);
          format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
          var formattedString = false;
          var hasAlpha = this.a < 1 && this.a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
          if (needsAlphaFormat) {
            if (format2 === "name" && this.a === 0) {
              return this.toName();
            }
            return this.toRgbString();
          }
          if (format2 === "rgb") {
            formattedString = this.toRgbString();
          }
          if (format2 === "prgb") {
            formattedString = this.toPercentageRgbString();
          }
          if (format2 === "hex" || format2 === "hex6") {
            formattedString = this.toHexString();
          }
          if (format2 === "hex3") {
            formattedString = this.toHexString(true);
          }
          if (format2 === "hex4") {
            formattedString = this.toHex8String(true);
          }
          if (format2 === "hex8") {
            formattedString = this.toHex8String();
          }
          if (format2 === "name") {
            formattedString = this.toName();
          }
          if (format2 === "hsl") {
            formattedString = this.toHslString();
          }
          if (format2 === "hsv") {
            formattedString = this.toHsvString();
          }
          return formattedString || this.toHexString();
        };
        TinyColor2.prototype.toNumber = function() {
          return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
        };
        TinyColor2.prototype.clone = function() {
          return new TinyColor2(this.toString());
        };
        TinyColor2.prototype.lighten = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.l += amount / 100;
          hsl.l = clamp01(hsl.l);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.brighten = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var rgb = this.toRgb();
          rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
          rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
          rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
          return new TinyColor2(rgb);
        };
        TinyColor2.prototype.darken = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.l -= amount / 100;
          hsl.l = clamp01(hsl.l);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.tint = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          return this.mix("white", amount);
        };
        TinyColor2.prototype.shade = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          return this.mix("black", amount);
        };
        TinyColor2.prototype.desaturate = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.s -= amount / 100;
          hsl.s = clamp01(hsl.s);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.saturate = function(amount) {
          if (amount === void 0) {
            amount = 10;
          }
          var hsl = this.toHsl();
          hsl.s += amount / 100;
          hsl.s = clamp01(hsl.s);
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.greyscale = function() {
          return this.desaturate(100);
        };
        TinyColor2.prototype.spin = function(amount) {
          var hsl = this.toHsl();
          var hue = (hsl.h + amount) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.mix = function(color, amount) {
          if (amount === void 0) {
            amount = 50;
          }
          var rgb1 = this.toRgb();
          var rgb2 = new TinyColor2(color).toRgb();
          var p2 = amount / 100;
          var rgba = {
            r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
            g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
            b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
            a: (rgb2.a - rgb1.a) * p2 + rgb1.a
          };
          return new TinyColor2(rgba);
        };
        TinyColor2.prototype.analogous = function(results, slices) {
          if (results === void 0) {
            results = 6;
          }
          if (slices === void 0) {
            slices = 30;
          }
          var hsl = this.toHsl();
          var part = 360 / slices;
          var ret = [this];
          for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor2(hsl));
          }
          return ret;
        };
        TinyColor2.prototype.complement = function() {
          var hsl = this.toHsl();
          hsl.h = (hsl.h + 180) % 360;
          return new TinyColor2(hsl);
        };
        TinyColor2.prototype.monochromatic = function(results) {
          if (results === void 0) {
            results = 6;
          }
          var hsv = this.toHsv();
          var h2 = hsv.h;
          var s = hsv.s;
          var v2 = hsv.v;
          var res = [];
          var modification = 1 / results;
          while (results--) {
            res.push(new TinyColor2({ h: h2, s, v: v2 }));
            v2 = (v2 + modification) % 1;
          }
          return res;
        };
        TinyColor2.prototype.splitcomplement = function() {
          var hsl = this.toHsl();
          var h2 = hsl.h;
          return [
            this,
            new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
          ];
        };
        TinyColor2.prototype.onBackground = function(background) {
          var fg2 = this.toRgb();
          var bg2 = new TinyColor2(background).toRgb();
          var alpha = fg2.a + bg2.a * (1 - fg2.a);
          return new TinyColor2({
            r: (fg2.r * fg2.a + bg2.r * bg2.a * (1 - fg2.a)) / alpha,
            g: (fg2.g * fg2.a + bg2.g * bg2.a * (1 - fg2.a)) / alpha,
            b: (fg2.b * fg2.a + bg2.b * bg2.a * (1 - fg2.a)) / alpha,
            a: alpha
          });
        };
        TinyColor2.prototype.triad = function() {
          return this.polyad(3);
        };
        TinyColor2.prototype.tetrad = function() {
          return this.polyad(4);
        };
        TinyColor2.prototype.polyad = function(n2) {
          var hsl = this.toHsl();
          var h2 = hsl.h;
          var result = [this];
          var increment = 360 / n2;
          for (var i = 1; i < n2; i++) {
            result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
          }
          return result;
        };
        TinyColor2.prototype.equals = function(color) {
          return this.toRgbString() === new TinyColor2(color).toRgbString();
        };
        return TinyColor2;
      }()
    );
    var hueStep = 2;
    var saturationStep = 0.16;
    var saturationStep2 = 0.05;
    var brightnessStep1 = 0.05;
    var brightnessStep2 = 0.15;
    var lightColorCount = 5;
    var darkColorCount = 4;
    var darkColorMap = [{
      index: 7,
      opacity: 0.15
    }, {
      index: 6,
      opacity: 0.25
    }, {
      index: 5,
      opacity: 0.3
    }, {
      index: 5,
      opacity: 0.45
    }, {
      index: 5,
      opacity: 0.65
    }, {
      index: 5,
      opacity: 0.85
    }, {
      index: 4,
      opacity: 0.9
    }, {
      index: 3,
      opacity: 0.95
    }, {
      index: 2,
      opacity: 0.97
    }, {
      index: 1,
      opacity: 0.98
    }];
    function toHsv(_ref) {
      var r2 = _ref.r, g2 = _ref.g, b2 = _ref.b;
      var hsv = rgbToHsv(r2, g2, b2);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v
      };
    }
    function toHex(_ref2) {
      var r2 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
      return "#".concat(rgbToHex(r2, g2, b2, false));
    }
    function mix(rgb1, rgb2, amount) {
      var p2 = amount / 100;
      var rgb = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b
      };
      return rgb;
    }
    function getHue(hsv, i, light) {
      var hue;
      if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
      } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
      }
      if (hue < 0) {
        hue += 360;
      } else if (hue >= 360) {
        hue -= 360;
      }
      return hue;
    }
    function getSaturation(hsv, i, light) {
      if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
      }
      var saturation;
      if (light) {
        saturation = hsv.s - saturationStep * i;
      } else if (i === darkColorCount) {
        saturation = hsv.s + saturationStep;
      } else {
        saturation = hsv.s + saturationStep2 * i;
      }
      if (saturation > 1) {
        saturation = 1;
      }
      if (light && i === lightColorCount && saturation > 0.1) {
        saturation = 0.1;
      }
      if (saturation < 0.06) {
        saturation = 0.06;
      }
      return Number(saturation.toFixed(2));
    }
    function getValue(hsv, i, light) {
      var value;
      if (light) {
        value = hsv.v + brightnessStep1 * i;
      } else {
        value = hsv.v - brightnessStep2 * i;
      }
      if (value > 1) {
        value = 1;
      }
      return Number(value.toFixed(2));
    }
    function generate$1(color) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var patterns = [];
      var pColor = inputToRGB(color);
      for (var i = lightColorCount; i > 0; i -= 1) {
        var hsv = toHsv(pColor);
        var colorString = toHex(inputToRGB({
          h: getHue(hsv, i, true),
          s: getSaturation(hsv, i, true),
          v: getValue(hsv, i, true)
        }));
        patterns.push(colorString);
      }
      patterns.push(toHex(pColor));
      for (var _i = 1; _i <= darkColorCount; _i += 1) {
        var _hsv = toHsv(pColor);
        var _colorString = toHex(inputToRGB({
          h: getHue(_hsv, _i),
          s: getSaturation(_hsv, _i),
          v: getValue(_hsv, _i)
        }));
        patterns.push(_colorString);
      }
      if (opts.theme === "dark") {
        return darkColorMap.map(function(_ref3) {
          var index = _ref3.index, opacity = _ref3.opacity;
          var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
          return darkColorString;
        });
      }
      return patterns;
    }
    var presetPrimaryColors = {
      "red": "#F5222D",
      "volcano": "#FA541C",
      "orange": "#FA8C16",
      "gold": "#FAAD14",
      "yellow": "#FADB14",
      "lime": "#A0D911",
      "green": "#52C41A",
      "cyan": "#13C2C2",
      "blue": "#1677FF",
      "geekblue": "#2F54EB",
      "purple": "#722ED1",
      "magenta": "#EB2F96",
      "grey": "#666666"
    };
    var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
    red.primary = red[5];
    var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
    volcano.primary = volcano[5];
    var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
    orange.primary = orange[5];
    var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
    gold.primary = gold[5];
    var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
    yellow.primary = yellow[5];
    var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
    lime.primary = lime[5];
    var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
    green.primary = green[5];
    var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
    cyan.primary = cyan[5];
    var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
    blue.primary = blue[5];
    var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
    geekblue.primary = geekblue[5];
    var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
    purple.primary = purple[5];
    var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
    magenta.primary = magenta[5];
    var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
    grey.primary = grey[5];
    var presetPalettes = {
      red,
      volcano,
      orange,
      gold,
      yellow,
      lime,
      green,
      cyan,
      blue,
      geekblue,
      purple,
      magenta,
      grey
    };
    const defaultPresetColors = {
      blue: "#1677FF",
      purple: "#722ED1",
      cyan: "#13C2C2",
      green: "#52C41A",
      magenta: "#EB2F96",
      /**
       * @deprecated Use magenta instead
       */
      pink: "#EB2F96",
      red: "#F5222D",
      orange: "#FA8C16",
      yellow: "#FADB14",
      volcano: "#FA541C",
      geekblue: "#2F54EB",
      gold: "#FAAD14",
      lime: "#A0D911"
    };
    const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
      // Color
      colorPrimary: "#1677ff",
      colorSuccess: "#52c41a",
      colorWarning: "#faad14",
      colorError: "#ff4d4f",
      colorInfo: "#1677ff",
      colorLink: "",
      colorTextBase: "",
      colorBgBase: "",
      // Font
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
      fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
      fontSize: 14,
      // Line
      lineWidth: 1,
      lineType: "solid",
      // Motion
      motionUnit: 0.1,
      motionBase: 0,
      motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
      motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
      motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
      motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
      // Radius
      borderRadius: 6,
      // Size
      sizeUnit: 4,
      sizeStep: 4,
      sizePopupArrow: 16,
      // Control Base
      controlHeight: 32,
      // zIndex
      zIndexBase: 0,
      zIndexPopupBase: 1e3,
      // Image
      opacityImage: 1,
      // Wireframe
      wireframe: false,
      // Motion
      motion: true
    });
    function genColorMapToken(seed, _ref) {
      let {
        generateColorPalettes: generateColorPalettes2,
        generateNeutralColorPalettes: generateNeutralColorPalettes2
      } = _ref;
      const {
        colorSuccess: colorSuccessBase,
        colorWarning: colorWarningBase,
        colorError: colorErrorBase,
        colorInfo: colorInfoBase,
        colorPrimary: colorPrimaryBase,
        colorBgBase,
        colorTextBase
      } = seed;
      const primaryColors = generateColorPalettes2(colorPrimaryBase);
      const successColors = generateColorPalettes2(colorSuccessBase);
      const warningColors = generateColorPalettes2(colorWarningBase);
      const errorColors = generateColorPalettes2(colorErrorBase);
      const infoColors = generateColorPalettes2(colorInfoBase);
      const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
      const colorLink = seed.colorLink || seed.colorInfo;
      const linkColors = generateColorPalettes2(colorLink);
      const colorErrorBgFilledHover = new TinyColor(errorColors[1]).mix(new TinyColor(errorColors[3]), 50).toHexString();
      return Object.assign(Object.assign({}, neutralColors), {
        colorPrimaryBg: primaryColors[1],
        colorPrimaryBgHover: primaryColors[2],
        colorPrimaryBorder: primaryColors[3],
        colorPrimaryBorderHover: primaryColors[4],
        colorPrimaryHover: primaryColors[5],
        colorPrimary: primaryColors[6],
        colorPrimaryActive: primaryColors[7],
        colorPrimaryTextHover: primaryColors[8],
        colorPrimaryText: primaryColors[9],
        colorPrimaryTextActive: primaryColors[10],
        colorSuccessBg: successColors[1],
        colorSuccessBgHover: successColors[2],
        colorSuccessBorder: successColors[3],
        colorSuccessBorderHover: successColors[4],
        colorSuccessHover: successColors[4],
        colorSuccess: successColors[6],
        colorSuccessActive: successColors[7],
        colorSuccessTextHover: successColors[8],
        colorSuccessText: successColors[9],
        colorSuccessTextActive: successColors[10],
        colorErrorBg: errorColors[1],
        colorErrorBgHover: errorColors[2],
        colorErrorBgFilledHover,
        colorErrorBgActive: errorColors[3],
        colorErrorBorder: errorColors[3],
        colorErrorBorderHover: errorColors[4],
        colorErrorHover: errorColors[5],
        colorError: errorColors[6],
        colorErrorActive: errorColors[7],
        colorErrorTextHover: errorColors[8],
        colorErrorText: errorColors[9],
        colorErrorTextActive: errorColors[10],
        colorWarningBg: warningColors[1],
        colorWarningBgHover: warningColors[2],
        colorWarningBorder: warningColors[3],
        colorWarningBorderHover: warningColors[4],
        colorWarningHover: warningColors[4],
        colorWarning: warningColors[6],
        colorWarningActive: warningColors[7],
        colorWarningTextHover: warningColors[8],
        colorWarningText: warningColors[9],
        colorWarningTextActive: warningColors[10],
        colorInfoBg: infoColors[1],
        colorInfoBgHover: infoColors[2],
        colorInfoBorder: infoColors[3],
        colorInfoBorderHover: infoColors[4],
        colorInfoHover: infoColors[4],
        colorInfo: infoColors[6],
        colorInfoActive: infoColors[7],
        colorInfoTextHover: infoColors[8],
        colorInfoText: infoColors[9],
        colorInfoTextActive: infoColors[10],
        colorLinkHover: linkColors[4],
        colorLink: linkColors[6],
        colorLinkActive: linkColors[7],
        colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
        colorWhite: "#fff"
      });
    }
    const genRadius = (radiusBase) => {
      let radiusLG = radiusBase;
      let radiusSM = radiusBase;
      let radiusXS = radiusBase;
      let radiusOuter = radiusBase;
      if (radiusBase < 6 && radiusBase >= 5) {
        radiusLG = radiusBase + 1;
      } else if (radiusBase < 16 && radiusBase >= 6) {
        radiusLG = radiusBase + 2;
      } else if (radiusBase >= 16) {
        radiusLG = 16;
      }
      if (radiusBase < 7 && radiusBase >= 5) {
        radiusSM = 4;
      } else if (radiusBase < 8 && radiusBase >= 7) {
        radiusSM = 5;
      } else if (radiusBase < 14 && radiusBase >= 8) {
        radiusSM = 6;
      } else if (radiusBase < 16 && radiusBase >= 14) {
        radiusSM = 7;
      } else if (radiusBase >= 16) {
        radiusSM = 8;
      }
      if (radiusBase < 6 && radiusBase >= 2) {
        radiusXS = 1;
      } else if (radiusBase >= 6) {
        radiusXS = 2;
      }
      if (radiusBase > 4 && radiusBase < 8) {
        radiusOuter = 4;
      } else if (radiusBase >= 8) {
        radiusOuter = 6;
      }
      return {
        borderRadius: radiusBase,
        borderRadiusXS: radiusXS,
        borderRadiusSM: radiusSM,
        borderRadiusLG: radiusLG,
        borderRadiusOuter: radiusOuter
      };
    };
    function genCommonMapToken(token2) {
      const {
        motionUnit,
        motionBase,
        borderRadius,
        lineWidth
      } = token2;
      return Object.assign({
        // motion
        motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
        motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
        motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
        // line
        lineWidthBold: lineWidth + 1
      }, genRadius(borderRadius));
    }
    const genControlHeight = (token2) => {
      const {
        controlHeight
      } = token2;
      return {
        controlHeightSM: controlHeight * 0.75,
        controlHeightXS: controlHeight * 0.5,
        controlHeightLG: controlHeight * 1.25
      };
    };
    function getLineHeight(fontSize) {
      return (fontSize + 8) / fontSize;
    }
    function getFontSizes(base) {
      const fontSizes = new Array(10).fill(null).map((_, index) => {
        const i = index - 1;
        const baseSize = base * Math.pow(Math.E, i / 5);
        const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
        return Math.floor(intSize / 2) * 2;
      });
      fontSizes[1] = base;
      return fontSizes.map((size) => ({
        size,
        lineHeight: getLineHeight(size)
      }));
    }
    const genFontMapToken = (fontSize) => {
      const fontSizePairs = getFontSizes(fontSize);
      const fontSizes = fontSizePairs.map((pair) => pair.size);
      const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
      const fontSizeMD = fontSizes[1];
      const fontSizeSM = fontSizes[0];
      const fontSizeLG = fontSizes[2];
      const lineHeight = lineHeights[1];
      const lineHeightSM = lineHeights[0];
      const lineHeightLG = lineHeights[2];
      return {
        fontSizeSM,
        fontSize: fontSizeMD,
        fontSizeLG,
        fontSizeXL: fontSizes[3],
        fontSizeHeading1: fontSizes[6],
        fontSizeHeading2: fontSizes[5],
        fontSizeHeading3: fontSizes[4],
        fontSizeHeading4: fontSizes[3],
        fontSizeHeading5: fontSizes[2],
        lineHeight,
        lineHeightLG,
        lineHeightSM,
        fontHeight: Math.round(lineHeight * fontSizeMD),
        fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
        fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
        lineHeightHeading1: lineHeights[6],
        lineHeightHeading2: lineHeights[5],
        lineHeightHeading3: lineHeights[4],
        lineHeightHeading4: lineHeights[3],
        lineHeightHeading5: lineHeights[2]
      };
    };
    function genSizeMapToken(token2) {
      const {
        sizeUnit,
        sizeStep
      } = token2;
      return {
        sizeXXL: sizeUnit * (sizeStep + 8),
        // 48
        sizeXL: sizeUnit * (sizeStep + 4),
        // 32
        sizeLG: sizeUnit * (sizeStep + 2),
        // 24
        sizeMD: sizeUnit * (sizeStep + 1),
        // 20
        sizeMS: sizeUnit * sizeStep,
        // 16
        size: sizeUnit * sizeStep,
        // 16
        sizeSM: sizeUnit * (sizeStep - 1),
        // 12
        sizeXS: sizeUnit * (sizeStep - 2),
        // 8
        sizeXXS: sizeUnit * (sizeStep - 3)
        // 4
      };
    }
    const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
    const getSolidColor = (baseColor, brightness) => {
      const instance = new TinyColor(baseColor);
      return instance.darken(brightness).toHexString();
    };
    const generateColorPalettes = (baseColor) => {
      const colors = generate$1(baseColor);
      return {
        1: colors[0],
        2: colors[1],
        3: colors[2],
        4: colors[3],
        5: colors[4],
        6: colors[5],
        7: colors[6],
        8: colors[4],
        9: colors[5],
        10: colors[6]
        // 8: colors[7],
        // 9: colors[8],
        // 10: colors[9],
      };
    };
    const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
      const colorBgBase = bgBaseColor || "#fff";
      const colorTextBase = textBaseColor || "#000";
      return {
        colorBgBase,
        colorTextBase,
        colorText: getAlphaColor$1(colorTextBase, 0.88),
        colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
        colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
        colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
        colorFill: getAlphaColor$1(colorTextBase, 0.15),
        colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
        colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
        colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
        colorBgSolid: getAlphaColor$1(colorTextBase, 1),
        colorBgSolidHover: getAlphaColor$1(colorTextBase, 0.75),
        colorBgSolidActive: getAlphaColor$1(colorTextBase, 0.95),
        colorBgLayout: getSolidColor(colorBgBase, 4),
        colorBgContainer: getSolidColor(colorBgBase, 0),
        colorBgElevated: getSolidColor(colorBgBase, 0),
        colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
        colorBgBlur: "transparent",
        colorBorder: getSolidColor(colorBgBase, 15),
        colorBorderSecondary: getSolidColor(colorBgBase, 6)
      };
    };
    function derivative(token2) {
      presetPrimaryColors.pink = presetPrimaryColors.magenta;
      presetPalettes.pink = presetPalettes.magenta;
      const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
        const colors = token2[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate$1(token2[colorKey]);
        return new Array(10).fill(1).reduce((prev2, _, i) => {
          prev2[`${colorKey}-${i + 1}`] = colors[i];
          prev2[`${colorKey}${i + 1}`] = colors[i];
          return prev2;
        }, {});
      }).reduce((prev2, cur) => {
        prev2 = Object.assign(Object.assign({}, prev2), cur);
        return prev2;
      }, {});
      return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
        generateColorPalettes,
        generateNeutralColorPalettes
      })), genFontMapToken(token2.fontSize)), genSizeMapToken(token2)), genControlHeight(token2)), genCommonMapToken(token2));
    }
    const defaultTheme = createTheme(derivative);
    const defaultConfig = {
      token: seedToken,
      override: {
        override: seedToken
      },
      hashed: true
    };
    const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
    const defaultPrefixCls = "ant";
    const defaultIconPrefixCls = "anticon";
    const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
    };
    const ConfigContext = /* @__PURE__ */ reactExports.createContext({
      // We provide a default function for Context without provider
      getPrefixCls: defaultGetPrefixCls,
      iconPrefixCls: defaultIconPrefixCls
    });
    const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
    function getStyle(globalPrefixCls2, theme) {
      const variables = {};
      const formatColor = (color, updater) => {
        let clone2 = color.clone();
        clone2 = (updater === null || updater === void 0 ? void 0 : updater(clone2)) || clone2;
        return clone2.toRgbString();
      };
      const fillColor = (colorVal, type) => {
        const baseColor = new TinyColor(colorVal);
        const colorPalettes = generate$1(baseColor.toRgbString());
        variables[`${type}-color`] = formatColor(baseColor);
        variables[`${type}-color-disabled`] = colorPalettes[1];
        variables[`${type}-color-hover`] = colorPalettes[4];
        variables[`${type}-color-active`] = colorPalettes[6];
        variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
        variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
        variables[`${type}-color-deprecated-border`] = colorPalettes[2];
      };
      if (theme.primaryColor) {
        fillColor(theme.primaryColor, "primary");
        const primaryColor = new TinyColor(theme.primaryColor);
        const primaryColors = generate$1(primaryColor.toRgbString());
        primaryColors.forEach((color, index) => {
          variables[`primary-${index + 1}`] = color;
        });
        variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
        variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
        variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
        variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
        variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
        const primaryActiveColor = new TinyColor(primaryColors[0]);
        variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
        variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
      }
      if (theme.successColor) {
        fillColor(theme.successColor, "success");
      }
      if (theme.warningColor) {
        fillColor(theme.warningColor, "warning");
      }
      if (theme.errorColor) {
        fillColor(theme.errorColor, "error");
      }
      if (theme.infoColor) {
        fillColor(theme.infoColor, "info");
      }
      const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
      return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
    }
    function registerTheme(globalPrefixCls2, theme) {
      const style2 = getStyle(globalPrefixCls2, theme);
      if (canUseDom()) {
        updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
      }
    }
    const DisabledContext = /* @__PURE__ */ reactExports.createContext(false);
    const DisabledContextProvider = (_ref) => {
      let {
        children,
        disabled
      } = _ref;
      const originDisabled = reactExports.useContext(DisabledContext);
      return /* @__PURE__ */ reactExports.createElement(DisabledContext.Provider, {
        value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
      }, children);
    };
    const SizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
    const SizeContextProvider = (_ref) => {
      let {
        children,
        size
      } = _ref;
      const originSize = reactExports.useContext(SizeContext);
      return /* @__PURE__ */ reactExports.createElement(SizeContext.Provider, {
        value: size || originSize
      }, children);
    };
    function useConfig() {
      const componentDisabled = reactExports.useContext(DisabledContext);
      const componentSize = reactExports.useContext(SizeContext);
      return {
        componentDisabled,
        componentSize
      };
    }
    var AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
      _classCallCheck(this, AbstractCalculator2);
    });
    var CALC_UNIT = "CALC_UNIT";
    var regexp = new RegExp(CALC_UNIT, "g");
    function unit(value) {
      if (typeof value === "number") {
        return "".concat(value).concat(CALC_UNIT);
      }
      return value;
    }
    var CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
      _inherits(CSSCalculator2, _AbstractCalculator);
      var _super = _createSuper(CSSCalculator2);
      function CSSCalculator2(num, unitlessCssVar) {
        var _this;
        _classCallCheck(this, CSSCalculator2);
        _this = _super.call(this);
        _defineProperty$1(_assertThisInitialized(_this), "result", "");
        _defineProperty$1(_assertThisInitialized(_this), "unitlessCssVar", void 0);
        _defineProperty$1(_assertThisInitialized(_this), "lowPriority", void 0);
        var numType = _typeof$1(num);
        _this.unitlessCssVar = unitlessCssVar;
        if (num instanceof CSSCalculator2) {
          _this.result = "(".concat(num.result, ")");
        } else if (numType === "number") {
          _this.result = unit(num);
        } else if (numType === "string") {
          _this.result = num;
        }
        return _this;
      }
      _createClass(CSSCalculator2, [{
        key: "add",
        value: function add2(num) {
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " + ").concat(num.getResult());
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " + ").concat(unit(num));
          }
          this.lowPriority = true;
          return this;
        }
      }, {
        key: "sub",
        value: function sub(num) {
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " - ").concat(num.getResult());
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " - ").concat(unit(num));
          }
          this.lowPriority = true;
          return this;
        }
      }, {
        key: "mul",
        value: function mul(num) {
          if (this.lowPriority) {
            this.result = "(".concat(this.result, ")");
          }
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " * ").concat(num.getResult(true));
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " * ").concat(num);
          }
          this.lowPriority = false;
          return this;
        }
      }, {
        key: "div",
        value: function div(num) {
          if (this.lowPriority) {
            this.result = "(".concat(this.result, ")");
          }
          if (num instanceof CSSCalculator2) {
            this.result = "".concat(this.result, " / ").concat(num.getResult(true));
          } else if (typeof num === "number" || typeof num === "string") {
            this.result = "".concat(this.result, " / ").concat(num);
          }
          this.lowPriority = false;
          return this;
        }
      }, {
        key: "getResult",
        value: function getResult(force) {
          return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
        }
      }, {
        key: "equal",
        value: function equal(options) {
          var _this2 = this;
          var _ref = options || {}, cssUnit = _ref.unit;
          var mergedUnit = true;
          if (typeof cssUnit === "boolean") {
            mergedUnit = cssUnit;
          } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
            return _this2.result.includes(cssVar);
          })) {
            mergedUnit = false;
          }
          this.result = this.result.replace(regexp, mergedUnit ? "px" : "");
          if (typeof this.lowPriority !== "undefined") {
            return "calc(".concat(this.result, ")");
          }
          return this.result;
        }
      }]);
      return CSSCalculator2;
    }(AbstractCalculator);
    var NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
      _inherits(NumCalculator2, _AbstractCalculator);
      var _super = _createSuper(NumCalculator2);
      function NumCalculator2(num) {
        var _this;
        _classCallCheck(this, NumCalculator2);
        _this = _super.call(this);
        _defineProperty$1(_assertThisInitialized(_this), "result", 0);
        if (num instanceof NumCalculator2) {
          _this.result = num.result;
        } else if (typeof num === "number") {
          _this.result = num;
        }
        return _this;
      }
      _createClass(NumCalculator2, [{
        key: "add",
        value: function add2(num) {
          if (num instanceof NumCalculator2) {
            this.result += num.result;
          } else if (typeof num === "number") {
            this.result += num;
          }
          return this;
        }
      }, {
        key: "sub",
        value: function sub(num) {
          if (num instanceof NumCalculator2) {
            this.result -= num.result;
          } else if (typeof num === "number") {
            this.result -= num;
          }
          return this;
        }
      }, {
        key: "mul",
        value: function mul(num) {
          if (num instanceof NumCalculator2) {
            this.result *= num.result;
          } else if (typeof num === "number") {
            this.result *= num;
          }
          return this;
        }
      }, {
        key: "div",
        value: function div(num) {
          if (num instanceof NumCalculator2) {
            this.result /= num.result;
          } else if (typeof num === "number") {
            this.result /= num;
          }
          return this;
        }
      }, {
        key: "equal",
        value: function equal() {
          return this.result;
        }
      }]);
      return NumCalculator2;
    }(AbstractCalculator);
    var genCalc = function genCalc2(type, unitlessCssVar) {
      var Calculator = type === "css" ? CSSCalculator : NumCalculator;
      return function(num) {
        return new Calculator(num, unitlessCssVar);
      };
    };
    var getCompVarPrefix = function getCompVarPrefix2(component, prefix) {
      return "".concat([prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
    };
    function useEvent(callback) {
      var fnRef = reactExports.useRef();
      fnRef.current = callback;
      var memoFn = reactExports.useCallback(function() {
        var _fnRef$current;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
      }, []);
      return memoFn;
    }
    function useSafeState(defaultValue) {
      var destroyRef = reactExports.useRef(false);
      var _React$useState = reactExports.useState(defaultValue), _React$useState2 = _slicedToArray$1(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
      reactExports.useEffect(function() {
        destroyRef.current = false;
        return function() {
          destroyRef.current = true;
        };
      }, []);
      function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
          return;
        }
        setValue(updater);
      }
      return [value, safeSetState];
    }
    function getComponentToken(component, token2, defaultToken, options) {
      var customToken = _objectSpread2$1({}, token2[component]);
      if (options !== null && options !== void 0 && options.deprecatedTokens) {
        var deprecatedTokens = options.deprecatedTokens;
        deprecatedTokens.forEach(function(_ref) {
          var _ref2 = _slicedToArray$1(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
          if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
            var _customToken$newToken;
            (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
          }
        });
      }
      var mergedToken = _objectSpread2$1(_objectSpread2$1({}, defaultToken), customToken);
      Object.keys(mergedToken).forEach(function(key) {
        if (mergedToken[key] === token2[key]) {
          delete mergedToken[key];
        }
      });
      return mergedToken;
    }
    var enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
    var recording = true;
    function merge() {
      for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
      }
      if (!enableStatistic) {
        return Object.assign.apply(Object, [{}].concat(objs));
      }
      recording = false;
      var ret = {};
      objs.forEach(function(obj) {
        if (_typeof$1(obj) !== "object") {
          return;
        }
        var keys2 = Object.keys(obj);
        keys2.forEach(function(key) {
          Object.defineProperty(ret, key, {
            configurable: true,
            enumerable: true,
            get: function get2() {
              return obj[key];
            }
          });
        });
      });
      recording = true;
      return ret;
    }
    var statistic = {};
    function noop() {
    }
    var statisticToken = function statisticToken2(token2) {
      var tokenKeys2;
      var proxy = token2;
      var flush = noop;
      if (enableStatistic && typeof Proxy !== "undefined") {
        tokenKeys2 = /* @__PURE__ */ new Set();
        proxy = new Proxy(token2, {
          get: function get2(obj, prop) {
            if (recording) {
              var _tokenKeys;
              (_tokenKeys = tokenKeys2) === null || _tokenKeys === void 0 || _tokenKeys.add(prop);
            }
            return obj[prop];
          }
        });
        flush = function flush2(componentName, componentToken) {
          var _statistic$componentN;
          statistic[componentName] = {
            global: Array.from(tokenKeys2),
            component: _objectSpread2$1(_objectSpread2$1({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
          };
        };
      }
      return {
        token: proxy,
        keys: tokenKeys2,
        flush
      };
    };
    function getDefaultComponentToken(component, token2, getDefaultToken) {
      if (typeof getDefaultToken === "function") {
        var _token$component;
        return getDefaultToken(merge(token2, (_token$component = token2[component]) !== null && _token$component !== void 0 ? _token$component : {}));
      }
      return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
    }
    function genMaxMin(type) {
      if (type === "js") {
        return {
          max: Math.max,
          min: Math.min
        };
      }
      return {
        max: function max2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return "max(".concat(args.map(function(value) {
            return unit$1(value);
          }).join(","), ")");
        },
        min: function min2() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return "min(".concat(args.map(function(value) {
            return unit$1(value);
          }).join(","), ")");
        }
      };
    }
    var BEAT_LIMIT = 1e3 * 60 * 10;
    var ArrayKeyMap = /* @__PURE__ */ function() {
      function ArrayKeyMap2() {
        _classCallCheck(this, ArrayKeyMap2);
        _defineProperty$1(this, "map", /* @__PURE__ */ new Map());
        _defineProperty$1(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
        _defineProperty$1(this, "nextID", 0);
        _defineProperty$1(this, "lastAccessBeat", /* @__PURE__ */ new Map());
        _defineProperty$1(this, "accessBeat", 0);
      }
      _createClass(ArrayKeyMap2, [{
        key: "set",
        value: function set2(keys2, value) {
          this.clear();
          var compositeKey = this.getCompositeKey(keys2);
          this.map.set(compositeKey, value);
          this.lastAccessBeat.set(compositeKey, Date.now());
        }
      }, {
        key: "get",
        value: function get2(keys2) {
          var compositeKey = this.getCompositeKey(keys2);
          var cache = this.map.get(compositeKey);
          this.lastAccessBeat.set(compositeKey, Date.now());
          this.accessBeat += 1;
          return cache;
        }
      }, {
        key: "getCompositeKey",
        value: function getCompositeKey(keys2) {
          var _this = this;
          var ids = keys2.map(function(key) {
            if (key && _typeof$1(key) === "object") {
              return "obj_".concat(_this.getObjectID(key));
            }
            return "".concat(_typeof$1(key), "_").concat(key);
          });
          return ids.join("|");
        }
      }, {
        key: "getObjectID",
        value: function getObjectID(obj) {
          if (this.objectIDMap.has(obj)) {
            return this.objectIDMap.get(obj);
          }
          var id2 = this.nextID;
          this.objectIDMap.set(obj, id2);
          this.nextID += 1;
          return id2;
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this2 = this;
          if (this.accessBeat > 1e4) {
            var now2 = Date.now();
            this.lastAccessBeat.forEach(function(beat, key) {
              if (now2 - beat > BEAT_LIMIT) {
                _this2.map.delete(key);
                _this2.lastAccessBeat.delete(key);
              }
            });
            this.accessBeat = 0;
          }
        }
      }]);
      return ArrayKeyMap2;
    }();
    var uniqueMap = new ArrayKeyMap();
    function useUniqueMemo(memoFn, deps) {
      return React.useMemo(function() {
        var cachedValue = uniqueMap.get(deps);
        if (cachedValue) {
          return cachedValue;
        }
        var newValue = memoFn();
        uniqueMap.set(deps, newValue);
        return newValue;
      }, deps);
    }
    var useDefaultCSP = function useDefaultCSP2() {
      return {};
    };
    function genStyleUtils(config) {
      var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? useDefaultCSP : _config$useCSP, useToken2 = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
      function genStyleHooks2(component, styleFn, getDefaultToken, options) {
        var componentName = Array.isArray(component) ? component[0] : component;
        function prefixToken(key) {
          return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
        }
        var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
        var originCompUnitless = typeof getCompUnitless === "function" ? getCompUnitless(component) : {};
        var compUnitless = _objectSpread2$1(_objectSpread2$1({}, originCompUnitless), {}, _defineProperty$1({}, prefixToken("zIndexPopup"), true));
        Object.keys(originUnitless).forEach(function(key) {
          compUnitless[prefixToken(key)] = originUnitless[key];
        });
        var mergedOptions = _objectSpread2$1(_objectSpread2$1({}, options), {}, {
          unitless: compUnitless,
          prefixToken
        });
        var useStyle2 = genComponentStyleHook2(component, styleFn, getDefaultToken, mergedOptions);
        var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
        return function(prefixCls) {
          var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
          var _useStyle = useStyle2(prefixCls, rootCls), _useStyle2 = _slicedToArray$1(_useStyle, 2), hashId = _useStyle2[1];
          var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = _slicedToArray$1(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
          return [wrapCSSVar, hashId, cssVarCls];
        };
      }
      function genCSSVarRegister(component, getDefaultToken, options) {
        var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = _options$injectStyle === void 0 ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore2 = options.ignore;
        var CSSVarRegister = function CSSVarRegister2(_ref) {
          var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = _ref$cssVar === void 0 ? {} : _ref$cssVar;
          var _useToken = useToken2(), realToken = _useToken.realToken;
          useCSSVarRegister({
            path: [component],
            prefix: cssVar.prefix,
            key: cssVar.key,
            unitless: compUnitless,
            ignore: ignore2,
            token: realToken,
            scope: rootCls
          }, function() {
            var defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
            var componentToken = getComponentToken(component, realToken, defaultToken, {
              deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
            });
            Object.keys(defaultToken).forEach(function(key) {
              componentToken[prefixToken(key)] = componentToken[key];
              delete componentToken[key];
            });
            return componentToken;
          });
          return null;
        };
        var useCSSVar = function useCSSVar2(rootCls) {
          var _useToken2 = useToken2(), cssVar = _useToken2.cssVar;
          return [function(node2) {
            return injectStyle && cssVar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSVarRegister, {
              rootCls,
              cssVar,
              component
            }), node2) : node2;
          }, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
        };
        return useCSSVar;
      }
      function genComponentStyleHook2(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
        var _cells = _slicedToArray$1(cells, 1), component = _cells[0];
        var concatComponent = cells.join("-");
        var mergedLayer = config.layer || {
          name: "antd"
        };
        return function(prefixCls) {
          var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
          var _useToken3 = useToken2(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token2 = _useToken3.token, cssVar = _useToken3.cssVar;
          var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
          var csp = useCSP();
          var type = cssVar ? "css" : "js";
          var calc = useUniqueMemo(function() {
            var unitlessCssVar = /* @__PURE__ */ new Set();
            if (cssVar) {
              Object.keys(options.unitless || {}).forEach(function(key) {
                unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
                unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)));
              });
            }
            return genCalc(type, unitlessCssVar);
          }, [type, component, cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix]);
          var _genMaxMin = genMaxMin(type), max2 = _genMaxMin.max, min2 = _genMaxMin.min;
          var sharedConfig = {
            theme,
            token: token2,
            hashId,
            nonce: function nonce() {
              return csp.nonce;
            },
            clientOnly: options.clientOnly,
            layer: mergedLayer,
            // antd is always at top of styles
            order: options.order || -999
          };
          useStyleRegister(_objectSpread2$1(_objectSpread2$1({}, sharedConfig), {}, {
            clientOnly: false,
            path: ["Shared", rootPrefixCls]
          }), function() {
            return typeof getResetStyles === "function" ? getResetStyles(token2) : [];
          });
          var wrapSSR = useStyleRegister(_objectSpread2$1(_objectSpread2$1({}, sharedConfig), {}, {
            path: [concatComponent, prefixCls, iconPrefixCls]
          }), function() {
            if (options.injectStyle === false) {
              return [];
            }
            var _statisticToken = statisticToken(token2), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
            var defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
            var componentCls = ".".concat(prefixCls);
            var componentToken = getComponentToken(component, realToken, defaultComponentToken, {
              deprecatedTokens: options.deprecatedTokens
            });
            if (cssVar && defaultComponentToken && _typeof$1(defaultComponentToken) === "object") {
              Object.keys(defaultComponentToken).forEach(function(key) {
                defaultComponentToken[key] = "var(".concat(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)), ")");
              });
            }
            var mergedToken = merge(proxyToken, {
              componentCls,
              prefixCls,
              iconCls: ".".concat(iconPrefixCls),
              antCls: ".".concat(rootPrefixCls),
              calc,
              // @ts-ignore
              max: max2,
              // @ts-ignore
              min: min2
            }, cssVar ? defaultComponentToken : componentToken);
            var styleInterpolation = styleFn(mergedToken, {
              hashId,
              prefixCls,
              rootPrefixCls,
              iconPrefixCls
            });
            flush(component, componentToken);
            var commonStyle = typeof getCommonStyle === "function" ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
            return [options.resetStyle === false ? null : commonStyle, styleInterpolation];
          });
          return [wrapSSR, hashId];
        };
      }
      function genSubStyleComponent2(componentName, styleFn, getDefaultToken) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var useStyle2 = genComponentStyleHook2(componentName, styleFn, getDefaultToken, _objectSpread2$1({
          resetStyle: false,
          // Sub Style should default after root one
          order: -998
        }, options));
        var StyledComponent = function StyledComponent2(_ref2) {
          var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
          useStyle2(prefixCls, rootCls);
          return null;
        };
        return StyledComponent;
      }
      return {
        genStyleHooks: genStyleHooks2,
        genSubStyleComponent: genSubStyleComponent2,
        genComponentStyleHook: genComponentStyleHook2
      };
    }
    const version$1 = "5.21.6";
    function isStableColor(color) {
      return color >= 0 && color <= 255;
    }
    function getAlphaColor(frontColor, backgroundColor) {
      const {
        r: fR,
        g: fG,
        b: fB,
        a: originAlpha
      } = new TinyColor(frontColor).toRgb();
      if (originAlpha < 1) {
        return frontColor;
      }
      const {
        r: bR,
        g: bG,
        b: bB
      } = new TinyColor(backgroundColor).toRgb();
      for (let fA = 0.01; fA <= 1; fA += 0.01) {
        const r2 = Math.round((fR - bR * (1 - fA)) / fA);
        const g2 = Math.round((fG - bG * (1 - fA)) / fA);
        const b2 = Math.round((fB - bB * (1 - fA)) / fA);
        if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
          return new TinyColor({
            r: r2,
            g: g2,
            b: b2,
            a: Math.round(fA * 100) / 100
          }).toRgbString();
        }
      }
      return new TinyColor({
        r: fR,
        g: fG,
        b: fB,
        a: 1
      }).toRgbString();
    }
    var __rest$4 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    function formatToken(derivativeToken) {
      const {
        override
      } = derivativeToken, restToken = __rest$4(derivativeToken, ["override"]);
      const overrideTokens = Object.assign({}, override);
      Object.keys(seedToken).forEach((token2) => {
        delete overrideTokens[token2];
      });
      const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
      const screenXS = 480;
      const screenSM = 576;
      const screenMD = 768;
      const screenLG = 992;
      const screenXL = 1200;
      const screenXXL = 1600;
      if (mergedToken.motion === false) {
        const fastDuration = "0s";
        mergedToken.motionDurationFast = fastDuration;
        mergedToken.motionDurationMid = fastDuration;
        mergedToken.motionDurationSlow = fastDuration;
      }
      const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
        // ============== Background ============== //
        colorFillContent: mergedToken.colorFillSecondary,
        colorFillContentHover: mergedToken.colorFill,
        colorFillAlter: mergedToken.colorFillQuaternary,
        colorBgContainerDisabled: mergedToken.colorFillTertiary,
        // ============== Split ============== //
        colorBorderBg: mergedToken.colorBgContainer,
        colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
        // ============== Text ============== //
        colorTextPlaceholder: mergedToken.colorTextQuaternary,
        colorTextDisabled: mergedToken.colorTextQuaternary,
        colorTextHeading: mergedToken.colorText,
        colorTextLabel: mergedToken.colorTextSecondary,
        colorTextDescription: mergedToken.colorTextTertiary,
        colorTextLightSolid: mergedToken.colorWhite,
        colorHighlight: mergedToken.colorError,
        colorBgTextHover: mergedToken.colorFillSecondary,
        colorBgTextActive: mergedToken.colorFill,
        colorIcon: mergedToken.colorTextTertiary,
        colorIconHover: mergedToken.colorText,
        colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
        colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
        // Font
        fontSizeIcon: mergedToken.fontSizeSM,
        // Line
        lineWidthFocus: mergedToken.lineWidth * 3,
        // Control
        lineWidth: mergedToken.lineWidth,
        controlOutlineWidth: mergedToken.lineWidth * 2,
        // Checkbox size and expand icon size
        controlInteractiveSize: mergedToken.controlHeight / 2,
        controlItemBgHover: mergedToken.colorFillTertiary,
        controlItemBgActive: mergedToken.colorPrimaryBg,
        controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
        controlItemBgActiveDisabled: mergedToken.colorFill,
        controlTmpOutline: mergedToken.colorFillQuaternary,
        controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
        lineType: mergedToken.lineType,
        borderRadius: mergedToken.borderRadius,
        borderRadiusXS: mergedToken.borderRadiusXS,
        borderRadiusSM: mergedToken.borderRadiusSM,
        borderRadiusLG: mergedToken.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: 0.65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: mergedToken.sizeXXS,
        paddingXS: mergedToken.sizeXS,
        paddingSM: mergedToken.sizeSM,
        padding: mergedToken.size,
        paddingMD: mergedToken.sizeMD,
        paddingLG: mergedToken.sizeLG,
        paddingXL: mergedToken.sizeXL,
        paddingContentHorizontalLG: mergedToken.sizeLG,
        paddingContentVerticalLG: mergedToken.sizeMS,
        paddingContentHorizontal: mergedToken.sizeMS,
        paddingContentVertical: mergedToken.sizeSM,
        paddingContentHorizontalSM: mergedToken.size,
        paddingContentVerticalSM: mergedToken.sizeXS,
        marginXXS: mergedToken.sizeXXS,
        marginXS: mergedToken.sizeXS,
        marginSM: mergedToken.sizeSM,
        margin: mergedToken.size,
        marginMD: mergedToken.sizeMD,
        marginLG: mergedToken.sizeLG,
        marginXL: mergedToken.sizeXL,
        marginXXL: mergedToken.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS,
        screenXSMin: screenXS,
        screenXSMax: screenSM - 1,
        screenSM,
        screenSMMin: screenSM,
        screenSMMax: screenMD - 1,
        screenMD,
        screenMDMin: screenMD,
        screenMDMax: screenLG - 1,
        screenLG,
        screenLGMin: screenLG,
        screenLGMax: screenXL - 1,
        screenXL,
        screenXLMin: screenXL,
        screenXLMax: screenXXL - 1,
        screenXXL,
        screenXXLMin: screenXXL,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
      }), overrideTokens);
      return aliasToken;
    }
    var __rest$3 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const unitless = {
      lineHeight: true,
      lineHeightSM: true,
      lineHeightLG: true,
      lineHeightHeading1: true,
      lineHeightHeading2: true,
      lineHeightHeading3: true,
      lineHeightHeading4: true,
      lineHeightHeading5: true,
      opacityLoading: true,
      fontWeightStrong: true,
      zIndexPopupBase: true,
      zIndexBase: true,
      opacityImage: true
    };
    const ignore = {
      size: true,
      sizeSM: true,
      sizeLG: true,
      sizeMD: true,
      sizeXS: true,
      sizeXXS: true,
      sizeMS: true,
      sizeXL: true,
      sizeXXL: true,
      sizeUnit: true,
      sizeStep: true,
      motionBase: true,
      motionUnit: true
    };
    const preserve = {
      screenXS: true,
      screenXSMin: true,
      screenXSMax: true,
      screenSM: true,
      screenSMMin: true,
      screenSMMax: true,
      screenMD: true,
      screenMDMin: true,
      screenMDMax: true,
      screenLG: true,
      screenLGMin: true,
      screenLGMax: true,
      screenXL: true,
      screenXLMin: true,
      screenXLMax: true,
      screenXXL: true,
      screenXXLMin: true
    };
    const getComputedToken = (originToken, overrideToken, theme) => {
      const derivativeToken = theme.getDerivativeToken(originToken);
      const {
        override
      } = overrideToken, components = __rest$3(overrideToken, ["override"]);
      let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
        override
      });
      mergedDerivativeToken = formatToken(mergedDerivativeToken);
      if (components) {
        Object.entries(components).forEach((_ref) => {
          let [key, value] = _ref;
          const {
            theme: componentTheme
          } = value, componentTokens = __rest$3(value, ["theme"]);
          let mergedComponentToken = componentTokens;
          if (componentTheme) {
            mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
              override: componentTokens
            }, componentTheme);
          }
          mergedDerivativeToken[key] = mergedComponentToken;
        });
      }
      return mergedDerivativeToken;
    };
    function useToken() {
      const {
        token: rootDesignToken,
        hashed,
        theme,
        override,
        cssVar
      } = React.useContext(DesignTokenContext);
      const salt = `${version$1}-${hashed || ""}`;
      const mergedTheme = theme || defaultTheme;
      const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
        salt,
        override,
        getComputedToken,
        // formatToken will not be consumed after 1.15.0 with getComputedToken.
        // But token will break if @ant-design/cssinjs is under 1.15.0 without it
        formatToken,
        cssVar: cssVar && {
          prefix: cssVar.prefix,
          key: cssVar.key,
          unitless,
          ignore,
          preserve
        }
      });
      return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
    }
    const resetComponent = function(token2) {
      let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color: token2.colorText,
        fontSize: token2.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token2.lineHeight,
        listStyle: "none",
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
      };
    };
    const resetIcon = () => ({
      display: "inline-flex",
      alignItems: "center",
      color: "inherit",
      fontStyle: "normal",
      lineHeight: 0,
      textAlign: "center",
      textTransform: "none",
      // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
      verticalAlign: "-0.125em",
      textRendering: "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      "> *": {
        lineHeight: 1
      },
      svg: {
        display: "inline-block"
      }
    });
    const genLinkStyle = (token2) => ({
      a: {
        color: token2.colorLink,
        textDecoration: token2.linkDecoration,
        backgroundColor: "transparent",
        // remove the gray background on active links in IE 10.
        outline: "none",
        cursor: "pointer",
        transition: `color ${token2.motionDurationSlow}`,
        "-webkit-text-decoration-skip": "objects",
        // remove gaps in links underline in iOS 8+ and Safari 8+.
        "&:hover": {
          color: token2.colorLinkHover
        },
        "&:active": {
          color: token2.colorLinkActive
        },
        "&:active, &:hover": {
          textDecoration: token2.linkHoverDecoration,
          outline: 0
        },
        // https://github.com/ant-design/ant-design/issues/22503
        "&:focus": {
          textDecoration: token2.linkFocusDecoration,
          outline: 0
        },
        "&[disabled]": {
          color: token2.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    });
    const genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
      const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
      const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
      const resetStyle = {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      };
      let resetFontStyle = {};
      if (resetFont !== false) {
        resetFontStyle = {
          fontFamily: token2.fontFamily,
          fontSize: token2.fontSize
        };
      }
      return {
        [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
          [prefixSelector]: resetStyle
        })
      };
    };
    const useResetIconStyle = (iconPrefixCls, csp) => {
      const [theme, token2] = useToken();
      return useStyleRegister({
        theme,
        token: token2,
        hashId: "",
        path: ["ant-design-icons", iconPrefixCls],
        nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
        layer: {
          name: "antd"
        }
      }, () => [{
        [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
          [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
            display: "block"
          }
        })
      }]);
    };
    const {
      genStyleHooks,
      genComponentStyleHook,
      genSubStyleComponent
    } = genStyleUtils({
      usePrefix: () => {
        const {
          getPrefixCls,
          iconPrefixCls
        } = reactExports.useContext(ConfigContext);
        const rootPrefixCls = getPrefixCls();
        return {
          rootPrefixCls,
          iconPrefixCls
        };
      },
      useToken: () => {
        const [theme, realToken, hashId, token2, cssVar] = useToken();
        return {
          theme,
          realToken,
          hashId,
          token: token2,
          cssVar
        };
      },
      useCSP: () => {
        const {
          csp,
          iconPrefixCls
        } = reactExports.useContext(ConfigContext);
        useResetIconStyle(iconPrefixCls, csp);
        return csp !== null && csp !== void 0 ? csp : {};
      },
      getResetStyles: (token2) => [{
        "&": genLinkStyle(token2)
      }],
      getCommonStyle: genCommonStyle,
      getCompUnitless: () => unitless
    });
    const fullClone$1 = Object.assign({}, React$1);
    const {
      useId
    } = fullClone$1;
    const useEmptyId = () => "";
    const useThemeKey = typeof useId === "undefined" ? useEmptyId : useId;
    function useTheme(theme, parentTheme, config) {
      var _a;
      const themeConfig = theme || {};
      const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
        hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : defaultConfig.hashed,
        cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
      }) : parentTheme;
      const themeKey = useThemeKey();
      return useMemo(() => {
        var _a2, _b2;
        if (!theme) {
          return parentTheme;
        }
        const mergedComponents = Object.assign({}, parentThemeConfig.components);
        Object.keys(theme.components || {}).forEach((componentName) => {
          mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
        });
        const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
        const mergedCssVar = ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0 ? _a2 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
          prefix: config === null || config === void 0 ? void 0 : config.prefixCls
        }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
          key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
        });
        return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
          token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
          components: mergedComponents,
          cssVar: mergedCssVar
        });
      }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index) => {
        const nextTheme = next2[index];
        return !isEqual(prevTheme, nextTheme, true);
      }));
    }
    var _excluded$5 = ["children"];
    var Context = /* @__PURE__ */ reactExports.createContext({});
    function MotionProvider(_ref) {
      var children = _ref.children, props = _objectWithoutProperties$1(_ref, _excluded$5);
      return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
        value: props
      }, children);
    }
    var DomWrapper = /* @__PURE__ */ function(_React$Component) {
      _inherits(DomWrapper2, _React$Component);
      var _super = _createSuper(DomWrapper2);
      function DomWrapper2() {
        _classCallCheck(this, DomWrapper2);
        return _super.apply(this, arguments);
      }
      _createClass(DomWrapper2, [{
        key: "render",
        value: function render2() {
          return this.props.children;
        }
      }]);
      return DomWrapper2;
    }(reactExports.Component);
    function useSyncState(defaultValue) {
      var _React$useReducer = reactExports.useReducer(function(x2) {
        return x2 + 1;
      }, 0), _React$useReducer2 = _slicedToArray$1(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
      var currentValueRef = reactExports.useRef(defaultValue);
      var getValue2 = useEvent(function() {
        return currentValueRef.current;
      });
      var setValue = useEvent(function(updater) {
        currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
        forceUpdate();
      });
      return [getValue2, setValue];
    }
    var STATUS_NONE = "none";
    var STATUS_APPEAR = "appear";
    var STATUS_ENTER = "enter";
    var STATUS_LEAVE = "leave";
    var STEP_NONE = "none";
    var STEP_PREPARE = "prepare";
    var STEP_START = "start";
    var STEP_ACTIVE = "active";
    var STEP_ACTIVATED = "end";
    var STEP_PREPARED = "prepared";
    function makePrefixMap(styleProp, eventName) {
      var prefixes = {};
      prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
      prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
      prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
      prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
      prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
      return prefixes;
    }
    function getVendorPrefixes(domSupport, win) {
      var prefixes = {
        animationend: makePrefixMap("Animation", "AnimationEnd"),
        transitionend: makePrefixMap("Transition", "TransitionEnd")
      };
      if (domSupport) {
        if (!("AnimationEvent" in win)) {
          delete prefixes.animationend.animation;
        }
        if (!("TransitionEvent" in win)) {
          delete prefixes.transitionend.transition;
        }
      }
      return prefixes;
    }
    var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
    var style = {};
    if (canUseDom()) {
      var _document$createEleme = document.createElement("div");
      style = _document$createEleme.style;
    }
    var prefixedEventNames = {};
    function getVendorPrefixedEventName(eventName) {
      if (prefixedEventNames[eventName]) {
        return prefixedEventNames[eventName];
      }
      var prefixMap = vendorPrefixes[eventName];
      if (prefixMap) {
        var stylePropList = Object.keys(prefixMap);
        var len = stylePropList.length;
        for (var i = 0; i < len; i += 1) {
          var styleProp = stylePropList[i];
          if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
            prefixedEventNames[eventName] = prefixMap[styleProp];
            return prefixedEventNames[eventName];
          }
        }
      }
      return "";
    }
    var internalAnimationEndName = getVendorPrefixedEventName("animationend");
    var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
    var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
    var animationEndName = internalAnimationEndName || "animationend";
    var transitionEndName = internalTransitionEndName || "transitionend";
    function getTransitionName(transitionName, transitionType) {
      if (!transitionName) return null;
      if (_typeof$1(transitionName) === "object") {
        var type = transitionType.replace(/-\w/g, function(match5) {
          return match5[1].toUpperCase();
        });
        return transitionName[type];
      }
      return "".concat(transitionName, "-").concat(transitionType);
    }
    const useDomMotionEvents = function(onInternalMotionEnd) {
      var cacheElementRef = reactExports.useRef();
      function removeMotionEvents(element) {
        if (element) {
          element.removeEventListener(transitionEndName, onInternalMotionEnd);
          element.removeEventListener(animationEndName, onInternalMotionEnd);
        }
      }
      function patchMotionEvents(element) {
        if (cacheElementRef.current && cacheElementRef.current !== element) {
          removeMotionEvents(cacheElementRef.current);
        }
        if (element && element !== cacheElementRef.current) {
          element.addEventListener(transitionEndName, onInternalMotionEnd);
          element.addEventListener(animationEndName, onInternalMotionEnd);
          cacheElementRef.current = element;
        }
      }
      reactExports.useEffect(function() {
        return function() {
          removeMotionEvents(cacheElementRef.current);
        };
      }, []);
      return [patchMotionEvents, removeMotionEvents];
    };
    var useIsomorphicLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
    const useNextFrame = function() {
      var nextFrameRef = reactExports.useRef(null);
      function cancelNextFrame() {
        wrapperRaf.cancel(nextFrameRef.current);
      }
      function nextFrame(callback) {
        var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        cancelNextFrame();
        var nextFrameId = wrapperRaf(function() {
          if (delay <= 1) {
            callback({
              isCanceled: function isCanceled() {
                return nextFrameId !== nextFrameRef.current;
              }
            });
          } else {
            nextFrame(callback, delay - 1);
          }
        });
        nextFrameRef.current = nextFrameId;
      }
      reactExports.useEffect(function() {
        return function() {
          cancelNextFrame();
        };
      }, []);
      return [nextFrame, cancelNextFrame];
    };
    var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
    var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
    var SkipStep = false;
    var DoStep = true;
    function isActive(step) {
      return step === STEP_ACTIVE || step === STEP_ACTIVATED;
    }
    const useStepQueue = function(status, prepareOnly, callback) {
      var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray$1(_useState, 2), step = _useState2[0], setStep = _useState2[1];
      var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray$1(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
      function startQueue() {
        setStep(STEP_PREPARE, true);
      }
      var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
      useIsomorphicLayoutEffect(function() {
        if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
          var index = STEP_QUEUE.indexOf(step);
          var nextStep = STEP_QUEUE[index + 1];
          var result = callback(step);
          if (result === SkipStep) {
            setStep(nextStep, true);
          } else if (nextStep) {
            nextFrame(function(info) {
              function doNext() {
                if (info.isCanceled()) return;
                setStep(nextStep, true);
              }
              if (result === true) {
                doNext();
              } else {
                Promise.resolve(result).then(doNext);
              }
            });
          }
        }
      }, [status, step]);
      reactExports.useEffect(function() {
        return function() {
          cancelNextFrame();
        };
      }, []);
      return [startQueue, step];
    };
    function useStatus(supportMotion, visible, getElement, _ref) {
      var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
      var _useState = useSafeState(), _useState2 = _slicedToArray$1(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
      var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray$1(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
      var _useState3 = useSafeState(null), _useState4 = _slicedToArray$1(_useState3, 2), style2 = _useState4[0], setStyle = _useState4[1];
      var currentStatus = getStatus();
      var mountedRef = reactExports.useRef(false);
      var deadlineRef = reactExports.useRef(null);
      function getDomElement() {
        return getElement();
      }
      var activeRef = reactExports.useRef(false);
      function updateMotionEndStatus() {
        setStatus(STATUS_NONE);
        setStyle(null, true);
      }
      var onInternalMotionEnd = useEvent(function(event) {
        var status = getStatus();
        if (status === STATUS_NONE) {
          return;
        }
        var element = getDomElement();
        if (event && !event.deadline && event.target !== element) {
          return;
        }
        var currentActive = activeRef.current;
        var canEnd;
        if (status === STATUS_APPEAR && currentActive) {
          canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
        } else if (status === STATUS_ENTER && currentActive) {
          canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
        } else if (status === STATUS_LEAVE && currentActive) {
          canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
        }
        if (currentActive && canEnd !== false) {
          updateMotionEndStatus();
        }
      });
      var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray$1(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
      var getEventHandlers = function getEventHandlers2(targetStatus) {
        switch (targetStatus) {
          case STATUS_APPEAR:
            return _defineProperty$1(_defineProperty$1(_defineProperty$1({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
          case STATUS_ENTER:
            return _defineProperty$1(_defineProperty$1(_defineProperty$1({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
          case STATUS_LEAVE:
            return _defineProperty$1(_defineProperty$1(_defineProperty$1({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
          default:
            return {};
        }
      };
      var eventHandlers = reactExports.useMemo(function() {
        return getEventHandlers(currentStatus);
      }, [currentStatus]);
      var _useStepQueue = useStepQueue(currentStatus, !supportMotion, function(newStep) {
        if (newStep === STEP_PREPARE) {
          var onPrepare = eventHandlers[STEP_PREPARE];
          if (!onPrepare) {
            return SkipStep;
          }
          return onPrepare(getDomElement());
        }
        if (step in eventHandlers) {
          var _eventHandlers$step;
          setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
        }
        if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
          patchMotionEvents(getDomElement());
          if (motionDeadline > 0) {
            clearTimeout(deadlineRef.current);
            deadlineRef.current = setTimeout(function() {
              onInternalMotionEnd({
                deadline: true
              });
            }, motionDeadline);
          }
        }
        if (step === STEP_PREPARED) {
          updateMotionEndStatus();
        }
        return DoStep;
      }), _useStepQueue2 = _slicedToArray$1(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
      var active = isActive(step);
      activeRef.current = active;
      useIsomorphicLayoutEffect(function() {
        setAsyncVisible(visible);
        var isMounted = mountedRef.current;
        mountedRef.current = true;
        var nextStatus;
        if (!isMounted && visible && motionAppear) {
          nextStatus = STATUS_APPEAR;
        }
        if (isMounted && visible && motionEnter) {
          nextStatus = STATUS_ENTER;
        }
        if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
          nextStatus = STATUS_LEAVE;
        }
        var nextEventHandlers = getEventHandlers(nextStatus);
        if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
          setStatus(nextStatus);
          startStep();
        } else {
          setStatus(STATUS_NONE);
        }
      }, [visible]);
      reactExports.useEffect(function() {
        if (
          // Cancel appear
          currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
          currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
          currentStatus === STATUS_LEAVE && !motionLeave
        ) {
          setStatus(STATUS_NONE);
        }
      }, [motionAppear, motionEnter, motionLeave]);
      reactExports.useEffect(function() {
        return function() {
          mountedRef.current = false;
          clearTimeout(deadlineRef.current);
        };
      }, []);
      var firstMountChangeRef = reactExports.useRef(false);
      reactExports.useEffect(function() {
        if (asyncVisible) {
          firstMountChangeRef.current = true;
        }
        if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
          if (firstMountChangeRef.current || asyncVisible) {
            onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
          }
          firstMountChangeRef.current = true;
        }
      }, [asyncVisible, currentStatus]);
      var mergedStyle = style2;
      if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
        mergedStyle = _objectSpread2$1({
          transition: "none"
        }, mergedStyle);
      }
      return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
    }
    function genCSSMotion(config) {
      var transitionSupport = config;
      if (_typeof$1(config) === "object") {
        transitionSupport = config.transitionSupport;
      }
      function isSupportTransition(props, contextMotion) {
        return !!(props.motionName && transitionSupport && contextMotion !== false);
      }
      var CSSMotion2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
        var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
        var _React$useContext = reactExports.useContext(Context), contextMotion = _React$useContext.motion;
        var supportMotion = isSupportTransition(props, contextMotion);
        var nodeRef = reactExports.useRef();
        var wrapperNodeRef = reactExports.useRef();
        function getDomElement() {
          try {
            return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
          } catch (e2) {
            return null;
          }
        }
        var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray$1(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
        var renderedRef = reactExports.useRef(mergedVisible);
        if (mergedVisible) {
          renderedRef.current = true;
        }
        var setNodeRef = reactExports.useCallback(function(node2) {
          nodeRef.current = node2;
          fillRef(ref, node2);
        }, [ref]);
        var motionChildren;
        var mergedProps = _objectSpread2$1(_objectSpread2$1({}, eventProps), {}, {
          visible
        });
        if (!children) {
          motionChildren = null;
        } else if (status === STATUS_NONE) {
          if (mergedVisible) {
            motionChildren = children(_objectSpread2$1({}, mergedProps), setNodeRef);
          } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
            motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
              className: leavedClassName
            }), setNodeRef);
          } else if (forceRender || !removeOnLeave && !leavedClassName) {
            motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
              style: {
                display: "none"
              }
            }), setNodeRef);
          } else {
            motionChildren = null;
          }
        } else {
          var statusSuffix;
          if (statusStep === STEP_PREPARE) {
            statusSuffix = "prepare";
          } else if (isActive(statusStep)) {
            statusSuffix = "active";
          } else if (statusStep === STEP_START) {
            statusSuffix = "start";
          }
          var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
          motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
            className: classNames(getTransitionName(motionName, status), _defineProperty$1(_defineProperty$1({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
            style: statusStyle
          }), setNodeRef);
        }
        if (/* @__PURE__ */ reactExports.isValidElement(motionChildren) && supportRef(motionChildren)) {
          var _ref = motionChildren, originNodeRef = _ref.ref;
          if (!originNodeRef) {
            motionChildren = /* @__PURE__ */ reactExports.cloneElement(motionChildren, {
              ref: setNodeRef
            });
          }
        }
        return /* @__PURE__ */ reactExports.createElement(DomWrapper, {
          ref: wrapperNodeRef
        }, motionChildren);
      });
      CSSMotion2.displayName = "CSSMotion";
      return CSSMotion2;
    }
    const CSSMotion = genCSSMotion(supportTransition);
    var STATUS_ADD = "add";
    var STATUS_KEEP = "keep";
    var STATUS_REMOVE = "remove";
    var STATUS_REMOVED = "removed";
    function wrapKeyToObject(key) {
      var keyObj;
      if (key && _typeof$1(key) === "object" && "key" in key) {
        keyObj = key;
      } else {
        keyObj = {
          key
        };
      }
      return _objectSpread2$1(_objectSpread2$1({}, keyObj), {}, {
        key: String(keyObj.key)
      });
    }
    function parseKeys() {
      var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return keys2.map(wrapKeyToObject);
    }
    function diffKeys() {
      var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var list = [];
      var currentIndex = 0;
      var currentLen = currentKeys.length;
      var prevKeyObjects = parseKeys(prevKeys);
      var currentKeyObjects = parseKeys(currentKeys);
      prevKeyObjects.forEach(function(keyObj) {
        var hit = false;
        for (var i = currentIndex; i < currentLen; i += 1) {
          var currentKeyObj = currentKeyObjects[i];
          if (currentKeyObj.key === keyObj.key) {
            if (currentIndex < i) {
              list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
                return _objectSpread2$1(_objectSpread2$1({}, obj), {}, {
                  status: STATUS_ADD
                });
              }));
              currentIndex = i;
            }
            list.push(_objectSpread2$1(_objectSpread2$1({}, currentKeyObj), {}, {
              status: STATUS_KEEP
            }));
            currentIndex += 1;
            hit = true;
            break;
          }
        }
        if (!hit) {
          list.push(_objectSpread2$1(_objectSpread2$1({}, keyObj), {}, {
            status: STATUS_REMOVE
          }));
        }
      });
      if (currentIndex < currentLen) {
        list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
          return _objectSpread2$1(_objectSpread2$1({}, obj), {}, {
            status: STATUS_ADD
          });
        }));
      }
      var keys2 = {};
      list.forEach(function(_ref) {
        var key = _ref.key;
        keys2[key] = (keys2[key] || 0) + 1;
      });
      var duplicatedKeys = Object.keys(keys2).filter(function(key) {
        return keys2[key] > 1;
      });
      duplicatedKeys.forEach(function(matchKey) {
        list = list.filter(function(_ref2) {
          var key = _ref2.key, status = _ref2.status;
          return key !== matchKey || status !== STATUS_REMOVE;
        });
        list.forEach(function(node2) {
          if (node2.key === matchKey) {
            node2.status = STATUS_KEEP;
          }
        });
      });
      return list;
    }
    var _excluded$4 = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2 = ["status"];
    var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
    function genCSSMotionList(transitionSupport) {
      var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
      var CSSMotionList2 = /* @__PURE__ */ function(_React$Component) {
        _inherits(CSSMotionList3, _React$Component);
        var _super = _createSuper(CSSMotionList3);
        function CSSMotionList3() {
          var _this;
          _classCallCheck(this, CSSMotionList3);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _defineProperty$1(_assertThisInitialized(_this), "state", {
            keyEntities: []
          });
          _defineProperty$1(_assertThisInitialized(_this), "removeKey", function(removeKey) {
            _this.setState(function(prevState) {
              var nextKeyEntities = prevState.keyEntities.map(function(entity) {
                if (entity.key !== removeKey) return entity;
                return _objectSpread2$1(_objectSpread2$1({}, entity), {}, {
                  status: STATUS_REMOVED
                });
              });
              return {
                keyEntities: nextKeyEntities
              };
            }, function() {
              var keyEntities = _this.state.keyEntities;
              var restKeysCount = keyEntities.filter(function(_ref) {
                var status = _ref.status;
                return status !== STATUS_REMOVED;
              }).length;
              if (restKeysCount === 0 && _this.props.onAllRemoved) {
                _this.props.onAllRemoved();
              }
            });
          });
          return _this;
        }
        _createClass(CSSMotionList3, [{
          key: "render",
          value: function render2() {
            var _this2 = this;
            var keyEntities = this.state.keyEntities;
            var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged;
            _this$props.onAllRemoved;
            var restProps = _objectWithoutProperties$1(_this$props, _excluded$4);
            var Component = component || reactExports.Fragment;
            var motionProps = {};
            MOTION_PROP_NAMES.forEach(function(prop) {
              motionProps[prop] = restProps[prop];
              delete restProps[prop];
            });
            delete restProps.keys;
            return /* @__PURE__ */ reactExports.createElement(Component, restProps, keyEntities.map(function(_ref2, index) {
              var status = _ref2.status, eventProps = _objectWithoutProperties$1(_ref2, _excluded2);
              var visible = status === STATUS_ADD || status === STATUS_KEEP;
              return /* @__PURE__ */ reactExports.createElement(CSSMotion$1, _extends$1({}, motionProps, {
                key: eventProps.key,
                visible,
                eventProps,
                onVisibleChanged: function onVisibleChanged(changedVisible) {
                  _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                    key: eventProps.key
                  });
                  if (!changedVisible) {
                    _this2.removeKey(eventProps.key);
                  }
                }
              }), function(props, ref) {
                return children(_objectSpread2$1(_objectSpread2$1({}, props), {}, {
                  index
                }), ref);
              });
            }));
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(_ref3, _ref4) {
            var keys2 = _ref3.keys;
            var keyEntities = _ref4.keyEntities;
            var parsedKeyObjects = parseKeys(keys2);
            var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
            return {
              keyEntities: mixedKeyEntities.filter(function(entity) {
                var prevEntity = keyEntities.find(function(_ref5) {
                  var key = _ref5.key;
                  return entity.key === key;
                });
                if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                  return false;
                }
                return true;
              })
            };
          }
        }]);
        return CSSMotionList3;
      }(reactExports.Component);
      _defineProperty$1(CSSMotionList2, "defaultProps", {
        component: "div"
      });
      return CSSMotionList2;
    }
    const CSSMotionList = genCSSMotionList(supportTransition);
    function MotionWrapper(props) {
      const {
        children
      } = props;
      const [, token2] = useToken();
      const {
        motion
      } = token2;
      const needWrapMotionProviderRef = reactExports.useRef(false);
      needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
      if (needWrapMotionProviderRef.current) {
        return /* @__PURE__ */ reactExports.createElement(MotionProvider, {
          motion
        }, children);
      }
      return children;
    }
    const PropWarning = () => null;
    var __rest$2 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
    let globalPrefixCls;
    let globalIconPrefixCls;
    let globalTheme;
    let globalHolderRender;
    function getGlobalPrefixCls() {
      return globalPrefixCls || defaultPrefixCls;
    }
    function getGlobalIconPrefixCls() {
      return globalIconPrefixCls || defaultIconPrefixCls;
    }
    function isLegacyTheme(theme) {
      return Object.keys(theme).some((key) => key.endsWith("Color"));
    }
    const setGlobalConfig = (props) => {
      const {
        prefixCls,
        iconPrefixCls,
        theme,
        holderRender
      } = props;
      if (prefixCls !== void 0) {
        globalPrefixCls = prefixCls;
      }
      if (iconPrefixCls !== void 0) {
        globalIconPrefixCls = iconPrefixCls;
      }
      if ("holderRender" in props) {
        globalHolderRender = holderRender;
      }
      if (theme) {
        if (isLegacyTheme(theme)) {
          registerTheme(getGlobalPrefixCls(), theme);
        } else {
          globalTheme = theme;
        }
      }
    };
    const globalConfig = () => ({
      getPrefixCls: (suffixCls, customizePrefixCls) => {
        if (customizePrefixCls) {
          return customizePrefixCls;
        }
        return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
      },
      getIconPrefixCls: getGlobalIconPrefixCls,
      getRootPrefixCls: () => {
        if (globalPrefixCls) {
          return globalPrefixCls;
        }
        return getGlobalPrefixCls();
      },
      getTheme: () => globalTheme,
      holderRender: globalHolderRender
    });
    const ProviderChildren = (props) => {
      const {
        children,
        csp: customCsp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        form,
        locale: locale2,
        componentSize,
        direction,
        space,
        splitter,
        virtual,
        dropdownMatchSelectWidth,
        popupMatchSelectWidth,
        popupOverflow,
        legacyLocale,
        parentContext,
        iconPrefixCls: customIconPrefixCls,
        theme,
        componentDisabled,
        segmented,
        statistic: statistic2,
        spin,
        calendar: calendar2,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        input,
        textArea,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message: message2,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
      } = props;
      const getPrefixCls = reactExports.useCallback((suffixCls, customizePrefixCls) => {
        const {
          prefixCls
        } = props;
        if (customizePrefixCls) {
          return customizePrefixCls;
        }
        const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
        return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
      }, [parentContext.getPrefixCls, props.prefixCls]);
      const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
      const csp = customCsp || parentContext.csp;
      useResetIconStyle(iconPrefixCls, csp);
      const mergedTheme = useTheme(theme, parentContext.theme, {
        prefixCls: getPrefixCls("")
      });
      const baseConfig2 = {
        csp,
        autoInsertSpaceInButton,
        alert,
        anchor,
        locale: locale2 || legacyLocale,
        direction,
        space,
        splitter,
        virtual,
        popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
        popupOverflow,
        getPrefixCls,
        iconPrefixCls,
        theme: mergedTheme,
        segmented,
        statistic: statistic2,
        spin,
        calendar: calendar2,
        carousel,
        cascader,
        collapse,
        typography,
        checkbox,
        descriptions,
        divider,
        drawer,
        skeleton,
        steps,
        image,
        input,
        textArea,
        layout,
        list,
        mentions,
        modal,
        progress,
        result,
        slider,
        breadcrumb,
        menu,
        pagination,
        empty,
        badge,
        radio,
        rate,
        switch: SWITCH,
        transfer,
        avatar,
        message: message2,
        tag,
        table,
        card,
        tabs,
        timeline,
        timePicker,
        upload,
        notification,
        tree,
        colorPicker,
        datePicker,
        rangePicker,
        flex,
        wave,
        dropdown,
        warning: warningConfig,
        tour,
        floatButtonGroup,
        variant,
        inputNumber,
        treeSelect
      };
      const config = Object.assign({}, parentContext);
      Object.keys(baseConfig2).forEach((key) => {
        if (baseConfig2[key] !== void 0) {
          config[key] = baseConfig2[key];
        }
      });
      PASSED_PROPS.forEach((propName) => {
        const propValue = props[propName];
        if (propValue) {
          config[propName] = propValue;
        }
      });
      if (typeof autoInsertSpaceInButton !== "undefined") {
        config.button = Object.assign({
          autoInsertSpace: autoInsertSpaceInButton
        }, config.button);
      }
      const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
        const prevKeys = Object.keys(prevConfig);
        const currentKeys = Object.keys(currentConfig);
        return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
      });
      const memoIconContextValue = reactExports.useMemo(() => ({
        prefixCls: iconPrefixCls,
        csp
      }), [iconPrefixCls, csp]);
      let childNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(PropWarning, {
        dropdownMatchSelectWidth
      }), children);
      const validateMessages = reactExports.useMemo(() => {
        var _a, _b, _c, _d;
        return merge$1(((_a = localeValues.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
      }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
      if (Object.keys(validateMessages).length > 0) {
        childNode = /* @__PURE__ */ reactExports.createElement(ValidateMessagesContext.Provider, {
          value: validateMessages
        }, childNode);
      }
      if (locale2) {
        childNode = /* @__PURE__ */ reactExports.createElement(LocaleProvider, {
          locale: locale2,
          _ANT_MARK__: ANT_MARK
        }, childNode);
      }
      if (iconPrefixCls || csp) {
        childNode = /* @__PURE__ */ reactExports.createElement(IconContext.Provider, {
          value: memoIconContextValue
        }, childNode);
      }
      if (componentSize) {
        childNode = /* @__PURE__ */ reactExports.createElement(SizeContextProvider, {
          size: componentSize
        }, childNode);
      }
      childNode = /* @__PURE__ */ reactExports.createElement(MotionWrapper, null, childNode);
      const memoTheme = reactExports.useMemo(() => {
        const _a = mergedTheme || {}, {
          algorithm,
          token: token2,
          components,
          cssVar
        } = _a, rest = __rest$2(_a, ["algorithm", "token", "components", "cssVar"]);
        const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
        const parsedComponents = {};
        Object.entries(components || {}).forEach((_ref) => {
          let [componentName, componentToken] = _ref;
          const parsedToken = Object.assign({}, componentToken);
          if ("algorithm" in parsedToken) {
            if (parsedToken.algorithm === true) {
              parsedToken.theme = themeObj;
            } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
              parsedToken.theme = createTheme(parsedToken.algorithm);
            }
            delete parsedToken.algorithm;
          }
          parsedComponents[componentName] = parsedToken;
        });
        const mergedToken = Object.assign(Object.assign({}, seedToken), token2);
        return Object.assign(Object.assign({}, rest), {
          theme: themeObj,
          token: mergedToken,
          components: parsedComponents,
          override: Object.assign({
            override: mergedToken
          }, parsedComponents),
          cssVar
        });
      }, [mergedTheme]);
      if (theme) {
        childNode = /* @__PURE__ */ reactExports.createElement(DesignTokenContext.Provider, {
          value: memoTheme
        }, childNode);
      }
      if (memoedConfig.warning) {
        childNode = /* @__PURE__ */ reactExports.createElement(WarningContext.Provider, {
          value: memoedConfig.warning
        }, childNode);
      }
      if (componentDisabled !== void 0) {
        childNode = /* @__PURE__ */ reactExports.createElement(DisabledContextProvider, {
          disabled: componentDisabled
        }, childNode);
      }
      return /* @__PURE__ */ reactExports.createElement(ConfigContext.Provider, {
        value: memoedConfig
      }, childNode);
    };
    const ConfigProvider = (props) => {
      const context = reactExports.useContext(ConfigContext);
      const antLocale = reactExports.useContext(LocaleContext);
      return /* @__PURE__ */ reactExports.createElement(ProviderChildren, Object.assign({
        parentContext: context,
        legacyLocale: antLocale
      }, props));
    };
    ConfigProvider.ConfigContext = ConfigContext;
    ConfigProvider.SizeContext = SizeContext;
    ConfigProvider.config = setGlobalConfig;
    ConfigProvider.useConfig = useConfig;
    Object.defineProperty(ConfigProvider, "SizeContext", {
      get: () => {
        return SizeContext;
      }
    });
    function _extends() {
      return _extends = Object.assign ? Object.assign.bind() : function(n2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t2 = arguments[e2];
          for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
        }
        return n2;
      }, _extends.apply(null, arguments);
    }
    var CheckCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
    function _arrayWithHoles(r2) {
      if (Array.isArray(r2)) return r2;
    }
    function _iterableToArrayLimit(r2, l2) {
      var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
      if (null != t2) {
        var e2, n2, i, u2, a = [], f2 = true, o = false;
        try {
          if (i = (t2 = t2.call(r2)).next, 0 === l2) ;
          else for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true) ;
        } catch (r3) {
          o = true, n2 = r3;
        } finally {
          try {
            if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
          } finally {
            if (o) throw n2;
          }
        }
        return a;
      }
    }
    function _arrayLikeToArray(r2, a) {
      (null == a || a > r2.length) && (a = r2.length);
      for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r2[e2];
      return n2;
    }
    function _unsupportedIterableToArray(r2, a) {
      if (r2) {
        if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
        var t2 = {}.toString.call(r2).slice(8, -1);
        return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a) : void 0;
      }
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _slicedToArray(r2, e2) {
      return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
    }
    function _typeof(o) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof(o);
    }
    function toPrimitive(t2, r2) {
      if ("object" != _typeof(t2) || !t2) return t2;
      var e2 = t2[Symbol.toPrimitive];
      if (void 0 !== e2) {
        var i = e2.call(t2, r2 || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r2 ? String : Number)(t2);
    }
    function toPropertyKey(t2) {
      var i = toPrimitive(t2, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    function _defineProperty(e2, r2, t2) {
      return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
        value: t2,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e2[r2] = t2, e2;
    }
    function _objectWithoutPropertiesLoose(r2, e2) {
      if (null == r2) return {};
      var t2 = {};
      for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
        if (e2.includes(n2)) continue;
        t2[n2] = r2[n2];
      }
      return t2;
    }
    function _objectWithoutProperties(e2, t2) {
      if (null == e2) return {};
      var o, r2, i = _objectWithoutPropertiesLoose(e2, t2);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e2);
        for (r2 = 0; r2 < s.length; r2++) o = s[r2], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
      }
      return i;
    }
    function ownKeys(e2, r2) {
      var t2 = Object.keys(e2);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e2);
        r2 && (o = o.filter(function(r3) {
          return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
        })), t2.push.apply(t2, o);
      }
      return t2;
    }
    function _objectSpread2(e2) {
      for (var r2 = 1; r2 < arguments.length; r2++) {
        var t2 = null != arguments[r2] ? arguments[r2] : {};
        r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
          _defineProperty(e2, r3, t2[r3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
          Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
        });
      }
      return e2;
    }
    function getRoot(ele) {
      var _ele$getRootNode;
      return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
    }
    function inShadow(ele) {
      return getRoot(ele) instanceof ShadowRoot;
    }
    function getShadowRoot(ele) {
      return inShadow(ele) ? getRoot(ele) : null;
    }
    function camelCase(input) {
      return input.replace(/-(.)/g, function(match5, g2) {
        return g2.toUpperCase();
      });
    }
    function warning(valid, message2) {
      warningOnce(valid, "[@ant-design/icons] ".concat(message2));
    }
    function isIconDefinition(target) {
      return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
    }
    function normalizeAttrs() {
      var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch (key) {
          case "class":
            acc.className = val;
            delete acc.class;
            break;
          default:
            delete acc[key];
            acc[camelCase(key)] = val;
        }
        return acc;
      }, {});
    }
    function generate(node2, key, rootProps) {
      if (!rootProps) {
        return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
          key
        }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index) {
          return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
        }));
      }
      return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
        key
      }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index));
      }));
    }
    function getSecondaryColor(primaryColor) {
      return generate$1(primaryColor)[0];
    }
    function normalizeTwoToneColors(twoToneColor) {
      if (!twoToneColor) {
        return [];
      }
      return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
    }
    var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
    var useInsertStyles = function useInsertStyles2(eleRef) {
      var _useContext = reactExports.useContext(IconContext), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
      var mergedStyleStr = iconStyles;
      if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
      }
      reactExports.useEffect(function() {
        var ele = eleRef.current;
        var shadowRoot = getShadowRoot(ele);
        updateCSS(mergedStyleStr, "@ant-design-icons", {
          prepend: true,
          csp,
          attachTo: shadowRoot
        });
      }, []);
    };
    var _excluded$3 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
    var twoToneColorPalette = {
      primaryColor: "#333",
      secondaryColor: "#E6E6E6",
      calculated: false
    };
    function setTwoToneColors(_ref) {
      var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
      twoToneColorPalette.primaryColor = primaryColor;
      twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
      twoToneColorPalette.calculated = !!secondaryColor;
    }
    function getTwoToneColors() {
      return _objectSpread2({}, twoToneColorPalette);
    }
    var IconBase = function IconBase2(props) {
      var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$3);
      var svgRef = reactExports.useRef();
      var colors = twoToneColorPalette;
      if (primaryColor) {
        colors = {
          primaryColor,
          secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
        };
      }
      useInsertStyles(svgRef);
      warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
      if (!isIconDefinition(icon)) {
        return null;
      }
      var target = icon;
      if (target && typeof target.icon === "function") {
        target = _objectSpread2(_objectSpread2({}, target), {}, {
          icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
      }
      return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
        className,
        onClick,
        style: style2,
        "data-icon": target.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
      }, restProps), {}, {
        ref: svgRef
      }));
    };
    IconBase.displayName = "IconReact";
    IconBase.getTwoToneColors = getTwoToneColors;
    IconBase.setTwoToneColors = setTwoToneColors;
    function setTwoToneColor(twoToneColor) {
      var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
      return IconBase.setTwoToneColors({
        primaryColor,
        secondaryColor
      });
    }
    function getTwoToneColor() {
      var colors = IconBase.getTwoToneColors();
      if (!colors.calculated) {
        return colors.primaryColor;
      }
      return [colors.primaryColor, colors.secondaryColor];
    }
    var _excluded$2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
    setTwoToneColor(blue.primary);
    var Icon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded$2);
      var _React$useContext = reactExports.useContext(IconContext), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
      var classString = classNames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
      var iconTabIndex = tabIndex;
      if (iconTabIndex === void 0 && onClick) {
        iconTabIndex = -1;
      }
      var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
      } : void 0;
      var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
      return /* @__PURE__ */ reactExports.createElement("span", _extends({
        role: "img",
        "aria-label": icon.name
      }, restProps, {
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: classString
      }), /* @__PURE__ */ reactExports.createElement(IconBase, {
        icon,
        primaryColor,
        secondaryColor,
        style: svgStyle
      }));
    });
    Icon.displayName = "AntdIcon";
    Icon.getTwoToneColor = getTwoToneColor;
    Icon.setTwoToneColor = setTwoToneColor;
    var CheckCircleFilled = function CheckCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: CheckCircleFilled$1
      }));
    };
    var RefIcon$5 = /* @__PURE__ */ reactExports.forwardRef(CheckCircleFilled);
    var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
    var CloseCircleFilled = function CloseCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: CloseCircleFilled$1
      }));
    };
    var RefIcon$4 = /* @__PURE__ */ reactExports.forwardRef(CloseCircleFilled);
    var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
    var CloseOutlined = function CloseOutlined2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: CloseOutlined$1
      }));
    };
    var RefIcon$3 = /* @__PURE__ */ reactExports.forwardRef(CloseOutlined);
    var ExclamationCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
    var ExclamationCircleFilled = function ExclamationCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: ExclamationCircleFilled$1
      }));
    };
    var RefIcon$2 = /* @__PURE__ */ reactExports.forwardRef(ExclamationCircleFilled);
    var InfoCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
    var InfoCircleFilled = function InfoCircleFilled2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: InfoCircleFilled$1
      }));
    };
    var RefIcon$1 = /* @__PURE__ */ reactExports.forwardRef(InfoCircleFilled);
    var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
    var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
    var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
    var ariaPrefix = "aria-";
    var dataPrefix = "data-";
    function match(key, prefix) {
      return key.indexOf(prefix) === 0;
    }
    function pickAttrs(props) {
      var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var mergedConfig;
      if (ariaOnly === false) {
        mergedConfig = {
          aria: true,
          data: true,
          attr: true
        };
      } else if (ariaOnly === true) {
        mergedConfig = {
          aria: true
        };
      } else {
        mergedConfig = _objectSpread2$1({}, ariaOnly);
      }
      var attrs = {};
      Object.keys(props).forEach(function(key) {
        if (
          // Aria
          mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
          mergedConfig.data && match(key, dataPrefix) || // Attr
          mergedConfig.attr && propList.includes(key)
        ) {
          attrs[key] = props[key];
        }
      });
      return attrs;
    }
    const useCSSVarCls = (prefixCls) => {
      const [, , , , cssVar] = useToken();
      return cssVar ? `${prefixCls}-css-var` : "";
    };
    var KeyCode = {
      /**
       * MAC_ENTER
       */
      MAC_ENTER: 3,
      /**
       * BACKSPACE
       */
      BACKSPACE: 8,
      /**
       * TAB
       */
      TAB: 9,
      /**
       * NUMLOCK on FF/Safari Mac
       */
      NUM_CENTER: 12,
      // NUMLOCK on FF/Safari Mac
      /**
       * ENTER
       */
      ENTER: 13,
      /**
       * SHIFT
       */
      SHIFT: 16,
      /**
       * CTRL
       */
      CTRL: 17,
      /**
       * ALT
       */
      ALT: 18,
      /**
       * PAUSE
       */
      PAUSE: 19,
      /**
       * CAPS_LOCK
       */
      CAPS_LOCK: 20,
      /**
       * ESC
       */
      ESC: 27,
      /**
       * SPACE
       */
      SPACE: 32,
      /**
       * PAGE_UP
       */
      PAGE_UP: 33,
      // also NUM_NORTH_EAST
      /**
       * PAGE_DOWN
       */
      PAGE_DOWN: 34,
      // also NUM_SOUTH_EAST
      /**
       * END
       */
      END: 35,
      // also NUM_SOUTH_WEST
      /**
       * HOME
       */
      HOME: 36,
      // also NUM_NORTH_WEST
      /**
       * LEFT
       */
      LEFT: 37,
      // also NUM_WEST
      /**
       * UP
       */
      UP: 38,
      // also NUM_NORTH
      /**
       * RIGHT
       */
      RIGHT: 39,
      // also NUM_EAST
      /**
       * DOWN
       */
      DOWN: 40,
      // also NUM_SOUTH
      /**
       * PRINT_SCREEN
       */
      PRINT_SCREEN: 44,
      /**
       * INSERT
       */
      INSERT: 45,
      // also NUM_INSERT
      /**
       * DELETE
       */
      DELETE: 46,
      // also NUM_DELETE
      /**
       * ZERO
       */
      ZERO: 48,
      /**
       * ONE
       */
      ONE: 49,
      /**
       * TWO
       */
      TWO: 50,
      /**
       * THREE
       */
      THREE: 51,
      /**
       * FOUR
       */
      FOUR: 52,
      /**
       * FIVE
       */
      FIVE: 53,
      /**
       * SIX
       */
      SIX: 54,
      /**
       * SEVEN
       */
      SEVEN: 55,
      /**
       * EIGHT
       */
      EIGHT: 56,
      /**
       * NINE
       */
      NINE: 57,
      /**
       * QUESTION_MARK
       */
      QUESTION_MARK: 63,
      // needs localization
      /**
       * A
       */
      A: 65,
      /**
       * B
       */
      B: 66,
      /**
       * C
       */
      C: 67,
      /**
       * D
       */
      D: 68,
      /**
       * E
       */
      E: 69,
      /**
       * F
       */
      F: 70,
      /**
       * G
       */
      G: 71,
      /**
       * H
       */
      H: 72,
      /**
       * I
       */
      I: 73,
      /**
       * J
       */
      J: 74,
      /**
       * K
       */
      K: 75,
      /**
       * L
       */
      L: 76,
      /**
       * M
       */
      M: 77,
      /**
       * N
       */
      N: 78,
      /**
       * O
       */
      O: 79,
      /**
       * P
       */
      P: 80,
      /**
       * Q
       */
      Q: 81,
      /**
       * R
       */
      R: 82,
      /**
       * S
       */
      S: 83,
      /**
       * T
       */
      T: 84,
      /**
       * U
       */
      U: 85,
      /**
       * V
       */
      V: 86,
      /**
       * W
       */
      W: 87,
      /**
       * X
       */
      X: 88,
      /**
       * Y
       */
      Y: 89,
      /**
       * Z
       */
      Z: 90,
      /**
       * META
       */
      META: 91,
      // WIN_KEY_LEFT
      /**
       * WIN_KEY_RIGHT
       */
      WIN_KEY_RIGHT: 92,
      /**
       * CONTEXT_MENU
       */
      CONTEXT_MENU: 93,
      /**
       * NUM_ZERO
       */
      NUM_ZERO: 96,
      /**
       * NUM_ONE
       */
      NUM_ONE: 97,
      /**
       * NUM_TWO
       */
      NUM_TWO: 98,
      /**
       * NUM_THREE
       */
      NUM_THREE: 99,
      /**
       * NUM_FOUR
       */
      NUM_FOUR: 100,
      /**
       * NUM_FIVE
       */
      NUM_FIVE: 101,
      /**
       * NUM_SIX
       */
      NUM_SIX: 102,
      /**
       * NUM_SEVEN
       */
      NUM_SEVEN: 103,
      /**
       * NUM_EIGHT
       */
      NUM_EIGHT: 104,
      /**
       * NUM_NINE
       */
      NUM_NINE: 105,
      /**
       * NUM_MULTIPLY
       */
      NUM_MULTIPLY: 106,
      /**
       * NUM_PLUS
       */
      NUM_PLUS: 107,
      /**
       * NUM_MINUS
       */
      NUM_MINUS: 109,
      /**
       * NUM_PERIOD
       */
      NUM_PERIOD: 110,
      /**
       * NUM_DIVISION
       */
      NUM_DIVISION: 111,
      /**
       * F1
       */
      F1: 112,
      /**
       * F2
       */
      F2: 113,
      /**
       * F3
       */
      F3: 114,
      /**
       * F4
       */
      F4: 115,
      /**
       * F5
       */
      F5: 116,
      /**
       * F6
       */
      F6: 117,
      /**
       * F7
       */
      F7: 118,
      /**
       * F8
       */
      F8: 119,
      /**
       * F9
       */
      F9: 120,
      /**
       * F10
       */
      F10: 121,
      /**
       * F11
       */
      F11: 122,
      /**
       * F12
       */
      F12: 123,
      /**
       * NUMLOCK
       */
      NUMLOCK: 144,
      /**
       * SEMICOLON
       */
      SEMICOLON: 186,
      // needs localization
      /**
       * DASH
       */
      DASH: 189,
      // needs localization
      /**
       * EQUALS
       */
      EQUALS: 187,
      // needs localization
      /**
       * COMMA
       */
      COMMA: 188,
      // needs localization
      /**
       * PERIOD
       */
      PERIOD: 190,
      // needs localization
      /**
       * SLASH
       */
      SLASH: 191,
      // needs localization
      /**
       * APOSTROPHE
       */
      APOSTROPHE: 192,
      // needs localization
      /**
       * SINGLE_QUOTE
       */
      SINGLE_QUOTE: 222,
      // needs localization
      /**
       * OPEN_SQUARE_BRACKET
       */
      OPEN_SQUARE_BRACKET: 219,
      // needs localization
      /**
       * BACKSLASH
       */
      BACKSLASH: 220,
      // needs localization
      /**
       * CLOSE_SQUARE_BRACKET
       */
      CLOSE_SQUARE_BRACKET: 221,
      // needs localization
      /**
       * WIN_KEY
       */
      WIN_KEY: 224,
      /**
       * MAC_FF_META
       */
      MAC_FF_META: 224,
      // Firefox (Gecko) fires this for the meta key instead of 91
      /**
       * WIN_IME
       */
      WIN_IME: 229,
      // ======================== Function ========================
      /**
       * whether text and modified key is entered at the same time.
       */
      isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
        var keyCode = e2.keyCode;
        if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
        keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
          return false;
        }
        switch (keyCode) {
          case KeyCode.ALT:
          case KeyCode.CAPS_LOCK:
          case KeyCode.CONTEXT_MENU:
          case KeyCode.CTRL:
          case KeyCode.DOWN:
          case KeyCode.END:
          case KeyCode.ESC:
          case KeyCode.HOME:
          case KeyCode.INSERT:
          case KeyCode.LEFT:
          case KeyCode.MAC_FF_META:
          case KeyCode.META:
          case KeyCode.NUMLOCK:
          case KeyCode.NUM_CENTER:
          case KeyCode.PAGE_DOWN:
          case KeyCode.PAGE_UP:
          case KeyCode.PAUSE:
          case KeyCode.PRINT_SCREEN:
          case KeyCode.RIGHT:
          case KeyCode.SHIFT:
          case KeyCode.UP:
          case KeyCode.WIN_KEY:
          case KeyCode.WIN_KEY_RIGHT:
            return false;
          default:
            return true;
        }
      },
      /**
       * whether character is entered.
       */
      isCharacterKey: function isCharacterKey(keyCode) {
        if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
          return true;
        }
        if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
          return true;
        }
        if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
          return true;
        }
        if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
          return true;
        }
        switch (keyCode) {
          case KeyCode.SPACE:
          case KeyCode.QUESTION_MARK:
          case KeyCode.NUM_PLUS:
          case KeyCode.NUM_MINUS:
          case KeyCode.NUM_PERIOD:
          case KeyCode.NUM_DIVISION:
          case KeyCode.SEMICOLON:
          case KeyCode.DASH:
          case KeyCode.EQUALS:
          case KeyCode.COMMA:
          case KeyCode.PERIOD:
          case KeyCode.SLASH:
          case KeyCode.APOSTROPHE:
          case KeyCode.SINGLE_QUOTE:
          case KeyCode.OPEN_SQUARE_BRACKET:
          case KeyCode.BACKSLASH:
          case KeyCode.CLOSE_SQUARE_BRACKET:
            return true;
          default:
            return false;
        }
      }
    };
    var Notify = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var prefixCls = props.prefixCls, style2 = props.style, className = props.className, _props$duration = props.duration, duration = _props$duration === void 0 ? 4.5 : _props$duration, showProgress = props.showProgress, _props$pauseOnHover = props.pauseOnHover, pauseOnHover = _props$pauseOnHover === void 0 ? true : _props$pauseOnHover, eventKey = props.eventKey, content = props.content, closable = props.closable, _props$closeIcon = props.closeIcon, closeIcon = _props$closeIcon === void 0 ? "x" : _props$closeIcon, divProps = props.props, onClick = props.onClick, onNoticeClose = props.onNoticeClose, times = props.times, forcedHovering = props.hovering;
      var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray$1(_React$useState, 2), hovering = _React$useState2[0], setHovering = _React$useState2[1];
      var _React$useState3 = reactExports.useState(0), _React$useState4 = _slicedToArray$1(_React$useState3, 2), percent = _React$useState4[0], setPercent = _React$useState4[1];
      var _React$useState5 = reactExports.useState(0), _React$useState6 = _slicedToArray$1(_React$useState5, 2), spentTime = _React$useState6[0], setSpentTime = _React$useState6[1];
      var mergedHovering = forcedHovering || hovering;
      var mergedShowProgress = duration > 0 && showProgress;
      var onInternalClose = function onInternalClose2() {
        onNoticeClose(eventKey);
      };
      var onCloseKeyDown = function onCloseKeyDown2(e2) {
        if (e2.key === "Enter" || e2.code === "Enter" || e2.keyCode === KeyCode.ENTER) {
          onInternalClose();
        }
      };
      reactExports.useEffect(function() {
        if (!mergedHovering && duration > 0) {
          var start = Date.now() - spentTime;
          var timeout = setTimeout(function() {
            onInternalClose();
          }, duration * 1e3 - spentTime);
          return function() {
            if (pauseOnHover) {
              clearTimeout(timeout);
            }
            setSpentTime(Date.now() - start);
          };
        }
      }, [duration, mergedHovering, times]);
      reactExports.useEffect(function() {
        if (!mergedHovering && mergedShowProgress && (pauseOnHover || spentTime === 0)) {
          var start = performance.now();
          var animationFrame;
          var calculate = function calculate2() {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(function(timestamp) {
              var runtime = timestamp + spentTime - start;
              var progress = Math.min(runtime / (duration * 1e3), 1);
              setPercent(progress * 100);
              if (progress < 1) {
                calculate2();
              }
            });
          };
          calculate();
          return function() {
            if (pauseOnHover) {
              cancelAnimationFrame(animationFrame);
            }
          };
        }
      }, [duration, spentTime, mergedHovering, mergedShowProgress, times]);
      var closableObj = reactExports.useMemo(function() {
        if (_typeof$1(closable) === "object" && closable !== null) {
          return closable;
        }
        if (closable) {
          return {
            closeIcon
          };
        }
        return {};
      }, [closable, closeIcon]);
      var ariaProps = pickAttrs(closableObj, true);
      var validPercent = 100 - (!percent || percent < 0 ? 0 : percent > 100 ? 100 : percent);
      var noticePrefixCls = "".concat(prefixCls, "-notice");
      return /* @__PURE__ */ reactExports.createElement("div", _extends$1({}, divProps, {
        ref,
        className: classNames(noticePrefixCls, className, _defineProperty$1({}, "".concat(noticePrefixCls, "-closable"), closable)),
        style: style2,
        onMouseEnter: function onMouseEnter(e2) {
          var _divProps$onMouseEnte;
          setHovering(true);
          divProps === null || divProps === void 0 || (_divProps$onMouseEnte = divProps.onMouseEnter) === null || _divProps$onMouseEnte === void 0 || _divProps$onMouseEnte.call(divProps, e2);
        },
        onMouseLeave: function onMouseLeave(e2) {
          var _divProps$onMouseLeav;
          setHovering(false);
          divProps === null || divProps === void 0 || (_divProps$onMouseLeav = divProps.onMouseLeave) === null || _divProps$onMouseLeav === void 0 || _divProps$onMouseLeav.call(divProps, e2);
        },
        onClick
      }), /* @__PURE__ */ reactExports.createElement("div", {
        className: "".concat(noticePrefixCls, "-content")
      }, content), closable && /* @__PURE__ */ reactExports.createElement("a", _extends$1({
        tabIndex: 0,
        className: "".concat(noticePrefixCls, "-close"),
        onKeyDown: onCloseKeyDown,
        "aria-label": "Close"
      }, ariaProps, {
        onClick: function onClick2(e2) {
          e2.preventDefault();
          e2.stopPropagation();
          onInternalClose();
        }
      }), closableObj.closeIcon), mergedShowProgress && /* @__PURE__ */ reactExports.createElement("progress", {
        className: "".concat(noticePrefixCls, "-progress"),
        max: "100",
        value: validPercent
      }, validPercent + "%"));
    });
    var NotificationContext = /* @__PURE__ */ React.createContext({});
    var NotificationProvider = function NotificationProvider2(_ref) {
      var children = _ref.children, classNames2 = _ref.classNames;
      return /* @__PURE__ */ React.createElement(NotificationContext.Provider, {
        value: {
          classNames: classNames2
        }
      }, children);
    };
    var DEFAULT_OFFSET$1 = 8;
    var DEFAULT_THRESHOLD = 3;
    var DEFAULT_GAP = 16;
    var useStack = function useStack2(config) {
      var result = {
        offset: DEFAULT_OFFSET$1,
        threshold: DEFAULT_THRESHOLD,
        gap: DEFAULT_GAP
      };
      if (config && _typeof$1(config) === "object") {
        var _config$offset, _config$threshold, _config$gap;
        result.offset = (_config$offset = config.offset) !== null && _config$offset !== void 0 ? _config$offset : DEFAULT_OFFSET$1;
        result.threshold = (_config$threshold = config.threshold) !== null && _config$threshold !== void 0 ? _config$threshold : DEFAULT_THRESHOLD;
        result.gap = (_config$gap = config.gap) !== null && _config$gap !== void 0 ? _config$gap : DEFAULT_GAP;
      }
      return [!!config, result];
    };
    var _excluded$1 = ["className", "style", "classNames", "styles"];
    var NoticeList = function NoticeList2(props) {
      var configList = props.configList, placement = props.placement, prefixCls = props.prefixCls, className = props.className, style2 = props.style, motion = props.motion, onAllNoticeRemoved = props.onAllNoticeRemoved, onNoticeClose = props.onNoticeClose, stackConfig = props.stack;
      var _useContext = reactExports.useContext(NotificationContext), ctxCls = _useContext.classNames;
      var dictRef = reactExports.useRef({});
      var _useState = reactExports.useState(null), _useState2 = _slicedToArray$1(_useState, 2), latestNotice = _useState2[0], setLatestNotice = _useState2[1];
      var _useState3 = reactExports.useState([]), _useState4 = _slicedToArray$1(_useState3, 2), hoverKeys = _useState4[0], setHoverKeys = _useState4[1];
      var keys2 = configList.map(function(config) {
        return {
          config,
          key: String(config.key)
        };
      });
      var _useStack = useStack(stackConfig), _useStack2 = _slicedToArray$1(_useStack, 2), stack = _useStack2[0], _useStack2$ = _useStack2[1], offset2 = _useStack2$.offset, threshold = _useStack2$.threshold, gap = _useStack2$.gap;
      var expanded = stack && (hoverKeys.length > 0 || keys2.length <= threshold);
      var placementMotion = typeof motion === "function" ? motion(placement) : motion;
      reactExports.useEffect(function() {
        if (stack && hoverKeys.length > 1) {
          setHoverKeys(function(prev2) {
            return prev2.filter(function(key) {
              return keys2.some(function(_ref) {
                var dataKey = _ref.key;
                return key === dataKey;
              });
            });
          });
        }
      }, [hoverKeys, keys2, stack]);
      reactExports.useEffect(function() {
        var _keys;
        if (stack && dictRef.current[(_keys = keys2[keys2.length - 1]) === null || _keys === void 0 ? void 0 : _keys.key]) {
          var _keys2;
          setLatestNotice(dictRef.current[(_keys2 = keys2[keys2.length - 1]) === null || _keys2 === void 0 ? void 0 : _keys2.key]);
        }
      }, [keys2, stack]);
      return /* @__PURE__ */ React.createElement(CSSMotionList, _extends$1({
        key: placement,
        className: classNames(prefixCls, "".concat(prefixCls, "-").concat(placement), ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.list, className, _defineProperty$1(_defineProperty$1({}, "".concat(prefixCls, "-stack"), !!stack), "".concat(prefixCls, "-stack-expanded"), expanded)),
        style: style2,
        keys: keys2,
        motionAppear: true
      }, placementMotion, {
        onAllRemoved: function onAllRemoved() {
          onAllNoticeRemoved(placement);
        }
      }), function(_ref2, nodeRef) {
        var config = _ref2.config, motionClassName = _ref2.className, motionStyle = _ref2.style, motionIndex = _ref2.index;
        var _ref3 = config, key = _ref3.key, times = _ref3.times;
        var strKey = String(key);
        var _ref4 = config, configClassName = _ref4.className, configStyle = _ref4.style, configClassNames = _ref4.classNames, configStyles = _ref4.styles, restConfig = _objectWithoutProperties$1(_ref4, _excluded$1);
        var dataIndex = keys2.findIndex(function(item) {
          return item.key === strKey;
        });
        var stackStyle = {};
        if (stack) {
          var index = keys2.length - 1 - (dataIndex > -1 ? dataIndex : motionIndex - 1);
          var transformX = placement === "top" || placement === "bottom" ? "-50%" : "0";
          if (index > 0) {
            var _dictRef$current$strK, _dictRef$current$strK2, _dictRef$current$strK3;
            stackStyle.height = expanded ? (_dictRef$current$strK = dictRef.current[strKey]) === null || _dictRef$current$strK === void 0 ? void 0 : _dictRef$current$strK.offsetHeight : latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetHeight;
            var verticalOffset = 0;
            for (var i = 0; i < index; i++) {
              var _dictRef$current$keys;
              verticalOffset += ((_dictRef$current$keys = dictRef.current[keys2[keys2.length - 1 - i].key]) === null || _dictRef$current$keys === void 0 ? void 0 : _dictRef$current$keys.offsetHeight) + gap;
            }
            var transformY = (expanded ? verticalOffset : index * offset2) * (placement.startsWith("top") ? 1 : -1);
            var scaleX = !expanded && latestNotice !== null && latestNotice !== void 0 && latestNotice.offsetWidth && (_dictRef$current$strK2 = dictRef.current[strKey]) !== null && _dictRef$current$strK2 !== void 0 && _dictRef$current$strK2.offsetWidth ? ((latestNotice === null || latestNotice === void 0 ? void 0 : latestNotice.offsetWidth) - offset2 * 2 * (index < 3 ? index : 3)) / ((_dictRef$current$strK3 = dictRef.current[strKey]) === null || _dictRef$current$strK3 === void 0 ? void 0 : _dictRef$current$strK3.offsetWidth) : 1;
            stackStyle.transform = "translate3d(".concat(transformX, ", ").concat(transformY, "px, 0) scaleX(").concat(scaleX, ")");
          } else {
            stackStyle.transform = "translate3d(".concat(transformX, ", 0, 0)");
          }
        }
        return /* @__PURE__ */ React.createElement("div", {
          ref: nodeRef,
          className: classNames("".concat(prefixCls, "-notice-wrapper"), motionClassName, configClassNames === null || configClassNames === void 0 ? void 0 : configClassNames.wrapper),
          style: _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, motionStyle), stackStyle), configStyles === null || configStyles === void 0 ? void 0 : configStyles.wrapper),
          onMouseEnter: function onMouseEnter() {
            return setHoverKeys(function(prev2) {
              return prev2.includes(strKey) ? prev2 : [].concat(_toConsumableArray(prev2), [strKey]);
            });
          },
          onMouseLeave: function onMouseLeave() {
            return setHoverKeys(function(prev2) {
              return prev2.filter(function(k2) {
                return k2 !== strKey;
              });
            });
          }
        }, /* @__PURE__ */ React.createElement(Notify, _extends$1({}, restConfig, {
          ref: function ref(node2) {
            if (dataIndex > -1) {
              dictRef.current[strKey] = node2;
            } else {
              delete dictRef.current[strKey];
            }
          },
          prefixCls,
          classNames: configClassNames,
          styles: configStyles,
          className: classNames(configClassName, ctxCls === null || ctxCls === void 0 ? void 0 : ctxCls.notice),
          style: configStyle,
          times,
          key,
          eventKey: key,
          onNoticeClose,
          hovering: stack && hoverKeys.length > 0
        })));
      });
    };
    var Notifications = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
      var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-notification" : _props$prefixCls, container = props.container, motion = props.motion, maxCount = props.maxCount, className = props.className, style2 = props.style, onAllRemoved = props.onAllRemoved, stack = props.stack, renderNotifications2 = props.renderNotifications;
      var _React$useState = reactExports.useState([]), _React$useState2 = _slicedToArray$1(_React$useState, 2), configList = _React$useState2[0], setConfigList = _React$useState2[1];
      var onNoticeClose = function onNoticeClose2(key) {
        var _config$onClose;
        var config = configList.find(function(item) {
          return item.key === key;
        });
        config === null || config === void 0 || (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
        setConfigList(function(list) {
          return list.filter(function(item) {
            return item.key !== key;
          });
        });
      };
      reactExports.useImperativeHandle(ref, function() {
        return {
          open: function open2(config) {
            setConfigList(function(list) {
              var clone2 = _toConsumableArray(list);
              var index = clone2.findIndex(function(item) {
                return item.key === config.key;
              });
              var innerConfig = _objectSpread2$1({}, config);
              if (index >= 0) {
                var _list$index;
                innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
                clone2[index] = innerConfig;
              } else {
                innerConfig.times = 0;
                clone2.push(innerConfig);
              }
              if (maxCount > 0 && clone2.length > maxCount) {
                clone2 = clone2.slice(-maxCount);
              }
              return clone2;
            });
          },
          close: function close(key) {
            onNoticeClose(key);
          },
          destroy: function destroy2() {
            setConfigList([]);
          }
        };
      });
      var _React$useState3 = reactExports.useState({}), _React$useState4 = _slicedToArray$1(_React$useState3, 2), placements = _React$useState4[0], setPlacements = _React$useState4[1];
      reactExports.useEffect(function() {
        var nextPlacements = {};
        configList.forEach(function(config) {
          var _config$placement = config.placement, placement = _config$placement === void 0 ? "topRight" : _config$placement;
          if (placement) {
            nextPlacements[placement] = nextPlacements[placement] || [];
            nextPlacements[placement].push(config);
          }
        });
        Object.keys(placements).forEach(function(placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
        });
        setPlacements(nextPlacements);
      }, [configList]);
      var onAllNoticeRemoved = function onAllNoticeRemoved2(placement) {
        setPlacements(function(originPlacements) {
          var clone2 = _objectSpread2$1({}, originPlacements);
          var list = clone2[placement] || [];
          if (!list.length) {
            delete clone2[placement];
          }
          return clone2;
        });
      };
      var emptyRef = reactExports.useRef(false);
      reactExports.useEffect(function() {
        if (Object.keys(placements).length > 0) {
          emptyRef.current = true;
        } else if (emptyRef.current) {
          onAllRemoved === null || onAllRemoved === void 0 || onAllRemoved();
          emptyRef.current = false;
        }
      }, [placements]);
      if (!container) {
        return null;
      }
      var placementList = Object.keys(placements);
      return /* @__PURE__ */ reactDomExports.createPortal(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, placementList.map(function(placement) {
        var placementConfigList = placements[placement];
        var list = /* @__PURE__ */ reactExports.createElement(NoticeList, {
          key: placement,
          configList: placementConfigList,
          placement,
          prefixCls,
          className: className === null || className === void 0 ? void 0 : className(placement),
          style: style2 === null || style2 === void 0 ? void 0 : style2(placement),
          motion,
          onNoticeClose,
          onAllNoticeRemoved,
          stack
        });
        return renderNotifications2 ? renderNotifications2(list, {
          prefixCls,
          key: placement
        }) : list;
      })), container);
    });
    var _excluded = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"];
    var defaultGetContainer = function defaultGetContainer2() {
      return document.body;
    };
    var uniqueKey = 0;
    function mergeConfig() {
      var clone2 = {};
      for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
        objList[_key] = arguments[_key];
      }
      objList.forEach(function(obj) {
        if (obj) {
          Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            if (val !== void 0) {
              clone2[key] = val;
            }
          });
        }
      });
      return clone2;
    }
    function useNotification() {
      var rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _rootConfig$getContai = rootConfig.getContainer, getContainer2 = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai, motion = rootConfig.motion, prefixCls = rootConfig.prefixCls, maxCount = rootConfig.maxCount, className = rootConfig.className, style2 = rootConfig.style, onAllRemoved = rootConfig.onAllRemoved, stack = rootConfig.stack, renderNotifications2 = rootConfig.renderNotifications, shareConfig = _objectWithoutProperties$1(rootConfig, _excluded);
      var _React$useState = reactExports.useState(), _React$useState2 = _slicedToArray$1(_React$useState, 2), container = _React$useState2[0], setContainer = _React$useState2[1];
      var notificationsRef = reactExports.useRef();
      var contextHolder = /* @__PURE__ */ reactExports.createElement(Notifications, {
        container,
        ref: notificationsRef,
        prefixCls,
        motion,
        maxCount,
        className,
        style: style2,
        onAllRemoved,
        stack,
        renderNotifications: renderNotifications2
      });
      var _React$useState3 = reactExports.useState([]), _React$useState4 = _slicedToArray$1(_React$useState3, 2), taskQueue2 = _React$useState4[0], setTaskQueue = _React$useState4[1];
      var api = reactExports.useMemo(function() {
        return {
          open: function open2(config) {
            var mergedConfig = mergeConfig(shareConfig, config);
            if (mergedConfig.key === null || mergedConfig.key === void 0) {
              mergedConfig.key = "rc-notification-".concat(uniqueKey);
              uniqueKey += 1;
            }
            setTaskQueue(function(queue) {
              return [].concat(_toConsumableArray(queue), [{
                type: "open",
                config: mergedConfig
              }]);
            });
          },
          close: function close(key) {
            setTaskQueue(function(queue) {
              return [].concat(_toConsumableArray(queue), [{
                type: "close",
                key
              }]);
            });
          },
          destroy: function destroy2() {
            setTaskQueue(function(queue) {
              return [].concat(_toConsumableArray(queue), [{
                type: "destroy"
              }]);
            });
          }
        };
      }, []);
      reactExports.useEffect(function() {
        setContainer(getContainer2());
      });
      reactExports.useEffect(function() {
        if (notificationsRef.current && taskQueue2.length) {
          taskQueue2.forEach(function(task) {
            switch (task.type) {
              case "open":
                notificationsRef.current.open(task.config);
                break;
              case "close":
                notificationsRef.current.close(task.key);
                break;
              case "destroy":
                notificationsRef.current.destroy();
                break;
            }
          });
          setTaskQueue(function(oriQueue) {
            return oriQueue.filter(function(task) {
              return !taskQueue2.includes(task);
            });
          });
        }
      }, [taskQueue2]);
      return [api, contextHolder];
    }
    var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
    var LoadingOutlined = function LoadingOutlined2(props, ref) {
      return /* @__PURE__ */ reactExports.createElement(Icon, _extends({}, props, {
        ref,
        icon: LoadingOutlined$1
      }));
    };
    var RefIcon = /* @__PURE__ */ reactExports.forwardRef(LoadingOutlined);
    const CONTAINER_OFFSET = 100;
    const CONTAINER_OFFSET_MAX_COUNT = 10;
    const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
    const genMessageStyle = (token2) => {
      const {
        componentCls,
        iconCls,
        boxShadow,
        colorText,
        colorSuccess,
        colorError,
        colorWarning,
        colorInfo,
        fontSizeLG,
        motionEaseInOutCirc,
        motionDurationSlow,
        marginXS,
        paddingXS,
        borderRadiusLG,
        zIndexPopup,
        // Custom token
        contentPadding,
        contentBg
      } = token2;
      const noticeCls = `${componentCls}-notice`;
      const messageMoveIn = new Keyframe("MessageMoveIn", {
        "0%": {
          padding: 0,
          transform: "translateY(-100%)",
          opacity: 0
        },
        "100%": {
          padding: paddingXS,
          transform: "translateY(0)",
          opacity: 1
        }
      });
      const messageMoveOut = new Keyframe("MessageMoveOut", {
        "0%": {
          maxHeight: token2.height,
          padding: paddingXS,
          opacity: 1
        },
        "100%": {
          maxHeight: 0,
          padding: 0,
          opacity: 0
        }
      });
      const noticeStyle = {
        padding: paddingXS,
        textAlign: "center",
        [`${componentCls}-custom-content`]: {
          display: "flex",
          alignItems: "center"
        },
        [`${componentCls}-custom-content > ${iconCls}`]: {
          marginInlineEnd: marginXS,
          // affected by ltr or rtl
          fontSize: fontSizeLG
        },
        [`${noticeCls}-content`]: {
          display: "inline-block",
          padding: contentPadding,
          background: contentBg,
          borderRadius: borderRadiusLG,
          boxShadow,
          pointerEvents: "all"
        },
        [`${componentCls}-success > ${iconCls}`]: {
          color: colorSuccess
        },
        [`${componentCls}-error > ${iconCls}`]: {
          color: colorError
        },
        [`${componentCls}-warning > ${iconCls}`]: {
          color: colorWarning
        },
        [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
          color: colorInfo
        }
      };
      return [
        // ============================ Holder ============================
        {
          [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
            color: colorText,
            position: "fixed",
            top: marginXS,
            width: "100%",
            pointerEvents: "none",
            zIndex: zIndexPopup,
            [`${componentCls}-move-up`]: {
              animationFillMode: "forwards"
            },
            [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
              animationName: messageMoveIn,
              animationDuration: motionDurationSlow,
              animationPlayState: "paused",
              animationTimingFunction: motionEaseInOutCirc
            },
            [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
              animationPlayState: "running"
            },
            [`${componentCls}-move-up-leave`]: {
              animationName: messageMoveOut,
              animationDuration: motionDurationSlow,
              animationPlayState: "paused",
              animationTimingFunction: motionEaseInOutCirc
            },
            [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
              animationPlayState: "running"
            },
            "&-rtl": {
              direction: "rtl",
              span: {
                direction: "rtl"
              }
            }
          })
        },
        // ============================ Notice ============================
        {
          [componentCls]: {
            [`${noticeCls}-wrapper`]: Object.assign({}, noticeStyle)
          }
        },
        // ============================= Pure =============================
        {
          [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
            padding: 0,
            textAlign: "start"
          })
        }
      ];
    };
    const prepareComponentToken = (token2) => ({
      zIndexPopup: token2.zIndexPopupBase + CONTAINER_MAX_OFFSET + 10,
      contentBg: token2.colorBgElevated,
      contentPadding: `${(token2.controlHeightLG - token2.fontSize * token2.lineHeight) / 2}px ${token2.paddingSM}px`
    });
    const useStyle = genStyleHooks("Message", (token2) => {
      const combinedToken = merge(token2, {
        height: 150
      });
      return [genMessageStyle(combinedToken)];
    }, prepareComponentToken);
    var __rest$1 = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const TypeIcon = {
      info: /* @__PURE__ */ reactExports.createElement(RefIcon$1, null),
      success: /* @__PURE__ */ reactExports.createElement(RefIcon$5, null),
      error: /* @__PURE__ */ reactExports.createElement(RefIcon$4, null),
      warning: /* @__PURE__ */ reactExports.createElement(RefIcon$2, null),
      loading: /* @__PURE__ */ reactExports.createElement(RefIcon, null)
    };
    const PureContent = (_ref) => {
      let {
        prefixCls,
        type,
        icon,
        children
      } = _ref;
      return /* @__PURE__ */ reactExports.createElement("div", {
        className: classNames(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
      }, icon || TypeIcon[type], /* @__PURE__ */ reactExports.createElement("span", null, children));
    };
    const PurePanel = (props) => {
      const {
        prefixCls: staticPrefixCls,
        className,
        type,
        icon,
        content
      } = props, restProps = __rest$1(props, ["prefixCls", "className", "type", "icon", "content"]);
      const {
        getPrefixCls
      } = reactExports.useContext(ConfigContext);
      const prefixCls = staticPrefixCls || getPrefixCls("message");
      const rootCls = useCSSVarCls(prefixCls);
      const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
      return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(Notify, Object.assign({}, restProps, {
        prefixCls,
        className: classNames(className, hashId, `${prefixCls}-notice-pure-panel`, cssVarCls, rootCls),
        eventKey: "pure",
        duration: null,
        content: /* @__PURE__ */ reactExports.createElement(PureContent, {
          prefixCls,
          type,
          icon
        }, content)
      })));
    };
    function getMotion(prefixCls, transitionName) {
      return {
        motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
      };
    }
    function wrapPromiseFn(openFn) {
      let closeFn;
      const closePromise = new Promise((resolve) => {
        closeFn = openFn(() => {
          resolve(true);
        });
      });
      const result = () => {
        closeFn === null || closeFn === void 0 ? void 0 : closeFn();
      };
      result.then = (filled, rejected) => closePromise.then(filled, rejected);
      result.promise = closePromise;
      return result;
    }
    var __rest = function(s, e2) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
      }
      return t2;
    };
    const DEFAULT_OFFSET = 8;
    const DEFAULT_DURATION = 3;
    const Wrapper = (_ref) => {
      let {
        children,
        prefixCls
      } = _ref;
      const rootCls = useCSSVarCls(prefixCls);
      const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
      return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(NotificationProvider, {
        classNames: {
          list: classNames(hashId, cssVarCls, rootCls)
        }
      }, children));
    };
    const renderNotifications = (node2, _ref2) => {
      let {
        prefixCls,
        key
      } = _ref2;
      return /* @__PURE__ */ reactExports.createElement(Wrapper, {
        prefixCls,
        key
      }, node2);
    };
    const Holder = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
      const {
        top,
        prefixCls: staticPrefixCls,
        getContainer: staticGetContainer,
        maxCount,
        duration = DEFAULT_DURATION,
        rtl,
        transitionName,
        onAllRemoved
      } = props;
      const {
        getPrefixCls,
        getPopupContainer,
        message: message2,
        direction
      } = reactExports.useContext(ConfigContext);
      const prefixCls = staticPrefixCls || getPrefixCls("message");
      const getStyle2 = () => ({
        left: "50%",
        transform: "translateX(-50%)",
        top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
      });
      const getClassName = () => classNames({
        [`${prefixCls}-rtl`]: rtl !== null && rtl !== void 0 ? rtl : direction === "rtl"
      });
      const getNotificationMotion = () => getMotion(prefixCls, transitionName);
      const mergedCloseIcon = /* @__PURE__ */ reactExports.createElement("span", {
        className: `${prefixCls}-close-x`
      }, /* @__PURE__ */ reactExports.createElement(RefIcon$3, {
        className: `${prefixCls}-close-icon`
      }));
      const [api, holder] = useNotification({
        prefixCls,
        style: getStyle2,
        className: getClassName,
        motion: getNotificationMotion,
        closable: false,
        closeIcon: mergedCloseIcon,
        duration,
        getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
        maxCount,
        onAllRemoved,
        renderNotifications
      });
      reactExports.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
        prefixCls,
        message: message2
      }));
      return holder;
    });
    let keyIndex = 0;
    function useInternalMessage(messageConfig) {
      const holderRef = reactExports.useRef(null);
      const wrapAPI = reactExports.useMemo(() => {
        const close = (key) => {
          var _a;
          (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
        };
        const open2 = (config) => {
          if (!holderRef.current) {
            const fakeResult = () => {
            };
            fakeResult.then = () => {
            };
            return fakeResult;
          }
          const {
            open: originOpen,
            prefixCls,
            message: message2
          } = holderRef.current;
          const noticePrefixCls = `${prefixCls}-notice`;
          const {
            content,
            icon,
            type,
            key,
            className,
            style: style2,
            onClose
          } = config, restConfig = __rest(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
          let mergedKey = key;
          if (mergedKey === void 0 || mergedKey === null) {
            keyIndex += 1;
            mergedKey = `antd-message-${keyIndex}`;
          }
          return wrapPromiseFn((resolve) => {
            originOpen(Object.assign(Object.assign({}, restConfig), {
              key: mergedKey,
              content: /* @__PURE__ */ reactExports.createElement(PureContent, {
                prefixCls,
                type,
                icon
              }, content),
              placement: "top",
              className: classNames(type && `${noticePrefixCls}-${type}`, className, message2 === null || message2 === void 0 ? void 0 : message2.className),
              style: Object.assign(Object.assign({}, message2 === null || message2 === void 0 ? void 0 : message2.style), style2),
              onClose: () => {
                onClose === null || onClose === void 0 ? void 0 : onClose();
                resolve();
              }
            }));
            return () => {
              close(mergedKey);
            };
          });
        };
        const destroy2 = (key) => {
          var _a;
          if (key !== void 0) {
            close(key);
          } else {
            (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
          }
        };
        const clone2 = {
          open: open2,
          destroy: destroy2
        };
        const keys2 = ["info", "success", "warning", "error", "loading"];
        keys2.forEach((type) => {
          const typeOpen2 = (jointContent, duration, onClose) => {
            let config;
            if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
              config = jointContent;
            } else {
              config = {
                content: jointContent
              };
            }
            let mergedDuration;
            let mergedOnClose;
            if (typeof duration === "function") {
              mergedOnClose = duration;
            } else {
              mergedDuration = duration;
              mergedOnClose = onClose;
            }
            const mergedConfig = Object.assign(Object.assign({
              onClose: mergedOnClose,
              duration: mergedDuration
            }, config), {
              type
            });
            return open2(mergedConfig);
          };
          clone2[type] = typeOpen2;
        });
        return clone2;
      }, []);
      return [wrapAPI, /* @__PURE__ */ reactExports.createElement(Holder, Object.assign({
        key: "message-holder"
      }, messageConfig, {
        ref: holderRef
      }))];
    }
    function useMessage(messageConfig) {
      return useInternalMessage(messageConfig);
    }
    var fullClone = _objectSpread2$1({}, ReactDOM$1);
    var version = fullClone.version, reactRender = fullClone.render;
    fullClone.unmountComponentAtNode;
    var createRoot;
    try {
      var mainVersion = Number((version || "").split(".")[0]);
      if (mainVersion >= 18) {
        createRoot = fullClone.createRoot;
      }
    } catch (e2) {
    }
    function toggleWarning(skip) {
      var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof$1(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
      }
    }
    var MARK = "__rc_react_root__";
    function modernRender(node2, container) {
      toggleWarning(true);
      var root = container[MARK] || createRoot(container);
      toggleWarning(false);
      root.render(node2);
      container[MARK] = root;
    }
    function legacyRender(node2, container) {
      reactRender(node2, container);
    }
    function render(node2, container) {
      if (createRoot) {
        modernRender(node2, container);
        return;
      }
      legacyRender(node2, container);
    }
    const AppConfigContext = /* @__PURE__ */ React.createContext({});
    let message = null;
    let act = (callback) => callback();
    let taskQueue = [];
    let defaultGlobalConfig = {};
    function getGlobalContext() {
      const {
        getContainer: getContainer2,
        duration,
        rtl,
        maxCount,
        top
      } = defaultGlobalConfig;
      const mergedContainer = (getContainer2 === null || getContainer2 === void 0 ? void 0 : getContainer2()) || document.body;
      return {
        getContainer: () => mergedContainer,
        duration,
        rtl,
        maxCount,
        top
      };
    }
    const GlobalHolder = /* @__PURE__ */ React.forwardRef((props, ref) => {
      const {
        messageConfig,
        sync
      } = props;
      const {
        getPrefixCls
      } = reactExports.useContext(ConfigContext);
      const prefixCls = defaultGlobalConfig.prefixCls || getPrefixCls("message");
      const appConfig = reactExports.useContext(AppConfigContext);
      const [api, holder] = useInternalMessage(Object.assign(Object.assign(Object.assign({}, messageConfig), {
        prefixCls
      }), appConfig.message));
      React.useImperativeHandle(ref, () => {
        const instance = Object.assign({}, api);
        Object.keys(instance).forEach((method) => {
          instance[method] = function() {
            sync();
            return api[method].apply(api, arguments);
          };
        });
        return {
          instance,
          sync
        };
      });
      return holder;
    });
    const GlobalHolderWrapper = /* @__PURE__ */ React.forwardRef((_, ref) => {
      const [messageConfig, setMessageConfig] = React.useState(getGlobalContext);
      const sync = () => {
        setMessageConfig(getGlobalContext);
      };
      React.useEffect(sync, []);
      const global = globalConfig();
      const rootPrefixCls = global.getRootPrefixCls();
      const rootIconPrefixCls = global.getIconPrefixCls();
      const theme = global.getTheme();
      const dom = /* @__PURE__ */ React.createElement(GlobalHolder, {
        ref,
        sync,
        messageConfig
      });
      return /* @__PURE__ */ React.createElement(ConfigProvider, {
        prefixCls: rootPrefixCls,
        iconPrefixCls: rootIconPrefixCls,
        theme
      }, global.holderRender ? global.holderRender(dom) : dom);
    });
    function flushNotice() {
      if (!message) {
        const holderFragment = document.createDocumentFragment();
        const newMessage = {
          fragment: holderFragment
        };
        message = newMessage;
        act(() => {
          render(/* @__PURE__ */ React.createElement(GlobalHolderWrapper, {
            ref: (node2) => {
              const {
                instance,
                sync
              } = node2 || {};
              Promise.resolve().then(() => {
                if (!newMessage.instance && instance) {
                  newMessage.instance = instance;
                  newMessage.sync = sync;
                  flushNotice();
                }
              });
            }
          }), holderFragment);
        });
        return;
      }
      if (!message.instance) {
        return;
      }
      taskQueue.forEach((task) => {
        const {
          type,
          skipped
        } = task;
        if (!skipped) {
          switch (type) {
            case "open": {
              act(() => {
                const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
                closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
                task.setCloseFn(closeFn);
              });
              break;
            }
            case "destroy":
              act(() => {
                message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
              });
              break;
            default: {
              act(() => {
                var _message$instance;
                const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, _toConsumableArray(task.args));
                closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
                task.setCloseFn(closeFn);
              });
            }
          }
        }
      });
      taskQueue = [];
    }
    function setMessageGlobalConfig(config) {
      defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
      act(() => {
        var _a;
        (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
      });
    }
    function open(config) {
      const result = wrapPromiseFn((resolve) => {
        let closeFn;
        const task = {
          type: "open",
          config,
          resolve,
          setCloseFn: (fn) => {
            closeFn = fn;
          }
        };
        taskQueue.push(task);
        return () => {
          if (closeFn) {
            act(() => {
              closeFn();
            });
          } else {
            task.skipped = true;
          }
        };
      });
      flushNotice();
      return result;
    }
    function typeOpen(type, args) {
      const result = wrapPromiseFn((resolve) => {
        let closeFn;
        const task = {
          type,
          args,
          resolve,
          setCloseFn: (fn) => {
            closeFn = fn;
          }
        };
        taskQueue.push(task);
        return () => {
          if (closeFn) {
            act(() => {
              closeFn();
            });
          } else {
            task.skipped = true;
          }
        };
      });
      flushNotice();
      return result;
    }
    const destroy = (key) => {
      taskQueue.push({
        type: "destroy",
        key
      });
      flushNotice();
    };
    const methods = ["success", "info", "warning", "error", "loading"];
    const baseStaticMethods = {
      open,
      destroy,
      config: setMessageGlobalConfig,
      useMessage,
      _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
    };
    const staticMethods = baseStaticMethods;
    methods.forEach((type) => {
      staticMethods[type] = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return typeOpen(type, args);
      };
    });
    const ColorsComponent = () => {
      const [messageApi, contextHolder] = staticMethods.useMessage();
      const { colorsVariable, colorsDescription } = genThemeColors();
      const [colors] = reactExports.useState(Object.keys(colorsVariable).map((key) => {
        return {
          name: key,
          value: colorsVariable[key]
        };
      }));
      const setLightDarkText = (color, name) => {
        return tinycolor(color).isLight() || name === "--cbd-transparent" ? "pf-regular-14 text-black" : "pf-regular-14 text-white";
      };
      const setBorderBg = (name) => {
        let clx = "w-full box-border fcc px-8px h-full border-rounded";
        if (name === "--cbd-white" || name === "--cbd-transparent") {
          return `${clx} border-basic`;
        }
        return clx;
      };
      const onCopy = (value) => {
        copyText(value);
        messageApi.open({
          type: "success",
          content: `复制 ${value} 成功！`
        });
      };
      const setDescription = (name) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: colorsDescription[name] });
      };
      const renderColorItem = (color) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          contextHolder,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pf-regular-12 mb-8px text-cbd-gray-5", children: [
            "说明: ",
            setDescription(color.name)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fsc", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-30px w-50% mr-8px",
                style: {
                  backgroundSize: "50% 50%",
                  backgroundImage: "conic-gradient(rgba(0, 0, 0, .06) 0 25%, transparent 0 50%, rgba(0, 0, 0, .06) 0 75%, transparent 0)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: setBorderBg(color.name),
                    style: {
                      [`${color.name}`]: `${color.value}`,
                      backgroundColor: `var(${color.name})`
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: setLightDarkText(color.value, color.name), children: [
                      color.name,
                      ": ",
                      color.value
                    ] })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  role: "button",
                  onClick: () => onCopy(color.name),
                  className: "select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5",
                  children: "复制变量名"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  role: "button",
                  onClick: () => onCopy(color.value),
                  className: "select-none cursor-pointer pf-regular-12 text-cbd-brand-4 hover:text-cbd-brand-5",
                  children: "复制颜色值"
                }
              )
            ] })
          ] })
        ] }, color.name);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: colors.map((colorItem) => renderColorItem(colorItem)) });
    };
    var chaPandaLayoutRules = {
      "pr": {
        position: "relative"
      },
      "pa": {
        position: "absolute"
      },
      "pf": {
        position: "fixed"
      },
      "fcs": {
        display: "flex",
        "justify-content": "center",
        "align-items": "flex-start"
      },
      "fbs": {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "flex-start"
      },
      "fcc": {
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      "fec": {
        display: "flex",
        "justify-content": "flex-end",
        "align-items": "center"
      },
      "fsc": {
        display: "flex",
        "justify-content": "flex-start",
        "align-items": "center"
      },
      "fss": {
        display: "flex",
        "justify-content": "flex-start",
        "align-items": "flex-start"
      },
      "fbc": {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      },
      "ifc": {
        display: "inline-flex",
        "align-items": "center"
      }
    };
    var chaPandaBorderRules = (colors) => {
      const basic = {
        "border-width": "1px",
        "border-style": "solid"
      };
      return {
        "gen-border-style": {
          "border-style": "solid",
          "border-color": colors["cbd-gray-3"]
        },
        "gen-border-warning": {
          "border-style": "solid",
          "border-color": colors["cbd-yellow-3"]
        },
        "gen-border-error": {
          "border-style": "solid",
          "border-color": colors["cbd-red-3"]
        },
        "gen-border-success": {
          "border-style": "solid",
          "border-color": colors["cbd-green-3"]
        },
        "border-basic": {
          ...basic,
          "border-color": colors["cbd-gray-3"]
        },
        "border-warning": {
          ...basic,
          "border-color": colors["cbd-yellow-3"]
        },
        "border-error": {
          ...basic,
          "border-color": colors["cbd-red-3"]
        },
        "border-success": {
          ...basic,
          "border-color": colors["cbd-green-3"]
        }
      };
    };
    var chaPandaFontRules = () => {
      const basicFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"';
      const pfFontFamily = `PingFang-SC, ${basicFontFamily}`;
      const hmFontFamily = `'HarmonyOS Sans SC', ${basicFontFamily}`;
      const regular = [24, 22, 20, 18, 17, 16, 15, 14, 12];
      const medium = [24, 22, 20, 18, 17, 16, 15];
      const rules = [];
      regular.forEach((p2) => {
        rules.push([
          `pf-regular-${p2}`,
          {
            "font-weight": "400",
            "font-size": `${p2}px`,
            "line-height": p2 === 24 ? "1.4" : "",
            "font-family": pfFontFamily
          }
        ]);
        rules.push([
          `hm-regular-${p2}`,
          {
            "font-weight": "400",
            "line-height": p2 === 24 ? "1.4" : "",
            "font-size": `${p2}px`,
            "font-family": hmFontFamily
          }
        ]);
      });
      medium.forEach((p2) => {
        rules.push([
          `pf-medium-${p2}`,
          {
            "font-weight": "500",
            "line-height": p2 === 24 ? "1.4" : "",
            "font-size": `${p2}px`,
            "font-family": pfFontFamily
          }
        ]);
        rules.push([
          `hm-medium-${p2}`,
          {
            "font-weight": "500",
            "line-height": p2 === 24 ? "1.4" : "",
            "font-size": `${p2}px`,
            "font-family": hmFontFamily
          }
        ]);
      });
      rules.push([
        `font-pingfang`,
        {
          "font-family": pfFontFamily
        }
      ]);
      rules.push([
        `font-harmony`,
        {
          "font-family": hmFontFamily
        }
      ]);
      return rules;
    };
    const LayoutComponent = () => {
      const [rulesCode, setRulesCode] = reactExports.useState([]);
      const layoutRules = reactExports.useMemo(() => {
        return Object.keys(chaPandaLayoutRules).map((key) => {
          const value = chaPandaLayoutRules[key];
          return {
            name: key,
            value,
            css: `.${key}${JSON.stringify(value)}`.replaceAll(",", ";\n   ").replaceAll('"', "").replaceAll("{", "{\n   ").replaceAll("}", "\n}").replaceAll(":", ": ")
          };
        });
      }, []);
      async function genHTMLCode(rulesItem) {
        const res = [];
        for (let i = 0; i < rulesItem.length; i++) {
          const html = await codeToHtml(rulesItem[i].css, {
            lang: "css",
            theme: "dracula-soft"
          });
          res.push({
            ...rulesItem[i],
            html
          });
        }
        setRulesCode(res);
      }
      reactExports.useEffect(() => {
        genHTMLCode(layoutRules);
      }, [layoutRules]);
      const renderRulesCode = (rulesItem) => {
        return rulesItem.map((ruleItem) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fcc h-122px", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lt rounded-lb flex-1 bg-cbd-brand-2 h-100% pr", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: ruleItem.value, className: "h-100%", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-30px h-30px bg-cbd-brand-3 rounded m-4px" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-30px h-30px bg-cbd-brand-3 rounded m-4px" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                dangerouslySetInnerHTML: { __html: ruleItem.html },
                className: "p-10px box-border bg-[#282A36] flex-1 h-100% rounded-rt rounded-rb"
              }
            )
          ] }, ruleItem.name);
        });
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderRulesCode(rulesCode) });
    };
    const BorderComponent = () => {
      const [rulesCode, setRulesCode] = reactExports.useState([]);
      const [messageApi, contextHolder] = staticMethods.useMessage();
      const resolveRules = reactExports.useMemo(() => {
        const borderRules = chaPandaBorderRules(genThemeColors().colors);
        return Object.keys(borderRules).map((key) => {
          const value = borderRules[key];
          let css = `.${key}${JSON.stringify(value)}`.replaceAll(",", ";\n   ").replaceAll('"', "").replaceAll("{", "{\n   ").replaceAll("}", "\n}").replaceAll(":", ": ");
          css = key.includes("gen") ? `${css}
 .my-border-width {
    border-width: 4px;
}` : css;
          return {
            name: key,
            value,
            css
          };
        });
      }, []);
      async function genHTMLCode(rulesItem) {
        const res = [];
        for (let i = 0; i < rulesItem.length; i++) {
          const html = await codeToHtml(rulesItem[i].css, {
            lang: "css",
            theme: "dracula-soft"
          });
          res.push({
            ...rulesItem[i],
            html
          });
        }
        setRulesCode(res);
      }
      reactExports.useEffect(() => {
        genHTMLCode(resolveRules);
      }, [resolveRules]);
      const onCopy = (value) => {
        copyText(value);
        messageApi.open({
          type: "success",
          content: `复制 ${value} 成功！`
        });
      };
      const renderRulesCode = (rulesItem) => {
        return rulesItem.map((ruleItem) => {
          const { name } = ruleItem;
          let cls = `w-80px h-30px bg-[#282A36] rounded`;
          let description = "";
          let type = "";
          if (name.includes("error")) {
            type = "错误色";
          } else if (name.includes("warning")) {
            type = "警告色";
          } else if (name.includes("success")) {
            type = "成功色";
          } else {
            type = "基础色";
          }
          if (name.includes("gen")) {
            description = `${type}边框，可配合边框宽度使用`;
            cls = `${cls} !border-width-4px`;
          } else {
            description = `${type}边框，预设 1px`;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10px", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pf-regular-12 mb-8px text-cbd-gray-5 fbc", children: [
              "说明: ",
              description,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  role: "button",
                  onClick: () => onCopy(ruleItem.name),
                  className: "select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5",
                  children: "复制变量名"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fcc h-142px", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lt rounded-lb flex-1 bg-[#282A36] h-100% pr", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-100% fcc", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cls, style: ruleItem.value }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  dangerouslySetInnerHTML: { __html: ruleItem.html },
                  className: "p-10px box-border bg-[#282A36] flex-1 h-100% rounded-rt rounded-rb"
                }
              )
            ] })
          ] }, name);
        });
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        contextHolder,
        renderRulesCode(rulesCode)
      ] });
    };
    const FontComponent = () => {
      const [rulesCode, setRulesCode] = reactExports.useState([]);
      const [dinCode, setDinCode] = reactExports.useState([]);
      const [messageApi, contextHolder] = staticMethods.useMessage();
      const resolveRules = reactExports.useMemo(() => {
        const fontRules = chaPandaFontRules();
        return fontRules.map((v2) => {
          const value = v2[1];
          const css = `.${v2[0]}${JSON.stringify(value)}`.replaceAll('":"', ": ").replaceAll('","', ";\n    ").replaceAll('{"', " {\n    ").replaceAll('"}', "\n}").replaceAll(",", ",\n   ").replaceAll("font-family:", "font-family:\n   ");
          return {
            name: v2[0],
            value,
            css
          };
        });
      }, []);
      const dinFontRules = reactExports.useMemo(() => {
        return [
          {
            name: "font-din",
            value: "",
            css: '.font-din {\n  font-family: \n   DIN,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n}'
          },
          {
            name: "font-din-bold",
            value: "",
            css: '.font-din-bold {\n  font-family: \n   DIN-Bold,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n}'
          },
          {
            name: "font-din-heavy",
            value: "",
            css: '.font-din-heavy {\n  font-family: \n   DIN-Heavy,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n}'
          },
          {
            name: "font-din-heavy-lighter",
            value: "",
            css: '.font-din-heavy-lighter {\n  font-family: \n   DIN-Heavy-Lighter,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n}'
          }
        ];
      }, []);
      async function genHTMLCode(rulesItem, cb2) {
        const res = [];
        for (let i = 0; i < rulesItem.length; i++) {
          const html = await codeToHtml(rulesItem[i].css, {
            lang: "css",
            theme: "dracula-soft"
          });
          res.push({
            ...rulesItem[i],
            html
          });
        }
        cb2(res);
      }
      reactExports.useEffect(() => {
        genHTMLCode(resolveRules, (res) => setRulesCode(res));
        genHTMLCode(dinFontRules, (res) => setDinCode(res));
      }, [resolveRules]);
      const onCopy = (value) => {
        copyText(value);
        messageApi.open({
          type: "success",
          content: `复制 ${value} 成功！`
        });
      };
      const renderRulesCode = (rulesItem) => {
        return rulesItem.map((ruleItem) => {
          const { name } = ruleItem;
          const resolveNames = name.split("-");
          let description = "";
          let type = "";
          if (resolveNames.includes("hm") || resolveNames.includes("harmony")) {
            type = "默认鸿蒙字体";
          } else if (resolveNames.includes("pf") || resolveNames.includes("pingfang")) {
            type = "默认苹方字体";
          }
          if (resolveNames.includes("harmony") || resolveNames.includes("pingfang")) {
            description = `${type}，无字体大小`;
          } else {
            description = `${type}，字体大小为 ${resolveNames[2]}px, ${resolveNames[1]} 字重`;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10px", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pf-regular-12 mb-8px text-cbd-gray-5 fbc", children: [
              "说明: ",
              description,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  role: "button",
                  onClick: () => onCopy(ruleItem.name),
                  className: "select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5",
                  children: "复制变量名"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lt rounded-lb flex-1 bg-[#282A36] pr", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-100% fcc", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-cbd-white", style: ruleItem.value, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "chanpanda 9999" }),
                ruleItem.name
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  dangerouslySetInnerHTML: { __html: ruleItem.html },
                  className: "p-10px box-border bg-[#282A36] rounded-rt rounded-rb w-50%"
                }
              )
            ] })
          ] }, name);
        });
      };
      const renderDinCode = (rulesItem) => {
        return rulesItem.map((ruleItem) => {
          const { name } = ruleItem;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10px", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pf-regular-12 mb-8px text-cbd-gray-5 fbc", children: [
              "说明: 不在标准内的字体，但是移动端看板使用",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  role: "button",
                  onClick: () => onCopy(ruleItem.name),
                  className: "select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5",
                  children: "复制变量名"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lt rounded-lb flex-1 bg-[#282A36] pr", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-100% fcc", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-cbd-white ${ruleItem.name}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "chanpanda 7777" }),
                ruleItem.name
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  dangerouslySetInnerHTML: { __html: ruleItem.html },
                  className: "p-10px box-border bg-[#282A36] rounded-rt rounded-rb w-50%"
                }
              )
            ] })
          ] }, name);
        });
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        contextHolder,
        renderRulesCode(rulesCode),
        renderDinCode(dinCode)
      ] });
    };
    function App() {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fcc flex-col pr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-pingfang text-cbd-gray-7", children: "样式预设库交互式文档" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-pingfang text-cbd-gray-6 px-20px box-border", children: "颜色变量" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-70vw p-20px border-rounded box-border grid-cols-2 gap-4 grid ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsComponent, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-pingfang text-cbd-gray-6 px-20px box-border", children: "布局简写" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-70vw bg-cbd-gray-1 p-20px border-rounded box-border grid-cols-2 gap-4 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutComponent, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-pingfang text-cbd-gray-6 px-20px box-border", children: "边框预设" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-70vw bg-cbd-gray-1 p-20px border-rounded box-border grid-cols-2 gap-4 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BorderComponent, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-pingfang text-cbd-gray-6 px-20px box-border", children: "字体预设" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-70vw bg-cbd-gray-1 p-20px border-rounded box-border grid-cols-2 gap-4 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontComponent, {}) })
        ] })
      ] }) });
    }
    createRoot$1(document.getElementById("root")).render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
    );
  }
});
export default require_index();
