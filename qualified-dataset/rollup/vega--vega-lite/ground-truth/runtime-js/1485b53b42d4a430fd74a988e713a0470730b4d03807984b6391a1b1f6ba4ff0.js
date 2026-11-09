(function anonymous(a,b
) {
var u, v; return ((u = a["key"]) < (v = b["key"]) || u == null) && v != null ? -1
  : (u > v || v == null) && u != null ? 1
  : ((v = v instanceof Date ? +v : v), (u = u instanceof Date ? +u : u)) !== u && v === v ? -1
  : v !== v && u === u ? 1 : 0;
})