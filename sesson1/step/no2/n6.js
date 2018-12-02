var fs = require('fs');
// var n = fs.readFileSync('n5.txt').toString().split(' ');
var n = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log((n[0]*1)+(n[1]*1));
console.log((n[0]*1)-(n[1]*1));
console.log((n[0]*1)*(n[1]*1));
console.log(Math.floor((n[0]*1)/(n[1]*1)));
console.log((n[0]*1)%(n[1]*1));
