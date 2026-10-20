/*! 
 * String Filters v0.1.0
 * Homepage (https://github.com/jivtroy/string-filters)
 * Copyright 2026 Jiv Troy
 * License: MIT
 */
function u(t, n = !1) {
  if (!t) return null;
  let r = t.charAt(0).toUpperCase(), e = t.slice(1);
  return n && (e = e.toLowerCase()), `${r}${e}`;
}
function o(t, n = { numbers: !1, lower: !1 }) {
  if (!t) return null;
  const r = n?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = t.match(r);
  if (!e || e.length <= 1) return null;
  let l = e.shift();
  const a = n?.lower;
  return a && (l = l.toLowerCase()), e = e.map((f) => u(f, a)), e.unshift(l), e.join("");
}
function p(t, n = !1) {
  if (!t) return null;
  let r = n ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu"), e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("");
}
function s(t, n = !1) {
  if (!t) return null;
  let r = n ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu, e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("-");
}
function i(t, n, r = " ") {
  if (!t) return null;
  const e = Math.floor((n - t.length) / 2) + t.length;
  return t.padStart(e, r).padEnd(n, r);
}
function c(t, n = { numbers: !1, lower: !1 }) {
  if (!t) return null;
  const r = n?.numbers ? /[\p{L}\p{N}]+/gu : new RegExp("\\p{L}+", "gu");
  let e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((l) => u(l, n?.lower)).join("");
}
function m(t, n = !1) {
  if (!t) return null;
  let r = n ? /[\p{L}\p{N}_]+/gu : /[\p{L}_]+/gu, e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((l) => l.toLowerCase()).join("_");
}
function L(t, n = !1) {
  return t ? t.replace(new RegExp("\\p{L}+", "gu"), (r) => u(r, n)) : null;
}
function w(t, n = { numbers: !1, lower: !1 }) {
  if (!t) return null;
  const r = n?.numbers ? /[\p{L}\p{N}-]+/gu : /[\p{L}-]+/gu;
  let e = t.match(r);
  return !e || e.length <= 1 ? null : e.map((l) => u(l, n?.lower)).join("-");
}
function h(t, n = 32, r = "...") {
  return t ? t.substring(0, n) + r : null;
}
export {
  o as camelCase,
  u as capitalize,
  p as flatCase,
  s as kebabCase,
  i as pad,
  c as pascalCase,
  m as snakeCase,
  L as titleCase,
  w as trainCase,
  h as truncate
};
