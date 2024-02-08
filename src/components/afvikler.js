function _n(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const X = {}, Rt = [], ye = () => {
}, Di = () => !1, jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bn = (e) => e.startsWith("onUpdate:"), ce = Object.assign, kn = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, qi = Object.prototype.hasOwnProperty, x = (e, t) => qi.call(e, t), O = Array.isArray, Tt = (e) => zt(e) === "[object Map]", Ms = (e) => zt(e) === "[object Set]", Dn = (e) => zt(e) === "[object Date]", P = (e) => typeof e == "function", ne = (e) => typeof e == "string", et = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Bs = (e) => (Q(e) || P(e)) && P(e.then) && P(e.catch), Cs = Object.prototype.toString, zt = (e) => Cs.call(e), Wi = (e) => zt(e).slice(8, -1), As = (e) => zt(e) === "[object Object]", yn = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ar = /* @__PURE__ */ _n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Er = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Ji = /-(\w)/g, Fe = Er((e) => e.replace(Ji, (t, r) => r ? r.toUpperCase() : "")), zi = /\B([A-Z])/g, Ot = Er(
  (e) => e.replace(zi, "-$1").toLowerCase()
), Rr = Er((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dr = Er((e) => e ? `on${Rr(e)}` : ""), tt = (e, t) => !Object.is(e, t), ur = (e, t) => {
  for (let r = 0; r < e.length; r++)
    e[r](t);
}, gr = (e, t, r) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
}, tn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let qn;
const Os = () => qn || (qn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Tr(e) {
  if (O(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = ne(n) ? Xi(n) : Tr(n);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ne(e) || Q(e))
    return e;
}
const Yi = /;(?![^(]*\))/g, Zi = /:([^]+)/, Qi = /\/\*[^]*?\*\//g;
function Xi(e) {
  const t = {};
  return e.replace(Qi, "").split(Yi).forEach((r) => {
    if (r) {
      const n = r.split(Zi);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ge(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (O(e))
    for (let r = 0; r < e.length; r++) {
      const n = Ge(e[r]);
      n && (t += n + " ");
    }
  else if (Q(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
function S(e) {
  if (!e)
    return null;
  let { class: t, style: r } = e;
  return t && !ne(t) && (e.class = Ge(t)), r && (e.style = Tr(r)), e;
}
const el = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tl = /* @__PURE__ */ _n(el);
function Ls(e) {
  return !!e || e === "";
}
function rl(e, t) {
  if (e.length !== t.length)
    return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = hr(e[n], t[n]);
  return r;
}
function hr(e, t) {
  if (e === t)
    return !0;
  let r = Dn(e), n = Dn(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = et(e), n = et(t), r || n)
    return e === t;
  if (r = O(e), n = O(t), r || n)
    return r && n ? rl(e, t) : !1;
  if (r = Q(e), n = Q(t), r || n) {
    if (!r || !n)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const l in e) {
      const o = e.hasOwnProperty(l), u = t.hasOwnProperty(l);
      if (o && !u || !o && u || !hr(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const w = (e) => ne(e) ? e : e == null ? "" : O(e) || Q(e) && (e.toString === Cs || !P(e.toString)) ? JSON.stringify(e, Fs, 2) : String(e), Fs = (e, t) => t && t.__v_isRef ? Fs(e, t.value) : Tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, s], i) => (r[qr(n, i) + " =>"] = s, r),
    {}
  )
} : Ms(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => qr(r))
} : et(t) ? qr(t) : Q(t) && !O(t) && !As(t) ? String(t) : t, qr = (e, t = "") => {
  var r;
  return et(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
};
let Re;
class nl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = Re;
      try {
        return Re = this, t();
      } finally {
        Re = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Re = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Re = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function sl(e, t = Re) {
  t && t.active && t.effects.push(e);
}
function il() {
  return Re;
}
let ht;
class jn {
  constructor(t, r, n, s) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, sl(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, _t();
      for (const t of this.deps)
        if (t.computed && (ll(t.computed), this._dirtyLevel >= 2))
          break;
      bt(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Qe, r = ht;
    try {
      return Qe = !0, ht = this, this._runnings++, Wn(this), this.fn();
    } finally {
      Jn(this), this._runnings--, ht = r, Qe = t;
    }
  }
  stop() {
    var t;
    this.active && (Wn(this), Jn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ll(e) {
  return e.value;
}
function Wn(e) {
  e._trackId++, e._depsLength = 0;
}
function Jn(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Gs(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Gs(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let Qe = !0, rn = 0;
const Ns = [];
function _t() {
  Ns.push(Qe), Qe = !1;
}
function bt() {
  const e = Ns.pop();
  Qe = e === void 0 ? !0 : e;
}
function En() {
  rn++;
}
function Rn() {
  for (rn--; !rn && nn.length; )
    nn.shift()();
}
function Ps(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Gs(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const nn = [];
function Hs(e, t, r) {
  En();
  for (const n of e.keys())
    if (!(!n.allowRecurse && n._runnings) && n._dirtyLevel < t && (!n._runnings || t !== 2)) {
      const s = n._dirtyLevel;
      n._dirtyLevel = t, s === 0 && (!n._queryings || t !== 2) && (n.trigger(), n.scheduler && nn.push(n.scheduler));
    }
  Rn();
}
const Vs = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, sn = /* @__PURE__ */ new WeakMap(), pt = Symbol(""), ln = Symbol("");
function _e(e, t, r) {
  if (Qe && ht) {
    let n = sn.get(e);
    n || sn.set(e, n = /* @__PURE__ */ new Map());
    let s = n.get(r);
    s || n.set(r, s = Vs(() => n.delete(r))), Ps(
      ht,
      s
    );
  }
}
function Ue(e, t, r, n, s, i) {
  const l = sn.get(e);
  if (!l)
    return;
  let o = [];
  if (t === "clear")
    o = [...l.values()];
  else if (r === "length" && O(e)) {
    const u = Number(n);
    l.forEach((c, d) => {
      (d === "length" || !et(d) && d >= u) && o.push(c);
    });
  } else
    switch (r !== void 0 && o.push(l.get(r)), t) {
      case "add":
        O(e) ? yn(r) && o.push(l.get("length")) : (o.push(l.get(pt)), Tt(e) && o.push(l.get(ln)));
        break;
      case "delete":
        O(e) || (o.push(l.get(pt)), Tt(e) && o.push(l.get(ln)));
        break;
      case "set":
        Tt(e) && o.push(l.get(pt));
        break;
    }
  En();
  for (const u of o)
    u && Hs(
      u,
      3
    );
  Rn();
}
const ol = /* @__PURE__ */ _n("__proto__,__v_isRef,__isVue"), xs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
), zn = /* @__PURE__ */ al();
function al() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = D(this);
      for (let i = 0, l = this.length; i < l; i++)
        _e(n, "get", i + "");
      const s = n[t](...r);
      return s === -1 || s === !1 ? n[t](...r.map(D)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      _t(), En();
      const n = D(this)[t].apply(this, r);
      return Rn(), bt(), n;
    };
  }), e;
}
function ul(e) {
  const t = D(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Us {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._shallow = r;
  }
  get(t, r, n) {
    const s = this._isReadonly, i = this._shallow;
    if (r === "__v_isReactive")
      return !s;
    if (r === "__v_isReadonly")
      return s;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return n === (s ? i ? jl : Ws : i ? qs : Ds).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const l = O(t);
    if (!s) {
      if (l && x(zn, r))
        return Reflect.get(zn, r, n);
      if (r === "hasOwnProperty")
        return ul;
    }
    const o = Reflect.get(t, r, n);
    return (et(r) ? xs.has(r) : ol(r)) || (s || _e(t, "get", r), i) ? o : be(o) ? l && yn(r) ? o : o.value : Q(o) ? s ? Js(o) : Yt(o) : o;
  }
}
class Ks extends Us {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, s) {
    let i = t[r];
    if (!this._shallow) {
      const u = Bt(i);
      if (!pr(n) && !Bt(n) && (i = D(i), n = D(n)), !O(t) && be(i) && !be(n))
        return u ? !1 : (i.value = n, !0);
    }
    const l = O(t) && yn(r) ? Number(r) < t.length : x(t, r), o = Reflect.set(t, r, n, s);
    return t === D(s) && (l ? tt(n, i) && Ue(t, "set", r, n) : Ue(t, "add", r, n)), o;
  }
  deleteProperty(t, r) {
    const n = x(t, r);
    t[r];
    const s = Reflect.deleteProperty(t, r);
    return s && n && Ue(t, "delete", r, void 0), s;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!et(r) || !xs.has(r)) && _e(t, "has", r), n;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      O(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class fl extends Us {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const cl = /* @__PURE__ */ new Ks(), dl = /* @__PURE__ */ new fl(), gl = /* @__PURE__ */ new Ks(
  !0
), Tn = (e) => e, Sr = (e) => Reflect.getPrototypeOf(e);
function rr(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const s = D(e), i = D(t);
  r || (tt(t, i) && _e(s, "get", t), _e(s, "get", i));
  const { has: l } = Sr(s), o = n ? Tn : r ? In : Dt;
  if (l.call(s, t))
    return o(e.get(t));
  if (l.call(s, i))
    return o(e.get(i));
  e !== s && e.get(t);
}
function nr(e, t = !1) {
  const r = this.__v_raw, n = D(r), s = D(e);
  return t || (tt(e, s) && _e(n, "has", e), _e(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s);
}
function sr(e, t = !1) {
  return e = e.__v_raw, !t && _e(D(e), "iterate", pt), Reflect.get(e, "size", e);
}
function Yn(e) {
  e = D(e);
  const t = D(this);
  return Sr(t).has.call(t, e) || (t.add(e), Ue(t, "add", e, e)), this;
}
function Zn(e, t) {
  t = D(t);
  const r = D(this), { has: n, get: s } = Sr(r);
  let i = n.call(r, e);
  i || (e = D(e), i = n.call(r, e));
  const l = s.call(r, e);
  return r.set(e, t), i ? tt(t, l) && Ue(r, "set", e, t) : Ue(r, "add", e, t), this;
}
function Qn(e) {
  const t = D(this), { has: r, get: n } = Sr(t);
  let s = r.call(t, e);
  s || (e = D(e), s = r.call(t, e)), n && n.call(t, e);
  const i = t.delete(e);
  return s && Ue(t, "delete", e, void 0), i;
}
function Xn() {
  const e = D(this), t = e.size !== 0, r = e.clear();
  return t && Ue(e, "clear", void 0, void 0), r;
}
function ir(e, t) {
  return function(n, s) {
    const i = this, l = i.__v_raw, o = D(l), u = t ? Tn : e ? In : Dt;
    return !e && _e(o, "iterate", pt), l.forEach((c, d) => n.call(s, u(c), u(d), i));
  };
}
function lr(e, t, r) {
  return function(...n) {
    const s = this.__v_raw, i = D(s), l = Tt(i), o = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, c = s[e](...n), d = r ? Tn : t ? In : Dt;
    return !t && _e(
      i,
      "iterate",
      u ? ln : pt
    ), {
      // iterator protocol
      next() {
        const { value: _, done: E } = c.next();
        return E ? { value: _, done: E } : {
          value: o ? [d(_[0]), d(_[1])] : d(_),
          done: E
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ze(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hl() {
  const e = {
    get(i) {
      return rr(this, i);
    },
    get size() {
      return sr(this);
    },
    has: nr,
    add: Yn,
    set: Zn,
    delete: Qn,
    clear: Xn,
    forEach: ir(!1, !1)
  }, t = {
    get(i) {
      return rr(this, i, !1, !0);
    },
    get size() {
      return sr(this);
    },
    has: nr,
    add: Yn,
    set: Zn,
    delete: Qn,
    clear: Xn,
    forEach: ir(!1, !0)
  }, r = {
    get(i) {
      return rr(this, i, !0);
    },
    get size() {
      return sr(this, !0);
    },
    has(i) {
      return nr.call(this, i, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: ir(!0, !1)
  }, n = {
    get(i) {
      return rr(this, i, !0, !0);
    },
    get size() {
      return sr(this, !0);
    },
    has(i) {
      return nr.call(this, i, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: ir(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = lr(
      i,
      !1,
      !1
    ), r[i] = lr(
      i,
      !0,
      !1
    ), t[i] = lr(
      i,
      !1,
      !0
    ), n[i] = lr(
      i,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    n
  ];
}
const [
  pl,
  ml,
  vl,
  _l
] = /* @__PURE__ */ hl();
function Sn(e, t) {
  const r = t ? e ? _l : vl : e ? ml : pl;
  return (n, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(
    x(r, s) && s in n ? r : n,
    s,
    i
  );
}
const bl = {
  get: /* @__PURE__ */ Sn(!1, !1)
}, kl = {
  get: /* @__PURE__ */ Sn(!1, !0)
}, yl = {
  get: /* @__PURE__ */ Sn(!0, !1)
}, Ds = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap();
function El(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Rl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : El(Wi(e));
}
function Yt(e) {
  return Bt(e) ? e : wn(
    e,
    !1,
    cl,
    bl,
    Ds
  );
}
function Tl(e) {
  return wn(
    e,
    !1,
    gl,
    kl,
    qs
  );
}
function Js(e) {
  return wn(
    e,
    !0,
    dl,
    yl,
    Ws
  );
}
function wn(e, t, r, n, s) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const l = Rl(e);
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? n : r
  );
  return s.set(e, o), o;
}
function St(e) {
  return Bt(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Bt(e) {
  return !!(e && e.__v_isReadonly);
}
function pr(e) {
  return !!(e && e.__v_isShallow);
}
function zs(e) {
  return St(e) || Bt(e);
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function Ys(e) {
  return gr(e, "__v_skip", !0), e;
}
const Dt = (e) => Q(e) ? Yt(e) : e, In = (e) => Q(e) ? Js(e) : e;
class Zs {
  constructor(t, r, n, s) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new jn(
      () => t(this._value),
      () => on(this, 1)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n;
  }
  get value() {
    const t = D(this);
    return Qs(t), (!t._cacheable || t.effect.dirty) && tt(t._value, t._value = t.effect.run()) && on(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Sl(e, t, r = !1) {
  let n, s;
  const i = P(e);
  return i ? (n = e, s = ye) : (n = e.get, s = e.set), new Zs(n, s, i || !s, r);
}
function Qs(e) {
  Qe && ht && (e = D(e), Ps(
    ht,
    e.dep || (e.dep = Vs(
      () => e.dep = void 0,
      e instanceof Zs ? e : void 0
    ))
  ));
}
function on(e, t = 3, r) {
  e = D(e);
  const n = e.dep;
  n && Hs(
    n,
    t
  );
}
function be(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ke(e) {
  return Xs(e, !1);
}
function wl(e) {
  return Xs(e, !0);
}
function Xs(e, t) {
  return be(e) ? e : new Il(e, t);
}
class Il {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : D(t), this._value = r ? t : Dt(t);
  }
  get value() {
    return Qs(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || pr(t) || Bt(t);
    t = r ? t : D(t), tt(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Dt(t), on(this, 3));
  }
}
function Te(e) {
  return be(e) ? e.value : e;
}
const $l = {
  get: (e, t, r) => Te(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const s = e[t];
    return be(s) && !be(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function ei(e) {
  return St(e) ? e : new Proxy(e, $l);
}
function Xe(e, t, r, n) {
  let s;
  try {
    s = n ? e(...n) : e();
  } catch (i) {
    wr(i, t, r);
  }
  return s;
}
function we(e, t, r, n) {
  if (P(e)) {
    const i = Xe(e, t, r, n);
    return i && Bs(i) && i.catch((l) => {
      wr(l, t, r);
    }), i;
  }
  const s = [];
  for (let i = 0; i < e.length; i++)
    s.push(we(e[i], t, r, n));
  return s;
}
function wr(e, t, r, n = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const l = t.proxy, o = `https://vuejs.org/errors/#runtime-${r}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, l, o) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Xe(
        u,
        null,
        10,
        [e, l, o]
      );
      return;
    }
  }
  Ml(e, r, s, n);
}
function Ml(e, t, r, n = !0) {
  console.error(e);
}
let qt = !1, an = !1;
const de = [];
let Le = 0;
const wt = [];
let He = null, ft = 0;
const ti = /* @__PURE__ */ Promise.resolve();
let $n = null;
function Mn(e) {
  const t = $n || ti;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bl(e) {
  let t = Le + 1, r = de.length;
  for (; t < r; ) {
    const n = t + r >>> 1, s = de[n], i = Wt(s);
    i < e || i === e && s.pre ? t = n + 1 : r = n;
  }
  return t;
}
function Bn(e) {
  (!de.length || !de.includes(
    e,
    qt && e.allowRecurse ? Le + 1 : Le
  )) && (e.id == null ? de.push(e) : de.splice(Bl(e.id), 0, e), ri());
}
function ri() {
  !qt && !an && (an = !0, $n = ti.then(si));
}
function Cl(e) {
  const t = de.indexOf(e);
  t > Le && de.splice(t, 1);
}
function Al(e) {
  O(e) ? wt.push(...e) : (!He || !He.includes(
    e,
    e.allowRecurse ? ft + 1 : ft
  )) && wt.push(e), ri();
}
function es(e, t, r = qt ? Le + 1 : 0) {
  for (; r < de.length; r++) {
    const n = de[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      de.splice(r, 1), r--, n();
    }
  }
}
function ni(e) {
  if (wt.length) {
    const t = [...new Set(wt)];
    if (wt.length = 0, He) {
      He.push(...t);
      return;
    }
    for (He = t, He.sort((r, n) => Wt(r) - Wt(n)), ft = 0; ft < He.length; ft++)
      He[ft]();
    He = null, ft = 0;
  }
}
const Wt = (e) => e.id == null ? 1 / 0 : e.id, Ol = (e, t) => {
  const r = Wt(e) - Wt(t);
  if (r === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return r;
};
function si(e) {
  an = !1, qt = !0, de.sort(Ol);
  const t = ye;
  try {
    for (Le = 0; Le < de.length; Le++) {
      const r = de[Le];
      r && r.active !== !1 && Xe(r, null, 14);
    }
  } finally {
    Le = 0, de.length = 0, ni(), qt = !1, $n = null, (de.length || wt.length) && si();
  }
}
function Ll(e, t, ...r) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || X;
  let s = r;
  const i = t.startsWith("update:"), l = i && t.slice(7);
  if (l && l in n) {
    const d = `${l === "modelValue" ? "model" : l}Modifiers`, { number: _, trim: E } = n[d] || X;
    E && (s = r.map((M) => ne(M) ? M.trim() : M)), _ && (s = r.map(tn));
  }
  let o, u = n[o = Dr(t)] || // also try camelCase event handler (#2249)
  n[o = Dr(Fe(t))];
  !u && i && (u = n[o = Dr(Ot(t))]), u && we(
    u,
    e,
    6,
    s
  );
  const c = n[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, we(
      c,
      e,
      6,
      s
    );
  }
}
function ii(e, t, r = !1) {
  const n = t.emitsCache, s = n.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let l = {}, o = !1;
  if (!P(e)) {
    const u = (c) => {
      const d = ii(c, t, !0);
      d && (o = !0, ce(l, d));
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !o ? (Q(e) && n.set(e, null), null) : (O(i) ? i.forEach((u) => l[u] = null) : ce(l, i), Q(e) && n.set(e, l), l);
}
function Ir(e, t) {
  return !e || !jr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), x(e, t[0].toLowerCase() + t.slice(1)) || x(e, Ot(t)) || x(e, t));
}
let fe = null, li = null;
function mr(e) {
  const t = fe;
  return fe = e, li = e && e.type.__scopeId || null, t;
}
function F(e, t = fe, r) {
  if (!t || e._n)
    return e;
  const n = (...s) => {
    n._d && cs(-1);
    const i = mr(t);
    let l;
    try {
      l = e(...s);
    } finally {
      mr(i), n._d && cs(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Wr(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: s,
    props: i,
    propsOptions: [l],
    slots: o,
    attrs: u,
    emit: c,
    render: d,
    renderCache: _,
    data: E,
    setupState: M,
    ctx: A,
    inheritAttrs: C
  } = e;
  let W, ie;
  const Ie = mr(e);
  try {
    if (r.shapeFlag & 4) {
      const le = s || n, U = le;
      W = Oe(
        d.call(
          U,
          le,
          _,
          i,
          M,
          E,
          A
        )
      ), ie = u;
    } else {
      const le = t;
      W = Oe(
        le.length > 1 ? le(
          i,
          { attrs: u, slots: o, emit: c }
        ) : le(
          i,
          null
          /* we know it doesn't need it */
        )
      ), ie = t.props ? u : Fl(u);
    }
  } catch (le) {
    Kt.length = 0, wr(le, e, 1), W = m(rt);
  }
  let Y = W;
  if (ie && C !== !1) {
    const le = Object.keys(ie), { shapeFlag: U } = Y;
    le.length && U & 7 && (l && le.some(bn) && (ie = Gl(
      ie,
      l
    )), Y = Ct(Y, ie));
  }
  return r.dirs && (Y = Ct(Y), Y.dirs = Y.dirs ? Y.dirs.concat(r.dirs) : r.dirs), r.transition && (Y.transition = r.transition), W = Y, mr(Ie), W;
}
const Fl = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || jr(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Gl = (e, t) => {
  const r = {};
  for (const n in e)
    (!bn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Nl(e, t, r) {
  const { props: n, children: s, component: i } = e, { props: l, children: o, patchFlag: u } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? ts(n, l, c) : !!l;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let _ = 0; _ < d.length; _++) {
        const E = d[_];
        if (l[E] !== n[E] && !Ir(c, E))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? ts(n, l, c) : !0 : !!l;
  return !1;
}
function ts(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < n.length; s++) {
    const i = n[s];
    if (t[i] !== e[i] && !Ir(r, i))
      return !0;
  }
  return !1;
}
function Pl({ vnode: e, parent: t }, r) {
  if (r)
    for (; t; ) {
      const n = t.subTree;
      if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
        (e = t.vnode).el = r, t = t.parent;
      else
        break;
    }
}
const oi = "components", ai = Symbol.for("v-ndc");
function $r(e) {
  return ne(e) ? Hl(oi, e, !1) || e : e || ai;
}
function Hl(e, t, r = !0, n = !1) {
  const s = fe || ue;
  if (s) {
    const i = s.type;
    if (e === oi) {
      const o = Oo(
        i,
        !1
      );
      if (o && (o === t || o === Fe(t) || o === Rr(Fe(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      rs(s[e] || i[e], t) || // global registration
      rs(s.appContext[e], t)
    );
    return !l && n ? i : l;
  }
}
function rs(e, t) {
  return e && (e[t] || e[Fe(t)] || e[Rr(Fe(t))]);
}
const Vl = (e) => e.__isSuspense;
function xl(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Al(e);
}
function Ul(e, t) {
  return Cn(e, null, t);
}
const or = {};
function Jr(e, t, r) {
  return Cn(e, t, r);
}
function Cn(e, t, {
  immediate: r,
  deep: n,
  flush: s,
  once: i,
  onTrack: l,
  onTrigger: o
} = X) {
  var u;
  if (t && i) {
    const U = t;
    t = (...We) => {
      U(...We), le();
    };
  }
  const c = il() === ((u = ue) == null ? void 0 : u.scope) ? ue : null;
  let d, _ = !1, E = !1;
  if (be(e) ? (d = () => e.value, _ = pr(e)) : St(e) ? (d = () => e, n = !0) : O(e) ? (E = !0, _ = e.some((U) => St(U) || pr(U)), d = () => e.map((U) => {
    if (be(U))
      return U.value;
    if (St(U))
      return dt(U);
    if (P(U))
      return Xe(U, c, 2);
  })) : P(e) ? t ? d = () => Xe(e, c, 2) : d = () => {
    if (!(c && c.isUnmounted))
      return M && M(), we(
        e,
        c,
        3,
        [A]
      );
  } : d = ye, t && n) {
    const U = d;
    d = () => dt(U());
  }
  let M, A = (U) => {
    M = Y.onStop = () => {
      Xe(U, c, 4), M = Y.onStop = void 0;
    };
  }, C;
  if (Or)
    if (A = ye, t ? r && we(t, c, 3, [
      d(),
      E ? [] : void 0,
      A
    ]) : d(), s === "sync") {
      const U = Go();
      C = U.__watcherHandles || (U.__watcherHandles = []);
    } else
      return ye;
  let W = E ? new Array(e.length).fill(or) : or;
  const ie = () => {
    if (!(!Y.active || !Y.dirty))
      if (t) {
        const U = Y.run();
        (n || _ || (E ? U.some((We, st) => tt(We, W[st])) : tt(U, W))) && (M && M(), we(t, c, 3, [
          U,
          // pass undefined as the old value when it's changed for the first time
          W === or ? void 0 : E && W[0] === or ? [] : W,
          A
        ]), W = U);
      } else
        Y.run();
  };
  ie.allowRecurse = !!t;
  let Ie;
  s === "sync" ? Ie = ie : s === "post" ? Ie = () => pe(ie, c && c.suspense) : (ie.pre = !0, c && (ie.id = c.uid), Ie = () => Bn(ie));
  const Y = new jn(d, ye, Ie), le = () => {
    Y.stop(), c && c.scope && kn(c.scope.effects, Y);
  };
  return t ? r ? ie() : W = Y.run() : s === "post" ? pe(
    Y.run.bind(Y),
    c && c.suspense
  ) : Y.run(), C && C.push(le), le;
}
function Kl(e, t, r) {
  const n = this.proxy, s = ne(e) ? e.includes(".") ? ui(n, e) : () => n[e] : e.bind(n, n);
  let i;
  P(t) ? i = t : (i = t.handler, r = t);
  const l = ue;
  At(this);
  const o = Cn(s, i.bind(n), r);
  return l ? At(l) : mt(), o;
}
function ui(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let s = 0; s < r.length && n; s++)
      n = n[r[s]];
    return n;
  };
}
function dt(e, t) {
  if (!Q(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), be(e))
    dt(e.value, t);
  else if (O(e))
    for (let r = 0; r < e.length; r++)
      dt(e[r], t);
  else if (Ms(e) || Tt(e))
    e.forEach((r) => {
      dt(r, t);
    });
  else if (As(e))
    for (const r in e)
      dt(e[r], t);
  return e;
}
function fi(e, t) {
  const r = fe;
  if (r === null)
    return e;
  const n = Lr(r) || r.proxy, s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [l, o, u, c = X] = t[i];
    l && (P(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && dt(o), s.push({
      dir: l,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: u,
      modifiers: c
    }));
  }
  return e;
}
function at(e, t, r, n) {
  const s = e.dirs, i = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const o = s[l];
    i && (o.oldValue = i[l].value);
    let u = o.dir[n];
    u && (_t(), we(u, r, 8, [
      e.el,
      o,
      e,
      t
    ]), bt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function H(e, t) {
  return P(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
const xt = (e) => !!e.type.__asyncLoader, ci = (e) => e.type.__isKeepAlive;
function Dl(e, t) {
  di(e, "a", t);
}
function ql(e, t) {
  di(e, "da", t);
}
function di(e, t, r = ue) {
  const n = e.__wdc || (e.__wdc = () => {
    let s = r;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Mr(t, n, r), r) {
    let s = r.parent;
    for (; s && s.parent; )
      ci(s.parent.vnode) && Wl(n, t, r, s), s = s.parent;
  }
}
function Wl(e, t, r, n) {
  const s = Mr(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  gi(() => {
    kn(n[t], s);
  }, r);
}
function Mr(e, t, r = ue, n = !1) {
  if (r) {
    const s = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...l) => {
      if (r.isUnmounted)
        return;
      _t(), At(r);
      const o = we(t, r, e, l);
      return mt(), bt(), o;
    });
    return n ? s.unshift(i) : s.push(i), i;
  }
}
const De = (e) => (t, r = ue) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Or || e === "sp") && Mr(e, (...n) => t(...n), r)
), Jl = De("bm"), zl = De("m"), Yl = De("bu"), Zl = De("u"), Ql = De("bum"), gi = De("um"), Xl = De("sp"), eo = De(
  "rtg"
), to = De(
  "rtc"
);
function ro(e, t = ue) {
  Mr("ec", e, t);
}
function Br(e, t, r, n) {
  let s;
  const i = r && r[n];
  if (O(e) || ne(e)) {
    s = new Array(e.length);
    for (let l = 0, o = e.length; l < o; l++)
      s[l] = t(e[l], l, void 0, i && i[l]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i && i[l]);
  } else if (Q(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, o) => t(l, o, void 0, i && i[o])
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let o = 0, u = l.length; o < u; o++) {
        const c = l[o];
        s[o] = t(e[c], c, o, i && i[o]);
      }
    }
  else
    s = [];
  return r && (r[n] = s), s;
}
function vt(e, t, r = {}, n, s) {
  if (fe.isCE || fe.parent && xt(fe.parent) && fe.parent.isCE)
    return t !== "default" && (r.name = t), m("slot", r, n && n());
  let i = e[t];
  i && i._c && (i._d = !1), j();
  const l = i && hi(i(r)), o = q(
    oe,
    {
      key: r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      l && l.key || `_${t}`
    },
    l || (n ? n() : []),
    l && e._ === 1 ? 64 : -2
  );
  return !s && o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), i && i._c && (i._d = !0), o;
}
function hi(e) {
  return e.some((t) => br(t) ? !(t.type === rt || t.type === oe && !hi(t.children)) : !0) ? e : null;
}
const un = (e) => e ? Si(e) ? Lr(e) || e.proxy : un(e.parent) : null, Ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => un(e.parent),
    $root: (e) => un(e.root),
    $emit: (e) => e.emit,
    $options: (e) => An(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Bn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mn.bind(e.proxy)),
    $watch: (e) => Kl.bind(e)
  })
), zr = (e, t) => e !== X && !e.__isScriptSetup && x(e, t), no = {
  get({ _: e }, t) {
    const { ctx: r, setupState: n, data: s, props: i, accessCache: l, type: o, appContext: u } = e;
    let c;
    if (t[0] !== "$") {
      const M = l[t];
      if (M !== void 0)
        switch (M) {
          case 1:
            return n[t];
          case 2:
            return s[t];
          case 4:
            return r[t];
          case 3:
            return i[t];
        }
      else {
        if (zr(n, t))
          return l[t] = 1, n[t];
        if (s !== X && x(s, t))
          return l[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && x(c, t)
        )
          return l[t] = 3, i[t];
        if (r !== X && x(r, t))
          return l[t] = 4, r[t];
        fn && (l[t] = 0);
      }
    }
    const d = Ut[t];
    let _, E;
    if (d)
      return t === "$attrs" && _e(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (_ = o.__cssModules) && (_ = _[t])
    )
      return _;
    if (r !== X && x(r, t))
      return l[t] = 4, r[t];
    if (
      // global properties
      E = u.config.globalProperties, x(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: s, ctx: i } = e;
    return zr(s, t) ? (s[t] = r, !0) : n !== X && x(n, t) ? (n[t] = r, !0) : x(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: s, propsOptions: i }
  }, l) {
    let o;
    return !!r[l] || e !== X && x(e, l) || zr(t, l) || (o = i[0]) && x(o, l) || x(n, l) || x(Ut, l) || x(s.config.globalProperties, l);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : x(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function so() {
  return io().slots;
}
function io() {
  const e = Mo();
  return e.setupContext || (e.setupContext = Ii(e));
}
function ns(e) {
  return O(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let fn = !0;
function lo(e) {
  const t = An(e), r = e.proxy, n = e.ctx;
  fn = !1, t.beforeCreate && ss(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: l,
    watch: o,
    provide: u,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: _,
    mounted: E,
    beforeUpdate: M,
    updated: A,
    activated: C,
    deactivated: W,
    beforeDestroy: ie,
    beforeUnmount: Ie,
    destroyed: Y,
    unmounted: le,
    render: U,
    renderTracked: We,
    renderTriggered: st,
    errorCaptured: Je,
    serverPrefetch: Vr,
    // public API
    expose: it,
    inheritAttrs: Gt,
    // assets
    components: Qt,
    directives: Xt,
    filters: xr
  } = t;
  if (c && oo(c, n, null), l)
    for (const te in l) {
      const Z = l[te];
      P(Z) && (n[te] = Z.bind(r));
    }
  if (s) {
    const te = s.call(r, r);
    Q(te) && (e.data = Yt(te));
  }
  if (fn = !0, i)
    for (const te in i) {
      const Z = i[te], lt = P(Z) ? Z.bind(r, r) : P(Z.get) ? Z.get.bind(r, r) : ye, er = !P(Z) && P(Z.set) ? Z.set.bind(r) : ye, ot = me({
        get: lt,
        set: er
      });
      Object.defineProperty(n, te, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: ($e) => ot.value = $e
      });
    }
  if (o)
    for (const te in o)
      pi(o[te], n, r, te);
  if (u) {
    const te = P(u) ? u.call(r) : u;
    Reflect.ownKeys(te).forEach((Z) => {
      ho(Z, te[Z]);
    });
  }
  d && ss(d, e, "c");
  function ge(te, Z) {
    O(Z) ? Z.forEach((lt) => te(lt.bind(r))) : Z && te(Z.bind(r));
  }
  if (ge(Jl, _), ge(zl, E), ge(Yl, M), ge(Zl, A), ge(Dl, C), ge(ql, W), ge(ro, Je), ge(to, We), ge(eo, st), ge(Ql, Ie), ge(gi, le), ge(Xl, Vr), O(it))
    if (it.length) {
      const te = e.exposed || (e.exposed = {});
      it.forEach((Z) => {
        Object.defineProperty(te, Z, {
          get: () => r[Z],
          set: (lt) => r[Z] = lt
        });
      });
    } else
      e.exposed || (e.exposed = {});
  U && e.render === ye && (e.render = U), Gt != null && (e.inheritAttrs = Gt), Qt && (e.components = Qt), Xt && (e.directives = Xt);
}
function oo(e, t, r = ye) {
  O(e) && (e = cn(e));
  for (const n in e) {
    const s = e[n];
    let i;
    Q(s) ? "default" in s ? i = fr(
      s.from || n,
      s.default,
      !0
    ) : i = fr(s.from || n) : i = fr(s), be(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[n] = i;
  }
}
function ss(e, t, r) {
  we(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function pi(e, t, r, n) {
  const s = n.includes(".") ? ui(r, n) : () => r[n];
  if (ne(e)) {
    const i = t[e];
    P(i) && Jr(s, i);
  } else if (P(e))
    Jr(s, e.bind(r));
  else if (Q(e))
    if (O(e))
      e.forEach((i) => pi(i, t, r, n));
    else {
      const i = P(e.handler) ? e.handler.bind(r) : t[e.handler];
      P(i) && Jr(s, i, e);
    }
}
function An(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, o = i.get(t);
  let u;
  return o ? u = o : !s.length && !r && !n ? u = t : (u = {}, s.length && s.forEach(
    (c) => vr(u, c, l, !0)
  ), vr(u, t, l)), Q(t) && i.set(t, u), u;
}
function vr(e, t, r, n = !1) {
  const { mixins: s, extends: i } = t;
  i && vr(e, i, r, !0), s && s.forEach(
    (l) => vr(e, l, r, !0)
  );
  for (const l in t)
    if (!(n && l === "expose")) {
      const o = ao[l] || r && r[l];
      e[l] = o ? o(e[l], t[l]) : t[l];
    }
  return e;
}
const ao = {
  data: is,
  props: ls,
  emits: ls,
  // objects
  methods: Vt,
  computed: Vt,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Vt,
  directives: Vt,
  // watch
  watch: fo,
  // provide / inject
  provide: is,
  inject: uo
};
function is(e, t) {
  return t ? e ? function() {
    return ce(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function uo(e, t) {
  return Vt(cn(e), cn(t));
}
function cn(e) {
  if (O(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vt(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ls(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    ns(e),
    ns(t ?? {})
  ) : t;
}
function fo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const r = ce(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = he(e[n], t[n]);
  return r;
}
function mi() {
  return {
    app: null,
    config: {
      isNativeTag: Di,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let co = 0;
function go(e, t) {
  return function(n, s = null) {
    P(n) || (n = ce({}, n)), s != null && !Q(s) && (s = null);
    const i = mi(), l = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const u = i.app = {
      _uid: co++,
      _component: n,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: No,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return l.has(c) || (c && P(c.install) ? (l.add(c), c.install(u, ...d)) : P(c) && (l.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return d ? (i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, _) {
        if (!o) {
          const E = m(n, s);
          return E.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), d && t ? t(E, c) : e(E, c, _), o = !0, u._container = c, c.__vue_app__ = u, Lr(E.component) || E.component.proxy;
        }
      },
      unmount() {
        o && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        _r = u;
        try {
          return c();
        } finally {
          _r = null;
        }
      }
    };
    return u;
  };
}
let _r = null;
function ho(e, t) {
  if (ue) {
    let r = ue.provides;
    const n = ue.parent && ue.parent.provides;
    n === r && (r = ue.provides = Object.create(n)), r[e] = t;
  }
}
function fr(e, t, r = !1) {
  const n = ue || fe;
  if (n || _r) {
    const s = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : _r._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return r && P(t) ? t.call(n && n.proxy) : t;
  }
}
function po(e, t, r, n = !1) {
  const s = {}, i = {};
  gr(i, Ar, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), vi(e, t, s, i);
  for (const l in e.propsOptions[0])
    l in s || (s[l] = void 0);
  r ? e.props = n ? s : Tl(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function mo(e, t, r, n) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, o = D(s), [u] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let _ = 0; _ < d.length; _++) {
        let E = d[_];
        if (Ir(e.emitsOptions, E))
          continue;
        const M = t[E];
        if (u)
          if (x(i, E))
            M !== i[E] && (i[E] = M, c = !0);
          else {
            const A = Fe(E);
            s[A] = dn(
              u,
              o,
              A,
              M,
              e,
              !1
            );
          }
        else
          M !== i[E] && (i[E] = M, c = !0);
      }
    }
  } else {
    vi(e, t, s, i) && (c = !0);
    let d;
    for (const _ in o)
      (!t || // for camelCase
      !x(t, _) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ot(_)) === _ || !x(t, d))) && (u ? r && // for camelCase
      (r[_] !== void 0 || // for kebab-case
      r[d] !== void 0) && (s[_] = dn(
        u,
        o,
        _,
        void 0,
        e,
        !0
      )) : delete s[_]);
    if (i !== o)
      for (const _ in i)
        (!t || !x(t, _)) && (delete i[_], c = !0);
  }
  c && Ue(e, "set", "$attrs");
}
function vi(e, t, r, n) {
  const [s, i] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let u in t) {
      if (ar(u))
        continue;
      const c = t[u];
      let d;
      s && x(s, d = Fe(u)) ? !i || !i.includes(d) ? r[d] = c : (o || (o = {}))[d] = c : Ir(e.emitsOptions, u) || (!(u in n) || c !== n[u]) && (n[u] = c, l = !0);
    }
  if (i) {
    const u = D(r), c = o || X;
    for (let d = 0; d < i.length; d++) {
      const _ = i[d];
      r[_] = dn(
        s,
        u,
        _,
        c[_],
        e,
        !x(c, _)
      );
    }
  }
  return l;
}
function dn(e, t, r, n, s, i) {
  const l = e[r];
  if (l != null) {
    const o = x(l, "default");
    if (o && n === void 0) {
      const u = l.default;
      if (l.type !== Function && !l.skipFactory && P(u)) {
        const { propsDefaults: c } = s;
        r in c ? n = c[r] : (At(s), n = c[r] = u.call(
          null,
          t
        ), mt());
      } else
        n = u;
    }
    l[
      0
      /* shouldCast */
    ] && (i && !o ? n = !1 : l[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ot(r)) && (n = !0));
  }
  return n;
}
function _i(e, t, r = !1) {
  const n = t.propsCache, s = n.get(e);
  if (s)
    return s;
  const i = e.props, l = {}, o = [];
  let u = !1;
  if (!P(e)) {
    const d = (_) => {
      u = !0;
      const [E, M] = _i(_, t, !0);
      ce(l, E), M && o.push(...M);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !u)
    return Q(e) && n.set(e, Rt), Rt;
  if (O(i))
    for (let d = 0; d < i.length; d++) {
      const _ = Fe(i[d]);
      os(_) && (l[_] = X);
    }
  else if (i)
    for (const d in i) {
      const _ = Fe(d);
      if (os(_)) {
        const E = i[d], M = l[_] = O(E) || P(E) ? { type: E } : ce({}, E);
        if (M) {
          const A = fs(Boolean, M.type), C = fs(String, M.type);
          M[
            0
            /* shouldCast */
          ] = A > -1, M[
            1
            /* shouldCastTrue */
          ] = C < 0 || A < C, (A > -1 || x(M, "default")) && o.push(_);
        }
      }
    }
  const c = [l, o];
  return Q(e) && n.set(e, c), c;
}
function os(e) {
  return e[0] !== "$";
}
function as(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function us(e, t) {
  return as(e) === as(t);
}
function fs(e, t) {
  return O(t) ? t.findIndex((r) => us(r, e)) : P(t) && us(t, e) ? 0 : -1;
}
const bi = (e) => e[0] === "_" || e === "$stable", On = (e) => O(e) ? e.map(Oe) : [Oe(e)], vo = (e, t, r) => {
  if (t._n)
    return t;
  const n = F((...s) => On(t(...s)), r);
  return n._c = !1, n;
}, ki = (e, t, r) => {
  const n = e._ctx;
  for (const s in e) {
    if (bi(s))
      continue;
    const i = e[s];
    if (P(i))
      t[s] = vo(s, i, n);
    else if (i != null) {
      const l = On(i);
      t[s] = () => l;
    }
  }
}, yi = (e, t) => {
  const r = On(t);
  e.slots.default = () => r;
}, _o = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (e.slots = D(t), gr(t, "_", r)) : ki(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && yi(e, t);
  gr(e.slots, Ar, 1);
}, bo = (e, t, r) => {
  const { vnode: n, slots: s } = e;
  let i = !0, l = X;
  if (n.shapeFlag & 32) {
    const o = t._;
    o ? r && o === 1 ? i = !1 : (ce(s, t), !r && o === 1 && delete s._) : (i = !t.$stable, ki(t, s)), l = t;
  } else
    t && (yi(e, t), l = { default: 1 });
  if (i)
    for (const o in s)
      !bi(o) && l[o] == null && delete s[o];
};
function gn(e, t, r, n, s = !1) {
  if (O(e)) {
    e.forEach(
      (E, M) => gn(
        E,
        t && (O(t) ? t[M] : t),
        r,
        n,
        s
      )
    );
    return;
  }
  if (xt(n) && !s)
    return;
  const i = n.shapeFlag & 4 ? Lr(n.component) || n.component.proxy : n.el, l = s ? null : i, { i: o, r: u } = e, c = t && t.r, d = o.refs === X ? o.refs = {} : o.refs, _ = o.setupState;
  if (c != null && c !== u && (ne(c) ? (d[c] = null, x(_, c) && (_[c] = null)) : be(c) && (c.value = null)), P(u))
    Xe(u, o, 12, [l, d]);
  else {
    const E = ne(u), M = be(u);
    if (E || M) {
      const A = () => {
        if (e.f) {
          const C = E ? x(_, u) ? _[u] : d[u] : u.value;
          s ? O(C) && kn(C, i) : O(C) ? C.includes(i) || C.push(i) : E ? (d[u] = [i], x(_, u) && (_[u] = d[u])) : (u.value = [i], e.k && (d[e.k] = u.value));
        } else
          E ? (d[u] = l, x(_, u) && (_[u] = l)) : M && (u.value = l, e.k && (d[e.k] = l));
      };
      l ? (A.id = -1, pe(A, r)) : A();
    }
  }
}
const pe = xl;
function ko(e) {
  return yo(e);
}
function yo(e, t) {
  const r = Os();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: s,
    patchProp: i,
    createElement: l,
    createText: o,
    createComment: u,
    setText: c,
    setElementText: d,
    parentNode: _,
    nextSibling: E,
    setScopeId: M = ye,
    insertStaticContent: A
  } = e, C = (a, f, g, h = null, p = null, k = null, R = void 0, b = null, y = !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Pt(a, f) && (h = tr(a), $e(a, p, k, !0), a = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: v, ref: T, shapeFlag: B } = f;
    switch (v) {
      case Cr:
        W(a, f, g, h);
        break;
      case rt:
        ie(a, f, g, h);
        break;
      case Zr:
        a == null && Ie(f, g, h, R);
        break;
      case oe:
        Qt(
          a,
          f,
          g,
          h,
          p,
          k,
          R,
          b,
          y
        );
        break;
      default:
        B & 1 ? U(
          a,
          f,
          g,
          h,
          p,
          k,
          R,
          b,
          y
        ) : B & 6 ? Xt(
          a,
          f,
          g,
          h,
          p,
          k,
          R,
          b,
          y
        ) : (B & 64 || B & 128) && v.process(
          a,
          f,
          g,
          h,
          p,
          k,
          R,
          b,
          y,
          jt
        );
    }
    T != null && p && gn(T, a && a.ref, k, f || a, !f);
  }, W = (a, f, g, h) => {
    if (a == null)
      n(
        f.el = o(f.children),
        g,
        h
      );
    else {
      const p = f.el = a.el;
      f.children !== a.children && c(p, f.children);
    }
  }, ie = (a, f, g, h) => {
    a == null ? n(
      f.el = u(f.children || ""),
      g,
      h
    ) : f.el = a.el;
  }, Ie = (a, f, g, h) => {
    [a.el, a.anchor] = A(
      a.children,
      f,
      g,
      h,
      a.el,
      a.anchor
    );
  }, Y = ({ el: a, anchor: f }, g, h) => {
    let p;
    for (; a && a !== f; )
      p = E(a), n(a, g, h), a = p;
    n(f, g, h);
  }, le = ({ el: a, anchor: f }) => {
    let g;
    for (; a && a !== f; )
      g = E(a), s(a), a = g;
    s(f);
  }, U = (a, f, g, h, p, k, R, b, y) => {
    f.type === "svg" ? R = "svg" : f.type === "math" && (R = "mathml"), a == null ? We(
      f,
      g,
      h,
      p,
      k,
      R,
      b,
      y
    ) : Vr(
      a,
      f,
      p,
      k,
      R,
      b,
      y
    );
  }, We = (a, f, g, h, p, k, R, b) => {
    let y, v;
    const { props: T, shapeFlag: B, transition: I, dirs: N } = a;
    if (y = a.el = l(
      a.type,
      k,
      T && T.is,
      T
    ), B & 8 ? d(y, a.children) : B & 16 && Je(
      a.children,
      y,
      null,
      h,
      p,
      Yr(a, k),
      R,
      b
    ), N && at(a, null, h, "created"), st(y, a, a.scopeId, R, h), T) {
      for (const J in T)
        J !== "value" && !ar(J) && i(
          y,
          J,
          null,
          T[J],
          k,
          a.children,
          h,
          p,
          Ne
        );
      "value" in T && i(y, "value", null, T.value, k), (v = T.onVnodeBeforeMount) && Be(v, h, a);
    }
    N && at(a, null, h, "beforeMount");
    const V = jo(p, I);
    V && I.beforeEnter(y), n(y, f, g), ((v = T && T.onVnodeMounted) || V || N) && pe(() => {
      v && Be(v, h, a), V && I.enter(y), N && at(a, null, h, "mounted");
    }, p);
  }, st = (a, f, g, h, p) => {
    if (g && M(a, g), h)
      for (let k = 0; k < h.length; k++)
        M(a, h[k]);
    if (p) {
      let k = p.subTree;
      if (f === k) {
        const R = p.vnode;
        st(
          a,
          R,
          R.scopeId,
          R.slotScopeIds,
          p.parent
        );
      }
    }
  }, Je = (a, f, g, h, p, k, R, b, y = 0) => {
    for (let v = y; v < a.length; v++) {
      const T = a[v] = b ? Ye(a[v]) : Oe(a[v]);
      C(
        null,
        T,
        f,
        g,
        h,
        p,
        k,
        R,
        b
      );
    }
  }, Vr = (a, f, g, h, p, k, R) => {
    const b = f.el = a.el;
    let { patchFlag: y, dynamicChildren: v, dirs: T } = f;
    y |= a.patchFlag & 16;
    const B = a.props || X, I = f.props || X;
    let N;
    if (g && ut(g, !1), (N = I.onVnodeBeforeUpdate) && Be(N, g, f, a), T && at(f, a, g, "beforeUpdate"), g && ut(g, !0), v ? it(
      a.dynamicChildren,
      v,
      b,
      g,
      h,
      Yr(f, p),
      k
    ) : R || Z(
      a,
      f,
      b,
      null,
      g,
      h,
      Yr(f, p),
      k,
      !1
    ), y > 0) {
      if (y & 16)
        Gt(
          b,
          f,
          B,
          I,
          g,
          h,
          p
        );
      else if (y & 2 && B.class !== I.class && i(b, "class", null, I.class, p), y & 4 && i(b, "style", B.style, I.style, p), y & 8) {
        const V = f.dynamicProps;
        for (let J = 0; J < V.length; J++) {
          const ee = V[J], ae = B[ee], Ee = I[ee];
          (Ee !== ae || ee === "value") && i(
            b,
            ee,
            ae,
            Ee,
            p,
            a.children,
            g,
            h,
            Ne
          );
        }
      }
      y & 1 && a.children !== f.children && d(b, f.children);
    } else
      !R && v == null && Gt(
        b,
        f,
        B,
        I,
        g,
        h,
        p
      );
    ((N = I.onVnodeUpdated) || T) && pe(() => {
      N && Be(N, g, f, a), T && at(f, a, g, "updated");
    }, h);
  }, it = (a, f, g, h, p, k, R) => {
    for (let b = 0; b < f.length; b++) {
      const y = a[b], v = f[b], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(y, v) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? _(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      C(
        y,
        v,
        T,
        null,
        h,
        p,
        k,
        R,
        !0
      );
    }
  }, Gt = (a, f, g, h, p, k, R) => {
    if (g !== h) {
      if (g !== X)
        for (const b in g)
          !ar(b) && !(b in h) && i(
            a,
            b,
            g[b],
            null,
            R,
            f.children,
            p,
            k,
            Ne
          );
      for (const b in h) {
        if (ar(b))
          continue;
        const y = h[b], v = g[b];
        y !== v && b !== "value" && i(
          a,
          b,
          v,
          y,
          R,
          f.children,
          p,
          k,
          Ne
        );
      }
      "value" in h && i(a, "value", g.value, h.value, R);
    }
  }, Qt = (a, f, g, h, p, k, R, b, y) => {
    const v = f.el = a ? a.el : o(""), T = f.anchor = a ? a.anchor : o("");
    let { patchFlag: B, dynamicChildren: I, slotScopeIds: N } = f;
    N && (b = b ? b.concat(N) : N), a == null ? (n(v, g, h), n(T, g, h), Je(
      f.children,
      g,
      T,
      p,
      k,
      R,
      b,
      y
    )) : B > 0 && B & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (it(
      a.dynamicChildren,
      I,
      g,
      p,
      k,
      R,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || p && f === p.subTree) && ji(
      a,
      f,
      !0
      /* shallow */
    )) : Z(
      a,
      f,
      g,
      T,
      p,
      k,
      R,
      b,
      y
    );
  }, Xt = (a, f, g, h, p, k, R, b, y) => {
    f.slotScopeIds = b, a == null ? f.shapeFlag & 512 ? p.ctx.activate(
      f,
      g,
      h,
      R,
      y
    ) : xr(
      f,
      g,
      h,
      p,
      k,
      R,
      y
    ) : Pn(a, f, y);
  }, xr = (a, f, g, h, p, k, R) => {
    const b = a.component = $o(
      a,
      h,
      p
    );
    if (ci(a) && (b.ctx.renderer = jt), Bo(b), b.asyncDep) {
      if (p && p.registerDep(b, ge), !a.el) {
        const y = b.subTree = m(rt);
        ie(null, y, f, g);
      }
    } else
      ge(
        b,
        a,
        f,
        g,
        p,
        k,
        R
      );
  }, Pn = (a, f, g) => {
    const h = f.component = a.component;
    if (Nl(a, f, g))
      if (h.asyncDep && !h.asyncResolved) {
        te(h, f, g);
        return;
      } else
        h.next = f, Cl(h.update), h.effect.dirty = !0, h.update();
    else
      f.el = a.el, h.vnode = f;
  }, ge = (a, f, g, h, p, k, R) => {
    const b = () => {
      if (a.isMounted) {
        let { next: T, bu: B, u: I, parent: N, vnode: V } = a;
        {
          const Et = Ei(a);
          if (Et) {
            T && (T.el = V.el, te(a, T, R)), Et.asyncDep.then(() => {
              a.isUnmounted || b();
            });
            return;
          }
        }
        let J = T, ee;
        ut(a, !1), T ? (T.el = V.el, te(a, T, R)) : T = V, B && ur(B), (ee = T.props && T.props.onVnodeBeforeUpdate) && Be(ee, N, T, V), ut(a, !0);
        const ae = Wr(a), Ee = a.subTree;
        a.subTree = ae, C(
          Ee,
          ae,
          // parent may have changed if it's in a teleport
          _(Ee.el),
          // anchor may have changed if it's in a fragment
          tr(Ee),
          a,
          p,
          k
        ), T.el = ae.el, J === null && Pl(a, ae.el), I && pe(I, p), (ee = T.props && T.props.onVnodeUpdated) && pe(
          () => Be(ee, N, T, V),
          p
        );
      } else {
        let T;
        const { el: B, props: I } = f, { bm: N, m: V, parent: J } = a, ee = xt(f);
        if (ut(a, !1), N && ur(N), !ee && (T = I && I.onVnodeBeforeMount) && Be(T, J, f), ut(a, !0), B && Kr) {
          const ae = () => {
            a.subTree = Wr(a), Kr(
              B,
              a.subTree,
              a,
              p,
              null
            );
          };
          ee ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !a.isUnmounted && ae()
          ) : ae();
        } else {
          const ae = a.subTree = Wr(a);
          C(
            null,
            ae,
            g,
            h,
            a,
            p,
            k
          ), f.el = ae.el;
        }
        if (V && pe(V, p), !ee && (T = I && I.onVnodeMounted)) {
          const ae = f;
          pe(
            () => Be(T, J, ae),
            p
          );
        }
        (f.shapeFlag & 256 || J && xt(J.vnode) && J.vnode.shapeFlag & 256) && a.a && pe(a.a, p), a.isMounted = !0, f = g = h = null;
      }
    }, y = a.effect = new jn(
      b,
      ye,
      () => Bn(v),
      a.scope
      // track it in component's effect scope
    ), v = a.update = () => {
      y.dirty && y.run();
    };
    v.id = a.uid, ut(a, !0), v();
  }, te = (a, f, g) => {
    f.component = a;
    const h = a.vnode.props;
    a.vnode = f, a.next = null, mo(a, f.props, h, g), bo(a, f.children, g), _t(), es(a), bt();
  }, Z = (a, f, g, h, p, k, R, b, y = !1) => {
    const v = a && a.children, T = a ? a.shapeFlag : 0, B = f.children, { patchFlag: I, shapeFlag: N } = f;
    if (I > 0) {
      if (I & 128) {
        er(
          v,
          B,
          g,
          h,
          p,
          k,
          R,
          b,
          y
        );
        return;
      } else if (I & 256) {
        lt(
          v,
          B,
          g,
          h,
          p,
          k,
          R,
          b,
          y
        );
        return;
      }
    }
    N & 8 ? (T & 16 && Ne(v, p, k), B !== v && d(g, B)) : T & 16 ? N & 16 ? er(
      v,
      B,
      g,
      h,
      p,
      k,
      R,
      b,
      y
    ) : Ne(v, p, k, !0) : (T & 8 && d(g, ""), N & 16 && Je(
      B,
      g,
      h,
      p,
      k,
      R,
      b,
      y
    ));
  }, lt = (a, f, g, h, p, k, R, b, y) => {
    a = a || Rt, f = f || Rt;
    const v = a.length, T = f.length, B = Math.min(v, T);
    let I;
    for (I = 0; I < B; I++) {
      const N = f[I] = y ? Ye(f[I]) : Oe(f[I]);
      C(
        a[I],
        N,
        g,
        null,
        p,
        k,
        R,
        b,
        y
      );
    }
    v > T ? Ne(
      a,
      p,
      k,
      !0,
      !1,
      B
    ) : Je(
      f,
      g,
      h,
      p,
      k,
      R,
      b,
      y,
      B
    );
  }, er = (a, f, g, h, p, k, R, b, y) => {
    let v = 0;
    const T = f.length;
    let B = a.length - 1, I = T - 1;
    for (; v <= B && v <= I; ) {
      const N = a[v], V = f[v] = y ? Ye(f[v]) : Oe(f[v]);
      if (Pt(N, V))
        C(
          N,
          V,
          g,
          null,
          p,
          k,
          R,
          b,
          y
        );
      else
        break;
      v++;
    }
    for (; v <= B && v <= I; ) {
      const N = a[B], V = f[I] = y ? Ye(f[I]) : Oe(f[I]);
      if (Pt(N, V))
        C(
          N,
          V,
          g,
          null,
          p,
          k,
          R,
          b,
          y
        );
      else
        break;
      B--, I--;
    }
    if (v > B) {
      if (v <= I) {
        const N = I + 1, V = N < T ? f[N].el : h;
        for (; v <= I; )
          C(
            null,
            f[v] = y ? Ye(f[v]) : Oe(f[v]),
            g,
            V,
            p,
            k,
            R,
            b,
            y
          ), v++;
      }
    } else if (v > I)
      for (; v <= B; )
        $e(a[v], p, k, !0), v++;
    else {
      const N = v, V = v, J = /* @__PURE__ */ new Map();
      for (v = V; v <= I; v++) {
        const ke = f[v] = y ? Ye(f[v]) : Oe(f[v]);
        ke.key != null && J.set(ke.key, v);
      }
      let ee, ae = 0;
      const Ee = I - V + 1;
      let Et = !1, xn = 0;
      const Nt = new Array(Ee);
      for (v = 0; v < Ee; v++)
        Nt[v] = 0;
      for (v = N; v <= B; v++) {
        const ke = a[v];
        if (ae >= Ee) {
          $e(ke, p, k, !0);
          continue;
        }
        let Me;
        if (ke.key != null)
          Me = J.get(ke.key);
        else
          for (ee = V; ee <= I; ee++)
            if (Nt[ee - V] === 0 && Pt(ke, f[ee])) {
              Me = ee;
              break;
            }
        Me === void 0 ? $e(ke, p, k, !0) : (Nt[Me - V] = v + 1, Me >= xn ? xn = Me : Et = !0, C(
          ke,
          f[Me],
          g,
          null,
          p,
          k,
          R,
          b,
          y
        ), ae++);
      }
      const Un = Et ? Eo(Nt) : Rt;
      for (ee = Un.length - 1, v = Ee - 1; v >= 0; v--) {
        const ke = V + v, Me = f[ke], Kn = ke + 1 < T ? f[ke + 1].el : h;
        Nt[v] === 0 ? C(
          null,
          Me,
          g,
          Kn,
          p,
          k,
          R,
          b,
          y
        ) : Et && (ee < 0 || v !== Un[ee] ? ot(Me, g, Kn, 2) : ee--);
      }
    }
  }, ot = (a, f, g, h, p = null) => {
    const { el: k, type: R, transition: b, children: y, shapeFlag: v } = a;
    if (v & 6) {
      ot(a.component.subTree, f, g, h);
      return;
    }
    if (v & 128) {
      a.suspense.move(f, g, h);
      return;
    }
    if (v & 64) {
      R.move(a, f, g, jt);
      return;
    }
    if (R === oe) {
      n(k, f, g);
      for (let B = 0; B < y.length; B++)
        ot(y[B], f, g, h);
      n(a.anchor, f, g);
      return;
    }
    if (R === Zr) {
      Y(a, f, g);
      return;
    }
    if (h !== 2 && v & 1 && b)
      if (h === 0)
        b.beforeEnter(k), n(k, f, g), pe(() => b.enter(k), p);
      else {
        const { leave: B, delayLeave: I, afterLeave: N } = b, V = () => n(k, f, g), J = () => {
          B(k, () => {
            V(), N && N();
          });
        };
        I ? I(k, V, J) : J();
      }
    else
      n(k, f, g);
  }, $e = (a, f, g, h = !1, p = !1) => {
    const {
      type: k,
      props: R,
      ref: b,
      children: y,
      dynamicChildren: v,
      shapeFlag: T,
      patchFlag: B,
      dirs: I
    } = a;
    if (b != null && gn(b, null, g, a, !0), T & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const N = T & 1 && I, V = !xt(a);
    let J;
    if (V && (J = R && R.onVnodeBeforeUnmount) && Be(J, f, a), T & 6)
      Ki(a.component, g, h);
    else {
      if (T & 128) {
        a.suspense.unmount(g, h);
        return;
      }
      N && at(a, null, f, "beforeUnmount"), T & 64 ? a.type.remove(
        a,
        f,
        g,
        p,
        jt,
        h
      ) : v && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== oe || B > 0 && B & 64) ? Ne(
        v,
        f,
        g,
        !1,
        !0
      ) : (k === oe && B & 384 || !p && T & 16) && Ne(y, f, g), h && Hn(a);
    }
    (V && (J = R && R.onVnodeUnmounted) || N) && pe(() => {
      J && Be(J, f, a), N && at(a, null, f, "unmounted");
    }, g);
  }, Hn = (a) => {
    const { type: f, el: g, anchor: h, transition: p } = a;
    if (f === oe) {
      Ui(g, h);
      return;
    }
    if (f === Zr) {
      le(a);
      return;
    }
    const k = () => {
      s(g), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (a.shapeFlag & 1 && p && !p.persisted) {
      const { leave: R, delayLeave: b } = p, y = () => R(g, k);
      b ? b(a.el, k, y) : y();
    } else
      k();
  }, Ui = (a, f) => {
    let g;
    for (; a !== f; )
      g = E(a), s(a), a = g;
    s(f);
  }, Ki = (a, f, g) => {
    const { bum: h, scope: p, update: k, subTree: R, um: b } = a;
    h && ur(h), p.stop(), k && (k.active = !1, $e(R, a, f, g)), b && pe(b, f), pe(() => {
      a.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ne = (a, f, g, h = !1, p = !1, k = 0) => {
    for (let R = k; R < a.length; R++)
      $e(a[R], f, g, h, p);
  }, tr = (a) => a.shapeFlag & 6 ? tr(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : E(a.anchor || a.el), Vn = (a, f, g) => {
    a == null ? f._vnode && $e(f._vnode, null, null, !0) : C(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      g
    ), es(), ni(), f._vnode = a;
  }, jt = {
    p: C,
    um: $e,
    m: ot,
    r: Hn,
    mt: xr,
    mc: Je,
    pc: Z,
    pbc: it,
    n: tr,
    o: e
  };
  let Ur, Kr;
  return t && ([Ur, Kr] = t(
    jt
  )), {
    render: Vn,
    hydrate: Ur,
    createApp: go(Vn, Ur)
  };
}
function Yr({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ut({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function jo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ji(e, t, r = !1) {
  const n = e.children, s = t.children;
  if (O(n) && O(s))
    for (let i = 0; i < n.length; i++) {
      const l = n[i];
      let o = s[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[i] = Ye(s[i]), o.el = l.el), r || ji(l, o)), o.type === Cr && (o.el = l.el);
    }
}
function Eo(e) {
  const t = e.slice(), r = [0];
  let n, s, i, l, o;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const c = e[n];
    if (c !== 0) {
      if (s = r[r.length - 1], e[s] < c) {
        t[n] = s, r.push(n);
        continue;
      }
      for (i = 0, l = r.length - 1; i < l; )
        o = i + l >> 1, e[r[o]] < c ? i = o + 1 : l = o;
      c < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n);
    }
  }
  for (i = r.length, l = r[i - 1]; i-- > 0; )
    r[i] = l, l = t[l];
  return r;
}
function Ei(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
const Ro = (e) => e.__isTeleport, oe = Symbol.for("v-fgt"), Cr = Symbol.for("v-txt"), rt = Symbol.for("v-cmt"), Zr = Symbol.for("v-stc"), Kt = [];
let Se = null;
function j(e = !1) {
  Kt.push(Se = e ? null : []);
}
function To() {
  Kt.pop(), Se = Kt[Kt.length - 1] || null;
}
let Jt = 1;
function cs(e) {
  Jt += e;
}
function Ri(e) {
  return e.dynamicChildren = Jt > 0 ? Se || Rt : null, To(), Jt > 0 && Se && Se.push(e), e;
}
function G(e, t, r, n, s, i) {
  return Ri(
    L(
      e,
      t,
      r,
      n,
      s,
      i,
      !0
    )
  );
}
function q(e, t, r, n, s) {
  return Ri(
    m(
      e,
      t,
      r,
      n,
      s,
      !0
    )
  );
}
function br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ar = "__vInternal", Ti = ({ key: e }) => e ?? null, cr = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || be(e) || P(e) ? { i: fe, r: e, k: t, f: !!r } : e : null);
function L(e, t = null, r = null, n = 0, s = null, i = e === oe ? 0 : 1, l = !1, o = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ti(t),
    ref: t && cr(t),
    scopeId: li,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return o ? (Ln(u, r), i & 128 && e.normalize(u)) : r && (u.shapeFlag |= ne(r) ? 8 : 16), Jt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Se.push(u), u;
}
const m = So;
function So(e, t = null, r = null, n = 0, s = null, i = !1) {
  if ((!e || e === ai) && (e = rt), br(e)) {
    const o = Ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Ln(o, r), Jt > 0 && !i && Se && (o.shapeFlag & 6 ? Se[Se.indexOf(e)] = o : Se.push(o)), o.patchFlag |= -2, o;
  }
  if (Lo(e) && (e = e.__vccOpts), t) {
    t = $(t);
    let { class: o, style: u } = t;
    o && !ne(o) && (t.class = Ge(o)), Q(u) && (zs(u) && !O(u) && (u = ce({}, u)), t.style = Tr(u));
  }
  const l = ne(e) ? 1 : Vl(e) ? 128 : Ro(e) ? 64 : Q(e) ? 4 : P(e) ? 2 : 0;
  return L(
    e,
    t,
    r,
    n,
    s,
    l,
    i,
    !0
  );
}
function $(e) {
  return e ? zs(e) || Ar in e ? ce({}, e) : e : null;
}
function Ct(e, t, r = !1) {
  const { props: n, ref: s, patchFlag: i, children: l } = e, o = t ? re(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: o,
    key: o && Ti(o),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? O(s) ? s.concat(cr(t)) : [s, cr(t)] : cr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ct(e.ssContent),
    ssFallback: e.ssFallback && Ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function K(e = " ", t = 0) {
  return m(Cr, null, e, t);
}
function z(e = "", t = !1) {
  return t ? (j(), q(rt, null, e)) : m(rt, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? m(rt) : O(e) ? m(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ye(e) : m(Cr, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ct(e);
}
function Ln(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ln(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !(Ar in t) ? t._ctx = fe : s === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    P(t) ? (t = { default: t, _ctx: fe }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [K(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function re(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const s in n)
      if (s === "class")
        t.class !== n.class && (t.class = Ge([t.class, n.class]));
      else if (s === "style")
        t.style = Tr([t.style, n.style]);
      else if (jr(s)) {
        const i = t[s], l = n[s];
        l && i !== l && !(O(i) && i.includes(l)) && (t[s] = i ? [].concat(i, l) : l);
      } else
        s !== "" && (t[s] = n[s]);
  }
  return t;
}
function Be(e, t, r, n = null) {
  we(e, t, 7, [
    r,
    n
  ]);
}
const wo = mi();
let Io = 0;
function $o(e, t, r) {
  const n = e.type, s = (t ? t.appContext : e.appContext) || wo, i = {
    uid: Io++,
    vnode: e,
    type: n,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new nl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _i(n, s),
    emitsOptions: ii(n, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ll.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const Mo = () => ue || fe;
let Fn, hn;
{
  const e = Os(), t = (r, n) => {
    let s;
    return (s = e[r]) || (s = e[r] = []), s.push(n), (i) => {
      s.length > 1 ? s.forEach((l) => l(i)) : s[0](i);
    };
  };
  Fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ue = r
  ), hn = t(
    "__VUE_SSR_SETTERS__",
    (r) => Or = r
  );
}
const At = (e) => {
  Fn(e), e.scope.on();
}, mt = () => {
  ue && ue.scope.off(), Fn(null);
};
function Si(e) {
  return e.vnode.shapeFlag & 4;
}
let Or = !1;
function Bo(e, t = !1) {
  t && hn(t);
  const { props: r, children: n } = e.vnode, s = Si(e);
  po(e, r, s, t), _o(e, n);
  const i = s ? Co(e, t) : void 0;
  return t && hn(!1), i;
}
function Co(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ys(new Proxy(e.ctx, no));
  const { setup: n } = r;
  if (n) {
    const s = e.setupContext = n.length > 1 ? Ii(e) : null;
    At(e), _t();
    const i = Xe(
      n,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (bt(), mt(), Bs(i)) {
      if (i.then(mt, mt), t)
        return i.then((l) => {
          ds(e, l, t);
        }).catch((l) => {
          wr(l, e, 0);
        });
      e.asyncDep = i;
    } else
      ds(e, i, t);
  } else
    wi(e, t);
}
function ds(e, t, r) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = ei(t)), wi(e, r);
}
let gs;
function wi(e, t, r) {
  const n = e.type;
  if (!e.render) {
    if (!t && gs && !n.render) {
      const s = n.template || An(e).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: l } = e.appContext.config, { delimiters: o, compilerOptions: u } = n, c = ce(
          ce(
            {
              isCustomElement: i,
              delimiters: o
            },
            l
          ),
          u
        );
        n.render = gs(s, c);
      }
    }
    e.render = n.render || ye;
  }
  {
    At(e), _t();
    try {
      lo(e);
    } finally {
      bt(), mt();
    }
  }
}
function Ao(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, r) {
        return _e(e, "get", "$attrs"), t[r];
      }
    }
  ));
}
function Ii(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    get attrs() {
      return Ao(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Lr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ei(Ys(e.exposed)), {
      get(t, r) {
        if (r in t)
          return t[r];
        if (r in Ut)
          return Ut[r](e);
      },
      has(t, r) {
        return r in t || r in Ut;
      }
    }));
}
function Oo(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lo(e) {
  return P(e) && "__vccOpts" in e;
}
const me = (e, t) => Sl(e, t, Or);
function hs(e, t, r) {
  const n = arguments.length;
  return n === 2 ? Q(t) && !O(t) ? br(t) ? m(e, null, [t]) : m(e, t) : m(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && br(r) && (r = [r]), m(e, t, r));
}
const Fo = Symbol.for("v-scx"), Go = () => fr(Fo), No = "3.4.0", Po = "http://www.w3.org/2000/svg", Ho = "http://www.w3.org/1998/Math/MathML", Ze = typeof document < "u" ? document : null, ps = Ze && /* @__PURE__ */ Ze.createElement("template"), Vo = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const s = t === "svg" ? Ze.createElementNS(Po, e) : t === "mathml" ? Ze.createElementNS(Ho, e) : Ze.createElement(e, r ? { is: r } : void 0);
    return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, s, i) {
    const l = r ? r.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), r), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      ps.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const o = ps.content;
      if (n === "svg" || n === "mathml") {
        const u = o.firstChild;
        for (; u.firstChild; )
          o.appendChild(u.firstChild);
        o.removeChild(u);
      }
      t.insertBefore(o, r);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, xo = Symbol("_vtc");
function Uo(e, t, r) {
  const n = e[xo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ko = Symbol("_vod"), Do = Symbol("");
function qo(e, t, r) {
  const n = e.style, s = ne(r);
  if (r && !s) {
    if (t && !ne(t))
      for (const i in t)
        r[i] == null && pn(n, i, "");
    for (const i in r)
      pn(n, i, r[i]);
  } else {
    const i = n.display;
    if (s) {
      if (t !== r) {
        const l = n[Do];
        l && (r += ";" + l), n.cssText = r;
      }
    } else
      t && e.removeAttribute("style");
    Ko in e && (n.display = i);
  }
}
const ms = /\s*!important$/;
function pn(e, t, r) {
  if (O(r))
    r.forEach((n) => pn(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Wo(e, t);
    ms.test(r) ? e.setProperty(
      Ot(n),
      r.replace(ms, ""),
      "important"
    ) : e[n] = r;
  }
}
const vs = ["Webkit", "Moz", "ms"], Qr = {};
function Wo(e, t) {
  const r = Qr[t];
  if (r)
    return r;
  let n = Fe(t);
  if (n !== "filter" && n in e)
    return Qr[t] = n;
  n = Rr(n);
  for (let s = 0; s < vs.length; s++) {
    const i = vs[s] + n;
    if (i in e)
      return Qr[t] = i;
  }
  return t;
}
const _s = "http://www.w3.org/1999/xlink";
function Jo(e, t, r, n, s) {
  if (n && t.startsWith("xlink:"))
    r == null ? e.removeAttributeNS(_s, t.slice(6, t.length)) : e.setAttributeNS(_s, t, r);
  else {
    const i = tl(t);
    r == null || i && !Ls(r) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : r);
  }
}
function zo(e, t, r, n, s, i, l) {
  if (t === "innerHTML" || t === "textContent") {
    n && l(n, s, i), e[t] = r ?? "";
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    e._value = r;
    const c = o === "OPTION" ? e.getAttribute("value") : e.value, d = r ?? "";
    c !== d && (e.value = d), r == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (r === "" || r == null) {
    const c = typeof e[t];
    c === "boolean" ? r = Ls(r) : r == null && c === "string" ? (r = "", u = !0) : c === "number" && (r = 0, u = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  u && e.removeAttribute(t);
}
function ct(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Yo(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const bs = Symbol("_vei");
function Zo(e, t, r, n, s = null) {
  const i = e[bs] || (e[bs] = {}), l = i[t];
  if (n && l)
    l.value = n;
  else {
    const [o, u] = Qo(t);
    if (n) {
      const c = i[t] = ta(n, s);
      ct(e, o, c, u);
    } else
      l && (Yo(e, o, l, u), i[t] = void 0);
  }
}
const ks = /(?:Once|Passive|Capture)$/;
function Qo(e) {
  let t;
  if (ks.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ks); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t];
}
let Xr = 0;
const Xo = /* @__PURE__ */ Promise.resolve(), ea = () => Xr || (Xo.then(() => Xr = 0), Xr = Date.now());
function ta(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    we(
      ra(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = ea(), r;
}
function ra(e, t) {
  if (O(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map((n) => (s) => !s._stopped && n && n(s));
  } else
    return t;
}
const ys = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, na = (e, t, r, n, s, i, l, o, u) => {
  const c = s === "svg";
  t === "class" ? Uo(e, n, c) : t === "style" ? qo(e, r, n) : jr(t) ? bn(t) || Zo(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : sa(e, t, n, c)) ? zo(
    e,
    t,
    n,
    i,
    l,
    o,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Jo(e, t, n, c));
};
function sa(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ys(t) && P(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ys(t) && ne(r) ? !1 : t in e;
}
const kr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (r) => ur(t, r) : t;
};
function ia(e) {
  e.target.composing = !0;
}
function js(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const It = Symbol("_assign"), la = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, s) {
    e[It] = kr(s);
    const i = n || s.props && s.props.type === "number";
    ct(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let o = e.value;
      r && (o = o.trim()), i && (o = tn(o)), e[It](o);
    }), r && ct(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ct(e, "compositionstart", ia), ct(e, "compositionend", js), ct(e, "change", js));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: r, trim: n, number: s } }, i) {
    if (e[It] = kr(i), e.composing)
      return;
    const l = s || e.type === "number" ? tn(e.value) : e.value, o = t ?? "";
    l !== o && (document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === o) || (e.value = o));
  }
}, oa = {
  created(e, { value: t }, r) {
    e.checked = hr(t, r.props.value), e[It] = kr(r), ct(e, "change", () => {
      e[It](aa(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: r }, n) {
    e[It] = kr(n), t !== r && (e.checked = hr(t, n.props.value));
  }
};
function aa(e) {
  return "_value" in e ? e._value : e.value;
}
const ua = ["ctrl", "shift", "alt", "meta"], fa = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => ua.some((r) => e[`${r}Key`] && !t.includes(r))
}, ca = (e, t) => {
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = (s, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const o = fa[t[l]];
      if (o && o(s, t))
        return;
    }
    return e(s, ...i);
  });
}, da = /* @__PURE__ */ ce({ patchProp: na }, Vo);
let Es;
function ga() {
  return Es || (Es = ko(da));
}
const $i = (...e) => {
  const t = ga().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const s = pa(n);
    if (!s)
      return;
    const i = t._component;
    !P(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = "";
    const l = r(s, !1, ha(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l;
  }, t;
};
function ha(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pa(e) {
  return ne(e) ? document.querySelector(e) : e;
}
var ma = Object.defineProperty, va = (e, t, r) => t in e ? ma(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ve = (e, t, r) => (va(e, typeof t != "symbol" ? t + "" : t, r), r), Mi = { exports: {} }, se = Mi.exports = {}, Ce, Ae;
function mn() {
  throw new Error("setTimeout has not been defined");
}
function vn() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ce = setTimeout : Ce = mn;
  } catch {
    Ce = mn;
  }
  try {
    typeof clearTimeout == "function" ? Ae = clearTimeout : Ae = vn;
  } catch {
    Ae = vn;
  }
})();
function Bi(e) {
  if (Ce === setTimeout)
    return setTimeout(e, 0);
  if ((Ce === mn || !Ce) && setTimeout)
    return Ce = setTimeout, setTimeout(e, 0);
  try {
    return Ce(e, 0);
  } catch {
    try {
      return Ce.call(null, e, 0);
    } catch {
      return Ce.call(this, e, 0);
    }
  }
}
function _a(e) {
  if (Ae === clearTimeout)
    return clearTimeout(e);
  if ((Ae === vn || !Ae) && clearTimeout)
    return Ae = clearTimeout, clearTimeout(e);
  try {
    return Ae(e);
  } catch {
    try {
      return Ae.call(null, e);
    } catch {
      return Ae.call(this, e);
    }
  }
}
var xe = [], $t = !1, gt, dr = -1;
function ba() {
  !$t || !gt || ($t = !1, gt.length ? xe = gt.concat(xe) : dr = -1, xe.length && Ci());
}
function Ci() {
  if (!$t) {
    var e = Bi(ba);
    $t = !0;
    for (var t = xe.length; t; ) {
      for (gt = xe, xe = []; ++dr < t; )
        gt && gt[dr].run();
      dr = -1, t = xe.length;
    }
    gt = null, $t = !1, _a(e);
  }
}
se.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  xe.push(new Ai(e, t)), xe.length === 1 && !$t && Bi(Ci);
};
function Ai(e, t) {
  this.fun = e, this.array = t;
}
Ai.prototype.run = function() {
  this.fun.apply(null, this.array);
};
se.title = "browser";
se.browser = !0;
se.env = {};
se.argv = [];
se.version = "";
se.versions = {};
function qe() {
}
se.on = qe;
se.addListener = qe;
se.once = qe;
se.off = qe;
se.removeListener = qe;
se.removeAllListeners = qe;
se.emit = qe;
se.prependListener = qe;
se.prependOnceListener = qe;
se.listeners = function(e) {
  return [];
};
se.binding = function(e) {
  throw new Error("process.binding is not supported");
};
se.cwd = function() {
  return "/";
};
se.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
se.umask = function() {
  return 0;
};
var ka = Mi.exports;
const ya = { class: "gm-alert gm-alert-error" }, ja = /* @__PURE__ */ H({
  __name: "VisFejl",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = {
      FEJL_GEM_BRUGERREJSE: "guideafvikler.fejl.fejl_gem_brugerrejse.tekst",
      FEJL_SLET_BRUGERREJSE: "guideafvikler.fejl.fejl_slet_brugerrejse.tekst",
      GUIDE_FINDES_IKKE: "guideafvikler.fejl.guide_findes_ikke.tekst",
      KALD_TIL_AUTH_CALLBACK_FEJLEDE: "guideafvikler.fejl.kald_til_auth_callback_fejlede.tekst",
      STARTBETINGELSE_IKKE_OPFYLDT: "guideafvikler.fejl.startbetingelse_ikke_opfyldt.tekst",
      SVARMULIGHED_IKKE_ANGIVET: "guideafvikler.fejl.svarmulighed_ikke_angivet.tekst",
      TRIN_ER_NULL: "guideafvikler.fejl.trin_er_null.tekst"
    };
    return (r, n) => (j(), G("div", ya, [
      L("div", null, w(r.t(t[r.data.messageKey], r.data.args)), 1)
    ]));
  }
}), Zt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, Ea = {}, Ra = {
  type: "button",
  class: "gm-knap"
};
function Ta(e, t) {
  return j(), G("button", Ra, [
    vt(e.$slots, "default")
  ]);
}
const ve = /* @__PURE__ */ Zt(Ea, [["render", Ta]]), Sa = { class: "gm-nulstil-rejse" }, wa = /* @__PURE__ */ H({
  __name: "NulstilRejse",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), G("div", Sa, [
      L("h2", null, w(t.t("guideafvikler.nulstil.rejse.overskrift.tekst")), 1),
      L("p", null, w(t.t("guideafvikler.nulstil.rejse.indhold.tekst", { rejseNavn: t.data.rejse.navn })), 1),
      m(ve, {
        class: "gm-primary gm-nulstil-knap",
        onClick: r[0] || (r[0] = (n) => t.emitter.emit("nulstil-bruger-rejse", null))
      }, {
        default: F(() => [
          K(w(t.t("guideafvikler.nulstil.godkend.knap.tekst")), 1)
        ]),
        _: 1
      }),
      m(ve, {
        onClick: r[1] || (r[1] = (n) => t.emitter.emit("til-overblik", null))
      }, {
        default: F(() => [
          K(w(t.t("guideafvikler.nulstil.annuller.knap.tekst")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), Ia = {}, $a = { class: "gm-link-knap" };
function Ma(e, t) {
  return j(), G("button", $a, [
    vt(e.$slots, "default")
  ]);
}
const Lt = /* @__PURE__ */ Zt(Ia, [["render", Ma]]), Oi = /* @__PURE__ */ H({
  __name: "HentOpsummeringKnap",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = Ke(!1);
    function n() {
      r.value || (t.emitter.emit("hent-opsummering", { filnavn: t.t("guideafvikler.hent-opsummering.filnavn.tekst") }), r.value = !0, setTimeout(() => r.value = !1, 2e3));
    }
    return (s, i) => (j(), q(Lt, {
      class: "gm-hent-opsummering",
      "aria-busy": r.value,
      onClick: n
    }, {
      default: F(() => [
        K(w(s.t("guideafvikler.hent-opsummering.knap.tekst")), 1)
      ]),
      _: 1
    }, 8, ["aria-busy"]));
  }
}), Ba = { class: "gm-afslutningstekst-header" }, Ca = {
  key: 0,
  class: "gm-afslutningstekst-actions"
}, Aa = /* @__PURE__ */ H({
  __name: "RejseoverblikAfslutningstekst",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = me(() => t.data.gennemført && !t.data.harUbesvaredeSpørgsmål), n = me(() => {
      var s;
      return !!((s = t.data.afslutningstekst) != null && s.overskrift);
    });
    return (s, i) => (j(), q($r("li"), {
      class: Ge(["gm-afslutningstekst", { "gm-låst": !r.value }])
    }, {
      default: F(() => {
        var l;
        return [
          L("h3", Ba, [
            L("span", null, w(s.t("guideafvikler.overblik.gennemfoert-rejse.tekst")), 1),
            K(" " + w(n.value ? (l = s.data.afslutningstekst) == null ? void 0 : l.overskrift : s.t("guideafvikler.overblik.gennemfoert-rejse.default.tekst")), 1)
          ]),
          r.value ? (j(), G("div", Ca, [
            n.value ? (j(), q(Lt, {
              key: 0,
              onClick: i[0] || (i[0] = (o) => s.emitter.emit("til-afslutningsside", null))
            }, {
              default: F(() => [
                K(w(s.t("guideafvikler.overblik.se-afslutningsside.tekst")), 1)
              ]),
              _: 1
            })) : z("", !0),
            m(Oi, S($(t)), null, 16)
          ])) : z("", !0)
        ];
      }),
      _: 1
    }, 8, ["class"]));
  }
}), Oa = {
  key: 0,
  class: "gm-estimeret-gennemførselstid"
}, Li = /* @__PURE__ */ H({
  __name: "EstimeretGennemfoerselstid",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => t.data ? (j(), G("div", Oa, [
      L("span", null, w(t.t("guideafvikler.overblik.forventet-gennemfoerelsestid.tekst")), 1),
      K(" " + w(t.data), 1)
    ])) : z("", !0);
  }
}), La = { key: 0 }, Fa = { key: 1 }, Ga = /* @__PURE__ */ H({
  __name: "GuideNavn",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), G("h3", null, [
      t.data.gennemført ? (j(), G("span", La, w(t.t("guideafvikler.overblik.gennemfoert-guide.tekst")), 1)) : z("", !0),
      K(" " + w(t.data.navn) + " ", 1),
      t.data.andenGuidesGennemførsel ? (j(), G("span", Fa, "(" + w(t.t("guideafvikler.global.laast.tekst")) + ")", 1)) : z("", !0)
    ]));
  }
});
var Na = { "": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"] };
function Rs(e) {
  return e.replace(RegExp("^" + (e.match(/^(\t| )+/) || "")[0], "gm"), "");
}
function Ht(e) {
  return (e + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yr(e, t) {
  var r, n, s, i, l, o = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, u = [], c = "", d = t || {}, _ = 0;
  function E(A) {
    var C = Na[A[1] || ""], W = u[u.length - 1] == A;
    return C ? C[1] ? (W ? u.pop() : u.push(A), C[0 | W]) : C[0] : A;
  }
  function M() {
    for (var A = ""; u.length; )
      A += E(u[u.length - 1]);
    return A;
  }
  for (e = e.replace(/^\[(.+?)\]:\s*(.+)$/gm, function(A, C, W) {
    return d[C.toLowerCase()] = W, "";
  }).replace(/^\n+|\n+$/g, ""); s = o.exec(e); )
    n = e.substring(_, s.index), _ = o.lastIndex, r = s[0], n.match(/[^\\](\\\\)*\\$/) || ((l = s[3] || s[4]) ? r = '<pre class="code ' + (s[4] ? "poetry" : s[2].toLowerCase()) + '"><code' + (s[2] ? ' class="language-' + s[2].toLowerCase() + '"' : "") + ">" + Rs(Ht(l).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (l = s[6]) ? (l.match(/\./) && (s[5] = s[5].replace(/^\d+/gm, "")), i = yr(Rs(s[5].replace(/^\s*[>*+.-]/gm, ""))), l == ">" ? l = "blockquote" : (l = l.match(/\./) ? "ol" : "ul", i = i.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), r = "<" + l + ">" + i + "</" + l + ">") : s[8] ? r = '<img src="' + Ht(s[8]) + '" alt="' + Ht(s[7]) + '">' : s[10] ? (c = c.replace("<a>", '<a href="' + Ht(s[11] || d[n.toLowerCase()]) + '">'), r = M() + "</a>") : s[9] ? r = "<a>" : s[12] || s[14] ? r = "<" + (l = "h" + (s[14] ? s[14].length : s[13] > "=" ? 1 : 2)) + ">" + yr(s[12] || s[15], d) + "</" + l + ">" : s[16] ? r = "<code>" + Ht(s[16]) + "</code>" : (s[17] || s[1]) && (r = E(s[17] || "--"))), c += n, c += r;
  return (c + e.substring(_) + M()).replace(/^\n+|\n+$/g, "");
}
const Fi = (e) => e.split(/(?:\r?\n){2,}/).map(
  (t) => [" ", "	", "#", "- ", "* ", "> "].some((r) => t.startsWith(r)) ? yr(t) : `<p>${yr(t)}</p>`
).join(`
`), Pa = {
  key: 0,
  class: "gm-alert-heading"
}, Ha = { class: "gm-alert-text" }, Mt = /* @__PURE__ */ H({
  __name: "BaseBesked",
  props: {
    type: {},
    icon: { type: Boolean }
  },
  setup(e) {
    const t = so();
    return (r, n) => (j(), G("div", {
      class: Ge(["gm-alert", [`gm-alert-${r.type}`, { "gm-alert-icon": r.icon }]])
    }, [
      Te(t).heading ? (j(), G("h4", Pa, [
        vt(r.$slots, "heading")
      ])) : z("", !0),
      L("div", Ha, [
        vt(r.$slots, "default")
      ])
    ], 2));
  }
}), Va = ["innerHTML"], je = /* @__PURE__ */ H({
  __name: "BaseTekst",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => t.data ? (j(), G("div", {
      key: 0,
      class: "gm-tekst",
      innerHTML: t.data
    }, null, 8, Va)) : z("", !0);
  }
}), xa = /* @__PURE__ */ H({
  __name: "OpfølgendeSpørgsmål",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = me(() => t.data.guide.opfølgendeSpørgsmål), n = Ke(!1), s = Ke(!1), i = () => {
      s.value = !0, t.emitter.emit("opfølgende-spørgsmål-besvaret", { guideSlug: t.data.guide.slug });
    };
    return (l, o) => {
      var u;
      return s.value ? (j(), q(Mt, {
        key: 0,
        type: "success",
        icon: !0,
        class: "gm-opfølgende-spørgsmål-success"
      }, {
        default: F(() => [
          L("strong", null, w(l.t("guideafvikler.opfoelgende-spoergsmaal.success.overskrift.tekst")), 1)
        ]),
        _: 1
      })) : ((u = r.value) == null ? void 0 : u.besvaret) === !1 ? (j(), G(oe, { key: 1 }, [
        m(Mt, {
          type: "info",
          icon: !0,
          class: "gm-opfølgende-spørgsmål-info"
        }, {
          heading: F(() => [
            K(w(r.value.tekst), 1)
          ]),
          default: F(() => [
            m(ve, {
              class: "gm-primary gm-ja-knap",
              onClick: o[0] || (o[0] = (c) => i())
            }, {
              default: F(() => [
                K(w(l.t("guideafvikler.global.ja.tekst")), 1)
              ]),
              _: 1
            }),
            m(ve, {
              class: "gm-primary gm-nej-knap",
              onClick: o[1] || (o[1] = (c) => n.value = !0)
            }, {
              default: F(() => [
                K(w(l.t("guideafvikler.global.nej.tekst")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        n.value ? (j(), q(Mt, {
          key: 0,
          type: "warning",
          class: "gm-opfølgende-spørgsmål-warning"
        }, {
          heading: F(() => [
            K(w(l.t("guideafvikler.opfoelgende-spoergsmaal.advarsel.overskrift.tekst")), 1)
          ]),
          default: F(() => [
            m(je, S($({
              ...t,
              data: Te(Fi)(l.t("guideafvikler.opfoelgende-spoergsmaal.advarsel.broedtekst.md"))
            })), null, 16),
            m(Lt, {
              onClick: o[2] || (o[2] = (c) => l.emitter.emit("vis-gennemført-resultattrin", { guideSlug: l.data.guide.slug }))
            }, {
              default: F(() => [
                K(w(l.t("guideafvikler.overblik.se-konklusion-link.text")), 1)
              ]),
              _: 1
            }),
            m(ve, {
              class: "gm-close-button",
              onClick: o[3] || (o[3] = (c) => n.value = !1)
            }, {
              default: F(() => [
                K(w(l.t("guideafvikler.global.luk.tekst")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : z("", !0)
      ], 64)) : z("", !0);
    };
  }
}), Ua = {
  key: 0,
  class: "gm-skjult-beskrivelse"
}, Ka = /* @__PURE__ */ H({
  __name: "SkjultBeskrivelse",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => r.data ? (j(), G("details", Ua, [
      L("summary", null, w(r.t("guideafvikler.skjul-beskrivelse.fold-ud-knap.tekst")), 1),
      m(je, S($(t)), null, 16)
    ])) : z("", !0);
  }
}), Da = /* @__PURE__ */ H({
  __name: "RejseoverblikGuidelisteItem",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = me(() => t.data.rejse.kraeverLoggetPaa && !t.data.bruger), n = me(() => t.data.guide.andenGuidesGennemførsel || r.value), s = me(() => (!n.value || t.designMode) && !t.data.guide.gennemført), i = s.value ? l("guideafvikler.overblik.guideItem.ulaast.ariaLabel") : l("guideafvikler.overblik.guideItem.laast.ariaLabel");
    function l(u) {
      return t.t(u, {
        guideIndex: (t.data.index + 1).toString(),
        guideAntal: t.data.rejse.guides.length.toString(),
        guideTitel: t.data.guide.navn
      });
    }
    function o() {
      s.value && t.emitter.emit("start-guide", { slug: t.data.guide.slug });
    }
    return (u, c) => {
      var d, _;
      return j(), q($r("li"), {
        class: Ge(["gm-rejseoverblik-guide", {
          "gm-låst": n.value,
          "gm-opfølgende-spørgsmål-ikke-besvaret": ((d = u.data.guide.opfølgendeSpørgsmål) == null ? void 0 : d.besvaret) === !1
        }]),
        "aria-label": Te(i),
        "data-gm-guide-slug": t.data.guide.slug,
        "data-gm-guide-navn": t.data.guide.navn,
        "data-gm-guide-gennemført": ((_ = t.data.guide) == null ? void 0 : _.gennemført) != null
      }, {
        default: F(() => [
          m(Ga, re({ class: "gm-guide-header" }, { ...t, data: u.data.guide }, { onClick: o }), null, 16),
          u.data.guide.gennemført ? (j(), G(oe, { key: 0 }, [
            m(Lt, {
              onClick: c[0] || (c[0] = (E) => u.emitter.emit("vis-gennemført-resultattrin", { guideSlug: u.data.guide.slug }))
            }, {
              default: F(() => [
                K(w(u.t("guideafvikler.overblik.se-konklusion-link.text")), 1)
              ]),
              _: 1
            }),
            m(xa, S($(t)), null, 16)
          ], 64)) : (j(), G(oe, { key: 1 }, [
            m(Li, S($({ ...t, data: u.data.guide.estimeretGennemfoerselTid })), null, 16),
            m(Ka, S($({ ...t, data: u.data.guide.beskrivelse })), null, 16),
            m(ve, {
              class: "gm-primary gm-start-knap",
              "aria-disabled": n.value,
              onClick: o
            }, {
              default: F(() => [
                K(w(u.t("guideafvikler.overblik.start-guide-knap.tekst")), 1)
              ]),
              _: 1
            }, 8, ["aria-disabled"])
          ], 64))
        ]),
        _: 1
      }, 8, ["class", "aria-label", "data-gm-guide-slug", "data-gm-guide-navn", "data-gm-guide-gennemført"]);
    };
  }
}), qa = { class: "gm-guideliste" }, Wa = /* @__PURE__ */ H({
  __name: "RejseoverblikGuideliste",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (j(), G("ol", qa, [
      (j(!0), G(oe, null, Br(r.data.rejse.guides, (s, i) => (j(), q(Da, re({
        key: s.slug
      }, { ...t, data: { ...r.data, guide: s, index: i } }), null, 16))), 128)),
      m(Aa, S($({ ...t, data: r.data.rejse })), null, 16)
    ]));
  }
}), Ja = /* @__PURE__ */ H({
  __name: "RejseoverblikKraeverLoggetPaa",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), q(Mt, {
      type: "warning",
      class: "gm-rejse-kræver-logget-på"
    }, {
      heading: F(() => [
        K(w(t.t("guideafvikler.overblik.rejse-kraever-logget-paa.overskrift.tekst")), 1)
      ]),
      default: F(() => [
        L("button", {
          type: "button",
          onClick: r[0] || (r[0] = (n) => t.emitter.emit("request-login", null))
        }, w(t.t("guideafvikler.overblik.rejse-kraever-logget-paa.knap.tekst")), 1)
      ]),
      _: 1
    }));
  }
}), za = {
  key: 0,
  class: "gm-ansvarlig-myndighed"
}, Ya = /* @__PURE__ */ H({
  __name: "AnsvarligMyndighed",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => t.data ? (j(), G("div", za, w(t.data), 1)) : z("", !0);
  }
}), Za = {
  key: 0,
  class: "gm-support-telefonnummer"
}, Qa = /* @__PURE__ */ H({
  __name: "SupportTelefonnummer",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => t.data ? (j(), G("div", Za, w(t.data), 1)) : z("", !0);
  }
}), Xa = {
  key: 0,
  class: "gm-hjælp-til-rejsen"
}, nt = /* @__PURE__ */ H({
  __name: "HjaelpTilRejsen",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => r.data && r.data.ansvarligMyndighed && r.data.supportTelefonnummer ? (j(), G("div", Xa, [
      L("h4", null, [
        L("span", null, w(r.t("guideafvikler.rejseoverblik.stamdata.hjaelp-prefix.tekst")), 1),
        K(" " + w(r.t("guideafvikler.rejseoverblik.stamdata.hjaelp.tekst")), 1)
      ]),
      m(Ya, S($({ ...t, data: r.data.ansvarligMyndighed })), null, 16),
      m(Qa, S($({ ...t, data: r.data.supportTelefonnummer })), null, 16)
    ])) : z("", !0);
  }
}), eu = {}, tu = {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, ru = /* @__PURE__ */ L("path", {
  d: "M14 5.25V0.582422L12.2254 2.35703C10.9457 0.913281 9.08359 0 7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14C8.9332 14 10.6832 13.218 11.9492 11.9492L10.7105 10.7133C9.76172 11.6621 8.44922 12.25 7 12.25C4.10156 12.25 1.75 9.90117 1.75 7C1.75 4.09883 4.10156 1.75 7 1.75C8.59961 1.75 10.0188 2.47461 10.9785 3.60391L9.33242 5.25H14Z",
  fill: "#232575C9"
}, null, -1), nu = [
  ru
];
function su(e, t) {
  return j(), G("svg", tu, nu);
}
const iu = /* @__PURE__ */ Zt(eu, [["render", su]]), lu = /* @__PURE__ */ H({
  __name: "NulstilRejseKnap",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), q(Lt, {
      class: "gm-nulstil-rejse-knap",
      onClick: r[0] || (r[0] = () => t.emitter.emit("vis-nulstil-rejse", null))
    }, {
      default: F(() => [
        K(w(t.t("guideafvikler.nulstil.rejse.knap.tekst")) + " ", 1),
        m(iu, { "aria-hidden": "true" })
      ]),
      _: 1
    }));
  }
}), ou = { class: "gm-rejsenavn" }, au = /* @__PURE__ */ H({
  __name: "RejseNavn",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), G("h2", ou, w(t.data), 1));
  }
}), uu = { class: "gm-startbetingelse-guide" }, fu = /* @__PURE__ */ H({
  __name: "StartbetingelseGuide",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), G("div", uu, [
      L("span", null, w(t.t("guideafvikler.overblik.laast-guide.tekst")), 1),
      K(" " + w(t.t("guideafvikler.overblik.startbetingelse-guide.tekst")), 1)
    ]));
  }
}), cu = { class: "gm-rejse-stamdata" }, du = { class: "gm-rejse-info" }, gu = { class: "gm-ekstra-rejse-info" }, hu = /* @__PURE__ */ H({
  __name: "RejseoverblikStamdata",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = me(() => t.data.guides.some((n) => n.andenGuidesGennemførsel));
    return (n, s) => (j(), G("div", cu, [
      L("div", du, [
        m(au, S($({ ...t, data: n.data.navn })), null, 16),
        m(je, S($({ ...t, data: n.data.beskrivelse })), null, 16),
        m(Li, S($({ ...t, data: n.data.estimeretGennemfoerselTid })), null, 16),
        r.value ? (j(), q(fu, S(re({ key: 0 }, t)), null, 16)) : z("", !0)
      ]),
      L("div", gu, [
        m(nt, S($({ ...t, data: n.data.kontaktinfo })), null, 16),
        m(lu, S($({ ...t })), null, 16)
      ])
    ]));
  }
}), pu = { class: "gm-rejseoverblik" }, mu = /* @__PURE__ */ H({
  __name: "TheRejseoverblik",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (j(), G("div", pu, [
      m(hu, S($({ ...t, data: r.data.rejse })), null, 16),
      r.data.rejse.kraeverLoggetPaa && !r.data.bruger ? (j(), q(Ja, S(re({ key: 0 }, t)), null, 16)) : z("", !0),
      m(Wa, S($({ ...t })), null, 16)
    ]));
  }
}), vu = {}, _u = { class: "gm-navigation" };
function bu(e, t) {
  return j(), G("div", _u, [
    vt(e.$slots, "default")
  ]);
}
const kt = /* @__PURE__ */ Zt(vu, [["render", bu]]), ku = { class: "gm-overskrift" }, yt = /* @__PURE__ */ H({
  __name: "BaseOverskrift",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), G("header", ku, [
      L("h3", null, w(t.data), 1)
    ]));
  }
}), yu = { class: "gm-afslutningstekstside" }, ju = /* @__PURE__ */ H({
  __name: "VisAfslutningside",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => {
      var s, i, l;
      return j(), G("div", yu, [
        m(yt, S($({ ...t, data: ((s = t.data.rejse.afslutningstekst) == null ? void 0 : s.overskrift) || "" })), null, 16),
        (i = t.data.rejse.afslutningstekst) != null && i.broedtekst ? (j(), q(je, re({ key: 0 }, { ...t, data: (l = t.data.rejse.afslutningstekst) == null ? void 0 : l.broedtekst }, { class: "gm-afslutningstekst-brødtekst" }), null, 16)) : z("", !0),
        m(Oi, S($(t)), null, 16),
        m(kt, null, {
          default: F(() => [
            m(ve, {
              class: "gm-primary",
              onClick: n[0] || (n[0] = (o) => r.emitter.emit("til-overblik", null))
            }, {
              default: F(() => [
                K(w(r.t("guideafvikler.tilbage-til-overblik.knap.tekst")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        m(nt, S($({ ...t, data: r.data.rejse.kontaktinfo })), null, 16)
      ]);
    };
  }
}), Eu = ["data-gm-guide-slug", "data-gm-guide-navn", "data-gm-guide-gennemført"], Fr = /* @__PURE__ */ H({
  __name: "GuideDataContainer",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), G("div", {
      "data-gm-guide-slug": t.data.slug,
      "data-gm-guide-navn": t.data.navn,
      "data-gm-guide-gennemført": t.data.gennemført != null
    }, [
      vt(t.$slots, "default")
    ], 8, Eu));
  }
}), Gr = /* @__PURE__ */ H({
  __name: "NaesteKnap",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => (j(), q(ve, { class: "gm-primary" }, {
      default: F(() => [
        K(w(t.t("guideafvikler.trin-navigation.naeste.knap.tekst")), 1)
      ]),
      _: 1
    }));
  }
}), Nr = /* @__PURE__ */ H({
  __name: "TilbageKnap",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => t.data.visTilbageknap ? (j(), q(ve, {
      key: 0,
      class: "gm-back-button",
      onClick: r[0] || (r[0] = (n) => t.emitter.emit("forrige-trin", null))
    }, {
      default: F(() => [
        K(w(t.t("guideafvikler.trin-navigation.tilbage.knap.tekst")), 1)
      ]),
      _: 1
    })) : z("", !0);
  }
}), Gn = /* @__PURE__ */ H({
  __name: "TilbageTilOverblik",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: { type: Boolean }
  },
  setup(e) {
    return (t, r) => t.data ? (j(), q(ve, {
      key: 0,
      class: "gm-back-link",
      onClick: r[0] || (r[0] = (n) => t.emitter.emit("til-overblik", null))
    }, {
      default: F(() => [
        K(w(t.t("guideafvikler.tilbage-til-overblik.knap.tekst")), 1)
      ]),
      _: 1
    })) : z("", !0);
  }
}), Ru = { class: "gm-brugeroplysninger" }, Tu = ["for"], Su = {
  key: 0,
  class: "gm-fejlbesked"
}, wu = ["id", "aria-invalid", "aria-describedby"], Iu = /* @__PURE__ */ H({
  __name: "VisBrugeroplysninger",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    var t, r;
    const n = e, s = me(() => `gm-brugeroplysninger-email-${n.data.guide.slug}`), i = me(() => `gm-brugeroplysninger-email-fejlbesked-${n.data.guide.slug}`), l = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, o = Ke(((t = n.data.bruger) == null ? void 0 : t.profil.email) ?? ""), u = Ke(((r = n.data.bruger) == null ? void 0 : r.profil) ?? {}), c = Ke(""), d = () => c.value = "";
    function _() {
      o.value.trim() === "" ? c.value = "guideafvikler.bruger-oplysninger.email.fejlbesked.mangler.tekst" : l.test(o.value) ? c.value || n.emitter.emit("næste-trin", { brugeroplysninger: { ...u.value, email: o.value } }) : c.value = "guideafvikler.bruger-oplysninger.email.fejlbesked.ugyldig.tekst";
    }
    return (E, M) => (j(), q(Fr, S($({ ...n, data: n.data.guide })), {
      default: F(() => [
        L("div", Ru, [
          m(Gn, S($({ ...n, data: E.data.visOverblik })), null, 16),
          m(yt, S($({ ...n, data: E.t("guideafvikler.bruger-oplysninger.overskrift.tekst") })), null, 16),
          m(je, S($({ ...n, data: Te(Fi)(E.t("guideafvikler.bruger-oplysninger.broedtekst.tekst")) })), null, 16),
          L("form", {
            onSubmit: ca(_, ["prevent"])
          }, [
            L("div", {
              class: Ge(["gm-form-element-container", { "gm-har-fejl": c.value }])
            }, [
              L("label", { for: s.value }, w(E.t("guideafvikler.bruger-oplysninger.email.label.tekst")), 9, Tu),
              c.value ? (j(), G("span", Su, w(E.t(c.value)), 1)) : z("", !0),
              fi(L("input", {
                id: s.value,
                "onUpdate:modelValue": M[0] || (M[0] = (A) => o.value = A),
                "aria-invalid": c.value ? !0 : void 0,
                "aria-describedby": c.value ? i.value : void 0,
                onInput: d
              }, null, 40, wu), [
                [la, o.value]
              ])
            ], 2),
            m(kt, null, {
              default: F(() => [
                m(Gr, re({ type: "submit" }, n), null, 16),
                m(Nr, S($(n)), null, 16)
              ]),
              _: 1
            })
          ], 32),
          m(nt, S($({ ...n, data: E.data.guide.kontaktinfo })), null, 16)
        ])
      ]),
      _: 1
    }, 16));
  }
}), $u = {}, Mu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
}, Bu = /* @__PURE__ */ L("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v2H5v14h14v-7h2v7a2 2 0 0 1-2 2Zm-9.83-4.76-1.41-1.41L17.59 5H14V3h7v7h-2V6.41l-9.829 9.829-.001.001Z" }, null, -1), Cu = [
  Bu
];
function Au(e, t) {
  return j(), G("svg", Mu, Cu);
}
const Ou = /* @__PURE__ */ Zt($u, [["render", Au]]), Lu = ["href"], Gi = /* @__PURE__ */ H({
  __name: "HandlingsLink",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    return (t, r) => t.data.url ? (j(), G("a", {
      key: 0,
      class: "gm-knap gm-primary gm-handlings-link",
      href: t.data.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, [
      m(Ou),
      K(" " + w(t.data.titel || t.data.url), 1)
    ], 8, Lu)) : z("", !0);
  }
}), Fu = {
  key: 0,
  class: "gm-uddybende-vejledning-container"
}, Gu = {
  key: 0,
  class: "gm-uddybende-vejledning"
}, Pr = /* @__PURE__ */ H({
  __name: "UddybendeTekstafsnit",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => r.data && r.data.length > 0 ? (j(), G("div", Fu, [
      (j(!0), G(oe, null, Br(r.data, (s) => (j(), G(oe, {
        key: s.id
      }, [
        s.overskrift && s.broedtekst ? (j(), G("details", Gu, [
          L("summary", null, w(s.overskrift), 1),
          m(je, S($({ ...t, data: s.broedtekst })), null, 16)
        ])) : z("", !0)
      ], 64))), 128))
    ])) : z("", !0);
  }
}), Nu = ["data-gm-trin-id", "data-gm-trin-type", "data-gm-trin-overskrift"], Hr = /* @__PURE__ */ H({
  __name: "TrinDataContainer",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (j(), G("div", {
      "data-gm-trin-id": t.data.trin.id,
      "data-gm-trin-type": t.data.trin.type,
      "data-gm-trin-overskrift": t.data.trin.overskrift
    }, [
      vt(r.$slots, "default")
    ], 8, Nu));
  }
}), Pu = /* @__PURE__ */ H({
  __name: "VisKonklusion",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = me(() => t.data.trin);
    return (n, s) => (j(), q(Fr, S($({ ...t, data: t.data.guide })), {
      default: F(() => [
        m(Hr, re(t, { class: "gm-trin gm-resultattrin" }), {
          default: F(() => [
            m(yt, S($({ ...t, data: r.value.overskrift })), null, 16),
            m(je, S($({ ...t, data: r.value.broedtekst })), null, 16),
            r.value.handlingsLink ? (j(), q(Gi, S(re({ key: 0 }, { ...t, data: r.value.handlingsLink })), null, 16)) : z("", !0),
            m(Pr, S($({ ...t, data: r.value.tekstafsnit })), null, 16),
            m(kt, null, {
              default: F(() => {
                var i;
                return [
                  m(ve, {
                    class: Ge({ "gm-primary": !((i = r.value.handlingsLink) != null && i.url) }),
                    onClick: s[0] || (s[0] = (l) => n.emitter.emit("til-overblik", null))
                  }, {
                    default: F(() => [
                      K(w(n.t("guideafvikler.resultat-trin.tilbage-til-overblik.knap.tekst")), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])
                ];
              }),
              _: 1
            }),
            m(nt, S($({ ...t, data: n.data.guide.kontaktinfo })), null, 16)
          ]),
          _: 1
        }, 16)
      ]),
      _: 1
    }, 16));
  }
}), Ni = ({ trin: e }) => e.type === "VAELG_EN_SPOERGSMAAL_TRIN" && !e.autosvar, Hu = { class: "gm-opsummeringstabel" }, Vu = ["aria-describedby"], xu = { scope: "col" }, Uu = { scope: "col" }, Ku = { scope: "col" }, Du = { role: "cell" }, qu = {
  hidden: "",
  "aria-hidden": "true"
}, Wu = { role: "cell" }, Ju = {
  hidden: "",
  "aria-hidden": "true"
}, zu = ["innerHTML"], Yu = { role: "cell" }, Zu = /* @__PURE__ */ H({
  __name: "TabelOpsummering",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = me(() => t.data.trinHistorik.filter(Ni));
    return (n, s) => (j(), G("div", Hu, [
      L("table", {
        "aria-describedby": n.$attrs.ariaDescribedby ? `${n.$attrs.ariaDescribedby}` : void 0
      }, [
        L("thead", null, [
          L("tr", null, [
            L("th", xu, w(n.t("guideafvikler.opsummeringstabel.spoegsmaal.tekst")), 1),
            L("th", Uu, w(n.t("guideafvikler.opsummeringstabel.svar.tekst")), 1),
            L("th", Ku, [
              L("span", null, w(n.t("guideafvikler.opsummeringstabel.rediger.tekst")), 1)
            ])
          ])
        ]),
        L("tbody", null, [
          (j(!0), G(oe, null, Br(r.value, (i) => {
            var l;
            return j(), G("tr", {
              key: i.trin.id
            }, [
              L("td", Du, [
                L("div", qu, w(n.t("guideafvikler.opsummeringstabel.spoegsmaal.tekst")), 1),
                K(" " + w(i.trin.overskrift), 1)
              ]),
              L("td", Wu, [
                L("div", Ju, w(n.t("guideafvikler.opsummeringstabel.svar.tekst")), 1),
                L("span", {
                  innerHTML: (l = i.trin.valgtSvarmulighed) == null ? void 0 : l.label
                }, null, 8, zu)
              ]),
              L("td", Yu, [
                m(Lt, {
                  onClick: (o) => n.emitter.emit("gå-til-trin", { trin: i.trin })
                }, {
                  default: F(() => [
                    K(w(n.t("guideafvikler.opsummeringstabel.rediger.tekst")), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ])
            ]);
          }), 128))
        ])
      ], 8, Vu)
    ]));
  }
}), Qu = { class: "gm-opsummeringsside" }, Xu = /* @__PURE__ */ H({
  __name: "VisOpsummering",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (j(), q(Fr, S($({ ...t, data: r.data.guide })), {
      default: F(() => [
        L("div", Qu, [
          m(yt, re({ ...t, data: r.t("guideafvikler.opsummeringsside.overskift.tekst") }, {
            id: `opsummering-${r.data.guide.slug}`
          }), null, 16, ["id"]),
          m(Zu, re(t, {
            "aria-describedby": `opsummering-${r.data.guide.slug}`
          }), null, 16, ["aria-describedby"]),
          m(kt, null, {
            default: F(() => [
              m(Gr, re(t, {
                onClick: n[0] || (n[0] = (s) => r.emitter.emit("næste-trin", null))
              }), null, 16),
              m(Nr, S($(t)), null, 16)
            ]),
            _: 1
          }),
          m(nt, S($({ ...t, data: r.data.guide.kontaktinfo })), null, 16)
        ])
      ]),
      _: 1
    }, 16));
  }
}), ef = /* @__PURE__ */ H({
  __name: "TrinInformation",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (j(), q(Hr, re(t, { class: "gm-trin gm-informationstrin" }), {
      default: F(() => [
        m(Gn, S($({ ...t, data: r.data.visOverblik })), null, 16),
        m(yt, S($({ ...t, data: r.data.trin.overskrift })), null, 16),
        m(je, S($({ ...t, data: r.data.trin.broedtekst })), null, 16),
        m(Pr, S($({ ...t, data: r.data.trin.tekstafsnit })), null, 16),
        m(kt, null, {
          default: F(() => [
            m(Gr, re(t, {
              onClick: n[0] || (n[0] = (s) => r.emitter.emit("næste-trin", null))
            }), null, 16),
            m(Nr, S($(t)), null, 16)
          ]),
          _: 1
        }),
        m(nt, S($({ ...t, data: r.data.guide.kontaktinfo })), null, 16)
      ]),
      _: 1
    }, 16));
  }
}), tf = /* @__PURE__ */ H({
  __name: "TrinResultat",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e;
    function r() {
      t.data.visOverblik ? t.emitter.emit("til-overblik-eller-afslutningsside", null) : t.emitter.emit("nulstil-bruger-rejse", null);
    }
    return (n, s) => (j(), q(Hr, re(t, { class: "gm-trin gm-resultattrin" }), {
      default: F(() => [
        m(yt, S($({ ...t, data: n.data.trin.overskrift })), null, 16),
        m(je, S($({ ...t, data: n.data.trin.broedtekst })), null, 16),
        n.data.trin.handlingsLink ? (j(), q(Gi, S(re({ key: 0 }, { ...t, data: n.data.trin.handlingsLink })), null, 16)) : z("", !0),
        m(Pr, S($({ ...t, data: n.data.trin.tekstafsnit })), null, 16),
        m(kt, null, {
          default: F(() => {
            var i;
            return [
              m(ve, {
                class: Ge({ "gm-primary": !((i = n.data.trin.handlingsLink) != null && i.url) }),
                onClick: r
              }, {
                default: F(() => [
                  K(w(n.data.visOverblik ? n.t("guideafvikler.resultat-trin.fortsaet.knap.tekst") : n.t("guideafvikler.resultat-trin.start-forfra.knap.tekst")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }),
        m(nt, S($({ ...t, data: n.data.guide.kontaktinfo })), null, 16)
      ]),
      _: 1
    }, 16));
  }
}), rf = { class: "gm-svarmuligheder" }, nf = ["id", "value"], sf = ["for"], lf = /* @__PURE__ */ H({
  __name: "TrinVaelgEnSpoergsmaal",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    var t;
    const r = e, n = Ke((t = r.data.trin.valgtSvarmulighed) == null ? void 0 : t.id);
    Ul(() => {
      var i;
      n.value = (i = r.data.trin.valgtSvarmulighed) == null ? void 0 : i.id;
    });
    const s = me(
      () => r.data.trin.svarmuligheder.find(({ id: i }) => i === n.value)
    );
    return (i, l) => (j(), q(Hr, re(r, { class: "gm-trin gm-spørgsmålstrin" }), {
      default: F(() => {
        var o;
        return [
          m(Gn, S($({ ...r, data: i.data.visOverblik })), null, 16),
          m(yt, S($({ ...r, data: i.data.trin.overskrift })), null, 16),
          m(je, S($({ ...r, data: i.data.trin.broedtekst })), null, 16),
          L("div", rf, [
            (j(!0), G(oe, null, Br(i.data.trin.svarmuligheder, (u) => (j(), G("div", {
              key: u.id,
              class: "gm-form-group-radio"
            }, [
              fi(L("input", {
                id: `svarmulighed-${u.id}`,
                "onUpdate:modelValue": l[0] || (l[0] = (c) => n.value = c),
                class: "gm-form-radio",
                type: "radio",
                value: u.id
              }, null, 8, nf), [
                [oa, n.value]
              ]),
              L("label", {
                for: `svarmulighed-${u.id}`
              }, [
                m(je, S($({ ...r, data: u.label })), null, 16)
              ], 8, sf)
            ]))), 128))
          ]),
          (o = s.value) != null && o.konsekvenstekst ? (j(), q(Mt, {
            key: 0,
            type: "info",
            class: "gm-konsekvenstekst",
            "aria-live": "polite"
          }, {
            default: F(() => [
              m(je, S($({ ...r, data: s.value.konsekvenstekst })), null, 16)
            ]),
            _: 1
          })) : z("", !0),
          m(Pr, S($({ ...r, data: i.data.trin.tekstafsnit })), null, 16),
          m(kt, null, {
            default: F(() => [
              m(Gr, re({
                "aria-disabled": !s.value
              }, r, {
                onClick: l[1] || (l[1] = () => {
                  s.value && i.emitter.emit("næste-trin", { svarmulighed: s.value });
                })
              }), null, 16, ["aria-disabled"]),
              m(Nr, S($(r)), null, 16)
            ]),
            _: 1
          }),
          m(nt, S($({ ...r, data: i.data.guide.kontaktinfo })), null, 16)
        ];
      }),
      _: 1
    }, 16));
  }
}), of = /* @__PURE__ */ H({
  __name: "VisTrin",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = {
      INFORMATION_TRIN: ef,
      VAELG_EN_SPOERGSMAAL_TRIN: lf,
      RESULTAT_TRIN: tf,
      MAIL_TRIN: () => null
      // vi viser ikke mail-trin
    }, n = me(() => r[t.data.trin.type]);
    return (s, i) => (j(), q(Fr, S($({ ...t, data: s.data.guide })), {
      default: F(() => [
        (j(), q($r(n.value), re({
          key: s.data.trin.id
        }, t), null, 16))
      ]),
      _: 1
    }, 16));
  }
}), af = { class: "gm-vaelg-brugerrejse" }, uf = /* @__PURE__ */ H({
  __name: "VælgBrugerRejse",
  props: {
    designMode: { type: Boolean },
    emitter: {},
    t: { type: Function },
    data: {}
  },
  setup(e) {
    const t = e, r = (n) => {
      t.data.brugerRejse && t.emitter.emit("overskriv-bruger-rejse", { brugerRejse: t.data.brugerRejse, overskriv: n });
    };
    return (n, s) => (j(), G("div", af, [
      L("h2", null, w(n.t("guideafvikler.vaelg-brugerrejse.overskrift.tekst")), 1),
      L("p", null, w(n.t("guideafvikler.vaelg-brugerrejse.indhold.tekst")), 1),
      m(ve, {
        class: "gm-primary gm-overskriv-knap",
        onClick: s[0] || (s[0] = (i) => r(!1))
      }, {
        default: F(() => [
          K(w(n.t("guideafvikler.vaelg-brugerrejse.overskriv-ikke.knap.tekst")), 1)
        ]),
        _: 1
      }),
      m(ve, {
        onClick: s[1] || (s[1] = (i) => r(!0))
      }, {
        default: F(() => [
          K(w(n.t("guideafvikler.vaelg-brugerrejse.overskriv.knap.tekst")), 1)
        ]),
        _: 1
      })
    ]));
  }
});
async function ff(e, t) {
  const r = await fetch(e).then((s) => s.blob()), n = document.createElement("a");
  n.href = URL.createObjectURL(r), n.download = t, n.click(), URL.revokeObjectURL(n.href);
}
const cf = `query fetchOpsummering($brugerRejse: GmBrugerRejseInput!) {
  gmBrugerRejseOpsummering(brugerRejse: $brugerRejse) {
    dataUrl
    filnavn
  }
}
`, Pi = Yt({
  backendURL: "https://virk.dk/graphql"
});
async function Ft(e, t, r) {
  const { backendURL: n } = Pi, s = new Headers({
    "Content-Type": "application/json"
  });
  r && s.append("Authorization", `Bearer ${r}`);
  const l = await (await fetch(n, {
    method: "POST",
    headers: s,
    body: JSON.stringify({ query: e, variables: t })
  })).json();
  if (l.errors) {
    const o = new Error("Query fejlede");
    throw console.error(o, l.errors), o;
  }
  return l.data;
}
async function df(e, t) {
  return (await Ft(
    cf,
    { brugerRejse: e },
    t == null ? void 0 : t.token
  )).gmBrugerRejseOpsummering;
}
const Hi = (e) => e != null, gf = (e) => {
  var t;
  return {
    ...e,
    rejseUrl: e.rejseUrl || null,
    guides: (t = e.guides) == null ? void 0 : t.filter(Hi).map(hf),
    bruger: mf(e.bruger)
  };
}, hf = (e) => {
  var t;
  return {
    ...e,
    svar: (t = e.svar) == null ? void 0 : t.filter(Hi).map(pf)
  };
}, pf = (e) => ({
  ...e
}), mf = (e) => ({
  ...e
}), Ts = (e) => !!e, vf = (e) => e.type === "RESULTAT_TRIN", Vi = (e) => e.type === "VAELG_EN_SPOERGSMAAL_TRIN", _f = (e, t) => e.guideSlug.localeCompare(t.guideSlug), bf = (e, t) => e.spoergsmaalTrinId.localeCompare(t.spoergsmaalTrinId), kf = (e) => ({
  id: e.id,
  navn: e.navn ?? "",
  email: e.email ?? "",
  cvr: e.cvr ?? ""
}), yf = (e) => ({
  id: e.id,
  type: e.type
}), jf = (e) => ({
  autosvar: e.autosvar ? yf(e.autosvar) : null,
  spoergsmaalTrinId: e.spoergsmaalTrinId,
  svarmulighedId: e.svarmulighedId
}), Ef = (e) => {
  var t;
  return {
    gennemfoert: !!e.gennemfoert,
    // ignorer tidspunkt
    guideSlug: e.guideSlug,
    guideVersion: "",
    // ignorer
    historik: e.historik ? [...e.historik].sort() : [],
    resultatTrinId: e.resultatTrinId ?? "",
    svar: ((t = e.svar) == null ? void 0 : t.map(jf).sort(bf)) ?? [],
    opfoelgendeSpoergsmaalBesvaret: e.opfoelgendeSpoergsmaalBesvaret ?? null
  };
}, Ss = (e) => {
  var t;
  return {
    gennemfoert: !!e.gennemfoert,
    // ignorer tidspunkt
    guides: ((t = e.guides) == null ? void 0 : t.map(Ef).sort(_f)) ?? [],
    opdateret: null,
    // ignorer
    oprettet: null,
    // ignorer
    rejseSlug: e.rejseSlug,
    rejseVersion: "",
    // ignorer
    rejseUrl: e.rejseUrl ?? "",
    bruger: kf(e.bruger)
  };
};
function Rf(e, t) {
  return JSON.stringify(Ss(e)) === JSON.stringify(Ss(t));
}
const Tf = (e) => {
  const r = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(
    window.atob(r).split("").map((s) => "%" + ("00" + s.charCodeAt(0).toString(16)).slice(-2)).join("")
  );
  return JSON.parse(n);
}, Sf = (e) => {
  try {
    const { uid: t, cn: r, mail: n, cvr: s } = Tf(e);
    return { token: e, profil: { id: t, navn: r, email: n, cvr: s } };
  } catch {
    return null;
  }
};
class wf {
  constructor(t) {
    Ve(this, "_trinHistorik", {}), Ve(this, "_brugerRejse"), this.rejse = t, this._trinHistorik = {}, this._brugerRejse = this.tomBrugerRejse();
  }
  get brugerRejse() {
    return this._brugerRejse;
  }
  get brugerRejseInput() {
    return gf(this._brugerRejse);
  }
  /**
   * Erstat den eksisterende bruger rejse med den givne.
   *
   * @param brugerRejse
   */
  erstatBrugerRejser(t) {
    this._brugerRejse = t, this.genskabRejseOgBrugerGuideHistorik();
  }
  /**
   * retunerer trin historik for en given guide
   *
   * @param guide
   */
  trinHistorik(t) {
    var r, n;
    return (r = this._trinHistorik)[n = t.slug] ?? (r[n] = []);
  }
  /**
   * Registrerer et givet svarmulighed i historikken
   *
   * @param guide
   * @param trin
   * @param svarmulighed
   */
  registrererSvar(t, r, n) {
    r.valgtSvarmulighed = n;
    const s = this.trinHistorik(t), i = s.find((l) => l.trin.id === r.id);
    if (i) {
      if (i.svarmulighed && i.svarmulighed.id !== n.id) {
        const l = s.indexOf(i);
        s.splice(l + 1).forEach(({ trin: o }) => {
          o.valgtSvarmulighed = o.autosvar = void 0;
        });
      }
      i.svarmulighed = n;
    }
  }
  /**
   * Registrerer det viste resultat i brugerguiden og historikken.
   * Og hvis alle guides i rejsen er gennemført, så markeres rejsen som gennemført.
   *
   * @param guide
   * @param trin
   */
  registrererResultat(t, r) {
    var n, s;
    const i = this.findEllerOpretNyBrugerGuide(t);
    i.resultatTrinId = r.id, i.gennemfoert = t.gennemført, i.opfoelgendeSpoergsmaalBesvaret = r.opfoelgendeSpoergsmaal ? !1 : void 0, i.svar = [], i.historik = [], this._brugerRejse && ((n = this._brugerRejse).oprettet || (n.oprettet = /* @__PURE__ */ new Date()), this._brugerRejse.opdateret = /* @__PURE__ */ new Date(), this._brugerRejse.rejseVersion = this.rejse.version), ((s = this._brugerRejse.guides) == null ? void 0 : s.length) === this.rejse.guides.length && (this._brugerRejse.gennemfoert = /* @__PURE__ */ new Date(), this.rejse.gennemført = !0), this.trinHistorik(t).forEach((l) => {
      var o, u, c, d;
      (o = l.svarmulighed) != null && o.id && ((c = i.svar) == null || c.push({
        spoergsmaalTrinId: l.trin.id,
        svarmulighedId: (u = l.svarmulighed) == null ? void 0 : u.id,
        autosvar: l.trin.autosvar
      })), (d = i.historik) == null || d.push(l.trin.id);
    });
  }
  /**
   * Markere en guide som gennemført
   *
   * @param guideSlug
   */
  guideGennemført(t) {
    var r;
    const n = (r = this._brugerRejse.guides) == null ? void 0 : r.find((s) => s.guideSlug === t);
    return !!(n != null && n.gennemfoert);
  }
  /**
   * Læg trin til historik for den givne guide
   *
   * @param guide
   * @param trin
   */
  lægTilHistorik(t, r) {
    const n = this.trinHistorik(t);
    n.forEach((i) => i.seneste = !1);
    const s = n.find((i) => i.trin === r);
    s ? s.seneste = !0 : n.push({ seneste: !0, trin: r });
  }
  /**
   * Find seneste og forrige trin i guide ud fra historikken
   *
   * @param guide
   * @param opdatereSeneste - opdater/mutate 'seneste' status på trin i historikken.
   */
  findForrigeTrin(t, r = !1) {
    const n = [...this.trinHistorik(t)].reverse();
    let s = null, i = null, l = -1;
    return n.forEach((o, u) => {
      o.seneste && (l = u, s = n[l].trin), !i && l > -1 && u > l && !o.trin.autosvar && (r && (n[l].seneste = !1, n[u].seneste = !0), i = n[u].trin);
    }), { senesteTrin: s, forrigeTrin: i };
  }
  forrigeTrin(t) {
    const { forrigeTrin: r } = this.findForrigeTrin(t, !0);
    return r;
  }
  /**
   * Findes der et forrige trin som ikke er et autosvar
   *
   * @param guide
   */
  findesForrigeTrin(t) {
    const { forrigeTrin: r } = this.findForrigeTrin(t, !1);
    return !!r;
  }
  /**
   * Opdaterer brugeroplysninger under brugerrejsen og sæt url til rejseoverblik
   */
  opdaterBrugerRejseOplysninger(t) {
    this._brugerRejse.bruger = { ...this._brugerRejse.bruger, ...t }, this._brugerRejse.rejseUrl = window.location.href;
  }
  /**
   * autosvar - returnere en array af alle afgivne svar i rejsen
   */
  alleAfgivneSvarmulighederId() {
    const t = [];
    for (const r in this._trinHistorik) {
      const s = this._trinHistorik[r].map((i) => {
        var l;
        return (l = i.svarmulighed) == null ? void 0 : l.id;
      }).filter(Ts);
      t.push(...s);
    }
    return t;
  }
  /**
   * autosvar - returnere en array af alle viste resultat trin i rejsen
   */
  alleResultatTrinId() {
    return this._brugerRejse.guides ? this._brugerRejse.guides.map((t) => t == null ? void 0 : t.resultatTrinId).filter(Ts) : [];
  }
  /**
   * Nulstil rejse i afvikleren.
   * Nulstiller brugerrejse og historik
   */
  nulstilRejse(t) {
    this.nulstilHistorik(), this._brugerRejse = this.tomBrugerRejse(t == null ? void 0 : t.id);
  }
  /**
   * Findes der nogen spørgsmålstrin i guiden @param guide i brugerRejseMotoren som brugeren har besvaret.
   * Hvis bare ét spørgsmål IKKE er blevet autosvaret returnerer funktionen true.
   */
  harTrinHistorikSpørgsmålstrinSomIkkeErAutosvaret(t) {
    return this.trinHistorik(t).some(Ni);
  }
  /**
   * Sætter en ny tom brugerrejse
   */
  tomBrugerRejse(t) {
    return {
      rejseSlug: this.rejse.slug,
      rejseVersion: this.rejse.version,
      guides: [],
      bruger: { id: t ?? "" }
    };
  }
  nulstilHistorik() {
    this._trinHistorik = {};
  }
  /**
   * Find en eksisterende bruger guide eller opret en ny
   *
   * @param guide
   */
  findEllerOpretNyBrugerGuide(t) {
    var r, n;
    let s = (r = this._brugerRejse.guides) == null ? void 0 : r.find((i) => i.guideSlug === t.slug);
    return s || (s = {
      guideSlug: t.slug,
      guideVersion: t.version,
      historik: [],
      svar: [],
      gennemfoert: void 0,
      opfoelgendeSpoergsmaalBesvaret: void 0
    }, (n = this._brugerRejse.guides) == null || n.push(s)), s.svar || (s.svar = []), s;
  }
  /**
   * Genskab rejse og guide ud fra brugerrejse
   * Opdater også brugerguide hisorik
   *
   * @private
   */
  genskabRejseOgBrugerGuideHistorik() {
    var t;
    (t = this._brugerRejse.guides) == null || t.forEach((r) => {
      const n = this.rejse.guides.find((i) => i.slug === r.guideSlug);
      if (!n)
        return;
      r.gennemfoert && (n.gennemført = new Date(r.gennemfoert)), this.nulstilHistorik(), this.opdaterBrugerGuideHistorik(r, n);
      const s = n.trin.find((i) => i.id === r.resultatTrinId);
      s && this.lægTilHistorik(n, s);
    }), this._brugerRejse.gennemfoert && (this.rejse.gennemført = !0);
  }
  /**
   * Opdater Brugerguide historik
   *
   * @private
   * @param brugerGuide
   * @param guide
   */
  opdaterBrugerGuideHistorik(t, r) {
    var n;
    (n = t.historik) == null || n.forEach((s) => {
      var i, l;
      const o = r.trin.find((u) => u.id === s);
      if (o && (this.lægTilHistorik(r, o), Vi(o))) {
        const u = (l = (i = t.svar) == null ? void 0 : i.find((d) => d.spoergsmaalTrinId === o.id)) == null ? void 0 : l.svarmulighedId, c = o.svarmuligheder.find((d) => d.id === u);
        u && c && (this.registrererSvar(r, o, c), o.valgtSvarmulighed = c);
      }
    });
  }
}
class Pe extends Error {
}
const en = { type: "OPSUMMERING_TRIN" }, ws = { type: "BRUGEROPLYSNINGER_TRIN" };
class If {
  constructor(t, r, n, s, i) {
    Ve(this, "_rejse"), Ve(this, "_brugerRejseMotor"), Ve(this, "_bruger", null), Ve(this, "_guide", null), Ve(this, "_trin", null), Ve(this, "_trinToShow", null), this.afviklerEventEmitter = t, this.authCallback = n, this.dataCallback = s, this.emailTrinStart = i, this._rejse = r, this._brugerRejseMotor = new wf(this._rejse);
  }
  /**
   * Initialisere RejseMotor
   */
  async initMotor() {
    this.updateEkstraFelter(), await this.foretagLogin(!1), await this.overblikEllerGuide();
  }
  /**
   * Hvis den givne BrugerRejse ikke er magen til den eksisterende,
   * så spørg bruger om hvilken BrugerRejse de vil fortsætte med.
   *
   * @param brugerRejse
   */
  visVælgBrugerRejse(t) {
    var r;
    t && ((r = this._brugerRejseMotor.brugerRejse.guides) != null && r.length && !Rf(this._brugerRejseMotor.brugerRejse, t) ? this.afviklerEventEmitter.emit("vis-vælg-brugerrejse", {
      brugerRejse: t
    }) : this.overskriveBrugerRejse(t, !0));
  }
  /**
   * Evt overskriv den eksisterende BrugerRejse og send brugeren til overblikket.
   *
   * @param brugerRejse - den nye BrugerRejse
   * @param overskriv - overskrive hvis true
   */
  overskriveBrugerRejse(t, r = !1) {
    r ? (this.nulstilRejseOgGuideStatus(), this._brugerRejseMotor.erstatBrugerRejser(t)) : this._bruger && this.afviklerEventEmitter.emit("gem-bruger-rejse", {
      brugerRejse: this._brugerRejseMotor.brugerRejse,
      bruger: this._bruger
    }), this.updateEkstraFelter(), this.emitVisOverblik();
  }
  /**
   * set bruger og hente brugerrejse
   *
   * @param bruger
   */
  initBruger(t) {
    this._bruger = t, this._bruger && (this._brugerRejseMotor.brugerRejse.bruger.id = this._bruger.profil.id, this.afviklerEventEmitter.emit("logget-ind", { bruger: this._bruger }), this.afviklerEventEmitter.emit("hent-bruger-rejse", { bruger: this._bruger, rejseSlug: this._rejse.slug }));
  }
  /**
   * hvis der kun er én guide i rejsen, så vis den guide ellers vis overblik
   */
  async overblikEllerGuide() {
    if (this.visOverblik)
      this.emitVisOverblik();
    else
      return this.startGuide();
  }
  /**
   * Start en guide og tjek startbetingelser
   *
   * @param slug
   */
  async startGuide(t) {
    var r, n;
    if (t ? this._guide = this.findGuideBySlug(t) : this._guide = this._rejse.guides[0] || null, !this._guide) {
      this.emitFejl({
        messageKey: "GUIDE_FINDES_IKKE",
        args: { slug: t ?? "guide slug findes ikke" }
      });
      return;
    }
    if (this.tjekStartBetingelser(this._guide), this._trin = null, this.emailTrinStart && ((n = (r = this.guide) == null ? void 0 : r.trin.filter((s) => s.type === "MAIL_TRIN")) != null && n.length) && !this.harBrugerRejseEmail())
      this.emitVisBrugeroplysninger();
    else
      return this.næsteTrin();
  }
  /**
   * vis aslutningstekstsiden.
   */
  async afslutningsside() {
    return this.emitVisAfslutningsside();
  }
  /**
   * Hvis der er en afslutningstekst og rejsen er gennemført, så vis Afslutningstekstsiden. Ellers rejseoverblik.
   */
  async overblikEllerAfslutningsside() {
    return this._rejse.gennemført && this._rejse.afslutningstekst ? this.afslutningsside() : this.emitVisOverblik();
  }
  /**
   * Tjek Start betingelser for den givne Guide
   *
   * @param guide
   * @private
   */
  tjekStartBetingelser(t) {
    var r, n;
    const s = (r = t.startBetingelser) == null ? void 0 : r.foerstEfterGuideSlug;
    s && !this._brugerRejseMotor.guideGennemført(s) && this.emitFejl({
      messageKey: "STARTBETINGELSE_IKKE_OPFYLDT",
      args: {
        guide1: t.navn,
        guide2: ((n = this.findGuideBySlug(s)) == null ? void 0 : n.navn) || "unknown"
      }
    });
  }
  /**
   * vis næste trin, håndterer svar på spørgsmål og opdatering af historik
   *
   * @param svarmulighed
   */
  async næsteTrin(t) {
    var r;
    if (!this._guide)
      throw new Pe();
    t && "brugeroplysninger" in t && this._brugerRejseMotor.opdaterBrugerRejseOplysninger(t.brugeroplysninger);
    const n = t && "svarmulighed" in t ? t.svarmulighed : void 0;
    if (this._trin = this.findNæsteTrin(n), !this._trin) {
      this.emitFejl({ messageKey: "TRIN_ER_NULL" });
      return;
    }
    if ((r = this._trin).førsteTrin ?? (r.førsteTrin = !1), this._brugerRejseMotor.lægTilHistorik(this._guide, this._trin), !(this._trin.type === "VAELG_EN_SPOERGSMAAL_TRIN" && await this.handleVælgEnSpørgsmålTrinAutosvar())) {
      if (this._trin.type === "RESULTAT_TRIN") {
        if (this._trinToShow !== en && this._trinToShow !== ws && this.shouldOpsummeringssideBeShown(this._guide))
          return this.emitVisOpsummering();
        if (this.findMailTrinHvisEmailMangler())
          return this.emitVisBrugeroplysninger();
        this.handleResultatTrin();
      }
      this.emitVisTrin();
    }
  }
  /**
   * @returns {boolean} returner true hvis opsummeringsside bør vises.
   * Dette sker hvis der er mindst et spørgsmålstrin som IKKe er autosvaret
   */
  shouldOpsummeringssideBeShown(t) {
    return this._brugerRejseMotor.harTrinHistorikSpørgsmålstrinSomIkkeErAutosvaret(t);
  }
  /**
   * vis forrige trin
   */
  forrigeTrin() {
    if (!this._guide || !this._trin)
      throw new Pe();
    if (this._trin.type === "RESULTAT_TRIN" && this._trinToShow !== en && this.shouldOpsummeringssideBeShown(this._guide))
      this.emitVisOpsummering();
    else {
      const t = this._brugerRejseMotor.forrigeTrin(this._guide);
      t && (this._trin = t), this.emitVisTrin();
    }
  }
  /**
   * @param requestLogin - angiv om vi skal bede om at blive logged ind hvis der ikke allerede er en indloggede bruger.
   */
  async foretagLogin(t) {
    try {
      const r = await this.authCallback(t), n = r ? Sf(r) : null;
      this.initBruger(n);
    } catch {
      this.afviklerEventEmitter.emit("fejl", {
        fejl: {
          messageKey: "KALD_TIL_AUTH_CALLBACK_FEJLEDE"
        }
      });
    }
  }
  /**
   * Gå til nulstil rejse mellemlægssisde
   */
  visNulstilRejse() {
    this.afviklerEventEmitter.emit("vis-nulstil-rejse", {
      rejse: this.rejse
    });
  }
  /**
   * Nulstiller brugerrejsen i afvikleren
   */
  nulstilRejse() {
    var t;
    this._bruger && this.afviklerEventEmitter.emit("slet-bruger-rejse", {
      brugerRejse: this._brugerRejseMotor.brugerRejseInput,
      bruger: this._bruger
    }), this.nulstilRejseOgGuideStatus(), this._brugerRejseMotor.nulstilRejse((t = this._bruger) == null ? void 0 : t.profil), this.updateEkstraFelter();
  }
  gåTilTrin(t) {
    this._trin = t, this.emitVisTrin();
  }
  async hentOpsummering(t) {
    const r = await df(this._brugerRejseMotor.brugerRejseInput, this._bruger);
    r && this.afviklerEventEmitter.emit("vis-opsummering-pdf", { ...r, filnavn: t });
  }
  /**
   * Nulstil 'gennemført' på Rejse og alle den Guides, samt valgtSvarmulighed'er på trin
   *
   * @private
   */
  nulstilRejseOgGuideStatus() {
    this._rejse.gennemført = !1, this._rejse.guides.forEach((t) => {
      t.gennemført = void 0;
    }), this._rejse.guides.forEach((t) => t.trin.forEach((r) => r.valgtSvarmulighed = void 0));
  }
  /**
   * Find det næste trin i en guide, ud fra den nuværende værdi af `this._trin`.
   * @param svarmulighed - påkrævet hvis det nuværende trin er et spørgsmålstrin.
   */
  findNæsteTrin(t) {
    var r;
    if (!this._guide)
      throw new Pe();
    if (!this._trin) {
      const n = ((r = this._guide) == null ? void 0 : r.trin.find((s) => {
        var i;
        return s.id === ((i = this._guide) == null ? void 0 : i.starttrinId);
      })) ?? null;
      return n && (n.førsteTrin = !0), n;
    }
    switch (this._trin.type) {
      case "VAELG_EN_SPOERGSMAAL_TRIN": {
        if (!t)
          return this.emitFejl({ messageKey: "SVARMULIGHED_IKKE_ANGIVET" }), this._trin;
        this._brugerRejseMotor.registrererSvar(this._guide, this._trin, t);
        const n = this._guide.forbindelser.find(
          (s) => {
            var i, l;
            return s.fraTrinId === ((i = this._trin) == null ? void 0 : i.id) && ((l = s.svarmulighedIds) == null ? void 0 : l.includes(t == null ? void 0 : t.id));
          }
        );
        return this._guide.trin.find((s) => s.id === (n == null ? void 0 : n.tilTrinId)) ?? null;
      }
      case "INFORMATION_TRIN": {
        const n = this._guide.forbindelser.find((s) => {
          var i;
          return s.fraTrinId === ((i = this._trin) == null ? void 0 : i.id);
        });
        return this._guide.trin.find((s) => s.id === (n == null ? void 0 : n.tilTrinId)) ?? null;
      }
      default:
        return this._trin;
    }
  }
  /**
   * Forsøger at autosvare et VaelgEnSpoergsmaalTrin
   *
   * @return 'true' - hvis trin er blevet autosvaret
   */
  async handleVælgEnSpørgsmålTrinAutosvar() {
    if (!this._guide || !this._trin || !Vi(this._trin) || !this._brugerRejseMotor)
      return !1;
    const t = this._trin.svarmuligheder.filter(
      (i) => {
        var l;
        return !!((l = i.autosvar) != null && l.length);
      }
    );
    if (!t.length)
      return !1;
    const r = await this.getBesvaredeSvarmulighederMedAutosvar(t);
    if (r.length !== 1)
      return !1;
    const { svarmulighed: n, autosvar: s } = r[0];
    return this._trin.autosvar = s, this._brugerRejseMotor.lægTilHistorik(this._guide, this._trin), await this.næsteTrin({ svarmulighed: n }), !0;
  }
  async getBesvaredeSvarmulighederMedAutosvar(t) {
    const r = this._brugerRejseMotor.alleAfgivneSvarmulighederId(), n = this._brugerRejseMotor.alleResultatTrinId(), s = await this.getDataAutosvar(t);
    return t.map(
      (l) => {
        const o = l.autosvar.find(
          (u) => u.type === "SVARMULIGHED" && r.includes(u.id) || u.type === "RESULTAT" && n.includes(u.id) || u.type === "DATA" && s.includes(u.id)
        );
        return o ? { svarmulighed: l, autosvar: o } : null;
      }
    ).filter((l) => l !== null);
  }
  async getDataAutosvar(t) {
    if (!this._bruger)
      return [];
    const r = t.flatMap(
      (s) => s.autosvar.filter((i) => i.type === "DATA")
    ), n = [];
    return await Promise.all(
      r.map(async (s) => {
        try {
          await this.dataCallback(s.id) === !0 && n.push(s.id);
        } catch (i) {
          return console.error(i), !1;
        }
      })
    ), n;
  }
  /**
   * Finder det resultattrin for en guide som brugeren er endt med (konklusion af svar givet)
   * @return resultatrinId: string
   */
  findResultattrin(t) {
    var r;
    const n = (r = this._brugerRejseMotor.brugerRejse.guides) == null ? void 0 : r.find((o) => o.guideSlug === t), s = n != null && n.gennemfoert && n.resultatTrinId ? n.resultatTrinId : void 0, i = this.rejse.guides.find((o) => o.slug === t), l = i == null ? void 0 : i.trin.find((o) => o.id === s);
    return { guide: i, resultattrin: l };
  }
  /**
   * Vis konklusion af en afsluttet guide
   * @return void
   */
  visKonklusion(t) {
    const { guide: r, resultattrin: n } = this.findResultattrin(t);
    r && n && this.afviklerEventEmitter.emit("vis-konklusion", {
      guide: r,
      trin: n
    });
  }
  findMailtrinFraResultattrin(t) {
    var r, n;
    if (t.type !== "RESULTAT_TRIN")
      return [];
    const s = ((r = this.guide) == null ? void 0 : r.forbindelser.filter((i) => i.fraTrinId === t.id).map((i) => i.tilTrinId)) ?? [];
    return ((n = this.guide) == null ? void 0 : n.trin.filter((i) => s.includes(i.id))) ?? [];
  }
  /**
   * Sæt guide som gennemført
   * Opdater guides som har reference til guide der er gennemført - "andenGuidesGennemførsel"
   * Registrer resultat og gem brugerrejse
   * @private
   */
  handleResultatTrin() {
    if (!this._guide || !this._trin || !vf(this._trin))
      throw new Pe();
    this._guide.gennemført = /* @__PURE__ */ new Date(), this._brugerRejseMotor.registrererResultat(this._guide, this._trin), this.updateEkstraFelter(), this.saveBrugerRejse();
  }
  /**
   * Opdater værdierne af alle guides 'udvidelse'-felter.
   * I.e. de ekstra felter der repræsenterer guidens tilstand.
   */
  updateEkstraFelter() {
    this._rejse.guides.forEach((t) => {
      var r;
      this.updateOpfølgendeSpørgsmål(t), (r = t.startBetingelser) != null && r.foerstEfterGuideSlug && this.setKræverAndenGuidesGennemførelse(t);
    }), this._rejse.harUbesvaredeSpørgsmål = this._rejse.guides.some((t) => {
      var r;
      return ((r = t.opfølgendeSpørgsmål) == null ? void 0 : r.besvaret) === !1;
    });
  }
  /**
   * Sæt guides 'opfølgendeSpørgsmålBesvaret' til true, hvilket betyder at brugeres har svaret 'JA'.
   */
  setOpfølgendeSpørgsmålBesvaret(t) {
    const r = this.findBrugerGuideBySlug(t);
    r && (r.opfoelgendeSpoergsmaalBesvaret = !0), this.updateEkstraFelter(), this.saveBrugerRejse();
  }
  updateOpfølgendeSpørgsmål(t) {
    const r = this.findBrugerGuideBySlug(t.slug), n = t.trin.find((s) => s.id === (r == null ? void 0 : r.resultatTrinId));
    t.opfølgendeSpørgsmål = n != null && n.opfoelgendeSpoergsmaal ? { tekst: n.opfoelgendeSpoergsmaal, besvaret: (r == null ? void 0 : r.opfoelgendeSpoergsmaalBesvaret) ?? !1 } : void 0;
  }
  setKræverAndenGuidesGennemførelse(t) {
    var r;
    if (!((r = t.startBetingelser) != null && r.foerstEfterGuideSlug))
      return;
    const n = this.findGuideBySlug(t.startBetingelser.foerstEfterGuideSlug), s = this.findBrugerGuideBySlug(t.startBetingelser.foerstEfterGuideSlug);
    typeof (s == null ? void 0 : s.opfoelgendeSpoergsmaalBesvaret) == "boolean" ? t.andenGuidesGennemførsel = !(n != null && n.gennemført && s.opfoelgendeSpoergsmaalBesvaret) : t.andenGuidesGennemførsel = !(n != null && n.gennemført);
  }
  saveBrugerRejse() {
    this._bruger && this.afviklerEventEmitter.emit("gem-bruger-rejse", {
      brugerRejse: this._brugerRejseMotor.brugerRejseInput,
      bruger: this._bruger
    });
  }
  findGuideBySlug(t) {
    return this._rejse.guides.find((r) => r.slug === t) ?? null;
  }
  findBrugerGuideBySlug(t) {
    var r;
    return (r = this._brugerRejseMotor.brugerRejse.guides) == null ? void 0 : r.find((n) => n.guideSlug === t);
  }
  emitFejl(t) {
    this.afviklerEventEmitter.emit("fejl", { fejl: t });
  }
  emitVisOverblik() {
    this.afviklerEventEmitter.emit("vis-overblik", {
      bruger: this._bruger,
      rejse: this.rejse
    });
  }
  emitVisTrin() {
    if (!this._guide || !this._trin)
      throw new Pe();
    this._trinToShow = this._trin, this.afviklerEventEmitter.emit("vis-trin", {
      trin: this._trinToShow,
      visOverblik: this.visOverblik,
      visTilbageknap: this._brugerRejseMotor.findesForrigeTrin(this._guide),
      guide: this._guide
    });
  }
  emitVisOpsummering() {
    if (!this._guide)
      throw new Pe();
    this._trinToShow = en, this.afviklerEventEmitter.emit("vis-opsummering", {
      guide: this._guide,
      trinHistorik: this._brugerRejseMotor.trinHistorik(this._guide),
      visTilbageknap: this._brugerRejseMotor.findesForrigeTrin(this._guide)
    });
  }
  emitVisAfslutningsside() {
    if (!this._rejse)
      throw new Pe();
    this._trinToShow = null, this.afviklerEventEmitter.emit("vis-afslutningsside", {
      rejse: this._rejse
    });
  }
  emitVisBrugeroplysninger() {
    if (!this._guide)
      throw new Pe();
    this._trinToShow = ws, this.afviklerEventEmitter.emit("vis-brugeroplysninger", {
      guide: this._guide,
      bruger: this._bruger,
      visOverblik: this.visOverblik,
      visTilbageknap: this._brugerRejseMotor.findesForrigeTrin(this._guide)
    });
  }
  findMailTrinHvisEmailMangler() {
    if (!this._trin)
      throw new Pe();
    return this.harBrugerRejseEmail() ? void 0 : this.findMailtrinFraResultattrin(this._trin)[0];
  }
  harBrugerRejseEmail() {
    var t;
    return !!((t = this.brugerRejseMotor.brugerRejse.bruger) != null && t.email);
  }
  get rejse() {
    return this._rejse;
  }
  get bruger() {
    return this._bruger;
  }
  get guide() {
    return this._guide;
  }
  get trin() {
    return this._trin;
  }
  /** Afgør om vi kan vise overblik */
  get visOverblik() {
    return this._rejse.guides.length > 1;
  }
  get brugerRejseMotor() {
    return this._brugerRejseMotor;
  }
}
class Is {
  constructor(t, r = !1) {
    Ve(this, "listeners", []), this.name = t, this.debug = r;
  }
  on(t) {
    this.listeners.push(t);
  }
  remove(t) {
    this.listeners = this.listeners.filter((r) => r !== t);
  }
  emit(t, r) {
    this.debug && console.log(this.name || "", t, r), this.listeners.forEach((n) => n(t, r));
  }
}
const $f = (e) => async function(r, n) {
  switch (r) {
    case "init":
      await e.initMotor();
      break;
    case "request-login":
      e.foretagLogin(!0), await e.overblikEllerGuide();
      break;
    case "bruger-rejse-hentet":
      e.visVælgBrugerRejse(n.brugerRejse);
      break;
    case "til-overblik":
      await e.overblikEllerGuide();
      break;
    case "til-overblik-eller-afslutningsside":
      await e.overblikEllerAfslutningsside();
      break;
    case "til-afslutningsside":
      await e.afslutningsside();
      break;
    case "start-guide":
      await e.startGuide(n.slug);
      break;
    case "næste-trin":
      await e.næsteTrin(n);
      break;
    case "forrige-trin":
      e.forrigeTrin();
      break;
    case "vis-nulstil-rejse":
      e.visNulstilRejse();
      break;
    case "nulstil-bruger-rejse":
      e.nulstilRejse(), await e.overblikEllerGuide();
      break;
    case "overskriv-bruger-rejse":
      e.overskriveBrugerRejse(
        n.brugerRejse,
        n.overskriv
      );
      break;
    case "vis-gennemført-resultattrin":
      e.visKonklusion(n.guideSlug);
      break;
    case "opfølgende-spørgsmål-besvaret":
      e.setOpfølgendeSpørgsmålBesvaret(n.guideSlug);
      break;
    case "gå-til-trin":
      e.gåTilTrin(n.trin);
      break;
    case "hent-opsummering":
      await e.hentOpsummering(n.filnavn);
      break;
    default:
      console.error(`Håndtering af event '${r}' er ikke implementeret!`);
  }
};
function Mf(e) {
  const t = `brugerrejse_${e.rejse.slug}`;
  return (r, n) => {
    switch (r) {
      case "init": {
        const s = JSON.parse(sessionStorage.getItem(t) ?? "null");
        s && e.overskriveBrugerRejse(s, !0);
        break;
      }
      case "nulstil-bruger-rejse":
        sessionStorage.removeItem(t);
        break;
      default:
        sessionStorage.setItem(t, JSON.stringify(e.brugerRejseMotor.brugerRejse));
        break;
    }
  };
}
const Bf = `query brugerRejse($rejseSlug: String!) {
  gmBrugerRejse(rejseSlug: $rejseSlug) {
    rejseSlug
    rejseVersion
    rejseUrl
    oprettet
    opdateret
    gennemfoert
    guides {
      guideSlug
      guideVersion
      gennemfoert
      opfoelgendeSpoergsmaalBesvaret
      historik
      svar {
        spoergsmaalTrinId
        svarmulighedId
        autosvar {
          id
          type
        }
      }
      resultatTrinId
    }
    bruger {
      id
      navn
      email
      cvr
    }
  }
}
`, Cf = `mutation gmSletBrugerrejse($slug: String!) {
  gmSletBrugerRejse(slug: $slug)
}
`;
async function Af(e, t) {
  return await Ft(Bf, { rejseSlug: e }, t.token);
}
async function Of(e, t) {
  return await Ft(Cf, { slug: e }, t.token);
}
const Lf = `mutation gemBrugerRejse($brugerRejseInput: GmBrugerRejseInput) {
  gmGemBrugerRejse(input: $brugerRejseInput) {
    rejseSlug
    rejseVersion
    oprettet
    opdateret
    gennemfoert
    guides {
      guideSlug
      guideVersion
      gennemfoert
      opfoelgendeSpoergsmaalBesvaret
      historik
      svar {
        spoergsmaalTrinId
        svarmulighedId
      }
      resultatTrinId
    }
  }
}
`;
async function Ff(e, t) {
  return await Ft(Lf, { brugerRejseInput: e }, t.token);
}
const Nn = (e) => e ? e.replace(/<p>\s*(&nbsp;)?\s*<\/p>/g, "").trim() : "", Gf = (e) => {
  var t, r;
  return ((t = e.kontaktinfo) == null ? void 0 : t.ansvarligMyndighed) && ((r = e.kontaktinfo) == null ? void 0 : r.supportTelefonnummer);
}, Nf = (e) => e.guides.map((t) => {
  var r;
  return {
    ...t,
    kontaktinfo: Gf(t) ? t.kontaktinfo : e.kontaktinfo,
    beskrivelse: Nn(t.beskrivelse),
    trin: Pf(t.trin),
    gennemført: void 0,
    andenGuidesGennemførsel: !!((r = t.startBetingelser) != null && r.foerstEfterGuideSlug),
    opfølgendeSpørgsmål: void 0
  };
}), Pf = (e) => e == null ? void 0 : e.map((t) => ({
  ...t,
  broedtekst: Nn(t.broedtekst),
  tekstafsnit: t.tekstafsnit ? t.tekstafsnit.map((r, n) => ({ ...r, id: `${t.id}-${n}` })) : null
  // Tilføj unikt ID til hvert afsnit.
})), Hf = (e) => ({
  ...e,
  beskrivelse: Nn(e.beskrivelse),
  guides: Nf(e),
  gennemført: !1,
  harUbesvaredeSpørgsmål: !1
});
function Vf(e, t, r, n, s, i, l) {
  const o = Yt({
    designMode: n,
    debug: s,
    emailTrinStart: i,
    rejse: Hf(e),
    bruger: null,
    stateData: null,
    fejl: null
  }), u = n || (l ?? e.guides.length === 1), c = wl(), d = new Is("MOTOR", o.debug), _ = new Is("AFVIKLER", o.debug), E = new If(
    _,
    o.rejse,
    t,
    r,
    i
  );
  return d.on($f(E)), u || d.on(Mf(E)), _.on(async (M, A) => {
    switch (M) {
      case "logget-ind": {
        o.bruger = A.bruger;
        break;
      }
      case "hent-bruger-rejse": {
        const C = A;
        if (u) {
          console.log(
            `Brugerrejse hentes ikke fra backend. designMode: ${n}, dontPersistMode: ${l}`
          );
          break;
        }
        const { gmBrugerRejse: W } = await Af(C.rejseSlug, C.bruger);
        d.emit("bruger-rejse-hentet", { brugerRejse: W });
        break;
      }
      case "slet-bruger-rejse": {
        const C = A;
        if (u) {
          console.log(
            `Brugerrejse slettes ikke fra backend. designMode: ${n}, dontPersistMode: ${l}`
          );
          break;
        }
        try {
          await Of(C.brugerRejse.rejseSlug, C.bruger);
        } catch (W) {
          W instanceof Error && (o.fejl = {
            args: {},
            messageKey: "FEJL_SLET_BRUGERREJSE"
          });
        }
        break;
      }
      case "gem-bruger-rejse": {
        const C = A;
        if (u) {
          console.log(
            `Brugerrejse gemmes ikke til backend. designMode: ${n}, dontPersistMode: ${l}`
          );
          break;
        }
        try {
          await Ff(C.brugerRejse, C.bruger);
        } catch (W) {
          W instanceof Error && (o.fejl = {
            args: {},
            messageKey: "FEJL_GEM_BRUGERREJSE"
          });
        }
        break;
      }
      case "vis-overblik": {
        o.stateData = A, c.value = mu;
        break;
      }
      case "vis-trin": {
        o.stateData = A, c.value = of;
        break;
      }
      case "vis-opsummering": {
        o.stateData = A, c.value = Xu;
        break;
      }
      case "vis-afslutningsside": {
        o.stateData = A, c.value = ju;
        break;
      }
      case "vis-brugeroplysninger": {
        o.stateData = A, c.value = Iu;
        break;
      }
      case "vis-konklusion": {
        o.stateData = A, c.value = Pu;
        break;
      }
      case "vis-nulstil-rejse": {
        o.stateData = A, c.value = wa;
        break;
      }
      case "vis-vælg-brugerrejse": {
        o.stateData = A, c.value = uf;
        break;
      }
      case "fejl": {
        o.fejl = A.fejl;
        break;
      }
      case "vis-opsummering-pdf": {
        const C = A;
        await ff(C.dataUrl, C.filnavn);
        break;
      }
      default:
        console.error(`Håndtering af event '${M}' er ikke implementeret!`);
    }
  }), { afviklerData: o, componentToShow: c, motorEventEmitter: d, afviklerEventEmitter: _ };
}
function xf(e, t, r = {}) {
  const n = t[e] ?? e;
  return n === e ? e : Uf(n, r);
}
function Uf(e, t) {
  return e.replace(/{[^}]+}/g, (r) => t[r.slice(1, -1)] ?? r);
}
function Kf(e) {
  const t = e.getBoundingClientRect();
  return t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}
function Df(e) {
  const t = e.getAttribute("tabindex");
  return e.setAttribute("tabindex", "-1"), e.focus({ focusVisible: !1 }), Mn(() => {
    typeof t == "string" ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
  });
}
function qf(e, t = 250) {
  const r = e.style.scrollMargin;
  return Wf(e, t), e.scrollIntoView({ block: "start", behavior: "smooth" }), Mn(() => {
    e.style.scrollMargin = r;
  });
}
function Wf(e, t) {
  t + e.clientHeight < window.innerHeight && (e.style.scrollMargin = `${t}px`);
}
const Jf = (e) => e instanceof HTMLElement;
function zf(e) {
  var t;
  const r = (t = e.querySelector(".gm-opfølgende-spørgsmål-info")) == null ? void 0 : t.closest(".gm-rejseoverblik-guide"), n = e.querySelector(
    '.gm-rejseoverblik-guide[data-gm-guide-gennemført="true"] ~ .gm-rejseoverblik-guide[data-gm-guide-gennemført="false"]:not(.gm-låst)'
  ), s = e.querySelector('.gm-rejseoverblik-guide[data-gm-guide-gennemført="false"]');
  return r || n || s || (e.querySelector(".gm-trin, .gm-afslutningstekstside, .gm-opsummeringsside, .gm-brugeroplysninger") ?? e.querySelector(".gm-rejse-info"));
}
const Yf = ["aria-label", "data-gm-rejse-slug", "data-gm-rejse-navn", "data-gm-rejse-ansvarligMyndighed", "data-gm-rejse-antal-guides", "data-gm-rejse-gennemført"], Zf = /* @__PURE__ */ H({
  __name: "App",
  props: {
    rejse: {},
    messages: {},
    authCallback: {},
    dataCallback: {},
    designMode: { type: Boolean, default: !1 },
    debug: { type: Boolean, default: !1 },
    hotReload: { type: Boolean },
    emailTrinStart: { type: Boolean, default: !1 },
    dontPersistMode: { type: Boolean }
  },
  setup(e) {
    const t = e, r = (d, _) => xf(d, t.messages, _), { afviklerData: n, componentToShow: s, motorEventEmitter: i, afviklerEventEmitter: l } = Vf(
      t.rejse,
      t.authCallback,
      t.dataCallback,
      t.designMode,
      t.debug,
      t.emailTrinStart,
      t.dontPersistMode
    ), o = Ke(), u = Ke(!1);
    l.on((d) => {
      switch (d) {
        case "vis-overblik":
        case "vis-trin":
        case "vis-opsummering":
        case "vis-afslutningsside":
        case "vis-brugeroplysninger":
        case "vis-konklusion":
          ka.nextTick(() => {
            if (u.value && o.value) {
              const _ = zf(o.value);
              Jf(_) && (Df(_), Kf(_) || qf(_));
            }
            u.value = !0;
          });
          break;
      }
    }), i.emit("init", null);
    const c = (d) => ({
      data: d,
      emitter: i,
      t: r,
      designMode: t.designMode
    });
    return (d, _) => {
      var E, M;
      return j(), G("div", {
        ref_key: "wrapper",
        ref: o,
        class: "gm-afvikler",
        role: "region",
        "aria-label": d.rejse.navn,
        "aria-live": "polite",
        "data-gm-rejse-slug": d.rejse.slug,
        "data-gm-rejse-navn": d.rejse.navn,
        "data-gm-rejse-ansvarligMyndighed": (E = d.rejse.kontaktinfo) == null ? void 0 : E.ansvarligMyndighed,
        "data-gm-rejse-antal-guides": (M = d.rejse.guides) == null ? void 0 : M.length,
        "data-gm-rejse-gennemført": Te(n).rejse.gennemført || !1
      }, [
        Te(n).fejl ? (j(), q(ja, S(re({ key: 0 }, c(Te(n).fejl))), null, 16)) : z("", !0),
        Te(s) ? (j(), q($r(Te(s)), S(re({ key: 1 }, c(Te(n).stateData))), null, 16)) : z("", !0)
      ], 8, Yf);
    };
  }
}), Qf = `query ($slug: String!, $preview: Boolean = false, $locale: String = "da") {
  ressourceSetCollection(where: { slug: $slug }, preview: $preview, locale: $locale) {
    items {
      ressourcerCollection {
        items {
          key
          value
        }
      }
    }
  }
}
`, Xf = "guideafvikler";
async function ec(e = !1) {
  const { ressourceSetCollection: t } = await Ft(Qf, { slug: Xf, preview: e }), r = t.items.flatMap(({ ressourcerCollection: n }) => n.items).map((n) => [n.key, n.value]);
  return Object.fromEntries(r);
}
const tc = `query rejse($slug: String!, $preview: Boolean) {
  gmRejseBySlug(slug: $slug, preview: $preview) {
    slug
    version
    navn
    beskrivelse
    estimeretGennemfoerselTid
    afslutningstekst {
      overskrift
      broedtekst
    }
    kraeverLoggetPaa
    guides(preview: $preview) {
      slug
      version
      navn
      beskrivelse
      visOpsummering
      starttrinId
      trin {
        id
        type
        ...InformationsTrin
        ...ResultTrin
        ...VaelgEnSpoergsmaalTrin
      }
      forbindelser {
        id
        fraTrinId
        tilTrinId
        svarmulighedIds
      }
      startBetingelser {
        foerstEfterGuideSlug
      }
      estimeretGennemfoerselTid
      kontaktinfo {
        ansvarligMyndighed
        supportTelefonnummer
      }
    }
    kontaktinfo {
      ansvarligMyndighed
      supportTelefonnummer
    }
  }
}

fragment InformationsTrin on GmInformationsTrin {
  overskrift
  broedtekst
  tekstafsnit {
    overskrift
    broedtekst
  }
}

fragment ResultTrin on GmResultTrin {
  overskrift
  broedtekst
  handlingsLink {
    titel
    url
  }
  tekstafsnit {
    overskrift
    broedtekst
  }
  opfoelgendeSpoergsmaal
}

fragment VaelgEnSpoergsmaalTrin on GmVaelgEnSpoergsmaalTrin {
  overskrift
  broedtekst
  svarmuligheder {
    id
    label
    autosvar {
      type
      id
    }
    konsekvenstekst
  }
  tekstafsnit {
    overskrift
    broedtekst
  }
}
`;
class xi extends Error {
}
async function rc(e, t = !0) {
  const n = (await Ft(tc, { slug: e, preview: t })).gmRejseBySlug;
  if (!n)
    throw new xi(`Rejse '${e}' kunne ikke findes.`);
  return n;
}
const nc = {
  "rejse-ikke-fundet.overskrift": "Siden kan ikke findes",
  "rejse-ikke-fundet.broedtekst": "Det kan skyldes at siden er slettet eller taget ned igen.",
  "ukendt-fejl.overskrift": "Siden kan ikke findes",
  "ukendt-fejl.broedtekst": "Prøv at genindlæse siden."
};
function sc(e) {
  return hs(
    "div",
    { class: "gm-afvikler" },
    hs(
      Mt,
      { type: "error" },
      {
        heading: () => e.overskrift,
        default: () => e.brødtekst
      }
    )
  );
}
function $s(e, t) {
  return $i(sc, { overskrift: e, brødtekst: t });
}
async function ic(e) {
  e.backendURL && (Pi.backendURL = e.backendURL);
  const t = e.preview ?? !1, r = e.debug ?? !1, n = e.emailTrinStart ?? !1, s = e.dontPersistMode;
  try {
    const i = await rc(e.rejse, t), l = await ec(), o = {
      rejse: i,
      messages: l,
      authCallback: e.authCallback,
      dataCallback: e.dataCallback,
      debug: r,
      emailTrinStart: n,
      dontPersistMode: s
    };
    return $i(Zf, o);
  } catch (i) {
    console.error(i);
    const l = (o) => {
      var u;
      return ((u = e.fejlbeskeder) == null ? void 0 : u[o]) ?? nc[o];
    };
    return i instanceof xi ? $s(l("rejse-ikke-fundet.overskrift"), l("rejse-ikke-fundet.broedtekst")) : $s(l("ukendt-fejl.overskrift"), l("ukendt-fejl.broedtekst"));
  }
}
export {
  ic as opretAfvikler
};
