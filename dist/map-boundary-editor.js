var Vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qo(J) {
  return J && J.__esModule && Object.prototype.hasOwnProperty.call(J, "default") ? J.default : J;
}
var $e = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(J, D) {
  (function(f, W) {
    W(D);
  })(Vo, function(f) {
    var W = "1.9.4";
    function o(t) {
      var e, i, n, s;
      for (i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (e in s)
          t[e] = s[e];
      }
      return t;
    }
    var r = Object.create || /* @__PURE__ */ function() {
      function t() {
      }
      return function(e) {
        return t.prototype = e, new t();
      };
    }();
    function h(t, e) {
      var i = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function() {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    }
    var d = 0;
    function p(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++d), t._leaflet_id;
    }
    function g(t, e, i) {
      var n, s, a, l;
      return l = function() {
        n = !1, s && (a.apply(i, s), s = !1);
      }, a = function() {
        n ? s = arguments : (t.apply(i, arguments), setTimeout(l, e), n = !0);
      }, a;
    }
    function m(t, e, i) {
      var n = e[1], s = e[0], a = n - s;
      return t === n && i ? t : ((t - s) % a + a) % a + s;
    }
    function y() {
      return !1;
    }
    function O(t, e) {
      if (e === !1)
        return t;
      var i = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * i) / i;
    }
    function pe(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function yt(t) {
      return pe(t).split(/\s+/);
    }
    function A(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? r(t.options) : {});
      for (var i in e)
        t.options[i] = e[i];
      return t.options;
    }
    function ti(t, e, i) {
      var n = [];
      for (var s in t)
        n.push(encodeURIComponent(i ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
    }
    var gn = /\{ *([\w_ -]+) *\}/g;
    function ei(t, e) {
      return t.replace(gn, function(i, n) {
        var s = e[n];
        if (s === void 0)
          throw new Error("No value provided for variable " + i);
        return typeof s == "function" && (s = s(e)), s;
      });
    }
    var it = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function me(t, e) {
      for (var i = 0; i < t.length; i++)
        if (t[i] === e)
          return i;
      return -1;
    }
    var Kt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function ge(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var ii = 0;
    function ni(t) {
      var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - ii));
      return ii = e + i, window.setTimeout(t, i);
    }
    var ve = window.requestAnimationFrame || ge("RequestAnimationFrame") || ni, oi = window.cancelAnimationFrame || ge("CancelAnimationFrame") || ge("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function q(t, e, i) {
      if (i && ve === ni)
        t.call(e);
      else
        return ve.call(window, h(t, e));
    }
    function Q(t) {
      t && oi.call(window, t);
    }
    var vn = {
      __proto__: null,
      extend: o,
      create: r,
      bind: h,
      get lastId() {
        return d;
      },
      stamp: p,
      throttle: g,
      wrapNum: m,
      falseFn: y,
      formatNum: O,
      trim: pe,
      splitWords: yt,
      setOptions: A,
      getParamString: ti,
      template: ei,
      isArray: it,
      indexOf: me,
      emptyImageUrl: Kt,
      requestFn: ve,
      cancelFn: oi,
      requestAnimFrame: q,
      cancelAnimFrame: Q
    };
    function lt() {
    }
    lt.extend = function(t) {
      var e = function() {
        A(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, i = e.__super__ = this.prototype, n = r(i);
      n.constructor = e, e.prototype = n;
      for (var s in this)
        Object.prototype.hasOwnProperty.call(this, s) && s !== "prototype" && s !== "__super__" && (e[s] = this[s]);
      return t.statics && o(e, t.statics), t.includes && (yn(t.includes), o.apply(null, [n].concat(t.includes))), o(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? r(i.options) : {}, o(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
        if (!this._initHooksCalled) {
          i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var a = 0, l = n._initHooks.length; a < l; a++)
            n._initHooks[a].call(this);
        }
      }, e;
    }, lt.include = function(t) {
      var e = this.prototype.options;
      return o(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, lt.mergeOptions = function(t) {
      return o(this.prototype.options, t), this;
    }, lt.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
    };
    function yn(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = it(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var X = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, i) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], e);
        else {
          t = yt(t);
          for (var s = 0, a = t.length; s < a; s++)
            this._on(t[s], e, i);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, e, i) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var n in t)
            this._off(n, t[n], e);
        else {
          t = yt(t);
          for (var s = arguments.length === 1, a = 0, l = t.length; a < l; a++)
            s ? this._off(t[a]) : this._off(t[a], e, i);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, i, n) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, i) === !1) {
          i === this && (i = void 0);
          var s = { fn: e, ctx: i };
          n && (s.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(s);
        }
      },
      _off: function(t, e, i) {
        var n, s, a;
        if (this._events && (n = this._events[t], !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (s = 0, a = n.length; s < a; s++)
                n[s].fn = y;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var l = this._listens(t, e, i);
          if (l !== !1) {
            var u = n[l];
            this._firingCount && (u.fn = y, this._events[t] = n = n.slice()), n.splice(l, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, i) {
        if (!this.listens(t, i))
          return this;
        var n = o({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var s = this._events[t];
          if (s) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var a = 0, l = s.length; a < l; a++) {
              var u = s[a], c = u.fn;
              u.once && this.off(t, c, u.ctx), c.call(u.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return i && this._propagateEvent(n), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var s = e;
        typeof e != "function" && (n = !!e, s = void 0, i = void 0);
        var a = this._events && this._events[t];
        if (a && a.length && this._listens(t, s, i) !== !1)
          return !0;
        if (n) {
          for (var l in this._eventParents)
            if (this._eventParents[l].listens(t, e, i, n))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, i) {
        if (!this._events)
          return !1;
        var n = this._events[t] || [];
        if (!e)
          return !!n.length;
        i === this && (i = void 0);
        for (var s = 0, a = n.length; s < a; s++)
          if (n[s].fn === e && n[s].ctx === i)
            return s;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, i) {
        if (typeof t == "object")
          for (var n in t)
            this._on(n, t[n], e, !0);
        else {
          t = yt(t);
          for (var s = 0, a = t.length; s < a; s++)
            this._on(t[s], e, i, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[p(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[p(t)], this;
      },
      _propagateEvent: function(t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(t.type, o({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    X.addEventListener = X.on, X.removeEventListener = X.clearAllEventListeners = X.off, X.addOneTimeEventListener = X.once, X.fireEvent = X.fire, X.hasEventListeners = X.listens;
    var It = lt.extend(X);
    function P(t, e, i) {
      this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
    }
    var si = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    P.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new P(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(x(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(x(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new P(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new P(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = si(this.x), this.y = si(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = x(t);
        var e = t.x - this.x, i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = x(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = x(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + O(this.x) + ", " + O(this.y) + ")";
      }
    };
    function x(t, e, i) {
      return t instanceof P ? t : it(t) ? new P(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new P(t.x, t.y) : new P(t, e, i);
    }
    function Z(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
          this.extend(i[n]);
    }
    Z.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, i;
        if (!t)
          return this;
        if (t instanceof P || typeof t[0] == "number" || "x" in t)
          e = i = x(t);
        else if (t = Y(t), e = t.min, i = t.max, !e || !i)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return x(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return x(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return x(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var e, i;
        return typeof t[0] == "number" || t instanceof P ? t = x(t) : t = Y(t), t instanceof Z ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = Y(t);
        var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x >= e.x && n.x <= i.x, l = s.y >= e.y && n.y <= i.y;
        return a && l;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = Y(t);
        var e = this.min, i = this.max, n = t.min, s = t.max, a = s.x > e.x && n.x < i.x, l = s.y > e.y && n.y < i.y;
        return a && l;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, s = Math.abs(e.y - i.y) * t;
        return Y(
          x(e.x - n, e.y - s),
          x(i.x + n, i.y + s)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = Y(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function Y(t, e) {
      return !t || t instanceof Z ? t : new Z(t, e);
    }
    function j(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
          this.extend(i[n]);
    }
    j.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, i = this._northEast, n, s;
        if (t instanceof z)
          n = t, s = t;
        else if (t instanceof j) {
          if (n = t._southWest, s = t._northEast, !n || !s)
            return this;
        } else
          return t ? this.extend(E(t) || N(t)) : this;
        return !e && !i ? (this._southWest = new z(n.lat, n.lng), this._northEast = new z(s.lat, s.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(s.lat, i.lat), i.lng = Math.max(s.lng, i.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, s = Math.abs(e.lng - i.lng) * t;
        return new j(
          new z(e.lat - n, e.lng - s),
          new z(i.lat + n, i.lng + s)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new z(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new z(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new z(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof z || "lat" in t ? t = E(t) : t = N(t);
        var e = this._southWest, i = this._northEast, n, s;
        return t instanceof j ? (n = t.getSouthWest(), s = t.getNorthEast()) : n = s = t, n.lat >= e.lat && s.lat <= i.lat && n.lng >= e.lng && s.lng <= i.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = N(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat >= e.lat && n.lat <= i.lat, l = s.lng >= e.lng && n.lng <= i.lng;
        return a && l;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = N(t);
        var e = this._southWest, i = this._northEast, n = t.getSouthWest(), s = t.getNorthEast(), a = s.lat > e.lat && n.lat < i.lat, l = s.lng > e.lng && n.lng < i.lng;
        return a && l;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = N(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function N(t, e) {
      return t instanceof j ? t : new j(t, e);
    }
    function z(t, e, i) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
    }
    z.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = E(t);
        var i = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return i <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + O(this.lat, t) + ", " + O(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return mt.distance(this, E(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return mt.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
        return N(
          [this.lat - e, this.lng - i],
          [this.lat + e, this.lng + i]
        );
      },
      clone: function() {
        return new z(this.lat, this.lng, this.alt);
      }
    };
    function E(t, e, i) {
      return t instanceof z ? t : it(t) && typeof t[0] != "object" ? t.length === 3 ? new z(t[0], t[1], t[2]) : t.length === 2 ? new z(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new z(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new z(t, e, i);
    }
    var ut = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var i = this.projection.project(t), n = this.scale(e);
        return this.transformation._transform(i, n);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var i = this.scale(e), n = this.transformation.untransform(t, i);
        return this.projection.unproject(n);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), s = this.transformation.transform(e.max, i);
        return new Z(n, s);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var e = this.wrapLng ? m(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? m(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
        return new z(i, e, n);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, s = e.lng - i.lng;
        if (n === 0 && s === 0)
          return t;
        var a = t.getSouthWest(), l = t.getNorthEast(), u = new z(a.lat - n, a.lng - s), c = new z(l.lat - n, l.lng - s);
        return new j(u, c);
      }
    }, mt = o({}, ut, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var i = Math.PI / 180, n = t.lat * i, s = e.lat * i, a = Math.sin((e.lat - t.lat) * i / 2), l = Math.sin((e.lng - t.lng) * i / 2), u = a * a + Math.cos(n) * Math.cos(s) * l * l, c = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
        return this.R * c;
      }
    }), ri = 6378137, ye = {
      R: ri,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), s = Math.sin(n * e);
        return new P(
          this.R * t.lng * e,
          this.R * Math.log((1 + s) / (1 - s)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new z(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = ri * Math.PI;
        return new Z([-t, -t], [t, t]);
      }()
    };
    function Le(t, e, i, n) {
      if (it(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = i, this._d = n;
    }
    Le.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, e) {
        return this._transform(t.clone(), e);
      },
      // destructive transform (faster)
      _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, e) {
        return e = e || 1, new P(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function At(t, e, i, n) {
      return new Le(t, e, i, n);
    }
    var we = o({}, mt, {
      code: "EPSG:3857",
      projection: ye,
      transformation: function() {
        var t = 0.5 / (Math.PI * ye.R);
        return At(t, 0.5, -t, 0.5);
      }()
    }), Ln = o({}, we, {
      code: "EPSG:900913"
    });
    function ai(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function hi(t, e) {
      var i = "", n, s, a, l, u, c;
      for (n = 0, a = t.length; n < a; n++) {
        for (u = t[n], s = 0, l = u.length; s < l; s++)
          c = u[s], i += (s ? "L" : "M") + c.x + " " + c.y;
        i += e ? w.svg ? "z" : "x" : "";
      }
      return i || "M0 0";
    }
    var be = document.documentElement.style, Xt = "ActiveXObject" in window, wn = Xt && !document.addEventListener, li = "msLaunchUri" in navigator && !("documentMode" in document), xe = st("webkit"), ui = st("android"), ci = st("android 2") || st("android 3"), bn = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), xn = ui && st("Google") && bn < 537 && !("AudioNode" in window), Pe = !!window.opera, di = !li && st("chrome"), _i = st("gecko") && !xe && !Pe && !Xt, Pn = !di && st("safari"), fi = st("phantom"), pi = "OTransition" in be, Tn = navigator.platform.indexOf("Win") === 0, mi = Xt && "transition" in be, Te = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !ci, gi = "MozPerspective" in be, Mn = !window.L_DISABLE_3D && (mi || Te || gi) && !pi && !fi, Zt = typeof orientation < "u" || st("mobile"), kn = Zt && xe, En = Zt && Te, vi = !window.PointerEvent && window.MSPointerEvent, yi = !!(window.PointerEvent || vi), Li = "ontouchstart" in window || !!window.TouchEvent, Cn = !window.L_NO_TOUCH && (Li || yi), Dn = Zt && Pe, Sn = Zt && _i, On = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, zn = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", y, e), window.removeEventListener("testPassiveEventSupport", y, e);
      } catch {
      }
      return t;
    }(), In = function() {
      return !!document.createElement("canvas").getContext;
    }(), Me = !!(document.createElementNS && ai("svg").createSVGRect), An = !!Me && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), Zn = !Me && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), Bn = navigator.platform.indexOf("Mac") === 0, Rn = navigator.platform.indexOf("Linux") === 0;
    function st(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var w = {
      ie: Xt,
      ielt9: wn,
      edge: li,
      webkit: xe,
      android: ui,
      android23: ci,
      androidStock: xn,
      opera: Pe,
      chrome: di,
      gecko: _i,
      safari: Pn,
      phantom: fi,
      opera12: pi,
      win: Tn,
      ie3d: mi,
      webkit3d: Te,
      gecko3d: gi,
      any3d: Mn,
      mobile: Zt,
      mobileWebkit: kn,
      mobileWebkit3d: En,
      msPointer: vi,
      pointer: yi,
      touch: Cn,
      touchNative: Li,
      mobileOpera: Dn,
      mobileGecko: Sn,
      retina: On,
      passiveEvents: zn,
      canvas: In,
      svg: Me,
      vml: Zn,
      inlineSvg: An,
      mac: Bn,
      linux: Rn
    }, wi = w.msPointer ? "MSPointerDown" : "pointerdown", bi = w.msPointer ? "MSPointerMove" : "pointermove", xi = w.msPointer ? "MSPointerUp" : "pointerup", Pi = w.msPointer ? "MSPointerCancel" : "pointercancel", ke = {
      touchstart: wi,
      touchmove: bi,
      touchend: xi,
      touchcancel: Pi
    }, Ti = {
      touchstart: Wn,
      touchmove: Jt,
      touchend: Jt,
      touchcancel: Jt
    }, Tt = {}, Mi = !1;
    function Nn(t, e, i) {
      return e === "touchstart" && Fn(), Ti[e] ? (i = Ti[e].bind(this, i), t.addEventListener(ke[e], i, !1), i) : (console.warn("wrong event specified:", e), y);
    }
    function Hn(t, e, i) {
      if (!ke[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(ke[e], i, !1);
    }
    function Un(t) {
      Tt[t.pointerId] = t;
    }
    function Gn(t) {
      Tt[t.pointerId] && (Tt[t.pointerId] = t);
    }
    function ki(t) {
      delete Tt[t.pointerId];
    }
    function Fn() {
      Mi || (document.addEventListener(wi, Un, !0), document.addEventListener(bi, Gn, !0), document.addEventListener(xi, ki, !0), document.addEventListener(Pi, ki, !0), Mi = !0);
    }
    function Jt(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var i in Tt)
          e.touches.push(Tt[i]);
        e.changedTouches = [e], t(e);
      }
    }
    function Wn(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && F(e), Jt(t, e);
    }
    function Vn(t) {
      var e = {}, i, n;
      for (n in t)
        i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var qn = 200;
    function Yn(t, e) {
      t.addEventListener("dblclick", e);
      var i = 0, n;
      function s(a) {
        if (a.detail !== 1) {
          n = a.detail;
          return;
        }
        if (!(a.pointerType === "mouse" || a.sourceCapabilities && !a.sourceCapabilities.firesTouchEvents)) {
          var l = Oi(a);
          if (!(l.some(function(c) {
            return c instanceof HTMLLabelElement && c.attributes.for;
          }) && !l.some(function(c) {
            return c instanceof HTMLInputElement || c instanceof HTMLSelectElement;
          }))) {
            var u = Date.now();
            u - i <= qn ? (n++, n === 2 && e(Vn(a))) : n = 1, i = u;
          }
        }
      }
      return t.addEventListener("click", s), {
        dblclick: e,
        simDblclick: s
      };
    }
    function jn(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var Ee = te(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), Bt = te(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Ei = Bt === "webkitTransition" || Bt === "OTransition" ? Bt + "End" : "transitionend";
    function Ci(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function Rt(t, e) {
      var i = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!i || i === "auto") && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        i = n ? n[e] : null;
      }
      return i === "auto" ? null : i;
    }
    function S(t, e, i) {
      var n = document.createElement(t);
      return n.className = e || "", i && i.appendChild(n), n;
    }
    function B(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function Qt(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function Mt(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function kt(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function Ce(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var i = $t(t);
      return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
    }
    function M(t, e) {
      if (t.classList !== void 0)
        for (var i = yt(e), n = 0, s = i.length; n < s; n++)
          t.classList.add(i[n]);
      else if (!Ce(t, e)) {
        var a = $t(t);
        De(t, (a ? a + " " : "") + e);
      }
    }
    function R(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : De(t, pe((" " + $t(t) + " ").replace(" " + e + " ", " ")));
    }
    function De(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function $t(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function $(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Kn(t, e);
    }
    function Kn(t, e) {
      var i = !1, n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    }
    function te(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e)
          return t[i];
      return !1;
    }
    function Lt(t, e, i) {
      var n = e || new P(0, 0);
      t.style[Ee] = (w.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
    }
    function H(t, e) {
      t._leaflet_pos = e, w.any3d ? Lt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function wt(t) {
      return t._leaflet_pos || new P(0, 0);
    }
    var Nt, Ht, Se;
    if ("onselectstart" in document)
      Nt = function() {
        T(window, "selectstart", F);
      }, Ht = function() {
        I(window, "selectstart", F);
      };
    else {
      var Ut = te(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Nt = function() {
        if (Ut) {
          var t = document.documentElement.style;
          Se = t[Ut], t[Ut] = "none";
        }
      }, Ht = function() {
        Ut && (document.documentElement.style[Ut] = Se, Se = void 0);
      };
    }
    function Oe() {
      T(window, "dragstart", F);
    }
    function ze() {
      I(window, "dragstart", F);
    }
    var ee, Ie;
    function Ae(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (ie(), ee = t, Ie = t.style.outlineStyle, t.style.outlineStyle = "none", T(window, "keydown", ie));
    }
    function ie() {
      ee && (ee.style.outlineStyle = Ie, ee = void 0, Ie = void 0, I(window, "keydown", ie));
    }
    function Di(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function Ze(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var Xn = {
      __proto__: null,
      TRANSFORM: Ee,
      TRANSITION: Bt,
      TRANSITION_END: Ei,
      get: Ci,
      getStyle: Rt,
      create: S,
      remove: B,
      empty: Qt,
      toFront: Mt,
      toBack: kt,
      hasClass: Ce,
      addClass: M,
      removeClass: R,
      setClass: De,
      getClass: $t,
      setOpacity: $,
      testProp: te,
      setTransform: Lt,
      setPosition: H,
      getPosition: wt,
      get disableTextSelection() {
        return Nt;
      },
      get enableTextSelection() {
        return Ht;
      },
      disableImageDrag: Oe,
      enableImageDrag: ze,
      preventOutline: Ae,
      restoreOutline: ie,
      getSizedParentNode: Di,
      getScale: Ze
    };
    function T(t, e, i, n) {
      if (e && typeof e == "object")
        for (var s in e)
          Re(t, s, e[s], i);
      else {
        e = yt(e);
        for (var a = 0, l = e.length; a < l; a++)
          Re(t, e[a], i, n);
      }
      return this;
    }
    var rt = "_leaflet_events";
    function I(t, e, i, n) {
      if (arguments.length === 1)
        Si(t), delete t[rt];
      else if (e && typeof e == "object")
        for (var s in e)
          Ne(t, s, e[s], i);
      else if (e = yt(e), arguments.length === 2)
        Si(t, function(u) {
          return me(e, u) !== -1;
        });
      else
        for (var a = 0, l = e.length; a < l; a++)
          Ne(t, e[a], i, n);
      return this;
    }
    function Si(t, e) {
      for (var i in t[rt]) {
        var n = i.split(/\d/)[0];
        (!e || e(n)) && Ne(t, n, null, null, i);
      }
    }
    var Be = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Re(t, e, i, n) {
      var s = e + p(i) + (n ? "_" + p(n) : "");
      if (t[rt] && t[rt][s])
        return this;
      var a = function(u) {
        return i.call(n || t, u || window.event);
      }, l = a;
      !w.touchNative && w.pointer && e.indexOf("touch") === 0 ? a = Nn(t, e, a) : w.touch && e === "dblclick" ? a = Yn(t, a) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Be[e] || e, a, w.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (a = function(u) {
        u = u || window.event, Ue(t, u) && l(u);
      }, t.addEventListener(Be[e], a, !1)) : t.addEventListener(e, l, !1) : t.attachEvent("on" + e, a), t[rt] = t[rt] || {}, t[rt][s] = a;
    }
    function Ne(t, e, i, n, s) {
      s = s || e + p(i) + (n ? "_" + p(n) : "");
      var a = t[rt] && t[rt][s];
      if (!a)
        return this;
      !w.touchNative && w.pointer && e.indexOf("touch") === 0 ? Hn(t, e, a) : w.touch && e === "dblclick" ? jn(t, a) : "removeEventListener" in t ? t.removeEventListener(Be[e] || e, a, !1) : t.detachEvent("on" + e, a), t[rt][s] = null;
    }
    function bt(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function He(t) {
      return Re(t, "wheel", bt), this;
    }
    function Gt(t) {
      return T(t, "mousedown touchstart dblclick contextmenu", bt), t._leaflet_disable_click = !0, this;
    }
    function F(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function xt(t) {
      return F(t), bt(t), this;
    }
    function Oi(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], i = t.target; i; )
        e.push(i), i = i.parentNode;
      return e;
    }
    function zi(t, e) {
      if (!e)
        return new P(t.clientX, t.clientY);
      var i = Ze(e), n = i.boundingClientRect;
      return new P(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - n.left) / i.x - e.clientLeft,
        (t.clientY - n.top) / i.y - e.clientTop
      );
    }
    var Jn = w.linux && w.chrome ? window.devicePixelRatio : w.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function Ii(t) {
      return w.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / Jn : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function Ue(t, e) {
      var i = e.relatedTarget;
      if (!i)
        return !0;
      try {
        for (; i && i !== t; )
          i = i.parentNode;
      } catch {
        return !1;
      }
      return i !== t;
    }
    var Qn = {
      __proto__: null,
      on: T,
      off: I,
      stopPropagation: bt,
      disableScrollPropagation: He,
      disableClickPropagation: Gt,
      preventDefault: F,
      stop: xt,
      getPropagationPath: Oi,
      getMousePosition: zi,
      getWheelDelta: Ii,
      isExternalTarget: Ue,
      addListener: T,
      removeListener: I
    }, Ai = It.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = wt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = q(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var i = this._startPos.add(this._offset.multiplyBy(t));
        e && i._round(), H(this._el, i), this.fire("step");
      },
      _complete: function() {
        Q(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), C = It.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: we,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, e) {
        e = A(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(E(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Bt && w.any3d && !w.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), T(this._proxy, Ei, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, i) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(E(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
          i.animate !== void 0 && (i.zoom = o({ animate: i.animate }, i.zoom), i.pan = o({ animate: i.animate, duration: i.duration }, i.pan));
          var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
          if (n)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (w.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (w.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, i) {
        var n = this.getZoomScale(e), s = this.getSize().divideBy(2), a = t instanceof P ? t : this.latLngToContainerPoint(t), l = a.subtract(s).multiplyBy(1 - 1 / n), u = this.containerPointToLatLng(s.add(l));
        return this.setView(u, e, { zoom: i });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : N(t);
        var i = x(e.paddingTopLeft || e.padding || [0, 0]), n = x(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, i.add(n));
        if (s = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, s) : s, s === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: s
          };
        var a = n.subtract(i).divideBy(2), l = this.project(t.getSouthWest(), s), u = this.project(t.getNorthEast(), s), c = this.unproject(l.add(u).divideBy(2).add(a), s);
        return {
          center: c,
          zoom: s
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = N(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var i = this._getBoundsCenterZoom(t, e);
        return this.setView(i.center, i.zoom, e);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, e) {
        if (t = x(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new Ai(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          M(this._mapPane, "leaflet-pan-anim");
          var i = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, i) {
        if (i = i || {}, i.animate === !1 || !w.any3d)
          return this.setView(t, e, i);
        this._stop();
        var n = this.project(this.getCenter()), s = this.project(t), a = this.getSize(), l = this._zoom;
        t = E(t), e = e === void 0 ? l : e;
        var u = Math.max(a.x, a.y), c = u * this.getZoomScale(l, e), _ = s.distanceTo(n) || 1, v = 1.42, b = v * v;
        function k(U) {
          var fe = U ? -1 : 1, Uo = U ? c : u, Go = c * c - u * u + fe * b * b * _ * _, Fo = 2 * Uo * b * _, Qe = Go / Fo, mn = Math.sqrt(Qe * Qe + 1) - Qe, Wo = mn < 1e-9 ? -18 : Math.log(mn);
          return Wo;
        }
        function V(U) {
          return (Math.exp(U) - Math.exp(-U)) / 2;
        }
        function G(U) {
          return (Math.exp(U) + Math.exp(-U)) / 2;
        }
        function et(U) {
          return V(U) / G(U);
        }
        var K = k(0);
        function zt(U) {
          return u * (G(K) / G(K + v * U));
        }
        function Bo(U) {
          return u * (G(K) * et(K + v * U) - V(K)) / b;
        }
        function Ro(U) {
          return 1 - Math.pow(1 - U, 1.5);
        }
        var No = Date.now(), fn = (k(1) - K) / v, Ho = i.duration ? 1e3 * i.duration : 1e3 * fn * 0.8;
        function pn() {
          var U = (Date.now() - No) / Ho, fe = Ro(U) * fn;
          U <= 1 ? (this._flyToFrame = q(pn, this), this._move(
            this.unproject(n.add(s.subtract(n).multiplyBy(Bo(fe) / _)), l),
            this.getScaleZoom(u / zt(fe), l),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, i.noMoveStart), pn.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var i = this._getBoundsCenterZoom(t, e);
        return this.flyTo(i.center, i.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = N(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(), n = this._limitCenter(i, this._zoom, N(t));
        return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var i = x(e.paddingTopLeft || e.padding || [0, 0]), n = x(e.paddingBottomRight || e.padding || [0, 0]), s = this.project(this.getCenter()), a = this.project(t), l = this.getPixelBounds(), u = Y([l.min.add(i), l.max.subtract(n)]), c = u.getSize();
        if (!u.contains(a)) {
          this._enforcingBounds = !0;
          var _ = a.subtract(u.getCenter()), v = u.extend(a).getSize().subtract(c);
          s.x += _.x < 0 ? -v.x : v.x, s.y += _.y < 0 ? -v.y : v.y, this.panTo(this.unproject(s), e), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = o({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var i = this.getSize(), n = e.divideBy(2).round(), s = i.divideBy(2).round(), a = n.subtract(s);
        return !a.x && !a.y ? this : (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: i
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = o({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var e = h(this._handleGeolocationResponse, this), i = h(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + i + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, i = t.coords.longitude, n = new z(e, i), s = n.toBounds(t.coords.accuracy * 2), a = this._locateOptions;
          if (a.setView) {
            var l = this.getBoundsZoom(s);
            this.setView(n, a.maxZoom ? Math.min(l, a.maxZoom) : l);
          }
          var u = {
            latlng: n,
            bounds: s,
            timestamp: t.timestamp
          };
          for (var c in t.coords)
            typeof t.coords[c] == "number" && (u[c] = t.coords[c]);
          this.fire("locationfound", u);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var i = this[t] = new e(this);
        return this._handlers.push(i), this.options[t] && i.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), B(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Q(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          B(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = S("div", i, e || this._mapPane);
        return t && (this._panes[t] = n), n;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
        return new j(e, i);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, e, i) {
        t = N(t), i = x(i || [0, 0]);
        var n = this.getZoom() || 0, s = this.getMinZoom(), a = this.getMaxZoom(), l = t.getNorthWest(), u = t.getSouthEast(), c = this.getSize().subtract(i), _ = Y(this.project(u, n), this.project(l, n)).getSize(), v = w.any3d ? this.options.zoomSnap : 1, b = c.x / _.x, k = c.y / _.y, V = e ? Math.max(b, k) : Math.min(b, k);
        return n = this.getScaleZoom(V, n), v && (n = Math.round(n / (v / 100)) * (v / 100), n = e ? Math.ceil(n / v) * v : Math.floor(n / v) * v), Math.max(s, Math.min(a, n));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new P(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var i = this._getTopLeftPoint(t, e);
        return new Z(i, i.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, e) {
        var i = this.options.crs;
        return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var i = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var n = i.zoom(t * i.scale(e));
        return isNaN(n) ? 1 / 0 : n;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(E(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(x(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = x(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(E(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(E(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(N(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(E(t), E(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return x(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return x(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(x(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(E(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return zi(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var e = this._container = Ci(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        T(e, "scroll", this._onScroll, this), this._containerId = p(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && w.any3d, M(t, "leaflet-container" + (w.touch ? " leaflet-touch" : "") + (w.retina ? " leaflet-retina" : "") + (w.ielt9 ? " leaflet-oldie" : "") + (w.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = Rt(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), H(this._mapPane, new P(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"), M(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, i) {
        H(this._mapPane, new P(0, 0));
        var n = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var s = this._zoom !== e;
        this._moveStart(s, i)._move(t, e)._moveEnd(s), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, i, n) {
        e === void 0 && (e = this._zoom);
        var s = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((s || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Q(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        H(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[p(this._container)] = this;
        var e = t ? I : T;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), w.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        Q(this._resizeRequest), this._resizeRequest = q(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (var i = [], n, s = e === "mouseout" || e === "mouseover", a = t.target || t.srcElement, l = !1; a; ) {
          if (n = this._targets[p(a)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
            l = !0;
            break;
          }
          if (n && n.listens(e, !0) && (s && !Ue(a, t) || (i.push(n), s)) || a === this._container)
            break;
          a = a.parentNode;
        }
        return !i.length && !l && !s && this.listens(e, !0) && (i = [this]), i;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var i = t.type;
          i === "mousedown" && Ae(e), this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, i) {
        if (t.type === "click") {
          var n = o({}, t);
          n.type = "preclick", this._fireDOMEvent(n, n.type, i);
        }
        var s = this._findEventTargets(t, e);
        if (i) {
          for (var a = [], l = 0; l < i.length; l++)
            i[l].listens(e, !0) && a.push(i[l]);
          s = a.concat(s);
        }
        if (s.length) {
          e === "contextmenu" && F(t);
          var u = s[0], c = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var _ = u.getLatLng && (!u._radius || u._radius <= 10);
            c.containerPoint = _ ? this.latLngToContainerPoint(u.getLatLng()) : this.mouseEventToContainerPoint(t), c.layerPoint = this.containerPointToLayerPoint(c.containerPoint), c.latlng = _ ? u.getLatLng() : this.layerPointToLatLng(c.layerPoint);
          }
          for (l = 0; l < s.length; l++)
            if (s[l].fire(e, c, !0), c.originalEvent._stopped || s[l].options.bubblingMouseEvents === !1 && me(this._mouseEvents, e) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return wt(this._mapPane) || new P(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return i.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, i) {
        var n = this._getNewPixelOrigin(i, e);
        return Y([
          this.project(t.getSouthWest(), e)._subtract(n),
          this.project(t.getNorthWest(), e)._subtract(n),
          this.project(t.getSouthEast(), e)._subtract(n),
          this.project(t.getNorthEast(), e)._subtract(n)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, e, i) {
        if (!i)
          return t;
        var n = this.project(t, e), s = this.getSize().divideBy(2), a = new Z(n.subtract(s), n.add(s)), l = this._getBoundsOffset(a, i, e);
        return Math.abs(l.x) <= 1 && Math.abs(l.y) <= 1 ? t : this.unproject(n.add(l), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var i = this.getPixelBounds(), n = new Z(i.min.add(t), i.max.add(t));
        return t.add(this._getBoundsOffset(n, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, i) {
        var n = Y(
          this.project(e.getNorthEast(), i),
          this.project(e.getSouthWest(), i)
        ), s = n.min.subtract(t.min), a = n.max.subtract(t.max), l = this._rebound(s.x, -a.x), u = this._rebound(s.y, -a.y);
        return new P(l, u);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), i = this.getMaxZoom(), n = w.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        R(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var i = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = S("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var i = Ee, n = this._proxy.style[i];
          Lt(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        B(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        Lt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, e, i) {
        if (this._animatingZoom)
          return !0;
        if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var n = this.getZoomScale(e), s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return i.animate !== !0 && !this.getSize().contains(s) ? !1 : (q(function() {
          this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: n
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(h(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && R(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function $n(t, e) {
      return new C(t, e);
    }
    var nt = lt.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        A(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
        return M(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (B(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), Ft = function(t) {
      return new nt(t);
    };
    C.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = S("div", e + "control-container", this._container);
        function n(s, a) {
          var l = e + s + " " + e + a;
          t[s + a] = S("div", l, i);
        }
        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          B(this._controlCorners[t]);
        B(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Zi = nt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, e, i, n) {
          return i < n ? -1 : n < i ? 1 : 0;
        }
      },
      initialize: function(t, e, i) {
        A(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var n in t)
          this._addLayer(t[n], n);
        for (n in e)
          this._addLayer(e[n], n, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return nt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(p(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : R(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return R(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = S("div", t), i = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), Gt(e), He(e);
        var n = this._section = S("section", t + "-list");
        i && (this._map.on("click", this.collapse, this), T(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var s = this._layersLink = S("a", t + "-toggle", e);
        s.href = "#", s.title = "Layers", s.setAttribute("role", "button"), T(s, {
          keydown: function(a) {
            a.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(a) {
            F(a), this._expandSafely();
          }
        }, this), i || this.expand(), this._baseLayersList = S("div", t + "-base", n), this._separator = S("div", t + "-separator", n), this._overlaysList = S("div", t + "-overlays", n), e.appendChild(n);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && p(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: i
        }), this.options.sortLayers && this._layers.sort(h(function(n, s) {
          return this.options.sortFunction(n.layer, s.layer, n.name, s.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        Qt(this._baseLayersList), Qt(this._overlaysList), this._layerControlInputs = [];
        var t, e, i, n, s = 0;
        for (i = 0; i < this._layers.length; i++)
          n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(p(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        i && this._map.fire(i, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
        return n.innerHTML = i, n.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
        t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + p(this), i), this._layerControlInputs.push(n), n.layerId = p(t.layer), T(n, "click", this._onInputClick, this);
        var s = document.createElement("span");
        s.innerHTML = " " + t.name;
        var a = document.createElement("span");
        e.appendChild(a), a.appendChild(n), a.appendChild(s);
        var l = t.overlay ? this._overlaysList : this._baseLayersList;
        return l.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, i, n = [], s = [];
          this._handlingClick = !0;
          for (var a = t.length - 1; a >= 0; a--)
            e = t[a], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || s.push(i);
          for (a = 0; a < s.length; a++)
            this._map.hasLayer(s[a]) && this._map.removeLayer(s[a]);
          for (a = 0; a < n.length; a++)
            this._map.hasLayer(n[a]) || this._map.addLayer(n[a]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), s = t.length - 1; s >= 0; s--)
          e = t[s], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, T(t, "click", F), this.expand();
        var e = this;
        setTimeout(function() {
          I(t, "click", F), e._preventClick = !1;
        });
      }
    }), to = function(t, e, i) {
      return new Zi(t, e, i);
    }, Ge = nt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", i = S("div", e + " leaflet-bar"), n = this.options;
        return this._zoomInButton = this._createButton(
          n.zoomInText,
          n.zoomInTitle,
          e + "-in",
          i,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          n.zoomOutText,
          n.zoomOutTitle,
          e + "-out",
          i,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, i, n, s) {
        var a = S("a", i, n);
        return a.innerHTML = t, a.href = "#", a.title = e, a.setAttribute("role", "button"), a.setAttribute("aria-label", e), Gt(a), T(a, "click", xt), T(a, "click", s, this), T(a, "click", this._refocusOnMap, this), a;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        R(this._zoomInButton, e), R(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (M(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (M(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    C.mergeOptions({
      zoomControl: !0
    }), C.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new Ge(), this.addControl(this.zoomControl));
    });
    var eo = function(t) {
      return new Ge(t);
    }, Bi = nt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var e = "leaflet-control-scale", i = S("div", e), n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, i) {
        t.metric && (this._mScale = S("div", e, i)), t.imperial && (this._iScale = S("div", e, i));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, i = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(i);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, i, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, i, n, s;
        e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (s = this._getRoundNum(e), this._updateScale(this._iScale, s + " ft", s / e));
      },
      _updateScale: function(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
        return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
      }
    }), io = function(t) {
      return new Bi(t);
    }, no = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Fe = nt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (w.inlineSvg ? no + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        A(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = S("div", "leaflet-control-attribution"), Gt(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    C.mergeOptions({
      attributionControl: !0
    }), C.addInitHook(function() {
      this.options.attributionControl && new Fe().addTo(this);
    });
    var oo = function(t) {
      return new Fe(t);
    };
    nt.Layers = Zi, nt.Zoom = Ge, nt.Scale = Bi, nt.Attribution = Fe, Ft.layers = to, Ft.zoom = eo, Ft.scale = io, Ft.attribution = oo;
    var at = lt.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    at.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var so = { Events: X }, Ri = w.touch ? "touchstart mousedown" : "mousedown", gt = It.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, e, i, n) {
        A(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (T(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (gt._dragging === this && this.finishDrag(!0), I(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !Ce(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            gt._dragging === this && this.finishDrag();
            return;
          }
          if (!(gt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (gt._dragging = this, this._preventOutline && Ae(this._element), Oe(), Nt(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, i = Di(this._element);
            this._startPoint = new P(e.clientX, e.clientY), this._startPos = wt(this._element), this._parentScale = Ze(i);
            var n = t.type === "mousedown";
            T(document, n ? "mousemove" : "touchmove", this._onMove, this), T(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new P(e.clientX, e.clientY)._subtract(this._startPoint);
          !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, F(t), this._moved || (this.fire("dragstart"), this._moved = !0, M(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), H(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        R(document.body, "leaflet-dragging"), this._lastTarget && (R(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), I(document, "mousemove touchmove", this._onMove, this), I(document, "mouseup touchend touchcancel", this._onUp, this), ze(), Ht();
        var e = this._moved && this._moving;
        this._moving = !1, gt._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function Ni(t, e, i) {
      var n, s = [1, 4, 2, 8], a, l, u, c, _, v, b, k;
      for (a = 0, v = t.length; a < v; a++)
        t[a]._code = Pt(t[a], e);
      for (u = 0; u < 4; u++) {
        for (b = s[u], n = [], a = 0, v = t.length, l = v - 1; a < v; l = a++)
          c = t[a], _ = t[l], c._code & b ? _._code & b || (k = ne(_, c, b, e, i), k._code = Pt(k, e), n.push(k)) : (_._code & b && (k = ne(_, c, b, e, i), k._code = Pt(k, e), n.push(k)), n.push(c));
        t = n;
      }
      return t;
    }
    function Hi(t, e) {
      var i, n, s, a, l, u, c, _, v;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      tt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var b = E([0, 0]), k = N(t), V = k.getNorthWest().distanceTo(k.getSouthWest()) * k.getNorthEast().distanceTo(k.getNorthWest());
      V < 1700 && (b = We(t));
      var G = t.length, et = [];
      for (i = 0; i < G; i++) {
        var K = E(t[i]);
        et.push(e.project(E([K.lat - b.lat, K.lng - b.lng])));
      }
      for (u = c = _ = 0, i = 0, n = G - 1; i < G; n = i++)
        s = et[i], a = et[n], l = s.y * a.x - a.y * s.x, c += (s.x + a.x) * l, _ += (s.y + a.y) * l, u += l * 3;
      u === 0 ? v = et[0] : v = [c / u, _ / u];
      var zt = e.unproject(x(v));
      return E([zt.lat + b.lat, zt.lng + b.lng]);
    }
    function We(t) {
      for (var e = 0, i = 0, n = 0, s = 0; s < t.length; s++) {
        var a = E(t[s]);
        e += a.lat, i += a.lng, n++;
      }
      return E([e / n, i / n]);
    }
    var ro = {
      __proto__: null,
      clipPolygon: Ni,
      polygonCenter: Hi,
      centroid: We
    };
    function Ui(t, e) {
      if (!e || !t.length)
        return t.slice();
      var i = e * e;
      return t = lo(t, i), t = ho(t, i), t;
    }
    function Gi(t, e, i) {
      return Math.sqrt(Wt(t, e, i, !0));
    }
    function ao(t, e, i) {
      return Wt(t, e, i);
    }
    function ho(t, e) {
      var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, s = new n(i);
      s[0] = s[i - 1] = 1, Ve(t, s, e, 0, i - 1);
      var a, l = [];
      for (a = 0; a < i; a++)
        s[a] && l.push(t[a]);
      return l;
    }
    function Ve(t, e, i, n, s) {
      var a = 0, l, u, c;
      for (u = n + 1; u <= s - 1; u++)
        c = Wt(t[u], t[n], t[s], !0), c > a && (l = u, a = c);
      a > i && (e[l] = 1, Ve(t, e, i, n, l), Ve(t, e, i, l, s));
    }
    function lo(t, e) {
      for (var i = [t[0]], n = 1, s = 0, a = t.length; n < a; n++)
        uo(t[n], t[s]) > e && (i.push(t[n]), s = n);
      return s < a - 1 && i.push(t[a - 1]), i;
    }
    var Fi;
    function Wi(t, e, i, n, s) {
      var a = n ? Fi : Pt(t, i), l = Pt(e, i), u, c, _;
      for (Fi = l; ; ) {
        if (!(a | l))
          return [t, e];
        if (a & l)
          return !1;
        u = a || l, c = ne(t, e, u, i, s), _ = Pt(c, i), u === a ? (t = c, a = _) : (e = c, l = _);
      }
    }
    function ne(t, e, i, n, s) {
      var a = e.x - t.x, l = e.y - t.y, u = n.min, c = n.max, _, v;
      return i & 8 ? (_ = t.x + a * (c.y - t.y) / l, v = c.y) : i & 4 ? (_ = t.x + a * (u.y - t.y) / l, v = u.y) : i & 2 ? (_ = c.x, v = t.y + l * (c.x - t.x) / a) : i & 1 && (_ = u.x, v = t.y + l * (u.x - t.x) / a), new P(_, v, s);
    }
    function Pt(t, e) {
      var i = 0;
      return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
    }
    function uo(t, e) {
      var i = e.x - t.x, n = e.y - t.y;
      return i * i + n * n;
    }
    function Wt(t, e, i, n) {
      var s = e.x, a = e.y, l = i.x - s, u = i.y - a, c = l * l + u * u, _;
      return c > 0 && (_ = ((t.x - s) * l + (t.y - a) * u) / c, _ > 1 ? (s = i.x, a = i.y) : _ > 0 && (s += l * _, a += u * _)), l = t.x - s, u = t.y - a, n ? l * l + u * u : new P(s, a);
    }
    function tt(t) {
      return !it(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function Vi(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), tt(t);
    }
    function qi(t, e) {
      var i, n, s, a, l, u, c, _;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      tt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var v = E([0, 0]), b = N(t), k = b.getNorthWest().distanceTo(b.getSouthWest()) * b.getNorthEast().distanceTo(b.getNorthWest());
      k < 1700 && (v = We(t));
      var V = t.length, G = [];
      for (i = 0; i < V; i++) {
        var et = E(t[i]);
        G.push(e.project(E([et.lat - v.lat, et.lng - v.lng])));
      }
      for (i = 0, n = 0; i < V - 1; i++)
        n += G[i].distanceTo(G[i + 1]) / 2;
      if (n === 0)
        _ = G[0];
      else
        for (i = 0, a = 0; i < V - 1; i++)
          if (l = G[i], u = G[i + 1], s = l.distanceTo(u), a += s, a > n) {
            c = (a - n) / s, _ = [
              u.x - c * (u.x - l.x),
              u.y - c * (u.y - l.y)
            ];
            break;
          }
      var K = e.unproject(x(_));
      return E([K.lat + v.lat, K.lng + v.lng]);
    }
    var co = {
      __proto__: null,
      simplify: Ui,
      pointToSegmentDistance: Gi,
      closestPointOnSegment: ao,
      clipSegment: Wi,
      _getEdgeIntersection: ne,
      _getBitCode: Pt,
      _sqClosestPointOnSegment: Wt,
      isFlat: tt,
      _flat: Vi,
      polylineCenter: qi
    }, qe = {
      project: function(t) {
        return new P(t.lng, t.lat);
      },
      unproject: function(t) {
        return new z(t.y, t.x);
      },
      bounds: new Z([-180, -90], [180, 90])
    }, Ye = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new Z([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, i = this.R, n = t.lat * e, s = this.R_MINOR / i, a = Math.sqrt(1 - s * s), l = a * Math.sin(n), u = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - l) / (1 + l), a / 2);
        return n = -i * Math.log(Math.max(u, 1e-10)), new P(t.lng * e * i, n);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, s = Math.sqrt(1 - n * n), a = Math.exp(-t.y / i), l = Math.PI / 2 - 2 * Math.atan(a), u = 0, c = 0.1, _; u < 15 && Math.abs(c) > 1e-7; u++)
          _ = s * Math.sin(l), _ = Math.pow((1 - _) / (1 + _), s / 2), c = Math.PI / 2 - 2 * Math.atan(a * _) - l, l += c;
        return new z(l * e, t.x * e / i);
      }
    }, _o = {
      __proto__: null,
      LonLat: qe,
      Mercator: Ye,
      SphericalMercator: ye
    }, fo = o({}, mt, {
      code: "EPSG:3395",
      projection: Ye,
      transformation: function() {
        var t = 0.5 / (Math.PI * Ye.R);
        return At(t, 0.5, -t, 0.5);
      }()
    }), Yi = o({}, mt, {
      code: "EPSG:4326",
      projection: qe,
      transformation: At(1 / 180, 1, -1 / 180, 0.5)
    }), po = o({}, ut, {
      projection: qe,
      transformation: At(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var i = e.lng - t.lng, n = e.lat - t.lat;
        return Math.sqrt(i * i + n * n);
      },
      infinite: !0
    });
    ut.Earth = mt, ut.EPSG3395 = fo, ut.EPSG3857 = we, ut.EPSG900913 = Ln, ut.EPSG4326 = Yi, ut.Simple = po;
    var ot = It.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[p(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[p(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var i = this.getEvents();
            e.on(i, this), this.once("remove", function() {
              e.off(i, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    C.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = p(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var e = p(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return p(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? it(t) ? t : [t] : [];
        for (var e = 0, i = t.length; e < i; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[p(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var e = p(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var s = this._zoomBoundLayers[n].options;
          t = s.minZoom === void 0 ? t : Math.min(t, s.minZoom), e = s.maxZoom === void 0 ? e : Math.max(e, s.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Et = ot.extend({
      initialize: function(t, e) {
        A(this, e), this._layers = {};
        var i, n;
        if (t)
          for (i = 0, n = t.length; i < n; i++)
            this.addLayer(t[i]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i, n;
        for (i in this._layers)
          n = this._layers[i], n[t] && n[t].apply(n, e);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, e) {
        for (var i in this._layers)
          t.call(e, this._layers[i]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return p(t);
      }
    }), mo = function(t, e) {
      return new Et(t, e);
    }, ct = Et.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), Et.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Et.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new j();
        for (var e in this._layers) {
          var i = this._layers[e];
          t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return t;
      }
    }), go = function(t, e) {
      return new ct(t, e);
    }, Ct = lt.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        A(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, e) {
        var i = this._getIconUrl(t);
        if (!i) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
      },
      _setIconStyles: function(t, e) {
        var i = this.options, n = i[e + "Size"];
        typeof n == "number" && (n = [n, n]);
        var s = x(n), a = x(e === "shadow" && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), a && (t.style.marginLeft = -a.x + "px", t.style.marginTop = -a.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return w.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function vo(t) {
      return new Ct(t);
    }
    var Vt = Ct.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof Vt.imagePath != "string" && (Vt.imagePath = this._detectIconPath()), (this.options.imagePath || Vt.imagePath) + Ct.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var e = function(i, n, s) {
          var a = n.exec(i);
          return a && a[s];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = S("div", "leaflet-default-icon-path", document.body), e = Rt(t, "background-image") || Rt(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var i = document.querySelector('link[href$="leaflet.css"]');
        return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
      }
    }), ji = at.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new gt(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), M(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && R(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, s = this._marker.options.autoPanPadding, a = wt(e._icon), l = i.getPixelBounds(), u = i.getPixelOrigin(), c = Y(
          l.min._subtract(u).add(s),
          l.max._subtract(u).subtract(s)
        );
        if (!c.contains(a)) {
          var _ = x(
            (Math.max(c.max.x, a.x) - c.max.x) / (l.max.x - c.max.x) - (Math.min(c.min.x, a.x) - c.min.x) / (l.min.x - c.min.x),
            (Math.max(c.max.y, a.y) - c.max.y) / (l.max.y - c.max.y) - (Math.min(c.min.y, a.y) - c.min.y) / (l.min.y - c.min.y)
          ).multiplyBy(n);
          i.panBy(_, { animate: !1 }), this._draggable._newPos._add(_), this._draggable._startPos._add(_), H(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = q(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (Q(this._panRequest), this._panRequest = q(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, i = e._shadow, n = wt(e._icon), s = e._map.layerPointToLatLng(n);
        i && H(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        Q(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), oe = ot.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new Vt(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, e) {
        A(this, e), this._latlng = E(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = E(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
        i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), M(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && T(i, "focus", this._panOnFocus, this);
        var s = t.icon.createShadow(this._shadow), a = !1;
        s !== this._shadow && (this._removeShadow(), a = !0), s && (M(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && a && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && I(this._icon, "focus", this._panOnFocus, this), B(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && B(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && H(this._icon, t), this._shadow && H(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ji)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ji(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && $(this._icon, t), this._shadow && $(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, i = e.iconSize ? x(e.iconSize) : x(0, 0), n = e.iconAnchor ? x(e.iconAnchor) : x(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: n,
            paddingBottomRight: i.subtract(n)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function yo(t, e) {
      return new oe(t, e);
    }
    var vt = ot.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return A(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), se = vt.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        A(this, e), this._latlng = E(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = E(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return vt.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
        this._pxBounds = new Z(this._point.subtract(n), this._point.add(n));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Lo(t, e) {
      return new se(t, e);
    }
    var je = se.extend({
      initialize: function(t, e, i) {
        if (typeof e == "number" && (e = o({}, i, { radius: e })), A(this, e), this._latlng = E(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new j(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: vt.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
        if (n.distance === mt.distance) {
          var s = Math.PI / 180, a = this._mRadius / mt.R / s, l = i.project([e + a, t]), u = i.project([e - a, t]), c = l.add(u).divideBy(2), _ = i.unproject(c).lat, v = Math.acos((Math.cos(a * s) - Math.sin(e * s) * Math.sin(_ * s)) / (Math.cos(e * s) * Math.cos(_ * s))) / s;
          (isNaN(v) || v === 0) && (v = a / Math.cos(Math.PI / 180 * e)), this._point = c.subtract(i.getPixelOrigin()), this._radius = isNaN(v) ? 0 : c.x - i.project([_, t - v]).x, this._radiusY = c.y - l.y;
        } else {
          var b = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(b).x;
        }
        this._updateBounds();
      }
    });
    function wo(t, e, i) {
      return new je(t, e, i);
    }
    var dt = vt.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, e) {
        A(this, e), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var e = 1 / 0, i = null, n = Wt, s, a, l = 0, u = this._parts.length; l < u; l++)
          for (var c = this._parts[l], _ = 1, v = c.length; _ < v; _++) {
            s = c[_ - 1], a = c[_];
            var b = n(t, s, a, !0);
            b < e && (e = b, i = n(t, s, a));
          }
        return i && (i.distance = Math.sqrt(e)), i;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return qi(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = E(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new j(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return tt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], i = tt(t), n = 0, s = t.length; n < s; n++)
          i ? (e[n] = E(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
        return e;
      },
      _project: function() {
        var t = new Z();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new P(t, t);
        this._rawPxBounds && (this._pxBounds = new Z([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, i) {
        var n = t[0] instanceof z, s = t.length, a, l;
        if (n) {
          for (l = [], a = 0; a < s; a++)
            l[a] = this._map.latLngToLayerPoint(t[a]), i.extend(l[a]);
          e.push(l);
        } else
          for (a = 0; a < s; a++)
            this._projectLatlngs(t[a], e, i);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, i, n, s, a, l, u, c;
          for (i = 0, s = 0, a = this._rings.length; i < a; i++)
            for (c = this._rings[i], n = 0, l = c.length; n < l - 1; n++)
              u = Wi(c[n], c[n + 1], t, n, !0), u && (e[s] = e[s] || [], e[s].push(u[0]), (u[1] !== c[n + 1] || n === l - 2) && (e[s].push(u[1]), s++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
          t[i] = Ui(t[i], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var i, n, s, a, l, u, c = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (i = 0, a = this._parts.length; i < a; i++)
          for (u = this._parts[i], n = 0, l = u.length, s = l - 1; n < l; s = n++)
            if (!(!e && n === 0) && Gi(t, u[s], u[n]) <= c)
              return !0;
        return !1;
      }
    });
    function bo(t, e) {
      return new dt(t, e);
    }
    dt._flat = Vi;
    var Dt = dt.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Hi(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = dt.prototype._convertLatLngs.call(this, t), i = e.length;
        return i >= 2 && e[0] instanceof z && e[0].equals(e[i - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        dt.prototype._setLatLngs.call(this, t), tt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return tt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, i = new P(e, e);
        if (t = new Z(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, s = this._rings.length, a; n < s; n++)
            a = Ni(this._rings[n], t, !0), a.length && this._parts.push(a);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, i, n, s, a, l, u, c, _;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (a = 0, c = this._parts.length; a < c; a++)
          for (i = this._parts[a], l = 0, _ = i.length, u = _ - 1; l < _; u = l++)
            n = i[l], s = i[u], n.y > t.y != s.y > t.y && t.x < (s.x - n.x) * (t.y - n.y) / (s.y - n.y) + n.x && (e = !e);
        return e || dt.prototype._containsPoint.call(this, t, !0);
      }
    });
    function xo(t, e) {
      return new Dt(t, e);
    }
    var _t = ct.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, e) {
        A(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = it(t) ? t : t.features, i, n, s;
        if (e) {
          for (i = 0, n = e.length; i < n; i++)
            s = e[i], (s.geometries || s.geometry || s.features || s.coordinates) && this.addData(s);
          return this;
        }
        var a = this.options;
        if (a.filter && !a.filter(t))
          return this;
        var l = re(t, a);
        return l ? (l.feature = le(t), l.defaultOptions = l.options, this.resetStyle(l), a.onEachFeature && a.onEachFeature(t, l), this.addLayer(l)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = o({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      }
    });
    function re(t, e) {
      var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, s = [], a = e && e.pointToLayer, l = e && e.coordsToLatLng || Ke, u, c, _, v;
      if (!n && !i)
        return null;
      switch (i.type) {
        case "Point":
          return u = l(n), Ki(a, t, u, e);
        case "MultiPoint":
          for (_ = 0, v = n.length; _ < v; _++)
            u = l(n[_]), s.push(Ki(a, t, u, e));
          return new ct(s);
        case "LineString":
        case "MultiLineString":
          return c = ae(n, i.type === "LineString" ? 0 : 1, l), new dt(c, e);
        case "Polygon":
        case "MultiPolygon":
          return c = ae(n, i.type === "Polygon" ? 1 : 2, l), new Dt(c, e);
        case "GeometryCollection":
          for (_ = 0, v = i.geometries.length; _ < v; _++) {
            var b = re({
              geometry: i.geometries[_],
              type: "Feature",
              properties: t.properties
            }, e);
            b && s.push(b);
          }
          return new ct(s);
        case "FeatureCollection":
          for (_ = 0, v = i.features.length; _ < v; _++) {
            var k = re(i.features[_], e);
            k && s.push(k);
          }
          return new ct(s);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Ki(t, e, i, n) {
      return t ? t(e, i) : new oe(i, n && n.markersInheritOptions && n);
    }
    function Ke(t) {
      return new z(t[1], t[0], t[2]);
    }
    function ae(t, e, i) {
      for (var n = [], s = 0, a = t.length, l; s < a; s++)
        l = e ? ae(t[s], e - 1, i) : (i || Ke)(t[s]), n.push(l);
      return n;
    }
    function Xe(t, e) {
      return t = E(t), t.alt !== void 0 ? [O(t.lng, e), O(t.lat, e), O(t.alt, e)] : [O(t.lng, e), O(t.lat, e)];
    }
    function he(t, e, i, n) {
      for (var s = [], a = 0, l = t.length; a < l; a++)
        s.push(e ? he(t[a], tt(t[a]) ? 0 : e - 1, i, n) : Xe(t[a], n));
      return !e && i && s.length > 0 && s.push(s[0].slice()), s;
    }
    function St(t, e) {
      return t.feature ? o({}, t.feature, { geometry: e }) : le(e);
    }
    function le(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var Je = {
      toGeoJSON: function(t) {
        return St(this, {
          type: "Point",
          coordinates: Xe(this.getLatLng(), t)
        });
      }
    };
    oe.include(Je), je.include(Je), se.include(Je), dt.include({
      toGeoJSON: function(t) {
        var e = !tt(this._latlngs), i = he(this._latlngs, e ? 1 : 0, !1, t);
        return St(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: i
        });
      }
    }), Dt.include({
      toGeoJSON: function(t) {
        var e = !tt(this._latlngs), i = e && !tt(this._latlngs[0]), n = he(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
        return e || (n = [n]), St(this, {
          type: (i ? "Multi" : "") + "Polygon",
          coordinates: n
        });
      }
    }), Et.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(i) {
          e.push(i.toGeoJSON(t).geometry.coordinates);
        }), St(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var i = e === "GeometryCollection", n = [];
        return this.eachLayer(function(s) {
          if (s.toGeoJSON) {
            var a = s.toGeoJSON(t);
            if (i)
              n.push(a.geometry);
            else {
              var l = le(a);
              l.type === "FeatureCollection" ? n.push.apply(n, l.features) : n.push(l);
            }
          }
        }), i ? St(this, {
          geometries: n,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: n
        };
      }
    });
    function Xi(t, e) {
      return new _t(t, e);
    }
    var Po = Xi, ue = ot.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, e, i) {
        this._url = t, this._bounds = N(e), A(this, i);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        B(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && Mt(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && kt(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = N(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : S("img");
        if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = y, e.onmousemove = y, e.onload = h(this.fire, this, "load"), e.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        Lt(this._image, i, e);
      },
      _reset: function() {
        var t = this._image, e = new Z(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), i = e.getSize();
        H(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      },
      _updateOpacity: function() {
        $(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), To = function(t, e, i) {
      return new ue(t, e, i);
    }, Ji = ue.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : S("video");
        if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = y, e.onmousemove = y, e.onloadeddata = h(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++)
            n.push(i[s].src);
          this._url = i.length > 0 ? n : [e.src];
          return;
        }
        it(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var a = 0; a < this._url.length; a++) {
          var l = S("source");
          l.src = this._url[a], e.appendChild(l);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Mo(t, e, i) {
      return new Ji(t, e, i);
    }
    var Qi = ue.extend({
      _initImage: function() {
        var t = this._image = this._url;
        M(t, "leaflet-image-layer"), this._zoomAnimated && M(t, "leaflet-zoom-animated"), this.options.className && M(t, this.options.className), t.onselectstart = y, t.onmousemove = y;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function ko(t, e, i) {
      return new Qi(t, e, i);
    }
    var ht = ot.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, e) {
        t && (t instanceof z || it(t)) ? (this._latlng = E(t), A(this, e)) : (A(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && $(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && $(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? ($(this._container, 0), this._removeTimeout = setTimeout(h(B, void 0, this._container), 200)) : B(this._container), this.options.interactive && (R(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = E(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && Mt(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && kt(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map)
          return !1;
        if (e instanceof ct) {
          e = null;
          var i = this._source._layers;
          for (var n in i)
            if (i[n]._map) {
              e = i[n];
              break;
            }
          if (!e)
            return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter)
            t = e.getCenter();
          else if (e.getLatLng)
            t = e.getLatLng();
          else if (e.getBounds)
            t = e.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string")
            t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = x(this.options.offset), i = this._getAnchor();
          this._zoomAnimated ? H(this._container, t.add(i)) : e = e.add(t).add(i);
          var n = this._containerBottom = -e.y, s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = n + "px", this._container.style.left = s + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    C.include({
      _initOverlay: function(t, e, i, n) {
        var s = e;
        return s instanceof t || (s = new t(n).setContent(e)), i && s.setLatLng(i), s;
      }
    }), ot.include({
      _initOverlay: function(t, e, i, n) {
        var s = i;
        return s instanceof t ? (A(s, n), s._source = this) : (s = e && !n ? e : new t(n, this), s.setContent(i)), s;
      }
    });
    var ce = ht.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, ht.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        ht.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof vt || this._source.on("preclick", bt));
      },
      onRemove: function(t) {
        ht.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof vt || this._source.off("preclick", bt));
      },
      getEvents: function() {
        var t = ht.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = S(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), i = this._wrapper = S("div", t + "-content-wrapper", e);
        if (this._contentNode = S("div", t + "-content", i), Gt(e), He(this._contentNode), T(e, "contextmenu", bt), this._tipContainer = S("div", t + "-tip-container", e), this._tip = S("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var n = this._closeButton = S("a", t + "-close-button", e);
          n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', T(n, "click", function(s) {
            F(s), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var i = t.offsetWidth;
        i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
        var n = t.offsetHeight, s = this.options.maxHeight, a = "leaflet-popup-scrolled";
        s && n > s ? (e.height = s + "px", M(t, a)) : R(t, a), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
        H(this._container, e.add(i));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(Rt(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, s = new P(this._containerLeft, -i - this._containerBottom);
          s._add(wt(this._container));
          var a = t.layerPointToContainerPoint(s), l = x(this.options.autoPanPadding), u = x(this.options.autoPanPaddingTopLeft || l), c = x(this.options.autoPanPaddingBottomRight || l), _ = t.getSize(), v = 0, b = 0;
          a.x + n + c.x > _.x && (v = a.x + n - _.x + c.x), a.x - v - u.x < 0 && (v = a.x - u.x), a.y + i + c.y > _.y && (b = a.y + i - _.y + c.y), a.y - b - u.y < 0 && (b = a.y - u.y), (v || b) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([v, b]));
        }
      },
      _getAnchor: function() {
        return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Eo = function(t, e) {
      return new ce(t, e);
    };
    C.mergeOptions({
      closePopupOnClick: !0
    }), C.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, i) {
        return this._initOverlay(ce, t, e, i).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), ot.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(ce, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof ct || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          xt(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof vt)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var de = ht.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        ht.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        ht.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = ht.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = S("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + p(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, i, n = this._map, s = this._container, a = n.latLngToContainerPoint(n.getCenter()), l = n.layerPointToContainerPoint(t), u = this.options.direction, c = s.offsetWidth, _ = s.offsetHeight, v = x(this.options.offset), b = this._getAnchor();
        u === "top" ? (e = c / 2, i = _) : u === "bottom" ? (e = c / 2, i = 0) : u === "center" ? (e = c / 2, i = _ / 2) : u === "right" ? (e = 0, i = _ / 2) : u === "left" ? (e = c, i = _ / 2) : l.x < a.x ? (u = "right", e = 0, i = _ / 2) : (u = "left", e = c + (v.x + b.x) * 2, i = _ / 2), t = t.subtract(x(e, i, !0)).add(v).add(b), R(s, "leaflet-tooltip-right"), R(s, "leaflet-tooltip-left"), R(s, "leaflet-tooltip-top"), R(s, "leaflet-tooltip-bottom"), M(s, "leaflet-tooltip-" + u), H(s, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && $(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Co = function(t, e) {
      return new de(t, e);
    };
    C.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, i) {
        return this._initOverlay(de, t, e, i).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), ot.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(de, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", i = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof ct || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (T(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), T(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = !1, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      },
      _moveTooltip: function(t) {
        var e = t.latlng, i, n;
        this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
      }
    });
    var $i = Ct.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
        if (i.html instanceof Element ? (Qt(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
          var n = x(i.bgPos);
          e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function Do(t) {
      return new $i(t);
    }
    Ct.Default = Vt;
    var qt = ot.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: w.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        A(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), B(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Mt(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (kt(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = g(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof P ? t : new P(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, s = e.length, a; n < s; n++)
          a = e[n].style.zIndex, e[n] !== this._container && a && (i = t(i, +a));
        isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !w.ielt9) {
          $(this._container, this.options.opacity);
          var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
          for (var n in this._tiles) {
            var s = this._tiles[n];
            if (!(!s.current || !s.loaded)) {
              var a = Math.min(1, (t - s.loaded) / 200);
              $(s.el, a), a < 1 ? e = !0 : (s.active ? i = !0 : this._onOpaqueTile(s), s.active = !0);
            }
          }
          i && !this._noPrune && this._pruneTiles(), e && (Q(this._fadeFrame), this._fadeFrame = q(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: y,
      _initContainer: function() {
        this._container || (this._container = S("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels)
            i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (B(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
          var n = this._levels[t], s = this._map;
          return n || (n = this._levels[t] = {}, n.el = S("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), y(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
        }
      },
      _onUpdateLevel: y,
      _onRemoveLevel: y,
      _onCreateLevel: y,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var n = e.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          B(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, i, n) {
        var s = Math.floor(t / 2), a = Math.floor(e / 2), l = i - 1, u = new P(+s, +a);
        u.z = +l;
        var c = this._tileCoordsToKey(u), _ = this._tiles[c];
        return _ && _.active ? (_.retain = !0, !0) : (_ && _.loaded && (_.retain = !0), l > n ? this._retainParent(s, a, l, n) : !1);
      },
      _retainChildren: function(t, e, i, n) {
        for (var s = 2 * t; s < 2 * t + 2; s++)
          for (var a = 2 * e; a < 2 * e + 2; a++) {
            var l = new P(s, a);
            l.z = i + 1;
            var u = this._tileCoordsToKey(l), c = this._tiles[u];
            if (c && c.active) {
              c.retain = !0;
              continue;
            } else c && c.loaded && (c.retain = !0);
            i + 1 < n && this._retainChildren(s, a, i + 1, n);
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      },
      _setView: function(t, e, i, n) {
        var s = Math.round(e);
        this.options.maxZoom !== void 0 && s > this.options.maxZoom || this.options.minZoom !== void 0 && s < this.options.minZoom ? s = void 0 : s = this._clampZoom(s);
        var a = this.options.updateWhenZooming && s !== this._tileZoom;
        (!n || a) && (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), s !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var i in this._levels)
          this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function(t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom), s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
        w.any3d ? Lt(t.el, s, n) : H(t.el, s);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, s = this._map.getPixelWorldBounds(this._tileZoom);
        s && (this._globalTileRange = this._pxBoundsToTileRange(s)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
          Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
          Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), s = e.project(t, this._tileZoom).floor(), a = e.getSize().divideBy(n * 2);
        return new Z(s.subtract(a), s.add(a));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var n = this._getTiledPixelBounds(t), s = this._pxBoundsToTileRange(n), a = s.getCenter(), l = [], u = this.options.keepBuffer, c = new Z(
              s.getBottomLeft().subtract([u, -u]),
              s.getTopRight().add([u, -u])
            );
            if (!(isFinite(s.min.x) && isFinite(s.min.y) && isFinite(s.max.x) && isFinite(s.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var _ in this._tiles) {
              var v = this._tiles[_].coords;
              (v.z !== this._tileZoom || !c.contains(new P(v.x, v.y))) && (this._tiles[_].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) {
              this._setView(t, i);
              return;
            }
            for (var b = s.min.y; b <= s.max.y; b++)
              for (var k = s.min.x; k <= s.max.x; k++) {
                var V = new P(k, b);
                if (V.z = this._tileZoom, !!this._isValidTile(V)) {
                  var G = this._tiles[this._tileCoordsToKey(V)];
                  G ? G.current = !0 : l.push(V);
                }
              }
            if (l.sort(function(K, zt) {
              return K.distanceTo(a) - zt.distanceTo(a);
            }), l.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var et = document.createDocumentFragment();
              for (k = 0; k < l.length; k++)
                this._addTile(l[k], et);
              this._level.el.appendChild(et);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var n = this._tileCoordsToBounds(t);
        return N(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), s = n.add(i), a = e.unproject(n, t.z), l = e.unproject(s, t.z);
        return [a, l];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), i = new j(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), i = new P(+e[0], +e[1]);
        return i.z = +e[2], i;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (B(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        M(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = y, t.onmousemove = y, w.ielt9 && this.options.opacity < 1 && $(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var i = this._getTilePos(t), n = this._tileCoordsToKey(t), s = this.createTile(this._wrapCoords(t), h(this._tileReady, this, t));
        this._initTile(s), this.createTile.length < 2 && q(h(this._tileReady, this, t, null, s)), H(s, i), this._tiles[n] = {
          el: s,
          coords: t,
          current: !0
        }, e.appendChild(s), this.fire("tileloadstart", {
          tile: s,
          coords: t
        });
      },
      _tileReady: function(t, e, i) {
        e && this.fire("tileerror", {
          error: e,
          tile: i,
          coords: t
        });
        var n = this._tileCoordsToKey(t);
        i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? ($(i.el, 0), Q(this._fadeFrame), this._fadeFrame = q(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (M(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: i.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), w.ielt9 || !this._map._fadeAnimated ? q(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new P(
          this._wrapX ? m(t.x, this._wrapX) : t.x,
          this._wrapY ? m(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new Z(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function So(t) {
      return new qt(t);
    }
    var Ot = qt.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, e) {
        this._url = t, e = A(this, e), e.detectRetina && w.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, e) {
        var i = document.createElement("img");
        return T(i, "load", h(this._tileOnLoad, this, e, i)), T(i, "error", h(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: w.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var i = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = i), e["-y"] = i;
        }
        return ei(this._url, o(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        w.ielt9 ? setTimeout(h(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = y, e.onerror = y, !e.complete)) {
            e.src = Kt;
            var i = this._tiles[t].coords;
            B(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: i
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", Kt), qt.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, i) {
        if (!(!this._map || i && i.getAttribute("src") === Kt))
          return qt.prototype._tileReady.call(this, t, e, i);
      }
    });
    function tn(t, e) {
      return new Ot(t, e);
    }
    var en = Ot.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, e) {
        this._url = t;
        var i = o({}, this.defaultWmsParams);
        for (var n in e)
          n in this.options || (i[n] = e[n]);
        e = A(this, e);
        var s = e.detectRetina && w.retina ? 2 : 1, a = this.getTileSize();
        i.width = a.x * s, i.height = a.y * s, this.wmsParams = i;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Ot.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), i = this._crs, n = Y(i.project(e[0]), i.project(e[1])), s = n.min, a = n.max, l = (this._wmsVersion >= 1.3 && this._crs === Yi ? [s.y, s.x, a.y, a.x] : [s.x, s.y, a.x, a.y]).join(","), u = Ot.prototype.getTileUrl.call(this, t);
        return u + ti(this.wmsParams, u, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + l;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return o(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function Oo(t, e) {
      return new en(t, e);
    }
    Ot.WMS = en, tn.wms = Oo;
    var ft = ot.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        A(this, t), p(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), s = this._map.project(this._center, e), a = n.multiplyBy(-i).add(s).subtract(this._map._getNewPixelOrigin(t, e));
        w.any3d ? Lt(this._container, a, i) : H(this._container, a);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new Z(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), nn = ft.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = ft.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        ft.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        T(t, "mousemove", this._onMouseMove, this), T(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), T(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        Q(this._redrawRequest), delete this._ctx, B(this._container), I(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers)
            t = this._layers[e], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          ft.prototype._update.call(this);
          var t = this._bounds, e = this._container, i = t.getSize(), n = w.retina ? 2 : 1;
          H(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", w.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        ft.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[p(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order, i = e.next, n = e.prev;
        i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[p(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), i = [], n, s;
          for (s = 0; s < e.length; s++) {
            if (n = Number(e[s]), isNaN(n))
              return;
            i.push(n);
          }
          t.options._dashArray = i;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || q(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new Z(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var i = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var i, n, s, a, l = t._parts, u = l.length, c = this._ctx;
          if (u) {
            for (c.beginPath(), i = 0; i < u; i++) {
              for (n = 0, s = l[i].length; n < s; n++)
                a = l[i][n], c[n ? "lineTo" : "moveTo"](a.x, a.y);
              e && c.closePath();
            }
            this._fillStroke(c, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), s = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          s !== 1 && (i.save(), i.scale(1, s)), i.beginPath(), i.arc(e.x, e.y / s, n, 0, Math.PI * 2, !1), s !== 1 && i.restore(), this._fillStroke(i, t);
        }
      },
      _fillStroke: function(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), i, n, s = this._drawFirst; s; s = s.next)
          i = s.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
        this._fireEvent(n ? [n] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (R(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, s = this._drawFirst; s; s = s.next)
            i = s.layer, i.options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (M(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(h(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (i)
            i.prev = n;
          else
            return;
          n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var i = e.next, n = e.prev;
          if (n)
            n.next = i;
          else
            return;
          i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function on(t) {
      return w.canvas ? new nn(t) : null;
    }
    var Yt = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), zo = {
      _initContainer: function() {
        this._container = S("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (ft.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = Yt("shape");
        M(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Yt("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[p(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        B(e), t.removeInteractiveTarget(e), delete this._layers[p(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, i = t._fill, n = t.options, s = t._container;
        s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = Yt("stroke")), s.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = it(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = Yt("fill")), s.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        Mt(t._container);
      },
      _bringToBack: function(t) {
        kt(t._container);
      }
    }, _e = w.vml ? Yt : ai, jt = ft.extend({
      _initContainer: function() {
        this._container = _e("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = _e("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        B(this._container), I(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          ft.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), i = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), H(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = _e("path");
        t.options.className && M(e, t.options.className), t.options.interactive && M(e, "leaflet-interactive"), this._updateStyle(t), this._layers[p(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        B(t._path), t.removeInteractiveTarget(t._path), delete this._layers[p(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, i = t.options;
        e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, hi(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, s = "a" + i + "," + n + " 0 1,0 ", a = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + s + i * 2 + ",0 " + s + -i * 2 + ",0 ";
        this._setPath(t, a);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        Mt(t._path);
      },
      _bringToBack: function(t) {
        kt(t._path);
      }
    });
    w.vml && jt.include(zo);
    function sn(t) {
      return w.svg || w.vml ? new jt(t) : null;
    }
    C.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && on(t) || sn(t);
      }
    });
    var rn = Dt.extend({
      initialize: function(t, e) {
        Dt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = N(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function Io(t, e) {
      return new rn(t, e);
    }
    jt.create = _e, jt.pointsToPath = hi, _t.geometryToLayer = re, _t.coordsToLatLng = Ke, _t.coordsToLatLngs = ae, _t.latLngToCoords = Xe, _t.latLngsToCoords = he, _t.getFeature = St, _t.asFeature = le, C.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var an = at.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        T(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        I(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        B(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Nt(), Oe(), this._startPoint = this._map.mouseEventToContainerPoint(t), T(document, {
          contextmenu: xt,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = S("div", "leaflet-zoom-box", this._container), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new Z(this._point, this._startPoint), i = e.getSize();
        H(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
      },
      _finish: function() {
        this._moved && (B(this._box), R(this._container, "leaflet-crosshair")), Ht(), ze(), I(document, {
          contextmenu: xt,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(h(this._resetState, this), 0);
          var e = new j(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    C.addInitHook("addHandler", "boxZoom", an), C.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var hn = at.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, s = t.originalEvent.shiftKey ? i - n : i + n;
        e.options.doubleClickZoom === "center" ? e.setZoom(s) : e.setZoomAround(t.containerPoint, s);
      }
    });
    C.addInitHook("addHandler", "doubleClickZoom", hn), C.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var ln = at.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new gt(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        M(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        R(this._map._container, "leaflet-grab"), R(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = N(this._map.options.maxBounds);
          this._offsetLimit = Y(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, s = (n - e + i) % t + e - i, a = (n + e + i) % t - e - i, l = Math.abs(s + i) < Math.abs(a + i) ? s : a;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = l;
      },
      _onDragEnd: function(t) {
        var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), n)
          e.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var s = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, l = i.easeLinearity, u = s.multiplyBy(l / a), c = u.distanceTo([0, 0]), _ = Math.min(i.inertiaMaxSpeed, c), v = u.multiplyBy(_ / c), b = _ / (i.inertiaDeceleration * l), k = v.multiplyBy(-b / 2).round();
          !k.x && !k.y ? e.fire("moveend") : (k = e._limitOffset(k, e.options.maxBounds), q(function() {
            e.panBy(k, {
              duration: b,
              easeLinearity: l,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    C.addInitHook("addHandler", "dragging", ln), C.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var un = at.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), T(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), I(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, i = this.keyCodes, n, s;
        for (n = 0, s = i.left.length; n < s; n++)
          e[i.left[n]] = [-1 * t, 0];
        for (n = 0, s = i.right.length; n < s; n++)
          e[i.right[n]] = [t, 0];
        for (n = 0, s = i.down.length; n < s; n++)
          e[i.down[n]] = [0, t];
        for (n = 0, s = i.up.length; n < s; n++)
          e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, i = this.keyCodes, n, s;
        for (n = 0, s = i.zoomIn.length; n < s; n++)
          e[i.zoomIn[n]] = t;
        for (n = 0, s = i.zoomOut.length; n < s; n++)
          e[i.zoomOut[n]] = -t;
      },
      _addHooks: function() {
        T(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        I(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, i = this._map, n;
          if (e in this._panKeys) {
            if (!i._panAnim || !i._panAnim._inProgress)
              if (n = this._panKeys[e], t.shiftKey && (n = x(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(x(n), i.options.maxBounds)), i.options.worldCopyJump) {
                var s = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
                i.panTo(s);
              } else
                i.panBy(n);
          } else if (e in this._zoomKeys)
            i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
            i.closePopup();
          else
            return;
          xt(t);
        }
      }
    });
    C.addInitHook("addHandler", "keyboard", un), C.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var cn = at.extend({
      addHooks: function() {
        T(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        I(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = Ii(t), i = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), n), xt(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), s = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, a = i ? Math.ceil(s / i) * i : s, l = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
        this._delta = 0, this._startTime = null, l && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + l) : t.setZoomAround(this._lastMousePos, e + l));
      }
    });
    C.addInitHook("addHandler", "scrollWheelZoom", cn);
    var Ao = 600;
    C.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: w.touchNative && w.safari && w.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var dn = at.extend({
      addHooks: function() {
        T(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        I(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new P(e.clientX, e.clientY), this._holdTimeout = setTimeout(h(function() {
            this._cancel(), this._isTapValid() && (T(document, "touchend", F), T(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), Ao), T(document, "touchend touchcancel contextmenu", this._cancel, this), T(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        I(document, "touchend", F), I(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), I(document, "touchend touchcancel contextmenu", this._cancel, this), I(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new P(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var i = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
          // button: 2,
          // buttons: 2
        });
        i._simulated = !0, e.target.dispatchEvent(i);
      }
    });
    C.addInitHook("addHandler", "tapHold", dn), C.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: w.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var _n = at.extend({
      addHooks: function() {
        M(this._map._container, "leaflet-touch-zoom"), T(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        R(this._map._container, "leaflet-touch-zoom"), I(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), T(document, "touchmove", this._onTouchMove, this), T(document, "touchend touchcancel", this._onTouchEnd, this), F(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), s = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, s === 1)
              return;
          } else {
            var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (s === 1 && a.x === 0 && a.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), Q(this._animRequest);
          var l = h(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = q(l, this, !0), F(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, Q(this._animRequest), I(document, "touchmove", this._onTouchMove, this), I(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    C.addInitHook("addHandler", "touchZoom", _n), C.BoxZoom = an, C.DoubleClickZoom = hn, C.Drag = ln, C.Keyboard = un, C.ScrollWheelZoom = cn, C.TapHold = dn, C.TouchZoom = _n, f.Bounds = Z, f.Browser = w, f.CRS = ut, f.Canvas = nn, f.Circle = je, f.CircleMarker = se, f.Class = lt, f.Control = nt, f.DivIcon = $i, f.DivOverlay = ht, f.DomEvent = Qn, f.DomUtil = Xn, f.Draggable = gt, f.Evented = It, f.FeatureGroup = ct, f.GeoJSON = _t, f.GridLayer = qt, f.Handler = at, f.Icon = Ct, f.ImageOverlay = ue, f.LatLng = z, f.LatLngBounds = j, f.Layer = ot, f.LayerGroup = Et, f.LineUtil = co, f.Map = C, f.Marker = oe, f.Mixin = so, f.Path = vt, f.Point = P, f.PolyUtil = ro, f.Polygon = Dt, f.Polyline = dt, f.Popup = ce, f.PosAnimation = Ai, f.Projection = _o, f.Rectangle = rn, f.Renderer = ft, f.SVG = jt, f.SVGOverlay = Qi, f.TileLayer = Ot, f.Tooltip = de, f.Transformation = Le, f.Util = vn, f.VideoOverlay = Ji, f.bind = h, f.bounds = Y, f.canvas = on, f.circle = wo, f.circleMarker = Lo, f.control = Ft, f.divIcon = Do, f.extend = o, f.featureGroup = go, f.geoJSON = Xi, f.geoJson = Po, f.gridLayer = So, f.icon = vo, f.imageOverlay = To, f.latLng = E, f.latLngBounds = N, f.layerGroup = mo, f.map = $n, f.marker = yo, f.point = x, f.polygon = xo, f.polyline = bo, f.popup = Eo, f.rectangle = Io, f.setOptions = A, f.stamp = p, f.svg = sn, f.svgOverlay = ko, f.tileLayer = tn, f.tooltip = Co, f.transformation = At, f.version = W, f.videoOverlay = Mo;
    var Zo = window.L;
    f.noConflict = function() {
      return window.L = Zo, this;
    }, window.L = f;
  });
})($e, $e.exports);
var Yo = $e.exports;
const pt = /* @__PURE__ */ qo(Yo);
(function(J, D, f) {
  function W(o, r) {
    for (; (o = o.parentElement) && !o.classList.contains(r); ) ;
    return o;
  }
  L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = { draw: { toolbar: { actions: { title: "Cancel drawing", text: "Cancel" }, finish: { title: "Finish drawing", text: "Finish" }, undo: { title: "Delete last point drawn", text: "Delete last point" }, buttons: { polyline: "Draw a polyline", polygon: "Draw a polygon", rectangle: "Draw a rectangle", circle: "Draw a circle", marker: "Draw a marker", circlemarker: "Draw a circlemarker" } }, handlers: { circle: { tooltip: { start: "Click and drag to draw circle." }, radius: "Radius" }, circlemarker: { tooltip: { start: "Click map to place circle marker." } }, marker: { tooltip: { start: "Click map to place marker." } }, polygon: { tooltip: { start: "Click to start drawing shape.", cont: "Click to continue drawing shape.", end: "Click first point to close this shape." } }, polyline: { error: "<strong>Error:</strong> shape edges cannot cross!", tooltip: { start: "Click to start drawing line.", cont: "Click to continue drawing line.", end: "Click last point to finish line." } }, rectangle: { tooltip: { start: "Click and drag to draw rectangle." } }, simpleshape: { tooltip: { end: "Release mouse to finish drawing." } } } }, edit: { toolbar: { actions: { save: { title: "Save changes", text: "Save" }, cancel: { title: "Cancel editing, discards all changes", text: "Cancel" }, clearAll: { title: "Clear all layers", text: "Clear All" } }, buttons: { edit: "Edit layers", editDisabled: "No layers to edit", remove: "Delete layers", removeDisabled: "No layers to delete" } }, handlers: { edit: { tooltip: { text: "Drag handles or markers to edit features.", subtext: "Click cancel to undo changes." } }, remove: { tooltip: { text: "Click on a feature to remove." } } } } }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({ initialize: function(o, r) {
    this._map = o, this._container = o._container, this._overlayPane = o._panes.overlayPane, this._popupPane = o._panes.popupPane, r && r.shapeOptions && (r.shapeOptions = L.Util.extend({}, this.options.shapeOptions, r.shapeOptions)), L.setOptions(this, r);
    var h = L.version.split(".");
    parseInt(h[0], 10) === 1 && parseInt(h[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events);
  }, enable: function() {
    this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DRAWSTART, { layerType: this.type }));
  }, disable: function() {
    this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, { layerType: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var o = this._map;
    o && (L.DomUtil.disableTextSelection(), o.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this));
  }, removeHooks: function() {
    this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this));
  }, setOptions: function(o) {
    L.setOptions(this, o);
  }, _fireCreatedEvent: function(o) {
    this._map.fire(L.Draw.Event.CREATED, { layer: o, layerType: this.type });
  }, _cancelDrawing: function(o) {
    o.keyCode === 27 && (this._map.fire("draw:canceled", { layerType: this.type }), this.disable());
  } }), L.Draw.Polyline = L.Draw.Feature.extend({ statics: { TYPE: "polyline" }, Poly: L.Polyline, options: { allowIntersection: !0, repeatMode: !1, drawError: { color: "#b00b00", timeout: 2500 }, icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), guidelineDistance: 20, maxGuideLineLength: 4e3, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !1, clickable: !0 }, metric: !0, feet: !0, nautic: !1, showLength: !0, zIndexOffset: 2e3, factor: 1, maxPoints: 0 }, initialize: function(o, r) {
    L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, r && r.drawError && (r.drawError = L.Util.extend({}, this.options.drawError, r.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, o, r);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup(), this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this);
  }, deleteLastVertex: function() {
    if (!(this._markers.length <= 1)) {
      var o = this._markers.pop(), r = this._poly, h = r.getLatLngs(), d = h.splice(-1, 1)[0];
      this._poly.setLatLngs(h), this._markerGroup.removeLayer(o), r.getLatLngs().length < 2 && this._map.removeLayer(r), this._vertexChanged(d, !1);
    }
  }, addVertex: function(o) {
    if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(o)) return void this._showErrorTooltip();
    this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(o)), this._poly.addLatLng(o), this._poly.getLatLngs().length === 2 && this._map.addLayer(this._poly), this._vertexChanged(o, !0);
  }, completeShape: function() {
    this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable());
  }, _finishShape: function() {
    var o = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(), r = this._poly.newLatLngIntersects(o[o.length - 1]);
    if (!this.options.allowIntersection && r || !this._shapeIsValid()) return void this._showErrorTooltip();
    this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  }, _shapeIsValid: function() {
    return !0;
  }, _onZoomEnd: function() {
    this._markers !== null && this._updateGuide();
  }, _onMouseMove: function(o) {
    var r = this._map.mouseEventToLayerPoint(o.originalEvent), h = this._map.layerPointToLatLng(r);
    this._currentLatLng = h, this._updateTooltip(h), this._updateGuide(r), this._mouseMarker.setLatLng(h), L.DomEvent.preventDefault(o.originalEvent);
  }, _vertexChanged: function(o, r) {
    this._map.fire(L.Draw.Event.DRAWVERTEX, { layers: this._markerGroup }), this._updateFinishHandler(), this._updateRunningMeasure(o, r), this._clearGuides(), this._updateTooltip();
  }, _onMouseDown: function(o) {
    if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
      this._onMouseMove(o), this._clickHandled = !0, this._disableNewMarkers();
      var r = o.originalEvent, h = r.clientX, d = r.clientY;
      this._startPoint.call(this, h, d);
    }
  }, _startPoint: function(o, r) {
    this._mouseDownOrigin = L.point(o, r);
  }, _onMouseUp: function(o) {
    var r = o.originalEvent, h = r.clientX, d = r.clientY;
    this._endPoint.call(this, h, d, o), this._clickHandled = null;
  }, _endPoint: function(o, r, h) {
    if (this._mouseDownOrigin) {
      var d = L.point(o, r).distanceTo(this._mouseDownOrigin), p = this._calculateFinishDistance(h.latlng);
      this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(h.latlng), this._finishShape()) : p < 10 && L.Browser.touch ? this._finishShape() : Math.abs(d) < 9 * (J.devicePixelRatio || 1) && this.addVertex(h.latlng), this._enableNewMarkers();
    }
    this._mouseDownOrigin = null;
  }, _onTouch: function(o) {
    var r, h, d = o.originalEvent;
    !d.touches || !d.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (r = d.touches[0].clientX, h = d.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, r, h), this._endPoint.call(this, r, h, o), this._touchHandled = null), this._clickHandled = null;
  }, _onMouseOut: function() {
    this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
  }, _calculateFinishDistance: function(o) {
    var r;
    if (this._markers.length > 0) {
      var h;
      if (this.type === L.Draw.Polyline.TYPE) h = this._markers[this._markers.length - 1];
      else {
        if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
        h = this._markers[0];
      }
      var d = this._map.latLngToContainerPoint(h.getLatLng()), p = new L.Marker(o, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset }), g = this._map.latLngToContainerPoint(p.getLatLng());
      r = d.distanceTo(g);
    } else r = 1 / 0;
    return r;
  }, _updateFinishHandler: function() {
    var o = this._markers.length;
    o > 1 && this._markers[o - 1].on("click", this._finishShape, this), o > 2 && this._markers[o - 2].off("click", this._finishShape, this);
  }, _createMarker: function(o) {
    var r = new L.Marker(o, { icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset });
    return this._markerGroup.addLayer(r), r;
  }, _updateGuide: function(o) {
    var r = this._markers ? this._markers.length : 0;
    r > 0 && (o = o || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[r - 1].getLatLng()), o));
  }, _updateTooltip: function(o) {
    var r = this._getTooltipText();
    o && this._tooltip.updatePosition(o), this._errorShown || this._tooltip.updateContent(r);
  }, _drawGuide: function(o, r) {
    var h, d, p, g = Math.floor(Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2))), m = this.options.guidelineDistance, y = this.options.maxGuideLineLength, O = g > y ? g - y : m;
    for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); O < g; O += this.options.guidelineDistance) h = O / g, d = { x: Math.floor(o.x * (1 - h) + h * r.x), y: Math.floor(o.y * (1 - h) + h * r.y) }, p = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), p.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(p, d);
  }, _updateGuideColor: function(o) {
    if (this._guidesContainer) for (var r = 0, h = this._guidesContainer.childNodes.length; r < h; r++) this._guidesContainer.childNodes[r].style.backgroundColor = o;
  }, _clearGuides: function() {
    if (this._guidesContainer) for (; this._guidesContainer.firstChild; ) this._guidesContainer.removeChild(this._guidesContainer.firstChild);
  }, _getTooltipText: function() {
    var o, r, h = this.options.showLength;
    return this._markers.length === 0 ? o = { text: L.drawLocal.draw.handlers.polyline.tooltip.start } : (r = h ? this._getMeasurementString() : "", o = this._markers.length === 1 ? { text: L.drawLocal.draw.handlers.polyline.tooltip.cont, subtext: r } : { text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: r }), o;
  }, _updateRunningMeasure: function(o, r) {
    var h, d, p = this._markers.length;
    this._markers.length === 1 ? this._measurementRunningTotal = 0 : (h = p - (r ? 2 : 1), d = L.GeometryUtil.isVersion07x() ? o.distanceTo(this._markers[h].getLatLng()) * (this.options.factor || 1) : this._map.distance(o, this._markers[h].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += d * (r ? 1 : -1));
  }, _getMeasurementString: function() {
    var o, r = this._currentLatLng, h = this._markers[this._markers.length - 1].getLatLng();
    return o = L.GeometryUtil.isVersion07x() ? h && r && r.distanceTo ? this._measurementRunningTotal + r.distanceTo(h) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : h && r ? this._measurementRunningTotal + this._map.distance(r, h) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(o, this.options.metric, this.options.feet, this.options.nautic, this.options.precision);
  }, _showErrorTooltip: function() {
    this._errorShown = !0, this._tooltip.showAsError().updateContent({ text: this.options.drawError.message }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({ color: this.options.drawError.color }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout);
  }, _hideErrorTooltip: function() {
    this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({ color: this.options.shapeOptions.color });
  }, _clearHideErrorTimeout: function() {
    this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null);
  }, _disableNewMarkers: function() {
    this._disableMarkers = !0;
  }, _enableNewMarkers: function() {
    setTimeout((function() {
      this._disableMarkers = !1;
    }).bind(this), 50);
  }, _cleanUpShape: function() {
    this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this);
  }, _fireCreatedEvent: function() {
    var o = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
  } }), L.Draw.Polygon = L.Draw.Polyline.extend({ statics: { TYPE: "polygon" }, Poly: L.Polygon, options: { showArea: !1, showLength: !1, shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, metric: !0, feet: !0, nautic: !1, precision: {} }, initialize: function(o, r) {
    L.Draw.Polyline.prototype.initialize.call(this, o, r), this.type = L.Draw.Polygon.TYPE;
  }, _updateFinishHandler: function() {
    var o = this._markers.length;
    o === 1 && this._markers[0].on("click", this._finishShape, this), o > 2 && (this._markers[o - 1].on("dblclick", this._finishShape, this), o > 3 && this._markers[o - 2].off("dblclick", this._finishShape, this));
  }, _getTooltipText: function() {
    var o, r;
    return this._markers.length === 0 ? o = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (o = L.drawLocal.draw.handlers.polygon.tooltip.cont, r = this._getMeasurementString()) : (o = L.drawLocal.draw.handlers.polygon.tooltip.end, r = this._getMeasurementString()), { text: o, subtext: r };
  }, _getMeasurementString: function() {
    var o = this._area, r = "";
    return o || this.options.showLength ? (this.options.showLength && (r = L.Draw.Polyline.prototype._getMeasurementString.call(this)), o && (r += "<br>" + L.GeometryUtil.readableArea(o, this.options.metric, this.options.precision)), r) : null;
  }, _shapeIsValid: function() {
    return this._markers.length >= 3;
  }, _vertexChanged: function(o, r) {
    var h;
    !this.options.allowIntersection && this.options.showArea && (h = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(h)), L.Draw.Polyline.prototype._vertexChanged.call(this, o, r);
  }, _cleanUpShape: function() {
    var o = this._markers.length;
    o > 0 && (this._markers[0].off("click", this._finishShape, this), o > 2 && this._markers[o - 1].off("dblclick", this._finishShape, this));
  } }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({ options: { repeatMode: !1 }, initialize: function(o, r) {
    this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, o, r);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({ text: this._initialLabelText }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), D.addEventListener("touchstart", L.DomEvent.preventDefault, { passive: !1 }));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(D, "mouseup", this._onMouseUp, this), L.DomEvent.off(D, "touchend", this._onMouseUp, this), D.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1;
  }, _getTooltipText: function() {
    return { text: this._endLabelText };
  }, _onMouseDown: function(o) {
    this._isDrawing = !0, this._startLatLng = o.latlng, L.DomEvent.on(D, "mouseup", this._onMouseUp, this).on(D, "touchend", this._onMouseUp, this).preventDefault(o.originalEvent);
  }, _onMouseMove: function(o) {
    var r = o.latlng;
    this._tooltip.updatePosition(r), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(r));
  }, _onMouseUp: function() {
    this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  } }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({ statics: { TYPE: "rectangle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, showArea: !0, metric: !0 }, initialize: function(o, r) {
    this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, o, r);
  }, disable: function() {
    this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this));
  }, _onMouseUp: function(o) {
    if (!this._shape && !this._isCurrentlyTwoClickDrawing) return void (this._isCurrentlyTwoClickDrawing = !0);
    this._isCurrentlyTwoClickDrawing && !W(o.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this);
  }, _drawShape: function(o) {
    this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, o)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, o), this.options.shapeOptions), this._map.addLayer(this._shape));
  }, _fireCreatedEvent: function() {
    var o = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
  }, _getTooltipText: function() {
    var o, r, h, d = L.Draw.SimpleShape.prototype._getTooltipText.call(this), p = this._shape, g = this.options.showArea;
    return p && (o = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), r = L.GeometryUtil.geodesicArea(o), h = g ? L.GeometryUtil.readableArea(r, this.options.metric) : ""), { text: d.text, subtext: h };
  } }), L.Draw.Marker = L.Draw.Feature.extend({ statics: { TYPE: "marker" }, options: { icon: new L.Icon.Default(), repeatMode: !1, zIndexOffset: 2e3 }, initialize: function(o, r) {
    this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, o, r);
  }, addHooks: function() {
    L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({ text: this._initialLabelText }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), { icon: L.divIcon({ className: "leaflet-mouse-marker", iconAnchor: [20, 20], iconSize: [40, 40] }), opacity: 0, zIndexOffset: this.options.zIndexOffset })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this));
  }, removeHooks: function() {
    L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this));
  }, _onMouseMove: function(o) {
    var r = o.latlng;
    this._tooltip.updatePosition(r), this._mouseMarker.setLatLng(r), this._marker ? (r = this._mouseMarker.getLatLng(), this._marker.setLatLng(r)) : (this._marker = this._createMarker(r), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker));
  }, _createMarker: function(o) {
    return new L.Marker(o, { icon: this.options.icon, zIndexOffset: this.options.zIndexOffset });
  }, _onClick: function() {
    this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
  }, _onTouch: function(o) {
    this._onMouseMove(o), this._onClick();
  }, _fireCreatedEvent: function() {
    var o = new L.Marker.Touch(this._marker.getLatLng(), { icon: this.options.icon });
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
  } }), L.Draw.CircleMarker = L.Draw.Marker.extend({ statics: { TYPE: "circlemarker" }, options: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0, zIndexOffset: 2e3 }, initialize: function(o, r) {
    this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, o, r);
  }, _fireCreatedEvent: function() {
    var o = new L.CircleMarker(this._marker.getLatLng(), this.options);
    L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
  }, _createMarker: function(o) {
    return new L.CircleMarker(o, this.options);
  } }), L.Draw.Circle = L.Draw.SimpleShape.extend({ statics: { TYPE: "circle" }, options: { shapeOptions: { stroke: !0, color: "#3388ff", weight: 4, opacity: 0.5, fill: !0, fillColor: null, fillOpacity: 0.2, clickable: !0 }, showRadius: !0, metric: !0, feet: !0, nautic: !1 }, initialize: function(o, r) {
    this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, o, r);
  }, _drawShape: function(o) {
    if (L.GeometryUtil.isVersion07x()) var r = this._startLatLng.distanceTo(o);
    else var r = this._map.distance(this._startLatLng, o);
    this._shape ? this._shape.setRadius(r) : (this._shape = new L.Circle(this._startLatLng, r, this.options.shapeOptions), this._map.addLayer(this._shape));
  }, _fireCreatedEvent: function() {
    var o = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
  }, _onMouseMove: function(o) {
    var r, h = o.latlng, d = this.options.showRadius, p = this.options.metric;
    if (this._tooltip.updatePosition(h), this._isDrawing) {
      this._drawShape(h), r = this._shape.getRadius().toFixed(1);
      var g = "";
      d && (g = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(r, p, this.options.feet, this.options.nautic)), this._tooltip.updateContent({ text: this._endLabelText, subtext: g });
    }
  } }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({ initialize: function(o, r) {
    this._marker = o, L.setOptions(this, r);
  }, addHooks: function() {
    var o = this._marker;
    o.dragging.enable(), o.on("dragend", this._onDragEnd, o), this._toggleMarkerHighlight();
  }, removeHooks: function() {
    var o = this._marker;
    o.dragging.disable(), o.off("dragend", this._onDragEnd, o), this._toggleMarkerHighlight();
  }, _onDragEnd: function(o) {
    var r = o.target;
    r.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: r });
  }, _toggleMarkerHighlight: function() {
    var o = this._marker._icon;
    o && (o.style.display = "none", L.DomUtil.hasClass(o, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(o, "leaflet-edit-marker-selected"), this._offsetMarker(o, -4)) : (L.DomUtil.addClass(o, "leaflet-edit-marker-selected"), this._offsetMarker(o, 4)), o.style.display = "");
  }, _offsetMarker: function(o, r) {
    var h = parseInt(o.style.marginTop, 10) - r, d = parseInt(o.style.marginLeft, 10) - r;
    o.style.marginTop = h + "px", o.style.marginLeft = d + "px";
  } }), L.Marker.addInitHook(function() {
    L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({ initialize: function(o) {
    this.latlngs = [o._latlngs], o._holes && (this.latlngs = this.latlngs.concat(o._holes)), this._poly = o, this._poly.on("revert-edited", this._updateLatLngs, this);
  }, _defaultShape: function() {
    return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs;
  }, _eachVertexHandler: function(o) {
    for (var r = 0; r < this._verticesHandlers.length; r++) o(this._verticesHandlers[r]);
  }, addHooks: function() {
    this._initHandlers(), this._eachVertexHandler(function(o) {
      o.addHooks();
    });
  }, removeHooks: function() {
    this._eachVertexHandler(function(o) {
      o.removeHooks();
    });
  }, updateMarkers: function() {
    this._eachVertexHandler(function(o) {
      o.updateMarkers();
    });
  }, _initHandlers: function() {
    this._verticesHandlers = [];
    for (var o = 0; o < this.latlngs.length; o++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[o], this._poly.options.poly));
  }, _updateLatLngs: function(o) {
    this.latlngs = [o.layer._latlngs], o.layer._holes && (this.latlngs = this.latlngs.concat(o.layer._holes));
  } }), L.Edit.PolyVerticesEdit = L.Handler.extend({ options: { icon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon" }), touchIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon" }), drawError: { color: "#b00b00", timeout: 1e3 } }, initialize: function(o, r, h) {
    L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = o, h && h.drawError && (h.drawError = L.Util.extend({}, this.options.drawError, h.drawError)), this._latlngs = r, L.setOptions(this, h);
  }, _defaultShape: function() {
    return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs;
  }, addHooks: function() {
    var o = this._poly, r = o._path;
    o instanceof L.Polygon || (o.options.fill = !1, o.options.editing && (o.options.editing.fill = !1)), r && o.options.editing && o.options.editing.className && (o.options.original.className && o.options.original.className.split(" ").forEach(function(h) {
      L.DomUtil.removeClass(r, h);
    }), o.options.editing.className.split(" ").forEach(function(h) {
      L.DomUtil.addClass(r, h);
    })), o.setStyle(o.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup));
  }, removeHooks: function() {
    var o = this._poly, r = o._path;
    r && o.options.editing && o.options.editing.className && (o.options.editing.className.split(" ").forEach(function(h) {
      L.DomUtil.removeClass(r, h);
    }), o.options.original.className && o.options.original.className.split(" ").forEach(function(h) {
      L.DomUtil.addClass(r, h);
    })), o.setStyle(o.options.original), o._map && (o._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
  }, updateMarkers: function() {
    this._markerGroup.clearLayers(), this._initMarkers();
  }, _initMarkers: function() {
    this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._markers = [];
    var o, r, h, d, p = this._defaultShape();
    for (o = 0, h = p.length; o < h; o++) d = this._createMarker(p[o], o), d.on("click", this._onMarkerClick, this), d.on("contextmenu", this._onContextMenu, this), this._markers.push(d);
    var g, m;
    for (o = 0, r = h - 1; o < h; r = o++) (o !== 0 || L.Polygon && this._poly instanceof L.Polygon) && (g = this._markers[r], m = this._markers[o], this._createMiddleMarker(g, m), this._updatePrevNext(g, m));
  }, _createMarker: function(o, r) {
    var h = new L.Marker.Touch(o, { draggable: !0, icon: this.options.icon });
    return h._origLatLng = o, h._index = r, h.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(h), h;
  }, _onMarkerDragStart: function() {
    this._poly.fire("editstart");
  }, _spliceLatLngs: function() {
    var o = this._defaultShape(), r = [].splice.apply(o, arguments);
    return this._poly._convertLatLngs(o, !0), this._poly.redraw(), r;
  }, _removeMarker: function(o) {
    var r = o._index;
    this._markerGroup.removeLayer(o), this._markers.splice(r, 1), this._spliceLatLngs(r, 1), this._updateIndexes(r, -1), o.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this);
  }, _fireEdit: function() {
    this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, { layers: this._markerGroup, poly: this._poly });
  }, _onMarkerDrag: function(o) {
    var r = o.target, h = this._poly, d = L.LatLngUtil.cloneLatLng(r._origLatLng);
    if (L.extend(r._origLatLng, r._latlng), h.options.poly) {
      var p = h._map._editTooltip;
      if (!h.options.poly.allowIntersection && h.intersects()) {
        L.extend(r._origLatLng, d), r.setLatLng(d);
        var g = h.options.color;
        h.setStyle({ color: this.options.drawError.color }), p && p.updateContent({ text: L.drawLocal.draw.handlers.polyline.error }), setTimeout(function() {
          h.setStyle({ color: g }), p && p.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext });
        }, 1e3);
      }
    }
    r._middleLeft && r._middleLeft.setLatLng(this._getMiddleLatLng(r._prev, r)), r._middleRight && r._middleRight.setLatLng(this._getMiddleLatLng(r, r._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
    var m = this._poly.getLatLngs();
    this._poly._convertLatLngs(m, !0), this._poly.redraw(), this._poly.fire("editdrag");
  }, _onMarkerClick: function(o) {
    var r = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3, h = o.target;
    this._defaultShape().length < r || (this._removeMarker(h), this._updatePrevNext(h._prev, h._next), h._middleLeft && this._markerGroup.removeLayer(h._middleLeft), h._middleRight && this._markerGroup.removeLayer(h._middleRight), h._prev && h._next ? this._createMiddleMarker(h._prev, h._next) : h._prev ? h._next || (h._prev._middleRight = null) : h._next._middleLeft = null, this._fireEdit());
  }, _onContextMenu: function(o) {
    var r = o.target;
    this._poly, this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, { marker: r, layers: this._markerGroup, poly: this._poly }), L.DomEvent.stopPropagation;
  }, _onTouchMove: function(o) {
    var r = this._map.mouseEventToLayerPoint(o.originalEvent.touches[0]), h = this._map.layerPointToLatLng(r), d = o.target;
    L.extend(d._origLatLng, h), d._middleLeft && d._middleLeft.setLatLng(this._getMiddleLatLng(d._prev, d)), d._middleRight && d._middleRight.setLatLng(this._getMiddleLatLng(d, d._next)), this._poly.redraw(), this.updateMarkers();
  }, _updateIndexes: function(o, r) {
    this._markerGroup.eachLayer(function(h) {
      h._index > o && (h._index += r);
    });
  }, _createMiddleMarker: function(o, r) {
    var h, d, p, g = this._getMiddleLatLng(o, r), m = this._createMarker(g);
    m.setOpacity(0.6), o._middleRight = r._middleLeft = m, d = function() {
      m.off("touchmove", d, this);
      var y = r._index;
      m._index = y, m.off("click", h, this).on("click", this._onMarkerClick, this), g.lat = m.getLatLng().lat, g.lng = m.getLatLng().lng, this._spliceLatLngs(y, 0, g), this._markers.splice(y, 0, m), m.setOpacity(1), this._updateIndexes(y, 1), r._index++, this._updatePrevNext(o, m), this._updatePrevNext(m, r), this._poly.fire("editstart");
    }, p = function() {
      m.off("dragstart", d, this), m.off("dragend", p, this), m.off("touchmove", d, this), this._createMiddleMarker(o, m), this._createMiddleMarker(m, r);
    }, h = function() {
      d.call(this), p.call(this), this._fireEdit();
    }, m.on("click", h, this).on("dragstart", d, this).on("dragend", p, this).on("touchmove", d, this), this._markerGroup.addLayer(m);
  }, _updatePrevNext: function(o, r) {
    o && (o._next = r), r && (r._prev = o);
  }, _getMiddleLatLng: function(o, r) {
    var h = this._poly._map, d = h.project(o.getLatLng()), p = h.project(r.getLatLng());
    return h.unproject(d._add(p)._divideBy(2));
  } }), L.Polyline.addInitHook(function() {
    this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    }));
  }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({ options: { moveIcon: new L.DivIcon({ iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move" }), resizeIcon: new L.DivIcon({
    iconSize: new L.Point(8, 8),
    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
  }), touchMoveIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon" }), touchResizeIcon: new L.DivIcon({ iconSize: new L.Point(20, 20), className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon" }) }, initialize: function(o, r) {
    L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = o, L.Util.setOptions(this, r);
  }, addHooks: function() {
    var o = this._shape;
    this._shape._map && (this._map = this._shape._map, o.setStyle(o.options.editing), o._map && (this._map = o._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)));
  }, removeHooks: function() {
    var o = this._shape;
    if (o.setStyle(o.options.original), o._map) {
      this._unbindMarker(this._moveMarker);
      for (var r = 0, h = this._resizeMarkers.length; r < h; r++) this._unbindMarker(this._resizeMarkers[r]);
      this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup;
    }
    this._map = null;
  }, updateMarkers: function() {
    this._markerGroup.clearLayers(), this._initMarkers();
  }, _initMarkers: function() {
    this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._createMoveMarker(), this._createResizeMarker();
  }, _createMoveMarker: function() {
  }, _createResizeMarker: function() {
  }, _createMarker: function(o, r) {
    var h = new L.Marker.Touch(o, { draggable: !0, icon: r, zIndexOffset: 10 });
    return this._bindMarker(h), this._markerGroup.addLayer(h), h;
  }, _bindMarker: function(o) {
    o.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this);
  }, _unbindMarker: function(o) {
    o.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this);
  }, _onMarkerDragStart: function(o) {
    o.target.setOpacity(0), this._shape.fire("editstart");
  }, _fireEdit: function() {
    this._shape.edited = !0, this._shape.fire("edit");
  }, _onMarkerDrag: function(o) {
    var r = o.target, h = r.getLatLng();
    r === this._moveMarker ? this._move(h) : this._resize(h), this._shape.redraw(), this._shape.fire("editdrag");
  }, _onMarkerDragEnd: function(o) {
    o.target.setOpacity(1), this._fireEdit();
  }, _onTouchStart: function(o) {
    if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o), typeof this._getCorners == "function") {
      var r = this._getCorners(), h = o.target, d = h._cornerIndex;
      h.setOpacity(0), this._oppositeCorner = r[(d + 2) % 4], this._toggleCornerMarkers(0, d);
    }
    this._shape.fire("editstart");
  }, _onTouchMove: function(o) {
    var r = this._map.mouseEventToLayerPoint(o.originalEvent.touches[0]), h = this._map.layerPointToLatLng(r);
    return o.target === this._moveMarker ? this._move(h) : this._resize(h), this._shape.redraw(), !1;
  }, _onTouchEnd: function(o) {
    o.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
  }, _move: function() {
  }, _resize: function() {
  } }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({ _createMoveMarker: function() {
    var o = this._shape.getBounds(), r = o.getCenter();
    this._moveMarker = this._createMarker(r, this.options.moveIcon);
  }, _createResizeMarker: function() {
    var o = this._getCorners();
    this._resizeMarkers = [];
    for (var r = 0, h = o.length; r < h; r++) this._resizeMarkers.push(this._createMarker(o[r], this.options.resizeIcon)), this._resizeMarkers[r]._cornerIndex = r;
  }, _onMarkerDragStart: function(o) {
    L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o);
    var r = this._getCorners(), h = o.target, d = h._cornerIndex;
    this._oppositeCorner = r[(d + 2) % 4], this._toggleCornerMarkers(0, d);
  }, _onMarkerDragEnd: function(o) {
    var r, h, d = o.target;
    d === this._moveMarker && (r = this._shape.getBounds(), h = r.getCenter(), d.setLatLng(h)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, o);
  }, _move: function(o) {
    for (var r, h = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), d = this._shape.getBounds(), p = d.getCenter(), g = [], m = 0, y = h.length; m < y; m++) r = [h[m].lat - p.lat, h[m].lng - p.lng], g.push([o.lat + r[0], o.lng + r[1]]);
    this._shape.setLatLngs(g), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
  }, _resize: function(o) {
    var r;
    this._shape.setBounds(L.latLngBounds(o, this._oppositeCorner)), r = this._shape.getBounds(), this._moveMarker.setLatLng(r.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
  }, _getCorners: function() {
    var o = this._shape.getBounds();
    return [o.getNorthWest(), o.getNorthEast(), o.getSouthEast(), o.getSouthWest()];
  }, _toggleCornerMarkers: function(o) {
    for (var r = 0, h = this._resizeMarkers.length; r < h; r++) this._resizeMarkers[r].setOpacity(o);
  }, _repositionCornerMarkers: function() {
    for (var o = this._getCorners(), r = 0, h = this._resizeMarkers.length; r < h; r++) this._resizeMarkers[r].setLatLng(o[r]);
  } }), L.Rectangle.addInitHook(function() {
    L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({ _createMoveMarker: function() {
    var o = this._shape.getLatLng();
    this._moveMarker = this._createMarker(o, this.options.moveIcon);
  }, _createResizeMarker: function() {
    this._resizeMarkers = [];
  }, _move: function(o) {
    if (this._resizeMarkers.length) {
      var r = this._getResizeMarkerPoint(o);
      this._resizeMarkers[0].setLatLng(r);
    }
    this._shape.setLatLng(o), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
  } }), L.CircleMarker.addInitHook(function() {
    L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    });
  }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({ _createResizeMarker: function() {
    var o = this._shape.getLatLng(), r = this._getResizeMarkerPoint(o);
    this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(r, this.options.resizeIcon));
  }, _getResizeMarkerPoint: function(o) {
    var r = this._shape._radius * Math.cos(Math.PI / 4), h = this._map.project(o);
    return this._map.unproject([h.x + r, h.y - r]);
  }, _resize: function(o) {
    var r = this._moveMarker.getLatLng();
    L.GeometryUtil.isVersion07x() ? radius = r.distanceTo(o) : radius = this._map.distance(r, o), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic) }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
  } }), L.Circle.addInitHook(function() {
    L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable());
  }), L.Map.mergeOptions({ touchExtend: !0 }), L.Map.TouchExtend = L.Handler.extend({ initialize: function(o) {
    this._map = o, this._container = o._container, this._pane = o._panes.overlayPane;
  }, addHooks: function() {
    L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this));
  }, removeHooks: function() {
    L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this));
  }, _touchEvent: function(o, r) {
    var h = {};
    if (o.touches !== void 0) {
      if (!o.touches.length) return;
      h = o.touches[0];
    } else if (o.pointerType !== "touch" || (h = o, !this._filterClick(o))) return;
    var d = this._map.mouseEventToContainerPoint(h), p = this._map.mouseEventToLayerPoint(h), g = this._map.layerPointToLatLng(p);
    this._map.fire(r, { latlng: g, layerPoint: p, containerPoint: d, pageX: h.pageX, pageY: h.pageY, originalEvent: o });
  }, _filterClick: function(o) {
    var r = o.timeStamp || o.originalEvent.timeStamp, h = L.DomEvent._lastClick && r - L.DomEvent._lastClick;
    return h && h > 100 && h < 500 || o.target._simulatedClick && !o._simulated ? (L.DomEvent.stop(o), !1) : (L.DomEvent._lastClick = r, !0);
  }, _onTouchStart: function(o) {
    this._map._loaded && this._touchEvent(o, "touchstart");
  }, _onTouchEnd: function(o) {
    this._map._loaded && this._touchEvent(o, "touchend");
  }, _onTouchCancel: function(o) {
    if (this._map._loaded) {
      var r = "touchcancel";
      this._detectIE() && (r = "pointercancel"), this._touchEvent(o, r);
    }
  }, _onTouchLeave: function(o) {
    this._map._loaded && this._touchEvent(o, "touchleave");
  }, _onTouchMove: function(o) {
    this._map._loaded && this._touchEvent(o, "touchmove");
  }, _detectIE: function() {
    var o = J.navigator.userAgent, r = o.indexOf("MSIE ");
    if (r > 0) return parseInt(o.substring(r + 5, o.indexOf(".", r)), 10);
    if (o.indexOf("Trident/") > 0) {
      var h = o.indexOf("rv:");
      return parseInt(o.substring(h + 3, o.indexOf(".", h)), 10);
    }
    var d = o.indexOf("Edge/");
    return d > 0 && parseInt(o.substring(d + 5, o.indexOf(".", d)), 10);
  } }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({ _initInteraction: function() {
    return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy();
  }, _initInteractionLegacy: function() {
    if (this.options.clickable) {
      var o = this._icon, r = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
      this._detectIE ? r.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : r.concat(["touchcancel"]), L.DomUtil.addClass(o, "leaflet-clickable"), L.DomEvent.on(o, "click", this._onMouseClick, this), L.DomEvent.on(o, "keypress", this._onKeyPress, this);
      for (var h = 0; h < r.length; h++) L.DomEvent.on(o, r[h], this._fireMouseEvent, this);
      L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
    }
  }, _detectIE: function() {
    var o = J.navigator.userAgent, r = o.indexOf("MSIE ");
    if (r > 0) return parseInt(o.substring(r + 5, o.indexOf(".", r)), 10);
    if (o.indexOf("Trident/") > 0) {
      var h = o.indexOf("rv:");
      return parseInt(o.substring(h + 3, o.indexOf(".", h)), 10);
    }
    var d = o.indexOf("Edge/");
    return d > 0 && parseInt(o.substring(d + 5, o.indexOf(".", d)), 10);
  } }), L.LatLngUtil = { cloneLatLngs: function(o) {
    for (var r = [], h = 0, d = o.length; h < d; h++) Array.isArray(o[h]) ? r.push(L.LatLngUtil.cloneLatLngs(o[h])) : r.push(this.cloneLatLng(o[h]));
    return r;
  }, cloneLatLng: function(o) {
    return L.latLng(o.lat, o.lng);
  } }, function() {
    var o = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 };
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, { geodesicArea: function(r) {
      var h, d, p = r.length, g = 0, m = Math.PI / 180;
      if (p > 2) {
        for (var y = 0; y < p; y++) h = r[y], d = r[(y + 1) % p], g += (d.lng - h.lng) * m * (2 + Math.sin(h.lat * m) + Math.sin(d.lat * m));
        g = 6378137 * g * 6378137 / 2;
      }
      return Math.abs(g);
    }, formattedNumber: function(r, h) {
      var d = parseFloat(r).toFixed(h), p = L.drawLocal.format && L.drawLocal.format.numeric, g = p && p.delimiters, m = g && g.thousands, y = g && g.decimal;
      if (m || y) {
        var O = d.split(".");
        d = m ? O[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + m) : O[0], y = y || ".", O.length > 1 && (d = d + y + O[1]);
      }
      return d;
    }, readableArea: function(r, h, m) {
      var p, g, m = L.Util.extend({}, o, m);
      return h ? (g = ["ha", "m"], type = typeof h, type === "string" ? g = [h] : type !== "boolean" && (g = h), p = r >= 1e6 && g.indexOf("km") !== -1 ? L.GeometryUtil.formattedNumber(1e-6 * r, m.km) + " km²" : r >= 1e4 && g.indexOf("ha") !== -1 ? L.GeometryUtil.formattedNumber(1e-4 * r, m.ha) + " ha" : L.GeometryUtil.formattedNumber(r, m.m) + " m²") : (r /= 0.836127, p = r >= 3097600 ? L.GeometryUtil.formattedNumber(r / 3097600, m.mi) + " mi²" : r >= 4840 ? L.GeometryUtil.formattedNumber(r / 4840, m.ac) + " acres" : L.GeometryUtil.formattedNumber(r, m.yd) + " yd²"), p;
    }, readableDistance: function(r, h, d, p, y) {
      var m, y = L.Util.extend({}, o, y);
      switch (h ? typeof h == "string" ? h : "metric" : d ? "feet" : p ? "nauticalMile" : "yards") {
        case "metric":
          m = r > 1e3 ? L.GeometryUtil.formattedNumber(r / 1e3, y.km) + " km" : L.GeometryUtil.formattedNumber(r, y.m) + " m";
          break;
        case "feet":
          r *= 3.28083, m = L.GeometryUtil.formattedNumber(r, y.ft) + " ft";
          break;
        case "nauticalMile":
          r *= 0.53996, m = L.GeometryUtil.formattedNumber(r / 1e3, y.nm) + " nm";
          break;
        case "yards":
        default:
          r *= 1.09361, m = r > 1760 ? L.GeometryUtil.formattedNumber(r / 1760, y.mi) + " miles" : L.GeometryUtil.formattedNumber(r, y.yd) + " yd";
      }
      return m;
    }, isVersion07x: function() {
      var r = L.version.split(".");
      return parseInt(r[0], 10) === 0 && parseInt(r[1], 10) === 7;
    } });
  }(), L.Util.extend(L.LineUtil, { segmentsIntersect: function(o, r, h, d) {
    return this._checkCounterclockwise(o, h, d) !== this._checkCounterclockwise(r, h, d) && this._checkCounterclockwise(o, r, h) !== this._checkCounterclockwise(o, r, d);
  }, _checkCounterclockwise: function(o, r, h) {
    return (h.y - o.y) * (r.x - o.x) > (r.y - o.y) * (h.x - o.x);
  } }), L.Polyline.include({ intersects: function() {
    var o, r, h, d = this._getProjectedPoints(), p = d ? d.length : 0;
    if (this._tooFewPointsForIntersection()) return !1;
    for (o = p - 1; o >= 3; o--) if (r = d[o - 1], h = d[o], this._lineSegmentsIntersectsRange(r, h, o - 2)) return !0;
    return !1;
  }, newLatLngIntersects: function(o, r) {
    return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(o), r);
  }, newPointIntersects: function(o, r) {
    var h = this._getProjectedPoints(), d = h ? h.length : 0, p = h ? h[d - 1] : null, g = d - 2;
    return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(p, o, g, r ? 1 : 0);
  }, _tooFewPointsForIntersection: function(o) {
    var r = this._getProjectedPoints(), h = r ? r.length : 0;
    return h += o || 0, !r || h <= 3;
  }, _lineSegmentsIntersectsRange: function(o, r, h, d) {
    var p, g, m = this._getProjectedPoints();
    d = d || 0;
    for (var y = h; y > d; y--) if (p = m[y - 1], g = m[y], L.LineUtil.segmentsIntersect(o, r, p, g)) return !0;
    return !1;
  }, _getProjectedPoints: function() {
    if (!this._defaultShape) return this._originalPoints;
    for (var o = [], r = this._defaultShape(), h = 0; h < r.length; h++) o.push(this._map.latLngToLayerPoint(r[h]));
    return o;
  } }), L.Polygon.include({ intersects: function() {
    var o, r, h, d, p = this._getProjectedPoints();
    return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (o = p.length, r = p[0], h = p[o - 1], d = o - 2, this._lineSegmentsIntersectsRange(h, r, d, 1)));
  } }), L.Control.Draw = L.Control.extend({ options: { position: "topleft", draw: {}, edit: !1 }, initialize: function(o) {
    if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
    L.Control.prototype.initialize.call(this, o);
    var r;
    this._toolbars = {}, L.DrawToolbar && this.options.draw && (r = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = r, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (r = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = r, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this;
  }, onAdd: function(o) {
    var r, h = L.DomUtil.create("div", "leaflet-draw"), d = !1;
    for (var p in this._toolbars) this._toolbars.hasOwnProperty(p) && (r = this._toolbars[p].addToolbar(o)) && (d || (L.DomUtil.hasClass(r, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(r.childNodes[0], "leaflet-draw-toolbar-top"), d = !0), h.appendChild(r));
    return h;
  }, onRemove: function() {
    for (var o in this._toolbars) this._toolbars.hasOwnProperty(o) && this._toolbars[o].removeToolbar();
  }, setDrawingOptions: function(o) {
    for (var r in this._toolbars) this._toolbars[r] instanceof L.DrawToolbar && this._toolbars[r].setOptions(o);
  }, _toolbarEnabled: function(o) {
    var r = o.target;
    for (var h in this._toolbars) this._toolbars[h] !== r && this._toolbars[h].disable();
  } }), L.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }), L.Map.addInitHook(function() {
    this.options.drawControl && (this.drawControl = new L.Control.Draw(), this.addControl(this.drawControl));
  }), L.Toolbar = L.Class.extend({ initialize: function(o) {
    L.setOptions(this, o), this._modes = {}, this._actionButtons = [], this._activeMode = null;
    var r = L.version.split(".");
    parseInt(r[0], 10) === 1 && parseInt(r[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events);
  }, enabled: function() {
    return this._activeMode !== null;
  }, disable: function() {
    this.enabled() && this._activeMode.handler.disable();
  }, addToolbar: function(o) {
    var r, h = L.DomUtil.create("div", "leaflet-draw-section"), d = 0, p = this._toolbarClass || "", g = this.getModeHandlers(o);
    for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = o, r = 0; r < g.length; r++) g[r].enabled && this._initModeHandler(g[r].handler, this._toolbarContainer, d++, p, g[r].title);
    if (d) return this._lastButtonIndex = --d, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), h.appendChild(this._toolbarContainer), h.appendChild(this._actionsContainer), h;
  }, removeToolbar: function() {
    for (var o in this._modes) this._modes.hasOwnProperty(o) && (this._disposeButton(this._modes[o].button, this._modes[o].handler.enable, this._modes[o].handler), this._modes[o].handler.disable(), this._modes[o].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
    this._modes = {};
    for (var r = 0, h = this._actionButtons.length; r < h; r++) this._disposeButton(this._actionButtons[r].button, this._actionButtons[r].callback, this);
    this._actionButtons = [], this._actionsContainer = null;
  }, _initModeHandler: function(o, r, h, d, p) {
    var g = o.type;
    this._modes[g] = {}, this._modes[g].handler = o, this._modes[g].button = this._createButton({ type: g, title: p, className: d + "-" + g, container: r, callback: this._modes[g].handler.enable, context: this._modes[g].handler }), this._modes[g].buttonIndex = h, this._modes[g].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this);
  }, _detectIOS: function() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !J.MSStream;
  }, _createButton: function(o) {
    var r = L.DomUtil.create("a", o.className || "", o.container), h = L.DomUtil.create("span", "sr-only", o.container);
    r.href = "#", r.appendChild(h), o.title && (r.title = o.title, h.innerHTML = o.title), o.text && (r.innerHTML = o.text, h.innerHTML = o.text);
    var d = this._detectIOS() ? "touchstart" : "click";
    return L.DomEvent.on(r, "click", L.DomEvent.stopPropagation).on(r, "mousedown", L.DomEvent.stopPropagation).on(r, "dblclick", L.DomEvent.stopPropagation).on(r, "touchstart", L.DomEvent.stopPropagation).on(r, "click", L.DomEvent.preventDefault).on(r, d, o.callback, o.context), r;
  }, _disposeButton: function(o, r) {
    var h = this._detectIOS() ? "touchstart" : "click";
    L.DomEvent.off(o, "click", L.DomEvent.stopPropagation).off(o, "mousedown", L.DomEvent.stopPropagation).off(o, "dblclick", L.DomEvent.stopPropagation).off(o, "touchstart", L.DomEvent.stopPropagation).off(o, "click", L.DomEvent.preventDefault).off(o, h, r);
  }, _handlerActivated: function(o) {
    this.disable(), this._activeMode = this._modes[o.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable");
  }, _handlerDeactivated: function() {
    this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable");
  }, _createActions: function(o) {
    var r, h, d, p, g = this._actionsContainer, m = this.getActions(o), y = m.length;
    for (h = 0, d = this._actionButtons.length; h < d; h++) this._disposeButton(this._actionButtons[h].button, this._actionButtons[h].callback);
    for (this._actionButtons = []; g.firstChild; ) g.removeChild(g.firstChild);
    for (var O = 0; O < y; O++) "enabled" in m[O] && !m[O].enabled || (r = L.DomUtil.create("li", "", g), p = this._createButton({ title: m[O].title, text: m[O].text, container: r, callback: m[O].callback, context: m[O].context }), this._actionButtons.push({ button: p, callback: m[O].callback }));
  }, _showActionsToolbar: function() {
    var o = this._activeMode.buttonIndex, r = this._lastButtonIndex, h = this._activeMode.button.offsetTop - 1;
    this._createActions(this._activeMode.handler), this._actionsContainer.style.top = h + "px", o === 0 && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), o === r && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED);
  }, _hideActionsToolbar: function() {
    this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED);
  } }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({ initialize: function(o) {
    this._map = o, this._popupPane = o._panes.popupPane, this._visible = !1, this._container = o.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this);
  }, dispose: function() {
    this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null);
  }, updateContent: function(o) {
    return this._container ? (o.subtext = o.subtext || "", o.subtext.length !== 0 || this._singleLineLabel ? o.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (o.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + o.subtext + "</span><br />" : "") + "<span>" + o.text + "</span>", o.text || o.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this;
  }, updatePosition: function(o) {
    var r = this._map.latLngToLayerPoint(o), h = this._container;
    return this._container && (this._visible && (h.style.visibility = "inherit"), L.DomUtil.setPosition(h, r)), this;
  }, showAsError: function() {
    return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this;
  }, removeError: function() {
    return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this;
  }, _onMouseOut: function() {
    this._container && (this._container.style.visibility = "hidden");
  } }), L.DrawToolbar = L.Toolbar.extend({ statics: { TYPE: "draw" }, options: { polyline: {}, polygon: {}, rectangle: {}, circle: {}, marker: {}, circlemarker: {} }, initialize: function(o) {
    for (var r in this.options) this.options.hasOwnProperty(r) && o[r] && (o[r] = L.extend({}, this.options[r], o[r]));
    this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, o);
  }, getModeHandlers: function(o) {
    return [{ enabled: this.options.polyline, handler: new L.Draw.Polyline(o, this.options.polyline), title: L.drawLocal.draw.toolbar.buttons.polyline }, { enabled: this.options.polygon, handler: new L.Draw.Polygon(o, this.options.polygon), title: L.drawLocal.draw.toolbar.buttons.polygon }, { enabled: this.options.rectangle, handler: new L.Draw.Rectangle(o, this.options.rectangle), title: L.drawLocal.draw.toolbar.buttons.rectangle }, { enabled: this.options.circle, handler: new L.Draw.Circle(o, this.options.circle), title: L.drawLocal.draw.toolbar.buttons.circle }, { enabled: this.options.marker, handler: new L.Draw.Marker(o, this.options.marker), title: L.drawLocal.draw.toolbar.buttons.marker }, { enabled: this.options.circlemarker, handler: new L.Draw.CircleMarker(o, this.options.circlemarker), title: L.drawLocal.draw.toolbar.buttons.circlemarker }];
  }, getActions: function(o) {
    return [{ enabled: o.completeShape, title: L.drawLocal.draw.toolbar.finish.title, text: L.drawLocal.draw.toolbar.finish.text, callback: o.completeShape, context: o }, { enabled: o.deleteLastVertex, title: L.drawLocal.draw.toolbar.undo.title, text: L.drawLocal.draw.toolbar.undo.text, callback: o.deleteLastVertex, context: o }, { title: L.drawLocal.draw.toolbar.actions.title, text: L.drawLocal.draw.toolbar.actions.text, callback: this.disable, context: this }];
  }, setOptions: function(o) {
    L.setOptions(this, o);
    for (var r in this._modes) this._modes.hasOwnProperty(r) && o.hasOwnProperty(r) && this._modes[r].handler.setOptions(o[r]);
  } }), L.EditToolbar = L.Toolbar.extend({ statics: { TYPE: "edit" }, options: { edit: { selectedPathOptions: { dashArray: "10, 10", fill: !0, fillColor: "#fe57a1", fillOpacity: 0.1, maintainColor: !1 } }, remove: {}, poly: null, featureGroup: null }, initialize: function(o) {
    o.edit && (o.edit.selectedPathOptions === void 0 && (o.edit.selectedPathOptions = this.options.edit.selectedPathOptions), o.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, o.edit.selectedPathOptions)), o.remove && (o.remove = L.extend({}, this.options.remove, o.remove)), o.poly && (o.poly = L.extend({}, this.options.poly, o.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, o), this._selectedFeatureCount = 0;
  }, getModeHandlers: function(o) {
    var r = this.options.featureGroup;
    return [{ enabled: this.options.edit, handler: new L.EditToolbar.Edit(o, { featureGroup: r, selectedPathOptions: this.options.edit.selectedPathOptions, poly: this.options.poly }), title: L.drawLocal.edit.toolbar.buttons.edit }, { enabled: this.options.remove, handler: new L.EditToolbar.Delete(o, { featureGroup: r }), title: L.drawLocal.edit.toolbar.buttons.remove }];
  }, getActions: function(o) {
    var r = [{ title: L.drawLocal.edit.toolbar.actions.save.title, text: L.drawLocal.edit.toolbar.actions.save.text, callback: this._save, context: this }, { title: L.drawLocal.edit.toolbar.actions.cancel.title, text: L.drawLocal.edit.toolbar.actions.cancel.text, callback: this.disable, context: this }];
    return o.removeAllLayers && r.push({ title: L.drawLocal.edit.toolbar.actions.clearAll.title, text: L.drawLocal.edit.toolbar.actions.clearAll.text, callback: this._clearAllLayers, context: this }), r;
  }, addToolbar: function(o) {
    var r = L.Toolbar.prototype.addToolbar.call(this, o);
    return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), r;
  }, removeToolbar: function() {
    this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this);
  }, disable: function() {
    this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this));
  }, _save: function() {
    this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
  }, _clearAllLayers: function() {
    this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable();
  }, _checkDisabled: function() {
    var o, r = this.options.featureGroup, h = r.getLayers().length !== 0;
    this.options.edit && (o = this._modes[L.EditToolbar.Edit.TYPE].button, h ? L.DomUtil.removeClass(o, "leaflet-disabled") : L.DomUtil.addClass(o, "leaflet-disabled"), o.setAttribute("title", h ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (o = this._modes[L.EditToolbar.Delete.TYPE].button, h ? L.DomUtil.removeClass(o, "leaflet-disabled") : L.DomUtil.addClass(o, "leaflet-disabled"), o.setAttribute("title", h ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled));
  } }), L.EditToolbar.Edit = L.Handler.extend({ statics: { TYPE: "edit" }, initialize: function(o, r) {
    if (L.Handler.prototype.initialize.call(this, o), L.setOptions(this, r), this._featureGroup = r.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
    this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
    var h = L.version.split(".");
    parseInt(h[0], 10) === 1 && parseInt(h[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events);
  }, enable: function() {
    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this));
  }, disable: function() {
    this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var o = this._map;
    o && (o.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext }), o._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
  }, removeHooks: function() {
    this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
  }, revertLayers: function() {
    this._featureGroup.eachLayer(function(o) {
      this._revertLayer(o);
    }, this);
  }, save: function() {
    var o = new L.LayerGroup();
    this._featureGroup.eachLayer(function(r) {
      r.edited && (o.addLayer(r), r.edited = !1);
    }), this._map.fire(L.Draw.Event.EDITED, { layers: o });
  }, _backupLayer: function(o) {
    var r = L.Util.stamp(o);
    this._uneditedLayerProps[r] || (o instanceof L.Polyline || o instanceof L.Polygon || o instanceof L.Rectangle ? this._uneditedLayerProps[r] = { latlngs: L.LatLngUtil.cloneLatLngs(o.getLatLngs()) } : o instanceof L.Circle ? this._uneditedLayerProps[r] = { latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()), radius: o.getRadius() } : (o instanceof L.Marker || o instanceof L.CircleMarker) && (this._uneditedLayerProps[r] = { latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()) }));
  }, _getTooltipText: function() {
    return { text: L.drawLocal.edit.handlers.edit.tooltip.text, subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext };
  }, _updateTooltip: function() {
    this._tooltip.updateContent(this._getTooltipText());
  }, _revertLayer: function(o) {
    var r = L.Util.stamp(o);
    o.edited = !1, this._uneditedLayerProps.hasOwnProperty(r) && (o instanceof L.Polyline || o instanceof L.Polygon || o instanceof L.Rectangle ? o.setLatLngs(this._uneditedLayerProps[r].latlngs) : o instanceof L.Circle ? (o.setLatLng(this._uneditedLayerProps[r].latlng), o.setRadius(this._uneditedLayerProps[r].radius)) : (o instanceof L.Marker || o instanceof L.CircleMarker) && o.setLatLng(this._uneditedLayerProps[r].latlng), o.fire("revert-edited", { layer: o }));
  }, _enableLayerEdit: function(o) {
    var r, h, d = o.layer || o.target || o;
    this._backupLayer(d), this.options.poly && (h = L.Util.extend({}, this.options.poly), d.options.poly = h), this.options.selectedPathOptions && (r = L.Util.extend({}, this.options.selectedPathOptions), r.maintainColor && (r.color = d.options.color, r.fillColor = d.options.fillColor), d.options.original = L.extend({}, d.options), d.options.editing = r), d instanceof L.Marker ? (d.editing && d.editing.enable(), d.dragging.enable(), d.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : d.editing.enable();
  }, _disableLayerEdit: function(o) {
    var r = o.layer || o.target || o;
    r.edited = !1, r.editing && r.editing.disable(), delete r.options.editing, delete r.options.original, this._selectedPathOptions && (r instanceof L.Marker ? this._toggleMarkerHighlight(r) : (r.setStyle(r.options.previousOptions), delete r.options.previousOptions)), r instanceof L.Marker ? (r.dragging.disable(), r.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : r.editing.disable();
  }, _onMouseMove: function(o) {
    this._tooltip.updatePosition(o.latlng);
  }, _onMarkerDragEnd: function(o) {
    var r = o.target;
    r.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: r });
  }, _onTouchMove: function(o) {
    var r = o.originalEvent.changedTouches[0], h = this._map.mouseEventToLayerPoint(r), d = this._map.layerPointToLatLng(h);
    o.target.setLatLng(d);
  }, _hasAvailableLayers: function() {
    return this._featureGroup.getLayers().length !== 0;
  } }), L.EditToolbar.Delete = L.Handler.extend({ statics: { TYPE: "remove" }, initialize: function(o, r) {
    if (L.Handler.prototype.initialize.call(this, o), L.Util.setOptions(this, r), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
    this.type = L.EditToolbar.Delete.TYPE;
    var h = L.version.split(".");
    parseInt(h[0], 10) === 1 && parseInt(h[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events);
  }, enable: function() {
    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DELETESTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this));
  }, disable: function() {
    this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
  }, addHooks: function() {
    var o = this._map;
    o && (o.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup(), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.remove.tooltip.text }), this._map.on("mousemove", this._onMouseMove, this));
  }, removeHooks: function() {
    this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this));
  }, revertLayers: function() {
    this._deletedLayers.eachLayer(function(o) {
      this._deletableLayers.addLayer(o), o.fire("revert-deleted", { layer: o });
    }, this);
  }, save: function() {
    this._map.fire(L.Draw.Event.DELETED, { layers: this._deletedLayers });
  }, removeAllLayers: function() {
    this._deletableLayers.eachLayer(function(o) {
      this._removeLayer({ layer: o });
    }, this), this.save();
  }, _enableLayerDelete: function(o) {
    (o.layer || o.target || o).on("click", this._removeLayer, this);
  }, _disableLayerDelete: function(o) {
    var r = o.layer || o.target || o;
    r.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(r);
  }, _removeLayer: function(o) {
    var r = o.layer || o.target || o;
    this._deletableLayers.removeLayer(r), this._deletedLayers.addLayer(r), r.fire("deleted");
  }, _onMouseMove: function(o) {
    this._tooltip.updatePosition(o.latlng);
  }, _hasAvailableLayers: function() {
    return this._deletableLayers.getLayers().length !== 0;
  } });
})(window, document);
class jo extends HTMLElement {
  constructor() {
    super(), this.drawnItems = new pt.FeatureGroup(), this.readonly = !1, this.isReady = !1, this.isGeolocating = !1, this.pendingActions = [], this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot && (this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        #map {
          width: 100%;
          height: 100%;
          min-height: 300px;
        }
      </style>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css"
      />

      <div id="map"></div>
    `, this.initMap(), this.initDraw());
  }
  runOrQueue(D) {
    if (!this.isReady) {
      this.pendingActions.push(D);
      return;
    }
    D();
  }
  initMap() {
    const D = this.shadowRoot.getElementById("map");
    this.map = pt.map(D).setView([0, 0], 2), pt.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(this.map), this.map.addLayer(this.drawnItems), this.isReady = !0, this.pendingActions.forEach((f) => f()), this.pendingActions = [];
  }
  initDraw() {
    this.map && (this.drawControl = new pt.Control.Draw({
      edit: {
        featureGroup: this.drawnItems
      },
      draw: {
        polygon: {},
        polyline: !1,
        rectangle: !1,
        circle: !1,
        marker: !1,
        circlemarker: !1
      }
    }), this.map.addControl(this.drawControl), this.map.on(pt.Draw.Event.CREATED, (D) => {
      const f = D.layer;
      f.setStyle({
        color: "#1d4ed8",
        weight: 3,
        opacity: 1,
        fillColor: "#3b82f6",
        fillOpacity: 0.35
      }), this.drawnItems.addLayer(f), this.emitChange();
    }), this.map.on(pt.Draw.Event.EDITED, (D) => {
      D.layers.eachLayer((f) => {
        f.setStyle({
          color: "#1d4ed8",
          weight: 3,
          fillColor: "#3b82f6",
          fillOpacity: 0.35
        });
      }), this.emitChange();
    }), this.map.on(pt.Draw.Event.DELETED, () => {
      this.emitChange();
    }));
  }
  emitChange() {
    const D = this.getGeoJSON();
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { geojson: D }
      })
    );
  }
  // =========================
  // Public API (v0.3)
  // =========================
  async enableGeolocation() {
    return this.map ? "geolocation" in navigator ? this.isGeolocating ? {
      status: "pending"
    } : (this.isGeolocating = !0, new Promise((D) => {
      navigator.geolocation.getCurrentPosition(
        (f) => {
          const { latitude: W, longitude: o } = f.coords;
          this.map.setView([W, o], 13), this.isGeolocating = !1, this.dispatchEvent(
            new CustomEvent("geolocation:success", {
              detail: { lat: W, lng: o }
            })
          ), D({
            status: "granted",
            position: { lat: W, lng: o }
          });
        },
        (f) => {
          this.isGeolocating = !1, this.dispatchEvent(
            new CustomEvent("geolocation:error", {
              detail: f
            })
          ), D({
            status: "denied",
            error: {
              code: f.code,
              message: f.message
            }
          });
        }
      );
    })) : {
      status: "error",
      error: { message: "Geolocation not supported" }
    } : {
      status: "error",
      error: { message: "Map is not ready" }
    };
  }
  getGeoJSON() {
    return this.drawnItems.toGeoJSON();
  }
  setGeoJSON(D) {
    this.runOrQueue(() => {
      if (!this.map) return;
      this.drawnItems.clearLayers();
      const W = pt.geoJSON(D, {
        onEachFeature: (o, r) => {
          this.drawnItems.addLayer(r);
        }
      }).getBounds();
      W.isValid() && this.map.fitBounds(W), this.emitChange();
    });
  }
  clear() {
    this.runOrQueue(() => {
      this.drawnItems && (this.drawnItems.clearLayers(), this.emitChange());
    });
  }
  getBoundary() {
    return this.boundaryLayer ? this.boundaryLayer.toGeoJSON() : null;
  }
  setBoundary(D) {
    this.runOrQueue(() => {
      if (!this.map) return;
      this.boundaryLayer && (this.map.removeLayer(this.boundaryLayer), this.boundaryLayer = void 0), this.boundaryLayer = pt.geoJSON(D, {
        interactive: !1,
        style: {
          color: "#2563eb",
          weight: 2,
          opacity: 0.9,
          fillColor: "#2563eb",
          fillOpacity: 0.05,
          // KEY: very light fill
          dashArray: "6 6"
        }
      }), this.boundaryLayer.addTo(this.map);
      const f = this.boundaryLayer.getBounds();
      f.isValid() && this.map.fitBounds(f);
    });
  }
  clearBoundary() {
    this.runOrQueue(() => {
      !this.map || !this.boundaryLayer || (this.map.removeLayer(this.boundaryLayer), this.boundaryLayer = void 0);
    });
  }
  setReadonly(D) {
    this.runOrQueue(() => {
      !this.map || !this.drawControl || this.readonly !== D && (this.readonly = D, D ? this.map.removeControl(this.drawControl) : this.map.addControl(this.drawControl));
    });
  }
  isReadonly() {
    return this.readonly;
  }
  setView(D, f, W) {
    this.runOrQueue(() => {
      this.map && (typeof W == "number" ? this.map.setView([D, f], W) : this.map.panTo([D, f]));
    });
  }
}
customElements.define("map-boundary-editor", jo);
