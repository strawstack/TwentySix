const readlineSync = require('readline-sync');
let pc = 0;
let a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = 0;
let x = y = [];
let z = {};
let names = {
  "loop": 1,
};
let resolveName = (x) => names[x];
let lines = [
  () => {a = 1}, // 0
  () => {if((10 < a)){process.exit()}}, // 1
  () => {console.log(a * a)}, // 2
  () => {a = a + 1}, // 3
  () => {pc = resolveName("loop") - 1}, // 4
];
while (pc < lines.length) {
  lines[pc]();
  pc += 1;
}