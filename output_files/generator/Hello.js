const readlineSync = require('readline-sync');
let pc = 0;
let a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = 0;
let x = y = [];
let z = {};
let names = {
};
let resolveName = (x) => names[x];
let lines = [
  () => {a = 3 + 2}, // 0
  () => {console.log(a)}, // 1
];
while (pc < lines.length) {
  lines[pc]();
  pc += 1;
}