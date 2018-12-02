// var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var input = require('fs').readFileSync('n2526.txt').toString().split(' ');
var N = input[0]*1;
var P = input[1]*1;
var answer = [];
var answer2 = [];
var map = [];
var cal = N;
var i = 0;
while(1){
  cal = cal*N;
  cal = cal%P;
  if(map[cal] != 2) {
    answer.push(cal);
    if(map[cal] == undefined) map[cal] = 0;
    map[cal] += 1;
    if(map[cal] == 2) answer2.push(cal);
    
  }
  else break;
  
  
}

console.log(answer2.length);



/*
싸이클
첫째 줄에 처음 시작하는  N과 P가 공백을 사이에 두고 주어진다. 단, 1<=N<=1,000, 2<=P<=97이다.  

첫째 줄에 반복되는 부분에 포함된 서로 다른 숫자의 개수를 출력한다.
*/