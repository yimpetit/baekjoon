// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
var input = require('fs').readFileSync('n2577.txt').toString().split('\r\n').map(Number);
input = input[0]*input[1]*input[2]+'';
input = input.split('').map(Number);
var answer = [0,0,0,0,0,0,0,0,0,0];
for(var i=0;i<input.length;i++){
  answer[input[i]] ++;
}
for(var i=0;i<10;i++){
  console.log(answer[i]);
}
/*숫자의 개수*/