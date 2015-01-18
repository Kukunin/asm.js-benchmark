function e(a) {
  throw a;
}
var g = void 0, k = !0, l = null, n = !1;
function p() {
  return function() {
  }
}
var r;
r || (r = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
var aa = {}, s;
for(s in r) {
  r.hasOwnProperty(s) && (aa[s] = r[s])
}
var x = "object" === typeof process && "function" === typeof require, ba = "object" === typeof window, ca = "function" === typeof importScripts, da = !ba && !x && !ca;
if(x) {
  r.print || (r.print = function(a) {
    process.stdout.write(a + "\n")
  });
  r.printErr || (r.printErr = function(a) {
    process.stderr.write(a + "\n")
  });
  var ea = require("fs"), fa = require("path");
  r.read = function(a, b) {
    var a = fa.normalize(a), c = ea.readFileSync(a);
    !c && a != fa.resolve(a) && (a = path.join(__dirname, "..", "src", a), c = ea.readFileSync(a));
    c && !b && (c = c.toString());
    return c
  };
  r.readBinary = function(a) {
    return r.read(a, k)
  };
  r.load = function(a) {
    ga(read(a))
  };
  r.thisProgram = 1 < process.argv.length ? process.argv[1].replace(/\\/g, "/") : "unknown-program";
  r.arguments = process.argv.slice(2);
  "undefined" !== typeof module && (module.exports = r);
  process.on("uncaughtException", function(a) {
    a instanceof ha || e(a)
  })
}else {
  da ? (r.print || (r.print = print), "undefined" != typeof printErr && (r.printErr = printErr), r.read = "undefined" != typeof read ? read : function() {
    e("no read() available (jsc?)")
  }, r.readBinary = function(a) {
    if("function" === typeof readbuffer) {
      return new Uint8Array(readbuffer(a))
    }
    a = read(a, "binary");
    z("object" === typeof a);
    return a
  }, "undefined" != typeof scriptArgs ? r.arguments = scriptArgs : "undefined" != typeof arguments && (r.arguments = arguments), this.Module = r, eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined")) : ba || ca ? (r.read = function(a) {
    var b = new XMLHttpRequest;
    b.open("GET", a, n);
    b.send(l);
    return b.responseText
  }, "undefined" != typeof arguments && (r.arguments = arguments), "undefined" !== typeof console ? (r.print || (r.print = function(a) {
    console.log(a)
  }), r.printErr || (r.printErr = function(a) {
    console.log(a)
  })) : r.print || (r.print = p()), ba ? window.Module = r : r.load = importScripts) : e("Unknown runtime environment. Where are we?")
}
function ga(a) {
  eval.call(l, a)
}
!r.load && r.read && (r.load = function(a) {
  ga(r.read(a))
});
r.print || (r.print = p());
r.printErr || (r.printErr = r.print);
r.arguments || (r.arguments = []);
r.thisProgram || (r.thisProgram = "./this.program");
r.print = r.print;
r.fa = r.printErr;
r.preRun = [];
r.postRun = [];
for(s in aa) {
  aa.hasOwnProperty(s) && (r[s] = aa[s])
}
var C = {Zd:function(a) {
  ia = a
}, xd:function() {
  return ia
}, rb:function() {
  return B
}, qb:function(a) {
  B = a
}, qc:function(a) {
  switch(a) {
    case "i1":
    ;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "i32":
      return 4;
    case "i64":
      return 8;
    case "float":
      return 4;
    case "double":
      return 8;
    default:
      return"*" === a[a.length - 1] ? C.ia : "i" === a[0] ? (a = parseInt(a.substr(1)), z(0 === a % 8), a / 8) : 0
  }
}, pc:function(a) {
  return Math.max(C.qc(a), C.ia)
}, Rf:16, og:function(a, b, c) {
  return!c && ("i64" == a || "double" == a) ? 8 : !a ? Math.min(b, 8) : Math.min(b || (a ? C.pc(a) : 0), C.ia)
}, Fa:function(a, b, c) {
  return c && c.length ? (c.splice || (c = Array.prototype.slice.call(c)), c.splice(0, 0, b), r["dynCall_" + a].apply(l, c)) : r["dynCall_" + a].call(l, b)
}, eb:[], Wc:function(a) {
  for(var b = 0;b < C.eb.length;b++) {
    if(!C.eb[b]) {
      return C.eb[b] = a, 2 * (1 + b)
    }
  }
  e("Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.")
}, Td:function(a) {
  C.eb[(a - 2) / 2] = l
}, pg:function(a, b) {
  C.yb || (C.yb = {});
  var c = C.yb[a];
  if(c) {
    return c
  }
  for(var c = [], d = 0;d < b;d++) {
    c.push(String.fromCharCode(36) + d)
  }
  d = ja(a);
  '"' === d[0] && (d.indexOf('"', 1) === d.length - 1 ? d = d.substr(1, d.length - 2) : D("invalid EM_ASM input |" + d + "|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)"));
  try {
    var f = eval("(function(Module, FS) { return function(" + c.join(",") + "){ " + d + " } })")(r, "undefined" !== typeof E ? E : l)
  }catch(h) {
    r.fa("error in executing inline EM_ASM code: " + h + " on: \n\n" + d + "\n\nwith args |" + c + "| (make sure to use the right one out of EM_ASM, EM_ASM_ARGS, etc.)"), e(h)
  }
  return C.yb[a] = f
}, Aa:function(a) {
  C.Aa.Ub || (C.Aa.Ub = {});
  C.Aa.Ub[a] || (C.Aa.Ub[a] = 1, r.fa(a))
}, Eb:{}, sg:function(a, b) {
  z(b);
  C.Eb[b] || (C.Eb[b] = {});
  var c = C.Eb[b];
  c[a] || (c[a] = function() {
    return C.Fa(b, a, arguments)
  });
  return c[a]
}, Da:function() {
  var a = [], b = 0;
  this.nb = function(c) {
    c &= 255;
    if(0 == a.length) {
      if(0 == (c & 128)) {
        return String.fromCharCode(c)
      }
      a.push(c);
      b = 192 == (c & 224) ? 1 : 224 == (c & 240) ? 2 : 3;
      return""
    }
    if(b && (a.push(c), b--, 0 < b)) {
      return""
    }
    var c = a[0], d = a[1], f = a[2], h = a[3];
    2 == a.length ? c = String.fromCharCode((c & 31) << 6 | d & 63) : 3 == a.length ? c = String.fromCharCode((c & 15) << 12 | (d & 63) << 6 | f & 63) : (c = (c & 7) << 18 | (d & 63) << 12 | (f & 63) << 6 | h & 63, c = String.fromCharCode(((c - 65536) / 1024 | 0) + 55296, (c - 65536) % 1024 + 56320));
    a.length = 0;
    return c
  };
  this.Bc = function(a) {
    for(var a = unescape(encodeURIComponent(a)), b = [], f = 0;f < a.length;f++) {
      b.push(a.charCodeAt(f))
    }
    return b
  }
}, qg:function() {
  e("You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work")
}, pb:function(a) {
  var b = B;
  B = B + a | 0;
  B = B + 15 & -16;
  return b
}, Fc:function(a) {
  var b = I;
  I = I + a | 0;
  I = I + 15 & -16;
  return b
}, bb:function(a) {
  var b = J;
  J = J + a | 0;
  J = J + 15 & -16;
  J >= ka && D("Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value " + ka + ", (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.");
  return b
}, wb:function(a, b) {
  return Math.ceil(a / (b ? b : 16)) * (b ? b : 16)
}, Gd:function(a, b, c) {
  return c ? +(a >>> 0) + 4294967296 * +(b >>> 0) : +(a >>> 0) + 4294967296 * +(b | 0)
}, Qc:8, ia:4, Sf:0};
r.Runtime = C;
C.addFunction = C.Wc;
C.removeFunction = C.Td;
var la = n, ma, na, ia;
function z(a, b) {
  a || D("Assertion failed: " + b)
}
function pa(a) {
  var b = r["_" + a];
  if(!b) {
    try {
      b = eval("_" + a)
    }catch(c) {
    }
  }
  z(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
  return b
}
var qa, ra;
(function() {
  function a(a) {
    a = a.toString().match(d).slice(1);
    return{arguments:a[0], body:a[1], returnValue:a[2]}
  }
  var b = {stackSave:function() {
    C.rb()
  }, stackRestore:function() {
    C.qb()
  }, arrayToC:function(a) {
    var b = C.pb(a.length);
    sa(a, b);
    return b
  }, stringToC:function(a) {
    var b = 0;
    a !== l && (a !== g && 0 !== a) && (b = C.pb((a.length << 2) + 1), ta(a, b));
    return b
  }}, c = {string:b.stringToC, array:b.arrayToC};
  ra = function(a, b, d, f) {
    var h = pa(a), t = [], a = 0;
    if(f) {
      for(var w = 0;w < f.length;w++) {
        var G = c[d[w]];
        G ? (0 === a && (a = C.rb()), t[w] = G(f[w])) : t[w] = f[w]
      }
    }
    d = h.apply(l, t);
    "string" === b && (d = ja(d));
    0 !== a && C.qb(a);
    return d
  };
  var d = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/, f = {}, h;
  for(h in b) {
    b.hasOwnProperty(h) && (f[h] = a(b[h]))
  }
  qa = function(b, c, d) {
    var d = d || [], h = pa(b), b = d.every(function(a) {
      return"number" === a
    }), y = "string" !== c;
    if(y && b) {
      return h
    }
    var t = d.map(function(a, b) {
      return"$" + b
    }), c = "(function(" + t.join(",") + ") {", w = d.length;
    if(!b) {
      for(var c = c + ("var stack = " + f.stackSave.body + ";"), G = 0;G < w;G++) {
        var K = t[G], H = d[G];
        "number" !== H && (H = f[H + "ToC"], c += "var " + H.arguments + " = " + K + ";", c += H.body + ";", c += K + "=" + H.returnValue + ";")
      }
    }
    d = a(function() {
      return h
    }).returnValue;
    c += "var ret = " + d + "(" + t.join(",") + ");";
    y || (d = a(function() {
      return ja
    }).returnValue, c += "ret = " + d + "(ret);");
    b || (c += f.stackRestore.body.replace("()", "(stack)") + ";");
    return eval(c + "return ret})")
  }
})();
r.cwrap = qa;
r.ccall = ra;
function ua(a, b, c) {
  c = c || "i8";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      L[a >> 0] = b;
      break;
    case "i8":
      L[a >> 0] = b;
      break;
    case "i16":
      va[a >> 1] = b;
      break;
    case "i32":
      M[a >> 2] = b;
      break;
    case "i64":
      na = [b >>> 0, (ma = b, 1 <= +wa(ma) ? 0 < ma ? (xa(+ya(ma / 4294967296), 4294967295) | 0) >>> 0 : ~~+za((ma - +(~~ma >>> 0)) / 4294967296) >>> 0 : 0)];
      M[a >> 2] = na[0];
      M[a + 4 >> 2] = na[1];
      break;
    case "float":
      Aa[a >> 2] = b;
      break;
    case "double":
      Ba[a >> 3] = b;
      break;
    default:
      D("invalid type for setValue: " + c)
  }
}
r.setValue = ua;
function Ca(a, b) {
  b = b || "i8";
  "*" === b.charAt(b.length - 1) && (b = "i32");
  switch(b) {
    case "i1":
      return L[a >> 0];
    case "i8":
      return L[a >> 0];
    case "i16":
      return va[a >> 1];
    case "i32":
      return M[a >> 2];
    case "i64":
      return M[a >> 2];
    case "float":
      return Aa[a >> 2];
    case "double":
      return Ba[a >> 3];
    default:
      D("invalid type for setValue: " + b)
  }
  return l
}
r.getValue = Ca;
var Da = 1, Ea = 2, Fa = 4;
r.ALLOC_NORMAL = 0;
r.ALLOC_STACK = Da;
r.ALLOC_STATIC = Ea;
r.ALLOC_DYNAMIC = 3;
r.ALLOC_NONE = Fa;
function N(a, b, c, d) {
  var f, h;
  "number" === typeof a ? (f = k, h = a) : (f = n, h = a.length);
  var i = "string" === typeof b ? b : l, c = c == Fa ? d : [Ga, C.pb, C.Fc, C.bb][c === g ? Ea : c](Math.max(h, i ? 1 : b.length));
  if(f) {
    d = c;
    z(0 == (c & 3));
    for(a = c + (h & -4);d < a;d += 4) {
      M[d >> 2] = 0
    }
    for(a = c + h;d < a;) {
      L[d++ >> 0] = 0
    }
    return c
  }
  if("i8" === i) {
    return a.subarray || a.slice ? O.set(a, c) : O.set(new Uint8Array(a), c), c
  }
  for(var d = 0, j, m;d < h;) {
    var u = a[d];
    "function" === typeof u && (u = C.tg(u));
    f = i || b[d];
    0 === f ? d++ : ("i64" == f && (f = "i32"), ua(c + d, u, f), m !== f && (j = C.qc(f), m = f), d += j)
  }
  return c
}
r.allocate = N;
function ja(a, b) {
  if(0 === b || !a) {
    return""
  }
  for(var c = n, d, f = 0;;) {
    d = O[a + f >> 0];
    if(128 <= d) {
      c = k
    }else {
      if(0 == d && !b) {
        break
      }
    }
    f++;
    if(b && f == b) {
      break
    }
  }
  b || (b = f);
  var h = "";
  if(!c) {
    for(;0 < b;) {
      d = String.fromCharCode.apply(String, O.subarray(a, a + Math.min(b, 1024))), h = h ? h + d : d, a += 1024, b -= 1024
    }
    return h
  }
  c = new C.Da;
  for(f = 0;f < b;f++) {
    d = O[a + f >> 0], h += c.nb(d)
  }
  return h
}
r.Pointer_stringify = ja;
r.UTF16ToString = function(a) {
  for(var b = 0, c = "";;) {
    var d = va[a + 2 * b >> 1];
    if(0 == d) {
      return c
    }
    ++b;
    c += String.fromCharCode(d)
  }
};
r.stringToUTF16 = function(a, b) {
  for(var c = 0;c < a.length;++c) {
    va[b + 2 * c >> 1] = a.charCodeAt(c)
  }
  va[b + 2 * a.length >> 1] = 0
};
r.UTF32ToString = function(a) {
  for(var b = 0, c = "";;) {
    var d = M[a + 4 * b >> 2];
    if(0 == d) {
      return c
    }
    ++b;
    65536 <= d ? (d -= 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023)) : c += String.fromCharCode(d)
  }
};
r.stringToUTF32 = function(a, b) {
  for(var c = 0, d = 0;d < a.length;++d) {
    var f = a.charCodeAt(d);
    if(55296 <= f && 57343 >= f) {
      var h = a.charCodeAt(++d), f = 65536 + ((f & 1023) << 10) | h & 1023
    }
    M[b + 4 * c >> 2] = f;
    ++c
  }
  M[b + 4 * c >> 2] = 0
};
function Ha(a) {
  function b(c, d, f) {
    var d = d || Infinity, h = "", i = [], v;
    if("N" === a[j]) {
      j++;
      "K" === a[j] && j++;
      for(v = [];"E" !== a[j];) {
        if("S" === a[j]) {
          j++;
          var A = a.indexOf("_", j);
          v.push(u[a.substring(j, A) || 0] || "?");
          j = A + 1
        }else {
          if("C" === a[j]) {
            v.push(v[v.length - 1]), j += 2
          }else {
            var A = parseInt(a.substr(j)), q = A.toString().length;
            if(!A || !q) {
              j--;
              break
            }
            var t = a.substr(j + q, A);
            v.push(t);
            u.push(t);
            j += q + A
          }
        }
      }
      j++;
      v = v.join("::");
      d--;
      if(0 === d) {
        return c ? [v] : v
      }
    }else {
      if(("K" === a[j] || y && "L" === a[j]) && j++, A = parseInt(a.substr(j))) {
        q = A.toString().length, v = a.substr(j + q, A), j += q + A
      }
    }
    y = n;
    "I" === a[j] ? (j++, A = b(k), q = b(k, 1, k), h += q[0] + " " + v + "<" + A.join(", ") + ">") : h = v;
    a:for(;j < a.length && 0 < d--;) {
      if(v = a[j++], v in m) {
        i.push(m[v])
      }else {
        switch(v) {
          case "P":
            i.push(b(k, 1, k)[0] + "*");
            break;
          case "R":
            i.push(b(k, 1, k)[0] + "&");
            break;
          case "L":
            j++;
            A = a.indexOf("E", j) - j;
            i.push(a.substr(j, A));
            j += A + 2;
            break;
          case "A":
            A = parseInt(a.substr(j));
            j += A.toString().length;
            "_" !== a[j] && e("?");
            j++;
            i.push(b(k, 1, k)[0] + " [" + A + "]");
            break;
          case "E":
            break a;
          default:
            h += "?" + v;
            break a
        }
      }
    }
    !f && (1 === i.length && "void" === i[0]) && (i = []);
    return c ? (h && i.push(h + "?"), i) : h + ("(" + i.join(", ") + ")")
  }
  var c = !!r.___cxa_demangle;
  if(c) {
    try {
      var d = Ga(a.length);
      ta(a.substr(1), d);
      var f = Ga(4), h = r.___cxa_demangle(d, 0, 0, f);
      if(0 === Ca(f, "i32") && h) {
        return ja(h)
      }
    }catch(i) {
    }finally {
      d && Ia(d), f && Ia(f), h && Ia(h)
    }
  }
  var j = 3, m = {v:"void", b:"bool", c:"char", s:"short", i:"int", l:"long", f:"float", d:"double", w:"wchar_t", a:"signed char", h:"unsigned char", t:"unsigned short", j:"unsigned int", m:"unsigned long", x:"long long", y:"unsigned long long", z:"..."}, u = [], y = k, d = a;
  try {
    if("Object._main" == a || "_main" == a) {
      return"main()"
    }
    "number" === typeof a && (a = ja(a));
    if("_" !== a[0] || "_" !== a[1] || "Z" !== a[2]) {
      return a
    }
    switch(a[3]) {
      case "n":
        return"operator new()";
      case "d":
        return"operator delete()"
    }
    d = b()
  }catch(t) {
    d += "?"
  }
  0 <= d.indexOf("?") && !c && C.Aa("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
  return d
}
function Ja() {
  var a;
  a: {
    a = Error();
    if(!a.stack) {
      try {
        e(Error(0))
      }catch(b) {
        a = b
      }
      if(!a.stack) {
        a = "(no stack trace available)";
        break a
      }
    }
    a = a.stack.toString()
  }
  return a.replace(/__Z[\w\d_]+/g, function(a) {
    var b = Ha(a);
    return a === b ? a : a + " [" + b + "]"
  })
}
r.stackTrace = function() {
  return Ja()
};
for(var L, O, va, Ka, M, La, Aa, Ba, Ma = 0, I = 0, Na = 0, B = 0, Oa = 0, Pa = 0, J = 0, Qa = r.TOTAL_STACK || 5242880, ka = r.TOTAL_MEMORY || 16777216, P = 65536;P < ka || P < 2 * Qa;) {
  P = 16777216 > P ? 2 * P : P + 16777216
}
P !== ka && (r.fa("increasing TOTAL_MEMORY to " + P + " to be compliant with the asm.js spec"), ka = P);
z("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "JS engine does not provide full typed array support");
var Q = new ArrayBuffer(ka);
L = new Int8Array(Q);
va = new Int16Array(Q);
M = new Int32Array(Q);
O = new Uint8Array(Q);
Ka = new Uint16Array(Q);
La = new Uint32Array(Q);
Aa = new Float32Array(Q);
Ba = new Float64Array(Q);
M[0] = 255;
z(255 === O[0] && 0 === O[3], "Typed arrays 2 must be run on a little-endian system");
r.HEAP = g;
r.buffer = Q;
r.HEAP8 = L;
r.HEAP16 = va;
r.HEAP32 = M;
r.HEAPU8 = O;
r.HEAPU16 = Ka;
r.HEAPU32 = La;
r.HEAPF32 = Aa;
r.HEAPF64 = Ba;
function Ra(a) {
  for(;0 < a.length;) {
    var b = a.shift();
    if("function" == typeof b) {
      b()
    }else {
      var c = b.ja;
      "number" === typeof c ? b.Xa === g ? C.Fa("v", c) : C.Fa("vi", c, [b.Xa]) : c(b.Xa === g ? l : b.Xa)
    }
  }
}
var Sa = [], Ta = [], Ua = [], Va = [], Wa = [], Xa = n;
function Ya(a) {
  Sa.unshift(a)
}
r.addOnPreRun = r.Yf = Ya;
r.addOnInit = r.Vf = function(a) {
  Ta.unshift(a)
};
r.addOnPreMain = r.Xf = function(a) {
  Ua.unshift(a)
};
r.addOnExit = r.Uf = function(a) {
  Va.unshift(a)
};
function Za(a) {
  Wa.unshift(a)
}
r.addOnPostRun = r.Wf = Za;
function R(a, b, c) {
  a = (new C.Da).Bc(a);
  c && (a.length = c);
  b || a.push(0);
  return a
}
r.intArrayFromString = R;
r.intArrayToString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    255 < d && (d &= 255);
    b.push(String.fromCharCode(d))
  }
  return b.join("")
};
function ta(a, b, c) {
  a = R(a, c);
  for(c = 0;c < a.length;) {
    L[b + c >> 0] = a[c], c += 1
  }
}
r.writeStringToMemory = ta;
function sa(a, b) {
  for(var c = 0;c < a.length;c++) {
    L[b + c >> 0] = a[c]
  }
}
r.writeArrayToMemory = sa;
r.writeAsciiToMemory = function(a, b, c) {
  for(var d = 0;d < a.length;d++) {
    L[b + d >> 0] = a.charCodeAt(d)
  }
  c || (L[b + a.length >> 0] = 0)
};
function $a(a, b) {
  return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a
}
function ab(a, b) {
  if(0 >= a) {
    return a
  }
  var c = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
  if(a >= c && (32 >= b || a > c)) {
    a = -2 * c + a
  }
  return a
}
if(!Math.imul || -5 !== Math.imul(4294967295, 5)) {
  Math.imul = function(a, b) {
    var c = a & 65535, d = b & 65535;
    return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16) | 0
  }
}
Math.wg = Math.imul;
var wa = Math.abs, za = Math.ceil, ya = Math.floor, xa = Math.min, S = 0, bb = l, cb = l;
function db() {
  S++;
  r.monitorRunDependencies && r.monitorRunDependencies(S)
}
r.addRunDependency = db;
function eb() {
  S--;
  r.monitorRunDependencies && r.monitorRunDependencies(S);
  if(0 == S && (bb !== l && (clearInterval(bb), bb = l), cb)) {
    var a = cb;
    cb = l;
    a()
  }
}
r.removeRunDependency = eb;
r.preloadedImages = {};
r.preloadedAudios = {};
var T = l, Ma = 8, I = Ma + 560;
Ta.push();
N([103, 230, 9, 106, 133, 174, 103, 187, 114, 243, 110, 60, 58, 245, 79, 165, 127, 82, 14, 81, 140, 104, 5, 155, 171, 217, 131, 31, 25, 205, 224, 91, 37, 48, 56, 120, 0, 0, 0, 0, 84, 105, 109, 101, 32, 100, 105, 102, 102, 58, 32, 37, 102, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", Fa, C.Qc);
var fb = C.wb(N(12, "i8", Ea), 8);
z(0 == fb % 8);
var U = {O:1, Q:2, Ff:3, Ee:4, ha:5, $b:6, ce:7, af:8, V:9, pe:10, Ca:11, Pf:11, Nc:12, sb:13, ze:14, nf:15, ga:16, Yb:17, Pc:18, Qa:19, Sa:20, pa:21, B:22, We:23, Mc:24, Oc:25, Mf:26, Ae:27, jf:28, Ua:29, Cf:30, Pe:31, vf:32, we:33, zf:34, ef:42, Ce:43, qe:44, Ge:45, He:46, Ie:47, Oe:48, Nf:49, Ze:50, Fe:51, ue:35, bf:37, he:52, ke:53, Qf:54, Xe:55, le:56, me:57, ve:35, ne:59, lf:60, $e:61, Jf:62, kf:63, ff:64, gf:65, Bf:66, cf:67, fe:68, Gf:69, re:70, wf:71, Re:72, xe:73, je:74, rf:76, ie:77, Af:78, 
Je:79, Ke:80, Ne:81, Me:82, Le:83, mf:38, ub:39, Se:36, tb:40, Ta:95, uf:96, te:104, Ye:105, ge:97, yf:91, pf:88, hf:92, Df:108, Xb:111, de:98, se:103, Ve:101, Te:100, Kf:110, Be:112, Zb:113, Kc:115, Ic:114, Jc:89, Qe:90, xf:93, Ef:94, ee:99, Ue:102, Lc:106, Ra:107, Lf:109, Of:87, ye:122, Hf:116, qf:95, df:123, De:84, sf:75, oe:125, of:131, tf:130, If:86}, gb = {"0":"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 4:"Interrupted system call", 5:"I/O error", 6:"No such device or address", 
7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 21:"Is a directory", 22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 26:"Text file busy", 27:"File too large", 28:"No space left on device", 
29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"File locking deadlock error", 36:"File or path name too long", 37:"No record locks available", 38:"Function not implemented", 39:"Directory not empty", 40:"Too many symbolic links", 42:"No message of desired type", 43:"Identifier removed", 44:"Channel number out of range", 45:"Level 2 not synchronized", 46:"Level 3 halted", 47:"Level 3 reset", 
48:"Link number out of range", 49:"Protocol driver not attached", 50:"No CSI structure available", 51:"Level 2 halted", 52:"Invalid exchange", 53:"Invalid request descriptor", 54:"Exchange full", 55:"No anode", 56:"Invalid request code", 57:"Invalid slot", 59:"Bad font file fmt", 60:"Device not a stream", 61:"No data (for no delay io)", 62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 67:"The link has been severed", 
68:"Advertise error", 69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 72:"Multihop attempted", 73:"Cross mount point (not really error)", 74:"Trying to read unreadable message", 75:"Value too large for defined data type", 76:"Given log. name not unique", 77:"f.d. invalid for this operation", 78:"Remote address changed", 79:"Can   access a needed shared lib", 80:"Accessing a corrupted shared lib", 81:".lib section in a.out corrupted", 82:"Attempting to link in too many libs", 
83:"Attempting to exec a shared library", 84:"Illegal byte sequence", 86:"Streams pipe error", 87:"Too many users", 88:"Socket operation on non-socket", 89:"Destination address required", 90:"Message too long", 91:"Protocol wrong type for socket", 92:"Protocol not available", 93:"Unknown protocol", 94:"Socket type not supported", 95:"Not supported", 96:"Protocol family not supported", 97:"Address family not supported by protocol family", 98:"Address already in use", 99:"Address not available", 100:"Network interface is not configured", 
101:"Network is unreachable", 102:"Connection reset by network", 103:"Connection aborted", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Socket is already connected", 107:"Socket is not connected", 108:"Can't send after socket shutdown", 109:"Too many references", 110:"Connection timed out", 111:"Connection refused", 112:"Host is down", 113:"Host is unreachable", 114:"Socket already connected", 115:"Connection already in progress", 116:"Stale file handle", 122:"Quota exceeded", 
123:"No medium (in tape drive)", 125:"Operation canceled", 130:"Previous owner died", 131:"State not recoverable"}, hb = 0;
function V(a) {
  return M[hb >> 2] = a
}
function ib(a, b) {
  for(var c = 0, d = a.length - 1;0 <= d;d--) {
    var f = a[d];
    "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
  }
  if(b) {
    for(;c--;c) {
      a.unshift("..")
    }
  }
  return a
}
function jb(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1), a = ib(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  !a && !b && (a = ".");
  a && c && (a += "/");
  return(b ? "/" : "") + a
}
function kb(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1), a = b[0], b = b[1];
  if(!a && !b) {
    return"."
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b
}
function W(a) {
  if("/" === a) {
    return"/"
  }
  var b = a.lastIndexOf("/");
  return-1 === b ? a : a.substr(b + 1)
}
function lb() {
  var a = Array.prototype.slice.call(arguments, 0);
  return jb(a.join("/"))
}
function X(a, b) {
  return jb(a + "/" + b)
}
function mb() {
  for(var a = "", b = n, c = arguments.length - 1;-1 <= c && !b;c--) {
    b = 0 <= c ? arguments[c] : E.Ab();
    "string" !== typeof b && e(new TypeError("Arguments to path.resolve must be strings"));
    if(!b) {
      return""
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0)
  }
  a = ib(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  return(b ? "/" : "") + a || "."
}
function nb(a, b) {
  function c(a) {
    for(var b = 0;b < a.length && "" === a[b];b++) {
    }
    for(var c = a.length - 1;0 <= c && "" === a[c];c--) {
    }
    return b > c ? [] : a.slice(b, c - b + 1)
  }
  for(var a = mb(a).substr(1), b = mb(b).substr(1), d = c(a.split("/")), f = c(b.split("/")), h = Math.min(d.length, f.length), i = h, j = 0;j < h;j++) {
    if(d[j] !== f[j]) {
      i = j;
      break
    }
  }
  h = [];
  for(j = i;j < d.length;j++) {
    h.push("..")
  }
  h = h.concat(f.slice(i));
  return h.join("/")
}
var ob = [];
function pb(a, b) {
  ob[a] = {input:[], K:[], sa:b};
  E.Rb(a, qb)
}
var qb = {open:function(a) {
  var b = ob[a.g.ob];
  b || e(new E.e(U.Qa));
  a.N = b;
  a.seekable = n
}, close:function(a) {
  a.N.sa.flush(a.N)
}, flush:function(a) {
  a.N.sa.flush(a.N)
}, M:function(a, b, c, d) {
  (!a.N || !a.N.sa.sc) && e(new E.e(U.$b));
  for(var f = 0, h = 0;h < d;h++) {
    var i;
    try {
      i = a.N.sa.sc(a.N)
    }catch(j) {
      e(new E.e(U.ha))
    }
    i === g && 0 === f && e(new E.e(U.Ca));
    if(i === l || i === g) {
      break
    }
    f++;
    b[c + h] = i
  }
  f && (a.g.timestamp = Date.now());
  return f
}, write:function(a, b, c, d) {
  (!a.N || !a.N.sa.Ob) && e(new E.e(U.$b));
  for(var f = 0;f < d;f++) {
    try {
      a.N.sa.Ob(a.N, b[c + f])
    }catch(h) {
      e(new E.e(U.ha))
    }
  }
  d && (a.g.timestamp = Date.now());
  return f
}}, sb = {sc:function(a) {
  if(!a.input.length) {
    var b = l;
    if(x) {
      if(b = process.stdin.read(), !b) {
        if(process.stdin._readableState && process.stdin._readableState.ended) {
          return l
        }
        return
      }
    }else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), b !== l && (b += "\n")) : "function" == typeof readline && (b = readline(), b !== l && (b += "\n"))
    }
    if(!b) {
      return l
    }
    a.input = R(b, k)
  }
  return a.input.shift()
}, flush:function(a) {
  a.K && 0 < a.K.length && (r.print(a.K.join("")), a.K = [])
}, Ob:function(a, b) {
  b === l || 10 === b ? (r.print(a.K.join("")), a.K = []) : a.K.push(rb.nb(b))
}}, tb = {Ob:function(a, b) {
  b === l || 10 === b ? (r.printErr(a.K.join("")), a.K = []) : a.K.push(rb.nb(b))
}, flush:function(a) {
  a.K && 0 < a.K.length && (r.printErr(a.K.join("")), a.K = [])
}}, Y = {U:l, F:function() {
  return Y.createNode(l, "/", 16895, 0)
}, createNode:function(a, b, c, d) {
  (E.Bd(c) || E.Cd(c)) && e(new E.e(U.O));
  Y.U || (Y.U = {dir:{g:{S:Y.n.S, I:Y.n.I, ra:Y.n.ra, ba:Y.n.ba, rename:Y.n.rename, za:Y.n.za, Oa:Y.n.Oa, Na:Y.n.Na, ca:Y.n.ca}, A:{$:Y.p.$}}, file:{g:{S:Y.n.S, I:Y.n.I}, A:{$:Y.p.$, M:Y.p.M, write:Y.p.write, Ea:Y.p.Ea, Ja:Y.p.Ja}}, link:{g:{S:Y.n.S, I:Y.n.I, ta:Y.n.ta}, A:{}}, fc:{g:{S:Y.n.S, I:Y.n.I}, A:E.cd}});
  c = E.createNode(a, b, c, d);
  E.J(c.mode) ? (c.n = Y.U.dir.g, c.p = Y.U.dir.A, c.k = {}) : E.isFile(c.mode) ? (c.n = Y.U.file.g, c.p = Y.U.file.A, c.q = 0, c.k = l) : E.Ia(c.mode) ? (c.n = Y.U.link.g, c.p = Y.U.link.A) : E.ib(c.mode) && (c.n = Y.U.fc.g, c.p = Y.U.fc.A);
  c.timestamp = Date.now();
  a && (a.k[b] = c);
  return c
}, vd:function(a) {
  if(a.k && a.k.subarray) {
    for(var b = [], c = 0;c < a.q;++c) {
      b.push(a.k[c])
    }
    return b
  }
  return a.k
}, rg:function(a) {
  return!a.k ? new Uint8Array : a.k.subarray ? a.k.subarray(0, a.q) : new Uint8Array(a.k)
}, mc:function(a, b) {
  a.k && (a.k.subarray && b > a.k.length) && (a.k = Y.vd(a), a.q = a.k.length);
  if(!a.k || a.k.subarray) {
    var c = a.k ? a.k.buffer.byteLength : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) | 0), 0 != c && (b = Math.max(b, 256)), c = a.k, a.k = new Uint8Array(b), 0 < a.q && a.k.set(c.subarray(0, a.q), 0))
  }else {
    !a.k && 0 < b && (a.k = []);
    for(;a.k.length < b;) {
      a.k.push(0)
    }
  }
}, Vd:function(a, b) {
  if(a.q != b) {
    if(0 == b) {
      a.k = l, a.q = 0
    }else {
      if(!a.k || a.k.subarray) {
        var c = a.k;
        a.k = new Uint8Array(new ArrayBuffer(b));
        c && a.k.set(c.subarray(0, Math.min(b, a.q)))
      }else {
        if(a.k || (a.k = []), a.k.length > b) {
          a.k.length = b
        }else {
          for(;a.k.length < b;) {
            a.k.push(0)
          }
        }
      }
      a.q = b
    }
  }
}, n:{S:function(a) {
  var b = {};
  b.hg = E.ib(a.mode) ? a.id : 1;
  b.xg = a.id;
  b.mode = a.mode;
  b.Ig = 1;
  b.uid = 0;
  b.vg = 0;
  b.ob = a.ob;
  b.size = E.J(a.mode) ? 4096 : E.isFile(a.mode) ? a.q : E.Ia(a.mode) ? a.link.length : 0;
  b.$f = new Date(a.timestamp);
  b.Hg = new Date(a.timestamp);
  b.fg = new Date(a.timestamp);
  b.$c = 4096;
  b.ag = Math.ceil(b.size / b.$c);
  return b
}, I:function(a, b) {
  b.mode !== g && (a.mode = b.mode);
  b.timestamp !== g && (a.timestamp = b.timestamp);
  b.size !== g && Y.Vd(a, b.size)
}, ra:function() {
  e(E.Fb[U.Q])
}, ba:function(a, b, c, d) {
  return Y.createNode(a, b, c, d)
}, rename:function(a, b, c) {
  if(E.J(a.mode)) {
    var d;
    try {
      d = E.aa(b, c)
    }catch(f) {
    }
    if(d) {
      for(var h in d.k) {
        e(new E.e(U.ub))
      }
    }
  }
  delete a.parent.k[a.name];
  a.name = c;
  b.k[c] = a;
  a.parent = b
}, za:function(a, b) {
  delete a.k[b]
}, Oa:function(a, b) {
  var c = E.aa(a, b), d;
  for(d in c.k) {
    e(new E.e(U.ub))
  }
  delete a.k[b]
}, Na:function(a) {
  var b = [".", ".."], c;
  for(c in a.k) {
    a.k.hasOwnProperty(c) && b.push(c)
  }
  return b
}, ca:function(a, b, c) {
  a = Y.createNode(a, b, 41471, 0);
  a.link = c;
  return a
}, ta:function(a) {
  E.Ia(a.mode) || e(new E.e(U.B));
  return a.link
}}, p:{M:function(a, b, c, d, f) {
  var h = a.g.k;
  if(f >= a.g.q) {
    return 0
  }
  a = Math.min(a.g.q - f, d);
  z(0 <= a);
  if(8 < a && h.subarray) {
    b.set(h.subarray(f, f + a), c)
  }else {
    for(d = 0;d < a;d++) {
      b[c + d] = h[f + d]
    }
  }
  return a
}, write:function(a, b, c, d, f, h) {
  if(!d) {
    return 0
  }
  a = a.g;
  a.timestamp = Date.now();
  if(b.subarray && (!a.k || a.k.subarray)) {
    if(h) {
      return a.k = b.subarray(c, c + d), a.q = d
    }
    if(0 === a.q && 0 === f) {
      return a.k = new Uint8Array(b.subarray(c, c + d)), a.q = d
    }
    if(f + d <= a.q) {
      return a.k.set(b.subarray(c, c + d), f), d
    }
  }
  Y.mc(a, f + d);
  if(a.k.subarray && b.subarray) {
    a.k.set(b.subarray(c, c + d), f)
  }else {
    for(h = 0;h < d;h++) {
      a.k[f + h] = b[c + h]
    }
  }
  a.q = Math.max(a.q, f + d);
  return d
}, $:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && E.isFile(a.g.mode) && (b += a.g.q);
  0 > b && e(new E.e(U.B));
  return b
}, Ea:function(a, b, c) {
  Y.mc(a.g, b + c);
  a.g.q = Math.max(a.g.q, b + c)
}, Ja:function(a, b, c, d, f, h, i) {
  E.isFile(a.g.mode) || e(new E.e(U.Qa));
  c = a.g.k;
  if(!(i & 2) && (c.buffer === b || c.buffer === b.buffer)) {
    a = n, d = c.byteOffset
  }else {
    if(0 < f || f + d < a.g.q) {
      c = c.subarray ? c.subarray(f, f + d) : Array.prototype.slice.call(c, f, f + d)
    }
    a = k;
    (d = Ga(d)) || e(new E.e(U.Nc));
    b.set(c, d)
  }
  return{Lg:d, Zf:a}
}}}, ub = N(1, "i32*", Ea), vb = N(1, "i32*", Ea), wb = N(1, "i32*", Ea), E = {root:l, La:[], jc:[l], oa:[], Kd:1, T:l, ic:"/", hb:n, wc:k, H:{}, Hc:{zc:{Sc:1, Tc:2}}, e:l, Fb:{}, tc:function(a) {
  a instanceof E.e || e(a + " : " + Ja());
  return V(a.cb)
}, u:function(a, b) {
  a = mb(E.Ab(), a);
  b = b || {};
  if(!a) {
    return{path:"", g:l}
  }
  var c = {Db:k, Qb:0}, d;
  for(d in c) {
    b[d] === g && (b[d] = c[d])
  }
  8 < b.Qb && e(new E.e(U.tb));
  var c = ib(a.split("/").filter(function(a) {
    return!!a
  }), n), f = E.root;
  d = "/";
  for(var h = 0;h < c.length;h++) {
    var i = h === c.length - 1;
    if(i && b.parent) {
      break
    }
    f = E.aa(f, c[h]);
    d = X(d, c[h]);
    if(E.ka(f) && (!i || i && b.Db)) {
      f = f.Ka.root
    }
    if(!i || b.R) {
      for(i = 0;E.Ia(f.mode);) {
        f = E.ta(d), d = mb(kb(d), f), f = E.u(d, {Qb:b.Qb}).g, 40 < i++ && e(new E.e(U.tb))
      }
    }
  }
  return{path:d, g:f}
}, da:function(a) {
  for(var b;;) {
    if(E.jb(a)) {
      return a = a.F.Jd, !b ? a : "/" !== a[a.length - 1] ? a + "/" + b : a + b
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent
  }
}, Ib:function(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0
  }
  return(a + c >>> 0) % E.T.length
}, uc:function(a) {
  var b = E.Ib(a.parent.id, a.name);
  a.ma = E.T[b];
  E.T[b] = a
}, vc:function(a) {
  var b = E.Ib(a.parent.id, a.name);
  if(E.T[b] === a) {
    E.T[b] = a.ma
  }else {
    for(b = E.T[b];b;) {
      if(b.ma === a) {
        b.ma = a.ma;
        break
      }
      b = b.ma
    }
  }
}, aa:function(a, b) {
  var c = E.Hd(a);
  c && e(new E.e(c, a));
  for(c = E.T[E.Ib(a.id, b)];c;c = c.ma) {
    var d = c.name;
    if(c.parent.id === a.id && d === b) {
      return c
    }
  }
  return E.ra(a, b)
}, createNode:function(a, b, c, d) {
  E.Va || (E.Va = function(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.F = a.F;
    this.Ka = l;
    this.id = E.Kd++;
    this.name = b;
    this.mode = c;
    this.n = {};
    this.p = {};
    this.ob = d
  }, E.Va.prototype = {}, Object.defineProperties(E.Va.prototype, {M:{get:function() {
    return 365 === (this.mode & 365)
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366
  }}, write:{get:function() {
    return 146 === (this.mode & 146)
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147
  }}, Dd:{get:function() {
    return E.J(this.mode)
  }}, Jb:{get:function() {
    return E.ib(this.mode)
  }}}));
  a = new E.Va(a, b, c, d);
  E.uc(a);
  return a
}, Bb:function(a) {
  E.vc(a)
}, jb:function(a) {
  return a === a.parent
}, ka:function(a) {
  return!!a.Ka
}, isFile:function(a) {
  return 32768 === (a & 61440)
}, J:function(a) {
  return 16384 === (a & 61440)
}, Ia:function(a) {
  return 40960 === (a & 61440)
}, ib:function(a) {
  return 8192 === (a & 61440)
}, Bd:function(a) {
  return 24576 === (a & 61440)
}, Cd:function(a) {
  return 4096 === (a & 61440)
}, Ed:function(a) {
  return 49152 === (a & 49152)
}, sd:{r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218}, xc:function(a) {
  var b = E.sd[a];
  "undefined" === typeof b && e(Error("Unknown file open mode: " + a));
  return b
}, td:function(a) {
  var b = ["r", "w", "rw"][a & 2097155];
  a & 512 && (b += "w");
  return b
}, na:function(a, b) {
  return E.wc ? 0 : -1 !== b.indexOf("r") && !(a.mode & 292) || -1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73) ? U.sb : 0
}, Hd:function(a) {
  var b = E.na(a, "x");
  return b ? b : !a.n.ra ? U.sb : 0
}, Mb:function(a, b) {
  try {
    return E.aa(a, b), U.Yb
  }catch(c) {
  }
  return E.na(a, "wx")
}, kb:function(a, b, c) {
  var d;
  try {
    d = E.aa(a, b)
  }catch(f) {
    return f.cb
  }
  if(a = E.na(a, "wx")) {
    return a
  }
  if(c) {
    if(!E.J(d.mode)) {
      return U.Sa
    }
    if(E.jb(d) || E.da(d) === E.Ab()) {
      return U.ga
    }
  }else {
    if(E.J(d.mode)) {
      return U.pa
    }
  }
  return 0
}, Id:function(a, b) {
  return!a ? U.Q : E.Ia(a.mode) ? U.tb : E.J(a.mode) && (0 !== (b & 2097155) || b & 512) ? U.pa : E.na(a, E.td(b))
}, Rc:4096, Ld:function(a, b) {
  for(var b = b || E.Rc, c = a || 0;c <= b;c++) {
    if(!E.oa[c]) {
      return c
    }
  }
  e(new E.e(U.Mc))
}, qa:function(a) {
  return E.oa[a]
}, gc:function(a, b, c) {
  E.Wa || (E.Wa = p(), E.Wa.prototype = {}, Object.defineProperties(E.Wa.prototype, {object:{get:function() {
    return this.g
  }, set:function(a) {
    this.g = a
  }}, zg:{get:function() {
    return 1 !== (this.D & 2097155)
  }}, Ag:{get:function() {
    return 0 !== (this.D & 2097155)
  }}, yg:{get:function() {
    return this.D & 1024
  }}}));
  var d = new E.Wa, f;
  for(f in a) {
    d[f] = a[f]
  }
  a = d;
  b = E.Ld(b, c);
  a.C = b;
  return E.oa[b] = a
}, ed:function(a) {
  E.oa[a] = l
}, Hb:function(a) {
  return E.oa[a - 1]
}, Gb:function(a) {
  return a ? a.C + 1 : 0
}, cd:{open:function(a) {
  a.p = E.ud(a.g.ob).p;
  a.p.open && a.p.open(a)
}, $:function() {
  e(new E.e(U.Ua))
}}, Lb:function(a) {
  return a >> 8
}, Gg:function(a) {
  return a & 255
}, la:function(a, b) {
  return a << 8 | b
}, Rb:function(a, b) {
  E.jc[a] = {p:b}
}, ud:function(a) {
  return E.jc[a]
}, oc:function(a) {
  for(var b = [], a = [a];a.length;) {
    var c = a.pop();
    b.push(c);
    a.push.apply(a, c.La)
  }
  return b
}, Gc:function(a, b) {
  function c(a) {
    if(a) {
      if(!c.qd) {
        return c.qd = k, b(a)
      }
    }else {
      ++f >= d.length && b(l)
    }
  }
  "function" === typeof a && (b = a, a = n);
  var d = E.oc(E.root.F), f = 0;
  d.forEach(function(b) {
    if(!b.type.Gc) {
      return c(l)
    }
    b.type.Gc(b, a, c)
  })
}, F:function(a, b, c) {
  var d = "/" === c, f = !c, h;
  d && E.root && e(new E.e(U.ga));
  !d && !f && (h = E.u(c, {Db:n}), c = h.path, h = h.g, E.ka(h) && e(new E.e(U.ga)), E.J(h.mode) || e(new E.e(U.Sa)));
  b = {type:a, Kg:b, Jd:c, La:[]};
  a = a.F(b);
  a.F = b;
  b.root = a;
  d ? E.root = a : h && (h.Ka = b, h.F && h.F.La.push(b));
  return a
}, Qg:function(a) {
  a = E.u(a, {Db:n});
  E.ka(a.g) || e(new E.e(U.B));
  var a = a.g, b = a.Ka, c = E.oc(b);
  Object.keys(E.T).forEach(function(a) {
    for(a = E.T[a];a;) {
      var b = a.ma;
      -1 !== c.indexOf(a.F) && E.Bb(a);
      a = b
    }
  });
  a.Ka = l;
  b = a.F.La.indexOf(b);
  z(-1 !== b);
  a.F.La.splice(b, 1)
}, ra:function(a, b) {
  return a.n.ra(a, b)
}, ba:function(a, b, c) {
  var d = E.u(a, {parent:k}).g, a = W(a);
  (!a || "." === a || ".." === a) && e(new E.e(U.B));
  var f = E.Mb(d, a);
  f && e(new E.e(f));
  d.n.ba || e(new E.e(U.O));
  return d.n.ba(d, a, b, c)
}, create:function(a, b) {
  b = (b !== g ? b : 438) & 4095;
  b |= 32768;
  return E.ba(a, b, 0)
}, ea:function(a, b) {
  b = (b !== g ? b : 511) & 1023;
  b |= 16384;
  return E.ba(a, b, 0)
}, lb:function(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return E.ba(a, b | 8192, c)
}, ca:function(a, b) {
  mb(a) || e(new E.e(U.Q));
  var c = E.u(b, {parent:k}).g;
  c || e(new E.e(U.Q));
  var d = W(b), f = E.Mb(c, d);
  f && e(new E.e(f));
  c.n.ca || e(new E.e(U.O));
  return c.n.ca(c, d, a)
}, rename:function(a, b) {
  var c = kb(a), d = kb(b), f = W(a), h = W(b), i, j, m;
  try {
    i = E.u(a, {parent:k}), j = i.g, i = E.u(b, {parent:k}), m = i.g
  }catch(u) {
    e(new E.e(U.ga))
  }
  (!j || !m) && e(new E.e(U.Q));
  j.F !== m.F && e(new E.e(U.Pc));
  i = E.aa(j, f);
  d = nb(a, d);
  "." !== d.charAt(0) && e(new E.e(U.B));
  d = nb(b, c);
  "." !== d.charAt(0) && e(new E.e(U.ub));
  var y;
  try {
    y = E.aa(m, h)
  }catch(t) {
  }
  if(i !== y) {
    c = E.J(i.mode);
    (f = E.kb(j, f, c)) && e(new E.e(f));
    (f = y ? E.kb(m, h, c) : E.Mb(m, h)) && e(new E.e(f));
    j.n.rename || e(new E.e(U.O));
    (E.ka(i) || y && E.ka(y)) && e(new E.e(U.ga));
    m !== j && (f = E.na(j, "w")) && e(new E.e(f));
    try {
      E.H.willMovePath && E.H.willMovePath(a, b)
    }catch(w) {
      console.log("FS.trackingDelegate['willMovePath']('" + a + "', '" + b + "') threw an exception: " + w.message)
    }
    E.vc(i);
    try {
      j.n.rename(i, m, h)
    }catch(G) {
      e(G)
    }finally {
      E.uc(i)
    }
    try {
      if(E.H.onMovePath) {
        E.H.onMovePath(a, b)
      }
    }catch(K) {
      console.log("FS.trackingDelegate['onMovePath']('" + a + "', '" + b + "') threw an exception: " + K.message)
    }
  }
}, Oa:function(a) {
  var b = E.u(a, {parent:k}).g, c = W(a), d = E.aa(b, c), f = E.kb(b, c, k);
  f && e(new E.e(f));
  b.n.Oa || e(new E.e(U.O));
  E.ka(d) && e(new E.e(U.ga));
  try {
    E.H.willDeletePath && E.H.willDeletePath(a)
  }catch(h) {
    console.log("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message)
  }
  b.n.Oa(b, c);
  E.Bb(d);
  try {
    if(E.H.onDeletePath) {
      E.H.onDeletePath(a)
    }
  }catch(i) {
    console.log("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + i.message)
  }
}, Na:function(a) {
  a = E.u(a, {R:k}).g;
  a.n.Na || e(new E.e(U.Sa));
  return a.n.Na(a)
}, za:function(a) {
  var b = E.u(a, {parent:k}).g, c = W(a), d = E.aa(b, c), f = E.kb(b, c, n);
  f && (f === U.pa && (f = U.O), e(new E.e(f)));
  b.n.za || e(new E.e(U.O));
  E.ka(d) && e(new E.e(U.ga));
  try {
    E.H.willDeletePath && E.H.willDeletePath(a)
  }catch(h) {
    console.log("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message)
  }
  b.n.za(b, c);
  E.Bb(d);
  try {
    if(E.H.onDeletePath) {
      E.H.onDeletePath(a)
    }
  }catch(i) {
    console.log("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + i.message)
  }
}, ta:function(a) {
  (a = E.u(a).g) || e(new E.e(U.Q));
  a.n.ta || e(new E.e(U.B));
  return a.n.ta(a)
}, Ec:function(a, b) {
  var c = E.u(a, {R:!b}).g;
  c || e(new E.e(U.Q));
  c.n.S || e(new E.e(U.O));
  return c.n.S(c)
}, Fg:function(a) {
  return E.Ec(a, k)
}, Ya:function(a, b, c) {
  a = "string" === typeof a ? E.u(a, {R:!c}).g : a;
  a.n.I || e(new E.e(U.O));
  a.n.I(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()})
}, Cg:function(a, b) {
  E.Ya(a, b, k)
}, kg:function(a, b) {
  var c = E.qa(a);
  c || e(new E.e(U.V));
  E.Ya(c.g, b)
}, ec:function(a, b, c, d) {
  a = "string" === typeof a ? E.u(a, {R:!d}).g : a;
  a.n.I || e(new E.e(U.O));
  a.n.I(a, {timestamp:Date.now()})
}, Dg:function(a, b, c) {
  E.ec(a, b, c, k)
}, lg:function(a, b, c) {
  (a = E.qa(a)) || e(new E.e(U.V));
  E.ec(a.g, b, c)
}, truncate:function(a, b) {
  0 > b && e(new E.e(U.B));
  var c;
  c = "string" === typeof a ? E.u(a, {R:k}).g : a;
  c.n.I || e(new E.e(U.O));
  E.J(c.mode) && e(new E.e(U.pa));
  E.isFile(c.mode) || e(new E.e(U.B));
  var d = E.na(c, "w");
  d && e(new E.e(d));
  c.n.I(c, {size:b, timestamp:Date.now()})
}, ng:function(a, b) {
  var c = E.qa(a);
  c || e(new E.e(U.V));
  0 === (c.D & 2097155) && e(new E.e(U.B));
  E.truncate(c.g, b)
}, Rg:function(a, b, c) {
  a = E.u(a, {R:k}).g;
  a.n.I(a, {timestamp:Math.max(b, c)})
}, open:function(a, b, c, d, f) {
  "" === a && e(new E.e(U.Q));
  var b = "string" === typeof b ? E.xc(b) : b, c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0, h;
  if("object" === typeof a) {
    h = a
  }else {
    a = jb(a);
    try {
      h = E.u(a, {R:!(b & 131072)}).g
    }catch(i) {
    }
  }
  var j = n;
  b & 64 && (h ? b & 128 && e(new E.e(U.Yb)) : (h = E.ba(a, c, 0), j = k));
  h || e(new E.e(U.Q));
  E.ib(h.mode) && (b &= -513);
  j || (c = E.Id(h, b)) && e(new E.e(c));
  b & 512 && E.truncate(h, 0);
  b &= -641;
  d = E.gc({g:h, path:E.da(h), D:b, seekable:k, position:0, p:h.p, ae:[], error:n}, d, f);
  d.p.open && d.p.open(d);
  r.logReadFiles && !(b & 1) && (E.Pb || (E.Pb = {}), a in E.Pb || (E.Pb[a] = 1, r.printErr("read file: " + a)));
  try {
    E.H.onOpenFile && (f = 0, 1 !== (b & 2097155) && (f |= E.Hc.zc.Sc), 0 !== (b & 2097155) && (f |= E.Hc.zc.Tc), E.H.onOpenFile(a, f))
  }catch(m) {
    console.log("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + m.message)
  }
  return d
}, close:function(a) {
  try {
    a.p.close && a.p.close(a)
  }catch(b) {
    e(b)
  }finally {
    E.ed(a.C)
  }
}, $:function(a, b, c) {
  (!a.seekable || !a.p.$) && e(new E.e(U.Ua));
  a.position = a.p.$(a, b, c);
  a.ae = [];
  return a.position
}, M:function(a, b, c, d, f) {
  (0 > d || 0 > f) && e(new E.e(U.B));
  1 === (a.D & 2097155) && e(new E.e(U.V));
  E.J(a.g.mode) && e(new E.e(U.pa));
  a.p.M || e(new E.e(U.B));
  var h = k;
  "undefined" === typeof f ? (f = a.position, h = n) : a.seekable || e(new E.e(U.Ua));
  b = a.p.M(a, b, c, d, f);
  h || (a.position += b);
  return b
}, write:function(a, b, c, d, f, h) {
  (0 > d || 0 > f) && e(new E.e(U.B));
  0 === (a.D & 2097155) && e(new E.e(U.V));
  E.J(a.g.mode) && e(new E.e(U.pa));
  a.p.write || e(new E.e(U.B));
  a.D & 1024 && E.$(a, 0, 2);
  var i = k;
  "undefined" === typeof f ? (f = a.position, i = n) : a.seekable || e(new E.e(U.Ua));
  b = a.p.write(a, b, c, d, f, h);
  i || (a.position += b);
  try {
    if(a.path && E.H.onWriteToFile) {
      E.H.onWriteToFile(a.path)
    }
  }catch(j) {
    console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + j.message)
  }
  return b
}, Ea:function(a, b, c) {
  (0 > b || 0 >= c) && e(new E.e(U.B));
  0 === (a.D & 2097155) && e(new E.e(U.V));
  !E.isFile(a.g.mode) && !E.J(node.mode) && e(new E.e(U.Qa));
  a.p.Ea || e(new E.e(U.Ta));
  a.p.Ea(a, b, c)
}, Ja:function(a, b, c, d, f, h, i) {
  1 === (a.D & 2097155) && e(new E.e(U.sb));
  a.p.Ja || e(new E.e(U.Qa));
  return a.p.Ja(a, b, c, d, f, h, i)
}, Ha:function(a, b, c) {
  a.p.Ha || e(new E.e(U.Oc));
  return a.p.Ha(a, b, c)
}, Mg:function(a, b) {
  b = b || {};
  b.D = b.D || "r";
  b.encoding = b.encoding || "binary";
  "utf8" !== b.encoding && "binary" !== b.encoding && e(Error('Invalid encoding type "' + b.encoding + '"'));
  var c, d = E.open(a, b.D), f = E.Ec(a).size, h = new Uint8Array(f);
  E.M(d, h, 0, f, 0);
  if("utf8" === b.encoding) {
    c = "";
    for(var i = new C.Da, j = 0;j < f;j++) {
      c += i.nb(h[j])
    }
  }else {
    "binary" === b.encoding && (c = h)
  }
  E.close(d);
  return c
}, Sg:function(a, b, c) {
  c = c || {};
  c.D = c.D || "w";
  c.encoding = c.encoding || "utf8";
  "utf8" !== c.encoding && "binary" !== c.encoding && e(Error('Invalid encoding type "' + c.encoding + '"'));
  a = E.open(a, c.D, c.mode);
  "utf8" === c.encoding ? (b = new Uint8Array((new C.Da).Bc(b)), E.write(a, b, 0, b.length, 0, c.bd)) : "binary" === c.encoding && E.write(a, b, 0, b.length, 0, c.bd);
  E.close(a)
}, Ab:function() {
  return E.ic
}, cg:function(a) {
  a = E.u(a, {R:k});
  E.J(a.g.mode) || e(new E.e(U.Sa));
  var b = E.na(a.g, "x");
  b && e(new E.e(b));
  E.ic = a.path
}, gd:function() {
  E.ea("/tmp");
  E.ea("/home");
  E.ea("/home/web_user")
}, fd:function() {
  E.ea("/dev");
  E.Rb(E.la(1, 3), {M:function() {
    return 0
  }, write:function() {
    return 0
  }});
  E.lb("/dev/null", E.la(1, 3));
  pb(E.la(5, 0), sb);
  pb(E.la(6, 0), tb);
  E.lb("/dev/tty", E.la(5, 0));
  E.lb("/dev/tty1", E.la(6, 0));
  var a;
  if("undefined" !== typeof crypto) {
    var b = new Uint8Array(1);
    a = function() {
      crypto.getRandomValues(b);
      return b[0]
    }
  }else {
    a = x ? function() {
      return require("crypto").randomBytes(1)[0]
    } : function() {
      return 256 * Math.random() | 0
    }
  }
  E.X("/dev", "random", a);
  E.X("/dev", "urandom", a);
  E.ea("/dev/shm");
  E.ea("/dev/shm/tmp")
}, pd:function() {
  r.stdin ? E.X("/dev", "stdin", r.stdin) : E.ca("/dev/tty", "/dev/stdin");
  r.stdout ? E.X("/dev", "stdout", l, r.stdout) : E.ca("/dev/tty", "/dev/stdout");
  r.stderr ? E.X("/dev", "stderr", l, r.stderr) : E.ca("/dev/tty1", "/dev/stderr");
  var a = E.open("/dev/stdin", "r");
  M[ub >> 2] = E.Gb(a);
  z(0 === a.C, "invalid handle for stdin (" + a.C + ")");
  a = E.open("/dev/stdout", "w");
  M[vb >> 2] = E.Gb(a);
  z(1 === a.C, "invalid handle for stdout (" + a.C + ")");
  a = E.open("/dev/stderr", "w");
  M[wb >> 2] = E.Gb(a);
  z(2 === a.C, "invalid handle for stderr (" + a.C + ")")
}, kc:function() {
  E.e || (E.e = function(a, b) {
    this.g = b;
    this.Yd = function(a) {
      this.cb = a;
      for(var b in U) {
        if(U[b] === a) {
          this.code = b;
          break
        }
      }
    };
    this.Yd(a);
    this.message = gb[a]
  }, E.e.prototype = Error(), [U.Q].forEach(function(a) {
    E.Fb[a] = new E.e(a);
    E.Fb[a].stack = "<generic error, no stack>"
  }))
}, $d:function() {
  E.kc();
  E.T = Array(4096);
  E.F(Y, {}, "/");
  E.gd();
  E.fd()
}, Ga:function(a, b, c) {
  z(!E.Ga.hb, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  E.Ga.hb = k;
  E.kc();
  r.stdin = a || r.stdin;
  r.stdout = b || r.stdout;
  r.stderr = c || r.stderr;
  E.pd()
}, Rd:function() {
  E.Ga.hb = n;
  for(var a = 0;a < E.oa.length;a++) {
    var b = E.oa[a];
    b && E.close(b)
  }
}, fb:function(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c
}, Bg:function(a, b) {
  var c = lb.apply(l, a);
  b && "/" == c[0] && (c = c.substr(1));
  return c
}, Tf:function(a, b) {
  return mb(b, a)
}, Pg:function(a) {
  return jb(a)
}, mg:function(a, b) {
  var c = E.xb(a, b);
  if(c.Cb) {
    return c.object
  }
  V(c.error);
  return l
}, xb:function(a, b) {
  try {
    var c = E.u(a, {R:!b}), a = c.path
  }catch(d) {
  }
  var f = {jb:n, Cb:n, error:0, name:l, path:l, object:l, Nd:n, Pd:l, Od:l};
  try {
    c = E.u(a, {parent:k}), f.Nd = k, f.Pd = c.path, f.Od = c.g, f.name = W(a), c = E.u(a, {R:!b}), f.Cb = k, f.path = c.path, f.object = c.g, f.name = c.g.name, f.jb = "/" === c.path
  }catch(h) {
    f.error = h.cb
  }
  return f
}, jd:function(a, b, c, d) {
  a = X("string" === typeof a ? a : E.da(a), b);
  return E.ea(a, E.fb(c, d))
}, md:function(a, b) {
  for(var a = "string" === typeof a ? a : E.da(a), c = b.split("/").reverse();c.length;) {
    var d = c.pop();
    if(d) {
      var f = X(a, d);
      try {
        E.ea(f)
      }catch(h) {
      }
      a = f
    }
  }
  return f
}, hd:function(a, b, c, d, f) {
  a = X("string" === typeof a ? a : E.da(a), b);
  return E.create(a, E.fb(d, f))
}, zb:function(a, b, c, d, f, h) {
  a = b ? X("string" === typeof a ? a : E.da(a), b) : a;
  d = E.fb(d, f);
  f = E.create(a, d);
  if(c) {
    if("string" === typeof c) {
      for(var a = Array(c.length), b = 0, i = c.length;b < i;++b) {
        a[b] = c.charCodeAt(b)
      }
      c = a
    }
    E.Ya(f, d | 146);
    a = E.open(f, "w");
    E.write(a, c, 0, c.length, 0, h);
    E.close(a);
    E.Ya(f, d)
  }
  return f
}, X:function(a, b, c, d) {
  a = X("string" === typeof a ? a : E.da(a), b);
  b = E.fb(!!c, !!d);
  E.X.Lb || (E.X.Lb = 64);
  var f = E.la(E.X.Lb++, 0);
  E.Rb(f, {open:function(a) {
    a.seekable = n
  }, close:function() {
    d && (d.buffer && d.buffer.length) && d(10)
  }, M:function(a, b, d, f) {
    for(var u = 0, y = 0;y < f;y++) {
      var t;
      try {
        t = c()
      }catch(w) {
        e(new E.e(U.ha))
      }
      t === g && 0 === u && e(new E.e(U.Ca));
      if(t === l || t === g) {
        break
      }
      u++;
      b[d + y] = t
    }
    u && (a.g.timestamp = Date.now());
    return u
  }, write:function(a, b, c, f) {
    for(var u = 0;u < f;u++) {
      try {
        d(b[c + u])
      }catch(y) {
        e(new E.e(U.ha))
      }
    }
    f && (a.g.timestamp = Date.now());
    return u
  }});
  return E.lb(a, b, f)
}, ld:function(a, b, c) {
  a = X("string" === typeof a ? a : E.da(a), b);
  return E.ca(c, a)
}, nc:function(a) {
  if(a.Jb || a.Dd || a.link || a.k) {
    return k
  }
  var b = k;
  "undefined" !== typeof XMLHttpRequest && e(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));
  if(r.read) {
    try {
      a.k = R(r.read(a.url), k), a.q = a.k.length
    }catch(c) {
      b = n
    }
  }else {
    e(Error("Cannot load without read() or XMLHttpRequest."))
  }
  b || V(U.ha);
  return b
}, kd:function(a, b, c, d, f) {
  function h() {
    this.Kb = n;
    this.Za = []
  }
  h.prototype.get = function(a) {
    if(!(a > this.length - 1 || 0 > a)) {
      var b = a % this.dd;
      return this.yd(a / this.dd | 0)[b]
    }
  };
  h.prototype.Xd = function(a) {
    this.yd = a
  };
  h.prototype.cc = function() {
    var a = new XMLHttpRequest;
    a.open("HEAD", c, n);
    a.send(l);
    200 <= a.status && 300 > a.status || 304 === a.status || e(Error("Couldn't load " + c + ". Status: " + a.status));
    var b = Number(a.getResponseHeader("Content-length")), d, f = 1048576;
    if(!((d = a.getResponseHeader("Accept-Ranges")) && "bytes" === d)) {
      f = b
    }
    var h = this;
    h.Xd(function(a) {
      var d = a * f, i = (a + 1) * f - 1, i = Math.min(i, b - 1);
      if("undefined" === typeof h.Za[a]) {
        var j = h.Za;
        d > i && e(Error("invalid range (" + d + ", " + i + ") or no bytes requested!"));
        i > b - 1 && e(Error("only " + b + " bytes available! programmer error!"));
        var m = new XMLHttpRequest;
        m.open("GET", c, n);
        b !== f && m.setRequestHeader("Range", "bytes=" + d + "-" + i);
        "undefined" != typeof Uint8Array && (m.responseType = "arraybuffer");
        m.overrideMimeType && m.overrideMimeType("text/plain; charset=x-user-defined");
        m.send(l);
        200 <= m.status && 300 > m.status || 304 === m.status || e(Error("Couldn't load " + c + ". Status: " + m.status));
        d = m.response !== g ? new Uint8Array(m.response || []) : R(m.responseText || "", k);
        j[a] = d
      }
      "undefined" === typeof h.Za[a] && e(Error("doXHR failed!"));
      return h.Za[a]
    });
    this.Vc = b;
    this.Uc = f;
    this.Kb = k
  };
  if("undefined" !== typeof XMLHttpRequest) {
    ca || e("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
    var i = new h;
    Object.defineProperty(i, "length", {get:function() {
      this.Kb || this.cc();
      return this.Vc
    }});
    Object.defineProperty(i, "chunkSize", {get:function() {
      this.Kb || this.cc();
      return this.Uc
    }});
    i = {Jb:n, k:i}
  }else {
    i = {Jb:n, url:c}
  }
  var j = E.hd(a, b, i, d, f);
  i.k ? j.k = i.k : i.url && (j.k = l, j.url = i.url);
  Object.defineProperty(j, "usedBytes", {get:function() {
    return this.k.length
  }});
  var m = {};
  Object.keys(j.p).forEach(function(a) {
    var b = j.p[a];
    m[a] = function() {
      E.nc(j) || e(new E.e(U.ha));
      return b.apply(l, arguments)
    }
  });
  m.M = function(a, b, c, d, f) {
    E.nc(j) || e(new E.e(U.ha));
    a = a.g.k;
    if(f >= a.length) {
      return 0
    }
    d = Math.min(a.length - f, d);
    z(0 <= d);
    if(a.slice) {
      for(var h = 0;h < d;h++) {
        b[c + h] = a[f + h]
      }
    }else {
      for(h = 0;h < d;h++) {
        b[c + h] = a.get(f + h)
      }
    }
    return d
  };
  j.p = m;
  return j
}, nd:function(a, b, c, d, f, h, i, j, m) {
  function u() {
    xb = document.pointerLockElement === w || document.mozPointerLockElement === w || document.webkitPointerLockElement === w || document.msPointerLockElement === w
  }
  function y(c) {
    function t(c) {
      j || E.zb(a, b, c, d, f, m);
      h && h();
      eb()
    }
    var u = n;
    r.preloadPlugins.forEach(function(a) {
      !u && a.canHandle(G) && (a.handle(c, G, t, function() {
        i && i();
        eb()
      }), u = k)
    });
    u || t(c)
  }
  r.preloadPlugins || (r.preloadPlugins = []);
  if(!yb) {
    yb = k;
    try {
      new Blob, zb = k
    }catch(t) {
      zb = n, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
    }
    Ab = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : !zb ? console.log("warning: no BlobBuilder") : l;
    Bb = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : g;
    !r.yc && "undefined" === typeof Bb && (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), r.yc = k);
    r.preloadPlugins.push({canHandle:function(a) {
      return!r.yc && /\.(jpg|jpeg|png|bmp)$/i.test(a)
    }, handle:function(a, b, c, d) {
      var f = l;
      if(zb) {
        try {
          f = new Blob([a], {type:Cb(b)}), f.size !== a.length && (f = new Blob([(new Uint8Array(a)).buffer], {type:Cb(b)}))
        }catch(h) {
          C.Aa("Blob constructor present but fails: " + h + "; falling back to blob builder")
        }
      }
      f || (f = new Ab, f.append((new Uint8Array(a)).buffer), f = f.getBlob());
      var i = Bb.createObjectURL(f), j = new Image;
      j.onload = function() {
        z(j.complete, "Image " + b + " could not be decoded");
        var d = document.createElement("canvas");
        d.width = j.width;
        d.height = j.height;
        d.getContext("2d").drawImage(j, 0, 0);
        r.preloadedImages[b] = d;
        Bb.revokeObjectURL(i);
        c && c(a)
      };
      j.onerror = function() {
        console.log("Image " + i + " could not be decoded");
        d && d()
      };
      j.src = i
    }});
    r.preloadPlugins.push({canHandle:function(a) {
      return!r.Jg && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1}
    }, handle:function(a, b, c, d) {
      function f(d) {
        i || (i = k, r.preloadedAudios[b] = d, c && c(a))
      }
      function h() {
        i || (i = k, r.preloadedAudios[b] = new Audio, d && d())
      }
      var i = n;
      if(zb) {
        try {
          var j = new Blob([a], {type:Cb(b)})
        }catch(m) {
          return h()
        }
        var j = Bb.createObjectURL(j), t = new Audio;
        t.addEventListener("canplaythrough", function() {
          f(t)
        }, n);
        t.onerror = function() {
          if(!i) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for(var c = "", d = 0, h = 0, j = 0;j < a.length;j++) {
              d = d << 8 | a[j];
              for(h += 8;6 <= h;) {
                var m = d >> h - 6 & 63, h = h - 6, c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[m]
              }
            }
            2 == h ? (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 3) << 4], c += "==") : 4 == h && (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 15) << 2], c += "=");
            t.src = "data:audio/x-" + b.substr(-3) + ";base64," + c;
            f(t)
          }
        };
        t.src = j;
        r.noExitRuntime = k;
        setTimeout(function() {
          la || f(t)
        }, 1E4)
      }else {
        return h()
      }
    }});
    var w = r.canvas;
    w && (w.Sb = w.requestPointerLock || w.mozRequestPointerLock || w.webkitRequestPointerLock || w.msRequestPointerLock || p(), w.lc = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || p(), w.lc = w.lc.bind(document), document.addEventListener("pointerlockchange", u, n), document.addEventListener("mozpointerlockchange", u, n), document.addEventListener("webkitpointerlockchange", u, n), document.addEventListener("mspointerlockchange", 
    u, n), r.elementPointerLock && w.addEventListener("click", function(a) {
      !xb && w.Sb && (w.Sb(), a.preventDefault())
    }, n))
  }
  var G = b ? mb(X(a, b)) : a;
  db();
  "string" == typeof c ? Db(c, function(a) {
    y(a)
  }, i) : y(c)
}, indexedDB:function() {
  return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
}, Vb:function() {
  return"EM_FS_" + window.location.pathname
}, Wb:20, Ba:"FILE_DATA", Og:function(a, b, c) {
  var b = b || p(), c = c || p(), d = E.indexedDB();
  try {
    var f = d.open(E.Vb(), E.Wb)
  }catch(h) {
    return c(h)
  }
  f.Md = function() {
    console.log("creating db");
    f.result.createObjectStore(E.Ba)
  };
  f.onsuccess = function() {
    var d = f.result.transaction([E.Ba], "readwrite"), h = d.objectStore(E.Ba), m = 0, u = 0, y = a.length;
    a.forEach(function(a) {
      a = h.put(E.xb(a).object.k, a);
      a.onsuccess = function() {
        m++;
        m + u == y && (0 == u ? b() : c())
      };
      a.onerror = function() {
        u++;
        m + u == y && (0 == u ? b() : c())
      }
    });
    d.onerror = c
  };
  f.onerror = c
}, Eg:function(a, b, c) {
  var b = b || p(), c = c || p(), d = E.indexedDB();
  try {
    var f = d.open(E.Vb(), E.Wb)
  }catch(h) {
    return c(h)
  }
  f.Md = c;
  f.onsuccess = function() {
    var d = f.result;
    try {
      var h = d.transaction([E.Ba], "readonly")
    }catch(m) {
      c(m);
      return
    }
    var u = h.objectStore(E.Ba), y = 0, t = 0, w = a.length;
    a.forEach(function(a) {
      var d = u.get(a);
      d.onsuccess = function() {
        E.xb(a).Cb && E.za(a);
        E.zb(kb(a), W(a), d.result, k, k, k);
        y++;
        y + t == w && (0 == t ? b() : c())
      };
      d.onerror = function() {
        t++;
        y + t == w && (0 == t ? b() : c())
      }
    });
    h.onerror = c
  };
  f.onerror = c
}};
function Eb() {
  e("TODO")
}
var Z = {F:function() {
  r.websocket = r.websocket && "object" === typeof r.websocket ? r.websocket : {};
  r.websocket.vb = {};
  r.websocket.on = function(a, b) {
    "function" === typeof b && (this.vb[a] = b);
    return this
  };
  r.websocket.P = function(a, b) {
    "function" === typeof this.vb[a] && this.vb[a].call(this, b)
  };
  return E.createNode(l, "/", 16895, 0)
}, od:function(a, b, c) {
  c && z(1 == b == (6 == c));
  a = {rd:a, type:b, protocol:c, G:l, error:l, Ma:{}, Nb:[], ua:[], wa:Z.L};
  b = Z.mb();
  c = E.createNode(Z.root, b, 49152, 0);
  c.va = a;
  b = E.gc({path:b, g:c, D:E.xc("r+"), seekable:n, p:Z.p});
  a.A = b;
  return a
}, wd:function(a) {
  a = E.qa(a);
  return!a || !E.Ed(a.g.mode) ? l : a.g.va
}, p:{Ac:function(a) {
  a = a.g.va;
  return a.wa.Ac(a)
}, Ha:function(a, b, c) {
  a = a.g.va;
  return a.wa.Ha(a, b, c)
}, M:function(a, b, c, d) {
  a = a.g.va;
  d = a.wa.Sd(a, d);
  if(!d) {
    return 0
  }
  b.set(d.buffer, c);
  return d.buffer.length
}, write:function(a, b, c, d) {
  a = a.g.va;
  return a.wa.Wd(a, b, c, d)
}, close:function(a) {
  a = a.g.va;
  a.wa.close(a)
}}, mb:function() {
  Z.mb.hc || (Z.mb.hc = 0);
  return"socket[" + Z.mb.hc++ + "]"
}, L:{$a:function(a, b, c) {
  var d;
  "object" === typeof b && (d = b, c = b = l);
  if(d) {
    d._socket ? (b = d._socket.remoteAddress, c = d._socket.remotePort) : ((c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url)) || e(Error("WebSocket URL must be in the format ws(s)://address:port")), b = c[1], c = parseInt(c[2], 10))
  }else {
    try {
      var f = r.websocket && "object" === typeof r.websocket, h = "ws:#".replace("#", "//");
      f && "string" === typeof r.websocket.url && (h = r.websocket.url);
      if("ws://" === h || "wss://" === h) {
        var i = b.split("/"), h = h + i[0] + ":" + c + "/" + i.slice(1).join("/")
      }
      i = "binary";
      f && "string" === typeof r.websocket.subprotocol && (i = r.websocket.subprotocol);
      var i = i.replace(/^ +| +$/g, "").split(/ *, */), j = x ? {protocol:i.toString()} : i;
      d = new (x ? require("ws") : window.WebSocket)(h, j);
      d.binaryType = "arraybuffer"
    }catch(m) {
      e(new E.e(U.Zb))
    }
  }
  b = {W:b, port:c, o:d, ab:[]};
  Z.L.ac(a, b);
  Z.L.zd(a, b);
  2 === a.type && "undefined" !== typeof a.ya && b.ab.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.ya & 65280) >> 8, a.ya & 255]));
  return b
}, gb:function(a, b, c) {
  return a.Ma[b + ":" + c]
}, ac:function(a, b) {
  a.Ma[b.W + ":" + b.port] = b
}, Cc:function(a, b) {
  delete a.Ma[b.W + ":" + b.port]
}, zd:function(a, b) {
  function c() {
    r.websocket.P("open", a.A.C);
    try {
      for(var c = b.ab.shift();c;) {
        b.o.send(c), c = b.ab.shift()
      }
    }catch(d) {
      b.o.close()
    }
  }
  function d(c) {
    z("string" !== typeof c && c.byteLength !== g);
    var c = new Uint8Array(c), d = f;
    f = n;
    d && 10 === c.length && 255 === c[0] && 255 === c[1] && 255 === c[2] && 255 === c[3] && 112 === c[4] && 111 === c[5] && 114 === c[6] && 116 === c[7] ? (c = c[8] << 8 | c[9], Z.L.Cc(a, b), b.port = c, Z.L.ac(a, b)) : (a.ua.push({W:b.W, port:b.port, data:c}), r.websocket.P("message", a.A.C))
  }
  var f = k;
  x ? (b.o.on("open", c), b.o.on("message", function(a, b) {
    b.binary && d((new Uint8Array(a)).buffer)
  }), b.o.on("close", function() {
    r.websocket.P("close", a.A.C)
  }), b.o.on("error", function() {
    a.error = U.Xb;
    r.websocket.P("error", [a.A.C, a.error, "ECONNREFUSED: Connection refused"])
  })) : (b.o.onopen = c, b.o.onclose = function() {
    r.websocket.P("close", a.A.C)
  }, b.o.onmessage = function(a) {
    d(a.data)
  }, b.o.onerror = function() {
    a.error = U.Xb;
    r.websocket.P("error", [a.A.C, a.error, "ECONNREFUSED: Connection refused"])
  })
}, Ac:function(a) {
  if(1 === a.type && a.G) {
    return a.Nb.length ? 65 : 0
  }
  var b = 0, c = 1 === a.type ? Z.L.gb(a, a.Y, a.Z) : l;
  if(a.ua.length || !c || c && c.o.readyState === c.o.Pa || c && c.o.readyState === c.o.CLOSED) {
    b |= 65
  }
  if(!c || c && c.o.readyState === c.o.OPEN) {
    b |= 4
  }
  if(c && c.o.readyState === c.o.Pa || c && c.o.readyState === c.o.CLOSED) {
    b |= 16
  }
  return b
}, Ha:function(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.ua.length && (b = a.ua[0].data.length), M[c >> 2] = b, 0;
    default:
      return U.B
  }
}, close:function(a) {
  if(a.G) {
    try {
      a.G.close()
    }catch(b) {
    }
    a.G = l
  }
  for(var c = Object.keys(a.Ma), d = 0;d < c.length;d++) {
    var f = a.Ma[c[d]];
    try {
      f.o.close()
    }catch(h) {
    }
    Z.L.Cc(a, f)
  }
  return 0
}, bind:function(a, b, c) {
  ("undefined" !== typeof a.Tb || "undefined" !== typeof a.ya) && e(new E.e(U.B));
  a.Tb = b;
  a.ya = c || Eb();
  if(2 === a.type) {
    a.G && (a.G.close(), a.G = l);
    try {
      a.wa.Fd(a, 0)
    }catch(d) {
      d instanceof E.e || e(d), d.cb !== U.Ta && e(d)
    }
  }
}, dg:function(a, b, c) {
  a.G && e(new E.e(U.Ta));
  if("undefined" !== typeof a.Y && "undefined" !== typeof a.Z) {
    var d = Z.L.gb(a, a.Y, a.Z);
    d && (d.o.readyState === d.o.CONNECTING && e(new E.e(U.Ic)), e(new E.e(U.Lc)))
  }
  b = Z.L.$a(a, b, c);
  a.Y = b.W;
  a.Z = b.port;
  e(new E.e(U.Kc))
}, Fd:function(a) {
  x || e(new E.e(U.Ta));
  a.G && e(new E.e(U.B));
  var b = require("ws").Server;
  a.G = new b({host:a.Tb, port:a.ya});
  r.websocket.P("listen", a.A.C);
  a.G.on("connection", function(b) {
    if(1 === a.type) {
      var d = Z.od(a.rd, a.type, a.protocol), b = Z.L.$a(d, b);
      d.Y = b.W;
      d.Z = b.port;
      a.Nb.push(d);
      r.websocket.P("connection", d.A.C)
    }else {
      Z.L.$a(a, b), r.websocket.P("connection", a.A.C)
    }
  });
  a.G.on("closed", function() {
    r.websocket.P("close", a.A.C);
    a.G = l
  });
  a.G.on("error", function() {
    a.error = U.Zb;
    r.websocket.P("error", [a.A.C, a.error, "EHOSTUNREACH: Host is unreachable"])
  })
}, accept:function(a) {
  a.G || e(new E.e(U.B));
  var b = a.Nb.shift();
  b.A.D = a.A.D;
  return b
}, ug:function(a, b) {
  var c, d;
  b ? ((a.Y === g || a.Z === g) && e(new E.e(U.Ra)), c = a.Y, d = a.Z) : (c = a.Tb || 0, d = a.ya || 0);
  return{W:c, port:d}
}, Wd:function(a, b, c, d, f, h) {
  if(2 === a.type) {
    if(f === g || h === g) {
      f = a.Y, h = a.Z
    }
    (f === g || h === g) && e(new E.e(U.Jc))
  }else {
    f = a.Y, h = a.Z
  }
  var i = Z.L.gb(a, f, h);
  1 === a.type && ((!i || i.o.readyState === i.o.Pa || i.o.readyState === i.o.CLOSED) && e(new E.e(U.Ra)), i.o.readyState === i.o.CONNECTING && e(new E.e(U.Ca)));
  b = b instanceof Array || b instanceof ArrayBuffer ? b.slice(c, c + d) : b.buffer.slice(b.byteOffset + c, b.byteOffset + c + d);
  if(2 === a.type && (!i || i.o.readyState !== i.o.OPEN)) {
    if(!i || i.o.readyState === i.o.Pa || i.o.readyState === i.o.CLOSED) {
      i = Z.L.$a(a, f, h)
    }
    i.ab.push(b);
    return d
  }
  try {
    return i.o.send(b), d
  }catch(j) {
    e(new E.e(U.B))
  }
}, Sd:function(a, b) {
  1 === a.type && a.G && e(new E.e(U.Ra));
  var c = a.ua.shift();
  if(!c) {
    if(1 === a.type) {
      var d = Z.L.gb(a, a.Y, a.Z);
      if(d) {
        if(d.o.readyState === d.o.Pa || d.o.readyState === d.o.CLOSED) {
          return l
        }
        e(new E.e(U.Ca))
      }
      e(new E.e(U.Ra))
    }
    e(new E.e(U.Ca))
  }
  var d = c.data.byteLength || c.data.length, f = c.data.byteOffset || 0, h = c.data.buffer || c.data, i = Math.min(b, d), j = {buffer:new Uint8Array(h, f, i), W:c.W, port:c.port};
  1 === a.type && i < d && (c.data = new Uint8Array(h, f + i, d - i), a.ua.unshift(c));
  return j
}}};
function Fb(a, b, c) {
  a = E.qa(a);
  if(!a) {
    return V(U.V), -1
  }
  try {
    return E.write(a, L, b, c)
  }catch(d) {
    return E.tc(d), -1
  }
}
function Gb(a) {
  a = E.Hb(a);
  return!a ? -1 : a.C
}
function Hb(a, b, c, d) {
  c *= b;
  if(0 == c) {
    return 0
  }
  a = Fb(Gb(d), a, c);
  if(-1 == a) {
    if(b = E.Hb(d)) {
      b.error = k
    }
    return 0
  }
  return a / b | 0
}
r._strlen = Ib;
function Jb(a) {
  return 0 > a || 0 === a && -Infinity === 1 / a
}
function Kb(a, b) {
  function c(a) {
    var c;
    "double" === a ? c = (M[fb >> 2] = M[b + f >> 2], M[fb + 4 >> 2] = M[b + (f + 4) >> 2], +Ba[fb >> 3]) : "i64" == a ? c = [M[b + f >> 2], M[b + (f + 4) >> 2]] : (a = "i32", c = M[b + f >> 2]);
    f += C.pc(a);
    return c
  }
  for(var d = a, f = 0, h = [], i, j;;) {
    var m = d;
    i = L[d >> 0];
    if(0 === i) {
      break
    }
    j = L[d + 1 >> 0];
    if(37 == i) {
      var u = n, y = n, t = n, w = n, G = n;
      a:for(;;) {
        switch(j) {
          case 43:
            u = k;
            break;
          case 45:
            y = k;
            break;
          case 35:
            t = k;
            break;
          case 48:
            if(w) {
              break a
            }else {
              w = k;
              break
            }
          ;
          case 32:
            G = k;
            break;
          default:
            break a
        }
        d++;
        j = L[d + 1 >> 0]
      }
      var K = 0;
      if(42 == j) {
        K = c("i32"), d++, j = L[d + 1 >> 0]
      }else {
        for(;48 <= j && 57 >= j;) {
          K = 10 * K + (j - 48), d++, j = L[d + 1 >> 0]
        }
      }
      var H = n, F = -1;
      if(46 == j) {
        F = 0;
        H = k;
        d++;
        j = L[d + 1 >> 0];
        if(42 == j) {
          F = c("i32"), d++
        }else {
          for(;;) {
            j = L[d + 1 >> 0];
            if(48 > j || 57 < j) {
              break
            }
            F = 10 * F + (j - 48);
            d++
          }
        }
        j = L[d + 1 >> 0]
      }
      0 > F && (F = 6, H = n);
      var v;
      switch(String.fromCharCode(j)) {
        case "h":
          j = L[d + 2 >> 0];
          104 == j ? (d++, v = 1) : v = 2;
          break;
        case "l":
          j = L[d + 2 >> 0];
          108 == j ? (d++, v = 8) : v = 4;
          break;
        case "L":
        ;
        case "q":
        ;
        case "j":
          v = 8;
          break;
        case "z":
        ;
        case "t":
        ;
        case "I":
          v = 4;
          break;
        default:
          v = l
      }
      v && d++;
      j = L[d + 1 >> 0];
      switch(String.fromCharCode(j)) {
        case "d":
        ;
        case "i":
        ;
        case "u":
        ;
        case "o":
        ;
        case "x":
        ;
        case "X":
        ;
        case "p":
          m = 100 == j || 105 == j;
          v = v || 4;
          var A = i = c("i" + 8 * v), q;
          8 == v && (i = C.Gd(i[0], i[1], 117 == j));
          4 >= v && (i = (m ? ab : $a)(i & Math.pow(256, v) - 1, 8 * v));
          var oa = Math.abs(i), m = "";
          if(100 == j || 105 == j) {
            q = 8 == v && Lb ? Lb.stringify(A[0], A[1], l) : ab(i, 8 * v).toString(10)
          }else {
            if(117 == j) {
              q = 8 == v && Lb ? Lb.stringify(A[0], A[1], k) : $a(i, 8 * v).toString(10), i = Math.abs(i)
            }else {
              if(111 == j) {
                q = (t ? "0" : "") + oa.toString(8)
              }else {
                if(120 == j || 88 == j) {
                  m = t && 0 != i ? "0x" : "";
                  if(8 == v && Lb) {
                    if(A[1]) {
                      q = (A[1] >>> 0).toString(16);
                      for(t = (A[0] >>> 0).toString(16);8 > t.length;) {
                        t = "0" + t
                      }
                      q += t
                    }else {
                      q = (A[0] >>> 0).toString(16)
                    }
                  }else {
                    if(0 > i) {
                      i = -i;
                      q = (oa - 1).toString(16);
                      A = [];
                      for(t = 0;t < q.length;t++) {
                        A.push((15 - parseInt(q[t], 16)).toString(16))
                      }
                      for(q = A.join("");q.length < 2 * v;) {
                        q = "f" + q
                      }
                    }else {
                      q = oa.toString(16)
                    }
                  }
                  88 == j && (m = m.toUpperCase(), q = q.toUpperCase())
                }else {
                  112 == j && (0 === oa ? q = "(nil)" : (m = "0x", q = oa.toString(16)))
                }
              }
            }
          }
          if(H) {
            for(;q.length < F;) {
              q = "0" + q
            }
          }
          0 <= i && (u ? m = "+" + m : G && (m = " " + m));
          "-" == q.charAt(0) && (m = "-" + m, q = q.substr(1));
          for(;m.length + q.length < K;) {
            y ? q += " " : w ? q = "0" + q : m = " " + m
          }
          q = m + q;
          q.split("").forEach(function(a) {
            h.push(a.charCodeAt(0))
          });
          break;
        case "f":
        ;
        case "F":
        ;
        case "e":
        ;
        case "E":
        ;
        case "g":
        ;
        case "G":
          i = c("double");
          if(isNaN(i)) {
            q = "nan", w = n
          }else {
            if(isFinite(i)) {
              H = n;
              v = Math.min(F, 20);
              if(103 == j || 71 == j) {
                H = k, F = F || 1, v = parseInt(i.toExponential(v).split("e")[1], 10), F > v && -4 <= v ? (j = (103 == j ? "f" : "F").charCodeAt(0), F -= v + 1) : (j = (103 == j ? "e" : "E").charCodeAt(0), F--), v = Math.min(F, 20)
              }
              if(101 == j || 69 == j) {
                q = i.toExponential(v), /[eE][-+]\d$/.test(q) && (q = q.slice(0, -1) + "0" + q.slice(-1))
              }else {
                if(102 == j || 70 == j) {
                  q = i.toFixed(v), 0 === i && Jb(i) && (q = "-" + q)
                }
              }
              m = q.split("e");
              if(H && !t) {
                for(;1 < m[0].length && -1 != m[0].indexOf(".") && ("0" == m[0].slice(-1) || "." == m[0].slice(-1));) {
                  m[0] = m[0].slice(0, -1)
                }
              }else {
                for(t && -1 == q.indexOf(".") && (m[0] += ".");F > v++;) {
                  m[0] += "0"
                }
              }
              q = m[0] + (1 < m.length ? "e" + m[1] : "");
              69 == j && (q = q.toUpperCase());
              0 <= i && (u ? q = "+" + q : G && (q = " " + q))
            }else {
              q = (0 > i ? "-" : "") + "inf", w = n
            }
          }
          for(;q.length < K;) {
            q = y ? q + " " : w && ("-" == q[0] || "+" == q[0]) ? q[0] + "0" + q.slice(1) : (w ? "0" : " ") + q
          }
          97 > j && (q = q.toUpperCase());
          q.split("").forEach(function(a) {
            h.push(a.charCodeAt(0))
          });
          break;
        case "s":
          w = (u = c("i8*")) ? Ib(u) : 6;
          H && (w = Math.min(w, F));
          if(!y) {
            for(;w < K--;) {
              h.push(32)
            }
          }
          if(u) {
            for(t = 0;t < w;t++) {
              h.push(O[u++ >> 0])
            }
          }else {
            h = h.concat(R("(null)".substr(0, w), k))
          }
          if(y) {
            for(;w < K--;) {
              h.push(32)
            }
          }
          break;
        case "c":
          for(y && h.push(c("i8"));0 < --K;) {
            h.push(32)
          }
          y || h.push(c("i8"));
          break;
        case "n":
          y = c("i32*");
          M[y >> 2] = h.length;
          break;
        case "%":
          h.push(i);
          break;
        default:
          for(t = m;t < d + 2;t++) {
            h.push(L[t >> 0])
          }
      }
      d += 2
    }else {
      h.push(i), d += 1
    }
  }
  return h
}
function Mb(a, b, c) {
  c = Kb(b, c);
  b = C.rb();
  a = Hb(N(c, "i8", Da), 1, c.length, a);
  C.qb(b);
  return a
}
function Nb(a, b) {
  var c = $a(a & 255);
  L[Nb.Dc >> 0] = c;
  if(-1 == Fb(Gb(b), Nb.Dc, 1)) {
    if(c = E.Hb(b)) {
      c.error = k
    }
    return-1
  }
  return c
}
function Ob(a) {
  Ob.ad || (J = J + 4095 & -4096, Ob.ad = k, z(C.bb), Ob.Xc = C.bb, C.bb = function() {
    D("cannot dynamically allocate, sbrk now has control")
  });
  var b = J;
  0 != a && Ob.Xc(a);
  return b
}
function Pb() {
  Pb.start === g && (Pb.start = Date.now());
  return 1E3 * (Date.now() - Pb.start) | 0
}
r._memset = Qb;
function Rb(a, b) {
  Sb = a;
  Tb = b;
  if(!Ub) {
    return 1
  }
  0 == a ? (Vb = function() {
    setTimeout(Wb, b)
  }, Xb = "timeout") : 1 == a && (Vb = function() {
    Yb(Wb)
  }, Xb = "rAF");
  return 0
}
function Zb(a, b, c, d) {
  r.noExitRuntime = k;
  z(!Ub, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  Ub = a;
  $b = d;
  var f = ac;
  Wb = function() {
    if(!la) {
      if(0 < bc.length) {
        var b = Date.now(), c = bc.shift();
        c.ja(c.Xa);
        if(cc) {
          var j = cc, m = 0 == j % 1 ? j - 1 : Math.floor(j);
          cc = c.eg ? m : (8 * j + (m + 0.5)) / 9
        }
        console.log('main loop blocker "' + c.name + '" took ' + (Date.now() - b) + " ms");
        r.setStatus && (b = r.statusMessage || "Please wait...", c = cc, j = dc.jg, c ? c < j ? r.setStatus(b + " (" + (j - c) + "/" + j + ")") : r.setStatus(b) : r.setStatus(""));
        setTimeout(Wb, 0)
      }else {
        if(!(f < ac)) {
          if(ec = ec + 1 | 0, 1 == Sb && 1 < Tb && 0 != ec % Tb) {
            Vb()
          }else {
            "timeout" === Xb && r.gg && (r.fa("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Xb = "");
            a: {
              if(!la && !(r.preMainLoop && r.preMainLoop() === n)) {
                try {
                  "undefined" !== typeof d ? C.Fa("vi", a, [d]) : C.Fa("v", a)
                }catch(u) {
                  if(u instanceof ha) {
                    break a
                  }
                  u && ("object" === typeof u && u.stack) && r.fa("exception thrown: " + [u, u.stack]);
                  e(u)
                }
                r.postMainLoop && r.postMainLoop()
              }
            }
            f < ac || ("object" === typeof SDL && (SDL.bc && SDL.bc.Qd) && SDL.bc.Qd(), Vb())
          }
        }
      }
    }
  };
  b && 0 < b ? Rb(0, 1E3 / b) : Rb(1, 1);
  Vb();
  c && e("SimulateInfiniteLoop")
}
var Vb = l, Xb = "", ac = 0, Ub = l, $b = 0, Sb = 0, Tb = 0, ec = 0, bc = [], dc = {}, Wb, cc, fc = n, xb = n, gc = n, hc = g, ic = g, jc = 0;
function kc(a) {
  var b = Date.now();
  if(0 === jc) {
    jc = b + 1E3 / 60
  }else {
    for(;b + 2 >= jc;) {
      jc += 1E3 / 60
    }
  }
  b = Math.max(jc - b, 0);
  setTimeout(a, b)
}
function Yb(a) {
  "undefined" === typeof window ? kc(a) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || kc), window.requestAnimationFrame(a))
}
function Cb(a) {
  return{jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)]
}
function Db(a, b, c) {
  function d() {
    c ? c() : e('Loading data file "' + a + '" failed.')
  }
  var f = new XMLHttpRequest;
  f.open("GET", a, k);
  f.responseType = "arraybuffer";
  f.onload = function() {
    if(200 == f.status || 0 == f.status && f.response) {
      var c = f.response;
      z(c, 'Loading data file "' + a + '" failed (no arrayBuffer).');
      b(new Uint8Array(c));
      eb()
    }else {
      d()
    }
  };
  f.onerror = d;
  f.send(l);
  db()
}
var lc = [];
function mc() {
  var a = r.canvas;
  lc.forEach(function(b) {
    b(a.width, a.height)
  })
}
function nc(a, b, c) {
  b && c ? (a.be = b, a.Ad = c) : (b = a.be, c = a.Ad);
  var d = b, f = c;
  r.forcedAspectRatio && 0 < r.forcedAspectRatio && (d / f < r.forcedAspectRatio ? d = Math.round(f * r.forcedAspectRatio) : f = Math.round(d / r.forcedAspectRatio));
  if((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var h = Math.min(screen.width / d, screen.height / f), d = Math.round(d * h), f = Math.round(f * h)
  }
  ic ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))))
}
var yb, zb, Ab, Bb;
r._llvm_bswap_i32 = oc;
r._memcpy = pc;
E.$d();
Ta.unshift({ja:function() {
  !r.noFSInit && !E.Ga.hb && E.Ga()
}});
Ua.push({ja:function() {
  E.wc = n
}});
Va.push({ja:function() {
  E.Rd()
}});
r.FS_createFolder = E.jd;
r.FS_createPath = E.md;
r.FS_createDataFile = E.zb;
r.FS_createPreloadedFile = E.nd;
r.FS_createLazyFile = E.kd;
r.FS_createLink = E.ld;
r.FS_createDevice = E.X;
hb = C.Fc(4);
M[hb >> 2] = 0;
Ta.unshift({ja:p()});
Va.push({ja:p()});
var rb = new C.Da;
x && (require("fs"), process.platform.match(/^win/));
Ta.push({ja:function() {
  Z.root = E.F(Z, {}, l)
}});
Nb.Dc = N([0], "i8", Ea);
r.requestFullScreen = function(a, b) {
  function c() {
    fc = n;
    var a = d.parentNode;
    (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (d.dc = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || p(), d.dc = d.dc.bind(document), 
    hc && d.Sb(), fc = k, ic && ("undefined" != typeof SDL && (a = La[SDL.screen + 0 * C.ia >> 2], M[SDL.screen + 0 * C.ia >> 2] = a | 8388608), mc())) : (a.parentNode.insertBefore(d, a), a.parentNode.removeChild(a), ic && ("undefined" != typeof SDL && (a = La[SDL.screen + 0 * C.ia >> 2], M[SDL.screen + 0 * C.ia >> 2] = a & -8388609), mc()));
    if(r.onFullScreen) {
      r.onFullScreen(fc)
    }
    nc(d)
  }
  hc = a;
  ic = b;
  "undefined" === typeof hc && (hc = k);
  "undefined" === typeof ic && (ic = n);
  var d = r.canvas;
  gc || (gc = k, document.addEventListener("fullscreenchange", c, n), document.addEventListener("mozfullscreenchange", c, n), document.addEventListener("webkitfullscreenchange", c, n), document.addEventListener("MSFullscreenChange", c, n));
  var f = document.createElement("div");
  d.parentNode.insertBefore(f, d);
  f.appendChild(d);
  f.Ud = f.requestFullScreen || f.mozRequestFullScreen || f.msRequestFullscreen || (f.webkitRequestFullScreen ? function() {
    f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
  } : l);
  f.Ud()
};
r.requestAnimationFrame = function(a) {
  Yb(a)
};
r.setCanvasSize = function(a, b, c) {
  nc(r.canvas, a, b);
  c || mc()
};
r.pauseMainLoop = function() {
  Vb = l;
  ac++
};
r.resumeMainLoop = function() {
  ac++;
  var a = Sb, b = Tb, c = Ub;
  Ub = l;
  Zb(c, 0, n, $b);
  Rb(a, b)
};
r.getUserMedia = function() {
  window.rc || (window.rc = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.rc(g)
};
Na = B = C.wb(I);
Oa = Na + Qa;
Pa = J = C.wb(Oa);
z(Pa < ka, "TOTAL_MEMORY not big enough for stack");
r.Yc = {Math:Math, Int8Array:Int8Array, Int16Array:Int16Array, Int32Array:Int32Array, Uint8Array:Uint8Array, Uint16Array:Uint16Array, Uint32Array:Uint32Array, Float32Array:Float32Array, Float64Array:Float64Array};
r.Zc = {abort:D, assert:z, min:xa, _send:function(a, b, c) {
  return!Z.wd(a) ? (V(U.V), -1) : Fb(a, b, c)
}, __reallyNegative:Jb, _fflush:p(), _pwrite:function(a, b, c, d) {
  a = E.qa(a);
  if(!a) {
    return V(U.V), -1
  }
  try {
    return E.write(a, L, b, c, d)
  }catch(f) {
    return E.tc(f), -1
  }
}, _emscripten_set_main_loop_timing:Rb, _sbrk:Ob, _emscripten_memcpy_big:function(a, b, c) {
  O.set(O.subarray(b, b + c), a);
  return a
}, _fileno:Gb, _sysconf:function(a) {
  switch(a) {
    case 30:
      return 4096;
    case 132:
    ;
    case 133:
    ;
    case 12:
    ;
    case 137:
    ;
    case 138:
    ;
    case 15:
    ;
    case 235:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
    ;
    case 19:
    ;
    case 20:
    ;
    case 149:
    ;
    case 13:
    ;
    case 10:
    ;
    case 236:
    ;
    case 153:
    ;
    case 9:
    ;
    case 21:
    ;
    case 22:
    ;
    case 159:
    ;
    case 154:
    ;
    case 14:
    ;
    case 77:
    ;
    case 78:
    ;
    case 139:
    ;
    case 80:
    ;
    case 81:
    ;
    case 79:
    ;
    case 82:
    ;
    case 68:
    ;
    case 67:
    ;
    case 164:
    ;
    case 11:
    ;
    case 29:
    ;
    case 47:
    ;
    case 48:
    ;
    case 95:
    ;
    case 52:
    ;
    case 51:
    ;
    case 46:
      return 200809;
    case 27:
    ;
    case 246:
    ;
    case 127:
    ;
    case 128:
    ;
    case 23:
    ;
    case 24:
    ;
    case 160:
    ;
    case 161:
    ;
    case 181:
    ;
    case 182:
    ;
    case 242:
    ;
    case 183:
    ;
    case 184:
    ;
    case 243:
    ;
    case 244:
    ;
    case 245:
    ;
    case 165:
    ;
    case 178:
    ;
    case 179:
    ;
    case 49:
    ;
    case 50:
    ;
    case 168:
    ;
    case 169:
    ;
    case 175:
    ;
    case 170:
    ;
    case 171:
    ;
    case 172:
    ;
    case 97:
    ;
    case 76:
    ;
    case 32:
    ;
    case 173:
    ;
    case 35:
      return-1;
    case 176:
    ;
    case 177:
    ;
    case 7:
    ;
    case 155:
    ;
    case 8:
    ;
    case 157:
    ;
    case 125:
    ;
    case 126:
    ;
    case 92:
    ;
    case 93:
    ;
    case 129:
    ;
    case 130:
    ;
    case 131:
    ;
    case 94:
    ;
    case 91:
      return 1;
    case 74:
    ;
    case 60:
    ;
    case 69:
    ;
    case 70:
    ;
    case 4:
      return 1024;
    case 31:
    ;
    case 42:
    ;
    case 72:
      return 32;
    case 87:
    ;
    case 26:
    ;
    case 33:
      return 2147483647;
    case 34:
    ;
    case 1:
      return 47839;
    case 38:
    ;
    case 36:
      return 99;
    case 43:
    ;
    case 37:
      return 2048;
    case 0:
      return 2097152;
    case 3:
      return 65536;
    case 28:
      return 32768;
    case 44:
      return 32767;
    case 75:
      return 16384;
    case 39:
      return 1E3;
    case 89:
      return 700;
    case 71:
      return 256;
    case 40:
      return 255;
    case 2:
      return 100;
    case 180:
      return 64;
    case 25:
      return 20;
    case 5:
      return 16;
    case 6:
      return 6;
    case 73:
      return 4;
    case 84:
      return"object" === typeof navigator ? navigator.hardwareConcurrency || 1 : 1
  }
  V(U.B);
  return-1
}, ___setErrNo:V, _clock:Pb, _putchar:function(a) {
  return Nb(a, M[vb >> 2])
}, _mkport:Eb, _write:Fb, _emscripten_set_main_loop:Zb, ___errno_location:function() {
  return hb
}, _fputc:Nb, _abort:function() {
  r.abort()
}, _fwrite:Hb, _time:function(a) {
  var b = Date.now() / 1E3 | 0;
  a && (M[a >> 2] = b);
  return b
}, _fprintf:Mb, __formatString:Kb, _printf:function(a, b) {
  return Mb(M[vb >> 2], a, b)
}, STACKTOP:B, STACK_MAX:Oa, tempDoublePtr:fb, ABORT:la, NaN:NaN, Infinity:Infinity};
// EMSCRIPTEN_START_ASM

var $ = (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = +env.NaN, r = +env.Infinity;
 var s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0.0;
 var B = 0;
 var C = 0;
 var D = 0;
 var E = 0;
 var F = 0;
 var G = 0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = global.Math.floor;
 var M = global.Math.abs;
 var N = global.Math.sqrt;
 var O = global.Math.pow;
 var P = global.Math.cos;
 var Q = global.Math.sin;
 var R = global.Math.tan;
 var S = global.Math.acos;
 var T = global.Math.asin;
 var U = global.Math.atan;
 var V = global.Math.atan2;
 var W = global.Math.exp;
 var X = global.Math.log;
 var Y = global.Math.ceil;
 var Z = global.Math.imul;
 var _ = env.abort;
 var $ = env.assert;
 var aa = env.min;
 var ba = env._send;
 var ca = env.__reallyNegative;
 var da = env._fflush;
 var ea = env._pwrite;
 var fa = env._emscripten_set_main_loop_timing;
 var ga = env._sbrk;
 var ha = env._emscripten_memcpy_big;
 var ia = env._fileno;
 var ja = env._sysconf;
 var ka = env.___setErrNo;
 var la = env._clock;
 var ma = env._putchar;
 var na = env._mkport;
 var oa = env._write;
 var pa = env._emscripten_set_main_loop;
 var qa = env.___errno_location;
 var ra = env._fputc;
 var sa = env._abort;
 var ta = env._fwrite;
 var ua = env._time;
 var va = env._fprintf;
 var wa = env.__formatString;
 var xa = env._printf;
 var ya = 0.0;
 
// EMSCRIPTEN_START_FUNCS
function za(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+15&-16;return b|0}function Aa(){return i|0}function Ba(a){a=a|0;i=a}function Ca(a,b){a=a|0;b=b|0;if(!m){m=a;n=b}}function Da(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0]}function Ea(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0];a[k+4>>0]=a[b+4>>0];a[k+5>>0]=a[b+5>>0];a[k+6>>0]=a[b+6>>0];a[k+7>>0]=a[b+7>>0]}function Fa(a){a=a|0;B=a}function Ga(){return B|0}function Ha(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;j=i;i=i+288|0;h=j+32|0;g=j;if(!d){e=h+0|0;b=b+0|0;d=e+64|0;do{c[e>>2]=c[b>>2];e=e+4|0;b=b+4|0}while((e|0)<(d|0));d=c[h+56>>2]|0;b=c[h>>2]|0}else{e=Oa(c[b>>2]|0)|0;c[h>>2]=e;c[h+4>>2]=Oa(c[b+4>>2]|0)|0;c[h+8>>2]=Oa(c[b+8>>2]|0)|0;c[h+12>>2]=Oa(c[b+12>>2]|0)|0;c[h+16>>2]=Oa(c[b+16>>2]|0)|0;c[h+20>>2]=Oa(c[b+20>>2]|0)|0;c[h+24>>2]=Oa(c[b+24>>2]|0)|0;c[h+28>>2]=Oa(c[b+28>>2]|0)|0;c[h+32>>2]=Oa(c[b+32>>2]|0)|0;c[h+36>>2]=Oa(c[b+36>>2]|0)|0;c[h+40>>2]=Oa(c[b+40>>2]|0)|0;c[h+44>>2]=Oa(c[b+44>>2]|0)|0;c[h+48>>2]=Oa(c[b+48>>2]|0)|0;c[h+52>>2]=Oa(c[b+52>>2]|0)|0;d=Oa(c[b+56>>2]|0)|0;c[h+56>>2]=d;c[h+60>>2]=Oa(c[b+60>>2]|0)|0;b=e}f=h+56|0;e=16;do{l=c[h+(e+-15<<2)>>2]|0;d=b+(c[h+(e+-7<<2)>>2]|0)+((d>>>19|d<<13)^d>>>10^(d>>>17|d<<15))+((l>>>18|l<<14)^l>>>3^(l>>>7|l<<25))|0;c[h+(e<<2)>>2]=d;k=c[h+(e+-1<<2)>>2]|0;b=c[h+(e+-14<<2)>>2]|0;c[h+((e|1)<<2)>>2]=l+(c[h+(e+-6<<2)>>2]|0)+((k>>>19|k<<13)^k>>>10^(k>>>17|k<<15))+((b>>>18|b<<14)^b>>>3^(b>>>7|b<<25));e=e+2|0}while((e|0)<64);c[g+0>>2]=c[a+0>>2];c[g+4>>2]=c[a+4>>2];c[g+8>>2]=c[a+8>>2];c[g+12>>2]=c[a+12>>2];c[g+16>>2]=c[a+16>>2];c[g+20>>2]=c[a+20>>2];c[g+24>>2]=c[a+24>>2];c[g+28>>2]=c[a+28>>2];b=g+28|0;n=g+16|0;l=c[n>>2]|0;s=g+20|0;r=c[s>>2]|0;e=g+24|0;v=c[e>>2]|0;m=(c[b>>2]|0)+1116352408+(c[h>>2]|0)+((l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+((v^r)&l^v)|0;u=c[g>>2]|0;q=g+4|0;o=c[q>>2]|0;t=g+8|0;p=c[t>>2]|0;k=g+12|0;d=(c[k>>2]|0)+m|0;c[k>>2]=d;m=((u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10))+m+((p|o)&u|p&o)|0;c[b>>2]=m;l=v+1899447441+(c[h+4>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((r^l)&d^r)|0;p=p+l|0;c[t>>2]=p;l=l+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((o|u)&m|o&u)|0;c[e>>2]=l;v=c[n>>2]|0;r=r+-1245643825+(c[h+8>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((v^d)&p^v)|0;o=o+r|0;c[q>>2]=o;m=r+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((u|m)&l|u&m)|0;c[s>>2]=m;d=v+-373957723+(c[h+12>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((d^p)&o^d)|0;v=c[b>>2]|0;u=(c[g>>2]|0)+d|0;c[g>>2]=u;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((v|l)&m|v&l)|0;c[n>>2]=l;p=(c[k>>2]|0)+961987163+(c[h+16>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((p^o)&u^p)|0;o=c[e>>2]|0;v=v+p|0;c[b>>2]=v;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((o|m)&l|o&m)|0;c[k>>2]=m;p=c[q>>2]|0;u=(c[t>>2]|0)+1508970993+(c[h+20>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^u)&v^p)|0;d=c[s>>2]|0;o=o+u|0;c[e>>2]=o;l=u+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[t>>2]=l;u=c[g>>2]|0;v=p+-1841331548+(c[h+24>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((u^v)&o^u)|0;p=c[n>>2]|0;d=d+v|0;c[s>>2]=d;m=v+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[q>>2]=m;v=c[b>>2]|0;u=u+-1424204075+(c[h+28>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((v^o)&d^v)|0;r=c[k>>2]|0;p=p+u|0;c[n>>2]=p;l=u+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((r|l)&m|r&l)|0;c[g>>2]=l;o=v+-670586216+(c[h+32>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((o^d)&p^o)|0;v=c[t>>2]|0;r=r+o|0;c[k>>2]=r;m=o+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((v|m)&l|v&m)|0;c[b>>2]=m;d=(c[e>>2]|0)+310598401+(c[h+36>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((d^p)&r^d)|0;o=c[q>>2]|0;v=v+d|0;c[t>>2]=v;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((o|l)&m|o&l)|0;c[e>>2]=l;p=(c[s>>2]|0)+607225278+(c[h+40>>2]|0)+((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+((p^r)&v^p)|0;r=c[g>>2]|0;o=o+p|0;c[q>>2]=o;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((r|m)&l|r&m)|0;c[s>>2]=m;p=c[k>>2]|0;v=(c[n>>2]|0)+1426881987+(c[h+44>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((p^v)&o^p)|0;d=c[b>>2]|0;r=r+v|0;c[g>>2]=r;l=v+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[n>>2]=l;v=c[t>>2]|0;o=p+1925078388+(c[h+48>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((v^o)&r^v)|0;p=c[e>>2]|0;d=d+o|0;c[b>>2]=d;m=o+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[k>>2]=m;o=c[q>>2]|0;v=v+-2132889090+(c[h+52>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((o^r)&d^o)|0;u=c[s>>2]|0;p=p+v|0;c[e>>2]=p;l=v+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((u|l)&m|u&l)|0;c[t>>2]=l;r=o+-1680079193+(c[f>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((r^d)&p^r)|0;o=c[n>>2]|0;f=u+r|0;c[s>>2]=f;m=r+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((o|m)&l|o&m)|0;c[q>>2]=m;d=(c[g>>2]|0)+-1046744716+(c[h+60>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((d^p)&f^d)|0;r=c[k>>2]|0;o=o+d|0;c[n>>2]=o;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((r|l)&m|r&l)|0;c[g>>2]=l;p=(c[b>>2]|0)+-459576895+(c[h+64>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((p^f)&o^p)|0;f=c[t>>2]|0;r=r+p|0;c[k>>2]=r;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((f|m)&l|f&m)|0;c[b>>2]=m;p=c[s>>2]|0;o=(c[e>>2]|0)+-272742522+(c[h+68>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((p^o)&r^p)|0;d=c[q>>2]|0;f=f+o|0;c[t>>2]=f;l=o+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[e>>2]=l;o=c[n>>2]|0;r=p+264347078+(c[h+72>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((o^r)&f^o)|0;p=c[g>>2]|0;d=d+r|0;c[q>>2]=d;m=r+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[s>>2]=m;r=c[k>>2]|0;o=o+604807628+(c[h+76>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((r^f)&d^r)|0;u=c[b>>2]|0;p=p+o|0;c[g>>2]=p;l=o+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((u|l)&m|u&l)|0;c[n>>2]=l;f=r+770255983+(c[h+80>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((f^d)&p^f)|0;r=c[e>>2]|0;u=u+f|0;c[b>>2]=u;m=f+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((r|m)&l|r&m)|0;c[k>>2]=m;d=(c[t>>2]|0)+1249150122+(c[h+84>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((d^p)&u^d)|0;f=c[s>>2]|0;r=r+d|0;c[e>>2]=r;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((f|l)&m|f&l)|0;c[t>>2]=l;p=(c[q>>2]|0)+1555081692+(c[h+88>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((p^u)&r^p)|0;u=c[n>>2]|0;f=f+p|0;c[s>>2]=f;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((u|m)&l|u&m)|0;c[q>>2]=m;p=c[b>>2]|0;r=(c[g>>2]|0)+1996064986+(c[h+92>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((p^r)&f^p)|0;d=c[k>>2]|0;u=u+r|0;c[n>>2]=u;l=r+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[g>>2]=l;r=c[e>>2]|0;f=p+-1740746414+(c[h+96>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((r^f)&u^r)|0;p=c[t>>2]|0;d=d+f|0;c[k>>2]=d;m=f+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[b>>2]=m;f=c[s>>2]|0;r=r+-1473132947+(c[h+100>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((f^u)&d^f)|0;o=c[q>>2]|0;p=p+r|0;c[t>>2]=p;l=r+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((o|l)&m|o&l)|0;c[e>>2]=l;u=f+-1341970488+(c[h+104>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((u^d)&p^u)|0;f=c[g>>2]|0;o=o+u|0;c[q>>2]=o;m=u+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((f|m)&l|f&m)|0;c[s>>2]=m;d=(c[n>>2]|0)+-1084653625+(c[h+108>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((d^p)&o^d)|0;u=c[b>>2]|0;f=f+d|0;c[g>>2]=f;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((u|l)&m|u&l)|0;c[n>>2]=l;p=(c[k>>2]|0)+-958395405+(c[h+112>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((p^o)&f^p)|0;o=c[e>>2]|0;u=u+p|0;c[b>>2]=u;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((o|m)&l|o&m)|0;c[k>>2]=m;p=c[q>>2]|0;f=(c[t>>2]|0)+-710438585+(c[h+116>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((p^f)&u^p)|0;d=c[s>>2]|0;o=o+f|0;c[e>>2]=o;l=f+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[t>>2]=l;f=c[g>>2]|0;u=p+113926993+(c[h+120>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((f^u)&o^f)|0;p=c[n>>2]|0;d=d+u|0;c[s>>2]=d;m=u+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[q>>2]=m;u=c[b>>2]|0;f=f+338241895+(c[h+124>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((u^o)&d^u)|0;r=c[k>>2]|0;p=p+f|0;c[n>>2]=p;l=f+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((r|l)&m|r&l)|0;c[g>>2]=l;o=u+666307205+(c[h+128>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((o^d)&p^o)|0;u=c[t>>2]|0;r=r+o|0;c[k>>2]=r;m=o+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((u|m)&l|u&m)|0;c[b>>2]=m;d=(c[e>>2]|0)+773529912+(c[h+132>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((d^p)&r^d)|0;o=c[q>>2]|0;u=u+d|0;c[t>>2]=u;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((o|l)&m|o&l)|0;c[e>>2]=l;p=(c[s>>2]|0)+1294757372+(c[h+136>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((p^r)&u^p)|0;r=c[g>>2]|0;o=o+p|0;c[q>>2]=o;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((r|m)&l|r&m)|0;c[s>>2]=m;p=c[k>>2]|0;u=(c[n>>2]|0)+1396182291+(c[h+140>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((p^u)&o^p)|0;d=c[b>>2]|0;r=r+u|0;c[g>>2]=r;l=u+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[n>>2]=l;u=c[t>>2]|0;o=p+1695183700+(c[h+144>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((u^o)&r^u)|0;p=c[e>>2]|0;d=d+o|0;c[b>>2]=d;m=o+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[k>>2]=m;o=c[q>>2]|0;u=u+1986661051+(c[h+148>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((o^r)&d^o)|0;f=c[s>>2]|0;p=p+u|0;c[e>>2]=p;l=u+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((f|l)&m|f&l)|0;c[t>>2]=l;r=o+-2117940946+(c[h+152>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((r^d)&p^r)|0;o=c[n>>2]|0;f=f+r|0;c[s>>2]=f;m=r+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((o|m)&l|o&m)|0;c[q>>2]=m;d=(c[g>>2]|0)+-1838011259+(c[h+156>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((d^p)&f^d)|0;r=c[k>>2]|0;o=o+d|0;c[n>>2]=o;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((r|l)&m|r&l)|0;c[g>>2]=l;p=(c[b>>2]|0)+-1564481375+(c[h+160>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((p^f)&o^p)|0;f=c[t>>2]|0;r=r+p|0;c[k>>2]=r;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((f|m)&l|f&m)|0;c[b>>2]=m;p=c[s>>2]|0;o=(c[e>>2]|0)+-1474664885+(c[h+164>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((p^o)&r^p)|0;d=c[q>>2]|0;f=f+o|0;c[t>>2]=f;l=o+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[e>>2]=l;o=c[n>>2]|0;r=p+-1035236496+(c[h+168>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((o^r)&f^o)|0;p=c[g>>2]|0;d=d+r|0;c[q>>2]=d;m=r+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[s>>2]=m;r=c[k>>2]|0;o=o+-949202525+(c[h+172>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((r^f)&d^r)|0;u=c[b>>2]|0;p=p+o|0;c[g>>2]=p;l=o+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((u|l)&m|u&l)|0;c[n>>2]=l;f=r+-778901479+(c[h+176>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((f^d)&p^f)|0;r=c[e>>2]|0;u=u+f|0;c[b>>2]=u;m=f+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((r|m)&l|r&m)|0;c[k>>2]=m;d=(c[t>>2]|0)+-694614492+(c[h+180>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((d^p)&u^d)|0;f=c[s>>2]|0;r=r+d|0;c[e>>2]=r;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((f|l)&m|f&l)|0;c[t>>2]=l;p=(c[q>>2]|0)+-200395387+(c[h+184>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((p^u)&r^p)|0;u=c[n>>2]|0;f=f+p|0;c[s>>2]=f;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((u|m)&l|u&m)|0;c[q>>2]=m;p=c[b>>2]|0;r=(c[g>>2]|0)+275423344+(c[h+188>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((p^r)&f^p)|0;d=c[k>>2]|0;u=u+r|0;c[n>>2]=u;l=r+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[g>>2]=l;r=c[e>>2]|0;f=p+430227734+(c[h+192>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((r^f)&u^r)|0;p=c[t>>2]|0;d=d+f|0;c[k>>2]=d;m=f+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[b>>2]=m;f=c[s>>2]|0;r=r+506948616+(c[h+196>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((f^u)&d^f)|0;o=c[q>>2]|0;p=p+r|0;c[t>>2]=p;l=r+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((o|l)&m|o&l)|0;c[e>>2]=l;u=f+659060556+(c[h+200>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((u^d)&p^u)|0;f=c[g>>2]|0;o=o+u|0;c[q>>2]=o;m=u+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((f|m)&l|f&m)|0;c[s>>2]=m;d=(c[n>>2]|0)+883997877+(c[h+204>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((d^p)&o^d)|0;u=c[b>>2]|0;f=f+d|0;c[g>>2]=f;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((u|l)&m|u&l)|0;c[n>>2]=l;p=(c[k>>2]|0)+958139571+(c[h+208>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((p^o)&f^p)|0;o=c[e>>2]|0;u=u+p|0;c[b>>2]=u;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((o|m)&l|o&m)|0;c[k>>2]=m;p=c[q>>2]|0;f=(c[t>>2]|0)+1322822218+(c[h+212>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((p^f)&u^p)|0;d=c[s>>2]|0;o=o+f|0;c[e>>2]=o;l=f+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[t>>2]=l;f=c[g>>2]|0;u=p+1537002063+(c[h+216>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((f^u)&o^f)|0;p=c[n>>2]|0;d=d+u|0;c[s>>2]=d;m=u+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[q>>2]=m;u=c[b>>2]|0;f=f+1747873779+(c[h+220>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((u^o)&d^u)|0;r=c[k>>2]|0;p=p+f|0;c[n>>2]=p;l=f+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((r|l)&m|r&l)|0;c[g>>2]=l;o=u+1955562222+(c[h+224>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((o^d)&p^o)|0;u=c[t>>2]|0;r=r+o|0;c[k>>2]=r;m=o+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((u|m)&l|u&m)|0;c[b>>2]=m;d=(c[e>>2]|0)+2024104815+(c[h+228>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((d^p)&r^d)|0;o=c[q>>2]|0;u=u+d|0;c[t>>2]=u;l=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((o|l)&m|o&l)|0;c[e>>2]=l;p=(c[s>>2]|0)+-2067236844+(c[h+232>>2]|0)+((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+((p^r)&u^p)|0;r=c[g>>2]|0;o=o+p|0;c[q>>2]=o;m=p+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((r|m)&l|r&m)|0;c[s>>2]=m;p=c[k>>2]|0;u=(c[n>>2]|0)+-1933114872+(c[h+236>>2]|0)+((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+((p^u)&o^p)|0;d=c[b>>2]|0;r=r+u|0;c[g>>2]=r;l=u+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((d|l)&m|d&l)|0;c[n>>2]=l;u=c[t>>2]|0;o=p+-1866530822+(c[h+240>>2]|0)+((r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7))+((u^o)&r^u)|0;p=c[e>>2]|0;d=d+o|0;c[b>>2]=d;m=o+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((p|m)&l|p&m)|0;c[k>>2]=m;o=c[q>>2]|0;u=u+-1538233109+(c[h+244>>2]|0)+((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+((o^r)&d^o)|0;f=c[s>>2]|0;p=p+u|0;c[e>>2]=p;l=u+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((f|l)&m|f&l)|0;c[t>>2]=l;r=o+-1090935817+(c[h+248>>2]|0)+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+((r^d)&p^r)|0;o=c[n>>2]|0;f=f+r|0;c[s>>2]=f;m=r+((l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10))+((o|m)&l|o&m)|0;c[q>>2]=m;d=(c[g>>2]|0)+-965641998+(c[h+252>>2]|0)+((f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+((d^p)&f^d)|0;k=c[k>>2]|0;h=o+d|0;c[n>>2]=h;d=d+((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+((k|l)&m|k&l)|0;c[g>>2]=d;c[a>>2]=(c[a>>2]|0)+d;d=a+4|0;c[d>>2]=(c[d>>2]|0)+m;d=a+8|0;c[d>>2]=(c[d>>2]|0)+l;d=a+12|0;c[d>>2]=(c[d>>2]|0)+k;d=a+16|0;c[d>>2]=(c[d>>2]|0)+h;d=a+20|0;c[d>>2]=(c[d>>2]|0)+f;d=a+24|0;c[d>>2]=(c[d>>2]|0)+(c[e>>2]|0);d=a+28|0;c[d>>2]=(c[d>>2]|0)+(c[b>>2]|0);i=j;return}function Ia(){var b=0,d=0,e=0,f=0,g=0,j=0,l=0,m=0,n=0,o=0.0;m=i;i=i+160|0;j=m;e=m+96|0;g=m+64|0;b=la()|0;c[g+0>>2]=c[2];c[g+4>>2]=c[3];c[g+8>>2]=c[4];c[g+12>>2]=c[5];c[g+16>>2]=c[6];c[g+20>>2]=c[7];c[g+24>>2]=c[8];c[g+28>>2]=c[9];d=e+60|0;f=0;do{c[j+0>>2]=c[2];c[j+4>>2]=c[3];c[j+8>>2]=c[4];c[j+12>>2]=c[5];c[j+16>>2]=c[6];c[j+20>>2]=c[7];c[j+24>>2]=c[8];c[j+28>>2]=c[9];l=e+0|0;n=l+60|0;do{c[l>>2]=0;l=l+4|0}while((l|0)<(n|0));c[e+0>>2]=c[g+0>>2];c[e+4>>2]=c[g+4>>2];c[e+8>>2]=c[g+8>>2];c[e+12>>2]=c[g+12>>2];c[e+16>>2]=c[g+16>>2];c[e+20>>2]=c[g+20>>2];c[e+24>>2]=c[g+24>>2];c[e+28>>2]=c[g+28>>2];a[e+35>>0]=-128;c[d>>2]=256;Ha(j,e,0);c[g+0>>2]=c[j+0>>2];c[g+4>>2]=c[j+4>>2];c[g+8>>2]=c[j+8>>2];c[g+12>>2]=c[j+12>>2];c[g+16>>2]=c[j+16>>2];c[g+20>>2]=c[j+20>>2];c[g+24>>2]=c[j+24>>2];c[g+28>>2]=c[j+28>>2];f=f+1|0}while((f|0)!=6291455);o=(+(la()|0)-+(b|0))/1.0e6*1.0e3;h[k>>3]=o;c[j>>2]=c[k>>2];c[j+4>>2]=c[k+4>>2];xa(48,j|0)|0;c[j>>2]=c[g>>2];xa(40,j|0)|0;c[j>>2]=c[g+4>>2];xa(40,j|0)|0;c[j>>2]=c[g+8>>2];xa(40,j|0)|0;c[j>>2]=c[g+12>>2];xa(40,j|0)|0;c[j>>2]=c[g+16>>2];xa(40,j|0)|0;c[j>>2]=c[g+20>>2];xa(40,j|0)|0;c[j>>2]=c[g+24>>2];xa(40,j|0)|0;c[j>>2]=c[g+28>>2];xa(40,j|0)|0;ma(10)|0;i=m;return 0}function Ja(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;L=i;do if(a>>>0<245){if(a>>>0<11)p=16;else p=a+11&-8;a=p>>>3;l=c[16]|0;k=l>>>a;if(k&3){e=(k&1^1)+a|0;f=e<<1;b=104+(f<<2)|0;f=104+(f+2<<2)|0;g=c[f>>2]|0;h=g+8|0;j=c[h>>2]|0;do if((b|0)!=(j|0)){if(j>>>0<(c[20]|0)>>>0)sa();d=j+12|0;if((c[d>>2]|0)==(g|0)){c[d>>2]=b;c[f>>2]=j;break}else sa()}else c[16]=l&~(1<<e);while(0);x=e<<3;c[g+4>>2]=x|3;x=g+(x|4)|0;c[x>>2]=c[x>>2]|1;x=h;i=L;return x|0}j=c[18]|0;if(p>>>0>j>>>0){if(k){f=2<<a;f=k<<a&(f|0-f);f=(f&0-f)+-1|0;a=f>>>12&16;f=f>>>a;e=f>>>5&8;f=f>>>e;d=f>>>2&4;f=f>>>d;g=f>>>1&2;f=f>>>g;h=f>>>1&1;h=(e|a|d|g|h)+(f>>>h)|0;f=h<<1;g=104+(f<<2)|0;f=104+(f+2<<2)|0;d=c[f>>2]|0;a=d+8|0;e=c[a>>2]|0;do if((g|0)!=(e|0)){if(e>>>0<(c[20]|0)>>>0)sa();j=e+12|0;if((c[j>>2]|0)==(d|0)){c[j>>2]=g;c[f>>2]=e;m=c[18]|0;break}else sa()}else{c[16]=l&~(1<<h);m=j}while(0);x=h<<3;b=x-p|0;c[d+4>>2]=p|3;k=d+p|0;c[d+(p|4)>>2]=b|1;c[d+x>>2]=b;if(m){e=c[21]|0;g=m>>>3;j=g<<1;f=104+(j<<2)|0;h=c[16]|0;g=1<<g;if(h&g){h=104+(j+2<<2)|0;j=c[h>>2]|0;if(j>>>0<(c[20]|0)>>>0)sa();else{n=h;o=j}}else{c[16]=h|g;n=104+(j+2<<2)|0;o=f}c[n>>2]=e;c[o+12>>2]=e;c[e+8>>2]=o;c[e+12>>2]=f}c[18]=b;c[21]=k;x=a;i=L;return x|0}k=c[17]|0;if(k){l=(k&0-k)+-1|0;w=l>>>12&16;l=l>>>w;v=l>>>5&8;l=l>>>v;x=l>>>2&4;l=l>>>x;j=l>>>1&2;l=l>>>j;m=l>>>1&1;m=c[368+((v|w|x|j|m)+(l>>>m)<<2)>>2]|0;l=(c[m+4>>2]&-8)-p|0;j=m;while(1){d=c[j+16>>2]|0;if(!d){d=c[j+20>>2]|0;if(!d)break}j=(c[d+4>>2]&-8)-p|0;x=j>>>0<l>>>0;l=x?j:l;j=d;m=x?d:m}k=c[20]|0;if(m>>>0<k>>>0)sa();b=m+p|0;if(m>>>0>=b>>>0)sa();a=c[m+24>>2]|0;g=c[m+12>>2]|0;do if((g|0)==(m|0)){h=m+20|0;j=c[h>>2]|0;if(!j){h=m+16|0;j=c[h>>2]|0;if(!j){e=0;break}}while(1){g=j+20|0;f=c[g>>2]|0;if(f){j=f;h=g;continue}g=j+16|0;f=c[g>>2]|0;if(!f)break;else{j=f;h=g}}if(h>>>0<k>>>0)sa();else{c[h>>2]=0;e=j;break}}else{f=c[m+8>>2]|0;if(f>>>0<k>>>0)sa();j=f+12|0;if((c[j>>2]|0)!=(m|0))sa();h=g+8|0;if((c[h>>2]|0)==(m|0)){c[j>>2]=g;c[h>>2]=f;e=g;break}else sa()}while(0);do if(a){j=c[m+28>>2]|0;h=368+(j<<2)|0;if((m|0)==(c[h>>2]|0)){c[h>>2]=e;if(!e){c[17]=c[17]&~(1<<j);break}}else{if(a>>>0<(c[20]|0)>>>0)sa();j=a+16|0;if((c[j>>2]|0)==(m|0))c[j>>2]=e;else c[a+20>>2]=e;if(!e)break}h=c[20]|0;if(e>>>0<h>>>0)sa();c[e+24>>2]=a;j=c[m+16>>2]|0;do if(j)if(j>>>0<h>>>0)sa();else{c[e+16>>2]=j;c[j+24>>2]=e;break}while(0);j=c[m+20>>2]|0;if(j)if(j>>>0<(c[20]|0)>>>0)sa();else{c[e+20>>2]=j;c[j+24>>2]=e;break}}while(0);if(l>>>0<16){x=l+p|0;c[m+4>>2]=x|3;x=m+(x+4)|0;c[x>>2]=c[x>>2]|1}else{c[m+4>>2]=p|3;c[m+(p|4)>>2]=l|1;c[m+(l+p)>>2]=l;d=c[18]|0;if(d){e=c[21]|0;g=d>>>3;j=g<<1;f=104+(j<<2)|0;h=c[16]|0;g=1<<g;if(h&g){j=104+(j+2<<2)|0;h=c[j>>2]|0;if(h>>>0<(c[20]|0)>>>0)sa();else{r=j;q=h}}else{c[16]=h|g;r=104+(j+2<<2)|0;q=f}c[r>>2]=e;c[q+12>>2]=e;c[e+8>>2]=q;c[e+12>>2]=f}c[18]=l;c[21]=b}x=m+8|0;i=L;return x|0}}}else if(a>>>0<=4294967231){a=a+11|0;p=a&-8;m=c[17]|0;if(m){j=0-p|0;a=a>>>8;if(a)if(p>>>0>16777215)l=31;else{q=(a+1048320|0)>>>16&8;r=a<<q;o=(r+520192|0)>>>16&4;r=r<<o;l=(r+245760|0)>>>16&2;l=14-(o|q|l)+(r<<l>>>15)|0;l=p>>>(l+7|0)&1|l<<1}else l=0;h=c[368+(l<<2)>>2]|0;a:do if(!h){a=0;k=0}else{if((l|0)==31)k=0;else k=25-(l>>>1)|0;f=j;a=0;e=p<<k;k=0;while(1){g=c[h+4>>2]&-8;j=g-p|0;if(j>>>0<f>>>0)if((g|0)==(p|0)){a=h;k=h;break a}else k=h;else j=f;r=c[h+20>>2]|0;h=c[h+(e>>>31<<2)+16>>2]|0;a=(r|0)==0|(r|0)==(h|0)?a:r;if(!h)break;else{f=j;e=e<<1}}}while(0);if((a|0)==0&(k|0)==0){a=2<<l;a=m&(a|0-a);if(!a)break;r=(a&0-a)+-1|0;n=r>>>12&16;r=r>>>n;m=r>>>5&8;r=r>>>m;o=r>>>2&4;r=r>>>o;q=r>>>1&2;r=r>>>q;a=r>>>1&1;a=c[368+((m|n|o|q|a)+(r>>>a)<<2)>>2]|0}if(!a){n=j;m=k}else while(1){r=(c[a+4>>2]&-8)-p|0;h=r>>>0<j>>>0;j=h?r:j;k=h?a:k;h=c[a+16>>2]|0;if(h){a=h;continue}a=c[a+20>>2]|0;if(!a){n=j;m=k;break}}if((m|0)!=0?n>>>0<((c[18]|0)-p|0)>>>0:0){k=c[20]|0;if(m>>>0<k>>>0)sa();o=m+p|0;if(m>>>0>=o>>>0)sa();a=c[m+24>>2]|0;g=c[m+12>>2]|0;do if((g|0)==(m|0)){h=m+20|0;j=c[h>>2]|0;if(!j){h=m+16|0;j=c[h>>2]|0;if(!j){b=0;break}}while(1){g=j+20|0;f=c[g>>2]|0;if(f){j=f;h=g;continue}g=j+16|0;f=c[g>>2]|0;if(!f)break;else{j=f;h=g}}if(h>>>0<k>>>0)sa();else{c[h>>2]=0;b=j;break}}else{f=c[m+8>>2]|0;if(f>>>0<k>>>0)sa();j=f+12|0;if((c[j>>2]|0)!=(m|0))sa();h=g+8|0;if((c[h>>2]|0)==(m|0)){c[j>>2]=g;c[h>>2]=f;b=g;break}else sa()}while(0);do if(a){j=c[m+28>>2]|0;h=368+(j<<2)|0;if((m|0)==(c[h>>2]|0)){c[h>>2]=b;if(!b){c[17]=c[17]&~(1<<j);break}}else{if(a>>>0<(c[20]|0)>>>0)sa();j=a+16|0;if((c[j>>2]|0)==(m|0))c[j>>2]=b;else c[a+20>>2]=b;if(!b)break}h=c[20]|0;if(b>>>0<h>>>0)sa();c[b+24>>2]=a;j=c[m+16>>2]|0;do if(j)if(j>>>0<h>>>0)sa();else{c[b+16>>2]=j;c[j+24>>2]=b;break}while(0);j=c[m+20>>2]|0;if(j)if(j>>>0<(c[20]|0)>>>0)sa();else{c[b+20>>2]=j;c[j+24>>2]=b;break}}while(0);b:do if(n>>>0>=16){c[m+4>>2]=p|3;c[m+(p|4)>>2]=n|1;c[m+(n+p)>>2]=n;j=n>>>3;if(n>>>0<256){h=j<<1;f=104+(h<<2)|0;g=c[16]|0;j=1<<j;do if(!(g&j)){c[16]=g|j;d=104+(h+2<<2)|0;t=f}else{j=104+(h+2<<2)|0;h=c[j>>2]|0;if(h>>>0>=(c[20]|0)>>>0){d=j;t=h;break}sa()}while(0);c[d>>2]=o;c[t+12>>2]=o;c[m+(p+8)>>2]=t;c[m+(p+12)>>2]=f;break}d=n>>>8;if(d)if(n>>>0>16777215)f=31;else{w=(d+1048320|0)>>>16&8;x=d<<w;u=(x+520192|0)>>>16&4;x=x<<u;f=(x+245760|0)>>>16&2;f=14-(u|w|f)+(x<<f>>>15)|0;f=n>>>(f+7|0)&1|f<<1}else f=0;j=368+(f<<2)|0;c[m+(p+28)>>2]=f;c[m+(p+20)>>2]=0;c[m+(p+16)>>2]=0;h=c[17]|0;g=1<<f;if(!(h&g)){c[17]=h|g;c[j>>2]=o;c[m+(p+24)>>2]=j;c[m+(p+12)>>2]=o;c[m+(p+8)>>2]=o;break}j=c[j>>2]|0;if((f|0)==31)d=0;else d=25-(f>>>1)|0;c:do if((c[j+4>>2]&-8|0)!=(n|0)){f=n<<d;while(1){g=j+(f>>>31<<2)+16|0;h=c[g>>2]|0;if(!h)break;if((c[h+4>>2]&-8|0)==(n|0)){v=h;break c}else{f=f<<1;j=h}}if(g>>>0<(c[20]|0)>>>0)sa();else{c[g>>2]=o;c[m+(p+24)>>2]=j;c[m+(p+12)>>2]=o;c[m+(p+8)>>2]=o;break b}}else v=j;while(0);d=v+8|0;b=c[d>>2]|0;x=c[20]|0;if(v>>>0>=x>>>0&b>>>0>=x>>>0){c[b+12>>2]=o;c[d>>2]=o;c[m+(p+8)>>2]=b;c[m+(p+12)>>2]=v;c[m+(p+24)>>2]=0;break}else sa()}else{x=n+p|0;c[m+4>>2]=x|3;x=m+(x+4)|0;c[x>>2]=c[x>>2]|1}while(0);x=m+8|0;i=L;return x|0}}}else p=-1;while(0);k=c[18]|0;if(k>>>0>=p>>>0){b=k-p|0;d=c[21]|0;if(b>>>0>15){c[21]=d+p;c[18]=b;c[d+(p+4)>>2]=b|1;c[d+k>>2]=b;c[d+4>>2]=p|3}else{c[18]=0;c[21]=0;c[d+4>>2]=k|3;x=d+(k+4)|0;c[x>>2]=c[x>>2]|1}x=d+8|0;i=L;return x|0}k=c[19]|0;if(k>>>0>p>>>0){w=k-p|0;c[19]=w;x=c[22]|0;c[22]=x+p;c[x+(p+4)>>2]=w|1;c[x+4>>2]=p|3;x=x+8|0;i=L;return x|0}do if(!(c[134]|0)){k=ja(30)|0;if(!(k+-1&k)){c[136]=k;c[135]=k;c[137]=-1;c[138]=-1;c[139]=0;c[127]=0;c[134]=(ua(0)|0)&-16^1431655768;break}else sa()}while(0);l=p+48|0;g=c[136]|0;f=p+47|0;h=g+f|0;g=0-g|0;m=h&g;if(m>>>0<=p>>>0){x=0;i=L;return x|0}a=c[126]|0;if((a|0)!=0?(t=c[124]|0,v=t+m|0,v>>>0<=t>>>0|v>>>0>a>>>0):0){x=0;i=L;return x|0}d:do if(!(c[127]&4)){j=c[22]|0;e:do if(j){a=512|0;while(1){k=c[a>>2]|0;if(k>>>0<=j>>>0?(s=a+4|0,(k+(c[s>>2]|0)|0)>>>0>j>>>0):0)break;a=c[a+8>>2]|0;if(!a){A=181;break e}}if(a){k=h-(c[19]|0)&g;if(k>>>0<2147483647){j=ga(k|0)|0;if((j|0)==((c[a>>2]|0)+(c[s>>2]|0)|0))A=190;else A=191}else k=0}else A=181}else A=181;while(0);do if((A|0)==181){j=ga(0)|0;if((j|0)!=(-1|0)){a=j;k=c[135]|0;h=k+-1|0;if(!(h&a))k=m;else k=m-a+(h+a&0-k)|0;a=c[124]|0;h=a+k|0;if(k>>>0>p>>>0&k>>>0<2147483647){v=c[126]|0;if((v|0)!=0?h>>>0<=a>>>0|h>>>0>v>>>0:0){k=0;break}h=ga(k|0)|0;if((h|0)==(j|0))A=190;else{j=h;A=191}}else k=0}else k=0}while(0);f:do if((A|0)==190){if((j|0)!=(-1|0)){w=j;s=k;A=201;break d}}else if((A|0)==191){h=0-k|0;do if((j|0)!=(-1|0)&k>>>0<2147483647&l>>>0>k>>>0?(u=c[136]|0,u=f-k+u&0-u,u>>>0<2147483647):0)if((ga(u|0)|0)==(-1|0)){ga(h|0)|0;k=0;break f}else{k=u+k|0;break}while(0);if((j|0)==(-1|0))k=0;else{w=j;s=k;A=201;break d}}while(0);c[127]=c[127]|4;A=198}else{k=0;A=198}while(0);if((((A|0)==198?m>>>0<2147483647:0)?(w=ga(m|0)|0,x=ga(0)|0,(w|0)!=(-1|0)&(x|0)!=(-1|0)&w>>>0<x>>>0):0)?(y=x-w|0,z=y>>>0>(p+40|0)>>>0,z):0){s=z?y:k;A=201}if((A|0)==201){j=(c[124]|0)+s|0;c[124]=j;if(j>>>0>(c[125]|0)>>>0)c[125]=j;o=c[22]|0;g:do if(o){f=512|0;while(1){k=c[f>>2]|0;j=f+4|0;h=c[j>>2]|0;if((w|0)==(k+h|0)){A=213;break}g=c[f+8>>2]|0;if(!g)break;else f=g}if(((A|0)==213?(c[f+12>>2]&8|0)==0:0)?o>>>0>=k>>>0&o>>>0<w>>>0:0){c[j>>2]=h+s;b=(c[19]|0)+s|0;d=o+8|0;if(!(d&7))d=0;else d=0-d&7;x=b-d|0;c[22]=o+d;c[19]=x;c[o+(d+4)>>2]=x|1;c[o+(b+4)>>2]=40;c[23]=c[138];break}k=c[20]|0;if(w>>>0<k>>>0){c[20]=w;k=w}j=w+s|0;g=512|0;while(1){if((c[g>>2]|0)==(j|0)){A=223;break}h=c[g+8>>2]|0;if(!h)break;else g=h}if((A|0)==223?(c[g+12>>2]&8|0)==0:0){c[g>>2]=w;j=g+4|0;c[j>>2]=(c[j>>2]|0)+s;j=w+8|0;if(!(j&7))r=0;else r=0-j&7;j=w+(s+8)|0;if(!(j&7))b=0;else b=0-j&7;j=w+(b+s)|0;n=r+p|0;q=w+n|0;l=j-(w+r)-p|0;c[w+(r+4)>>2]=p|3;h:do if((j|0)!=(o|0)){if((j|0)==(c[21]|0)){x=(c[18]|0)+l|0;c[18]=x;c[21]=q;c[w+(n+4)>>2]=x|1;c[w+(x+n)>>2]=x;break}d=s+4|0;h=c[w+(d+b)>>2]|0;if((h&3|0)==1){m=h&-8;e=h>>>3;i:do if(h>>>0>=256){a=c[w+((b|24)+s)>>2]|0;g=c[w+(s+12+b)>>2]|0;do if((g|0)==(j|0)){g=b|16;f=w+(d+g)|0;h=c[f>>2]|0;if(!h){g=w+(g+s)|0;h=c[g>>2]|0;if(!h){H=0;break}}else g=f;while(1){f=h+20|0;e=c[f>>2]|0;if(e){h=e;g=f;continue}f=h+16|0;e=c[f>>2]|0;if(!e)break;else{h=e;g=f}}if(g>>>0<k>>>0)sa();else{c[g>>2]=0;H=h;break}}else{f=c[w+((b|8)+s)>>2]|0;if(f>>>0<k>>>0)sa();k=f+12|0;if((c[k>>2]|0)!=(j|0))sa();h=g+8|0;if((c[h>>2]|0)==(j|0)){c[k>>2]=g;c[h>>2]=f;H=g;break}else sa()}while(0);if(!a)break;k=c[w+(s+28+b)>>2]|0;h=368+(k<<2)|0;do if((j|0)!=(c[h>>2]|0)){if(a>>>0<(c[20]|0)>>>0)sa();k=a+16|0;if((c[k>>2]|0)==(j|0))c[k>>2]=H;else c[a+20>>2]=H;if(!H)break i}else{c[h>>2]=H;if(H)break;c[17]=c[17]&~(1<<k);break i}while(0);h=c[20]|0;if(H>>>0<h>>>0)sa();c[H+24>>2]=a;k=b|16;j=c[w+(k+s)>>2]|0;do if(j)if(j>>>0<h>>>0)sa();else{c[H+16>>2]=j;c[j+24>>2]=H;break}while(0);j=c[w+(d+k)>>2]|0;if(!j)break;if(j>>>0<(c[20]|0)>>>0)sa();else{c[H+20>>2]=j;c[j+24>>2]=H;break}}else{g=c[w+((b|8)+s)>>2]|0;f=c[w+(s+12+b)>>2]|0;h=104+(e<<1<<2)|0;do if((g|0)!=(h|0)){if(g>>>0<k>>>0)sa();if((c[g+12>>2]|0)==(j|0))break;sa()}while(0);if((f|0)==(g|0)){c[16]=c[16]&~(1<<e);break}do if((f|0)==(h|0))D=f+8|0;else{if(f>>>0<k>>>0)sa();k=f+8|0;if((c[k>>2]|0)==(j|0)){D=k;break}sa()}while(0);c[g+12>>2]=f;c[D>>2]=g}while(0);j=w+((m|b)+s)|0;k=m+l|0}else k=l;j=j+4|0;c[j>>2]=c[j>>2]&-2;c[w+(n+4)>>2]=k|1;c[w+(k+n)>>2]=k;j=k>>>3;if(k>>>0<256){h=j<<1;f=104+(h<<2)|0;g=c[16]|0;j=1<<j;do if(!(g&j)){c[16]=g|j;I=104+(h+2<<2)|0;J=f}else{j=104+(h+2<<2)|0;h=c[j>>2]|0;if(h>>>0>=(c[20]|0)>>>0){I=j;J=h;break}sa()}while(0);c[I>>2]=q;c[J+12>>2]=q;c[w+(n+8)>>2]=J;c[w+(n+12)>>2]=f;break}d=k>>>8;do if(!d)f=0;else{if(k>>>0>16777215){f=31;break}v=(d+1048320|0)>>>16&8;x=d<<v;u=(x+520192|0)>>>16&4;x=x<<u;f=(x+245760|0)>>>16&2;f=14-(u|v|f)+(x<<f>>>15)|0;f=k>>>(f+7|0)&1|f<<1}while(0);j=368+(f<<2)|0;c[w+(n+28)>>2]=f;c[w+(n+20)>>2]=0;c[w+(n+16)>>2]=0;h=c[17]|0;g=1<<f;if(!(h&g)){c[17]=h|g;c[j>>2]=q;c[w+(n+24)>>2]=j;c[w+(n+12)>>2]=q;c[w+(n+8)>>2]=q;break}h=c[j>>2]|0;if((f|0)==31)j=0;else j=25-(f>>>1)|0;j:do if((c[h+4>>2]&-8|0)!=(k|0)){f=k<<j;while(1){g=h+(f>>>31<<2)+16|0;j=c[g>>2]|0;if(!j)break;if((c[j+4>>2]&-8|0)==(k|0)){K=j;break j}else{f=f<<1;h=j}}if(g>>>0<(c[20]|0)>>>0)sa();else{c[g>>2]=q;c[w+(n+24)>>2]=h;c[w+(n+12)>>2]=q;c[w+(n+8)>>2]=q;break h}}else K=h;while(0);d=K+8|0;b=c[d>>2]|0;x=c[20]|0;if(K>>>0>=x>>>0&b>>>0>=x>>>0){c[b+12>>2]=q;c[d>>2]=q;c[w+(n+8)>>2]=b;c[w+(n+12)>>2]=K;c[w+(n+24)>>2]=0;break}else sa()}else{x=(c[19]|0)+l|0;c[19]=x;c[22]=q;c[w+(n+4)>>2]=x|1}while(0);x=w+(r|8)|0;i=L;return x|0}j=512|0;while(1){h=c[j>>2]|0;if(h>>>0<=o>>>0?(B=c[j+4>>2]|0,C=h+B|0,C>>>0>o>>>0):0)break;j=c[j+8>>2]|0}j=h+(B+-39)|0;if(!(j&7))j=0;else j=0-j&7;g=h+(B+-47+j)|0;g=g>>>0<(o+16|0)>>>0?o:g;h=g+8|0;j=w+8|0;if(!(j&7))j=0;else j=0-j&7;x=s+-40-j|0;c[22]=w+j;c[19]=x;c[w+(j+4)>>2]=x|1;c[w+(s+-36)>>2]=40;c[23]=c[138];c[g+4>>2]=27;c[h+0>>2]=c[128];c[h+4>>2]=c[129];c[h+8>>2]=c[130];c[h+12>>2]=c[131];c[128]=w;c[129]=s;c[131]=0;c[130]=h;j=g+28|0;c[j>>2]=7;if((g+32|0)>>>0<C>>>0)do{x=j;j=j+4|0;c[j>>2]=7}while((x+8|0)>>>0<C>>>0);if((g|0)!=(o|0)){k=g-o|0;j=o+(k+4)|0;c[j>>2]=c[j>>2]&-2;c[o+4>>2]=k|1;c[o+k>>2]=k;j=k>>>3;if(k>>>0<256){h=j<<1;f=104+(h<<2)|0;g=c[16]|0;j=1<<j;do if(!(g&j)){c[16]=g|j;E=104+(h+2<<2)|0;F=f}else{d=104+(h+2<<2)|0;b=c[d>>2]|0;if(b>>>0>=(c[20]|0)>>>0){E=d;F=b;break}sa()}while(0);c[E>>2]=o;c[F+12>>2]=o;c[o+8>>2]=F;c[o+12>>2]=f;break}d=k>>>8;if(d)if(k>>>0>16777215)j=31;else{w=(d+1048320|0)>>>16&8;x=d<<w;v=(x+520192|0)>>>16&4;x=x<<v;j=(x+245760|0)>>>16&2;j=14-(v|w|j)+(x<<j>>>15)|0;j=k>>>(j+7|0)&1|j<<1}else j=0;d=368+(j<<2)|0;c[o+28>>2]=j;c[o+20>>2]=0;c[o+16>>2]=0;b=c[17]|0;e=1<<j;if(!(b&e)){c[17]=b|e;c[d>>2]=o;c[o+24>>2]=d;c[o+12>>2]=o;c[o+8>>2]=o;break}e=c[d>>2]|0;if((j|0)==31)d=0;else d=25-(j>>>1)|0;k:do if((c[e+4>>2]&-8|0)!=(k|0)){j=k<<d;while(1){b=e+(j>>>31<<2)+16|0;d=c[b>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(k|0)){G=d;break k}else{j=j<<1;e=d}}if(b>>>0<(c[20]|0)>>>0)sa();else{c[b>>2]=o;c[o+24>>2]=e;c[o+12>>2]=o;c[o+8>>2]=o;break g}}else G=e;while(0);d=G+8|0;b=c[d>>2]|0;x=c[20]|0;if(G>>>0>=x>>>0&b>>>0>=x>>>0){c[b+12>>2]=o;c[d>>2]=o;c[o+8>>2]=b;c[o+12>>2]=G;c[o+24>>2]=0;break}else sa()}}else{x=c[20]|0;if((x|0)==0|w>>>0<x>>>0)c[20]=w;c[128]=w;c[129]=s;c[131]=0;c[25]=c[134];c[24]=-1;d=0;do{x=d<<1;v=104+(x<<2)|0;c[104+(x+3<<2)>>2]=v;c[104+(x+2<<2)>>2]=v;d=d+1|0}while((d|0)!=32);d=w+8|0;if(!(d&7))d=0;else d=0-d&7;x=s+-40-d|0;c[22]=w+d;c[19]=x;c[w+(d+4)>>2]=x|1;c[w+(s+-36)>>2]=40;c[23]=c[138]}while(0);b=c[19]|0;if(b>>>0>p>>>0){w=b-p|0;c[19]=w;x=c[22]|0;c[22]=x+p;c[x+(p+4)>>2]=w|1;c[x+4>>2]=p|3;x=x+8|0;i=L;return x|0}}c[(qa()|0)>>2]=12;x=0;i=L;return x|0}function Ka(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;w=i;if(!a){i=w;return}g=a+-8|0;h=c[20]|0;if(g>>>0<h>>>0)sa();f=c[a+-4>>2]|0;e=f&3;if((e|0)==1)sa();p=f&-8;r=a+(p+-8)|0;do if(!(f&1)){g=c[g>>2]|0;if(!e){i=w;return}j=-8-g|0;m=a+j|0;n=g+p|0;if(m>>>0<h>>>0)sa();if((m|0)==(c[21]|0)){g=a+(p+-4)|0;f=c[g>>2]|0;if((f&3|0)!=3){v=m;l=n;break}c[18]=n;c[g>>2]=f&-2;c[a+(j+4)>>2]=n|1;c[r>>2]=n;i=w;return}d=g>>>3;if(g>>>0<256){e=c[a+(j+8)>>2]|0;f=c[a+(j+12)>>2]|0;g=104+(d<<1<<2)|0;if((e|0)!=(g|0)){if(e>>>0<h>>>0)sa();if((c[e+12>>2]|0)!=(m|0))sa()}if((f|0)==(e|0)){c[16]=c[16]&~(1<<d);v=m;l=n;break}if((f|0)!=(g|0)){if(f>>>0<h>>>0)sa();g=f+8|0;if((c[g>>2]|0)==(m|0))b=g;else sa()}else b=f+8|0;c[e+12>>2]=f;c[b>>2]=e;v=m;l=n;break}b=c[a+(j+24)>>2]|0;e=c[a+(j+12)>>2]|0;do if((e|0)==(m|0)){f=a+(j+20)|0;g=c[f>>2]|0;if(!g){f=a+(j+16)|0;g=c[f>>2]|0;if(!g){k=0;break}}while(1){e=g+20|0;d=c[e>>2]|0;if(d){g=d;f=e;continue}e=g+16|0;d=c[e>>2]|0;if(!d)break;else{g=d;f=e}}if(f>>>0<h>>>0)sa();else{c[f>>2]=0;k=g;break}}else{d=c[a+(j+8)>>2]|0;if(d>>>0<h>>>0)sa();g=d+12|0;if((c[g>>2]|0)!=(m|0))sa();f=e+8|0;if((c[f>>2]|0)==(m|0)){c[g>>2]=e;c[f>>2]=d;k=e;break}else sa()}while(0);if(b){g=c[a+(j+28)>>2]|0;f=368+(g<<2)|0;if((m|0)==(c[f>>2]|0)){c[f>>2]=k;if(!k){c[17]=c[17]&~(1<<g);v=m;l=n;break}}else{if(b>>>0<(c[20]|0)>>>0)sa();g=b+16|0;if((c[g>>2]|0)==(m|0))c[g>>2]=k;else c[b+20>>2]=k;if(!k){v=m;l=n;break}}f=c[20]|0;if(k>>>0<f>>>0)sa();c[k+24>>2]=b;g=c[a+(j+16)>>2]|0;do if(g)if(g>>>0<f>>>0)sa();else{c[k+16>>2]=g;c[g+24>>2]=k;break}while(0);g=c[a+(j+20)>>2]|0;if(g)if(g>>>0<(c[20]|0)>>>0)sa();else{c[k+20>>2]=g;c[g+24>>2]=k;v=m;l=n;break}else{v=m;l=n}}else{v=m;l=n}}else{v=g;l=p}while(0);if(v>>>0>=r>>>0)sa();g=a+(p+-4)|0;f=c[g>>2]|0;if(!(f&1))sa();if(!(f&2)){if((r|0)==(c[22]|0)){m=(c[19]|0)+l|0;c[19]=m;c[22]=v;c[v+4>>2]=m|1;if((v|0)!=(c[21]|0)){i=w;return}c[21]=0;c[18]=0;i=w;return}if((r|0)==(c[21]|0)){m=(c[18]|0)+l|0;c[18]=m;c[21]=v;c[v+4>>2]=m|1;c[v+m>>2]=m;i=w;return}h=(f&-8)+l|0;b=f>>>3;do if(f>>>0>=256){b=c[a+(p+16)>>2]|0;g=c[a+(p|4)>>2]|0;do if((g|0)==(r|0)){f=a+(p+12)|0;g=c[f>>2]|0;if(!g){f=a+(p+8)|0;g=c[f>>2]|0;if(!g){q=0;break}}while(1){e=g+20|0;d=c[e>>2]|0;if(d){g=d;f=e;continue}e=g+16|0;d=c[e>>2]|0;if(!d)break;else{g=d;f=e}}if(f>>>0<(c[20]|0)>>>0)sa();else{c[f>>2]=0;q=g;break}}else{f=c[a+p>>2]|0;if(f>>>0<(c[20]|0)>>>0)sa();e=f+12|0;if((c[e>>2]|0)!=(r|0))sa();d=g+8|0;if((c[d>>2]|0)==(r|0)){c[e>>2]=g;c[d>>2]=f;q=g;break}else sa()}while(0);if(b){g=c[a+(p+20)>>2]|0;f=368+(g<<2)|0;if((r|0)==(c[f>>2]|0)){c[f>>2]=q;if(!q){c[17]=c[17]&~(1<<g);break}}else{if(b>>>0<(c[20]|0)>>>0)sa();g=b+16|0;if((c[g>>2]|0)==(r|0))c[g>>2]=q;else c[b+20>>2]=q;if(!q)break}g=c[20]|0;if(q>>>0<g>>>0)sa();c[q+24>>2]=b;f=c[a+(p+8)>>2]|0;do if(f)if(f>>>0<g>>>0)sa();else{c[q+16>>2]=f;c[f+24>>2]=q;break}while(0);d=c[a+(p+12)>>2]|0;if(d)if(d>>>0<(c[20]|0)>>>0)sa();else{c[q+20>>2]=d;c[d+24>>2]=q;break}}}else{d=c[a+p>>2]|0;e=c[a+(p|4)>>2]|0;g=104+(b<<1<<2)|0;if((d|0)!=(g|0)){if(d>>>0<(c[20]|0)>>>0)sa();if((c[d+12>>2]|0)!=(r|0))sa()}if((e|0)==(d|0)){c[16]=c[16]&~(1<<b);break}if((e|0)!=(g|0)){if(e>>>0<(c[20]|0)>>>0)sa();f=e+8|0;if((c[f>>2]|0)==(r|0))o=f;else sa()}else o=e+8|0;c[d+12>>2]=e;c[o>>2]=d}while(0);c[v+4>>2]=h|1;c[v+h>>2]=h;if((v|0)==(c[21]|0)){c[18]=h;i=w;return}else g=h}else{c[g>>2]=f&-2;c[v+4>>2]=l|1;c[v+l>>2]=l;g=l}f=g>>>3;if(g>>>0<256){e=f<<1;g=104+(e<<2)|0;b=c[16]|0;d=1<<f;if(b&d){d=104+(e+2<<2)|0;b=c[d>>2]|0;if(b>>>0<(c[20]|0)>>>0)sa();else{s=d;t=b}}else{c[16]=b|d;s=104+(e+2<<2)|0;t=g}c[s>>2]=v;c[t+12>>2]=v;c[v+8>>2]=t;c[v+12>>2]=g;i=w;return}b=g>>>8;if(b)if(g>>>0>16777215)f=31;else{l=(b+1048320|0)>>>16&8;m=b<<l;k=(m+520192|0)>>>16&4;m=m<<k;f=(m+245760|0)>>>16&2;f=14-(k|l|f)+(m<<f>>>15)|0;f=g>>>(f+7|0)&1|f<<1}else f=0;d=368+(f<<2)|0;c[v+28>>2]=f;c[v+20>>2]=0;c[v+16>>2]=0;b=c[17]|0;e=1<<f;a:do if(b&e){e=c[d>>2]|0;if((f|0)==31)d=0;else d=25-(f>>>1)|0;b:do if((c[e+4>>2]&-8|0)!=(g|0)){f=g<<d;while(1){b=e+(f>>>31<<2)+16|0;d=c[b>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(g|0)){u=d;break b}else{f=f<<1;e=d}}if(b>>>0<(c[20]|0)>>>0)sa();else{c[b>>2]=v;c[v+24>>2]=e;c[v+12>>2]=v;c[v+8>>2]=v;break a}}else u=e;while(0);b=u+8|0;d=c[b>>2]|0;m=c[20]|0;if(u>>>0>=m>>>0&d>>>0>=m>>>0){c[d+12>>2]=v;c[b>>2]=v;c[v+8>>2]=d;c[v+12>>2]=u;c[v+24>>2]=0;break}else sa()}else{c[17]=b|e;c[d>>2]=v;c[v+24>>2]=d;c[v+12>>2]=v;c[v+8>>2]=v}while(0);m=(c[24]|0)+-1|0;c[24]=m;if(!m)b=520|0;else{i=w;return}while(1){b=c[b>>2]|0;if(!b)break;else b=b+8|0}c[24]=-1;i=w;return}function La(){}function Ma(b){b=b|0;var c=0;c=b;while(a[c>>0]|0)c=c+1|0;return c-b|0}function Na(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;if(h){h=b+4-h|0;while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return b-e|0}function Oa(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function Pa(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return ha(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}

// EMSCRIPTEN_END_FUNCS

 return {
  _strlen: Ma,
  _free: Ka,
  _main: Ia,
  _memset: Na,
  _malloc: Ja,
  _memcpy: Pa,
  _llvm_bswap_i32: Oa,
  runPostSets: La,
  stackAlloc: za,
  stackSave: Aa,
  stackRestore: Ba,
  setThrew: Ca,
  setTempRet0: Fa,
  getTempRet0: Ga
 };
})


// EMSCRIPTEN_END_ASM
(r.Yc, r.Zc, Q), Ib = r._strlen = $._strlen, Ia = r._free = $._free;
r._main = $._main;
var Qb = r._memset = $._memset, Ga = r._malloc = $._malloc, pc = r._memcpy = $._memcpy, oc = r._llvm_bswap_i32 = $._llvm_bswap_i32;
r.runPostSets = $.runPostSets;
C.pb = $.stackAlloc;
C.rb = $.stackSave;
C.qb = $.stackRestore;
C.Zd = $.setTempRet0;
C.xd = $.getTempRet0;
var Lb = l;
if(T) {
  if("function" === typeof r.locateFile ? T = r.locateFile(T) : r.memoryInitializerPrefixURL && (T = r.memoryInitializerPrefixURL + T), x || da) {
    var qc = r.readBinary(T);
    O.set(qc, Ma)
  }else {
    db(), Db(T, function(a) {
      O.set(a, Ma);
      eb()
    }, function() {
      e("could not load memory initializer " + T)
    })
  }
}
function ha(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a
}
ha.prototype = Error();
var sc, tc = l, cb = function uc() {
  !r.calledRun && vc && wc();
  r.calledRun || (cb = uc)
};
r.callMain = r.bg = function(a) {
  function b() {
    for(var a = 0;3 > a;a++) {
      d.push(0)
    }
  }
  z(0 == S, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  z(0 == Sa.length, "cannot call main when preRun functions remain to be called");
  a = a || [];
  Xa || (Xa = k, Ra(Ta));
  var c = a.length + 1, d = [N(R(r.thisProgram), "i8", 0)];
  b();
  for(var f = 0;f < c - 1;f += 1) {
    d.push(N(R(a[f]), "i8", 0)), b()
  }
  d.push(0);
  d = N(d, "i32", 0);
  sc = B;
  try {
    var h = r._main(c, d, 0);
    xc(h)
  }catch(i) {
    i instanceof ha || ("SimulateInfiniteLoop" == i ? r.noExitRuntime = k : (i && ("object" === typeof i && i.stack) && r.fa("exception thrown: " + [i, i.stack]), e(i)))
  }finally {
  }
};
function wc(a) {
  function b() {
    if(!r.calledRun && (r.calledRun = k, !la)) {
      Xa || (Xa = k, Ra(Ta));
      Ra(Ua);
      ba && tc !== l && r.fa("pre-main prep time: " + (Date.now() - tc) + " ms");
      r._main && vc && r.callMain(a);
      if(r.postRun) {
        for("function" == typeof r.postRun && (r.postRun = [r.postRun]);r.postRun.length;) {
          Za(r.postRun.shift())
        }
      }
      Ra(Wa)
    }
  }
  a = a || r.arguments;
  tc === l && (tc = Date.now());
  if(!(0 < S)) {
    if(r.preRun) {
      for("function" == typeof r.preRun && (r.preRun = [r.preRun]);r.preRun.length;) {
        Ya(r.preRun.shift())
      }
    }
    Ra(Sa);
    !(0 < S) && !r.calledRun && (r.setStatus ? (r.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        r.setStatus("")
      }, 1);
      b()
    }, 1)) : b())
  }
}
r.run = r.Ng = wc;
function xc(a) {
  r.noExitRuntime || (la = k, B = sc, Ra(Va), x ? (process.stdout.once("drain", function() {
    process.exit(a)
  }), console.log(" "), setTimeout(function() {
    process.exit(a)
  }, 500)) : da && "function" === typeof quit && quit(a), e(new ha(a)))
}
r.exit = r.ig = xc;
function D(a) {
  a && (r.print(a), r.fa(a));
  la = k;
  e("abort() at " + Ja() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.")
}
r.abort = r.abort = D;
if(r.preInit) {
  for("function" == typeof r.preInit && (r.preInit = [r.preInit]);0 < r.preInit.length;) {
    r.preInit.pop()()
  }
}
var vc = k;
r.noInitialRun && (vc = n);
wc();



