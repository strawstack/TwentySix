const readlineSync = require('readline-sync');
let pc = 0;
let a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = 0;
let x = y = [];
let z = {};
let names = {
  "isprime": 2,
  "loop": 5,
  "false": 9,
  "true": 11,
};
let resolveName = (x) => names[x];
let lines = [
  () => {console.log("Input a number:")}, // 0
  () => {p = readlineSync.question('')}, // 1
  () => {a = Math.sqrt(p) + 1}, // 2
  () => {b = 2}, // 3
  () => {if((p < 2)){pc = resolveName("false") - 1}}, // 4
  () => {if((a < b)){pc = resolveName("true") - 1}}, // 5
  () => {if((p % b) == 0){pc = resolveName("false") - 1}}, // 6
  () => {b = b + 1}, // 7
  () => {pc = resolveName("loop") - 1}, // 8
  () => {console.log((p.toString() + " is not prime".toString()))}, // 9
  () => {process.exit()}, // 10
  () => {console.log((p.toString() + " is prime".toString()))}, // 11
];
while (pc < lines.length) {
  lines[pc]();
  pc += 1;
}