var fs = require('fs');
// var n = fs.readFileSync('n7.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString().split('\n');
for(var i=0;i<n.length;i++){
  console.log(n[i]);
}
