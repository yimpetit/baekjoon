//var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
var input = require('fs').readFileSync('../txt/n1929.txt').toString().trim().split(' ');
var a = input[0]*1;
var b = input[1]*1;
var list = [1,1];
for(var i=2;i<=b;i++){
  for(var j=2; i*j <=b;j++){
    list[i*j] = 1;
  }
}

for(var i=a;i<=b;i++){
  if(list[i]!=1) console.log(i);
}

/*
소수 구하기 


문제 
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력 
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000)

출력 
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
*/