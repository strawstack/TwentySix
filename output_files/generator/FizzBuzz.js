const readlineSync = require('readline-sync');
let pc = 0;
let a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = w = 0;
let x = y = [];
let z = {};
let names = {
  "loop": 0,
  "fizzbuzz": 6,
  "fizz": 8,
  "buzz": 10,
  "end": 11,
};
let resolveName = (x) => names[x];
let lines = [
  () => {a = a + 1}, // 0
  () => {if((a % 15) == 0){pc = resolveName("fizzbuzz") - 1}}, // 1
  () => {if((a % 5) == 0){pc = resolveName("fizz") - 1}}, // 2
  () => {if((a % 3) == 0){pc = resolveName("buzz") - 1}}, // 3
  () => {console.log(a)}, // 4
  () => {pc = resolveName("end") - 1}, // 5
  () => {console.log("fizzbuzz")}, // 6
  () => {pc = resolveName("end") - 1}, // 7
  () => {console.log("fizz")}, // 8
  () => {pc = resolveName("end") - 1}, // 9
  () => {console.log("buzz")}, // 10
  () => {if(a == 101){process.exit()}}, // 11
  () => {pc = resolveName("loop") - 1}, // 12
];
while (pc < lines.length) {
  lines[pc]();
  pc += 1;
}