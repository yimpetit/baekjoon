var fs = require('fs');
// var n = fs.readFileSync('n7.txt').toString().split(' ');
var n = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = n[0]*1;
var b = n[1]*1;
console.log(a+b);
