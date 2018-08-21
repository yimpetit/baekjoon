var fs = require('fs');
// var n = fs.readFileSync('st_1.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log((n[0]*1)-(n[1]*1));
