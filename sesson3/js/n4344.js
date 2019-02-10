// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n4344.txt').toString().split('\r\n');
var n=input[0]*1;
for(var i=1;i<=n;i++){
  var data=input[i].split(' ').map(Number);
  var stu=data[0];
  var sum=0;
  for(var j=1;j<=stu;j++){
    sum +=data[j];
  }
  var aver = sum / stu;
  var count = 0;
  for(var j=1;j<=stu;j++){
    if(data[j]>aver) count++;
  }
  var answer = count / stu * 100;
  console.log(answer.toFixed(3)+"%");
}







/*
평균은 넘겠지

첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고,
이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
*/
