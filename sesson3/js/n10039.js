 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
//var input = require('fs').readFileSync('n10039.txt').toString().split('\r\n').map(Number);
var sum = 0;
for(var i=0;i<5;i++){
  if(input[i]<40) input[i]=40;
  sum += input[i];
}
console.log(sum/5);





/*
  평균점수
  첫째 줄에 학생 5명의 평균 점수를 출력한다.
*/