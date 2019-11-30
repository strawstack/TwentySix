const readlineSync = require('readline-sync');
let pc = 0;
let a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = 0;
let x = y = [];
let z = {};
let names = {
  "fact": 3,
  "done": 7,
};
let resolveName = (x) => names[x];
let lines = [
  () => {n = parseInt(readlineSync.question(''))}, // 0
  () => {v = n}, // 1
  () => {r = 1}, // 2
  () => {if(n == 1){pc = resolveName("done") - 1}}, // 3
  () => {r = r * n}, // 4
  () => {n = n + (-1 * 1)}, // 5
  () => {pc = resolveName("fact") - 1}, // 6
  () => {console.log(("The factorial of ".toString() + (v.toString() + (" is ".toString() + r.toString()).toString()).toString()))}, // 7
];
while (pc < lines.length) {
  lines[pc]();
  pc += 1;
}