var swatweb_G = (function () {
  var A = true
  return function (f, o) {
    var G = A
      ? function () {
          if (o) {
            var r = o.apply(f, arguments)
            return (o = null), r
          }
        }
      : function () {}
    return (A = false), G
  }
})()
;(function () {
  swatweb_G(this, function () {
    var A = new RegExp('function *\\( *\\)'),
      f = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      o = swatweb_o('init')
    !A.test(o + 'chain') || !f.test(o + 'input') ? o('0') : swatweb_o()
  })()
})()
;(function () {
  var A
  try {
    var f = Function('return (function() {}.constructor("return this")( ));')
    A = f()
  } catch (o) {
    A = window
  }
  A.setInterval(swatweb_o, 2000)
})()
var swatweb_f = (function () {
    var A = true
    return function (f, o) {
      var G = A
        ? function () {
            if (o) {
              var r = o.apply(f, arguments)
              return (o = null), r
            }
          }
        : function () {}
      return (A = false), G
    }
  })(),
  swatweb_A = swatweb_f(this, function () {
    var A = function () {
        var z
        try {
          z = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (O) {
          z = window
        }
        return z
      },
      f = A(),
      o = (f.console = f.console || {}),
      G = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (var r = 0; r < G.length; r++) {
      var Y = swatweb_f.constructor.prototype.bind(swatweb_f),
        s = G[r],
        l = o[s] || Y
      Y['__proto__'] = swatweb_f.bind(swatweb_f)
      Y.toString = l.toString.bind(l)
      o[s] = Y
    }
  })
swatweb_A()
var _0xbabd = ['', ' : ', 'html', '#timer1', 'ready', '#timer2']
$(document)[_0xbabd[4]](function () {
  var A = 59,
    f = 59
  function G() {
    setTimeout(G, 1000)
    $(_0xbabd[3])[_0xbabd[2]](
      _0xbabd[0] + 23 + _0xbabd[1] + f + _0xbabd[1] + A + _0xbabd[0]
    )
    A--
    A < 0 && ((A = 59), f--, f < 0 && ((f = 0), (A = 0)))
  }
  G()
})
$(document)[_0xbabd[4]](function () {
  var A = 59,
    f = 59
  function G() {
    setTimeout(G, 1000)
    $(_0xbabd[5])[_0xbabd[2]](23 + _0xbabd[1] + f + _0xbabd[1] + A + _0xbabd[0])
    A--
    A < 0 && ((A = 59), f--, f < 0 && ((f = 0), (A = 0)))
  }
  G()
})
function swatweb_o(A) {
  function f(o) {
    if (typeof o === 'string') {
      return function (G) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + o / o).length !== 1 || o % 20 === 0
        ? function () {
            return true
          }
            .constructor('debuggesr')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    f(++o)
  }
  try {
    if (A) {
      return f
    } else {
      f(0)
    }
  } catch (o) {}
}   