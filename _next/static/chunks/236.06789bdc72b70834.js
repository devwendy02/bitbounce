(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [236], {
        30215: function(t, e, n) {
            ! function(t, e) {
                "use strict";

                function r(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var n = function() {};
                    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                }

                function o(t, e, n) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (n = e, e = 10), this._init(t || 0, e || 10, n || "be"))
                }
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    h = void 0 !== window.Buffer ? window.Buffer : n(79391).Buffer
                } catch (t) {}

                function a(t, e) {
                    var n = t.charCodeAt(e);
                    return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + t)
                }

                function s(t, e, n) {
                    var r = a(t, n);
                    return n - 1 >= e && (r |= a(t, n - 1) << 4), r
                }

                function u(t, e, n, i) {
                    for (var o = 0, a = 0, s = Math.min(t.length, n), u = e; u < s; u++) {
                        var c = t.charCodeAt(u) - 48;
                        o *= i, a = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c, r(c >= 0 && a < i, "Invalid character"), o += a
                    }
                    return o
                }

                function c(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, o.prototype._init = function(t, e, n) {
                        if ("number" == typeof t) return this._initNumber(t, e, n);
                        if ("object" == typeof t) return this._initArray(t, e, n);
                        "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i), "le" === n && this._initArray(this.toArray(), e, n)))
                    }, o.prototype._initNumber = function(t, e, n) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n)
                    }, o.prototype._initArray = function(t, e, n) {
                        if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
                        var s = 0;
                        if ("be" === n)
                            for (a = t.length - 1, i = 0; a >= 0; a -= 3) o = t[a] | t[a - 1] << 8 | t[a - 2] << 16, this.words[i] |= o << s & 67108863, this.words[i + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, i++);
                        else if ("le" === n)
                            for (a = 0, i = 0; a < t.length; a += 3) o = t[a] | t[a + 1] << 8 | t[a + 2] << 16, this.words[i] |= o << s & 67108863, this.words[i + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, i++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, n) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var r, i = 0; i < this.length; i++) this.words[i] = 0;
                        var o = 0,
                            a = 0;
                        if ("be" === n)
                            for (i = t.length - 1; i >= e; i -= 2) r = s(t, e, i) << o, this.words[a] |= 67108863 & r, o >= 18 ? (o -= 18, a += 1, this.words[a] |= r >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) r = s(t, e, i) << o, this.words[a] |= 67108863 & r, o >= 18 ? (o -= 18, a += 1, this.words[a] |= r >>> 26) : o += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, n) {
                        this.words = [0], this.length = 1;
                        for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
                        r--, i = i / e | 0;
                        for (var o = t.length - n, a = o % r, s = Math.min(o, o - a) + n, c = 0, l = n; l < s; l += r) c = u(t, l, l + r, e), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        if (0 !== a) {
                            var h = 1;
                            for (c = u(t, l, t.length, e), l = 0; l < a; l++) h *= e;
                            this.imuln(h), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        c(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l
                } catch (t) {
                    o.prototype.inspect = l
                } else o.prototype.inspect = l;

                function l() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var h, f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function m(t, e, n) {
                    n.negative = e.negative ^ t.negative;
                    var r = t.length + e.length | 0;
                    n.length = r, r = r - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    n.words[0] = s;
                    for (var c = 1; c < r; c++) {
                        for (var l = u >>> 26, h = 67108863 & u, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1); d <= f; d++) {
                            var p = c - d | 0;
                            l += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) / 67108864 | 0, h = 67108863 & a
                        }
                        n.words[c] = 0 | h, u = 0 | l
                    }
                    return 0 !== u ? n.words[c] = 0 | u : n.length--, n._strip()
                }
                o.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        n = "";
                        for (var n, i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                u = ((s << i | o) & 16777215).toString(16);
                            o = s >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, a--), n = 0 !== o || a !== this.length - 1 ? f[6 - u.length] + u + n : u + n
                        }
                        for (0 !== o && (n = o.toString(16) + n); n.length % e != 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var c = d[t],
                            l = p[t];
                        n = "";
                        var h = this.clone();
                        for (h.negative = 0; !h.isZero();) {
                            var m = h.modrn(l).toString(t);
                            n = (h = h.idivn(l)).isZero() ? m + n : f[c - m.length] + m + n
                        }
                        for (this.isZero() && (n = "0" + n); n.length % e != 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    r(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, h && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(h, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, n) {
                    this._strip();
                    var i = this.byteLength(),
                        o = n || Math.max(1, i);
                    r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                    var a = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, i), a
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                        var a = this.words[i] << o | r;
                        t[n++] = 255 & a, n < t.length && (t[n++] = a >> 8 & 255), n < t.length && (t[n++] = a >> 16 & 255), 6 === o ? (n < t.length && (t[n++] = a >> 24 & 255), r = 0, o = 0) : (r = a >>> 24, o += 2)
                    }
                    if (n < t.length)
                        for (t[n++] = r; n < t.length;) t[n++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var n = t.length - 1, r = 0, i = 0, o = 0; i < this.length; i++) {
                        var a = this.words[i] << o | r;
                        t[n--] = 255 & a, n >= 0 && (t[n--] = a >> 8 & 255), n >= 0 && (t[n--] = a >> 16 & 255), 6 === o ? (n >= 0 && (t[n--] = a >> 24 & 255), r = 0, o = 0) : (r = a >>> 24, o += 2)
                    }
                    if (n >= 0)
                        for (t[n--] = r; n >= 0;) t[n--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        n = 0;
                    return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        n = 0;
                    return (8191 & e) == 0 && (n += 13, e >>>= 13), (127 & e) == 0 && (n += 7, e >>>= 7), (15 & e) == 0 && (n += 4, e >>>= 4), (3 & e) == 0 && (n += 2, e >>>= 2), (1 & e) == 0 && n++, n
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var n = this._zeroBits(this.words[e]);
                        if (t += n, 26 !== n) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                    for (var e, n, r = 0; r < n.length; r++) this.words[r] = e.words[r] ^ n.words[r];
                    if (this !== e)
                        for (; r < e.length; r++) this.words[r] = e.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        n = t % 26;
                    this._expand(e), n > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    r("number" == typeof t && t >= 0);
                    var n = t / 26 | 0,
                        i = t % 26;
                    return this._expand(n + 1), e ? this.words[n] = this.words[n] | 1 << i : this.words[n] = this.words[n] & ~(1 << i), this._strip()
                }, o.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (n = this, r = t) : (n = t, r = this);
                    for (var e, n, r, i = 0, o = 0; o < r.length; o++) e = (0 | n.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < n.length; o++) e = (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (n !== this)
                        for (; o < n.length; o++) this.words[o] = n.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, n, r = this.iadd(t);
                        return t.negative = 1, r._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (e = this, n = t) : (e = t, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (r = (0 | e.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & r;
                    for (; 0 !== o && a < e.length; a++) o = (r = (0 | e.words[a]) + o) >> 26, this.words[a] = 67108863 & r;
                    if (0 === o && a < e.length && e !== this)
                        for (; a < e.length; a++) this.words[a] = e.words[a];
                    return this.length = Math.max(this.length, a), e !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var y = function(t, e, n) {
                    var r, i, o, a = t.words,
                        s = e.words,
                        u = n.words,
                        c = 0,
                        l = 0 | a[0],
                        h = 8191 & l,
                        f = l >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        m = d >>> 13,
                        y = 0 | a[2],
                        v = 8191 & y,
                        g = y >>> 13,
                        w = 0 | a[3],
                        b = 8191 & w,
                        k = w >>> 13,
                        M = 0 | a[4],
                        E = 8191 & M,
                        _ = M >>> 13,
                        A = 0 | a[5],
                        S = 8191 & A,
                        C = A >>> 13,
                        N = 0 | a[6],
                        O = 8191 & N,
                        x = N >>> 13,
                        R = 0 | a[7],
                        I = 8191 & R,
                        T = R >>> 13,
                        P = 0 | a[8],
                        B = 8191 & P,
                        j = P >>> 13,
                        D = 0 | a[9],
                        L = 8191 & D,
                        U = D >>> 13,
                        Z = 0 | s[0],
                        F = 8191 & Z,
                        W = Z >>> 13,
                        z = 0 | s[1],
                        V = 8191 & z,
                        H = z >>> 13,
                        G = 0 | s[2],
                        q = 8191 & G,
                        J = G >>> 13,
                        Q = 0 | s[3],
                        K = 8191 & Q,
                        Y = Q >>> 13,
                        X = 0 | s[4],
                        $ = 8191 & X,
                        tt = X >>> 13,
                        te = 0 | s[5],
                        tn = 8191 & te,
                        tr = te >>> 13,
                        ti = 0 | s[6],
                        to = 8191 & ti,
                        ta = ti >>> 13,
                        ts = 0 | s[7],
                        tu = 8191 & ts,
                        tc = ts >>> 13,
                        tl = 0 | s[8],
                        th = 8191 & tl,
                        tf = tl >>> 13,
                        td = 0 | s[9],
                        tp = 8191 & td,
                        tm = td >>> 13;
                    n.negative = t.negative ^ e.negative, n.length = 19;
                    var ty = (c + (r = Math.imul(h, F)) | 0) + ((8191 & (i = (i = Math.imul(h, W)) + Math.imul(f, F) | 0)) << 13) | 0;
                    c = ((o = Math.imul(f, W)) + (i >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, r = Math.imul(p, F), i = (i = Math.imul(p, W)) + Math.imul(m, F) | 0, o = Math.imul(m, W);
                    var tv = (c + (r = r + Math.imul(h, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, H) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, H) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, r = Math.imul(v, F), i = (i = Math.imul(v, W)) + Math.imul(g, F) | 0, o = Math.imul(g, W), r = r + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, H) | 0;
                    var tg = (c + (r = r + Math.imul(h, q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, J) | 0) + Math.imul(f, q) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, J) | 0) + (i >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, r = Math.imul(b, F), i = (i = Math.imul(b, W)) + Math.imul(k, F) | 0, o = Math.imul(k, W), r = r + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, H) | 0) + Math.imul(g, V) | 0, o = o + Math.imul(g, H) | 0, r = r + Math.imul(p, q) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(m, q) | 0, o = o + Math.imul(m, J) | 0;
                    var tw = (c + (r = r + Math.imul(h, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Y) | 0) + Math.imul(f, K) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, Y) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, r = Math.imul(E, F), i = (i = Math.imul(E, W)) + Math.imul(_, F) | 0, o = Math.imul(_, W), r = r + Math.imul(b, V) | 0, i = (i = i + Math.imul(b, H) | 0) + Math.imul(k, V) | 0, o = o + Math.imul(k, H) | 0, r = r + Math.imul(v, q) | 0, i = (i = i + Math.imul(v, J) | 0) + Math.imul(g, q) | 0, o = o + Math.imul(g, J) | 0, r = r + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(m, K) | 0, o = o + Math.imul(m, Y) | 0;
                    var tb = (c + (r = r + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tt) | 0) + Math.imul(f, $) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, tt) | 0) + (i >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, r = Math.imul(S, F), i = (i = Math.imul(S, W)) + Math.imul(C, F) | 0, o = Math.imul(C, W), r = r + Math.imul(E, V) | 0, i = (i = i + Math.imul(E, H) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, H) | 0, r = r + Math.imul(b, q) | 0, i = (i = i + Math.imul(b, J) | 0) + Math.imul(k, q) | 0, o = o + Math.imul(k, J) | 0, r = r + Math.imul(v, K) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(g, K) | 0, o = o + Math.imul(g, Y) | 0, r = r + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, tt) | 0;
                    var tk = (c + (r = r + Math.imul(h, tn) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tr) | 0) + Math.imul(f, tn) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, tr) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, r = Math.imul(O, F), i = (i = Math.imul(O, W)) + Math.imul(x, F) | 0, o = Math.imul(x, W), r = r + Math.imul(S, V) | 0, i = (i = i + Math.imul(S, H) | 0) + Math.imul(C, V) | 0, o = o + Math.imul(C, H) | 0, r = r + Math.imul(E, q) | 0, i = (i = i + Math.imul(E, J) | 0) + Math.imul(_, q) | 0, o = o + Math.imul(_, J) | 0, r = r + Math.imul(b, K) | 0, i = (i = i + Math.imul(b, Y) | 0) + Math.imul(k, K) | 0, o = o + Math.imul(k, Y) | 0, r = r + Math.imul(v, $) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(g, $) | 0, o = o + Math.imul(g, tt) | 0, r = r + Math.imul(p, tn) | 0, i = (i = i + Math.imul(p, tr) | 0) + Math.imul(m, tn) | 0, o = o + Math.imul(m, tr) | 0;
                    var tM = (c + (r = r + Math.imul(h, to) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ta) | 0) + Math.imul(f, to) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, ta) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, r = Math.imul(I, F), i = (i = Math.imul(I, W)) + Math.imul(T, F) | 0, o = Math.imul(T, W), r = r + Math.imul(O, V) | 0, i = (i = i + Math.imul(O, H) | 0) + Math.imul(x, V) | 0, o = o + Math.imul(x, H) | 0, r = r + Math.imul(S, q) | 0, i = (i = i + Math.imul(S, J) | 0) + Math.imul(C, q) | 0, o = o + Math.imul(C, J) | 0, r = r + Math.imul(E, K) | 0, i = (i = i + Math.imul(E, Y) | 0) + Math.imul(_, K) | 0, o = o + Math.imul(_, Y) | 0, r = r + Math.imul(b, $) | 0, i = (i = i + Math.imul(b, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, r = r + Math.imul(v, tn) | 0, i = (i = i + Math.imul(v, tr) | 0) + Math.imul(g, tn) | 0, o = o + Math.imul(g, tr) | 0, r = r + Math.imul(p, to) | 0, i = (i = i + Math.imul(p, ta) | 0) + Math.imul(m, to) | 0, o = o + Math.imul(m, ta) | 0;
                    var tE = (c + (r = r + Math.imul(h, tu) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tc) | 0) + Math.imul(f, tu) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, tc) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, r = Math.imul(B, F), i = (i = Math.imul(B, W)) + Math.imul(j, F) | 0, o = Math.imul(j, W), r = r + Math.imul(I, V) | 0, i = (i = i + Math.imul(I, H) | 0) + Math.imul(T, V) | 0, o = o + Math.imul(T, H) | 0, r = r + Math.imul(O, q) | 0, i = (i = i + Math.imul(O, J) | 0) + Math.imul(x, q) | 0, o = o + Math.imul(x, J) | 0, r = r + Math.imul(S, K) | 0, i = (i = i + Math.imul(S, Y) | 0) + Math.imul(C, K) | 0, o = o + Math.imul(C, Y) | 0, r = r + Math.imul(E, $) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(_, $) | 0, o = o + Math.imul(_, tt) | 0, r = r + Math.imul(b, tn) | 0, i = (i = i + Math.imul(b, tr) | 0) + Math.imul(k, tn) | 0, o = o + Math.imul(k, tr) | 0, r = r + Math.imul(v, to) | 0, i = (i = i + Math.imul(v, ta) | 0) + Math.imul(g, to) | 0, o = o + Math.imul(g, ta) | 0, r = r + Math.imul(p, tu) | 0, i = (i = i + Math.imul(p, tc) | 0) + Math.imul(m, tu) | 0, o = o + Math.imul(m, tc) | 0;
                    var t_ = (c + (r = r + Math.imul(h, th) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tf) | 0) + Math.imul(f, th) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, tf) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, r = Math.imul(L, F), i = (i = Math.imul(L, W)) + Math.imul(U, F) | 0, o = Math.imul(U, W), r = r + Math.imul(B, V) | 0, i = (i = i + Math.imul(B, H) | 0) + Math.imul(j, V) | 0, o = o + Math.imul(j, H) | 0, r = r + Math.imul(I, q) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(T, q) | 0, o = o + Math.imul(T, J) | 0, r = r + Math.imul(O, K) | 0, i = (i = i + Math.imul(O, Y) | 0) + Math.imul(x, K) | 0, o = o + Math.imul(x, Y) | 0, r = r + Math.imul(S, $) | 0, i = (i = i + Math.imul(S, tt) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, tt) | 0, r = r + Math.imul(E, tn) | 0, i = (i = i + Math.imul(E, tr) | 0) + Math.imul(_, tn) | 0, o = o + Math.imul(_, tr) | 0, r = r + Math.imul(b, to) | 0, i = (i = i + Math.imul(b, ta) | 0) + Math.imul(k, to) | 0, o = o + Math.imul(k, ta) | 0, r = r + Math.imul(v, tu) | 0, i = (i = i + Math.imul(v, tc) | 0) + Math.imul(g, tu) | 0, o = o + Math.imul(g, tc) | 0, r = r + Math.imul(p, th) | 0, i = (i = i + Math.imul(p, tf) | 0) + Math.imul(m, th) | 0, o = o + Math.imul(m, tf) | 0;
                    var tA = (c + (r = r + Math.imul(h, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, tm) | 0) + Math.imul(f, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(f, tm) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, r = Math.imul(L, V), i = (i = Math.imul(L, H)) + Math.imul(U, V) | 0, o = Math.imul(U, H), r = r + Math.imul(B, q) | 0, i = (i = i + Math.imul(B, J) | 0) + Math.imul(j, q) | 0, o = o + Math.imul(j, J) | 0, r = r + Math.imul(I, K) | 0, i = (i = i + Math.imul(I, Y) | 0) + Math.imul(T, K) | 0, o = o + Math.imul(T, Y) | 0, r = r + Math.imul(O, $) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(x, $) | 0, o = o + Math.imul(x, tt) | 0, r = r + Math.imul(S, tn) | 0, i = (i = i + Math.imul(S, tr) | 0) + Math.imul(C, tn) | 0, o = o + Math.imul(C, tr) | 0, r = r + Math.imul(E, to) | 0, i = (i = i + Math.imul(E, ta) | 0) + Math.imul(_, to) | 0, o = o + Math.imul(_, ta) | 0, r = r + Math.imul(b, tu) | 0, i = (i = i + Math.imul(b, tc) | 0) + Math.imul(k, tu) | 0, o = o + Math.imul(k, tc) | 0, r = r + Math.imul(v, th) | 0, i = (i = i + Math.imul(v, tf) | 0) + Math.imul(g, th) | 0, o = o + Math.imul(g, tf) | 0;
                    var tS = (c + (r = r + Math.imul(p, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, tm) | 0) + Math.imul(m, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(m, tm) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, r = Math.imul(L, q), i = (i = Math.imul(L, J)) + Math.imul(U, q) | 0, o = Math.imul(U, J), r = r + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, Y) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, Y) | 0, r = r + Math.imul(I, $) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(T, $) | 0, o = o + Math.imul(T, tt) | 0, r = r + Math.imul(O, tn) | 0, i = (i = i + Math.imul(O, tr) | 0) + Math.imul(x, tn) | 0, o = o + Math.imul(x, tr) | 0, r = r + Math.imul(S, to) | 0, i = (i = i + Math.imul(S, ta) | 0) + Math.imul(C, to) | 0, o = o + Math.imul(C, ta) | 0, r = r + Math.imul(E, tu) | 0, i = (i = i + Math.imul(E, tc) | 0) + Math.imul(_, tu) | 0, o = o + Math.imul(_, tc) | 0, r = r + Math.imul(b, th) | 0, i = (i = i + Math.imul(b, tf) | 0) + Math.imul(k, th) | 0, o = o + Math.imul(k, tf) | 0;
                    var tC = (c + (r = r + Math.imul(v, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, tm) | 0) + Math.imul(g, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(g, tm) | 0) + (i >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, r = Math.imul(L, K), i = (i = Math.imul(L, Y)) + Math.imul(U, K) | 0, o = Math.imul(U, Y), r = r + Math.imul(B, $) | 0, i = (i = i + Math.imul(B, tt) | 0) + Math.imul(j, $) | 0, o = o + Math.imul(j, tt) | 0, r = r + Math.imul(I, tn) | 0, i = (i = i + Math.imul(I, tr) | 0) + Math.imul(T, tn) | 0, o = o + Math.imul(T, tr) | 0, r = r + Math.imul(O, to) | 0, i = (i = i + Math.imul(O, ta) | 0) + Math.imul(x, to) | 0, o = o + Math.imul(x, ta) | 0, r = r + Math.imul(S, tu) | 0, i = (i = i + Math.imul(S, tc) | 0) + Math.imul(C, tu) | 0, o = o + Math.imul(C, tc) | 0, r = r + Math.imul(E, th) | 0, i = (i = i + Math.imul(E, tf) | 0) + Math.imul(_, th) | 0, o = o + Math.imul(_, tf) | 0;
                    var tN = (c + (r = r + Math.imul(b, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, tm) | 0) + Math.imul(k, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(k, tm) | 0) + (i >>> 13) | 0) + (tN >>> 26) | 0, tN &= 67108863, r = Math.imul(L, $), i = (i = Math.imul(L, tt)) + Math.imul(U, $) | 0, o = Math.imul(U, tt), r = r + Math.imul(B, tn) | 0, i = (i = i + Math.imul(B, tr) | 0) + Math.imul(j, tn) | 0, o = o + Math.imul(j, tr) | 0, r = r + Math.imul(I, to) | 0, i = (i = i + Math.imul(I, ta) | 0) + Math.imul(T, to) | 0, o = o + Math.imul(T, ta) | 0, r = r + Math.imul(O, tu) | 0, i = (i = i + Math.imul(O, tc) | 0) + Math.imul(x, tu) | 0, o = o + Math.imul(x, tc) | 0, r = r + Math.imul(S, th) | 0, i = (i = i + Math.imul(S, tf) | 0) + Math.imul(C, th) | 0, o = o + Math.imul(C, tf) | 0;
                    var tO = (c + (r = r + Math.imul(E, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(E, tm) | 0) + Math.imul(_, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(_, tm) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, r = Math.imul(L, tn), i = (i = Math.imul(L, tr)) + Math.imul(U, tn) | 0, o = Math.imul(U, tr), r = r + Math.imul(B, to) | 0, i = (i = i + Math.imul(B, ta) | 0) + Math.imul(j, to) | 0, o = o + Math.imul(j, ta) | 0, r = r + Math.imul(I, tu) | 0, i = (i = i + Math.imul(I, tc) | 0) + Math.imul(T, tu) | 0, o = o + Math.imul(T, tc) | 0, r = r + Math.imul(O, th) | 0, i = (i = i + Math.imul(O, tf) | 0) + Math.imul(x, th) | 0, o = o + Math.imul(x, tf) | 0;
                    var tx = (c + (r = r + Math.imul(S, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, tm) | 0) + Math.imul(C, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(C, tm) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, r = Math.imul(L, to), i = (i = Math.imul(L, ta)) + Math.imul(U, to) | 0, o = Math.imul(U, ta), r = r + Math.imul(B, tu) | 0, i = (i = i + Math.imul(B, tc) | 0) + Math.imul(j, tu) | 0, o = o + Math.imul(j, tc) | 0, r = r + Math.imul(I, th) | 0, i = (i = i + Math.imul(I, tf) | 0) + Math.imul(T, th) | 0, o = o + Math.imul(T, tf) | 0;
                    var tR = (c + (r = r + Math.imul(O, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, tm) | 0) + Math.imul(x, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(x, tm) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, r = Math.imul(L, tu), i = (i = Math.imul(L, tc)) + Math.imul(U, tu) | 0, o = Math.imul(U, tc), r = r + Math.imul(B, th) | 0, i = (i = i + Math.imul(B, tf) | 0) + Math.imul(j, th) | 0, o = o + Math.imul(j, tf) | 0;
                    var tI = (c + (r = r + Math.imul(I, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, tm) | 0) + Math.imul(T, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(T, tm) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, r = Math.imul(L, th), i = (i = Math.imul(L, tf)) + Math.imul(U, th) | 0, o = Math.imul(U, tf);
                    var tT = (c + (r = r + Math.imul(B, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, tm) | 0) + Math.imul(j, tp) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(j, tm) | 0) + (i >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863;
                    var tP = (c + (r = Math.imul(L, tp)) | 0) + ((8191 & (i = (i = Math.imul(L, tm)) + Math.imul(U, tp) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(U, tm)) + (i >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, u[0] = ty, u[1] = tv, u[2] = tg, u[3] = tw, u[4] = tb, u[5] = tk, u[6] = tM, u[7] = tE, u[8] = t_, u[9] = tA, u[10] = tS, u[11] = tC, u[12] = tN, u[13] = tO, u[14] = tx, u[15] = tR, u[16] = tI, u[17] = tT, u[18] = tP, 0 !== c && (u[19] = c, n.length++), n
                };

                function v(t, e, n) {
                    n.negative = e.negative ^ t.negative, n.length = t.length + e.length;
                    for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                        var a = i;
                        i = 0;
                        for (var s = 67108863 & r, u = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= u; c++) {
                            var l = o - c,
                                h = (0 | t.words[l]) * (0 | e.words[c]),
                                f = 67108863 & h;
                            a = a + (h / 67108864 | 0) | 0, s = 67108863 & (f = f + s | 0), i += (a = a + (f >>> 26) | 0) >>> 26, a &= 67108863
                        }
                        n.words[o] = s, r = a, a = i
                    }
                    return 0 !== r ? n.words[o] = r : n.length--, n._strip()
                }

                function g(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (y = m), o.prototype.mulTo = function(t, e) {
                    var n, r = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? y(this, t, e) : r < 63 ? m(this, t, e) : v(this, t, e)
                }, g.prototype.makeRBT = function(t) {
                    for (var e = Array(t), n = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, n, t);
                    return e
                }, g.prototype.revBin = function(t, e, n) {
                    if (0 === t || t === n - 1) return t;
                    for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                    return r
                }, g.prototype.permute = function(t, e, n, r, i, o) {
                    for (var a = 0; a < o; a++) r[a] = e[t[a]], i[a] = n[t[a]]
                }, g.prototype.transform = function(t, e, n, r, i, o) {
                    this.permute(o, t, e, n, r, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), l = 0; l < i; l += s)
                            for (var h = u, f = c, d = 0; d < a; d++) {
                                var p = n[l + d],
                                    m = r[l + d],
                                    y = n[l + d + a],
                                    v = r[l + d + a],
                                    g = h * y - f * v;
                                v = h * v + f * y, y = g, n[l + d] = p + y, r[l + d] = m + v, n[l + d + a] = p - y, r[l + d + a] = m - v, d !== s && (g = u * h - c * f, f = u * f + c * h, h = g)
                            }
                }, g.prototype.guessLen13b = function(t, e) {
                    var n = 1 | Math.max(e, t),
                        r = 1 & n,
                        i = 0;
                    for (n = n / 2 | 0; n; n >>>= 1) i++;
                    return 1 << i + 1 + r
                }, g.prototype.conjugate = function(t, e, n) {
                    if (!(n <= 1))
                        for (var r = 0; r < n / 2; r++) {
                            var i = t[r];
                            t[r] = t[n - r - 1], t[n - r - 1] = i, i = e[r], e[r] = -e[n - r - 1], e[n - r - 1] = -i
                        }
                }, g.prototype.normalize13b = function(t, e) {
                    for (var n = 0, r = 0; r < e / 2; r++) {
                        var i = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + n;
                        t[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, g.prototype.convert13b = function(t, e, n, i) {
                    for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], n[2 * a] = 8191 & o, o >>>= 13, n[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * e; a < i; ++a) n[a] = 0;
                    r(0 === o), r((-8192 & o) == 0)
                }, g.prototype.stub = function(t) {
                    for (var e = Array(t), n = 0; n < t; n++) e[n] = 0;
                    return e
                }, g.prototype.mulp = function(t, e, n) {
                    var r = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(r),
                        o = this.stub(r),
                        a = Array(r),
                        s = Array(r),
                        u = Array(r),
                        c = Array(r),
                        l = Array(r),
                        h = Array(r),
                        f = n.words;
                    f.length = r, this.convert13b(t.words, t.length, a, r), this.convert13b(e.words, e.length, c, r), this.transform(a, o, s, u, r, i), this.transform(c, o, l, h, r, i);
                    for (var d = 0; d < r; d++) {
                        var p = s[d] * l[d] - u[d] * h[d];
                        u[d] = s[d] * h[d] + u[d] * l[d], s[d] = p
                    }
                    return this.conjugate(s, u, r), this.transform(s, u, f, o, r, i), this.conjugate(f, o, r), this.normalize13b(f, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n._strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), v(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), r("number" == typeof t), r(t < 67108864);
                    for (var n = 0, i = 0; i < this.length; i++) {
                        var o = (0 | this.words[i]) * t,
                            a = (67108863 & o) + (67108863 & n);
                        n >>= 26, n += (o / 67108864 | 0) + (a >>> 26), this.words[i] = 67108863 & a
                    }
                    return 0 !== n && (this.words[i] = n, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), n = 0; n < e.length; n++) {
                            var r = n / 26 | 0,
                                i = n % 26;
                            e[n] = t.words[r] >>> i & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var n = this, r = 0; r < e.length && 0 === e[r]; r++, n = n.sqr());
                    if (++r < e.length)
                        for (var i = n.sqr(); r < e.length; r++, i = i.sqr()) 0 !== e[r] && (n = n.mul(i));
                    return n
                }, o.prototype.iushln = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e, n = t % 26,
                        i = (t - n) / 26,
                        o = 67108863 >>> 26 - n << 26 - n;
                    if (0 !== n) {
                        var a = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                u = (0 | this.words[e]) - s << n;
                            this.words[e] = u | a, a = s >>> 26 - n
                        }
                        a && (this.words[e] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return r(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, n) {
                    r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var i, o = t % 26,
                        a = Math.min((t - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o;
                    if (i -= a, i = Math.max(0, i), n) {
                        for (var u = 0; u < a; u++) n.words[u] = this.words[u];
                        n.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, u = 0; u < this.length; u++) this.words[u] = this.words[u + a];
                    else this.words[0] = 0, this.length = 1;
                    var c = 0;
                    for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                        var l = 0 | this.words[u];
                        this.words[u] = c << 26 - o | l >>> o, c = l & s
                    }
                    return n && 0 !== c && (n.words[n.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, n) {
                    return r(0 === this.negative), this.iushrn(t, e, n)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        n = (t - e) / 26;
                    return !(this.length <= n) && !!(this.words[n] & 1 << e)
                }, o.prototype.imaskn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        n = (t - e) / 26;
                    return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) ? this : (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return (r("number" == typeof t), r(t < 67108864), t < 0) ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, n) {
                    var i, o, a = t.length + n;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < t.length; i++) {
                        o = (0 | this.words[i + n]) + s;
                        var u = (0 | t.words[i]) * e;
                        o -= 67108863 & u, s = (o >> 26) - (u / 67108864 | 0), this.words[i + n] = 67108863 & o
                    }
                    for (; i < this.length - n; i++) s = (o = (0 | this.words[i + n]) + s) >> 26, this.words[i + n] = 67108863 & o;
                    if (0 === s) return this._strip();
                    for (r(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var n, r = this.length - t.length,
                        i = this.clone(),
                        a = t,
                        s = 0 | a.words[a.length - 1];
                    0 != (r = 26 - this._countBits(s)) && (a = a.ushln(r), i.iushln(r), s = 0 | a.words[a.length - 1]);
                    var u = i.length - a.length;
                    if ("mod" !== e) {
                        (n = new o(null)).length = u + 1, n.words = Array(n.length);
                        for (var c = 0; c < n.length; c++) n.words[c] = 0
                    }
                    var l = i.clone()._ishlnsubmul(a, 1, u);
                    0 === l.negative && (i = l, n && (n.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var f = (0 | i.words[a.length + h]) * 67108864 + (0 | i.words[a.length + h - 1]);
                        for (f = Math.min(f / s | 0, 67108863), i._ishlnsubmul(a, f, h); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(a, 1, h), i.isZero() || (i.negative ^= 1);
                        n && (n.words[h] = f)
                    }
                    return n && n._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: n || null,
                        mod: i
                    }
                }, o.prototype.divmod = function(t, e, n) {
                    var i, a, s;
                    return (r(!t.isZero()), this.isZero()) ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), "mod" !== e && (i = s.div.neg()), "div" !== e && (a = s.mod.neg(), n && 0 !== a.negative && a.iadd(t)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), "mod" !== e && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : (this.negative & t.negative) != 0 ? (s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), n && 0 !== a.negative && a.isub(t)), {
                        div: s.div,
                        mod: a
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        r = t.ushrn(1),
                        i = t.andln(1),
                        o = n.cmp(r);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 67108863);
                    for (var n = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--) i = (n * i + (0 | this.words[o])) % t;
                    return e ? -i : i
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 67108863);
                    for (var n = 0, i = this.length - 1; i >= 0; i--) {
                        var o = (0 | this.words[i]) + 67108864 * n;
                        this.words[i] = o / t | 0, n = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        n = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), c = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++c;
                    for (var l = n.clone(), h = e.clone(); !e.isZero();) {
                        for (var f = 0, d = 1;
                            (e.words[0] & d) == 0 && f < 26; ++f, d <<= 1);
                        if (f > 0)
                            for (e.iushrn(f); f-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(h)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, m = 1;
                            (n.words[0] & m) == 0 && p < 26; ++p, m <<= 1);
                        if (p > 0)
                            for (n.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(h)), s.iushrn(1), u.iushrn(1);
                        e.cmp(n) >= 0 ? (e.isub(n), i.isub(s), a.isub(u)) : (n.isub(e), s.isub(i), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: n.iushln(c)
                    }
                }, o.prototype._invmp = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e, n = this,
                        i = t.clone();
                    n = 0 !== n.negative ? n.umod(t) : n.clone();
                    for (var a = new o(1), s = new o(0), u = i.clone(); n.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var c = 0, l = 1;
                            (n.words[0] & l) == 0 && c < 26; ++c, l <<= 1);
                        if (c > 0)
                            for (n.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var h = 0, f = 1;
                            (i.words[0] & f) == 0 && h < 26; ++h, f <<= 1);
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        n.cmp(i) >= 0 ? (n.isub(i), a.isub(s)) : (i.isub(n), s.isub(a))
                    }
                    return 0 > (e = 0 === n.cmpn(1) ? a : s).cmpn(0) && e.iadd(t), e
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        n = t.clone();
                    e.negative = 0, n.negative = 0;
                    for (var r = 0; e.isEven() && n.isEven(); r++) e.iushrn(1), n.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; n.isEven();) n.iushrn(1);
                        var i = e.cmp(n);
                        if (i < 0) {
                            var o = e;
                            e = n, n = o
                        } else if (0 === i || 0 === n.cmpn(1)) break;
                        e.isub(n)
                    }
                    return n.iushln(r)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    r("number" == typeof t);
                    var e = t % 26,
                        n = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                    for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        s += o, o = s >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, n = t < 0;
                    if (0 !== this.negative && !n) return -1;
                    if (0 === this.negative && n) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        n && (t = -t), r(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, n = this.length - 1; n >= 0; n--) {
                        var r = 0 | this.words[n],
                            i = 0 | t.words[n];
                        if (r !== i) {
                            r < i ? e = -1 : r > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, o.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new A(t)
                }, o.prototype.toRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var w = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function b(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function k() {
                    b.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function M() {
                    b.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function E() {
                    b.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function _() {
                    b.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function A(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function S(t) {
                    A.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                b.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, b.prototype.ireduce = function(t) {
                    var e, n = t;
                    do this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var r = e < this.n ? -1 : n.ucmp(this.p);
                    return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n
                }, b.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, b.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(k, b), k.prototype.split = function(t, e) {
                    for (var n = Math.min(t.length, 9), r = 0; r < n; r++) e.words[r] = t.words[r];
                    if (e.length = n, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var i = t.words[9];
                    for (r = 10, e.words[e.length++] = 4194303 & i; r < t.length; r++) {
                        var o = 0 | t.words[r];
                        t.words[r - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, t.words[r - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, k.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = 0 | t.words[n];
                        e += 977 * r, t.words[n] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(M, b), i(E, b), i(_, b), _.prototype.imulK = function(t) {
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = (0 | t.words[n]) * 19 + e,
                            i = 67108863 & r;
                        r >>>= 26, t.words[n] = i, e = r
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    var e;
                    if (w[t]) return w[t];
                    if ("k256" === t) e = new k;
                    else if ("p224" === t) e = new M;
                    else if ("p192" === t) e = new E;
                    else if ("p25519" === t) e = new _;
                    else throw Error("Unknown prime " + t);
                    return w[t] = e, e
                }, A.prototype._verify1 = function(t) {
                    r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                }, A.prototype._verify2 = function(t, e) {
                    r((t.negative | e.negative) == 0, "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                }, A.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (c(t, t.umod(this.m)._forceRed(this)), t)
                }, A.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, A.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var n = t.add(e);
                    return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
                }, A.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var n = t.iadd(e);
                    return n.cmp(this.m) >= 0 && n.isub(this.m), n
                }, A.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var n = t.sub(e);
                    return 0 > n.cmpn(0) && n.iadd(this.m), n._forceRed(this)
                }, A.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var n = t.isub(e);
                    return 0 > n.cmpn(0) && n.iadd(this.m), n
                }, A.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, A.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, A.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, A.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, A.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, A.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (r(e % 2 == 1), 3 === e) {
                        var n = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, n)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    r(!i.isZero());
                    var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        l = this.m.bitLength();
                    for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(u);) l.redIAdd(u);
                    for (var h = this.pow(l, i), f = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = a; 0 !== d.cmp(s);) {
                        for (var m = d, y = 0; 0 !== m.cmp(s); y++) m = m.redSqr();
                        r(y < p);
                        var v = this.pow(h, new o(1).iushln(p - y - 1));
                        f = f.redMul(v), h = v.redSqr(), d = d.redMul(h), p = y
                    }
                    return f
                }, A.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, A.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var n = Array(16);
                    n[0] = new o(1).toRed(this), n[1] = t;
                    for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
                    var i = n[0],
                        a = 0,
                        s = 0,
                        u = e.bitLength() % 26;
                    for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
                        for (var c = e.words[r], l = u - 1; l >= 0; l--) {
                            var h = c >> l & 1;
                            if (i !== n[0] && (i = this.sqr(i)), 0 === h && 0 === a) {
                                s = 0;
                                continue
                            }
                            a <<= 1, a |= h, (4 == ++s || 0 === r && 0 === l) && (i = this.mul(i, n[a]), s = 0, a = 0)
                        }
                        u = 26
                    }
                    return i
                }, A.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, A.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new S(t)
                }, i(S, A), S.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, S.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, S.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var n = t.imul(e),
                        r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = n.isub(r).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, S.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var n = t.mul(e),
                        r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = n.isub(r).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : 0 > i.cmpn(0) && (a = i.iadd(this.m)), a._forceRed(this)
                }, S.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = n.nmd(t), this)
        },
        60675: function(t, e) {
            var n = "undefined" != typeof self ? self : this,
                r = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return t.prototype = n, new t
                }();
            (function(t) {
                var e = {
                    searchParams: "URLSearchParams" in r,
                    iterable: "Symbol" in r && "iterator" in Symbol,
                    blob: "FileReader" in r && "Blob" in r && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in r,
                    arrayBuffer: "ArrayBuffer" in r
                };
                if (e.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    i = ArrayBuffer.isView || function(t) {
                        return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                    };

                function o(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }

                function a(t) {
                    return "string" != typeof t && (t = String(t)), t
                }

                function s(t) {
                    var n = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return e.iterable && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                }

                function u(t) {
                    this.map = {}, t instanceof u ? t.forEach(function(t, e) {
                        this.append(e, t)
                    }, this) : Array.isArray(t) ? t.forEach(function(t) {
                        this.append(t[0], t[1])
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                        this.append(e, t[e])
                    }, this)
                }

                function c(t) {
                    if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
                    t.bodyUsed = !0
                }

                function l(t) {
                    return new Promise(function(e, n) {
                        t.onload = function() {
                            e(t.result)
                        }, t.onerror = function() {
                            n(t.error)
                        }
                    })
                }

                function h(t) {
                    var e = new FileReader,
                        n = l(e);
                    return e.readAsArrayBuffer(t), n
                }

                function f(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer
                }

                function d() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        if (this._bodyInit = t, t) {
                            if ("string" == typeof t) this._bodyText = t;
                            else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                            else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                            else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                            else {
                                var n;
                                e.arrayBuffer && e.blob && (n = t) && DataView.prototype.isPrototypeOf(n) ? (this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = f(t) : this._bodyText = t = Object.prototype.toString.call(t)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, e.blob && (this.blob = function() {
                        var t = c(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                    }), this.text = function() {
                        var t, e, n, r = c(this);
                        if (r) return r;
                        if (this._bodyBlob) return t = this._bodyBlob, n = l(e = new FileReader), e.readAsText(t), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), n = Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, e.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                u.prototype.append = function(t, e) {
                    t = o(t), e = a(e);
                    var n = this.map[t];
                    this.map[t] = n ? n + ", " + e : e
                }, u.prototype.delete = function(t) {
                    delete this.map[o(t)]
                }, u.prototype.get = function(t) {
                    return t = o(t), this.has(t) ? this.map[t] : null
                }, u.prototype.has = function(t) {
                    return this.map.hasOwnProperty(o(t))
                }, u.prototype.set = function(t, e) {
                    this.map[o(t)] = a(e)
                }, u.prototype.forEach = function(t, e) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                }, u.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push(n)
                    }), s(t)
                }, u.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e)
                    }), s(t)
                }, u.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push([n, e])
                    }), s(t)
                }, e.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function m(t, e) {
                    var n, r, i = (e = e || {}).body;
                    if (t instanceof m) {
                        if (t.bodyUsed) throw TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new u(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new u(e.headers)), this.method = (r = (n = e.method || this.method || "GET").toUpperCase(), p.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(i)
                }

                function y(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach(function(t) {
                        if (t) {
                            var n = t.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                i = n.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(r), decodeURIComponent(i))
                        }
                    }), e
                }

                function v(t, e) {
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new u(e.headers), this.url = e.url || "", this._initBody(t)
                }
                m.prototype.clone = function() {
                    return new m(this, {
                        body: this._bodyInit
                    })
                }, d.call(m.prototype), d.call(v.prototype), v.prototype.clone = function() {
                    return new v(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new u(this.headers),
                        url: this.url
                    })
                }, v.error = function() {
                    var t = new v(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t
                };
                var g = [301, 302, 303, 307, 308];
                v.redirect = function(t, e) {
                    if (-1 === g.indexOf(e)) throw RangeError("Invalid status code");
                    return new v(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }, t.DOMException = r.DOMException;
                try {
                    new t.DOMException
                } catch (e) {
                    t.DOMException = function(t, e) {
                        this.message = t, this.name = e;
                        var n = Error(t);
                        this.stack = n.stack
                    }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                }

                function w(n, r) {
                    return new Promise(function(i, o) {
                        var a = new m(n, r);
                        if (a.signal && a.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                        var s = new XMLHttpRequest;

                        function c() {
                            s.abort()
                        }
                        s.onload = function() {
                            var t, e, n = {
                                status: s.status,
                                statusText: s.statusText,
                                headers: (t = s.getAllResponseHeaders() || "", e = new u, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                    var n = t.split(":"),
                                        r = n.shift().trim();
                                    if (r) {
                                        var i = n.join(":").trim();
                                        e.append(r, i)
                                    }
                                }), e)
                            };
                            n.url = "responseURL" in s ? s.responseURL : n.headers.get("X-Request-URL"), i(new v("response" in s ? s.response : s.responseText, n))
                        }, s.onerror = function() {
                            o(TypeError("Network request failed"))
                        }, s.ontimeout = function() {
                            o(TypeError("Network request failed"))
                        }, s.onabort = function() {
                            o(new t.DOMException("Aborted", "AbortError"))
                        }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && e.blob && (s.responseType = "blob"), a.headers.forEach(function(t, e) {
                            s.setRequestHeader(e, t)
                        }), a.signal && (a.signal.addEventListener("abort", c), s.onreadystatechange = function() {
                            4 === s.readyState && a.signal.removeEventListener("abort", c)
                        }), s.send(void 0 === a._bodyInit ? null : a._bodyInit)
                    })
                }
                w.polyfill = !0, r.fetch || (r.fetch = w, r.Headers = u, r.Request = m, r.Response = v), t.Headers = u, t.Request = m, t.Response = v, t.fetch = w, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            })({}), r.fetch.ponyfill = !0, delete r.fetch.polyfill, (e = r.fetch).default = r.fetch, e.fetch = r.fetch, e.Headers = r.Headers, e.Request = r.Request, e.Response = r.Response, t.exports = e
        },
        64700: function(t, e, n) {
            var r, i = n(2558);
            ! function() {
                "use strict";
                var o = "input is invalid type",
                    a = !0,
                    s = window;
                s.JS_SHA3_NO_WINDOW && (a = !1);
                var u = !a && "object" == typeof self;
                !s.JS_SHA3_NO_NODE_JS && "object" == typeof i && i.versions && i.versions.node ? s = n.g : u && (s = self);
                var c = !s.JS_SHA3_NO_COMMON_JS && t.exports,
                    l = n.amdO,
                    h = !s.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    f = "0123456789abcdef".split(""),
                    d = [4, 1024, 262144, 67108864],
                    p = [0, 8, 16, 24],
                    m = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    y = [224, 256, 384, 512],
                    v = [128, 256],
                    g = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    w = {
                        128: 168,
                        256: 136
                    };
                (s.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), h && (s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var b = function(t, e, n) {
                        return function(r) {
                            return new B(t, e, t).update(r)[n]()
                        }
                    }, k = function(t, e, n) {
                        return function(r, i) {
                            return new B(t, e, i).update(r)[n]()
                        }
                    }, M = function(t, e, n) {
                        return function(e, r, i, o) {
                            return C["cshake" + t].update(e, r, i, o)[n]()
                        }
                    }, E = function(t, e, n) {
                        return function(e, r, i, o) {
                            return C["kmac" + t].update(e, r, i, o)[n]()
                        }
                    }, _ = function(t, e, n, r) {
                        for (var i = 0; i < g.length; ++i) {
                            var o = g[i];
                            t[o] = e(n, r, o)
                        }
                        return t
                    }, A = function(t, e) {
                        var n = b(t, e, "hex");
                        return n.create = function() {
                            return new B(t, e, t)
                        }, n.update = function(t) {
                            return n.create().update(t)
                        }, _(n, b, t, e)
                    }, S = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: y,
                        createMethod: A
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: y,
                        createMethod: A
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: v,
                        createMethod: function(t, e) {
                            var n = k(t, e, "hex");
                            return n.create = function(n) {
                                return new B(t, e, n)
                            }, n.update = function(t, e) {
                                return n.create(e).update(t)
                            }, _(n, k, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: d,
                        bits: v,
                        createMethod: function(t, e) {
                            var n = w[t],
                                r = M(t, e, "hex");
                            return r.create = function(r, i, o) {
                                return i || o ? new B(t, e, r).bytepad([i, o], n) : C["shake" + t].create(r)
                            }, r.update = function(t, e, n, i) {
                                return r.create(e, n, i).update(t)
                            }, _(r, M, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: d,
                        bits: v,
                        createMethod: function(t, e) {
                            var n = w[t],
                                r = E(t, e, "hex");
                            return r.create = function(r, i, o) {
                                return new j(t, e, i).bytepad(["KMAC", o], n).bytepad([r], n)
                            }, r.update = function(t, e, n, i) {
                                return r.create(t, n, i).update(e)
                            }, _(r, E, t, e)
                        }
                    }], C = {}, N = [], O = 0; O < S.length; ++O)
                    for (var x = S[O], R = x.bits, I = 0; I < R.length; ++I) {
                        var T = x.name + "_" + R[I];
                        if (N.push(T), C[T] = x.createMethod(R[I], x.padding), "sha3" !== x.name) {
                            var P = x.name + R[I];
                            N.push(P), C[P] = C[T]
                        }
                    }

                function B(t, e, n) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = n, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
                    for (var r = 0; r < 50; ++r) this.s[r] = 0
                }

                function j(t, e, n) {
                    B.call(this, t, e, n)
                }
                B.prototype.update = function(t) {
                    if (this.finalized) throw Error("finalize already called");
                    var e, n = typeof t;
                    if ("string" !== n) {
                        if ("object" === n) {
                            if (null === t) throw Error(o);
                            if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t))) throw Error(o)
                        } else throw Error(o);
                        e = !0
                    }
                    for (var r, i, a = this.blocks, s = this.byteCount, u = t.length, c = this.blockCount, l = 0, f = this.s; l < u;) {
                        if (this.reset)
                            for (r = 1, this.reset = !1, a[0] = this.block; r < c + 1; ++r) a[r] = 0;
                        if (e)
                            for (r = this.start; l < u && r < s; ++l) a[r >> 2] |= t[l] << p[3 & r++];
                        else
                            for (r = this.start; l < u && r < s; ++l)(i = t.charCodeAt(l)) < 128 ? a[r >> 2] |= i << p[3 & r++] : (i < 2048 ? a[r >> 2] |= (192 | i >> 6) << p[3 & r++] : (i < 55296 || i >= 57344 ? a[r >> 2] |= (224 | i >> 12) << p[3 & r++] : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++l)), a[r >> 2] |= (240 | i >> 18) << p[3 & r++], a[r >> 2] |= (128 | i >> 12 & 63) << p[3 & r++]), a[r >> 2] |= (128 | i >> 6 & 63) << p[3 & r++]), a[r >> 2] |= (128 | 63 & i) << p[3 & r++]);
                        if (this.lastByteIndex = r, r >= s) {
                            for (this.start = r - s, this.block = a[c], r = 0; r < c; ++r) f[r] ^= a[r];
                            D(f), this.reset = !0
                        } else this.start = r
                    }
                    return this
                }, B.prototype.encode = function(t, e) {
                    var n = 255 & t,
                        r = 1,
                        i = [n];
                    for (t >>= 8, n = 255 & t; n > 0;) i.unshift(n), t >>= 8, n = 255 & t, ++r;
                    return e ? i.push(r) : i.unshift(r), this.update(i), i.length
                }, B.prototype.encodeString = function(t) {
                    var e, n = typeof t;
                    if ("string" !== n) {
                        if ("object" === n) {
                            if (null === t) throw Error(o);
                            if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t))) throw Error(o)
                        } else throw Error(o);
                        e = !0
                    }
                    var r = 0,
                        i = t.length;
                    if (e) r = i;
                    else
                        for (var a = 0; a < t.length; ++a) {
                            var s = t.charCodeAt(a);
                            s < 128 ? r += 1 : s < 2048 ? r += 2 : s < 55296 || s >= 57344 ? r += 3 : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++a)), r += 4)
                        }
                    return r += this.encode(8 * r), this.update(t), r
                }, B.prototype.bytepad = function(t, e) {
                    for (var n = this.encode(e), r = 0; r < t.length; ++r) n += this.encodeString(t[r]);
                    var i = e - n % e,
                        o = [];
                    return o.length = i, this.update(o), this
                }, B.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            n = this.blockCount,
                            r = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (e = 1, t[0] = t[n]; e < n + 1; ++e) t[e] = 0;
                        for (t[n - 1] |= 2147483648, e = 0; e < n; ++e) r[e] ^= t[e];
                        D(r)
                    }
                }, B.prototype.toString = B.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, n = this.s, r = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = ""; a < r;) {
                        for (o = 0; o < e && a < r; ++o, ++a) s += f[(t = n[o]) >> 4 & 15] + f[15 & t] + f[t >> 12 & 15] + f[t >> 8 & 15] + f[t >> 20 & 15] + f[t >> 16 & 15] + f[t >> 28 & 15] + f[t >> 24 & 15];
                        a % e == 0 && (D(n), o = 0)
                    }
                    return i && (s += f[(t = n[o]) >> 4 & 15] + f[15 & t], i > 1 && (s += f[t >> 12 & 15] + f[t >> 8 & 15]), i > 2 && (s += f[t >> 20 & 15] + f[t >> 16 & 15])), s
                }, B.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        n = this.s,
                        r = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        a = 0,
                        s = this.outputBits >> 3;
                    t = new ArrayBuffer(i ? r + 1 << 2 : s);
                    for (var u = new Uint32Array(t); a < r;) {
                        for (o = 0; o < e && a < r; ++o, ++a) u[a] = n[o];
                        a % e == 0 && D(n)
                    }
                    return i && (u[o] = n[o], t = t.slice(0, s)), t
                }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.digest = B.prototype.array = function() {
                    this.finalize();
                    for (var t, e, n = this.blockCount, r = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, u = []; s < i;) {
                        for (a = 0; a < n && s < i; ++a, ++s) t = s << 2, e = r[a], u[t] = 255 & e, u[t + 1] = e >> 8 & 255, u[t + 2] = e >> 16 & 255, u[t + 3] = e >> 24 & 255;
                        s % n == 0 && D(r)
                    }
                    return o && (t = s << 2, e = r[a], u[t] = 255 & e, o > 1 && (u[t + 1] = e >> 8 & 255), o > 2 && (u[t + 2] = e >> 16 & 255)), u
                }, j.prototype = new B, j.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), B.prototype.finalize.call(this)
                };
                var D = function(t) {
                    var e, n, r, i, o, a, s, u, c, l, h, f, d, p, y, v, g, w, b, k, M, E, _, A, S, C, N, O, x, R, I, T, P, B, j, D, L, U, Z, F, W, z, V, H, G, q, J, Q, K, Y, X, $, tt, te, tn, tr, ti, to, ta, ts, tu, tc, tl;
                    for (r = 0; r < 48; r += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], a = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], c = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], f = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = f ^ (a << 1 | s >>> 31), n = d ^ (s << 1 | a >>> 31), t[0] ^= e, t[1] ^= n, t[10] ^= e, t[11] ^= n, t[20] ^= e, t[21] ^= n, t[30] ^= e, t[31] ^= n, t[40] ^= e, t[41] ^= n, e = i ^ (u << 1 | c >>> 31), n = o ^ (c << 1 | u >>> 31), t[2] ^= e, t[3] ^= n, t[12] ^= e, t[13] ^= n, t[22] ^= e, t[23] ^= n, t[32] ^= e, t[33] ^= n, t[42] ^= e, t[43] ^= n, e = a ^ (l << 1 | h >>> 31), n = s ^ (h << 1 | l >>> 31), t[4] ^= e, t[5] ^= n, t[14] ^= e, t[15] ^= n, t[24] ^= e, t[25] ^= n, t[34] ^= e, t[35] ^= n, t[44] ^= e, t[45] ^= n, e = u ^ (f << 1 | d >>> 31), n = c ^ (d << 1 | f >>> 31), t[6] ^= e, t[7] ^= n, t[16] ^= e, t[17] ^= n, t[26] ^= e, t[27] ^= n, t[36] ^= e, t[37] ^= n, t[46] ^= e, t[47] ^= n, e = l ^ (i << 1 | o >>> 31), n = h ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= n, t[18] ^= e, t[19] ^= n, t[28] ^= e, t[29] ^= n, t[38] ^= e, t[39] ^= n, t[48] ^= e, t[49] ^= n, p = t[0], y = t[1], q = t[11] << 4 | t[10] >>> 28, J = t[10] << 4 | t[11] >>> 28, O = t[20] << 3 | t[21] >>> 29, x = t[21] << 3 | t[20] >>> 29, ts = t[31] << 9 | t[30] >>> 23, tu = t[30] << 9 | t[31] >>> 23, z = t[40] << 18 | t[41] >>> 14, V = t[41] << 18 | t[40] >>> 14, B = t[2] << 1 | t[3] >>> 31, j = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, g = t[12] << 12 | t[13] >>> 20, Q = t[22] << 10 | t[23] >>> 22, K = t[23] << 10 | t[22] >>> 22, R = t[33] << 13 | t[32] >>> 19, I = t[32] << 13 | t[33] >>> 19, tc = t[42] << 2 | t[43] >>> 30, tl = t[43] << 2 | t[42] >>> 30, te = t[5] << 30 | t[4] >>> 2, tn = t[4] << 30 | t[5] >>> 2, D = t[14] << 6 | t[15] >>> 26, L = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, Y = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, T = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, A = t[6] << 28 | t[7] >>> 4, S = t[7] << 28 | t[6] >>> 4, tr = t[17] << 23 | t[16] >>> 9, ti = t[16] << 23 | t[17] >>> 9, U = t[26] << 25 | t[27] >>> 7, Z = t[27] << 25 | t[26] >>> 7, k = t[36] << 21 | t[37] >>> 11, M = t[37] << 21 | t[36] >>> 11, $ = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, H = t[8] << 27 | t[9] >>> 5, G = t[9] << 27 | t[8] >>> 5, C = t[18] << 20 | t[19] >>> 12, N = t[19] << 20 | t[18] >>> 12, to = t[29] << 7 | t[28] >>> 25, ta = t[28] << 7 | t[29] >>> 25, F = t[38] << 8 | t[39] >>> 24, W = t[39] << 8 | t[38] >>> 24, E = t[48] << 14 | t[49] >>> 18, _ = t[49] << 14 | t[48] >>> 18, t[0] = p ^ ~v & w, t[1] = y ^ ~g & b, t[10] = A ^ ~C & O, t[11] = S ^ ~N & x, t[20] = B ^ ~D & U, t[21] = j ^ ~L & Z, t[30] = H ^ ~q & Q, t[31] = G ^ ~J & K, t[40] = te ^ ~tr & to, t[41] = tn ^ ~ti & ta, t[2] = v ^ ~w & k, t[3] = g ^ ~b & M, t[12] = C ^ ~O & R, t[13] = N ^ ~x & I, t[22] = D ^ ~U & F, t[23] = L ^ ~Z & W, t[32] = q ^ ~Q & Y, t[33] = J ^ ~K & X, t[42] = tr ^ ~to & ts, t[43] = ti ^ ~ta & tu, t[4] = w ^ ~k & E, t[5] = b ^ ~M & _, t[14] = O ^ ~R & T, t[15] = x ^ ~I & P, t[24] = U ^ ~F & z, t[25] = Z ^ ~W & V, t[34] = Q ^ ~Y & $, t[35] = K ^ ~X & tt, t[44] = to ^ ~ts & tc, t[45] = ta ^ ~tu & tl, t[6] = k ^ ~E & p, t[7] = M ^ ~_ & y, t[16] = R ^ ~T & A, t[17] = I ^ ~P & S, t[26] = F ^ ~z & B, t[27] = W ^ ~V & j, t[36] = Y ^ ~$ & H, t[37] = X ^ ~tt & G, t[46] = ts ^ ~tc & te, t[47] = tu ^ ~tl & tn, t[8] = E ^ ~p & v, t[9] = _ ^ ~y & g, t[18] = T ^ ~A & C, t[19] = P ^ ~S & N, t[28] = z ^ ~B & D, t[29] = V ^ ~j & L, t[38] = $ ^ ~H & q, t[39] = tt ^ ~G & J, t[48] = tc ^ ~te & tr, t[49] = tl ^ ~tn & ti, t[0] ^= m[r], t[1] ^= m[r + 1]
                };
                if (c) t.exports = C;
                else {
                    for (O = 0; O < N.length; ++O) s[N[O]] = C[N[O]];
                    l && void 0 !== (r = (function() {
                        return C
                    }).call(e, n, e, t)) && (t.exports = r)
                }
            }()
        },
        29029: function(t) {
            "use strict";
            t.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        89236: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r_
                },
                getProvider: function() {
                    return rE
                }
            });
            var r, i, o, a, s, u, c, l, h, f, d, p, m, y, v, g, w = n(89742),
                b = n(60675),
                k = n(27830);

            function M(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function E(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            M(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            M(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }

            function _(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function A(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), r.forEach(function(e) {
                        var r;
                        r = n[e], e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    })
                }
                return t
            }

            function S(t, e) {
                return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(e)).forEach(function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }), t
            }

            function C(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }

            function N(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var O = Object.defineProperty,
                x = function(t, e, n) {
                    var r;
                    return (r = (void 0 === e ? "undefined" : C(e)) != "symbol" ? e + "" : e) in t ? O(t, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[r] = n, n
                },
                R = {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                },
                I = function() {
                    var t, e;

                    function n(t) {
                        if (! function(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }(this, n), this.url = t, x(this, "events", new k.v), x(this, "isAvailable", !1), x(this, "registering", !1), !(0, w.jK)(t)) throw Error("Provided URL is not compatible with HTTP connection: ".concat(t));
                        this.url = t
                    }
                    return t = [{
                        key: "connected",
                        get: function() {
                            return this.isAvailable
                        }
                    }, {
                        key: "connecting",
                        get: function() {
                            return this.registering
                        }
                    }, {
                        key: "open",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url,
                                e = this;
                            return E(function() {
                                return N(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, e.register(t)];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var t = this;
                            return E(function() {
                                return N(this, function(e) {
                                    if (!t.isAvailable) throw Error("Connection already closed");
                                    return t.onClose(), [2]
                                })
                            })()
                        }
                    }, {
                        key: "request",
                        value: function(t) {
                            var e = this;
                            return E(function() {
                                var n, r, i, o;
                                return N(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (w.cM.debug("HttpClient ~ request ~ payload:", t), e.isAvailable) return [3, 2];
                                            return [4, e.register()];
                                        case 1:
                                            a.sent(), a.label = 2;
                                        case 2:
                                            a.label = 3;
                                        case 3:
                                            return a.trys.push([3, 6, , 7]), n = (0, w.u4)(t), [4, b(e.url, S(A({}, R), {
                                                body: n
                                            }))];
                                        case 4:
                                            return [4, a.sent().json()];
                                        case 5:
                                            return i = "string" == typeof(r = a.sent()) ? (0, w.D6)(r) : r, [2, (w.cM.debug("HttpClient ~ request ~ result:", i), i)];
                                        case 6:
                                            return o = a.sent(), [2, e.formatError(t.id, o)];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "formatError",
                        value: function(t, e) {
                            var n = this.parseError(e),
                                r = n.message || n.toString();
                            return (0, w.RI)(t, r)
                        }
                    }, {
                        key: "register",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url,
                                e = this;
                            return E(function() {
                                var n, r, i;
                                return N(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!(0, w.jK)(t)) throw Error("Provided URL is not compatible with HTTP connection: ".concat(t));
                                            if (e.registering) return [2, new Promise(function(t, n) {
                                                e.events.once("register_error", function(t) {
                                                    n(t)
                                                }), e.events.once("open", function() {
                                                    if (C(e.isAvailable) > "u") return n(Error("HTTP connection is missing or invalid"));
                                                    t()
                                                })
                                            })];
                                            e.url = t, e.registering = !0, o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), n = (0, w.u4)({
                                                id: 1,
                                                jsonrpc: "2.0",
                                                method: "test",
                                                params: []
                                            }), [4, b(t, S(A({}, R), {
                                                body: n
                                            }))];
                                        case 2:
                                            return o.sent(), e.onOpen(), [3, 4];
                                        case 3:
                                            throw r = o.sent(), i = e.parseError(r), e.events.emit("register_error", i), e.onClose(), i;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "onOpen",
                        value: function() {
                            this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                        }
                    }, {
                        key: "onClose",
                        value: function() {
                            this.isAvailable = !1, this.registering = !1, this.events.emit("open")
                        }
                    }, {
                        key: "parseError",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                            return (0, w.CX)(t, e, "HTTP")
                        }
                    }], _(n.prototype, t), e && _(n, e), n
                }(),
                T = n(38658),
                P = n(43862),
                B = n(15221),
                j = n(48572);

            function D(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return L(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(t, e)
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function L(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var U = Object.defineProperty,
                Z = Object.getOwnPropertySymbols,
                F = Object.prototype.hasOwnProperty,
                W = Object.prototype.propertyIsEnumerable,
                z = function(t, e, n) {
                    return e in t ? U(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[e] = n
                },
                V = function(t, e) {
                    for (var n in e || (e = {})) F.call(e, n) && z(t, n, e[n]);
                    if (Z) {
                        var r, i = D(Z(e));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var n = r.value;
                                W.call(e, n) && z(t, n, e[n])
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                    }
                    return t
                },
                H = function(t, e) {
                    var n = {};
                    for (var r in t) F.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                    if (null != t && Z) {
                        var i, o = D(Z(t));
                        try {
                            for (o.s(); !(i = o.n()).done;) {
                                var r = i.value;
                                0 > e.indexOf(r) && W.call(t, r) && (n[r] = t[r])
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    }
                    return n
                };
            ! function(t) {
                var e = function() {
                    function e(t, n, r, o) {
                        if ((0, B.Z)(this, e), this.version = t, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version value out of range");
                        if (o < -1 || o > 7) throw RangeError("Mask value out of range");
                        this.size = 4 * t + 17;
                        for (var a = [], s = 0; s < this.size; s++) a.push(!1);
                        for (var u = 0; u < this.size; u++) this.modules.push(a.slice()), this.isFunction.push(a.slice());
                        this.drawFunctionPatterns();
                        var c = this.addEccAndInterleave(r);
                        if (this.drawCodewords(c), -1 == o)
                            for (var l = 1e9, h = 0; h < 8; h++) {
                                this.applyMask(h), this.drawFormatBits(h);
                                var f = this.getPenaltyScore();
                                f < l && (o = h, l = f), this.applyMask(h)
                            }
                        i(0 <= o && o <= 7), this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = []
                    }
                    return (0, j.Z)(e, [{
                        key: "getModule",
                        value: function(t, e) {
                            return 0 <= t && t < this.size && 0 <= e && e < this.size && this.modules[e][t]
                        }
                    }, {
                        key: "getModules",
                        value: function() {
                            return this.modules
                        }
                    }, {
                        key: "drawFunctionPatterns",
                        value: function() {
                            for (var t = 0; t < this.size; t++) this.setFunctionModule(6, t, t % 2 == 0), this.setFunctionModule(t, 6, t % 2 == 0);
                            this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
                            for (var e = this.getAlignmentPatternPositions(), n = e.length, r = 0; r < n; r++)
                                for (var i = 0; i < n; i++) 0 == r && 0 == i || 0 == r && i == n - 1 || r == n - 1 && 0 == i || this.drawAlignmentPattern(e[r], e[i]);
                            this.drawFormatBits(0), this.drawVersion()
                        }
                    }, {
                        key: "drawFormatBits",
                        value: function(t) {
                            for (var e = this.errorCorrectionLevel.formatBits << 3 | t, n = e, o = 0; o < 10; o++) n = n << 1 ^ (n >>> 9) * 1335;
                            var a = (e << 10 | n) ^ 21522;
                            i(a >>> 15 == 0);
                            for (var s = 0; s <= 5; s++) this.setFunctionModule(8, s, r(a, s));
                            this.setFunctionModule(8, 7, r(a, 6)), this.setFunctionModule(8, 8, r(a, 7)), this.setFunctionModule(7, 8, r(a, 8));
                            for (var u = 9; u < 15; u++) this.setFunctionModule(14 - u, 8, r(a, u));
                            for (var c = 0; c < 8; c++) this.setFunctionModule(this.size - 1 - c, 8, r(a, c));
                            for (var l = 8; l < 15; l++) this.setFunctionModule(8, this.size - 15 + l, r(a, l));
                            this.setFunctionModule(8, this.size - 8, !0)
                        }
                    }, {
                        key: "drawVersion",
                        value: function() {
                            if (!(this.version < 7)) {
                                for (var t = this.version, e = 0; e < 12; e++) t = t << 1 ^ (t >>> 11) * 7973;
                                var n = this.version << 12 | t;
                                i(n >>> 18 == 0);
                                for (var o = 0; o < 18; o++) {
                                    var a = r(n, o),
                                        s = this.size - 11 + o % 3,
                                        u = Math.floor(o / 3);
                                    this.setFunctionModule(s, u, a), this.setFunctionModule(u, s, a)
                                }
                            }
                        }
                    }, {
                        key: "drawFinderPattern",
                        value: function(t, e) {
                            for (var n = -4; n <= 4; n++)
                                for (var r = -4; r <= 4; r++) {
                                    var i = Math.max(Math.abs(r), Math.abs(n)),
                                        o = t + r,
                                        a = e + n;
                                    0 <= o && o < this.size && 0 <= a && a < this.size && this.setFunctionModule(o, a, 2 != i && 4 != i)
                                }
                        }
                    }, {
                        key: "drawAlignmentPattern",
                        value: function(t, e) {
                            for (var n = -2; n <= 2; n++)
                                for (var r = -2; r <= 2; r++) this.setFunctionModule(t + r, e + n, 1 != Math.max(Math.abs(r), Math.abs(n)))
                        }
                    }, {
                        key: "setFunctionModule",
                        value: function(t, e, n) {
                            this.modules[e][t] = n, this.isFunction[e][t] = !0
                        }
                    }, {
                        key: "addEccAndInterleave",
                        value: function(t) {
                            var n = this.version,
                                r = this.errorCorrectionLevel;
                            if (t.length != e.getNumDataCodewords(n, r)) throw RangeError("Invalid argument");
                            for (var o = e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n], a = e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n], s = Math.floor(e.getNumRawDataModules(n) / 8), u = o - s % o, c = Math.floor(s / o), l = [], h = e.reedSolomonComputeDivisor(a), f = 0, d = 0; f < o; f++) {
                                var p = t.slice(d, d + c - a + (f < u ? 0 : 1));
                                d += p.length;
                                var m = e.reedSolomonComputeRemainder(p, h);
                                f < u && p.push(0), l.push(p.concat(m))
                            }
                            for (var y = [], v = function(t) {
                                    l.forEach(function(e, n) {
                                        (t != c - a || n >= u) && y.push(e[t])
                                    })
                                }, g = 0; g < l[0].length; g++) v(g);
                            return i(y.length == s), y
                        }
                    }, {
                        key: "drawCodewords",
                        value: function(t) {
                            if (t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)) throw RangeError("Invalid argument");
                            for (var n = 0, o = this.size - 1; o >= 1; o -= 2) {
                                6 == o && (o = 5);
                                for (var a = 0; a < this.size; a++)
                                    for (var s = 0; s < 2; s++) {
                                        var u = o - s,
                                            c = (o + 1 & 2) == 0 ? this.size - 1 - a : a;
                                        !this.isFunction[c][u] && n < 8 * t.length && (this.modules[c][u] = r(t[n >>> 3], 7 - (7 & n)), n++)
                                    }
                            }
                            i(n == 8 * t.length)
                        }
                    }, {
                        key: "applyMask",
                        value: function(t) {
                            if (t < 0 || t > 7) throw RangeError("Mask value out of range");
                            for (var e = 0; e < this.size; e++)
                                for (var n = 0; n < this.size; n++) {
                                    var r = void 0;
                                    switch (t) {
                                        case 0:
                                            r = (n + e) % 2 == 0;
                                            break;
                                        case 1:
                                            r = e % 2 == 0;
                                            break;
                                        case 2:
                                            r = n % 3 == 0;
                                            break;
                                        case 3:
                                            r = (n + e) % 3 == 0;
                                            break;
                                        case 4:
                                            r = (Math.floor(n / 3) + Math.floor(e / 2)) % 2 == 0;
                                            break;
                                        case 5:
                                            r = n * e % 2 + n * e % 3 == 0;
                                            break;
                                        case 6:
                                            r = (n * e % 2 + n * e % 3) % 2 == 0;
                                            break;
                                        case 7:
                                            r = ((n + e) % 2 + n * e % 3) % 2 == 0;
                                            break;
                                        default:
                                            throw Error("Unreachable")
                                    }!this.isFunction[e][n] && r && (this.modules[e][n] = !this.modules[e][n])
                                }
                        }
                    }, {
                        key: "getPenaltyScore",
                        value: function() {
                            for (var t = 0, n = 0; n < this.size; n++) {
                                for (var r = !1, o = 0, a = [0, 0, 0, 0, 0, 0, 0], s = 0; s < this.size; s++) this.modules[n][s] == r ? 5 == ++o ? t += e.PENALTY_N1 : o > 5 && t++ : (this.finderPenaltyAddHistory(o, a), r || (t += this.finderPenaltyCountPatterns(a) * e.PENALTY_N3), r = this.modules[n][s], o = 1);
                                t += this.finderPenaltyTerminateAndCount(r, o, a) * e.PENALTY_N3
                            }
                            for (var u = 0; u < this.size; u++) {
                                for (var c = !1, l = 0, h = [0, 0, 0, 0, 0, 0, 0], f = 0; f < this.size; f++) this.modules[f][u] == c ? 5 == ++l ? t += e.PENALTY_N1 : l > 5 && t++ : (this.finderPenaltyAddHistory(l, h), c || (t += this.finderPenaltyCountPatterns(h) * e.PENALTY_N3), c = this.modules[f][u], l = 1);
                                t += this.finderPenaltyTerminateAndCount(c, l, h) * e.PENALTY_N3
                            }
                            for (var d = 0; d < this.size - 1; d++)
                                for (var p = 0; p < this.size - 1; p++) {
                                    var m = this.modules[d][p];
                                    m == this.modules[d][p + 1] && m == this.modules[d + 1][p] && m == this.modules[d + 1][p + 1] && (t += e.PENALTY_N2)
                                }
                            var y, v = 0,
                                g = D(this.modules);
                            try {
                                for (g.s(); !(y = g.n()).done;) v = y.value.reduce(function(t, e) {
                                    return t + (e ? 1 : 0)
                                }, v)
                            } catch (t) {
                                g.e(t)
                            } finally {
                                g.f()
                            }
                            var w = this.size * this.size,
                                b = Math.ceil(Math.abs(20 * v - 10 * w) / w) - 1;
                            return i(0 <= b && b <= 9), i(0 <= (t += b * e.PENALTY_N4) && t <= 2568888), t
                        }
                    }, {
                        key: "getAlignmentPatternPositions",
                        value: function() {
                            if (1 == this.version) return [];
                            for (var t = Math.floor(this.version / 7) + 2, e = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * t - 2)), n = [6], r = this.size - 7; n.length < t; r -= e) n.splice(1, 0, r);
                            return n
                        }
                    }, {
                        key: "finderPenaltyCountPatterns",
                        value: function(t) {
                            var e = t[1];
                            i(e <= 3 * this.size);
                            var n = e > 0 && t[2] == e && t[3] == 3 * e && t[4] == e && t[5] == e;
                            return (n && t[0] >= 4 * e && t[6] >= e ? 1 : 0) + (n && t[6] >= 4 * e && t[0] >= e ? 1 : 0)
                        }
                    }, {
                        key: "finderPenaltyTerminateAndCount",
                        value: function(t, e, n) {
                            return t && (this.finderPenaltyAddHistory(e, n), e = 0), e += this.size, this.finderPenaltyAddHistory(e, n), this.finderPenaltyCountPatterns(n)
                        }
                    }, {
                        key: "finderPenaltyAddHistory",
                        value: function(t, e) {
                            0 == e[0] && (t += this.size), e.pop(), e.unshift(t)
                        }
                    }], [{
                        key: "encodeText",
                        value: function(n, r) {
                            var i = t.QrSegment.makeSegments(n);
                            return e.encodeSegments(i, r)
                        }
                    }, {
                        key: "encodeBinary",
                        value: function(n, r) {
                            var i = t.QrSegment.makeBytes(n);
                            return e.encodeSegments([i], r)
                        }
                    }, {
                        key: "encodeSegments",
                        value: function(t, r) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 40,
                                u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
                                c = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                            if (!(e.MIN_VERSION <= a && a <= s && s <= e.MAX_VERSION) || u < -1 || u > 7) throw RangeError("Invalid value");
                            for (m = a;; m++) {
                                var l = 8 * e.getNumDataCodewords(m, r),
                                    h = o.getTotalBits(t, m);
                                if (h <= l) {
                                    y = h;
                                    break
                                }
                                if (m >= s) throw RangeError("Data too long")
                            }
                            for (var f = 0, d = [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH]; f < d.length; f++) {
                                var p = d[f];
                                c && y <= 8 * e.getNumDataCodewords(m, p) && (r = p)
                            }
                            var m, y, v, g = [],
                                w = D(t);
                            try {
                                for (w.s(); !(v = w.n()).done;) {
                                    var b = v.value;
                                    n(b.mode.modeBits, 4, g), n(b.numChars, b.mode.numCharCountBits(m), g);
                                    var k, M = D(b.getData());
                                    try {
                                        for (M.s(); !(k = M.n()).done;) {
                                            var E = k.value;
                                            g.push(E)
                                        }
                                    } catch (t) {
                                        M.e(t)
                                    } finally {
                                        M.f()
                                    }
                                }
                            } catch (t) {
                                w.e(t)
                            } finally {
                                w.f()
                            }
                            i(g.length == y);
                            var _ = 8 * e.getNumDataCodewords(m, r);
                            i(g.length <= _), n(0, Math.min(4, _ - g.length), g), n(0, (8 - g.length % 8) % 8, g), i(g.length % 8 == 0);
                            for (var A = 236; g.length < _; A ^= 253) n(A, 8, g);
                            for (var S = []; 8 * S.length < g.length;) S.push(0);
                            return g.forEach(function(t, e) {
                                return S[e >>> 3] |= t << 7 - (7 & e)
                            }), new e(m, r, S, u)
                        }
                    }, {
                        key: "getNumRawDataModules",
                        value: function(t) {
                            if (t < e.MIN_VERSION || t > e.MAX_VERSION) throw RangeError("Version number out of range");
                            var n = (16 * t + 128) * t + 64;
                            if (t >= 2) {
                                var r = Math.floor(t / 7) + 2;
                                n -= (25 * r - 10) * r - 55, t >= 7 && (n -= 36)
                            }
                            return i(208 <= n && n <= 29648), n
                        }
                    }, {
                        key: "getNumDataCodewords",
                        value: function(t, n) {
                            return Math.floor(e.getNumRawDataModules(t) / 8) - e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] * e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]
                        }
                    }, {
                        key: "reedSolomonComputeDivisor",
                        value: function(t) {
                            if (t < 1 || t > 255) throw RangeError("Degree out of range");
                            for (var n = [], r = 0; r < t - 1; r++) n.push(0);
                            n.push(1);
                            for (var i = 1, o = 0; o < t; o++) {
                                for (var a = 0; a < n.length; a++) n[a] = e.reedSolomonMultiply(n[a], i), a + 1 < n.length && (n[a] ^= n[a + 1]);
                                i = e.reedSolomonMultiply(i, 2)
                            }
                            return n
                        }
                    }, {
                        key: "reedSolomonComputeRemainder",
                        value: function(t, n) {
                            var r, i = n.map(function(t) {
                                    return 0
                                }),
                                o = D(t);
                            try {
                                for (o.s(); !(r = o.n()).done;) ! function() {
                                    var t = r.value ^ i.shift();
                                    i.push(0), n.forEach(function(n, r) {
                                        return i[r] ^= e.reedSolomonMultiply(n, t)
                                    })
                                }()
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            return i
                        }
                    }, {
                        key: "reedSolomonMultiply",
                        value: function(t, e) {
                            if (t >>> 8 != 0 || e >>> 8 != 0) throw RangeError("Byte out of range");
                            for (var n = 0, r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285 ^ (e >>> r & 1) * t;
                            return i(n >>> 8 == 0), n
                        }
                    }]), e
                }();

                function n(t, e, n) {
                    if (e < 0 || e > 31 || t >>> e != 0) throw RangeError("Value out of range");
                    for (var r = e - 1; r >= 0; r--) n.push(t >>> r & 1)
                }

                function r(t, e) {
                    return (t >>> e & 1) != 0
                }

                function i(t) {
                    if (!t) throw Error("Assertion error")
                }
                e.MIN_VERSION = 1, e.MAX_VERSION = 40, e.PENALTY_N1 = 3, e.PENALTY_N2 = 3, e.PENALTY_N3 = 40, e.PENALTY_N4 = 10, e.ECC_CODEWORDS_PER_BLOCK = [
                    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
                    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
                ], e.NUM_ERROR_CORRECTION_BLOCKS = [
                    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
                    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
                    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
                    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
                ], t.QrCode = e;
                var o = function() {
                    function t(e, n, r) {
                        if ((0, B.Z)(this, t), this.mode = e, this.numChars = n, this.bitData = r, n < 0) throw RangeError("Invalid argument");
                        this.bitData = r.slice()
                    }
                    return (0, j.Z)(t, [{
                        key: "getData",
                        value: function() {
                            return this.bitData.slice()
                        }
                    }], [{
                        key: "makeBytes",
                        value: function(e) {
                            var r, i = [],
                                o = D(e);
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var a = r.value;
                                    n(a, 8, i)
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            return new t(t.Mode.BYTE, e.length, i)
                        }
                    }, {
                        key: "makeNumeric",
                        value: function(e) {
                            if (!t.isNumeric(e)) throw RangeError("String contains non-numeric characters");
                            for (var r = [], i = 0; i < e.length;) {
                                var o = Math.min(e.length - i, 3);
                                n(parseInt(e.substr(i, o), 10), 3 * o + 1, r), i += o
                            }
                            return new t(t.Mode.NUMERIC, e.length, r)
                        }
                    }, {
                        key: "makeAlphanumeric",
                        value: function(e) {
                            if (!t.isAlphanumeric(e)) throw RangeError("String contains unencodable characters in alphanumeric mode");
                            var r, i = [];
                            for (r = 0; r + 2 <= e.length; r += 2) {
                                var o = 45 * t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r));
                                n(o += t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r + 1)), 11, i)
                            }
                            return r < e.length && n(t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)), 6, i), new t(t.Mode.ALPHANUMERIC, e.length, i)
                        }
                    }, {
                        key: "makeSegments",
                        value: function(e) {
                            return "" == e ? [] : t.isNumeric(e) ? [t.makeNumeric(e)] : t.isAlphanumeric(e) ? [t.makeAlphanumeric(e)] : [t.makeBytes(t.toUtf8ByteArray(e))]
                        }
                    }, {
                        key: "makeEci",
                        value: function(e) {
                            var r = [];
                            if (e < 0) throw RangeError("ECI assignment value out of range");
                            if (e < 128) n(e, 8, r);
                            else if (e < 16384) n(2, 2, r), n(e, 14, r);
                            else if (e < 1e6) n(6, 3, r), n(e, 21, r);
                            else throw RangeError("ECI assignment value out of range");
                            return new t(t.Mode.ECI, 0, r)
                        }
                    }, {
                        key: "isNumeric",
                        value: function(e) {
                            return t.NUMERIC_REGEX.test(e)
                        }
                    }, {
                        key: "isAlphanumeric",
                        value: function(e) {
                            return t.ALPHANUMERIC_REGEX.test(e)
                        }
                    }, {
                        key: "getTotalBits",
                        value: function(t, e) {
                            var n, r = 0,
                                i = D(t);
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var o = n.value,
                                        a = o.mode.numCharCountBits(e);
                                    if (o.numChars >= 1 << a) return 1 / 0;
                                    r += 4 + a + o.bitData.length
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                            return r
                        }
                    }, {
                        key: "toUtf8ByteArray",
                        value: function(t) {
                            t = encodeURI(t);
                            for (var e = [], n = 0; n < t.length; n++) "%" != t.charAt(n) ? e.push(t.charCodeAt(n)) : (e.push(parseInt(t.substr(n + 1, 2), 16)), n += 2);
                            return e
                        }
                    }]), t
                }();
                o.NUMERIC_REGEX = /^[0-9]*$/, o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, o.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t.QrSegment = o
            }(p || (p = {})), i = (r = p || (p = {})).QrCode || (r.QrCode = {}), (o = (0, j.Z)(function t(e, n) {
                (0, B.Z)(this, t), this.ordinal = e, this.formatBits = n
            })).LOW = new o(0, 1), o.MEDIUM = new o(1, 0), o.QUARTILE = new o(2, 3), o.HIGH = new o(3, 2), i.Ecc = o, s = (a = p || (p = {})).QrSegment || (a.QrSegment = {}), (u = function() {
                function t(e, n) {
                    (0, B.Z)(this, t), this.modeBits = e, this.numBitsCharCount = n
                }
                return (0, j.Z)(t, [{
                    key: "numCharCountBits",
                    value: function(t) {
                        return this.numBitsCharCount[Math.floor((t + 7) / 17)]
                    }
                }]), t
            }()).NUMERIC = new u(1, [10, 12, 14]), u.ALPHANUMERIC = new u(2, [9, 11, 13]), u.BYTE = new u(4, [8, 16, 16]), u.KANJI = new u(8, [8, 10, 12]), u.ECI = new u(7, [0, 0, 0]), s.Mode = u;
            var G = p,
                q = {
                    L: G.QrCode.Ecc.LOW,
                    M: G.QrCode.Ecc.MEDIUM,
                    Q: G.QrCode.Ecc.QUARTILE,
                    H: G.QrCode.Ecc.HIGH
                };

            function J(t) {
                var e, n, r = t.value,
                    i = t.size,
                    o = void 0 === i ? 128 : i,
                    a = t.level,
                    s = t.bgColor,
                    u = t.fgColor,
                    c = t.includeMargin,
                    l = void 0 !== c && c,
                    h = t.imageSettings,
                    f = H(t, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]),
                    d = G.QrCode.encodeText(r, q[void 0 === a ? "L" : a]).getModules(),
                    p = l ? 4 : 0,
                    m = d.length + 2 * p,
                    y = function(t, e, n, r) {
                        if (null == r) return null;
                        var i = t.length + 2 * (n ? 4 : 0),
                            o = Math.floor(.1 * e),
                            a = i / e,
                            s = (r.width || o) * a,
                            u = (r.height || o) * a,
                            c = null == r.x ? t.length / 2 - s / 2 : r.x * a,
                            l = null == r.y ? t.length / 2 - u / 2 : r.y * a,
                            h = null;
                        if (r.excavate) {
                            var f = Math.floor(c),
                                d = Math.floor(l);
                            h = {
                                x: f,
                                y: d,
                                w: Math.ceil(s + c - f),
                                h: Math.ceil(u + l - d)
                            }
                        }
                        return {
                            x: c,
                            y: l,
                            h: u,
                            w: s,
                            excavation: h
                        }
                    }(d, o, l, h),
                    v = null;
                null != h && null != y && (null != y.excavation && (e = d, n = y.excavation, d = e.slice().map(function(t, e) {
                    return e < n.y || e >= n.y + n.h ? t : t.map(function(t, e) {
                        return (e < n.x || e >= n.x + n.w) && t
                    })
                })), v = T.createElement("image", {
                    xlinkHref: h.src,
                    height: y.h,
                    width: y.w,
                    x: y.x + p,
                    y: y.y + p,
                    preserveAspectRatio: "none"
                }));
                var g = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = [];
                    return t.forEach(function(t, r) {
                        var i = null;
                        t.forEach(function(o, a) {
                            if (!o && null !== i) {
                                n.push("M".concat(i + e, " ").concat(r + e, "h").concat(a - i, "v1H").concat(i + e, "z")), i = null;
                                return
                            }
                            if (a === t.length - 1) {
                                if (!o) return;
                                null === i ? n.push("M".concat(a + e, ",").concat(r + e, " h1v1H").concat(a + e, "z")) : n.push("M".concat(i + e, ",").concat(r + e, " h").concat(a + 1 - i, "v1H").concat(i + e, "z"));
                                return
                            }
                            o && null === i && (i = a)
                        })
                    }), n.join("")
                }(d, p);
                return T.createElement("svg", V({
                    height: o,
                    width: o,
                    viewBox: "0 0 ".concat(m, " ").concat(m)
                }, f), T.createElement("path", {
                    fill: void 0 === s ? "#FFFFFF" : s,
                    d: "M0,0 h".concat(m, "v").concat(m, "H0z"),
                    shapeRendering: "crispEdges"
                }), T.createElement("path", {
                    fill: void 0 === u ? "#000000" : u,
                    d: g,
                    shapeRendering: "crispEdges"
                }), v)
            }

            function Q(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function K(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function Y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), r.forEach(function(e) {
                        var r;
                        r = n[e], e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    })
                }
                return t
            }

            function X(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }

            function $(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n, r, i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != i) {
                        var o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (i = i.call(t); !(a = (n = i.next()).done) && (o.push(n.value), !e || o.length !== e); a = !0);
                        } catch (t) {
                            s = !0, r = t
                        } finally {
                            try {
                                a || null == i.return || i.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return Q(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Q(t, e)
                    }
                }(t, e) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function() {
                try {
                    new Path2D().addPath(new Path2D)
                } catch (t) {
                    return !1
                }
            }();
            var tt = "\n".concat("#binanceW3W-wrapper :is(.pointer-events-auto) {\n  pointer-events: auto;\n}\n\n#binanceW3W-wrapper :is(.fixed) {\n  position: fixed;\n}\n\n#binanceW3W-wrapper :is(.absolute) {\n  position: absolute;\n}\n\n#binanceW3W-wrapper :is(.relative) {\n  position: relative;\n}\n\n#binanceW3W-wrapper :is(.bottom-0) {\n  bottom: 0px;\n}\n\n#binanceW3W-wrapper :is(.left-0) {\n  left: 0px;\n}\n\n#binanceW3W-wrapper :is(.top-0) {\n  top: 0px;\n}\n\n#binanceW3W-wrapper :is(.m-auto) {\n  margin: auto;\n}\n\n#binanceW3W-wrapper :is(.mx-\\[4px\\]) {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n#binanceW3W-wrapper :is(.mb-4) {\n  margin-bottom: 1rem;\n}\n\n#binanceW3W-wrapper :is(.mb-6) {\n  margin-bottom: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.ml-1) {\n  margin-left: 0.25rem;\n}\n\n#binanceW3W-wrapper :is(.mt-6) {\n  margin-top: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.mt-\\[35px\\]) {\n  margin-top: 35px;\n}\n\n#binanceW3W-wrapper :is(.flex) {\n  display: flex;\n}\n\n#binanceW3W-wrapper :is(.grid) {\n  display: grid;\n}\n\n#binanceW3W-wrapper :is(.h-\\[200px\\]) {\n  height: 200px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[24px\\]) {\n  height: 24px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[40px\\]) {\n  height: 40px;\n}\n\n#binanceW3W-wrapper :is(.h-\\[52px\\]) {\n  height: 52px;\n}\n\n#binanceW3W-wrapper :is(.h-full) {\n  height: 100%;\n}\n\n#binanceW3W-wrapper :is(.w-\\[150px\\]) {\n  width: 150px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[200px\\]) {\n  width: 200px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[20px\\]) {\n  width: 20px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[24px\\]) {\n  width: 24px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[343px\\]) {\n  width: 343px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[60px\\]) {\n  width: 60px;\n}\n\n#binanceW3W-wrapper :is(.w-\\[75px\\]) {\n  width: 75px;\n}\n\n#binanceW3W-wrapper :is(.w-full) {\n  width: 100%;\n}\n\n#binanceW3W-wrapper :is(.transform) {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n#binanceW3W-wrapper :is(.cursor-pointer) {\n  cursor: pointer;\n}\n\n#binanceW3W-wrapper :is(.grid-flow-col) {\n  grid-auto-flow: column;\n}\n\n#binanceW3W-wrapper :is(.grid-cols-2) {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n#binanceW3W-wrapper :is(.items-center) {\n  align-items: center;\n}\n\n#binanceW3W-wrapper :is(.justify-end) {\n  justify-content: flex-end;\n}\n\n#binanceW3W-wrapper :is(.justify-center) {\n  justify-content: center;\n}\n\n#binanceW3W-wrapper :is(.justify-between) {\n  justify-content: space-between;\n}\n\n#binanceW3W-wrapper :is(.gap-x-4) {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n\n#binanceW3W-wrapper :is(.gap-y-2) {\n  row-gap: 0.5rem;\n}\n\n#binanceW3W-wrapper :is(.rounded) {\n  border-radius: 0.25rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-2xl) {\n  border-radius: 1rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-lg) {\n  border-radius: 0.5rem;\n}\n\n#binanceW3W-wrapper :is(.rounded-t-2xl) {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n\n#binanceW3W-wrapper :is(.border) {\n  border-width: 1px;\n}\n\n#binanceW3W-wrapper :is(.border-b) {\n  border-bottom-width: 1px;\n}\n\n#binanceW3W-wrapper :is(.border-gray-300) {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n#binanceW3W-wrapper :is(.bg-black\\/\\[\\.80\\]) {\n  background-color: rgb(0 0 0 / .80);\n}\n\n#binanceW3W-wrapper :is(.bg-white) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n#binanceW3W-wrapper :is(.p-\\[12px\\]) {\n  padding: 12px;\n}\n\n#binanceW3W-wrapper :is(.px-4) {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n#binanceW3W-wrapper :is(.px-6) {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.py-3) {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n#binanceW3W-wrapper :is(.py-4) {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n#binanceW3W-wrapper :is(.pb-6) {\n  padding-bottom: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.pt-\\[20px\\]) {\n  padding-top: 20px;\n}\n\n#binanceW3W-wrapper :is(.text-center) {\n  text-align: center;\n}\n\n#binanceW3W-wrapper :is(.text-base) {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n#binanceW3W-wrapper :is(.font-medium) {\n  font-weight: 500;\n}\n\n#binanceW3W-wrapper :is(.text-\\[\\#1E2329\\]) {\n  --tw-text-opacity: 1;\n  color: rgb(30 35 41 / var(--tw-text-opacity));\n}\n\n#binanceW3W-wrapper :is(.text-\\[\\#929AA5\\]) {\n  --tw-text-opacity: 1;\n  color: rgb(146 154 165 / var(--tw-text-opacity));\n}\n\n#binanceW3W-wrapper :is(.shadow-inner) {\n  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n#binanceW3W-wrapper :is(.duration-300) {\n  transition-duration: 300ms;\n}\n\n#binanceW3W-wrapper :is(.ease-in-out) {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#binanceW3W-wrapper :is(.will-change-auto) {\n  will-change: auto;\n}\n\n#binanceW3W-wrapper :is(.will-change-transform) {\n  will-change: transform;\n}\n\n.w3w-body3 {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n.w3w-subtitle1 {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.w3w-subtitle3 {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  /* 150% */\n}\n\n.w3w-caption2 {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n\n.w3w-t-black {\n  color: #0b0e11;\n}\n\n.w3w-t-brand {\n  color: #c99400;\n}\n\n.w3w-t-primary {\n  color: #202630;\n}\n\n.w3w-t-secondary {\n  color: #474d57;\n}\n\n.w3w-bg-primary {\n  background: #fcd535;\n}\n\n@media (min-width: 768px) {\n  .md\\:w3w-subtitle1 {\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 28px;\n  }\n\n  #binanceW3W-wrapper :is(.md\\:w-\\[400px\\]) {\n    width: 400px;\n  }\n\n  #binanceW3W-wrapper :is(.md\\:font-semibold) {\n    font-weight: 600;\n  }\n}\n\n@media (min-width: 1024px) {\n  #binanceW3W-wrapper :is(.lg\\:p-8) {\n    padding: 2rem;\n  }\n\n  #binanceW3W-wrapper :is(.lg\\:pt-6) {\n    padding-top: 1.5rem;\n  }\n\n  #binanceW3W-wrapper :is(.lg\\:text-xl) {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n", "\n\n:root {\n  --animation-duration: 300ms;\n}\n\n@keyframes w3w-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes w3w-fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.w3w-animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.w3w-fadeIn {\n  animation-name: w3w-fadeIn;\n}\n\n.w3w-fadeOut {\n  animation-name: w3w-fadeOut;\n}\n\n#binanceW3W-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n"),
                te = (0, T.createContext)({}),
                tn = "binanceW3W-wrapper",
                tr = "binanceW3W-qrcode-modal",
                ti = {
                    googlePlay: "https://app.appsflyer.com/com.binance.dev?pid=https%3A%2F%2Fwww.binance.com%2Fen&c=https%3A%2F%2Fwww.binance.com%2Fen",
                    appleStore: "https://app.appsflyer.com/id1436799971?pid=https%3A%2F%2Fwww.binance.com%2Fen&c=https%3A%2F%2Fwww.binance.com%2Fen"
                },
                to = "data:image/svg+xml;base64,".concat("PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iMTAiIGZpbGw9IiMxNDE1MUEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTIgMjhMMTUuNjEyOSAyNC4zODcxTDE5LjIyNTggMjhMMTUuNjEyOSAzMS42MTI5TDEyIDI4WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMTguMTkzNSAyMS44MDY1TDI4IDEyTDM3LjgwNjUgMjEuODA2NUwzNC4xOTM2IDI1LjQxOTRMMjggMTkuMjI1OEwyMS44MDY1IDI1LjQxOTRMMTguMTkzNSAyMS44MDY1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjQuMzg3MSAyOEwyOCAyNC4zODcxTDMxLjYxMjkgMjhMMjggMzEuNjEyOUwyNC4zODcxIDI4WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMjEuODA2NSAzMC41ODA2TDE4LjE5MzUgMzQuMTkzNUwyOCA0NEwzNy44MDY1IDM0LjE5MzVMMzQuMTkzNiAzMC41ODA2TDI4IDM2Ljc3NDJMMjEuODA2NSAzMC41ODA2WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNMzYuNzc0MiAyOEw0MC4zODcxIDI0LjM4NzFMNDQgMjhMNDAuMzg3MSAzMS42MTI5TDM2Ljc3NDIgMjhaIiBmaWxsPSIjRjBCOTBCIi8+Cjwvc3ZnPgo="),
                ta = function() {
                    var t = $((0, T.useState)(), 2),
                        e = t[0],
                        n = t[1],
                        r = $((0, T.useState)(!1), 2),
                        i = r[0],
                        o = r[1];
                    return (0, T.useEffect)(function() {
                        var t = (0, w.W7)(),
                            e = (0, w.CN)();
                        n(t), o(e)
                    }, []), {
                        isMobile: e,
                        isAndroid: i
                    }
                },
                ts = {
                    en: {
                        "sdk-download-android": "Download for Android",
                        "sdk-connect": "Connect",
                        "sdk-download-ios": "Download for iOS",
                        "sdk-install": "Install",
                        "sdk-modal-instruct-1": "1. Open Binance app",
                        "sdk-modal-instruct-2": "2. Tap {{icon}} on Home Screen",
                        "sdk-modal-title": "Connect With Binance",
                        "sdk-no-app": "Don’t have the Binance app yet?"
                    },
                    ar: {
                        "sdk-download-android": "تنزيل لنظام Android",
                        "sdk-connect": "اتصال",
                        "sdk-download-ios": "تنزيل لنظام iOS",
                        "sdk-install": "تثبيت",
                        "sdk-modal-instruct-1": "1. افتح تطبيق Binance",
                        "sdk-modal-instruct-2": "2. اضغط {{icon}} على الشاشة الرئيسية",
                        "sdk-modal-title": "الربط مع Binance (بينانس)",
                        "sdk-no-app": "ليس لديك تطبيق Binance حتّى الآن؟"
                    },
                    "bg-BG": {
                        "sdk-download-android": "Изтегляне за Android",
                        "sdk-connect": "Свържи",
                        "sdk-download-ios": "Изтегляне за iOS",
                        "sdk-install": "Инсталиране",
                        "sdk-modal-instruct-1": "1. Отворете приложението Binance",
                        "sdk-modal-instruct-2": "2. Докоснете {{icon}} на началния екран",
                        "sdk-modal-title": "Свържете се с Binance",
                        "sdk-no-app": "Все още нямате приложението Binance?"
                    },
                    "zh-CN": {
                        "sdk-download-android": "下载安卓版",
                        "sdk-connect": "关联",
                        "sdk-download-ios": "下载iOS版",
                        "sdk-install": "安装",
                        "sdk-modal-instruct-1": "1.打开币安App",
                        "sdk-modal-instruct-2": "2.点击主屏幕的{{icon}}",
                        "sdk-modal-title": "关联币安",
                        "sdk-no-app": "尚未安装币安App？"
                    },
                    "zh-TW": {
                        "sdk-download-android": "Android 下載",
                        "sdk-connect": "連接",
                        "sdk-download-ios": "iOS 下載",
                        "sdk-install": "安裝",
                        "sdk-modal-instruct-1": "1. 開啟幣安 App",
                        "sdk-modal-instruct-2": "2. 在首頁畫面上點擊 {{icon}}",
                        "sdk-modal-title": "與幣安連接",
                        "sdk-no-app": "還沒有幣安 App 嗎？"
                    },
                    "cs-CZ": {
                        "sdk-download-android": "St\xe1hnout pro Android",
                        "sdk-connect": "Připojit",
                        "sdk-download-ios": "St\xe1hnout pro iOS",
                        "sdk-install": "Instalovat",
                        "sdk-modal-instruct-1": "1. Otevřete aplikaci Binance",
                        "sdk-modal-instruct-2": "2. Klepněte na {{icon}} na domovsk\xe9 obrazovce",
                        "sdk-modal-title": "Připojit platformu Binance",
                        "sdk-no-app": "Ještě nem\xe1te aplikaci Binance?"
                    },
                    "fr-FR": {
                        "sdk-download-android": "T\xe9l\xe9charger pour Android",
                        "sdk-connect": "Se connecter",
                        "sdk-download-ios": "T\xe9l\xe9charger pour iOS",
                        "sdk-install": "Installer",
                        "sdk-modal-instruct-1": "1. Ouvrez l’application de Binance",
                        "sdk-modal-instruct-2": "2. Appuyez sur {{icon}} sur l’\xe9cran d’accueil",
                        "sdk-modal-title": "Se connecter \xe0 Binance",
                        "sdk-no-app": "Vous n’avez pas encore l’application de Binance\xa0?"
                    },
                    "de-DE": {
                        "sdk-download-android": "F\xfcr Android herunterladen",
                        "sdk-connect": "Verbinden",
                        "sdk-download-ios": "F\xfcr iOS herunterladen",
                        "sdk-install": "Installieren",
                        "sdk-modal-instruct-1": "1. Binance-App \xf6ffnen",
                        "sdk-modal-instruct-2": "2. Tippe auf dem Startbildschirm auf {{icon}}",
                        "sdk-modal-title": "Mit Binance verkn\xfcpfen",
                        "sdk-no-app": "Du hast die Binance-App noch nicht?"
                    },
                    "el-GR": {
                        "sdk-download-android": "Λήψη για Android",
                        "sdk-connect": "Συνδεθείτε",
                        "sdk-download-ios": "Λήψη για iOS",
                        "sdk-install": "Εγκατάσταση",
                        "sdk-modal-instruct-1": "1. Ανοίξτε την εφαρμογή Binance",
                        "sdk-modal-instruct-2": "2. Πατήστε {{icon}} στην αρχική οθόνη",
                        "sdk-modal-title": "Συνδεθείτε με την Binance",
                        "sdk-no-app": "Δεν έχετε ακόμα την εφαρμογή Binance;"
                    },
                    "id-ID": {
                        "sdk-download-android": "Unduh untuk Android",
                        "sdk-connect": "Terhubung",
                        "sdk-download-ios": "Unduh untuk iOS",
                        "sdk-install": "Instal",
                        "sdk-modal-instruct-1": "1. Buka aplikasi Binance",
                        "sdk-modal-instruct-2": "2. Ketuk {{icon}} di Layar Beranda",
                        "sdk-modal-title": "Hubungkan dengan Binance",
                        "sdk-no-app": "Belum punya aplikasi Binance?"
                    },
                    "it-IT": {
                        "sdk-download-android": "Scarica per Android",
                        "sdk-connect": "Collega",
                        "sdk-download-ios": "Scarica per iOS",
                        "sdk-install": "Installa",
                        "sdk-modal-instruct-1": "1. Apri l'app Binance",
                        "sdk-modal-instruct-2": "2. Tocca {{icon}} nella homepage",
                        "sdk-modal-title": "Collega con Binance",
                        "sdk-no-app": "Non hai ancora l'app Binance?"
                    },
                    "kk-KZ": {
                        "sdk-download-android": "Android үшін жүктеп алу",
                        "sdk-connect": "Қосылу",
                        "sdk-download-ios": "iOS үшін жүктеп алу",
                        "sdk-install": "Орнату",
                        "sdk-modal-instruct-1": "1. Binance қолданбасын ашыңыз",
                        "sdk-modal-instruct-2": "2. Басты экрандағы {{icon}} белгішесін түртіңіз",
                        "sdk-modal-title": "Binance платформасымен байланыстыру",
                        "sdk-no-app": "Сізде әлі Binance қолданбасы жоқ па?"
                    },
                    "lv-LV": {
                        "sdk-download-android": "Lejupielādēt Android ierīcei",
                        "sdk-connect": "Savienot",
                        "sdk-download-ios": "Lejupielādēt iOS ierīcei",
                        "sdk-install": "Instalēt",
                        "sdk-modal-instruct-1": "1.\xa0Atver Binance lietotni",
                        "sdk-modal-instruct-2": "2.\xa0Pieskaries pie {{icon}} sākuma ekrānā",
                        "sdk-modal-title": "Savieno ar Binance",
                        "sdk-no-app": "Vai tev vēl nav Binance lietotnes?"
                    },
                    "pl-PL": {
                        "sdk-download-android": "Pobierz na Androida",
                        "sdk-connect": "Połącz",
                        "sdk-download-ios": "Pobierz na iOS",
                        "sdk-install": "Zainstaluj",
                        "sdk-modal-instruct-1": "1. Otw\xf3rz Aplikację Binance",
                        "sdk-modal-instruct-2": "2. Kliknij {{icon}} na ekranie gł\xf3wnym",
                        "sdk-modal-title": "Połącz z Binance",
                        "sdk-no-app": "Nie masz jeszcze aplikacji Binance?"
                    },
                    "pt-BR": {
                        "sdk-download-android": "Baixar para Android",
                        "sdk-connect": "Conecte",
                        "sdk-download-ios": "Baixar para iOS",
                        "sdk-install": "Instalar",
                        "sdk-modal-instruct-1": "1. Abra o Aplicativo da Binance",
                        "sdk-modal-instruct-2": "2. Toque em {{icon}} na Tela Inicial",
                        "sdk-modal-title": "Conectar com a Binance",
                        "sdk-no-app": "Ainda n\xe3o tem o aplicativo da Binance?"
                    },
                    "pt-PT": {
                        "sdk-download-android": "Transferir para Android",
                        "sdk-connect": "Associar",
                        "sdk-download-ios": "Transferir para iOS",
                        "sdk-install": "Instalar",
                        "sdk-modal-instruct-1": "1. Abre a aplica\xe7\xe3o Binance",
                        "sdk-modal-instruct-2": "2. Toca em {{icon}} no Ecr\xe3 Inicial",
                        "sdk-modal-title": "Associa com a Binance",
                        "sdk-no-app": "Ainda n\xe3o tens a aplica\xe7\xe3o Binance?"
                    },
                    "ro-RO": {
                        "sdk-download-android": "Descărcați pentru Android",
                        "sdk-connect": "Conectare",
                        "sdk-download-ios": "Descărcați pentru iOS",
                        "sdk-install": "Instalați",
                        "sdk-modal-instruct-1": "1. Deschideți aplicația Binance",
                        "sdk-modal-instruct-2": "2. Atingeți {{icon}} pe ecranul de pornire",
                        "sdk-modal-title": "Conectați-vă cu Binance",
                        "sdk-no-app": "Nu aveți \xeencă aplicația Binance?"
                    },
                    "ru-RU": {
                        "sdk-download-android": "Скачать для Android",
                        "sdk-connect": "Подключить",
                        "sdk-download-ios": "Скачать для iOS",
                        "sdk-install": "Установить",
                        "sdk-modal-instruct-1": "1. Откройте приложение Binance",
                        "sdk-modal-instruct-2": "2. Нажмите {{icon}} на главном экране",
                        "sdk-modal-title": "Подключить кошелек Binance",
                        "sdk-no-app": "У вас еще нет приложения Binance?"
                    },
                    "sk-SK": {
                        "sdk-download-android": "Stiahnuť pre Android",
                        "sdk-connect": "Pripojiť",
                        "sdk-download-ios": "Stiahnuť pre iOS",
                        "sdk-install": "Nainštalovať",
                        "sdk-modal-instruct-1": "1. Otvorte aplik\xe1ciu Binance",
                        "sdk-modal-instruct-2": "2. Klepnite na ikonu {{icon}} na domovskej obrazovke",
                        "sdk-modal-title": "Spojte sa s\xa0Binance",
                        "sdk-no-app": "Ešte nem\xe1te aplik\xe1ciu Binance?"
                    },
                    "sl-SI": {
                        "sdk-download-android": "Prenos za Android",
                        "sdk-connect": "Poveži",
                        "sdk-download-ios": "Prenos za iOS",
                        "sdk-install": "Namesti",
                        "sdk-modal-instruct-1": "1. Odprite aplikacijo Binance",
                        "sdk-modal-instruct-2": "2. Tapnite {{icon}} na začetnem zaslonu",
                        "sdk-modal-title": "Povežite se s platformo Binance",
                        "sdk-no-app": "Še nimate aplikacije Binance?"
                    },
                    "es-LA": {
                        "sdk-download-android": "Descargar para Android",
                        "sdk-connect": "Conecta",
                        "sdk-download-ios": "Descargar para iOS",
                        "sdk-install": "Instala",
                        "sdk-modal-instruct-1": "1. Abre la aplicaci\xf3n de Binance",
                        "sdk-modal-instruct-2": "2. Toca {{icon}} en la pantalla de inicio",
                        "sdk-modal-title": "Conectar con Binance",
                        "sdk-no-app": "\xbfA\xfan no tienes la aplicaci\xf3n de Binance?"
                    },
                    "es-ES": {
                        "sdk-download-android": "Descargar para Android",
                        "sdk-connect": "Conectar",
                        "sdk-download-ios": "Descargar para iOS",
                        "sdk-install": "Instalar",
                        "sdk-modal-instruct-1": "1. Open Binance app",
                        "sdk-modal-instruct-2": "2. Pulsa en {{icon}} en la p\xe1gina principal",
                        "sdk-modal-title": "Connect With Binance",
                        "sdk-no-app": "\xbfA\xfan no tienes la aplicaci\xf3n de Binance?"
                    },
                    "sv-SE": {
                        "sdk-download-android": "Ladda ned f\xf6r Android",
                        "sdk-connect": "Anslut",
                        "sdk-download-ios": "Ladda ned f\xf6r iOS",
                        "sdk-install": "Installera",
                        "sdk-modal-instruct-1": "1. \xd6ppna Binance-appen",
                        "sdk-modal-instruct-2": "2. Tryck p\xe5 {{icon}} p\xe5 startsk\xe4rmen",
                        "sdk-modal-title": "Anslut med Binance",
                        "sdk-no-app": "Har du inte Binance-appen \xe4nnu?"
                    },
                    "tr-TR": {
                        "sdk-download-android": "Android i\xe7in indir",
                        "sdk-connect": "Bağlan",
                        "sdk-download-ios": "iOS i\xe7in indir",
                        "sdk-install": "Y\xfckle",
                        "sdk-modal-instruct-1": "1. Binance Uygulamasını A\xe7ın",
                        "sdk-modal-instruct-2": "2. Ana Ekranda {{icon}} simgesine dokunun",
                        "sdk-modal-title": "Binance ile Bağlanın",
                        "sdk-no-app": "Hen\xfcz Binance uygulamanız yok mu?"
                    },
                    "uk-UA": {
                        "sdk-download-android": "Завантажити для Android",
                        "sdk-connect": "Підключитись",
                        "sdk-download-ios": "Завантажити для iOS",
                        "sdk-install": "Встановити",
                        "sdk-modal-instruct-1": "1. Відкрийте застосунок Binance",
                        "sdk-modal-instruct-2": "2. Торкніться {{icon}} на головному екрані",
                        "sdk-modal-title": "Підключіться до Binance",
                        "sdk-no-app": "Ще не маєте застосунку Binance?"
                    },
                    "vi-VN": {
                        "sdk-download-android": "Tải xuống cho Android",
                        "sdk-connect": "Kết nối",
                        "sdk-download-ios": "Tải xuống cho iOS",
                        "sdk-install": "C\xe0i đặt",
                        "sdk-modal-instruct-1": "1. Mở ứng dụng Binance",
                        "sdk-modal-instruct-2": "2. Nhấn v\xe0o {{icon}} tr\xean M\xe0n h\xecnh ch\xednh",
                        "sdk-modal-title": "Kết nối với Binance",
                        "sdk-no-app": "Bạn chưa c\xf3 ứng dụng Binance?"
                    },
                    "da-DK": {
                        "sdk-download-android": "Download til Android",
                        "sdk-connect": "Forbind",
                        "sdk-download-ios": "Download til iOS",
                        "sdk-install": "Installer",
                        "sdk-modal-instruct-1": "1. \xc5bn Binance-appen",
                        "sdk-modal-instruct-2": "2. Tryk p\xe5 {{icon}} p\xe5 startsk\xe6rmen",
                        "sdk-modal-title": "Forbind til Binance",
                        "sdk-no-app": "Har du ikke Binance-appen endnu?"
                    },
                    "my-MM": {
                        "sdk-download-android": "အန်းဒရွိုက်အတွက် ဒေါင်းလုဒ်လုပ်မည်",
                        "sdk-connect": "ချိတ်ဆက်မည်",
                        "sdk-download-ios": "iOS အတွက် ဒေါင်းလုဒ်လုပ်မည်",
                        "sdk-install": "ထည့်သွင်းမည်",
                        "sdk-modal-instruct-1": "1. Open Binance app",
                        "sdk-modal-instruct-2": "ပင်မမျက်နှာပြင်မှ {{icon}} ကိုနှိပ်ပါ။",
                        "sdk-modal-title": "Connect With Binance",
                        "sdk-no-app": "Binance App မရှိသေးဘူးလား။"
                    },
                    "lo-LA": {
                        "sdk-download-android": "ດາວໂຫຼດສໍາລັບ Android",
                        "sdk-connect": "ເຊື່ອມຕໍ່",
                        "sdk-download-ios": "ດາວໂຫຼດສໍາລັບ iOS",
                        "sdk-install": "ຕິດຕັ້ງ",
                        "sdk-modal-instruct-1": "1. ເປີດແອັບ Binance",
                        "sdk-modal-instruct-2": "2. ແຕະ {{icon}} ໃນໜ້າຈໍຫຼັກ",
                        "sdk-modal-title": "ເຊື່ອມຕໍ່ກັບ Binance",
                        "sdk-no-app": "ຍັງບໍ່ມີແອັບ Binance ເທື່ອບໍ?"
                    },
                    "si-LK": {
                        "sdk-download-android": "Android සඳහා බාගත කරන්න",
                        "sdk-connect": "සම්බන්ධ කරන්න",
                        "sdk-download-ios": "iOS සඳහා බාගත කරන්න",
                        "sdk-install": "ස්ථාපනය කරන්න",
                        "sdk-modal-instruct-1": "1. Binance යෙදුම විවෘත කරන්න",
                        "sdk-modal-instruct-2": "2. මුල් තිරයේ {{icon}} මත තට්ටු කරන්න",
                        "sdk-modal-title": "Binance සමග සම්බන්ධ වන්න",
                        "sdk-no-app": "තවමත් Binance යෙදුම නැති ද?"
                    }
                },
                tu = ["en", "ar", "bg-BG", "zh-CN", "zh-TW", "cs-CZ", "fr-FR", "de-DE", "el-GR", "id-ID", "it-IT", "kk-KZ", "lv-LV", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sl-SI", "es-LA", "es-ES", "sv-SE", "tr-TR", "uk-UA", "vi-VN", "da-DK", "my-MM", "lo-LA", "si-LK"].reduce(function(t, e) {
                    return t[e] = ts[e], t
                }, {}),
                tc = function() {
                    var t = (0, T.useContext)(te).lng;
                    return (0, T.useCallback)(function(e, n) {
                        var r, i;
                        return (null == tu ? void 0 : null === (r = tu[t]) || void 0 === r ? void 0 : r[e]) || (null == tu ? void 0 : null === (i = tu.en) || void 0 === i ? void 0 : i[e]) || (null == n ? void 0 : n.default) || e
                    }, [t])
                },
                tl = function(t) {
                    var e = t.size,
                        n = void 0 === e ? 24 : e,
                        r = t.color,
                        i = t.className,
                        o = t.children,
                        a = X(t, ["size", "color", "className", "children"]);
                    return T.createElement("svg", Y({
                        width: n,
                        height: n,
                        fill: void 0 === r ? "currentColor" : r,
                        className: i,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a), o)
                },
                th = function(t) {
                    return T.createElement(tl, Y({
                        size: 24
                    }, t), T.createElement("path", {
                        d: "M21.7725 18.7033C21.4062 19.5418 20.9727 20.3136 20.4704 21.0232C19.7857 21.9906 19.2251 22.6602 18.7931 23.032C18.1233 23.6424 17.4058 23.955 16.6374 23.9728C16.0857 23.9728 15.4205 23.8172 14.6461 23.5017C13.8692 23.1876 13.1552 23.032 12.5024 23.032C11.8177 23.032 11.0834 23.1876 10.2979 23.5017C9.51127 23.8172 8.87756 23.9816 8.39305 23.9979C7.65619 24.0291 6.92173 23.7076 6.1886 23.032C5.72069 22.6276 5.13542 21.9343 4.43429 20.9521C3.68203 19.9033 3.06358 18.687 2.57906 17.3004C2.06017 15.8026 1.80005 14.3523 1.80005 12.9482C1.80005 11.3398 2.15076 9.95259 2.85324 8.79011C3.40532 7.85636 4.13979 7.11979 5.05903 6.57906C5.97827 6.03834 6.97151 5.76279 8.04114 5.74516C8.62641 5.74516 9.39391 5.92456 10.3477 6.27715C11.2988 6.63091 11.9095 6.81032 12.1772 6.81032C12.3774 6.81032 13.0558 6.60054 14.2058 6.18233C15.2934 5.79449 16.2113 5.63391 16.9633 5.69716C19.0009 5.86012 20.5317 6.6561 21.5497 8.09013C19.7274 9.18432 18.826 10.7169 18.8439 12.6829C18.8603 14.2142 19.4209 15.4886 20.5227 16.5004C21.022 16.97 21.5796 17.333 22.2001 17.5907C22.0655 17.9774 21.9235 18.3477 21.7725 18.7033ZM17.0993 0.480137C17.0993 1.68041 16.6568 2.8011 15.7748 3.8384C14.7104 5.07155 13.4229 5.78412 12.0268 5.67168C12.009 5.52769 11.9987 5.37614 11.9987 5.21688C11.9987 4.06462 12.5049 2.83147 13.4038 1.82321C13.8526 1.3127 14.4234 0.888228 15.1155 0.549615C15.8062 0.216055 16.4595 0.031589 17.0739 0C17.0918 0.160458 17.0993 0.320926 17.0993 0.480121V0.480137Z",
                        fill: "#1E2329"
                    }))
                },
                tf = function(t) {
                    return T.createElement(tl, Y({
                        size: 24
                    }, t), T.createElement("path", {
                        d: "M13.5589 11.0874L4.08203 1.59644H4.17441C4.98558 1.59644 5.68614 1.89129 6.81073 2.4993L16.7488 7.88083L13.5589 11.0874Z",
                        fill: "#202630"
                    }), T.createElement("path", {
                        d: "M12.6373 12.008L2.90218 21.7203C2.66236 21.3329 2.49658 20.7063 2.49658 19.8034V4.19354C2.49658 3.29078 2.66236 2.66403 2.90218 2.2771L12.6373 12.008Z",
                        fill: "#202630"
                    }), T.createElement("path", {
                        d: "M13.5589 12.9124L16.7488 16.1187L6.81073 21.5001C5.68614 22.1083 4.98548 22.4036 4.17441 22.4036H4.08203L13.5589 12.9124Z",
                        fill: "#202630"
                    }), T.createElement("path", {
                        d: "M17.9437 8.52563L14.4775 12.0091L17.9437 15.4738L20.0456 14.3309C20.8199 13.9069 22 13.1329 22 12.0091C22 10.8662 20.8199 10.0922 20.0456 9.66821L17.9437 8.52563Z",
                        fill: "#202630"
                    }))
                },
                td = function(t) {
                    return T.createElement(tl, Y({
                        size: 24
                    }, t), T.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.5 4H10.5V7H7.5V10H4.5V7V4H7.5ZM14.5 4H17.5H20.5V7V10H17.5V7H14.5V4ZM10.5 20V17H7.5V14H4.5V17V20H7.5H10.5ZM17.5 20H14.5V17H17.5V14H20.5V17V20H17.5ZM16.5 10.5H8.5V13.5H16.5V10.5Z",
                        fill: "#202630"
                    }))
                },
                tp = function(t) {
                    var e = t.value,
                        n = X(t, ["value"]),
                        r = tm(e).map(function(t) {
                            return "string" == typeof t ? t : T.cloneElement(n[t.key], {
                                key: t.key
                            })
                        });
                    return T.createElement(T.Fragment, null, r)
                },
                tm = function(t) {
                    for (var e, n = /{{(.*?)}}/g, r = 0, i = []; null !== (e = n.exec(t));) e.index !== r && i.push(t.substring(r, e.index)), i.push({
                        key: e[1]
                    }), r = n.lastIndex;
                    return r !== t.length && i.push(t.substring(r)), i
                },
                ty = function() {
                    var t = tc();
                    return T.createElement(T.Fragment, null, T.createElement(tv, {
                        t: t
                    }), T.createElement(tg, {
                        t: t
                    }), T.createElement(tw, null))
                },
                tv = function(t) {
                    var e = t.t;
                    return T.createElement("div", {
                        style: {
                            borderBottom: "1px solid #EAECEF"
                        },
                        className: "grid justify-center gap-y-2 pb-6 w3w-body3 w3w-t-black border-b border-gray-300"
                    }, T.createElement("div", null, e("sdk-modal-instruct-1", {
                        default: "1. Open Binance app"
                    })), T.createElement("div", {
                        className: "flex items-center"
                    }, T.createElement(tp, {
                        value: e("sdk-modal-instruct-2", {
                            default: "2. Tap {{icon}} on Home"
                        }),
                        icon: T.createElement(td, {
                            className: "w-[24px] h-[24px] mx-[4px]"
                        })
                    })))
                },
                tg = function(t) {
                    var e = t.t;
                    return T.createElement("div", {
                        className: "py-4 w3w-body3 w3w-t-secondary text-center"
                    }, e("sdk-no-app", {
                        default: "Don't have Binance app yet?"
                    }))
                },
                tw = function() {
                    return T.createElement("div", {
                        className: "grid grid-cols-2 gap-x-4"
                    }, T.createElement(tb, {
                        type: "iOS"
                    }), T.createElement(tb, {
                        type: "Android"
                    }))
                },
                tb = function(t) {
                    var e = t.type,
                        n = tc();
                    return T.createElement("div", {
                        style: {
                            border: "1px solid #EAECEF"
                        },
                        className: "p-[12px] rounded-lg grid cursor-pointer w3w-t-secondary grid-flow-col items-center gap-x-4 w-[150px]",
                        onClick: function() {
                            window.open("Android" === e ? ti.googlePlay : ti.appleStore, "_blank")
                        }
                    }, "Android" === e ? T.createElement(tf, {
                        className: "w-[24px] h-[24px] m-auto"
                    }) : T.createElement(th, {
                        className: "w-[24px] h-[24px] m-auto"
                    }), T.createElement("div", {
                        className: "w-[75px] w3w-caption2 w3w-t-secondary"
                    }, n("sdk-download-".concat(e.toLowerCase()), {
                        default: "Download for ".concat(e)
                    })))
                },
                tk = function(t) {
                    return T.createElement(tl, Y({}, t), T.createElement("path", {
                        d: "M6.69708 4.57538L4.57576 6.6967L9.87906 12L4.57576 17.3033L6.69708 19.4246L12.0004 14.1213L17.3037 19.4246L19.425 17.3033L14.1217 12L19.425 6.6967L17.3037 4.57538L12.0004 9.87868L6.69708 4.57538Z",
                        fill: "currentColor"
                    }))
                },
                tM = function(t) {
                    var e = t.onClose,
                        n = tc();
                    return T.createElement("div", {
                        className: "flex items-center justify-between"
                    }, T.createElement("p", {
                        className: "text-base font-medium text-[#1E2329] lg:text-xl md:font-semibold md:w3w-subtitle1"
                    }, n("sdk-modal-title", {
                        default: "Connect with Binance"
                    })), T.createElement("div", {
                        className: "cursor-pointer text-[#929AA5]",
                        onClick: e
                    }, T.createElement(tk, null)))
                },
                tE = function(t) {
                    var e = t.id,
                        n = t.onClose,
                        r = t.onConnect,
                        i = tc();
                    return T.createElement("div", {
                        id: e,
                        className: "w3w-animated w3w-fadeIn pointer-events-auto fixed top-0 left-0 h-full w-full bg-black/[.80] duration-300 ease-in-out will-change-auto"
                    }, T.createElement("div", {
                        className: "absolute bottom-0 m-auto w-full rounded-t-2xl bg-white px-4 pb-6 shadow-inner duration-300 ease-in-out will-change-transform md:w-[400px]"
                    }, T.createElement(t_, {
                        onClose: n
                    }), T.createElement("div", {
                        className: "mt-6 mb-4 flex justify-center"
                    }, T.createElement("img", {
                        className: "w-[60px]",
                        src: to
                    })), T.createElement("div", {
                        className: "w3w-subtitle1 text-center mb-6 w3w-t-primary"
                    }, i("sdk-modal-title", {
                        default: "Connect with Binance"
                    })), T.createElement("button", {
                        onClick: r,
                        style: {
                            borderColor: "transparent"
                        },
                        className: "w-full rounded h-[40px] flex justify-center items-center w3w-bg-primary w3w-t-primary w3w-subtitle3 mb-4"
                    }, i("sdk-connect", {
                        default: "Connect"
                    })), T.createElement("div", {
                        className: "text-center py-3 w3w-t-secondary"
                    }, T.createElement("span", null, i("sdk-no-app", {
                        default: "Don’t have Binance app yet?"
                    })), T.createElement("a", {
                        target: "_blank",
                        href: "https://www.binance.com/en/download",
                        className: "w3w-t-brand ml-1"
                    }, i("sdk-install", {
                        default: "Install"
                    })))))
                },
                t_ = function(t) {
                    var e = t.onClose;
                    return T.createElement("div", {
                        className: "flex items-center justify-end h-[52px]"
                    }, T.createElement("div", {
                        className: "cursor-pointer text-[#929AA5]",
                        onClick: e
                    }, T.createElement(tk, {
                        className: "w-[20px]"
                    })))
                },
                tA = function(t, e) {
                    var n = "visibilitychange",
                        r = setTimeout(function() {
                            document.hidden || t()
                        }, e);
                    document.addEventListener(n, function t() {
                        document.hidden && (clearTimeout(r), document.removeEventListener(n, t))
                    }, !1)
                },
                tS = function(t) {
                    var e = document.createElement("a");
                    e.href = t, document.body.appendChild(e), tA(function() {
                        window.location.href = "https://www.binance.com/en/download"
                    }, 1e3), e.click(), document.body.removeChild(e)
                },
                tC = function(t) {
                    var e = ta(),
                        n = e.isAndroid,
                        r = e.isMobile;
                    return {
                        toBinance: function() {
                            var e = (0, w.wS)(n, t);
                            if (r) {
                                if (!n) {
                                    var i = document.createElement("a");
                                    i.href = e, document.body.appendChild(i), i.click(), document.body.removeChild(i)
                                }
                                n && tS(e)
                            }
                        }
                    }
                },
                tN = function(t) {
                    var e = tC(t.url).toBinance;
                    return T.createElement("div", null, T.createElement("div", {
                        className: "mt-[35px] flex justify-center"
                    }, T.createElement("div", {
                        className: "w-[200px] h-[200px] mb-4",
                        onClick: e
                    }, t.url && T.createElement(J, {
                        value: t.url,
                        width: "100%",
                        height: "100%",
                        level: "M",
                        imageSettings: {
                            src: to,
                            height: 32,
                            width: 32,
                            excavate: !1
                        }
                    }))))
                },
                tO = function(t) {
                    var e = t.onClose,
                        n = t.isReady,
                        r = ta().isMobile,
                        i = $((0, T.useState)(""), 2),
                        o = i[0],
                        a = i[1],
                        s = $((0, T.useState)(!1), 2),
                        u = s[0],
                        c = s[1];
                    return ((0, T.useEffect)(function() {
                        n.then(a).catch(function() {
                            return c(!0)
                        })
                    }, [n]), !1 === r) ? T.createElement("div", {
                        id: tr,
                        className: "w3w-animated w3w-fadeIn pointer-events-auto fixed top-0 left-0 h-full w-full bg-black/[.80] duration-300 ease-in-out will-change-auto"
                    }, T.createElement("div", {
                        style: {
                            transform: "translateY(-50%)",
                            top: "50%"
                        },
                        className: "relative m-auto w-[343px] rounded-2xl bg-white px-6 pt-[20px] pb-6 shadow-inner duration-300 ease-in-out will-change-transform md:w-[400px] lg:p-8 lg:pt-6"
                    }, T.createElement(tM, {
                        onClose: e
                    }), T.createElement(tN, Y({}, {
                        url: o,
                        error: u
                    })), T.createElement(ty, null))) : r ? T.createElement(tE, {
                        onConnect: function() {
                            (0, w.jm)(o)
                        },
                        onClose: e,
                        id: tr
                    }) : void 0
                },
                tx = {
                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
                    lookupQuerystring: function() {
                        var t = window.location.search.match(/lng=([^&]*)/);
                        return t && t[1]
                    },
                    lookupCookie: function() {
                        var t = document.cookie.match(/i18next=([^;]*)/);
                        return t && t[1]
                    },
                    lookupLocalStorage: function() {
                        return localStorage.getItem("i18nextLng")
                    },
                    lookupSessionStorage: function() {
                        return sessionStorage.getItem("i18nextLng")
                    },
                    lookupFromNavigator: function() {
                        return navigator.language
                    },
                    lookupFromHtmlTag: function() {
                        return document.documentElement.lang
                    },
                    lookupFromPath: function() {
                        var t = window.location.pathname.match(/\/([^/]*)/);
                        return t && t[1]
                    },
                    lookupFromSubdomain: function() {
                        var t = window.location.hostname.match(/^(.+)\./);
                        return t && t[1]
                    }
                },
                tR = function() {
                    var t = !0,
                        e = !1,
                        n = void 0;
                    try {
                        for (var r, i = tx.order[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                            var o = r.value;
                            try {
                                var a = tx["lookup" + o.charAt(0).toUpperCase() + o.slice(1)]();
                                if (a) return a
                            } catch (t) {
                                console.error("Error detecting language with method: ".concat(o), t);
                                continue
                            }
                        }
                    } catch (t) {
                        e = !0, n = t
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (e) throw n
                        }
                    }
                    return "en"
                };

            function tI() {
                var t = window.document,
                    e = t.getElementById(tr);
                e && (e.className = e.className.replace("w3w-fadeIn", "w3w-fadeOut"), setTimeout(function() {
                    var e = t.getElementById(tn);
                    e && t.body.removeChild(e)
                }, 300))
            }

            function tT() {
                var t;
                return t = function(t) {
                    var e, n, r, i, o, a;
                    return function(t, e) {
                        var n, r, i, o, a = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return o = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }), o;

                        function s(o) {
                            return function(s) {
                                return function(o) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: o[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                    a.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && a.label < i[1]) {
                                                    a.label = i[1], i = o;
                                                    break
                                                }
                                                if (i && a.label < i[2]) {
                                                    a.label = i[2], a.ops.push(o);
                                                    break
                                                }
                                                i[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, a)
                                    } catch (t) {
                                        o = [6, t], r = 0
                                    } finally {
                                        n = i = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {
                                        value: o[0] ? o[1] : void 0,
                                        done: !0
                                    }
                                }([o, s])
                            }
                        }
                    }(this, function(s) {
                        var u, c, l;
                        switch (s.label) {
                            case 0:
                                return e = t.isReady, n = t.cb, r = t.lng, (c = (u = window.document).createElement("div")).setAttribute("id", tn), u.body.appendChild(c), i = c, o = (0, P.createRoot)(i), [4, e];
                            case 1:
                                return s.sent(), a = null != r ? r : tR(), o.render(T.createElement(te.Provider, {
                                    value: {
                                        lng: a
                                    }
                                }, T.createElement("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: tt
                                    }
                                }), T.createElement(tO, {
                                    isReady: e,
                                    onClose: (l = n, function() {
                                        tI(), l && l()
                                    })
                                }))), [2]
                        }
                    })
                }, (tT = function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            K(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            K(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }).apply(this, arguments)
            }
            var tP = function(t) {},
                tB = function() {},
                tj = {
                    open: function(t) {
                        var e = t.cb,
                            n = t.lng,
                            r = new Promise(function(t, e) {
                                tP = t, tB = e
                            });
                        (0, w.UG)() || function(t) {
                            tT.apply(this, arguments)
                        }({
                            isReady: r,
                            cb: e,
                            lng: n
                        })
                    },
                    close: function() {
                        (0, w.UG)() || tI()
                    },
                    ready: function(t) {
                        tP(t)
                    },
                    fail: function() {
                        console.log("relay failed...."), tB()
                    }
                },
                tD = n(29029);

            function tL(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function tU(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function tZ(t) {
                return (tZ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function tF(t, e) {
                return (tF = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function tW(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }
            var tz = Object.defineProperty,
                tV = function(t, e, n) {
                    var r;
                    return (r = (void 0 === e ? "undefined" : tW(e)) != "symbol" ? e + "" : e) in t ? tz(t, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[r] = n, n
                },
                tH = "u" > tW(window) ? window.WebSocket : tD,
                tG = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && tF(t, e)
                    }(o, t);
                    var e, n, r, i = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n, r = tZ(o);
                        if (e) {
                            var i = tZ(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return (t = n) && ("object" === tW(t) || "function" == typeof t) ? t : tL(this)
                    });

                    function o(t) {
                        var e;
                        return ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, o), (e = i.call(this)).opts = t, tV(tL(e), "qs"), tV(tL(e), "urls", []), tV(tL(e), "url"), tV(tL(e), "socket"), tV(tL(e), "nextSocket"), tV(tL(e), "queue", []), tV(tL(e), "subscriptions", []), tV(tL(e), "retryIndex", 0), e.socket = null, e.nextSocket = null, e.subscriptions = t.subscriptions || [], e.qs = "env=browser&protocol=wc&version=".concat(t.version), e
                    }
                    return n = [{
                        key: "readyState",
                        get: function() {
                            return this.socket ? this.socket.readyState : -1
                        },
                        set: function(t) {}
                    }, {
                        key: "connecting",
                        get: function() {
                            return 0 === this.readyState
                        },
                        set: function(t) {}
                    }, {
                        key: "connected",
                        get: function() {
                            return 1 === this.readyState
                        },
                        set: function(t) {}
                    }, {
                        key: "retryFailed",
                        get: function() {
                            return this.retryIndex > 0 && this.retryIndex > this.urls.length
                        },
                        set: function(t) {}
                    }, {
                        key: "open",
                        value: function(t) {
                            if (!Array.isArray(t) || 0 === t.length) throw Error("Missing or invalid WebSocket url");
                            this.urls = t, this.retryIndex = 0, this.socketCreate()
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this._socketClose()
                        }
                    }, {
                        key: "send",
                        value: function(t, e, n) {
                            if (!e || "string" != typeof e) throw Error("Missing or invalid topic field");
                            this.socketSend({
                                topic: e,
                                type: "pub",
                                payload: t,
                                silent: !!n
                            })
                        }
                    }, {
                        key: "subscribe",
                        value: function(t) {
                            this.socketSend({
                                topic: t,
                                type: "sub",
                                payload: "",
                                silent: !0
                            })
                        }
                    }, {
                        key: "socketCreate",
                        value: function() {
                            var t = this;
                            if (!this.nextSocket) {
                                var e = this.url || this.getWsUrl();
                                if (!e) return this.events.emit("error", Error("Retry limit reached. Can't connect to any url."), e);
                                if (this.url = e, this.nextSocket = new tH(e), !this.nextSocket) throw Error("Failed to create socket");
                                this.nextSocket.onmessage = function(e) {
                                    return t.socketReceive(e)
                                }, this.nextSocket.onopen = function() {
                                    return t.socketOpen()
                                }, this.nextSocket.onerror = function(n) {
                                    return t.socketError(n, e)
                                }, this.nextSocket.onclose = function(e) {
                                    t.nextSocket = null, t.socketCreate()
                                }
                            }
                        }
                    }, {
                        key: "getWsUrl",
                        value: function() {
                            return this.retryIndex >= this.urls.length ? "" : "".concat(this.urls[this.retryIndex++], "?").concat(this.qs)
                        }
                    }, {
                        key: "socketOpen",
                        value: function() {
                            this._socketClose(), this.socket = this.nextSocket, this.nextSocket = null, this.queueSubscriptions(), this.pushQueue(), this.events.emit("open", this.urls[this.retryIndex - 1])
                        }
                    }, {
                        key: "_socketClose",
                        value: function() {
                            this.socket && (this.socket.onclose = function() {}, this.socket.close(), this.events.emit("close"))
                        }
                    }, {
                        key: "socketSend",
                        value: function(t) {
                            var e = JSON.stringify(t);
                            this.socket && 1 === this.socket.readyState ? this.socket.send(e) : this.setToQueue(t)
                        }
                    }, {
                        key: "socketReceive",
                        value: function(t) {
                            var e;
                            try {
                                e = JSON.parse(t.data)
                            } catch (t) {
                                return
                            }
                            this.socketSend({
                                topic: e.topic,
                                type: "ack",
                                payload: "",
                                silent: !0
                            }), this.socket && 1 === this.socket.readyState && this.events.emit("message", e)
                        }
                    }, {
                        key: "socketError",
                        value: function(t, e) {
                            this.events.emit("error", t, e)
                        }
                    }, {
                        key: "queueSubscriptions",
                        value: function() {
                            var t = this;
                            this.subscriptions.forEach(function(e) {
                                return t.queue.push({
                                    topic: e,
                                    type: "sub",
                                    payload: "",
                                    silent: !0
                                })
                            }), this.subscriptions = this.opts.subscriptions || []
                        }
                    }, {
                        key: "setToQueue",
                        value: function(t) {
                            this.queue.push(t)
                        }
                    }, {
                        key: "pushQueue",
                        value: function() {
                            var t = this;
                            this.queue.forEach(function(e) {
                                return t.socketSend(e)
                            }), this.queue = []
                        }
                    }], tU(o.prototype, n), r && tU(o, r), o
                }(w.zW);

            function tq(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function tJ(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }

            function tQ(t) {
                return (tQ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function tK(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && tY(t, e)
            }

            function tY(t, e) {
                return (tY = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function tX(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }

            function t$(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r, i = tQ(t);
                    if (e) {
                        var o = tQ(this).constructor;
                        r = Reflect.construct(i, arguments, o)
                    } else r = i.apply(this, arguments);
                    return (n = r) && ("object" === tX(n) || "function" == typeof n) ? n : tq(this)
                }
            }
            var t0 = Object.defineProperty,
                t1 = function(t, e, n) {
                    var r;
                    return (r = (void 0 === e ? "undefined" : tX(e)) != "symbol" ? e + "" : e) in t ? t0(t, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[r] = n, n
                };
            ! function(t) {
                tK(n, t);
                var e = t$(n);

                function n() {
                    var t;
                    return tJ(this, n), t = e.call.apply(e, [this].concat(Array.prototype.slice.call(arguments))), t1(tq(t), "connection"), t
                }
            }(function(t) {
                tK(n, t);
                var e = t$(n);

                function n() {
                    return tJ(this, n), e.apply(this, arguments)
                }
                return n
            }(function t() {
                tJ(this, t), t1(this, "events")
            }));
            var t2 = ((c = t2 || {})[c.DisconnectAtWallet = 0] = "DisconnectAtWallet", c[c.DisconnectAtClient = 1] = "DisconnectAtClient", c[c.NetworkError = 2] = "NetworkError", c),
                t3 = n(95586),
                t6 = n(79701),
                t8 = n(91738),
                t4 = !1,
                t5 = !1,
                t7 = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                t9 = 2,
                et = null,
                ee = function() {
                    try {
                        var t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(function(e) {
                                try {
                                    if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                                } catch (n) {
                                    t.push(e)
                                }
                            }), t.length) throw Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
            (l = m || (m = {})).DEBUG = "DEBUG", l.INFO = "INFO", l.WARNING = "WARNING", l.ERROR = "ERROR", l.OFF = "OFF", (h = y || (y = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", h.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", h.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", h.NETWORK_ERROR = "NETWORK_ERROR", h.SERVER_ERROR = "SERVER_ERROR", h.TIMEOUT = "TIMEOUT", h.BUFFER_OVERRUN = "BUFFER_OVERRUN", h.NUMERIC_FAULT = "NUMERIC_FAULT", h.MISSING_NEW = "MISSING_NEW", h.INVALID_ARGUMENT = "INVALID_ARGUMENT", h.MISSING_ARGUMENT = "MISSING_ARGUMENT", h.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", h.CALL_EXCEPTION = "CALL_EXCEPTION", h.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", h.NONCE_EXPIRED = "NONCE_EXPIRED", h.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", h.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", h.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", h.ACTION_REJECTED = "ACTION_REJECTED";
            var en = "0123456789abcdef",
                er = function() {
                    function t(e) {
                        (0, B.Z)(this, t), Object.defineProperty(this, "version", {
                            enumerable: !0,
                            value: e,
                            writable: !1
                        })
                    }
                    return (0, j.Z)(t, [{
                        key: "_log",
                        value: function(t, e) {
                            var n = t.toLowerCase();
                            null == t7[n] && this.throwArgumentError("invalid log level name", "logLevel", t), t9 > t7[n] || console.log.apply(console, e)
                        }
                    }, {
                        key: "debug",
                        value: function() {
                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            this._log(t.levels.DEBUG, n)
                        }
                    }, {
                        key: "info",
                        value: function() {
                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            this._log(t.levels.INFO, n)
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            this._log(t.levels.WARNING, n)
                        }
                    }, {
                        key: "makeError",
                        value: function(e, n, r) {
                            if (t5) return this.makeError("censored error", n, {});
                            n || (n = t.errors.UNKNOWN_ERROR), r || (r = {});
                            var i = [];
                            Object.keys(r).forEach(function(t) {
                                var e = r[t];
                                try {
                                    if (e instanceof Uint8Array) {
                                        for (var n = "", o = 0; o < e.length; o++) n += en[e[o] >> 4] + en[15 & e[o]];
                                        i.push(t + "=Uint8Array(0x" + n + ")")
                                    } else i.push(t + "=" + JSON.stringify(e))
                                } catch (e) {
                                    i.push(t + "=" + JSON.stringify(r[t].toString()))
                                }
                            }), i.push("code=".concat(n)), i.push("version=".concat(this.version));
                            var o = e,
                                a = "";
                            switch (n) {
                                case y.NUMERIC_FAULT:
                                    a = "NUMERIC_FAULT";
                                    var s = e;
                                    switch (s) {
                                        case "overflow":
                                        case "underflow":
                                        case "division-by-zero":
                                            a += "-" + s;
                                            break;
                                        case "negative-power":
                                        case "negative-width":
                                            a += "-unsupported";
                                            break;
                                        case "unbound-bitwise-result":
                                            a += "-unbound-result"
                                    }
                                    break;
                                case y.CALL_EXCEPTION:
                                case y.INSUFFICIENT_FUNDS:
                                case y.MISSING_NEW:
                                case y.NONCE_EXPIRED:
                                case y.REPLACEMENT_UNDERPRICED:
                                case y.TRANSACTION_REPLACED:
                                case y.UNPREDICTABLE_GAS_LIMIT:
                                    a = n
                            }
                            a && (e += " [ See: https://links.ethers.org/v5-errors-" + a + " ]"), i.length && (e += " (" + i.join(", ") + ")");
                            var u = Error(e);
                            return u.reason = o, u.code = n, Object.keys(r).forEach(function(t) {
                                u[t] = r[t]
                            }), u
                        }
                    }, {
                        key: "throwError",
                        value: function(t, e, n) {
                            throw this.makeError(t, e, n)
                        }
                    }, {
                        key: "throwArgumentError",
                        value: function(e, n, r) {
                            return this.throwError(e, t.errors.INVALID_ARGUMENT, {
                                argument: n,
                                value: r
                            })
                        }
                    }, {
                        key: "assert",
                        value: function(t, e, n, r) {
                            t || this.throwError(e, n, r)
                        }
                    }, {
                        key: "assertArgument",
                        value: function(t, e, n, r) {
                            t || this.throwArgumentError(e, n, r)
                        }
                    }, {
                        key: "checkNormalize",
                        value: function(e) {
                            null == e && (e = "platform missing String.prototype.normalize"), ee && this.throwError("platform missing String.prototype.normalize", t.errors.UNSUPPORTED_OPERATION, {
                                operation: "String.prototype.normalize",
                                form: ee
                            })
                        }
                    }, {
                        key: "checkSafeUint53",
                        value: function(e, n) {
                            "number" == typeof e && (null == n && (n = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(n, t.errors.NUMERIC_FAULT, {
                                operation: "checkSafeInteger",
                                fault: "out-of-safe-range",
                                value: e
                            }), e % 1 && this.throwError(n, t.errors.NUMERIC_FAULT, {
                                operation: "checkSafeInteger",
                                fault: "non-integer",
                                value: e
                            }))
                        }
                    }, {
                        key: "checkArgumentCount",
                        value: function(e, n, r) {
                            r = r ? ": " + r : "", e < n && this.throwError("missing argument" + r, t.errors.MISSING_ARGUMENT, {
                                count: e,
                                expectedCount: n
                            }), e > n && this.throwError("too many arguments" + r, t.errors.UNEXPECTED_ARGUMENT, {
                                count: e,
                                expectedCount: n
                            })
                        }
                    }, {
                        key: "checkNew",
                        value: function(e, n) {
                            (e === Object || null == e) && this.throwError("missing new", t.errors.MISSING_NEW, {
                                name: n.name
                            })
                        }
                    }, {
                        key: "checkAbstract",
                        value: function(e, n) {
                            e === n ? this.throwError("cannot instantiate abstract class " + JSON.stringify(n.name) + " directly; use a sub-class", t.errors.UNSUPPORTED_OPERATION, {
                                name: e.name,
                                operation: "new"
                            }) : (e === Object || null == e) && this.throwError("missing new", t.errors.MISSING_NEW, {
                                name: n.name
                            })
                        }
                    }], [{
                        key: "globalLogger",
                        value: function() {
                            return et || (et = new t("logger/5.7.0")), et
                        }
                    }, {
                        key: "setCensorship",
                        value: function(e, n) {
                            if (!e && n && this.globalLogger().throwError("cannot permanently disable censorship", t.errors.UNSUPPORTED_OPERATION, {
                                    operation: "setCensorship"
                                }), t4) {
                                if (!e) return;
                                this.globalLogger().throwError("error censorship permanent", t.errors.UNSUPPORTED_OPERATION, {
                                    operation: "setCensorship"
                                })
                            }
                            t5 = !!e, t4 = !!n
                        }
                    }, {
                        key: "setLogLevel",
                        value: function(e) {
                            var n = t7[e.toLowerCase()];
                            if (null == n) {
                                t.globalLogger().warn("invalid log level - " + e);
                                return
                            }
                            t9 = n
                        }
                    }, {
                        key: "from",
                        value: function(e) {
                            return new t(e)
                        }
                    }]), t
                }();
            er.errors = y, er.levels = m;
            var ei = new er("bytes/5.7.0");

            function eo(t) {
                return !!t.toHexString
            }

            function ea(t) {
                return t.slice || (t.slice = function() {
                    var e = Array.prototype.slice.call(arguments);
                    return ea(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function es(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function eu(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t || !es(t.length) || t.length < 0) return !1;
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (!es(n) || n < 0 || n >= 256) return !1
                }
                return !0
            }

            function ec(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    ei.checkSafeUint53(t, "invalid arrayify value");
                    for (var n = []; t;) n.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === n.length && n.push(0), ea(new Uint8Array(n))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), eo(t) && (t = t.toHexString()), eh(t)) {
                    var r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : ei.throwArgumentError("hex data is odd-length", "value", t));
                    for (var i = [], o = 0; o < r.length; o += 2) i.push(parseInt(r.substring(o, o + 2), 16));
                    return ea(new Uint8Array(i))
                }
                return eu(t) ? ea(new Uint8Array(t)) : ei.throwArgumentError("invalid arrayify value", "value", t)
            }

            function el(t) {
                var e = t.map(function(t) {
                        return ec(t)
                    }),
                    n = e.reduce(function(t, e) {
                        return t + e.length
                    }, 0),
                    r = new Uint8Array(n);
                return e.reduce(function(t, e) {
                    return r.set(e, t), t + e.length
                }, 0), ea(r)
            }

            function eh(t, e) {
                return "string" == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e)
            }
            var ef = "0123456789abcdef";

            function ed(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    ei.checkSafeUint53(t, "invalid hexlify value");
                    for (var n = ""; t;) n = ef[15 & t] + n, t = Math.floor(t / 16);
                    return n.length ? (n.length % 2 && (n = "0" + n), "0x" + n) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), eo(t)) return t.toHexString();
                if (eh(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : ei.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (eu(t)) {
                    for (var r = "0x", i = 0; i < t.length; i++) {
                        var o = t[i];
                        r += ef[(240 & o) >> 4] + ef[15 & o]
                    }
                    return r
                }
                return ei.throwArgumentError("invalid hexlify value", "value", t)
            }

            function ep(t, e) {
                for ("string" != typeof t ? t = ed(t) : eh(t) || ei.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && ei.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }
            var em = n(30215),
                ey = n.n(em)().BN,
                ev = new er("bignumber/5.7.0"),
                eg = {},
                ew = !1,
                eb = function() {
                    function t(e, n) {
                        (0, B.Z)(this, t), e !== eg && ev.throwError("cannot call constructor directly; use BigNumber.from", er.errors.UNSUPPORTED_OPERATION, {
                            operation: "new (BigNumber)"
                        }), this._hex = n, this._isBigNumber = !0, Object.freeze(this)
                    }
                    return (0, j.Z)(t, [{
                        key: "fromTwos",
                        value: function(t) {
                            return eM(eE(this).fromTwos(t))
                        }
                    }, {
                        key: "toTwos",
                        value: function(t) {
                            return eM(eE(this).toTwos(t))
                        }
                    }, {
                        key: "abs",
                        value: function() {
                            return "-" === this._hex[0] ? t.from(this._hex.substring(1)) : this
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            return eM(eE(this).add(eE(t)))
                        }
                    }, {
                        key: "sub",
                        value: function(t) {
                            return eM(eE(this).sub(eE(t)))
                        }
                    }, {
                        key: "div",
                        value: function(e) {
                            return t.from(e).isZero() && e_("division-by-zero", "div"), eM(eE(this).div(eE(e)))
                        }
                    }, {
                        key: "mul",
                        value: function(t) {
                            return eM(eE(this).mul(eE(t)))
                        }
                    }, {
                        key: "mod",
                        value: function(t) {
                            var e = eE(t);
                            return e.isNeg() && e_("division-by-zero", "mod"), eM(eE(this).umod(e))
                        }
                    }, {
                        key: "pow",
                        value: function(t) {
                            var e = eE(t);
                            return e.isNeg() && e_("negative-power", "pow"), eM(eE(this).pow(e))
                        }
                    }, {
                        key: "and",
                        value: function(t) {
                            var e = eE(t);
                            return (this.isNegative() || e.isNeg()) && e_("unbound-bitwise-result", "and"), eM(eE(this).and(e))
                        }
                    }, {
                        key: "or",
                        value: function(t) {
                            var e = eE(t);
                            return (this.isNegative() || e.isNeg()) && e_("unbound-bitwise-result", "or"), eM(eE(this).or(e))
                        }
                    }, {
                        key: "xor",
                        value: function(t) {
                            var e = eE(t);
                            return (this.isNegative() || e.isNeg()) && e_("unbound-bitwise-result", "xor"), eM(eE(this).xor(e))
                        }
                    }, {
                        key: "mask",
                        value: function(t) {
                            return (this.isNegative() || t < 0) && e_("negative-width", "mask"), eM(eE(this).maskn(t))
                        }
                    }, {
                        key: "shl",
                        value: function(t) {
                            return (this.isNegative() || t < 0) && e_("negative-width", "shl"), eM(eE(this).shln(t))
                        }
                    }, {
                        key: "shr",
                        value: function(t) {
                            return (this.isNegative() || t < 0) && e_("negative-width", "shr"), eM(eE(this).shrn(t))
                        }
                    }, {
                        key: "eq",
                        value: function(t) {
                            return eE(this).eq(eE(t))
                        }
                    }, {
                        key: "lt",
                        value: function(t) {
                            return eE(this).lt(eE(t))
                        }
                    }, {
                        key: "lte",
                        value: function(t) {
                            return eE(this).lte(eE(t))
                        }
                    }, {
                        key: "gt",
                        value: function(t) {
                            return eE(this).gt(eE(t))
                        }
                    }, {
                        key: "gte",
                        value: function(t) {
                            return eE(this).gte(eE(t))
                        }
                    }, {
                        key: "isNegative",
                        value: function() {
                            return "-" === this._hex[0]
                        }
                    }, {
                        key: "isZero",
                        value: function() {
                            return eE(this).isZero()
                        }
                    }, {
                        key: "toNumber",
                        value: function() {
                            try {
                                return eE(this).toNumber()
                            } catch (t) {
                                e_("overflow", "toNumber", this.toString())
                            }
                            return null
                        }
                    }, {
                        key: "toBigInt",
                        value: function() {
                            try {
                                return BigInt(this.toString())
                            } catch (t) {}
                            return ev.throwError("this platform does not support BigInt", er.errors.UNSUPPORTED_OPERATION, {
                                value: this.toString()
                            })
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return arguments.length > 0 && (10 === arguments[0] ? ew || (ew = !0, ev.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? ev.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", er.errors.UNEXPECTED_ARGUMENT, {}) : ev.throwError("BigNumber.toString does not accept parameters", er.errors.UNEXPECTED_ARGUMENT, {})), eE(this).toString(10)
                        }
                    }, {
                        key: "toHexString",
                        value: function() {
                            return this._hex
                        }
                    }, {
                        key: "toJSON",
                        value: function(t) {
                            return {
                                type: "BigNumber",
                                hex: this.toHexString()
                            }
                        }
                    }], [{
                        key: "from",
                        value: function(e) {
                            if (e instanceof t) return e;
                            if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new t(eg, ek(e)) : e.match(/^-?[0-9]+$/) ? new t(eg, ek(new ey(e))) : ev.throwArgumentError("invalid BigNumber string", "value", e);
                            if ("number" == typeof e) return e % 1 && e_("underflow", "BigNumber.from", e), (e >= 9007199254740991 || e <= -9007199254740991) && e_("overflow", "BigNumber.from", e), t.from(String(e));
                            if ("bigint" == typeof e) return t.from(e.toString());
                            if (eu(e)) return t.from(ed(e));
                            if (e) {
                                if (e.toHexString) {
                                    var n = e.toHexString();
                                    if ("string" == typeof n) return t.from(n)
                                } else {
                                    var r = e._hex;
                                    if (null == r && "BigNumber" === e.type && (r = e.hex), "string" == typeof r && (eh(r) || "-" === r[0] && eh(r.substring(1)))) return t.from(r)
                                }
                            }
                            return ev.throwArgumentError("invalid BigNumber value", "value", e)
                        }
                    }, {
                        key: "isBigNumber",
                        value: function(t) {
                            return !!(t && t._isBigNumber)
                        }
                    }]), t
                }();

            function ek(t) {
                if ("string" != typeof t) return ek(t.toString(16));
                if ("-" === t[0]) return ("-" === (t = t.substring(1))[0] && ev.throwArgumentError("invalid hex", "value", t), "0x00" === (t = ek(t))) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function eM(t) {
                return eb.from(ek(t))
            }

            function eE(t) {
                var e = eb.from(t).toHexString();
                return "-" === e[0] ? new ey("-" + e.substring(3), 16) : new ey(e.substring(2), 16)
            }

            function e_(t, e, n) {
                var r = {
                    fault: t,
                    operation: e
                };
                return null != n && (r.value = n), ev.throwError(t, er.errors.NUMERIC_FAULT, r)
            }
            var eA = n(64700),
                eS = n.n(eA);

            function eC(t) {
                return "0x" + eS().keccak_256(ec(t))
            }
            var eN = new er("address/5.7.0");

            function eO(t) {
                eh(t, 20) || eN.throwArgumentError("invalid address", "address", t);
                for (var e = (t = t.toLowerCase()).substring(2).split(""), n = new Uint8Array(40), r = 0; r < 40; r++) n[r] = e[r].charCodeAt(0);
                for (var i = ec(eC(n)), o = 0; o < 40; o += 2) i[o >> 1] >> 4 >= 8 && (e[o] = e[o].toUpperCase()), (15 & i[o >> 1]) >= 8 && (e[o + 1] = e[o + 1].toUpperCase());
                return "0x" + e.join("")
            }
            for (var ex = {}, eR = 0; eR < 10; eR++) ex[String(eR)] = String(eR);
            for (var eI = 0; eI < 26; eI++) ex[String.fromCharCode(65 + eI)] = String(10 + eI);
            var eT = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

            function eP(t) {
                var e = null;
                if ("string" != typeof t && eN.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = eO(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && eN.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (t.substring(2, 4) !== function(t) {
                            for (var e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(function(t) {
                                    return ex[t]
                                }).join(""); e.length >= eT;) {
                                var n = e.substring(0, eT);
                                e = parseInt(n, 10) % 97 + e.substring(n.length)
                            }
                            for (var r = String(98 - parseInt(e, 10) % 97); r.length < 2;) r = "0" + r;
                            return r
                        }(t) && eN.throwArgumentError("bad icap checksum", "address", t), e = new ey(t.substring(4), 36).toString(16); e.length < 40;) e = "0" + e;
                    e = eO("0x" + e)
                } else eN.throwArgumentError("invalid address", "address", t);
                return e
            }
            var eB = new er("strings/5.7.0");

            function ej(t, e, n, r, i) {
                if (t === g.BAD_PREFIX || t === g.UNEXPECTED_CONTINUE) {
                    for (var o = 0, a = e + 1; a < n.length && n[a] >> 6 == 2; a++) o++;
                    return o
                }
                return t === g.OVERRUN ? n.length - e - 1 : 0
            }(f = v || (v = {})).current = "", f.NFC = "NFC", f.NFD = "NFD", f.NFKC = "NFKC", f.NFKD = "NFKD", (d = g || (g = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", d.BAD_PREFIX = "bad codepoint prefix", d.OVERRUN = "string overrun", d.MISSING_CONTINUE = "missing continuation byte", d.OUT_OF_RANGE = "out of UTF-8 range", d.UTF16_SURROGATE = "UTF-16 surrogate", d.OVERLONG = "overlong representation";
            var eD = Object.freeze({
                error: function(t, e, n, r, i) {
                    return eB.throwArgumentError("invalid codepoint at offset ".concat(e, "; ").concat(t), "bytes", n)
                },
                ignore: ej,
                replace: function(t, e, n, r, i) {
                    return t === g.OVERLONG ? (r.push(i), 0) : (r.push(65533), ej(t, e, n, r, i))
                }
            });

            function eL(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.current;
                e != v.current && (eB.checkNormalize(), t = t.normalize(e));
                for (var n = [], r = 0; r < t.length; r++) {
                    var i = t.charCodeAt(r);
                    if (i < 128) n.push(i);
                    else if (i < 2048) n.push(i >> 6 | 192), n.push(63 & i | 128);
                    else if ((64512 & i) == 55296) {
                        r++;
                        var o = t.charCodeAt(r);
                        if (r >= t.length || (64512 & o) != 56320) throw Error("invalid utf-8 string");
                        var a = 65536 + ((1023 & i) << 10) + (1023 & o);
                        n.push(a >> 18 | 240), n.push(a >> 12 & 63 | 128), n.push(a >> 6 & 63 | 128), n.push(63 & a | 128)
                    } else n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(63 & i | 128)
                }
                return ec(n)
            }
            n(76027);
            var eU = new er("properties/5.7.0");

            function eZ(t, e, n) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: n,
                    writable: !1
                })
            }

            function eF(t, e) {
                for (var n = 0; n < 32; n++) {
                    if (t[e]) return t[e];
                    if (!t.prototype || "object" != typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }
            var eW = {
                    bigint: !0,
                    boolean: !0,
                    function: !0,
                    number: !0,
                    string: !0
                },
                ez = (0, j.Z)(function t(e) {
                    for (var n in (0, B.Z)(this, t), e) this[n] = function t(e) {
                        return function(e) {
                            if (function t(e) {
                                    if (null == e || eW[typeof e]) return !0;
                                    if (Array.isArray(e) || "object" == typeof e) {
                                        if (!Object.isFrozen(e)) return !1;
                                        for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                                            var i = null;
                                            try {
                                                i = e[n[r]]
                                            } catch (t) {
                                                continue
                                            }
                                            if (!t(i)) return !1
                                        }
                                        return !0
                                    }
                                    return eU.throwArgumentError("Cannot deepCopy ".concat(typeof e), "object", e)
                                }(e)) return e;
                            if (Array.isArray(e)) return Object.freeze(e.map(function(e) {
                                return t(e)
                            }));
                            if ("object" == typeof e) {
                                var n = {};
                                for (var r in e) {
                                    var i = e[r];
                                    void 0 !== i && eZ(n, r, t(i))
                                }
                                return n
                            }
                            return eU.throwArgumentError("Cannot deepCopy ".concat(typeof e), "object", e)
                        }(e)
                    }(e[n])
                }),
                eV = "abi/5.7.0",
                eH = new er(eV),
                eG = function() {
                    function t(e, n, r, i) {
                        (0, B.Z)(this, t), this.name = e, this.type = n, this.localName = r, this.dynamic = i
                    }
                    return (0, j.Z)(t, [{
                        key: "_throwError",
                        value: function(t, e) {
                            eH.throwArgumentError(t, this.localName, e)
                        }
                    }]), t
                }(),
                eq = function() {
                    function t(e) {
                        (0, B.Z)(this, t), eZ(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
                    }
                    return (0, j.Z)(t, [{
                        key: "data",
                        get: function() {
                            var t, e;
                            return t = this._data, e = "0x", t.forEach(function(t) {
                                e += ed(t).substring(2)
                            }), e
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this._dataLength
                        }
                    }, {
                        key: "_writeData",
                        value: function(t) {
                            return this._data.push(t), this._dataLength += t.length, t.length
                        }
                    }, {
                        key: "appendWriter",
                        value: function(t) {
                            return this._writeData(el(t._data))
                        }
                    }, {
                        key: "writeBytes",
                        value: function(t) {
                            var e = ec(t),
                                n = e.length % this.wordSize;
                            return n && (e = el([e, this._padding.slice(n)])), this._writeData(e)
                        }
                    }, {
                        key: "_getValue",
                        value: function(t) {
                            var e = ec(eb.from(t));
                            return e.length > this.wordSize && eH.throwError("value out-of-bounds", er.errors.BUFFER_OVERRUN, {
                                length: this.wordSize,
                                offset: e.length
                            }), e.length % this.wordSize && (e = el([this._padding.slice(e.length % this.wordSize), e])), e
                        }
                    }, {
                        key: "writeValue",
                        value: function(t) {
                            return this._writeData(this._getValue(t))
                        }
                    }, {
                        key: "writeUpdatableValue",
                        value: function() {
                            var t = this,
                                e = this._data.length;
                            return this._data.push(this._padding), this._dataLength += this.wordSize,
                                function(n) {
                                    t._data[e] = t._getValue(n)
                                }
                        }
                    }]), t
                }(),
                eJ = function() {
                    function t(e, n, r, i) {
                        (0, B.Z)(this, t), eZ(this, "_data", ec(e)), eZ(this, "wordSize", n || 32), eZ(this, "_coerceFunc", r), eZ(this, "allowLoose", i), this._offset = 0
                    }
                    return (0, j.Z)(t, [{
                        key: "data",
                        get: function() {
                            return ed(this._data)
                        }
                    }, {
                        key: "consumed",
                        get: function() {
                            return this._offset
                        }
                    }, {
                        key: "coerce",
                        value: function(e, n) {
                            return this._coerceFunc ? this._coerceFunc(e, n) : t.coerce(e, n)
                        }
                    }, {
                        key: "_peekBytes",
                        value: function(t, e, n) {
                            var r = Math.ceil(e / this.wordSize) * this.wordSize;
                            return this._offset + r > this._data.length && (this.allowLoose && n && this._offset + e <= this._data.length ? r = e : eH.throwError("data out-of-bounds", er.errors.BUFFER_OVERRUN, {
                                length: this._data.length,
                                offset: this._offset + r
                            })), this._data.slice(this._offset, this._offset + r)
                        }
                    }, {
                        key: "subReader",
                        value: function(e) {
                            return new t(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
                        }
                    }, {
                        key: "readBytes",
                        value: function(t, e) {
                            var n = this._peekBytes(0, t, !!e);
                            return this._offset += n.length, n.slice(0, t)
                        }
                    }, {
                        key: "readValue",
                        value: function() {
                            return eb.from(this.readBytes(this.wordSize))
                        }
                    }], [{
                        key: "coerce",
                        value: function(t, e) {
                            var n = t.match("^u?int([0-9]+)$");
                            return n && 48 >= parseInt(n[1]) && (e = e.toNumber()), e
                        }
                    }]), t
                }(),
                eQ = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t) {
                        return (0, B.Z)(this, r), n.call(this, "address", "address", t, !1)
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return "0x0000000000000000000000000000000000000000"
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            try {
                                e = eP(e)
                            } catch (t) {
                                this._throwError(t.message, e)
                            }
                            return t.writeValue(e)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return eP(ep(t.readValue().toHexString(), 20))
                        }
                    }]), r
                }(eG),
                eK = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t) {
                        var e;
                        return (0, B.Z)(this, r), (e = n.call(this, t.name, t.type, void 0, t.dynamic)).coder = t, e
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return this.coder.defaultValue()
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            return this.coder.encode(t, e)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return this.coder.decode(t)
                        }
                    }]), r
                }(eG),
                eY = new er(eV);

            function eX(t, e, n) {
                var r = null;
                if (Array.isArray(n)) r = n;
                else if (n && "object" == typeof n) {
                    var i = {};
                    r = e.map(function(t) {
                        var e = t.localName;
                        return e || eY.throwError("cannot encode object for signature with missing names", er.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: t,
                            value: n
                        }), i[e] && eY.throwError("cannot encode object for signature with duplicate names", er.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: t,
                            value: n
                        }), i[e] = !0, n[e]
                    })
                } else eY.throwArgumentError("invalid tuple value", "tuple", n);
                e.length !== r.length && eY.throwArgumentError("types/value length mismatch", "tuple", n);
                var o = new eq(t.wordSize),
                    a = new eq(t.wordSize),
                    s = [];
                return e.forEach(function(t, e) {
                    var n = r[e];
                    if (t.dynamic) {
                        var i = a.length;
                        t.encode(a, n);
                        var u = o.writeUpdatableValue();
                        s.push(function(t) {
                            u(t + i)
                        })
                    } else t.encode(o, n)
                }), s.forEach(function(t) {
                    t(o.length)
                }), t.appendWriter(o) + t.appendWriter(a)
            }

            function e$(t, e) {
                var n = [],
                    r = t.subReader(0);
                e.forEach(function(e) {
                    var i = null;
                    if (e.dynamic) {
                        var o = t.readValue(),
                            a = r.subReader(o.toNumber());
                        try {
                            i = e.decode(a)
                        } catch (t) {
                            if (t.code === er.errors.BUFFER_OVERRUN) throw t;
                            (i = t).baseType = e.name, i.name = e.localName, i.type = e.type
                        }
                    } else try {
                        i = e.decode(t)
                    } catch (t) {
                        if (t.code === er.errors.BUFFER_OVERRUN) throw t;
                        (i = t).baseType = e.name, i.name = e.localName, i.type = e.type
                    }
                    void 0 != i && n.push(i)
                });
                var i = e.reduce(function(t, e) {
                    var n = e.localName;
                    return n && (t[n] || (t[n] = 0), t[n]++), t
                }, {});
                e.forEach(function(t, e) {
                    var r = t.localName;
                    if (r && 1 === i[r] && ("length" === r && (r = "_length"), null == n[r])) {
                        var o = n[e];
                        o instanceof Error ? Object.defineProperty(n, r, {
                            enumerable: !0,
                            get: function() {
                                throw o
                            }
                        }) : n[r] = o
                    }
                });
                for (var o = 0; o < n.length; o++) ! function() {
                    var t = n[o];
                    t instanceof Error && Object.defineProperty(n, o, {
                        enumerable: !0,
                        get: function() {
                            throw t
                        }
                    })
                }();
                return Object.freeze(n)
            }
            var e0 = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t, e, i) {
                        (0, B.Z)(this, r);
                        var o, a = t.type + "[" + (e >= 0 ? e : "") + "]",
                            s = -1 === e || t.dynamic;
                        return (o = n.call(this, "array", a, i, s)).coder = t, o.length = e, o
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            for (var t = this.coder.defaultValue(), e = [], n = 0; n < this.length; n++) e.push(t);
                            return e
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            Array.isArray(e) || this._throwError("expected array value", e);
                            var n = this.length; - 1 === n && (n = e.length, t.writeValue(e.length)), eY.checkArgumentCount(e.length, n, "coder array" + (this.localName ? " " + this.localName : ""));
                            for (var r = [], i = 0; i < e.length; i++) r.push(this.coder);
                            return eX(t, r, e)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            var e = this.length; - 1 === e && 32 * (e = t.readValue().toNumber()) > t._data.length && eY.throwError("insufficient data length", er.errors.BUFFER_OVERRUN, {
                                length: t._data.length,
                                count: e
                            });
                            for (var n = [], r = 0; r < e; r++) n.push(new eK(this.coder));
                            return t.coerce(this.name, e$(t, n))
                        }
                    }]), r
                }(eG),
                e1 = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t) {
                        return (0, B.Z)(this, r), n.call(this, "bool", "bool", t, !1)
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            return t.writeValue(e ? 1 : 0)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return t.coerce(this.type, !t.readValue().isZero())
                        }
                    }]), r
                }(eG),
                e2 = n(32210);

            function e3(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, t8.Z)(t);
                    if (e) {
                        var i = (0, t8.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return (0, t6.Z)(this, n)
                }
            }
            var e6 = function(t) {
                    (0, t3.Z)(n, t);
                    var e = e3(n);

                    function n(t, r) {
                        return (0, B.Z)(this, n), e.call(this, t, t, r, !0)
                    }
                    return (0, j.Z)(n, [{
                        key: "defaultValue",
                        value: function() {
                            return "0x"
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            return e = ec(e), t.writeValue(e.length) + t.writeBytes(e)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return t.readBytes(t.readValue().toNumber(), !0)
                        }
                    }]), n
                }(eG),
                e8 = function(t) {
                    (0, t3.Z)(n, t);
                    var e = e3(n);

                    function n(t) {
                        return (0, B.Z)(this, n), e.call(this, "bytes", t)
                    }
                    return (0, j.Z)(n, [{
                        key: "decode",
                        value: function(t) {
                            return t.coerce(this.name, ed((0, e2.Z)((0, t8.Z)(n.prototype), "decode", this).call(this, t)))
                        }
                    }]), n
                }(e6),
                e4 = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t, e) {
                        (0, B.Z)(this, r);
                        var i, o = "bytes" + String(t);
                        return (i = n.call(this, o, o, e, !1)).size = t, i
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            var n = ec(e);
                            return n.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(n)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return t.coerce(this.name, ed(t.readBytes(this.size)))
                        }
                    }]), r
                }(eG),
                e5 = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t) {
                        return (0, B.Z)(this, r), n.call(this, "null", "", t, !1)
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            return null != e && this._throwError("not null", e), t.writeBytes([])
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return t.readBytes(0), t.coerce(this.name, null)
                        }
                    }]), r
                }(eG),
                e7 = eb.from(-1),
                e9 = eb.from(0),
                nt = eb.from(1),
                ne = eb.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                nn = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t, e, i) {
                        (0, B.Z)(this, r);
                        var o, a = (e ? "int" : "uint") + 8 * t;
                        return (o = n.call(this, a, a, i, !1)).size = t, o.signed = e, o
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            var n = eb.from(e),
                                r = ne.mask(8 * t.wordSize);
                            if (this.signed) {
                                var i = r.mask(8 * this.size - 1);
                                (n.gt(i) || n.lt(i.add(nt).mul(e7))) && this._throwError("value out-of-bounds", e)
                            } else(n.lt(e9) || n.gt(r.mask(8 * this.size))) && this._throwError("value out-of-bounds", e);
                            return n = n.toTwos(8 * this.size).mask(8 * this.size), this.signed && (n = n.fromTwos(8 * this.size).toTwos(8 * t.wordSize)), t.writeValue(n)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            var e = t.readValue().mask(8 * this.size);
                            return this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
                        }
                    }]), r
                }(eG),
                nr = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t) {
                        return (0, B.Z)(this, r), n.call(this, "string", t)
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            return ""
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            return (0, e2.Z)((0, t8.Z)(r.prototype), "encode", this).call(this, t, eL(e))
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return (function(t, e) {
                                null == e && (e = eD.error), t = ec(t);
                                for (var n = [], r = 0; r < t.length;) {
                                    var i = t[r++];
                                    if (i >> 7 == 0) {
                                        n.push(i);
                                        continue
                                    }
                                    var o = null,
                                        a = null;
                                    if ((224 & i) == 192) o = 1, a = 127;
                                    else if ((240 & i) == 224) o = 2, a = 2047;
                                    else if ((248 & i) == 240) o = 3, a = 65535;
                                    else {
                                        (192 & i) == 128 ? r += e(g.UNEXPECTED_CONTINUE, r - 1, t, n) : r += e(g.BAD_PREFIX, r - 1, t, n);
                                        continue
                                    }
                                    if (r - 1 + o >= t.length) {
                                        r += e(g.OVERRUN, r - 1, t, n);
                                        continue
                                    }
                                    for (var s = i & (1 << 8 - o - 1) - 1, u = 0; u < o; u++) {
                                        var c = t[r];
                                        if ((192 & c) != 128) {
                                            r += e(g.MISSING_CONTINUE, r, t, n), s = null;
                                            break
                                        }
                                        s = s << 6 | 63 & c, r++
                                    }
                                    if (null !== s) {
                                        if (s > 1114111) {
                                            r += e(g.OUT_OF_RANGE, r - 1 - o, t, n, s);
                                            continue
                                        }
                                        if (s >= 55296 && s <= 57343) {
                                            r += e(g.UTF16_SURROGATE, r - 1 - o, t, n, s);
                                            continue
                                        }
                                        if (s <= a) {
                                            r += e(g.OVERLONG, r - 1 - o, t, n, s);
                                            continue
                                        }
                                        n.push(s)
                                    }
                                }
                                return n
                            })((0, e2.Z)((0, t8.Z)(r.prototype), "decode", this).call(this, t), void 0).map(function(t) {
                                return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10 & 1023) + 55296, (1023 & t) + 56320)
                            }).join("")
                        }
                    }]), r
                }(e6),
                ni = function(t) {
                    (0, t3.Z)(r, t);
                    var e, n = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n = (0, t8.Z)(r);
                        if (e) {
                            var i = (0, t8.Z)(this).constructor;
                            t = Reflect.construct(n, arguments, i)
                        } else t = n.apply(this, arguments);
                        return (0, t6.Z)(this, t)
                    });

                    function r(t, e) {
                        (0, B.Z)(this, r);
                        var i, o = !1,
                            a = [];
                        t.forEach(function(t) {
                            t.dynamic && (o = !0), a.push(t.type)
                        });
                        var s = "tuple(" + a.join(",") + ")";
                        return (i = n.call(this, "tuple", s, e, o)).coders = t, i
                    }
                    return (0, j.Z)(r, [{
                        key: "defaultValue",
                        value: function() {
                            var t = [];
                            this.coders.forEach(function(e) {
                                t.push(e.defaultValue())
                            });
                            var e = this.coders.reduce(function(t, e) {
                                var n = e.localName;
                                return n && (t[n] || (t[n] = 0), t[n]++), t
                            }, {});
                            return this.coders.forEach(function(n, r) {
                                var i = n.localName;
                                i && 1 === e[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[r]))
                            }), Object.freeze(t)
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            return eX(t, this.coders, e)
                        }
                    }, {
                        key: "decode",
                        value: function(t) {
                            return t.coerce(this.name, e$(t, this.coders))
                        }
                    }]), r
                }(eG);

            function no(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, t8.Z)(t);
                    if (e) {
                        var i = (0, t8.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return (0, t6.Z)(this, n)
                }
            }
            var na = new er(eV),
                ns = {},
                nu = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                nc = {
                    calldata: !0,
                    memory: !0
                };

            function nl(t, e) {
                if ("bytes" === t || "string" === t) {
                    if (nu[e]) return !0
                } else if ("address" === t) {
                    if ("payable" === e) return !0
                } else if ((t.indexOf("[") >= 0 || "tuple" === t) && nc[e]) return !0;
                return (nu[e] || "payable" === e) && na.throwArgumentError("invalid modifier", "name", e), !1
            }

            function nh(t, e) {
                for (var n in e) eZ(t, n, e[n])
            }
            var nf = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                nd = new RegExp(/^(.*)\[([0-9]*)\]$/),
                np = function() {
                    function t(e, n) {
                        (0, B.Z)(this, t), e !== ns && na.throwError("use fromString", er.errors.UNSUPPORTED_OPERATION, {
                            operation: "new ParamType()"
                        }), nh(this, n);
                        var r = this.type.match(nd);
                        r ? nh(this, {
                            arrayLength: parseInt(r[2] || "-1"),
                            arrayChildren: t.fromObject({
                                type: r[1],
                                components: this.components
                            }),
                            baseType: "array"
                        }) : nh(this, {
                            arrayLength: null,
                            arrayChildren: null,
                            baseType: null != this.components ? "tuple" : this.type
                        }), this._isParamType = !0, Object.freeze(this)
                    }
                    return (0, j.Z)(t, [{
                        key: "format",
                        value: function(t) {
                            if (t || (t = nf.sighash), nf[t] || na.throwArgumentError("invalid format type", "format", t), t === nf.json) {
                                var e = {
                                    type: "tuple" === this.baseType ? "tuple" : this.type,
                                    name: this.name || void 0
                                };
                                return "boolean" == typeof this.indexed && (e.indexed = this.indexed), this.components && (e.components = this.components.map(function(e) {
                                    return JSON.parse(e.format(t))
                                })), JSON.stringify(e)
                            }
                            var n = "";
                            return "array" === this.baseType ? n += this.arrayChildren.format(t) + "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]" : "tuple" === this.baseType ? (t !== nf.sighash && (n += this.type), n += "(" + this.components.map(function(e) {
                                return e.format(t)
                            }).join(t === nf.full ? ", " : ",") + ")") : n += this.type, t !== nf.sighash && (!0 === this.indexed && (n += " indexed"), t === nf.full && this.name && (n += " " + this.name)), n
                        }
                    }], [{
                        key: "from",
                        value: function(e, n) {
                            return "string" == typeof e ? t.fromString(e, n) : t.fromObject(e)
                        }
                    }, {
                        key: "fromObject",
                        value: function(e) {
                            return t.isParamType(e) ? e : new t(ns, {
                                name: e.name || null,
                                type: nA(e.type),
                                indexed: null == e.indexed ? null : !!e.indexed,
                                components: e.components ? e.components.map(t.fromObject) : null
                            })
                        }
                    }, {
                        key: "fromString",
                        value: function(e, n) {
                            var r;
                            return r = function(t, e) {
                                var n = t;

                                function r(e) {
                                    na.throwArgumentError("unexpected character at position ".concat(e), "param", t)
                                }

                                function i(t) {
                                    var n = {
                                        type: "",
                                        name: "",
                                        parent: t,
                                        state: {
                                            allowType: !0
                                        }
                                    };
                                    return e && (n.indexed = !1), n
                                }
                                t = t.replace(/\s/g, " ");
                                for (var o = {
                                        type: "",
                                        name: "",
                                        state: {
                                            allowType: !0
                                        }
                                    }, a = o, s = 0; s < t.length; s++) {
                                    var u = t[s];
                                    switch (u) {
                                        case "(":
                                            a.state.allowType && "" === a.type ? a.type = "tuple" : a.state.allowParams || r(s), a.state.allowType = !1, a.type = nA(a.type), a.components = [i(a)], a = a.components[0];
                                            break;
                                        case ")":
                                            delete a.state, "indexed" === a.name && (e || r(s), a.indexed = !0, a.name = ""), nl(a.type, a.name) && (a.name = ""), a.type = nA(a.type);
                                            var c = a;
                                            (a = a.parent) || r(s), delete c.parent, a.state.allowParams = !1, a.state.allowName = !0, a.state.allowArray = !0;
                                            break;
                                        case ",":
                                            delete a.state, "indexed" === a.name && (e || r(s), a.indexed = !0, a.name = ""), nl(a.type, a.name) && (a.name = ""), a.type = nA(a.type);
                                            var l = i(a.parent);
                                            a.parent.components.push(l), delete a.parent, a = l;
                                            break;
                                        case " ":
                                            a.state.allowType && "" !== a.type && (a.type = nA(a.type), delete a.state.allowType, a.state.allowName = !0, a.state.allowParams = !0), a.state.allowName && "" !== a.name && ("indexed" === a.name ? (e || r(s), a.indexed && r(s), a.indexed = !0, a.name = "") : nl(a.type, a.name) ? a.name = "" : a.state.allowName = !1);
                                            break;
                                        case "[":
                                            a.state.allowArray || r(s), a.type += u, a.state.allowArray = !1, a.state.allowName = !1, a.state.readArray = !0;
                                            break;
                                        case "]":
                                            a.state.readArray || r(s), a.type += u, a.state.readArray = !1, a.state.allowArray = !0, a.state.allowName = !0;
                                            break;
                                        default:
                                            a.state.allowType ? (a.type += u, a.state.allowParams = !0, a.state.allowArray = !0) : a.state.allowName ? (a.name += u, delete a.state.allowArray) : a.state.readArray ? a.type += u : r(s)
                                    }
                                }
                                return a.parent && na.throwArgumentError("unexpected eof", "param", t), delete o.state, "indexed" === a.name ? (e || r(n.length - 7), a.indexed && r(n.length - 7), a.indexed = !0, a.name = "") : nl(a.type, a.name) && (a.name = ""), o.type = nA(o.type), o
                            }(e, !!n), t.fromObject({
                                name: r.name,
                                type: r.type,
                                indexed: r.indexed,
                                components: r.components
                            })
                        }
                    }, {
                        key: "isParamType",
                        value: function(t) {
                            return !!(null != t && t._isParamType)
                        }
                    }]), t
                }();

            function nm(t, e) {
                return (function(t) {
                    t = t.trim();
                    for (var e = [], n = "", r = 0, i = 0; i < t.length; i++) {
                        var o = t[i];
                        "," === o && 0 === r ? (e.push(n), n = "") : (n += o, "(" === o ? r++ : ")" === o && -1 == --r && na.throwArgumentError("unbalanced parenthesis", "value", t))
                    }
                    return n && e.push(n), e
                })(t).map(function(t) {
                    return np.fromString(t, e)
                })
            }
            var ny = function() {
                    function t(e, n) {
                        (0, B.Z)(this, t), e !== ns && na.throwError("use a static from method", er.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Fragment()"
                        }), nh(this, n), this._isFragment = !0, Object.freeze(this)
                    }
                    return (0, j.Z)(t, null, [{
                        key: "from",
                        value: function(e) {
                            return t.isFragment(e) ? e : "string" == typeof e ? t.fromString(e) : t.fromObject(e)
                        }
                    }, {
                        key: "fromObject",
                        value: function(e) {
                            if (t.isFragment(e)) return e;
                            switch (e.type) {
                                case "function":
                                    return nM.fromObject(e);
                                case "event":
                                    return nv.fromObject(e);
                                case "constructor":
                                    return nk.fromObject(e);
                                case "error":
                                    return n_.fromObject(e);
                                case "fallback":
                                case "receive":
                                    return null
                            }
                            return na.throwArgumentError("invalid fragment object", "value", e)
                        }
                    }, {
                        key: "fromString",
                        value: function(t) {
                            return "event" === (t = (t = (t = t.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? nv.fromString(t.substring(5).trim()) : "function" === t.split(" ")[0] ? nM.fromString(t.substring(8).trim()) : "constructor" === t.split("(")[0].trim() ? nk.fromString(t.trim()) : "error" === t.split(" ")[0] ? n_.fromString(t.substring(5).trim()) : na.throwArgumentError("unsupported fragment", "value", t)
                        }
                    }, {
                        key: "isFragment",
                        value: function(t) {
                            return !!(t && t._isFragment)
                        }
                    }]), t
                }(),
                nv = function(t) {
                    (0, t3.Z)(n, t);
                    var e = no(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n, [{
                        key: "format",
                        value: function(t) {
                            if (t || (t = nf.sighash), nf[t] || na.throwArgumentError("invalid format type", "format", t), t === nf.json) return JSON.stringify({
                                type: "event",
                                anonymous: this.anonymous,
                                name: this.name,
                                inputs: this.inputs.map(function(e) {
                                    return JSON.parse(e.format(t))
                                })
                            });
                            var e = "";
                            return t !== nf.sighash && (e += "event "), e += this.name + "(" + this.inputs.map(function(e) {
                                return e.format(t)
                            }).join(t === nf.full ? ", " : ",") + ") ", t !== nf.sighash && this.anonymous && (e += "anonymous "), e.trim()
                        }
                    }], [{
                        key: "from",
                        value: function(t) {
                            return "string" == typeof t ? n.fromString(t) : n.fromObject(t)
                        }
                    }, {
                        key: "fromObject",
                        value: function(t) {
                            return n.isEventFragment(t) ? t : ("event" !== t.type && na.throwArgumentError("invalid event object", "value", t), new n(ns, {
                                name: nC(t.name),
                                anonymous: t.anonymous,
                                inputs: t.inputs ? t.inputs.map(np.fromObject) : [],
                                type: "event"
                            }))
                        }
                    }, {
                        key: "fromString",
                        value: function(t) {
                            var e = t.match(nN);
                            e || na.throwArgumentError("invalid event string", "value", t);
                            var r = !1;
                            return e[3].split(" ").forEach(function(t) {
                                switch (t.trim()) {
                                    case "anonymous":
                                        r = !0;
                                        break;
                                    case "":
                                        break;
                                    default:
                                        na.warn("unknown modifier: " + t)
                                }
                            }), n.fromObject({
                                name: e[1].trim(),
                                anonymous: r,
                                inputs: nm(e[2], !0),
                                type: "event"
                            })
                        }
                    }, {
                        key: "isEventFragment",
                        value: function(t) {
                            return t && t._isFragment && "event" === t.type
                        }
                    }]), n
                }(ny);

            function ng(t, e) {
                e.gas = null;
                var n = t.split("@");
                return 1 !== n.length ? (n.length > 2 && na.throwArgumentError("invalid human-readable ABI signature", "value", t), n[1].match(/^[0-9]+$/) || na.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = eb.from(n[1]), n[0]) : t
            }

            function nw(t, e) {
                e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", t.split(" ").forEach(function(t) {
                    switch (t.trim()) {
                        case "constant":
                            e.constant = !0;
                            break;
                        case "payable":
                            e.payable = !0, e.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            e.payable = !1, e.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            e.constant = !0, e.stateMutability = "pure";
                            break;
                        case "view":
                            e.constant = !0, e.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + t)
                    }
                })
            }

            function nb(t) {
                var e = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != t.stateMutability ? (e.stateMutability = t.stateMutability, e.constant = "view" === e.stateMutability || "pure" === e.stateMutability, null != t.constant && !!t.constant !== e.constant && na.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = "payable" === e.stateMutability, null != t.payable && !!t.payable !== e.payable && na.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : null != t.payable ? (e.payable = !!t.payable, null != t.constant || e.payable || "constructor" === t.type || na.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && na.throwArgumentError("cannot have constant payable function", "value", t)) : null != t.constant ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : "constructor" !== t.type && na.throwArgumentError("unable to determine stateMutability", "value", t), e
            }
            var nk = function(t) {
                    (0, t3.Z)(n, t);
                    var e = no(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n, [{
                        key: "format",
                        value: function(t) {
                            if (t || (t = nf.sighash), nf[t] || na.throwArgumentError("invalid format type", "format", t), t === nf.json) return JSON.stringify({
                                type: "constructor",
                                stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                                payable: this.payable,
                                gas: this.gas ? this.gas.toNumber() : void 0,
                                inputs: this.inputs.map(function(e) {
                                    return JSON.parse(e.format(t))
                                })
                            });
                            t === nf.sighash && na.throwError("cannot format a constructor for sighash", er.errors.UNSUPPORTED_OPERATION, {
                                operation: "format(sighash)"
                            });
                            var e = "constructor(" + this.inputs.map(function(e) {
                                return e.format(t)
                            }).join(t === nf.full ? ", " : ",") + ") ";
                            return this.stateMutability && "nonpayable" !== this.stateMutability && (e += this.stateMutability + " "), e.trim()
                        }
                    }], [{
                        key: "from",
                        value: function(t) {
                            return "string" == typeof t ? n.fromString(t) : n.fromObject(t)
                        }
                    }, {
                        key: "fromObject",
                        value: function(t) {
                            if (n.isConstructorFragment(t)) return t;
                            "constructor" !== t.type && na.throwArgumentError("invalid constructor object", "value", t);
                            var e = nb(t);
                            return e.constant && na.throwArgumentError("constructor cannot be constant", "value", t), new n(ns, {
                                name: null,
                                type: t.type,
                                inputs: t.inputs ? t.inputs.map(np.fromObject) : [],
                                payable: e.payable,
                                stateMutability: e.stateMutability,
                                gas: t.gas ? eb.from(t.gas) : null
                            })
                        }
                    }, {
                        key: "fromString",
                        value: function(t) {
                            var e = {
                                    type: "constructor"
                                },
                                r = (t = ng(t, e)).match(nN);
                            return r && "constructor" === r[1].trim() || na.throwArgumentError("invalid constructor string", "value", t), e.inputs = nm(r[2].trim(), !1), nw(r[3].trim(), e), n.fromObject(e)
                        }
                    }, {
                        key: "isConstructorFragment",
                        value: function(t) {
                            return t && t._isFragment && "constructor" === t.type
                        }
                    }]), n
                }(ny),
                nM = function(t) {
                    (0, t3.Z)(n, t);
                    var e = no(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n, [{
                        key: "format",
                        value: function(t) {
                            if (t || (t = nf.sighash), nf[t] || na.throwArgumentError("invalid format type", "format", t), t === nf.json) return JSON.stringify({
                                type: "function",
                                name: this.name,
                                constant: this.constant,
                                stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                                payable: this.payable,
                                gas: this.gas ? this.gas.toNumber() : void 0,
                                inputs: this.inputs.map(function(e) {
                                    return JSON.parse(e.format(t))
                                }),
                                outputs: this.outputs.map(function(e) {
                                    return JSON.parse(e.format(t))
                                })
                            });
                            var e = "";
                            return t !== nf.sighash && (e += "function "), e += this.name + "(" + this.inputs.map(function(e) {
                                return e.format(t)
                            }).join(t === nf.full ? ", " : ",") + ") ", t !== nf.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (e += this.stateMutability + " ") : this.constant && (e += "view "), this.outputs && this.outputs.length && (e += "returns (" + this.outputs.map(function(e) {
                                return e.format(t)
                            }).join(", ") + ") "), null != this.gas && (e += "@" + this.gas.toString() + " ")), e.trim()
                        }
                    }], [{
                        key: "from",
                        value: function(t) {
                            return "string" == typeof t ? n.fromString(t) : n.fromObject(t)
                        }
                    }, {
                        key: "fromObject",
                        value: function(t) {
                            if (n.isFunctionFragment(t)) return t;
                            "function" !== t.type && na.throwArgumentError("invalid function object", "value", t);
                            var e = nb(t);
                            return new n(ns, {
                                type: t.type,
                                name: nC(t.name),
                                constant: e.constant,
                                inputs: t.inputs ? t.inputs.map(np.fromObject) : [],
                                outputs: t.outputs ? t.outputs.map(np.fromObject) : [],
                                payable: e.payable,
                                stateMutability: e.stateMutability,
                                gas: t.gas ? eb.from(t.gas) : null
                            })
                        }
                    }, {
                        key: "fromString",
                        value: function(t) {
                            var e = {
                                    type: "function"
                                },
                                r = (t = ng(t, e)).split(" returns ");
                            r.length > 2 && na.throwArgumentError("invalid function string", "value", t);
                            var i = r[0].match(nN);
                            if (i || na.throwArgumentError("invalid function signature", "value", t), e.name = i[1].trim(), e.name && nC(e.name), e.inputs = nm(i[2], !1), nw(i[3].trim(), e), r.length > 1) {
                                var o = r[1].match(nN);
                                ("" != o[1].trim() || "" != o[3].trim()) && na.throwArgumentError("unexpected tokens", "value", t), e.outputs = nm(o[2], !1)
                            } else e.outputs = [];
                            return n.fromObject(e)
                        }
                    }, {
                        key: "isFunctionFragment",
                        value: function(t) {
                            return t && t._isFragment && "function" === t.type
                        }
                    }]), n
                }(nk);

            function nE(t) {
                var e = t.format();
                return ("Error(string)" === e || "Panic(uint256)" === e) && na.throwArgumentError("cannot specify user defined ".concat(e, " error"), "fragment", t), t
            }
            var n_ = function(t) {
                (0, t3.Z)(n, t);
                var e = no(n);

                function n() {
                    return (0, B.Z)(this, n), e.apply(this, arguments)
                }
                return (0, j.Z)(n, [{
                    key: "format",
                    value: function(t) {
                        if (t || (t = nf.sighash), nf[t] || na.throwArgumentError("invalid format type", "format", t), t === nf.json) return JSON.stringify({
                            type: "error",
                            name: this.name,
                            inputs: this.inputs.map(function(e) {
                                return JSON.parse(e.format(t))
                            })
                        });
                        var e = "";
                        return t !== nf.sighash && (e += "error "), (e += this.name + "(" + this.inputs.map(function(e) {
                            return e.format(t)
                        }).join(t === nf.full ? ", " : ",") + ") ").trim()
                    }
                }], [{
                    key: "from",
                    value: function(t) {
                        return "string" == typeof t ? n.fromString(t) : n.fromObject(t)
                    }
                }, {
                    key: "fromObject",
                    value: function(t) {
                        return n.isErrorFragment(t) ? t : ("error" !== t.type && na.throwArgumentError("invalid error object", "value", t), nE(new n(ns, {
                            type: t.type,
                            name: nC(t.name),
                            inputs: t.inputs ? t.inputs.map(np.fromObject) : []
                        })))
                    }
                }, {
                    key: "fromString",
                    value: function(t) {
                        var e = {
                                type: "error"
                            },
                            r = t.match(nN);
                        return r || na.throwArgumentError("invalid error signature", "value", t), e.name = r[1].trim(), e.name && nC(e.name), e.inputs = nm(r[2], !1), nE(n.fromObject(e))
                    }
                }, {
                    key: "isErrorFragment",
                    value: function(t) {
                        return t && t._isFragment && "error" === t.type
                    }
                }]), n
            }(ny);

            function nA(t) {
                return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t
            }
            var nS = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

            function nC(t) {
                return t && t.match(nS) || na.throwArgumentError('invalid identifier "'.concat(t, '"'), "value", t), t
            }
            var nN = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),
                nO = new er(eV),
                nx = new RegExp(/^bytes([0-9]*)$/),
                nR = new RegExp(/^(u?int)([0-9]*)$/),
                nI = new(function() {
                    function t(e) {
                        (0, B.Z)(this, t), eZ(this, "coerceFunc", e || null)
                    }
                    return (0, j.Z)(t, [{
                        key: "_getCoder",
                        value: function(t) {
                            var e = this;
                            switch (t.baseType) {
                                case "address":
                                    return new eQ(t.name);
                                case "bool":
                                    return new e1(t.name);
                                case "string":
                                    return new nr(t.name);
                                case "bytes":
                                    return new e8(t.name);
                                case "array":
                                    return new e0(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
                                case "tuple":
                                    return new ni((t.components || []).map(function(t) {
                                        return e._getCoder(t)
                                    }), t.name);
                                case "":
                                    return new e5(t.name)
                            }
                            var n = t.type.match(nR);
                            if (n) {
                                var r = parseInt(n[2] || "256");
                                return (0 === r || r > 256 || r % 8 != 0) && nO.throwArgumentError("invalid " + n[1] + " bit length", "param", t), new nn(r / 8, "int" === n[1], t.name)
                            }
                            if (n = t.type.match(nx)) {
                                var i = parseInt(n[1]);
                                return (0 === i || i > 32) && nO.throwArgumentError("invalid bytes length", "param", t), new e4(i, t.name)
                            }
                            return nO.throwArgumentError("invalid type", "type", t.type)
                        }
                    }, {
                        key: "_getWordSize",
                        value: function() {
                            return 32
                        }
                    }, {
                        key: "_getReader",
                        value: function(t, e) {
                            return new eJ(t, this._getWordSize(), this.coerceFunc, e)
                        }
                    }, {
                        key: "_getWriter",
                        value: function() {
                            return new eq(this._getWordSize())
                        }
                    }, {
                        key: "getDefaultValue",
                        value: function(t) {
                            var e = this;
                            return new ni(t.map(function(t) {
                                return e._getCoder(np.from(t))
                            }), "_").defaultValue()
                        }
                    }, {
                        key: "encode",
                        value: function(t, e) {
                            var n = this;
                            t.length !== e.length && nO.throwError("types/values length mismatch", er.errors.INVALID_ARGUMENT, {
                                count: {
                                    types: t.length,
                                    values: e.length
                                },
                                value: {
                                    types: t,
                                    values: e
                                }
                            });
                            var r = new ni(t.map(function(t) {
                                    return n._getCoder(np.from(t))
                                }), "_"),
                                i = this._getWriter();
                            return r.encode(i, e), i.data
                        }
                    }, {
                        key: "decode",
                        value: function(t, e, n) {
                            var r = this;
                            return new ni(t.map(function(t) {
                                return r._getCoder(np.from(t))
                            }), "_").decode(this._getReader(ec(e), n))
                        }
                    }]), t
                }());

            function nT(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, t8.Z)(t);
                    if (e) {
                        var i = (0, t8.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return (0, t6.Z)(this, n)
                }
            }
            var nP = new er(eV),
                nB = function(t) {
                    (0, t3.Z)(n, t);
                    var e = nT(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n)
                }(ez),
                nj = function(t) {
                    (0, t3.Z)(n, t);
                    var e = nT(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n)
                }(ez),
                nD = function(t) {
                    (0, t3.Z)(n, t);
                    var e = nT(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n)
                }(ez),
                nL = function(t) {
                    (0, t3.Z)(n, t);
                    var e = nT(n);

                    function n() {
                        return (0, B.Z)(this, n), e.apply(this, arguments)
                    }
                    return (0, j.Z)(n, null, [{
                        key: "isIndexed",
                        value: function(t) {
                            return !!(t && t._isIndexed)
                        }
                    }]), n
                }(ez),
                nU = {
                    "0x08c379a0": {
                        signature: "Error(string)",
                        name: "Error",
                        inputs: ["string"],
                        reason: !0
                    },
                    "0x4e487b71": {
                        signature: "Panic(uint256)",
                        name: "Panic",
                        inputs: ["uint256"]
                    }
                };

            function nZ(t, e) {
                var n = Error("deferred error during ABI decoding triggered accessing ".concat(t));
                return n.error = e, n
            }
            var nF = function() {
                    function t(e) {
                        var n = this;
                        (0, B.Z)(this, t);
                        eZ(this, "fragments", ("string" == typeof e ? JSON.parse(e) : e).map(function(t) {
                            return ny.from(t)
                        }).filter(function(t) {
                            return null != t
                        })), eZ(this, "_abiCoder", eF(this instanceof t ? this.constructor : void 0, "getAbiCoder")()), eZ(this, "functions", {}), eZ(this, "errors", {}), eZ(this, "events", {}), eZ(this, "structs", {}), this.fragments.forEach(function(t) {
                            var e = null;
                            switch (t.type) {
                                case "constructor":
                                    if (n.deploy) {
                                        nP.warn("duplicate definition - constructor");
                                        return
                                    }
                                    eZ(n, "deploy", t);
                                    return;
                                case "function":
                                    e = n.functions;
                                    break;
                                case "event":
                                    e = n.events;
                                    break;
                                case "error":
                                    e = n.errors;
                                    break;
                                default:
                                    return
                            }
                            var r = t.format();
                            if (e[r]) {
                                nP.warn("duplicate definition - " + r);
                                return
                            }
                            e[r] = t
                        }), this.deploy || eZ(this, "deploy", nk.from({
                            payable: !1,
                            type: "constructor"
                        })), eZ(this, "_isInterface", !0)
                    }
                    return (0, j.Z)(t, [{
                        key: "format",
                        value: function(t) {
                            t || (t = nf.full), t === nf.sighash && nP.throwArgumentError("interface does not support formatting sighash", "format", t);
                            var e = this.fragments.map(function(e) {
                                return e.format(t)
                            });
                            return t === nf.json ? JSON.stringify(e.map(function(t) {
                                return JSON.parse(t)
                            })) : e
                        }
                    }, {
                        key: "getFunction",
                        value: function(t) {
                            if (eh(t)) {
                                for (var e in this.functions)
                                    if (t === this.getSighash(e)) return this.functions[e];
                                nP.throwArgumentError("no matching function", "sighash", t)
                            }
                            if (-1 === t.indexOf("(")) {
                                var n = t.trim(),
                                    r = Object.keys(this.functions).filter(function(t) {
                                        return t.split("(")[0] === n
                                    });
                                return 0 === r.length ? nP.throwArgumentError("no matching function", "name", n) : r.length > 1 && nP.throwArgumentError("multiple matching functions", "name", n), this.functions[r[0]]
                            }
                            var i = this.functions[nM.fromString(t).format()];
                            return i || nP.throwArgumentError("no matching function", "signature", t), i
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            if (eh(t)) {
                                var e = t.toLowerCase();
                                for (var n in this.events)
                                    if (e === this.getEventTopic(n)) return this.events[n];
                                nP.throwArgumentError("no matching event", "topichash", e)
                            }
                            if (-1 === t.indexOf("(")) {
                                var r = t.trim(),
                                    i = Object.keys(this.events).filter(function(t) {
                                        return t.split("(")[0] === r
                                    });
                                return 0 === i.length ? nP.throwArgumentError("no matching event", "name", r) : i.length > 1 && nP.throwArgumentError("multiple matching events", "name", r), this.events[i[0]]
                            }
                            var o = this.events[nv.fromString(t).format()];
                            return o || nP.throwArgumentError("no matching event", "signature", t), o
                        }
                    }, {
                        key: "getError",
                        value: function(t) {
                            if (eh(t)) {
                                var e = eF(this.constructor, "getSighash");
                                for (var n in this.errors)
                                    if (t === e(this.errors[n])) return this.errors[n];
                                nP.throwArgumentError("no matching error", "sighash", t)
                            }
                            if (-1 === t.indexOf("(")) {
                                var r = t.trim(),
                                    i = Object.keys(this.errors).filter(function(t) {
                                        return t.split("(")[0] === r
                                    });
                                return 0 === i.length ? nP.throwArgumentError("no matching error", "name", r) : i.length > 1 && nP.throwArgumentError("multiple matching errors", "name", r), this.errors[i[0]]
                            }
                            var o = this.errors[nM.fromString(t).format()];
                            return o || nP.throwArgumentError("no matching error", "signature", t), o
                        }
                    }, {
                        key: "getSighash",
                        value: function(t) {
                            if ("string" == typeof t) try {
                                t = this.getFunction(t)
                            } catch (e) {
                                try {
                                    t = this.getError(t)
                                } catch (t) {
                                    throw e
                                }
                            }
                            return eF(this.constructor, "getSighash")(t)
                        }
                    }, {
                        key: "getEventTopic",
                        value: function(t) {
                            return "string" == typeof t && (t = this.getEvent(t)), eF(this.constructor, "getEventTopic")(t)
                        }
                    }, {
                        key: "_decodeParams",
                        value: function(t, e) {
                            return this._abiCoder.decode(t, e)
                        }
                    }, {
                        key: "_encodeParams",
                        value: function(t, e) {
                            return this._abiCoder.encode(t, e)
                        }
                    }, {
                        key: "encodeDeploy",
                        value: function(t) {
                            return this._encodeParams(this.deploy.inputs, t || [])
                        }
                    }, {
                        key: "decodeErrorResult",
                        value: function(t, e) {
                            "string" == typeof t && (t = this.getError(t));
                            var n = ec(e);
                            return ed(n.slice(0, 4)) !== this.getSighash(t) && nP.throwArgumentError("data signature does not match error ".concat(t.name, "."), "data", ed(n)), this._decodeParams(t.inputs, n.slice(4))
                        }
                    }, {
                        key: "encodeErrorResult",
                        value: function(t, e) {
                            return "string" == typeof t && (t = this.getError(t)), ed(el([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                        }
                    }, {
                        key: "decodeFunctionData",
                        value: function(t, e) {
                            "string" == typeof t && (t = this.getFunction(t));
                            var n = ec(e);
                            return ed(n.slice(0, 4)) !== this.getSighash(t) && nP.throwArgumentError("data signature does not match function ".concat(t.name, "."), "data", ed(n)), this._decodeParams(t.inputs, n.slice(4))
                        }
                    }, {
                        key: "encodeFunctionData",
                        value: function(t, e) {
                            return "string" == typeof t && (t = this.getFunction(t)), ed(el([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                        }
                    }, {
                        key: "decodeFunctionResult",
                        value: function(t, e) {
                            "string" == typeof t && (t = this.getFunction(t));
                            var n = ec(e),
                                r = null,
                                i = "",
                                o = null,
                                a = null,
                                s = null;
                            switch (n.length % this._abiCoder._getWordSize()) {
                                case 0:
                                    try {
                                        return this._abiCoder.decode(t.outputs, n)
                                    } catch (t) {}
                                    break;
                                case 4:
                                    var u = ed(n.slice(0, 4)),
                                        c = nU[u];
                                    if (c) o = this._abiCoder.decode(c.inputs, n.slice(4)), a = c.name, s = c.signature, c.reason && (r = o[0]), "Error" === a ? i = "; VM Exception while processing transaction: reverted with reason string ".concat(JSON.stringify(o[0])) : "Panic" === a && (i = "; VM Exception while processing transaction: reverted with panic code ".concat(o[0]));
                                    else try {
                                        var l = this.getError(u);
                                        o = this._abiCoder.decode(l.inputs, n.slice(4)), a = l.name, s = l.format()
                                    } catch (t) {}
                            }
                            return nP.throwError("call revert exception" + i, er.errors.CALL_EXCEPTION, {
                                method: t.format(),
                                data: ed(e),
                                errorArgs: o,
                                errorName: a,
                                errorSignature: s,
                                reason: r
                            })
                        }
                    }, {
                        key: "encodeFunctionResult",
                        value: function(t, e) {
                            return "string" == typeof t && (t = this.getFunction(t)), ed(this._abiCoder.encode(t.outputs, e || []))
                        }
                    }, {
                        key: "encodeFilterTopics",
                        value: function(t, e) {
                            var n = this;
                            "string" == typeof t && (t = this.getEvent(t)), e.length > t.inputs.length && nP.throwError("too many arguments for " + t.format(), er.errors.UNEXPECTED_ARGUMENT, {
                                argument: "values",
                                value: e
                            });
                            var r = [];
                            t.anonymous || r.push(this.getEventTopic(t));
                            var i = function(t, e) {
                                return "string" === t.type ? eC(eL(e)) : "bytes" === t.type ? eC(ed(e)) : ("bool" === t.type && "boolean" == typeof e && (e = e ? "0x01" : "0x00"), t.type.match(/^u?int/) && (e = eb.from(e).toHexString()), "address" === t.type && n._abiCoder.encode(["address"], [e]), ep(ed(e), 32))
                            };
                            for (e.forEach(function(e, n) {
                                    var o = t.inputs[n];
                                    if (!o.indexed) {
                                        null != e && nP.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + o.name, e);
                                        return
                                    }
                                    null == e ? r.push(null) : "array" === o.baseType || "tuple" === o.baseType ? nP.throwArgumentError("filtering with tuples or arrays not supported", "contract." + o.name, e) : Array.isArray(e) ? r.push(e.map(function(t) {
                                        return i(o, t)
                                    })) : r.push(i(o, e))
                                }); r.length && null === r[r.length - 1];) r.pop();
                            return r
                        }
                    }, {
                        key: "encodeEventLog",
                        value: function(t, e) {
                            var n = this;
                            "string" == typeof t && (t = this.getEvent(t));
                            var r = [],
                                i = [],
                                o = [];
                            return t.anonymous || r.push(this.getEventTopic(t)), e.length !== t.inputs.length && nP.throwArgumentError("event arguments/values mismatch", "values", e), t.inputs.forEach(function(t, a) {
                                var s = e[a];
                                if (t.indexed) {
                                    if ("string" === t.type) r.push(eC(eL(s)));
                                    else if ("bytes" === t.type) r.push(eC(s));
                                    else if ("tuple" === t.baseType || "array" === t.baseType) throw Error("not implemented");
                                    else r.push(n._abiCoder.encode([t.type], [s]))
                                } else i.push(t), o.push(s)
                            }), {
                                data: this._abiCoder.encode(i, o),
                                topics: r
                            }
                        }
                    }, {
                        key: "decodeEventLog",
                        value: function(t, e, n) {
                            if ("string" == typeof t && (t = this.getEvent(t)), null != n && !t.anonymous) {
                                var r = this.getEventTopic(t);
                                eh(n[0], 32) && n[0].toLowerCase() === r || nP.throwError("fragment/topic mismatch", er.errors.INVALID_ARGUMENT, {
                                    argument: "topics[0]",
                                    expected: r,
                                    value: n[0]
                                }), n = n.slice(1)
                            }
                            var i = [],
                                o = [],
                                a = [];
                            t.inputs.forEach(function(t, e) {
                                t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (i.push(np.fromObject({
                                    type: "bytes32",
                                    name: t.name
                                })), a.push(!0)) : (i.push(t), a.push(!1)) : (o.push(t), a.push(!1))
                            });
                            var s = null != n ? this._abiCoder.decode(i, el(n)) : null,
                                u = this._abiCoder.decode(o, e, !0),
                                c = [],
                                l = 0,
                                h = 0;
                            t.inputs.forEach(function(t, e) {
                                if (t.indexed) {
                                    if (null == s) c[e] = new nL({
                                        _isIndexed: !0,
                                        hash: null
                                    });
                                    else if (a[e]) c[e] = new nL({
                                        _isIndexed: !0,
                                        hash: s[h++]
                                    });
                                    else try {
                                        c[e] = s[h++]
                                    } catch (t) {
                                        c[e] = t
                                    }
                                } else try {
                                    c[e] = u[l++]
                                } catch (t) {
                                    c[e] = t
                                }
                                if (t.name && null == c[t.name]) {
                                    var n = c[e];
                                    n instanceof Error ? Object.defineProperty(c, t.name, {
                                        enumerable: !0,
                                        get: function() {
                                            throw nZ("property ".concat(JSON.stringify(t.name)), n)
                                        }
                                    }) : c[t.name] = n
                                }
                            });
                            for (var f = function(t) {
                                    var e = c[t];
                                    e instanceof Error && Object.defineProperty(c, t, {
                                        enumerable: !0,
                                        get: function() {
                                            throw nZ("index ".concat(t), e)
                                        }
                                    })
                                }, d = 0; d < c.length; d++) f(d);
                            return Object.freeze(c)
                        }
                    }, {
                        key: "parseTransaction",
                        value: function(t) {
                            var e = this.getFunction(t.data.substring(0, 10).toLowerCase());
                            return e ? new nj({
                                args: this._abiCoder.decode(e.inputs, "0x" + t.data.substring(10)),
                                functionFragment: e,
                                name: e.name,
                                signature: e.format(),
                                sighash: this.getSighash(e),
                                value: eb.from(t.value || "0")
                            }) : null
                        }
                    }, {
                        key: "parseLog",
                        value: function(t) {
                            var e = this.getEvent(t.topics[0]);
                            return !e || e.anonymous ? null : new nB({
                                eventFragment: e,
                                name: e.name,
                                signature: e.format(),
                                topic: this.getEventTopic(e),
                                args: this.decodeEventLog(e, t.data, t.topics)
                            })
                        }
                    }, {
                        key: "parseError",
                        value: function(t) {
                            var e = ed(t),
                                n = this.getError(e.substring(0, 10).toLowerCase());
                            return n ? new nD({
                                args: this._abiCoder.decode(n.inputs, "0x" + e.substring(10)),
                                errorFragment: n,
                                name: n.name,
                                signature: n.format(),
                                sighash: this.getSighash(n)
                            }) : null
                        }
                    }], [{
                        key: "getAbiCoder",
                        value: function() {
                            return nI
                        }
                    }, {
                        key: "getAddress",
                        value: function(t) {
                            return eP(t)
                        }
                    }, {
                        key: "getSighash",
                        value: function(t) {
                            var e, n;
                            return e = eC(eL(t.format())), n = 0, "string" != typeof e ? e = ed(e) : (!eh(e) || e.length % 2) && ei.throwArgumentError("invalid hexData", "value", e), n = 2 + 2 * n, "0x" + e.substring(n, 10)
                        }
                    }, {
                        key: "getEventTopic",
                        value: function(t) {
                            return eC(eL(t.format()))
                        }
                    }, {
                        key: "isInterface",
                        value: function(t) {
                            return !!(t && t._isInterface)
                        }
                    }]), t
                }(),
                nW = n(97901),
                nz = n(23736);

            function nV(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function nH(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function nG(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            nH(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            nH(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }

            function nq(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }

            function nJ(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function nQ(t, e, n) {
                return e && nJ(t.prototype, e), n && nJ(t, n), t
            }

            function nK(t) {
                return (nK = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function nY(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && nX(t, e)
            }

            function nX(t, e) {
                return (nX = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function n$(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }

            function n0(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r, i = nK(t);
                    if (e) {
                        var o = nK(this).constructor;
                        r = Reflect.construct(i, arguments, o)
                    } else r = i.apply(this, arguments);
                    return (n = r) && ("object" === n$(n) || "function" == typeof n) ? n : nV(this)
                }
            }

            function n1(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var n2 = Object.defineProperty,
                n3 = function(t, e, n) {
                    var r;
                    return (r = (void 0 === e ? "undefined" : n$(e)) != "symbol" ? e + "" : e) in t ? n2(t, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[r] = n, n
                },
                n6 = "connect-session",
                n8 = "connect-domains",
                n4 = ["https://rpc.ankr.com/bsc", "https://binance.nodereal.io", "https://bscrpc.com", "https://bsc-dataseed2.ninicoin.io"],
                n5 = function(t) {
                    nY(n, t);
                    var e = n0(n);

                    function n() {
                        return nq(this, n), e.apply(this, arguments)
                    }
                    return nQ(n, [{
                        key: "getStorageSession",
                        value: function() {
                            try {
                                return (0, w.cF)(n6)
                            } catch (t) {}
                            return null
                        }
                    }, {
                        key: "setStorageSession",
                        value: function() {
                            (0, w.po)(n6, this.session)
                        }
                    }, {
                        key: "removeStorageSession",
                        value: function() {
                            (0, w.Li)(n6)
                        }
                    }, {
                        key: "manageStorageSession",
                        value: function() {
                            this._connected ? this.setStorageSession() : this.removeStorageSession()
                        }
                    }]), n
                }(function(t) {
                    nY(n, t);
                    var e = n0(n);

                    function n() {
                        var t;
                        return nq(this, n), t = e.call.apply(e, [this].concat(Array.prototype.slice.call(arguments))), n3(nV(t), "pending", !1), n3(nV(t), "callbacks", new Map), n3(nV(t), "clientMeta"), n3(nV(t), "relay"), n3(nV(t), "_key", null), n3(nV(t), "_clientId", ""), n3(nV(t), "_peerId", ""), n3(nV(t), "_peerMeta", null), n3(nV(t), "_handshakeId", 0), n3(nV(t), "_handshakeTopic", ""), n3(nV(t), "_connected", !1), n3(nV(t), "_accounts", []), n3(nV(t), "_chainId", "0x0"), t
                    }
                    return nQ(n, [{
                        key: "key",
                        get: function() {
                            return this._key ? (0, w.wb)(this._key, !0) : ""
                        },
                        set: function(t) {
                            if (t) {
                                var e = (0, w.y_)(t);
                                this._key = e
                            }
                        }
                    }, {
                        key: "clientId",
                        get: function() {
                            var t = this._clientId;
                            return t || (t = this._clientId = (0, w.Vj)()), this._clientId
                        },
                        set: function(t) {
                            t && (this._clientId = t)
                        }
                    }, {
                        key: "peerId",
                        get: function() {
                            return this._peerId
                        },
                        set: function(t) {
                            t && (this._peerId = t)
                        }
                    }, {
                        key: "peerMeta",
                        get: function() {
                            return this._peerMeta
                        },
                        set: function(t) {
                            this._peerMeta = t
                        }
                    }, {
                        key: "handshakeTopic",
                        get: function() {
                            return this._handshakeTopic
                        },
                        set: function(t) {
                            t && (this._handshakeTopic = t)
                        }
                    }, {
                        key: "handshakeId",
                        get: function() {
                            return this._handshakeId
                        },
                        set: function(t) {
                            t && (this._handshakeId = t)
                        }
                    }, {
                        key: "uri",
                        get: function() {
                            return "wc:".concat(this.handshakeTopic, "@1?bridge=").concat(this.relay, "&key=").concat(this.key, "&scene=bid")
                        }
                    }, {
                        key: "chainId",
                        get: function() {
                            return this._chainId
                        },
                        set: function(t) {
                            this._chainId = t
                        }
                    }, {
                        key: "accounts",
                        get: function() {
                            return this._accounts
                        },
                        set: function(t) {
                            this._accounts = t
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return this._connected
                        },
                        set: function(t) {}
                    }, {
                        key: "session",
                        get: function() {
                            return {
                                connected: this.connected,
                                accounts: this.accounts,
                                chainId: this.chainId,
                                relay: this.relay,
                                key: this.key,
                                clientId: this.clientId,
                                clientMeta: this.clientMeta,
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                handshakeId: this.handshakeId,
                                handshakeTopic: this.handshakeTopic
                            }
                        },
                        set: function(t) {
                            t && (this._connected = t.connected, this.accounts = t.accounts, this.chainId = t.chainId, this.relay = t.relay, this.key = t.key, this.clientId = t.clientId, this.clientMeta = t.clientMeta, this.peerId = t.peerId, this.peerMeta = t.peerMeta, this.handshakeId = t.handshakeId, this.handshakeTopic = t.handshakeTopic)
                        }
                    }]), n
                }(w.zW));

            function n7() {
                return (n7 = nG(function() {
                    var t, e;
                    return n1(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Promise.race(n4.map(function(t) {
                                    return nW.Z.request({
                                        url: t,
                                        method: "POST",
                                        data: {
                                            jsonrpc: "2.0",
                                            id: Date.now(),
                                            method: "eth_call",
                                            params: [{
                                                to: "0x76054B318785b588A3164B2A6eA5476F7cBA51e0",
                                                data: "0x97b5f450"
                                            }, "latest"]
                                        }
                                    })
                                }))];
                            case 1:
                                return t = n.sent(), e = new nF(["function apiDomains() view returns (string)"]), [2, (0, nz.Jx)(e.decodeFunctionResult("apiDomains", t.data.result)[0]).split(",")]
                        }
                    })
                })).apply(this, arguments)
            }

            function n9() {
                return (n9 = nG(function() {
                    return n1(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, function() {
                                    return n7.apply(this, arguments)
                                }()];
                            case 1:
                                return [4, Promise.all(t.sent().map(function(t) {
                                    var e, n, r = t.split(".").slice(1).join(".");
                                    return e = "wss://nbstream.".concat(r, "/wallet-connector"), n = Date.now(), new Promise(function(t) {
                                        try {
                                            setTimeout(function() {
                                                t({
                                                    ttl: 0,
                                                    url: e
                                                })
                                            }, 5e3);
                                            var r = new tH(e);
                                            r.onopen = function() {
                                                r.close(), t({
                                                    ttl: Date.now() - n,
                                                    url: e
                                                })
                                            }, r.onerror = function() {
                                                t({
                                                    ttl: 0,
                                                    url: e
                                                })
                                            }
                                        } catch (n) {
                                            t({
                                                ttl: 0,
                                                url: e
                                            })
                                        }
                                    })
                                }))];
                            case 2:
                                return [2, t.sent().filter(function(t) {
                                    return t.ttl > 0
                                }).sort(function(t, e) {
                                    return t.ttl - e.ttl
                                }).map(function(t) {
                                    return t.url
                                })]
                        }
                    })
                })).apply(this, arguments)
            }
            var rt = Promise.resolve([]);
            if (!(0, w.UG)()) {
                var re = (0, w.cF)(n8);
                rt = Promise.resolve(re), re && 0 !== re.length || (rt = (function() {
                    return n9.apply(this, arguments)
                })().then(function(t) {
                    return console.log("\uD83D\uDE80 ~ file: relay.ts:63 ~ .then ~ domains:", t), (0, w.po)(n8, t), t
                }).catch(function() {
                    return []
                }))
            }

            function rn() {
                return (rn = nG(function() {
                    var t;
                    return n1(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, rt];
                            case 1:
                                return [2, (0 === (t = e.sent()).length && t.push("wss://nbstream.binance.com/wallet-connector"), t)]
                        }
                    })
                })).apply(this, arguments)
            }
            var rr = function(t) {
                nY(n, t);
                var e = n0(n);

                function n() {
                    nq(this, n), n3(nV(t = e.call(this)), "transport"), n3(nV(t), "lng"), t.clientMeta = (0, w.AN)();
                    var t, r = t.getStorageSession();
                    return r && (t.session = r), t.handshakeId && t.subscribeToSessionResponse(t.handshakeId), t.initTransport(), t.subscribeInternalEvent(), t
                }
                return nQ(n, [{
                    key: "request",
                    value: function(t) {
                        var e = this;
                        return nG(function() {
                            return n1(this, function(n) {
                                if (!e.connected) throw new w.zZ(w.rr.PROVIDER_NOT_READY.code, w.rr.PROVIDER_NOT_READY.message);
                                if (0 > w.V7.indexOf(t.method)) throw new w.zZ(w.fc.METHOD_NOT_SUPPORT.code, w.fc.METHOD_NOT_SUPPORT.message);
                                switch (t.method) {
                                    case "eth_requestAccounts":
                                    case "eth_accounts":
                                        return [2, e.accounts];
                                    case "eth_chainId":
                                        return [2, (0, w.uA)(e.chainId)];
                                    case "eth_signTransaction":
                                    case "eth_sendTransaction":
                                    case "eth_sign":
                                    case "personal_sign":
                                    case "eth_signTypedData":
                                    case "eth_signTypedData_v1":
                                    case "eth_signTypedData_v2":
                                    case "eth_signTypedData_v3":
                                    case "eth_signTypedData_v4":
                                    case "wallet_switchEthereumChain":
                                    case "wallet_watchAsset":
                                        return [2, new Promise(function(n, r) {
                                            t.id || (t.id = (0, w.o0)()), e.callbacks.set("response-".concat(t.id), function(t, e) {
                                                t ? r(-32050 === t.code || -32e3 === t.code || 1e3 === t.code ? new w.zZ(w.fc.REJECT_ERR.code, w.fc.REJECT_ERR.message) : -32603 === t.code ? new w.zZ(w.g.INTERNAL_ERR.code, w.g.INTERNAL_ERR.message) : -32600 === t.code || -32602 === t.code ? new w.zZ(w.fc.INVALID_PARAM.code, w.fc.INVALID_PARAM.message) : t) : e ? n(e.result) : r(new w.zZ(w.fc.MISSING_RESPONSE.code, w.fc.MISSING_RESPONSE.message))
                                            }), e.sendRequest(t), e.events.emit("call_request_sent")
                                        })]
                                }
                                return [2]
                            })
                        })()
                    }
                }, {
                    key: "killSession",
                    value: function() {
                        if (this.connected) {
                            var t = {
                                id: (0, w.o0)(),
                                method: "wc_sessionUpdate",
                                params: [{
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null
                                }]
                            };
                            this.sendRequest(t), this.handleSessionDisconnect(t2.DisconnectAtClient)
                        }
                    }
                }, {
                    key: "connect",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.chainId,
                            n = t.lng,
                            r = t.showQrCodeModal,
                            i = this;
                        return nG(function() {
                            return n1(this, function(t) {
                                return [2, (i.lng = n, i.connected ? {
                                    chainId: i.chainId,
                                    accounts: i.accounts
                                } : new Promise(function(t, n) {
                                    i.on("modal_closed", function(t) {
                                        n(t)
                                    }), i.on("session_error", function(t) {
                                        n(t)
                                    }), i.on("connect", function(e) {
                                        t(e)
                                    }), i.createSession({
                                        chainId: e,
                                        showQrCodeModal: r
                                    })
                                }))]
                            })
                        })()
                    }
                }, {
                    key: "createSession",
                    value: function(t) {
                        var e = t.chainId,
                            n = t.showQrCodeModal;
                        try {
                            if (this.connected) throw new w.zZ(w.rr.CONNECTED.code, w.rr.CONNECTED.message);
                            if (this.pending || this._handshakeTopic) throw new w.zZ(w.rr.CONNECTING.code, w.rr.CONNECTING.message);
                            this.pending = !0, this._key = (0, w.k$)(), this.handshakeId = (0, w.o0)(), this.handshakeTopic = (0, w.Vj)();
                            var r = {
                                id: this.handshakeId,
                                method: "wc_sessionRequest",
                                params: [{
                                    peerId: this.clientId,
                                    peerMeta: this.clientMeta,
                                    chainId: e ? Number(e) : null
                                }]
                            };
                            this.sendRequest(r, this.handshakeTopic), this.subscribeToSessionResponse(this.handshakeId), this.events.emit("display_uri", {
                                showQrCodeModal: n
                            })
                        } catch (t) {
                            this.pending = !1;
                            var i, o = "response-".concat(this.handshakeId);
                            this.callbacks.get(o) && this.callbacks.delete(o);
                            var a = t.message,
                                s = (null != (i = w.zZ) && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? !!i[Symbol.hasInstance](t) : t instanceof i) ? t : new w.zZ(w.g.INTERNAL_ERR.code, "".concat(w.g.INTERNAL_ERR.message, ": ").concat(a));
                            throw this.handleRejectSessionConnection(s), w.cM.error("[binance-w3w] create connection failed: ".concat(a)), s
                        }
                    }
                }, {
                    key: "initTransport",
                    value: function() {
                        var t = this;
                        return nG(function() {
                            var e, n, r, i;
                            return n1(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        t.transport = new tG({
                                            version: 1,
                                            subscriptions: [t.clientId]
                                        }), t.transport.on("message", function(e) {
                                            return t.setIncomingMessages(e)
                                        }), t.transport.on("open", function(e) {
                                            t.events.emit("transport_open", e)
                                        }), t.transport.on("close", function() {
                                            t.events.emit("transport_close")
                                        }), t.transport.on("error", function(e, n) {
                                            t.events.emit("transport_error", e, n)
                                        }), o.label = 1;
                                    case 1:
                                        if (o.trys.push([1, 5, , 6]), !t.session.relay) return [3, 2];
                                        return t.transport.open([t.session.relay]), [3, 4];
                                    case 2:
                                        return [4, function() {
                                            return rn.apply(this, arguments)
                                        }()];
                                    case 3:
                                        e = o.sent(), t.transport.open(e), o.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        throw n = o.sent(), (0, w.Li)(n8), r = n.message, i = new w.zZ(w.g.INTERNAL_ERR.code, "".concat(w.g.INTERNAL_ERR.message, ": ").concat(r)), t.handleRejectSessionConnection(i), i;
                                    case 6:
                                        return [2]
                                }
                            })
                        })()
                    }
                }, {
                    key: "setIncomingMessages",
                    value: function(t) {
                        if ([this.clientId, this.handshakeTopic].includes(t.topic)) {
                            try {
                                e = JSON.parse(t.payload)
                            } catch (t) {
                                return
                            }
                            var e, n = this.decrypt(e);
                            if (n) {
                                if ("method" in n && n.method) {
                                    this.events.emit(n.method, null, n);
                                    return
                                }
                                var r = n.id,
                                    i = "response-".concat(r),
                                    o = this.callbacks.get(i);
                                o ? ("error" in n && n.error ? o(new w.zZ(n.error.code, n.error.message), null) : "result" in n && n.result && o(null, n), this.callbacks.delete(i)) : w.cM.error("[binance-w3w] callback id: ".concat(r, " not found"))
                            }
                        }
                    }
                }, {
                    key: "encrypt",
                    value: function(t) {
                        var e = this._key;
                        return e ? (0, w.HI)(t, e) : null
                    }
                }, {
                    key: "decrypt",
                    value: function(t) {
                        var e = this._key;
                        return e ? (0, w.pe)(t, e) : null
                    }
                }, {
                    key: "sendRequest",
                    value: function(t, e) {
                        var n = (0, w.sT)(t.method, t.params, t.id),
                            r = this.encrypt(n),
                            i = e || this.peerId,
                            o = JSON.stringify(r);
                        this.transport.send(o, i, !0)
                    }
                }, {
                    key: "subscribeInternalEvent",
                    value: function() {
                        var t = this;
                        this.on("display_uri", function(e) {
                            !1 !== e.showQrCodeModal && (tj.open({
                                cb: function() {
                                    t.events.emit("modal_closed", new w.zZ(w.rr.CLOSE_MODAL.code, w.rr.CLOSE_MODAL.message))
                                },
                                lng: t.lng
                            }), t.transport.connected ? (t.events.emit("uri_ready", t.uri), t.key && tj.ready(t.uri)) : t.transport.retryFailed && tj.fail())
                        }), this.on("transport_open", function(e) {
                            t.relay = e, t.events.emit("uri_ready", t.uri), t.key && tj.ready(t.uri)
                        }), this.on("transport_error", function(t, e) {
                            var n;
                            e ? function(t) {
                                var e = (0, w.cF)(n8);
                                if (e) {
                                    var n = e.filter(function(e) {
                                        return e !== t
                                    });
                                    (0, w.po)(n8, n)
                                }
                            }((n = e.indexOf("?")) > -1 ? e.slice(0, n) : e) : ((0, w.Li)(n8), tj.fail())
                        }), this.on("modal_closed", function() {
                            var e = "response-".concat(t.handshakeId);
                            t.callbacks.get(e) && t.callbacks.delete(e), t.clearConnectionStatus()
                        }), this.on("connect", function() {
                            t.pending = !1, tj.close()
                        }), this.on("call_request_sent", function() {
                            (0, w.jm)()
                        }), this.on("wc_sessionUpdate", function(e, n) {
                            if (e) {
                                t.handleSessionResponse();
                                return
                            }
                            n.params && Array.isArray(n.params) ? t.handleSessionResponse(n.params[0]) : n.error && t.handleSessionResponse()
                        })
                    }
                }, {
                    key: "subscribeToSessionResponse",
                    value: function(t) {
                        var e = this;
                        this.callbacks.set("response-".concat(t), function(t, n) {
                            if (t) {
                                e.handleSessionResponse();
                                return
                            }
                            n && (n.result ? e.handleSessionResponse(n.result) : (n.error && n.error.message, e.handleSessionResponse()))
                        })
                    }
                }, {
                    key: "handleSessionResponse",
                    value: function(t) {
                        t ? t.approved ? (this._connected ? (t.chainId && this.setChainId(t.chainId), t.accounts && this.setAddress(t.accounts)) : (this._connected = !0, t.chainId && this.setChainId(t.chainId), t.accounts && this.setAddress(t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this.events.emit("connect", {
                            chainId: this.chainId,
                            accounts: this.accounts
                        })), this.manageStorageSession()) : this.connected ? this.handleSessionDisconnect(t2.DisconnectAtWallet) : this.handleRejectSessionConnection(new w.zZ(w.rr.REJECT_SESSION.code, w.rr.REJECT_SESSION.message)) : this.handleRejectSessionConnection(new w.zZ(w.rr.REJECT_SESSION.code, w.rr.REJECT_SESSION.message))
                    }
                }, {
                    key: "handleRejectSessionConnection",
                    value: function(t) {
                        tj.close(), this.clearConnectionStatus(), this.events.emit("session_error", t)
                    }
                }, {
                    key: "handleSessionDisconnect",
                    value: function(t) {
                        this._connected || tj.close(), this.events.emit("disconnect", t), this.clearConnectionStatus()
                    }
                }, {
                    key: "clearConnectionStatus",
                    value: function() {
                        this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._clientId && (this._clientId = ""), this.pending && (this.pending = !1), this.callbacks.clear(), this._peerMeta = null, this._accounts = [], this._chainId = "0x0", this.offConnectEvents(), this.removeStorageSession(), this.transport.close()
                    }
                }, {
                    key: "offConnectEvents",
                    value: function() {
                        this.removeListener("connect")
                    }
                }, {
                    key: "setChainId",
                    value: function(t) {
                        var e = (0, w.uA)(t);
                        if ("0x0" === e) {
                            this.chainId = e;
                            return
                        }
                        "u" > n$(this.chainId) && this.chainId !== e && this.events.emit("chainChanged", e), this.chainId = e
                    }
                }, {
                    key: "setAddress",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            e = t.filter(function(t) {
                                return "string" == typeof t
                            }).map(function(t) {
                                return t.toLowerCase()
                            }).filter(Boolean);
                        JSON.stringify(this.accounts) !== JSON.stringify(e) && this.events.emit("accountsChanged", e), this.accounts = e
                    }
                }]), n
            }(n5);

            function ri(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function ro(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function ra(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            ro(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            ro(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }

            function rs(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function ru(t) {
                return (ru = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function rc(t, e) {
                return (rc = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function rl(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }

            function rh(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var rf = Object.defineProperty,
                rd = function(t, e, n) {
                    var r;
                    return (r = (void 0 === e ? "undefined" : rl(e)) != "symbol" ? e + "" : e) in t ? rf(t, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[r] = n, n
                },
                rp = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && rc(t, e)
                    }(o, t);
                    var e, n, r, i = (e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, n, r = ru(o);
                        if (e) {
                            var i = ru(this).constructor;
                            n = Reflect.construct(r, arguments, i)
                        } else n = r.apply(this, arguments);
                        return (t = n) && ("object" === rl(t) || "function" == typeof t) ? t : ri(this)
                    });

                    function o() {
                        var t;
                        return ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, o), rd(ri(t = i.call(this)), "accounts", []), rd(ri(t), "coreConnection"), t.register(), t
                    }
                    return n = [{
                        key: "chainId",
                        get: function() {
                            return this.coreConnection ? this.coreConnection.chainId : "0x0"
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return !!this.coreConnection && this.coreConnection.connected
                        }
                    }, {
                        key: "connecting",
                        get: function() {
                            return !!this.coreConnection && this.coreConnection.pending
                        }
                    }, {
                        key: "open",
                        value: function(t) {
                            var e = t.requestChainId,
                                n = t.lng,
                                r = t.showQrCodeModal,
                                i = this;
                            return ra(function() {
                                var t;
                                return rh(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (i.register(), i.coreConnection.connected) return [2];
                                            return [4, i.coreConnection.connect({
                                                chainId: e,
                                                lng: n,
                                                showQrCodeModal: r
                                            })];
                                        case 1:
                                            return t = o.sent().accounts, i.accounts = t, [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "request",
                        value: function(t) {
                            var e = this;
                            return ra(function() {
                                return rh(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (e.connected) return [3, 2];
                                            return [4, e.open({})];
                                        case 1:
                                            n.sent(), n.label = 2;
                                        case 2:
                                            return [2, e.coreConnection.request(t)]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            this.connected && (this.coreConnection.killSession(), this.onClose(t2.DisconnectAtClient))
                        }
                    }, {
                        key: "register",
                        value: function() {
                            if (this.coreConnection) return this.coreConnection;
                            this.coreConnection = new rr, this.accounts = this.coreConnection.accounts, this.subscribeEvents()
                        }
                    }, {
                        key: "subscribeEvents",
                        value: function() {
                            var t = this;
                            this.coreConnection.on("chainChanged", function(e) {
                                t.events.emit("chainChanged", e)
                            }), this.coreConnection.on("accountsChanged", function(e) {
                                t.accounts = e, t.events.emit("accountsChanged", e)
                            }), this.coreConnection.on("uri_ready", function(e) {
                                t.events.emit("uri_ready", e)
                            }), this.coreConnection.on("disconnect", function(e) {
                                t.onClose(e)
                            })
                        }
                    }, {
                        key: "onClose",
                        value: function(t) {
                            this.coreConnection = null, this.events.emit("disconnect", t)
                        }
                    }], rs(o.prototype, n), r && rs(o, r), o
                }(w.zW);

            function rm(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value
                } catch (t) {
                    n(t);
                    return
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function ry(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            rm(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            rm(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }

            function rv(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function rg(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            }

            function rw(t, e) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = e.call(t, a)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var rb = Object.defineProperty,
                rk = function(t, e, n) {
                    var r;
                    return (r = (void 0 === e ? "undefined" : rg(e)) != "symbol" ? e + "" : e) in t ? rb(t, r, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : t[r] = n, n
                },
                rM = function() {
                    var t, e;

                    function n(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, n), rk(this, "events", new k.Z), rk(this, "signClient"), rk(this, "rpc"), rk(this, "httpClient"), rk(this, "optsChainId"), rk(this, "lng"), rk(this, "showQrCodeModal"), this.rpc = {
                            infuraId: null == t ? void 0 : t.infuraId,
                            custom: null == t ? void 0 : t.rpc
                        }, this.lng = (null == t ? void 0 : t.lng) || "en", this.showQrCodeModal = null == t ? void 0 : t.showQrCodeModal, this.signClient = new rp, this.optsChainId = Number(this.signClient.coreConnection.chainId) || (null == t ? void 0 : t.chainId) || 56, this.registerEventListeners(), this.httpClient = this.setHttpProvider(this.optsChainId)
                    }
                    return t = [{
                        key: "connected",
                        get: function() {
                            return this.signClient.connected
                        }
                    }, {
                        key: "connector",
                        get: function() {
                            return this.signClient
                        }
                    }, {
                        key: "accounts",
                        get: function() {
                            return this.signClient.accounts
                        }
                    }, {
                        key: "chainId",
                        get: function() {
                            return w.cM.debug("provider get chainId", this.signClient.chainId), this.signClient.chainId
                        }
                    }, {
                        key: "rpcUrl",
                        get: function() {
                            return this.httpClient.url || ""
                        }
                    }, {
                        key: "request",
                        value: function(t) {
                            var e = this;
                            return ry(function() {
                                var n, r;
                                return rw(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            switch (w.cM.debug("ethereum-provider request", t), t.method) {
                                                case "eth_requestAccounts":
                                                    return [3, 1];
                                                case "eth_chainId":
                                                    return [3, 3];
                                                case "eth_accounts":
                                                    return [3, 4];
                                                case "wallet_switchEthereumChain":
                                                    return [3, 5]
                                            }
                                            return [3, 6];
                                        case 1:
                                            return [4, e.connect()];
                                        case 2:
                                            return [2, (i.sent(), e.accounts)];
                                        case 3:
                                            return [2, e.chainId];
                                        case 4:
                                            return [2, e.accounts];
                                        case 5:
                                            return [2, e.switchChain(t)];
                                        case 6:
                                            return [3, 7];
                                        case 7:
                                            if (n = (0, w.sT)(t.method, t.params || []), w.V7.includes(t.method)) return [2, e.signClient.request(n)];
                                            if (rg(e.httpClient) > "u") throw Error("Cannot request JSON-RPC method (".concat(t.method, ") without provided rpc url"));
                                            return [4, e.httpClient.request(n)];
                                        case 8:
                                            if (r = i.sent(), (0, w.om)(r)) return [2, r.result];
                                            throw Error(r.error.message)
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "signMessage",
                        value: function(t) {
                            var e = this;
                            return ry(function() {
                                return rw(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (w.cM.debug("signMessage", t), e.accounts.length) return [3, 2];
                                            return [4, e.enable()];
                                        case 1:
                                            n.sent(), n.label = 2;
                                        case 2:
                                            return [4, e.request({
                                                method: "personal_sign",
                                                params: [(0, w.OG)(t), e.accounts[0]]
                                            })];
                                        case 3:
                                            return [2, n.sent()]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "sendAsync",
                        value: function(t, e) {
                            this.request(t).then(function(t) {
                                return e(null, t)
                            }).catch(function(t) {
                                return e(t, void 0)
                            })
                        }
                    }, {
                        key: "setLng",
                        value: function(t) {
                            this.lng = t
                        }
                    }, {
                        key: "enable",
                        value: function(t) {
                            var e = this;
                            return ry(function() {
                                return rw(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, e.connect(t)];
                                        case 1:
                                            return [2, (n.sent(), e.accounts)]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "switchChain",
                        value: function(t) {
                            var e = this;
                            return ry(function() {
                                var n;
                                return rw(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return n = (0, w.sT)(t.method, t.params || []), [4, Promise.race([e.signClient.request(n), new Promise(function(n) {
                                                return e.on("chainChanged", function(e) {
                                                    e === t.params[0].chainId && n(e)
                                                })
                                            })])];
                                        case 1:
                                            return [2, r.sent()]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "connect",
                        value: function(t) {
                            var e = this;
                            return ry(function() {
                                var n;
                                return rw(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!e.connected) return [3, 1];
                                            return w.cM.info("already connected"), [3, 3];
                                        case 1:
                                            return [4, e.signClient.open({
                                                requestChainId: null !== (n = null == t ? void 0 : t.toString()) && void 0 !== n ? n : e.optsChainId.toString(),
                                                lng: e.lng,
                                                showQrCodeModal: e.showQrCodeModal
                                            })];
                                        case 2:
                                            r.sent(), r.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })()
                        }
                    }, {
                        key: "disconnect",
                        value: function() {
                            this.connected && this.signClient.disconnect()
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            this.events.on(t, e)
                        }
                    }, {
                        key: "once",
                        value: function(t, e) {
                            this.events.once(t, e)
                        }
                    }, {
                        key: "removeListener",
                        value: function(t, e) {
                            this.events.removeListener(t, e)
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            this.events.off(t, e)
                        }
                    }, {
                        key: "isWalletConnect",
                        get: function() {
                            return !0
                        }
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var t = this;
                            this.signClient.on("accountsChanged", function(e) {
                                t.events.emit("accountsChanged", e)
                            }), this.signClient.on("chainChanged", function(e) {
                                t.httpClient = t.setHttpProvider((0, w.Jk)(e)), t.events.emit("chainChanged", e)
                            }), this.signClient.on("disconnect", function() {
                                t.events.emit("disconnect")
                            }), this.signClient.on("uri_ready", function(e) {
                                t.events.emit("uri_ready", e)
                            })
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(t) {
                            var e = (0, w.RM)(t, this.rpc);
                            if (!((void 0 === e ? "undefined" : rg(e)) > "u")) return new I(e)
                        }
                    }], rv(n.prototype, t), e && rv(n, e), n
                }(),
                rE = function(t) {
                    if ((0, w.bD)()) {
                        var e = "u" > rg(window) ? window.ethereum : void 0;
                        if (e) return e.setLng = function() {}, e.disconnect = function() {}, e
                    }
                    return new rM(t)
                },
                r_ = rM
        }
    }
]);