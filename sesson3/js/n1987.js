var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n1987.txt').toString().split('\r\n');
var tcn = input[0]*1;
var tc = input[1].split(' ').map(Number);
var cnt = 0;
for(var i=0;i<tcn;i++){
  if(sosu(tc[i])) cnt ++;
}
console.log(cnt);
console.log(sosu(1));
function sosu(a){
  for(var i=2 ; i < a ; i++){
   if(a%i == 0) return false;
  }
  if(a==1) return false;
  else return true;
}


/*
소수 찾기 

문제 
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력 
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력 
주어진 수들 중 소수의 개수를 출력한다.
*/