 var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
//var input = require('fs').readFileSync('n10156.txt').toString().split(' ').map(Number);
var snack = input[0];
var n = input[1];
var m = input[2];
var answer = (snack * n) - m;
console.log(answer < 0 ? 0 : answer);

/*과자 문제*/