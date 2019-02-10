// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
var input = require('fs').readFileSync('n2475.txt').toString().split(' ').map(Number);
var answer = 0;
for(var i=0;i<5;i++){
  var a = input[i];
  answer += a * a;
}
console.log(answer%10);