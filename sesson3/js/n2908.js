 var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
//var input = require('fs').readFileSync('n2908.txt').toString().trim().split(' ');
var a=input[0].split('').reverse().join('');
var b=input[1].split('').reverse().join('');
if(a*1>b*1) console.log(a);
else console.log(b);

/*
상수
첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.
첫째 줄에 상수의 대답을 출력한다.
*/