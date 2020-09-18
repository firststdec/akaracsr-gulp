"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var n = {};

  function r(e) {
    if (n[e]) return n[e].exports;
    var o = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  r.m = t, r.c = n, r.d = function (t, n, e) {
    r.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: e
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, n) {
    if (1 & n && (t = r(t)), 8 & n) return t;
    if (4 & n && "object" == _typeof(t) && t && t.__esModule) return t;
    var e = Object.create(null);
    if (r.r(e), Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    }), 2 & n && "string" != typeof t) for (var o in t) {
      r.d(e, o, function (n) {
        return t[n];
      }.bind(null, o));
    }
    return e;
  }, r.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return r.d(n, "a", n), n;
  }, r.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, r.p = "", r(r.s = 99);
}([function (t, n, r) {
  (function (n) {
    var r = function r(t) {
      return t && t.Math == Math && t;
    };

    t.exports = r("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || r("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || r("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || r("object" == _typeof(n) && n) || Function("return this")();
  }).call(this, r(70));
}, function (t, n, r) {
  var e = r(0),
      o = r(26),
      i = r(2),
      u = r(27),
      c = r(31),
      a = r(49),
      f = o("wks"),
      s = e.Symbol,
      l = a ? s : s && s.withoutSetter || u;

  t.exports = function (t) {
    return i(f, t) || (c && i(s, t) ? f[t] = s[t] : f[t] = l("Symbol." + t)), f[t];
  };
}, function (t, n) {
  var r = {}.hasOwnProperty;

  t.exports = function (t, n) {
    return r.call(t, n);
  };
}, function (t, n) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
}, function (t, n, r) {
  var e = r(5),
      o = r(40),
      i = r(7),
      u = r(14),
      c = Object.defineProperty;
  n.f = e ? c : function (t, n, r) {
    if (i(t), n = u(n, !0), i(r), o) try {
      return c(t, n, r);
    } catch (t) {}
    if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
    return "value" in r && (t[n] = r.value), t;
  };
}, function (t, n, r) {
  var e = r(3);
  t.exports = !e(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1];
  });
}, function (t, n) {
  t.exports = function (t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  };
}, function (t, n, r) {
  var e = r(6);

  t.exports = function (t) {
    if (!e(t)) throw TypeError(String(t) + " is not an object");
    return t;
  };
}, function (t, n, r) {
  var e = r(5),
      o = r(4),
      i = r(11);
  t.exports = e ? function (t, n, r) {
    return o.f(t, n, i(1, r));
  } : function (t, n, r) {
    return t[n] = r, t;
  };
}, function (t, n, r) {
  var e = r(39),
      o = r(24);

  t.exports = function (t) {
    return e(o(t));
  };
}, function (t, n, r) {
  var e = r(0),
      o = r(22).f,
      i = r(8),
      u = r(12),
      c = r(25),
      a = r(44),
      f = r(74);

  t.exports = function (t, n) {
    var r,
        s,
        l,
        p,
        v,
        y = t.target,
        d = t.global,
        g = t.stat;
    if (r = d ? e : g ? e[y] || c(y, {}) : (e[y] || {}).prototype) for (s in n) {
      if (p = n[s], l = t.noTargetGet ? (v = o(r, s)) && v.value : r[s], !f(d ? s : y + (g ? "." : "#") + s, t.forced) && void 0 !== l) {
        if (_typeof(p) == _typeof(l)) continue;
        a(p, l);
      }

      (t.sham || l && l.sham) && i(p, "sham", !0), u(r, s, p, t);
    }
  };
}, function (t, n) {
  t.exports = function (t, n) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: n
    };
  };
}, function (t, n, r) {
  var e = r(0),
      o = r(8),
      i = r(2),
      u = r(25),
      c = r(42),
      a = r(15),
      f = a.get,
      s = a.enforce,
      l = String(String).split("String");
  (t.exports = function (t, n, r, c) {
    var a = !!c && !!c.unsafe,
        f = !!c && !!c.enumerable,
        p = !!c && !!c.noTargetGet;
    "function" == typeof r && ("string" != typeof n || i(r, "name") || o(r, "name", n), s(r).source = l.join("string" == typeof n ? n : "")), t !== e ? (a ? !p && t[n] && (f = !0) : delete t[n], f ? t[n] = r : o(t, n, r)) : f ? t[n] = r : u(n, r);
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && f(this).source || c(this);
  });
}, function (t, n) {
  t.exports = {};
}, function (t, n, r) {
  var e = r(6);

  t.exports = function (t, n) {
    if (!e(t)) return t;
    var r, o;
    if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
    if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
    if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, n, r) {
  var e,
      o,
      i,
      u = r(71),
      c = r(0),
      a = r(6),
      f = r(8),
      s = r(2),
      l = r(16),
      p = r(18),
      v = c.WeakMap;

  if (u) {
    var y = new v(),
        d = y.get,
        g = y.has,
        h = y.set;
    e = function e(t, n) {
      return h.call(y, t, n), n;
    }, o = function o(t) {
      return d.call(y, t) || {};
    }, i = function i(t) {
      return g.call(y, t);
    };
  } else {
    var b = l("state");
    p[b] = !0, e = function e(t, n) {
      return f(t, b, n), n;
    }, o = function o(t) {
      return s(t, b) ? t[b] : {};
    }, i = function i(t) {
      return s(t, b);
    };
  }

  t.exports = {
    set: e,
    get: o,
    has: i,
    enforce: function enforce(t) {
      return i(t) ? o(t) : e(t, {});
    },
    getterFor: function getterFor(t) {
      return function (n) {
        var r;
        if (!a(n) || (r = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return r;
      };
    }
  };
}, function (t, n, r) {
  var e = r(26),
      o = r(27),
      i = e("keys");

  t.exports = function (t) {
    return i[t] || (i[t] = o(t));
  };
}, function (t, n) {
  t.exports = !1;
}, function (t, n) {
  t.exports = {};
}, function (t, n, r) {
  var e = r(45),
      o = r(0),
      i = function i(t) {
    return "function" == typeof t ? t : void 0;
  };

  t.exports = function (t, n) {
    return arguments.length < 2 ? i(e[t]) || i(o[t]) : e[t] && e[t][n] || o[t] && o[t][n];
  };
}, function (t, n, r) {
  var e = r(29),
      o = Math.min;

  t.exports = function (t) {
    return t > 0 ? o(e(t), 9007199254740991) : 0;
  };
}, function (t, n, r) {
  var e = r(24);

  t.exports = function (t) {
    return Object(e(t));
  };
}, function (t, n, r) {
  var e = r(5),
      o = r(38),
      i = r(11),
      u = r(9),
      c = r(14),
      a = r(2),
      f = r(40),
      s = Object.getOwnPropertyDescriptor;
  n.f = e ? s : function (t, n) {
    if (t = u(t), n = c(n, !0), f) try {
      return s(t, n);
    } catch (t) {}
    if (a(t, n)) return i(!o.f.call(t, n), t[n]);
  };
}, function (t, n) {
  var r = {}.toString;

  t.exports = function (t) {
    return r.call(t).slice(8, -1);
  };
}, function (t, n) {
  t.exports = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  };
}, function (t, n, r) {
  var e = r(0),
      o = r(8);

  t.exports = function (t, n) {
    try {
      o(e, t, n);
    } catch (r) {
      e[t] = n;
    }

    return n;
  };
}, function (t, n, r) {
  var e = r(17),
      o = r(43);
  (t.exports = function (t, n) {
    return o[t] || (o[t] = void 0 !== n ? n : {});
  })("versions", []).push({
    version: "3.6.5",
    mode: e ? "pure" : "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  });
}, function (t, n) {
  var r = 0,
      e = Math.random();

  t.exports = function (t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + e).toString(36);
  };
}, function (t, n, r) {
  var e = r(46),
      o = r(30).concat("length", "prototype");

  n.f = Object.getOwnPropertyNames || function (t) {
    return e(t, o);
  };
}, function (t, n) {
  var r = Math.ceil,
      e = Math.floor;

  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t);
  };
}, function (t, n) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, n, r) {
  var e = r(3);
  t.exports = !!Object.getOwnPropertySymbols && !e(function () {
    return !String(Symbol());
  });
}, function (t, n, r) {
  var e = r(23);

  t.exports = Array.isArray || function (t) {
    return "Array" == e(t);
  };
}, function (t, n, r) {
  var e,
      o = r(7),
      i = r(75),
      u = r(30),
      c = r(18),
      a = r(76),
      f = r(41),
      s = r(16),
      l = s("IE_PROTO"),
      p = function p() {},
      v = function v(t) {
    return "<script>" + t + "<\/script>";
  },
      _y = function y() {
    try {
      e = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}

    var t, n;
    _y = e ? function (t) {
      t.write(v("")), t.close();
      var n = t.parentWindow.Object;
      return t = null, n;
    }(e) : ((n = f("iframe")).style.display = "none", a.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write(v("document.F=Object")), t.close(), t.F);

    for (var r = u.length; r--;) {
      delete _y.prototype[u[r]];
    }

    return _y();
  };

  c[l] = !0, t.exports = Object.create || function (t, n) {
    var r;
    return null !== t ? (p.prototype = o(t), r = new p(), p.prototype = null, r[l] = t) : r = _y(), void 0 === n ? r : i(r, n);
  };
}, function (t, n, r) {
  var e = r(4).f,
      o = r(2),
      i = r(1)("toStringTag");

  t.exports = function (t, n, r) {
    t && !o(t = r ? t : t.prototype, i) && e(t, i, {
      configurable: !0,
      value: n
    });
  };
}, function (t, n, r) {
  var e = {};
  e[r(1)("toStringTag")] = "z", t.exports = "[object z]" === String(e);
}, function (t, n, r) {
  "use strict";

  var e = r(9),
      o = r(86),
      i = r(13),
      u = r(15),
      c = r(59),
      a = u.set,
      f = u.getterFor("Array Iterator");
  t.exports = c(Array, "Array", function (t, n) {
    a(this, {
      type: "Array Iterator",
      target: e(t),
      index: 0,
      kind: n
    });
  }, function () {
    var t = f(this),
        n = t.target,
        r = t.kind,
        e = t.index++;
    return !n || e >= n.length ? (t.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == r ? {
      value: e,
      done: !1
    } : "values" == r ? {
      value: n[e],
      done: !1
    } : {
      value: [e, n[e]],
      done: !1
    };
  }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
}, function (t, n, r) {
  "use strict";

  var e = r(10),
      o = r(0),
      i = r(19),
      u = r(17),
      c = r(5),
      a = r(31),
      f = r(49),
      s = r(3),
      l = r(2),
      p = r(32),
      v = r(6),
      y = r(7),
      d = r(21),
      g = r(9),
      h = r(14),
      b = r(11),
      m = r(33),
      S = r(50),
      x = r(28),
      w = r(77),
      O = r(48),
      j = r(22),
      A = r(4),
      T = r(38),
      P = r(8),
      E = r(12),
      L = r(26),
      k = r(16),
      _ = r(18),
      I = r(27),
      M = r(1),
      C = r(51),
      R = r(52),
      F = r(34),
      N = r(15),
      D = r(78).forEach,
      G = k("hidden"),
      V = M("toPrimitive"),
      W = N.set,
      q = N.getterFor("Symbol"),
      B = Object.prototype,
      _H = o.Symbol,
      z = i("JSON", "stringify"),
      U = j.f,
      $ = A.f,
      Y = w.f,
      J = T.f,
      K = L("symbols"),
      Q = L("op-symbols"),
      X = L("string-to-symbol-registry"),
      Z = L("symbol-to-string-registry"),
      tt = L("wks"),
      nt = o.QObject,
      rt = !nt || !nt.prototype || !nt.prototype.findChild,
      et = c && s(function () {
    return 7 != m($({}, "a", {
      get: function get() {
        return $(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (t, n, r) {
    var e = U(B, n);
    e && delete B[n], $(t, n, r), e && t !== B && $(B, n, e);
  } : $,
      ot = function ot(t, n) {
    var r = K[t] = m(_H.prototype);
    return W(r, {
      type: "Symbol",
      tag: t,
      description: n
    }), c || (r.description = n), r;
  },
      it = f ? function (t) {
    return "symbol" == _typeof(t);
  } : function (t) {
    return Object(t) instanceof _H;
  },
      ut = function ut(t, n, r) {
    t === B && ut(Q, n, r), y(t);
    var e = h(n, !0);
    return y(r), l(K, e) ? (r.enumerable ? (l(t, G) && t[G][e] && (t[G][e] = !1), r = m(r, {
      enumerable: b(0, !1)
    })) : (l(t, G) || $(t, G, b(1, {})), t[G][e] = !0), et(t, e, r)) : $(t, e, r);
  },
      ct = function ct(t, n) {
    y(t);
    var r = g(n),
        e = S(r).concat(lt(r));
    return D(e, function (n) {
      c && !at.call(r, n) || ut(t, n, r[n]);
    }), t;
  },
      at = function at(t) {
    var n = h(t, !0),
        r = J.call(this, n);
    return !(this === B && l(K, n) && !l(Q, n)) && (!(r || !l(this, n) || !l(K, n) || l(this, G) && this[G][n]) || r);
  },
      ft = function ft(t, n) {
    var r = g(t),
        e = h(n, !0);

    if (r !== B || !l(K, e) || l(Q, e)) {
      var o = U(r, e);
      return !o || !l(K, e) || l(r, G) && r[G][e] || (o.enumerable = !0), o;
    }
  },
      st = function st(t) {
    var n = Y(g(t)),
        r = [];
    return D(n, function (t) {
      l(K, t) || l(_, t) || r.push(t);
    }), r;
  },
      lt = function lt(t) {
    var n = t === B,
        r = Y(n ? Q : g(t)),
        e = [];
    return D(r, function (t) {
      !l(K, t) || n && !l(B, t) || e.push(K[t]);
    }), e;
  };

  (a || (E((_H = function H() {
    if (this instanceof _H) throw TypeError("Symbol is not a constructor");

    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        n = I(t),
        r = function r(t) {
      this === B && r.call(Q, t), l(this, G) && l(this[G], n) && (this[G][n] = !1), et(this, n, b(1, t));
    };

    return c && rt && et(B, n, {
      configurable: !0,
      set: r
    }), ot(n, t);
  }).prototype, "toString", function () {
    return q(this).tag;
  }), E(_H, "withoutSetter", function (t) {
    return ot(I(t), t);
  }), T.f = at, A.f = ut, j.f = ft, x.f = w.f = st, O.f = lt, C.f = function (t) {
    return ot(M(t), t);
  }, c && ($(_H.prototype, "description", {
    configurable: !0,
    get: function get() {
      return q(this).description;
    }
  }), u || E(B, "propertyIsEnumerable", at, {
    unsafe: !0
  }))), e({
    global: !0,
    wrap: !0,
    forced: !a,
    sham: !a
  }, {
    Symbol: _H
  }), D(S(tt), function (t) {
    R(t);
  }), e({
    target: "Symbol",
    stat: !0,
    forced: !a
  }, {
    "for": function _for(t) {
      var n = String(t);
      if (l(X, n)) return X[n];

      var r = _H(n);

      return X[n] = r, Z[r] = n, r;
    },
    keyFor: function keyFor(t) {
      if (!it(t)) throw TypeError(t + " is not a symbol");
      if (l(Z, t)) return Z[t];
    },
    useSetter: function useSetter() {
      rt = !0;
    },
    useSimple: function useSimple() {
      rt = !1;
    }
  }), e({
    target: "Object",
    stat: !0,
    forced: !a,
    sham: !c
  }, {
    create: function create(t, n) {
      return void 0 === n ? m(t) : ct(m(t), n);
    },
    defineProperty: ut,
    defineProperties: ct,
    getOwnPropertyDescriptor: ft
  }), e({
    target: "Object",
    stat: !0,
    forced: !a
  }, {
    getOwnPropertyNames: st,
    getOwnPropertySymbols: lt
  }), e({
    target: "Object",
    stat: !0,
    forced: s(function () {
      O.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(t) {
      return O.f(d(t));
    }
  }), z) && e({
    target: "JSON",
    stat: !0,
    forced: !a || s(function () {
      var t = _H();

      return "[null]" != z([t]) || "{}" != z({
        a: t
      }) || "{}" != z(Object(t));
    })
  }, {
    stringify: function stringify(t, n, r) {
      for (var e, o = [t], i = 1; arguments.length > i;) {
        o.push(arguments[i++]);
      }

      if (e = n, (v(n) || void 0 !== t) && !it(t)) return p(n) || (n = function n(t, _n) {
        if ("function" == typeof e && (_n = e.call(this, t, _n)), !it(_n)) return _n;
      }), o[1] = n, z.apply(null, o);
    }
  });
  _H.prototype[V] || P(_H.prototype, V, _H.prototype.valueOf), F(_H, "Symbol"), _[G] = !0;
}, function (t, n, r) {
  "use strict";

  var e = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !e.call({
    1: 2
  }, 1);
  n.f = i ? function (t) {
    var n = o(this, t);
    return !!n && n.enumerable;
  } : e;
}, function (t, n, r) {
  var e = r(3),
      o = r(23),
      i = "".split;
  t.exports = e(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == o(t) ? i.call(t, "") : Object(t);
  } : Object;
}, function (t, n, r) {
  var e = r(5),
      o = r(3),
      i = r(41);
  t.exports = !e && !o(function () {
    return 7 != Object.defineProperty(i("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (t, n, r) {
  var e = r(0),
      o = r(6),
      i = e.document,
      u = o(i) && o(i.createElement);

  t.exports = function (t) {
    return u ? i.createElement(t) : {};
  };
}, function (t, n, r) {
  var e = r(43),
      o = Function.toString;
  "function" != typeof e.inspectSource && (e.inspectSource = function (t) {
    return o.call(t);
  }), t.exports = e.inspectSource;
}, function (t, n, r) {
  var e = r(0),
      o = r(25),
      i = e["__core-js_shared__"] || o("__core-js_shared__", {});
  t.exports = i;
}, function (t, n, r) {
  var e = r(2),
      o = r(72),
      i = r(22),
      u = r(4);

  t.exports = function (t, n) {
    for (var r = o(n), c = u.f, a = i.f, f = 0; f < r.length; f++) {
      var s = r[f];
      e(t, s) || c(t, s, a(n, s));
    }
  };
}, function (t, n, r) {
  var e = r(0);
  t.exports = e;
}, function (t, n, r) {
  var e = r(2),
      o = r(9),
      i = r(73).indexOf,
      u = r(18);

  t.exports = function (t, n) {
    var r,
        c = o(t),
        a = 0,
        f = [];

    for (r in c) {
      !e(u, r) && e(c, r) && f.push(r);
    }

    for (; n.length > a;) {
      e(c, r = n[a++]) && (~i(f, r) || f.push(r));
    }

    return f;
  };
}, function (t, n, r) {
  var e = r(29),
      o = Math.max,
      i = Math.min;

  t.exports = function (t, n) {
    var r = e(t);
    return r < 0 ? o(r + n, 0) : i(r, n);
  };
}, function (t, n) {
  n.f = Object.getOwnPropertySymbols;
}, function (t, n, r) {
  var e = r(31);
  t.exports = e && !Symbol.sham && "symbol" == _typeof(Symbol.iterator);
}, function (t, n, r) {
  var e = r(46),
      o = r(30);

  t.exports = Object.keys || function (t) {
    return e(t, o);
  };
}, function (t, n, r) {
  var e = r(1);
  n.f = e;
}, function (t, n, r) {
  var e = r(45),
      o = r(2),
      i = r(51),
      u = r(4).f;

  t.exports = function (t) {
    var n = e.Symbol || (e.Symbol = {});
    o(n, t) || u(n, t, {
      value: i.f(t)
    });
  };
}, function (t, n, r) {
  var e = r(79);

  t.exports = function (t, n, r) {
    if (e(t), void 0 === n) return t;

    switch (r) {
      case 0:
        return function () {
          return t.call(n);
        };

      case 1:
        return function (r) {
          return t.call(n, r);
        };

      case 2:
        return function (r, e) {
          return t.call(n, r, e);
        };

      case 3:
        return function (r, e, o) {
          return t.call(n, r, e, o);
        };
    }

    return function () {
      return t.apply(n, arguments);
    };
  };
}, function (t, n, r) {
  "use strict";

  var e = r(10),
      o = r(5),
      i = r(0),
      u = r(2),
      c = r(6),
      a = r(4).f,
      f = r(44),
      s = i.Symbol;

  if (o && "function" == typeof s && (!("description" in s.prototype) || void 0 !== s().description)) {
    var l = {},
        p = function p() {
      var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          n = this instanceof p ? new s(t) : void 0 === t ? s() : s(t);
      return "" === t && (l[n] = !0), n;
    };

    f(p, s);
    var v = p.prototype = s.prototype;
    v.constructor = p;
    var y = v.toString,
        d = "Symbol(test)" == String(s("test")),
        g = /^Symbol\((.*)\)[^)]+$/;
    a(v, "description", {
      configurable: !0,
      get: function get() {
        var t = c(this) ? this.valueOf() : this,
            n = y.call(t);
        if (u(l, t)) return "";
        var r = d ? n.slice(7, -1) : n.replace(g, "$1");
        return "" === r ? void 0 : r;
      }
    }), e({
      global: !0,
      forced: !0
    }, {
      Symbol: p
    });
  }
}, function (t, n, r) {
  r(52)("iterator");
}, function (t, n, r) {
  var e = r(10),
      o = r(81);
  e({
    target: "Array",
    stat: !0,
    forced: !r(85)(function (t) {
      Array.from(t);
    })
  }, {
    from: o
  });
}, function (t, n, r) {
  "use strict";

  var e = r(14),
      o = r(4),
      i = r(11);

  t.exports = function (t, n, r) {
    var u = e(n);
    u in t ? o.f(t, u, i(0, r)) : t[u] = r;
  };
}, function (t, n, r) {
  var e = r(35),
      o = r(23),
      i = r(1)("toStringTag"),
      u = "Arguments" == o(function () {
    return arguments;
  }());
  t.exports = e ? o : function (t) {
    var n, r, e;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
      try {
        return t[n];
      } catch (t) {}
    }(n = Object(t), i)) ? r : u ? o(n) : "Object" == (e = o(n)) && "function" == typeof n.callee ? "Arguments" : e;
  };
}, function (t, n, r) {
  "use strict";

  var e = r(10),
      o = r(87),
      i = r(61),
      u = r(89),
      c = r(34),
      a = r(8),
      f = r(12),
      s = r(1),
      l = r(17),
      p = r(13),
      v = r(60),
      y = v.IteratorPrototype,
      d = v.BUGGY_SAFARI_ITERATORS,
      g = s("iterator"),
      h = function h() {
    return this;
  };

  t.exports = function (t, n, r, s, v, b, m) {
    o(r, n, s);

    var S,
        x,
        w,
        O = function O(t) {
      if (t === v && E) return E;
      if (!d && t in T) return T[t];

      switch (t) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new r(this, t);
          };
      }

      return function () {
        return new r(this);
      };
    },
        j = n + " Iterator",
        A = !1,
        T = t.prototype,
        P = T[g] || T["@@iterator"] || v && T[v],
        E = !d && P || O(v),
        L = "Array" == n && T.entries || P;

    if (L && (S = i(L.call(new t())), y !== Object.prototype && S.next && (l || i(S) === y || (u ? u(S, y) : "function" != typeof S[g] && a(S, g, h)), c(S, j, !0, !0), l && (p[j] = h))), "values" == v && P && "values" !== P.name && (A = !0, E = function E() {
      return P.call(this);
    }), l && !m || T[g] === E || a(T, g, E), p[n] = E, v) if (x = {
      values: O("values"),
      keys: b ? E : O("keys"),
      entries: O("entries")
    }, m) for (w in x) {
      (d || A || !(w in T)) && f(T, w, x[w]);
    } else e({
      target: n,
      proto: !0,
      forced: d || A
    }, x);
    return x;
  };
}, function (t, n, r) {
  "use strict";

  var e,
      o,
      i,
      u = r(61),
      c = r(8),
      a = r(2),
      f = r(1),
      s = r(17),
      l = f("iterator"),
      p = !1;
  [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (e = o) : p = !0), null == e && (e = {}), s || a(e, l) || c(e, l, function () {
    return this;
  }), t.exports = {
    IteratorPrototype: e,
    BUGGY_SAFARI_ITERATORS: p
  };
}, function (t, n, r) {
  var e = r(2),
      o = r(21),
      i = r(16),
      u = r(88),
      c = i("IE_PROTO"),
      a = Object.prototype;
  t.exports = u ? Object.getPrototypeOf : function (t) {
    return t = o(t), e(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
  };
}, function (t, n, r) {
  "use strict";

  var e = r(10),
      o = r(6),
      i = r(32),
      u = r(47),
      c = r(20),
      a = r(9),
      f = r(57),
      s = r(1),
      l = r(91),
      p = r(93),
      v = l("slice"),
      y = p("slice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }),
      d = s("species"),
      g = [].slice,
      h = Math.max;
  e({
    target: "Array",
    proto: !0,
    forced: !v || !y
  }, {
    slice: function slice(t, n) {
      var r,
          e,
          s,
          l = a(this),
          p = c(l.length),
          v = u(t, p),
          y = u(void 0 === n ? p : n, p);
      if (i(l) && ("function" != typeof (r = l.constructor) || r !== Array && !i(r.prototype) ? o(r) && null === (r = r[d]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return g.call(l, v, y);

      for (e = new (void 0 === r ? Array : r)(h(y - v, 0)), s = 0; v < y; v++, s++) {
        v in l && f(e, s, l[v]);
      }

      return e.length = s, e;
    }
  });
}, function (t, n, r) {
  var e = r(19);
  t.exports = e("navigator", "userAgent") || "";
}, function (t, n, r) {
  var e = r(5),
      o = r(4).f,
      i = Function.prototype,
      u = i.toString,
      c = /^\s*function ([^ (]*)/;
  e && !("name" in i) && o(i, "name", {
    configurable: !0,
    get: function get() {
      try {
        return u.call(this).match(c)[1];
      } catch (t) {
        return "";
      }
    }
  });
}, function (t, n, r) {
  var e = r(35),
      o = r(12),
      i = r(94);
  e || o(Object.prototype, "toString", i, {
    unsafe: !0
  });
}, function (t, n, r) {
  "use strict";

  var e = r(12),
      o = r(7),
      i = r(3),
      u = r(95),
      c = RegExp.prototype,
      a = c.toString,
      f = i(function () {
    return "/a/b" != a.call({
      source: "a",
      flags: "b"
    });
  }),
      s = "toString" != a.name;
  (f || s) && e(RegExp.prototype, "toString", function () {
    var t = o(this),
        n = String(t.source),
        r = t.flags;
    return "/" + n + "/" + String(void 0 === r && t instanceof RegExp && !("flags" in c) ? u.call(t) : r);
  }, {
    unsafe: !0
  });
}, function (t, n, r) {
  "use strict";

  var e = r(96).charAt,
      o = r(15),
      i = r(59),
      u = o.set,
      c = o.getterFor("String Iterator");
  i(String, "String", function (t) {
    u(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    });
  }, function () {
    var t,
        n = c(this),
        r = n.string,
        o = n.index;
    return o >= r.length ? {
      value: void 0,
      done: !0
    } : (t = e(r, o), n.index += t.length, {
      value: t,
      done: !1
    });
  });
}, function (t, n, r) {
  var e = r(0),
      o = r(97),
      i = r(36),
      u = r(8),
      c = r(1),
      a = c("iterator"),
      f = c("toStringTag"),
      s = i.values;

  for (var l in o) {
    var p = e[l],
        v = p && p.prototype;

    if (v) {
      if (v[a] !== s) try {
        u(v, a, s);
      } catch (t) {
        v[a] = s;
      }
      if (v[f] || u(v, f, l), o[l]) for (var y in i) {
        if (v[y] !== i[y]) try {
          u(v, y, i[y]);
        } catch (t) {
          v[y] = i[y];
        }
      }
    }
  }
}, function (t, n, r) {}, function (t, n) {
  var r;

  r = function () {
    return this;
  }();

  try {
    r = r || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }

  t.exports = r;
}, function (t, n, r) {
  var e = r(0),
      o = r(42),
      i = e.WeakMap;
  t.exports = "function" == typeof i && /native code/.test(o(i));
}, function (t, n, r) {
  var e = r(19),
      o = r(28),
      i = r(48),
      u = r(7);

  t.exports = e("Reflect", "ownKeys") || function (t) {
    var n = o.f(u(t)),
        r = i.f;
    return r ? n.concat(r(t)) : n;
  };
}, function (t, n, r) {
  var e = r(9),
      o = r(20),
      i = r(47),
      u = function u(t) {
    return function (n, r, u) {
      var c,
          a = e(n),
          f = o(a.length),
          s = i(u, f);

      if (t && r != r) {
        for (; f > s;) {
          if ((c = a[s++]) != c) return !0;
        }
      } else for (; f > s; s++) {
        if ((t || s in a) && a[s] === r) return t || s || 0;
      }

      return !t && -1;
    };
  };

  t.exports = {
    includes: u(!0),
    indexOf: u(!1)
  };
}, function (t, n, r) {
  var e = r(3),
      o = /#|\.prototype\./,
      i = function i(t, n) {
    var r = c[u(t)];
    return r == f || r != a && ("function" == typeof n ? e(n) : !!n);
  },
      u = i.normalize = function (t) {
    return String(t).replace(o, ".").toLowerCase();
  },
      c = i.data = {},
      a = i.NATIVE = "N",
      f = i.POLYFILL = "P";

  t.exports = i;
}, function (t, n, r) {
  var e = r(5),
      o = r(4),
      i = r(7),
      u = r(50);
  t.exports = e ? Object.defineProperties : function (t, n) {
    i(t);

    for (var r, e = u(n), c = e.length, a = 0; c > a;) {
      o.f(t, r = e[a++], n[r]);
    }

    return t;
  };
}, function (t, n, r) {
  var e = r(19);
  t.exports = e("document", "documentElement");
}, function (t, n, r) {
  var e = r(9),
      o = r(28).f,
      i = {}.toString,
      u = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  t.exports.f = function (t) {
    return u && "[object Window]" == i.call(t) ? function (t) {
      try {
        return o(t);
      } catch (t) {
        return u.slice();
      }
    }(t) : o(e(t));
  };
}, function (t, n, r) {
  var e = r(53),
      o = r(39),
      i = r(21),
      u = r(20),
      c = r(80),
      a = [].push,
      f = function f(t) {
    var n = 1 == t,
        r = 2 == t,
        f = 3 == t,
        s = 4 == t,
        l = 6 == t,
        p = 5 == t || l;
    return function (v, y, d, g) {
      for (var h, b, m = i(v), S = o(m), x = e(y, d, 3), w = u(S.length), O = 0, j = g || c, A = n ? j(v, w) : r ? j(v, 0) : void 0; w > O; O++) {
        if ((p || O in S) && (b = x(h = S[O], O, m), t)) if (n) A[O] = b;else if (b) switch (t) {
          case 3:
            return !0;

          case 5:
            return h;

          case 6:
            return O;

          case 2:
            a.call(A, h);
        } else if (s) return !1;
      }

      return l ? -1 : f || s ? s : A;
    };
  };

  t.exports = {
    forEach: f(0),
    map: f(1),
    filter: f(2),
    some: f(3),
    every: f(4),
    find: f(5),
    findIndex: f(6)
  };
}, function (t, n) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t;
  };
}, function (t, n, r) {
  var e = r(6),
      o = r(32),
      i = r(1)("species");

  t.exports = function (t, n) {
    var r;
    return o(t) && ("function" != typeof (r = t.constructor) || r !== Array && !o(r.prototype) ? e(r) && null === (r = r[i]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === n ? 0 : n);
  };
}, function (t, n, r) {
  "use strict";

  var e = r(53),
      o = r(21),
      i = r(82),
      u = r(83),
      c = r(20),
      a = r(57),
      f = r(84);

  t.exports = function (t) {
    var n,
        r,
        s,
        l,
        p,
        v,
        y = o(t),
        d = "function" == typeof this ? this : Array,
        g = arguments.length,
        h = g > 1 ? arguments[1] : void 0,
        b = void 0 !== h,
        m = f(y),
        S = 0;
    if (b && (h = e(h, g > 2 ? arguments[2] : void 0, 2)), null == m || d == Array && u(m)) for (r = new d(n = c(y.length)); n > S; S++) {
      v = b ? h(y[S], S) : y[S], a(r, S, v);
    } else for (p = (l = m.call(y)).next, r = new d(); !(s = p.call(l)).done; S++) {
      v = b ? i(l, h, [s.value, S], !0) : s.value, a(r, S, v);
    }
    return r.length = S, r;
  };
}, function (t, n, r) {
  var e = r(7);

  t.exports = function (t, n, r, o) {
    try {
      return o ? n(e(r)[0], r[1]) : n(r);
    } catch (n) {
      var i = t["return"];
      throw void 0 !== i && e(i.call(t)), n;
    }
  };
}, function (t, n, r) {
  var e = r(1),
      o = r(13),
      i = e("iterator"),
      u = Array.prototype;

  t.exports = function (t) {
    return void 0 !== t && (o.Array === t || u[i] === t);
  };
}, function (t, n, r) {
  var e = r(58),
      o = r(13),
      i = r(1)("iterator");

  t.exports = function (t) {
    if (null != t) return t[i] || t["@@iterator"] || o[e(t)];
  };
}, function (t, n, r) {
  var e = r(1)("iterator"),
      o = !1;

  try {
    var i = 0,
        u = {
      next: function next() {
        return {
          done: !!i++
        };
      },
      "return": function _return() {
        o = !0;
      }
    };
    u[e] = function () {
      return this;
    }, Array.from(u, function () {
      throw 2;
    });
  } catch (t) {}

  t.exports = function (t, n) {
    if (!n && !o) return !1;
    var r = !1;

    try {
      var i = {};
      i[e] = function () {
        return {
          next: function next() {
            return {
              done: r = !0
            };
          }
        };
      }, t(i);
    } catch (t) {}

    return r;
  };
}, function (t, n, r) {
  var e = r(1),
      o = r(33),
      i = r(4),
      u = e("unscopables"),
      c = Array.prototype;
  null == c[u] && i.f(c, u, {
    configurable: !0,
    value: o(null)
  }), t.exports = function (t) {
    c[u][t] = !0;
  };
}, function (t, n, r) {
  "use strict";

  var e = r(60).IteratorPrototype,
      o = r(33),
      i = r(11),
      u = r(34),
      c = r(13),
      a = function a() {
    return this;
  };

  t.exports = function (t, n, r) {
    var f = n + " Iterator";
    return t.prototype = o(e, {
      next: i(1, r)
    }), u(t, f, !1, !0), c[f] = a, t;
  };
}, function (t, n, r) {
  var e = r(3);
  t.exports = !e(function () {
    function t() {}

    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  });
}, function (t, n, r) {
  var e = r(7),
      o = r(90);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t,
        n = !1,
        r = {};

    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array;
    } catch (t) {}

    return function (r, i) {
      return e(r), o(i), n ? t.call(r, i) : r.__proto__ = i, r;
    };
  }() : void 0);
}, function (t, n, r) {
  var e = r(6);

  t.exports = function (t) {
    if (!e(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
    return t;
  };
}, function (t, n, r) {
  var e = r(3),
      o = r(1),
      i = r(92),
      u = o("species");

  t.exports = function (t) {
    return i >= 51 || !e(function () {
      var n = [];
      return (n.constructor = {})[u] = function () {
        return {
          foo: 1
        };
      }, 1 !== n[t](Boolean).foo;
    });
  };
}, function (t, n, r) {
  var e,
      o,
      i = r(0),
      u = r(63),
      c = i.process,
      a = c && c.versions,
      f = a && a.v8;
  f ? o = (e = f.split("."))[0] + e[1] : u && (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = u.match(/Chrome\/(\d+)/)) && (o = e[1]), t.exports = o && +o;
}, function (t, n, r) {
  var e = r(5),
      o = r(3),
      i = r(2),
      u = Object.defineProperty,
      c = {},
      a = function a(t) {
    throw t;
  };

  t.exports = function (t, n) {
    if (i(c, t)) return c[t];
    n || (n = {});
    var r = [][t],
        f = !!i(n, "ACCESSORS") && n.ACCESSORS,
        s = i(n, 0) ? n[0] : a,
        l = i(n, 1) ? n[1] : void 0;
    return c[t] = !!r && !o(function () {
      if (f && !e) return !0;
      var t = {
        length: -1
      };
      f ? u(t, 1, {
        enumerable: !0,
        get: a
      }) : t[1] = 1, r.call(t, s, l);
    });
  };
}, function (t, n, r) {
  "use strict";

  var e = r(35),
      o = r(58);
  t.exports = e ? {}.toString : function () {
    return "[object " + o(this) + "]";
  };
}, function (t, n, r) {
  "use strict";

  var e = r(7);

  t.exports = function () {
    var t = e(this),
        n = "";
    return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.sticky && (n += "y"), n;
  };
}, function (t, n, r) {
  var e = r(29),
      o = r(24),
      i = function i(t) {
    return function (n, r) {
      var i,
          u,
          c = String(o(n)),
          a = e(r),
          f = c.length;
      return a < 0 || a >= f ? t ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536;
    };
  };

  t.exports = {
    codeAt: i(!1),
    charAt: i(!0)
  };
}, function (t, n) {
  t.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
}, function (t, n, r) {
  var e = r(10),
      o = r(0),
      i = r(63),
      u = [].slice,
      c = function c(t) {
    return function (n, r) {
      var e = arguments.length > 2,
          o = e ? u.call(arguments, 2) : void 0;
      return t(e ? function () {
        ("function" == typeof n ? n : Function(n)).apply(this, o);
      } : n, r);
    };
  };

  e({
    global: !0,
    bind: !0,
    forced: /MSIE .\./.test(i)
  }, {
    setTimeout: c(o.setTimeout),
    setInterval: c(o.setInterval)
  });
}, function (t, n, r) {
  "use strict";

  r.r(n);
  r(69), r(37), r(54), r(55), r(56), r(36), r(62), r(64), r(65), r(66), r(67), r(68), r(98);

  var e = function e(t) {
    var n = t.getAttribute("href"),
        r = function (t) {
      for (var n = 0; t;) {
        n += t.offsetTop, t = t.offsetParent;
      }

      return n;
    }(document.querySelector(n));

    $("html, body").animate({
      scrollTop: window.innerWidth >= 897 ? r - document.querySelector("#gnav").offsetHeight : r
    }, 400);
  };

  function o(t, n) {
    var r;

    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (Array.isArray(t) || (r = function (t, n) {
        if (!t) return;
        if ("string" == typeof t) return i(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, n);
      }(t)) || n && t && "number" == typeof t.length) {
        r && (t = r);

        var e = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var u,
        c = !0,
        a = !1;
    return {
      s: function s() {
        r = t[Symbol.iterator]();
      },
      n: function n() {
        var t = r.next();
        return c = t.done, t;
      },
      e: function e(t) {
        a = !0, u = t;
      },
      f: function f() {
        try {
          c || null == r["return"] || r["return"]();
        } finally {
          if (a) throw u;
        }
      }
    };
  }

  function i(t, n) {
    (null == n || n > t.length) && (n = t.length);

    for (var r = 0, e = new Array(n); r < n; r++) {
      e[r] = t[r];
    }

    return e;
  }

  function u(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }

  var c = function () {
    function t() {
      !function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.gnav = document.getElementById("gnav"), this.init();
    }

    var n, r, i;
    return n = t, (r = [{
      key: "stickyMenu",
      value: function value() {
        var t = this,
            n = document.querySelector("#problems");
        window.addEventListener("scroll", function (r) {
          if (window.innerWidth < 897) return !1;
          (window.pageYOffset || document.documentElement.scrollTop) >= n.offsetTop - t.gnav.offsetHeight ? t.gnav.classList.add("is-fixed") : t.gnav.classList.remove("is-fixed");
        });
      }
    }, {
      key: "openMenu",
      value: function value() {
        var t = this;
        this.gnav.style.display = "block", setTimeout(function () {
          t.gnav.classList.add("is-show");
        }, 100);
      }
    }, {
      key: "closeMenu",
      value: function value() {
        var t = this;
        this.gnav.classList.remove("is-show"), setTimeout(function () {
          t.gnav.style.display = "";
        }, 100);
      }
    }, {
      key: "init",
      value: function value() {
        var t = this;
        document.getElementById("btn-open-menu").addEventListener("click", function () {
          t.openMenu();
        }), document.getElementById("btn-close-menu").addEventListener("click", function () {
          t.closeMenu();
        });
        var n,
            r = o(document.querySelectorAll(".c-gnav__link"));

        try {
          for (r.s(); !(n = r.n()).done;) {
            n.value.addEventListener("click", function (n) {
              n.preventDefault();
              var r = n.currentTarget;
              window.innerWidth < 897 && t.closeMenu(), e(r);
            });
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }

        this.stickyMenu();
      }
    }]) && u(n.prototype, r), i && u(n, i), t;
  }();

  function a(t, n) {
    var r;

    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (Array.isArray(t) || (r = function (t, n) {
        if (!t) return;
        if ("string" == typeof t) return f(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(t, n);
      }(t)) || n && t && "number" == typeof t.length) {
        r && (t = r);

        var e = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return e >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[e++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var i,
        u = !0,
        c = !1;
    return {
      s: function s() {
        r = t[Symbol.iterator]();
      },
      n: function n() {
        var t = r.next();
        return u = t.done, t;
      },
      e: function e(t) {
        c = !0, i = t;
      },
      f: function f() {
        try {
          u || null == r["return"] || r["return"]();
        } finally {
          if (c) throw i;
        }
      }
    };
  }

  function f(t, n) {
    (null == n || n > t.length) && (n = t.length);

    for (var r = 0, e = new Array(n); r < n; r++) {
      e[r] = t[r];
    }

    return e;
  }

  function s(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }

  var l = function () {
    function t(n) {
      !function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.arrows = document.querySelectorAll(n.target), this.init();
    }

    var n, r, o;
    return n = t, (r = [{
      key: "init",
      value: function value() {
        if (this.arrows.length) {
          var t,
              n = a(this.arrows);

          try {
            for (n.s(); !(t = n.n()).done;) {
              t.value.addEventListener("click", function (t) {
                t.preventDefault();
                var n = t.currentTarget;
                e(n);
              });
            }
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
        }
      }
    }]) && s(n.prototype, r), o && s(n, o), t;
  }();

  new c(), new l({
    target: ".c-arrow"
  });
}]);