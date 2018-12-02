// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2455.txt').toString().split('\r\n');
var list = [];
var answer = 0;

for(var i=0;i<4;i++){
  var data = input[i].split(' ').map(Number);
  var In = data[1];
  var Out = data[0];
  answer = answer + In;
  answer = answer - Out;
  list.push(answer);
}
list.sort();
console.log(list[3]);

/*
지능형 기차

각 역에서 내린 사람 수와 탄 사람 수가 빈칸을 사이에 두고 첫째 줄부터 넷째 줄까지 역 순서대로 한 줄에 하나씩 주어진다. 

첫째 줄에 최대 사람 수를 출력한다.  
*/