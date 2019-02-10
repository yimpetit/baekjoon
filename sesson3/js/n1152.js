// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = require('fs').readFileSync('n1152.txt').toString();
input = input.trim().split(" ");
if(input[0]=='') console.log(0);
else console.log(input.length);
/*글자 개수 구하기*/