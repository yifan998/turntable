(function (e) {
  function t(t) {
    for (
      var n, s, o = t[0], u = t[1], l = t[2], p = 0, f = [];
      p < o.length;
      p++
    )
      (s = o[p]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && f.push(r[s][0]),
        (r[s] = 0);
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
    c && c(t);
    while (f.length) f.shift()();
    return a.push.apply(a, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < a.length; t++) {
      for (var i = a[t], n = !0, o = 1; o < i.length; o++) {
        var u = i[o];
        0 !== r[u] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = s((s.s = i[0]))));
    }
    return e;
  }
  var n = {},
    r = { app: 0 },
    a = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function (e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var c = u;
  a.push([0, "chunk-vendors"]), i();
})({
  0: function (e, t, i) {
    e.exports = i("56d7");
  },
  "034f": function (e, t, i) {
    "use strict";
    i("85ec");
  },
  "2a5f": function (e, t, i) {
    // https://yifan998.github.io/https://yifan998.github.io/turntable/img/222.0eb507f4.png

    
    e.exports = i.p + "turntable/img/222.0eb507f4.png";
  },
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    i("e260"), i("e6cf"), i("cca6"), i("a79d");
    var n = i("2b0e"),
      r = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { attrs: { id: "app" } }, [i("turntable")], 1);
      },
      a = [],
      s = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            staticStyle: {
              background: "#2C9AFC",
              height: "100vh",
              width: "100vw",
              overflow: "hidden",
              "text-align": "center",
            },
          },
          [
            e._m(0),
            i("div", { staticClass: "gameBox" }, [
              i("div", { staticClass: "bg1" }),
              i("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.lampShow,
                    expression: "lampShow",
                  },
                ],
                staticClass: "bg2",
              }),
              i("div", { staticClass: "start", on: { click: e.move } }, [
                i("span", [e._v("开始抽奖")]),
              ]),
              i(
                "ul",
                e._l(e.list, function (t, n) {
                  return i(
                    "li",
                    {
                      key: n,
                      class: ["item" + (n + 1), { active: e.index == n }],
                    },
                    [
                      i("div", { staticClass: "img1" }, [
                        i("img", { attrs: { src: t.image, alt: "" } }),
                      ]),
                      i("p", [e._v(e._s(t.prize_name))]),
                    ]
                  );
                }),
                0
              ),
            ]),
          ]
        );
      },
      o = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticStyle: {
                "font-size": "22px",
                "padding-top": "70px",
                color: "#fff",
              },
            },
            [i("span", [e._v("九宫格抽奖")])]
          );
        },
      ],
      u =
        (i("a9e3"),
        {
          data: function () {
            return {
              list: [],
              index: 0,
              count: 8,
              times: 0,
              cycle: 60,
              speed: 200,
              lampShow: !1,
              timer: 0,
              lamp: 0,
              prize: 0,
              number_of_draws: 0,
              prize_data: {
                id: Number,
                name: "",
                number: Number,
                image: "",
                type: Number,
              },
              show: !1,
            };
          },
          mounted: function () {
            (this.list = [
              { id: 1, number: 1, prize_name: "炸鸡", image: i("2a5f") },
              { id: 2, number: 2, prize_name: "面条", image: i("2a5f") },
              { id: 3, number: 3, prize_name: "米饭", image: i("2a5f") },
              { id: 4, number: 4, prize_name: "米饭", image: i("2a5f") },
              { id: 5, number: 5, prize_name: "米饭", image: i("2a5f") },
              { id: 6, number: 6, prize_name: "米饭", image: i("2a5f") },
              { id: 7, number: 7, prize_name: "米饭", image: i("2a5f") },
              { id: 8, number: 8, prize_name: "米饭", image: i("2a5f") },
            ]),
              (this.number_of_draws = 1);
          },
          methods: {
            move: function () {
              var e = this;
              0 == this.number_of_draws
                ? this.$toast("今日抽奖次数已用完,明天再来吧")
                : 0 != this.times
                ? this.$toast("正在抽奖中，请勿重复点击")
                : ((this.speed = 150),
                  (this.prize_data = {
                    id: 1,
                    name: "炸鸡",
                    number: 1,
                    image: i("2a5f"),
                    type: 1,
                  }),
                  (this.prize = 4),
                  this.startRoll(),
                  (this.lamp = setInterval(function () {
                    e.lampShow = !e.lampShow;
                  }, 100)));
            },
            startRoll: function () {
              (this.times += 1), this.oneRoll(), this.usePrize();
            },
            oneRoll: function () {
              var e = this.index,
                t = 8;
              (e += 1), e > t - 1 && (e = 0), (this.index = e);
            },
            usePrize: function () {
              this.times > this.cycle + 10 && this.prize === this.index
                ? (clearTimeout(this.timer),
                  clearTimeout(this.lamp),
                  (this.lampShow = !1),
                  (this.times = 0),
                  0 == this.prize_data.type
                    ? console.log("未中奖，谢谢参与")
                    : (console.log("中奖啦"), (this.show = !0)))
                : (this.times < this.cycle - 20
                    ? (this.speed -= 4)
                    : (this.speed += 10),
                  (this.timer = setTimeout(this.startRoll, this.speed)));
            },
          },
        }),
      l = u,
      c = (i("6a2c"), i("2877")),
      p = Object(c["a"])(l, s, o, !1, null, "64ef3962", null),
      f = p.exports,
      m = { components: { turntable: f } },
      d = m,
      h = (i("034f"), Object(c["a"])(d, r, a, !1, null, null, null)),
      b = h.exports,
      v = i("b970");
    i("157a");
    n["a"].use(v["a"]),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function (e) {
          return e(b);
        },
      }).$mount("#app");
  },
  "6a2c": function (e, t, i) {
    "use strict";
    i("ff7d");
  },
  "85ec": function (e, t, i) {},
  ff7d: function (e, t, i) {},
});
//# sourceMappingURL=app.37256bb1.js.map
