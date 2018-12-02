var fs = require('fs');
// var n = fs.readFileSync('n4.txt').toString().split(' ');
var n = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log((n[0]*1)/(n[1]*1));
