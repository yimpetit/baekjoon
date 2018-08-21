var fs = require('fs');
// var n = fs.readFileSync('n10.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString().split('\n');
var total = n[1].split('');
var answer = 0;
for(var i=0;i<total.length;i++){
  answer += total[i]*1;
}
console.log(answer);
