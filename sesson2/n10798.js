// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n10798.txt').toString().split('\r\n');
var answer = '';
var max = 0;
for(var i = 0 ; i < input.length ; i++){
   input[i]=input[i].split("");
   if(input[i].length>max) max = input[i].length;
}
for(var i = 0 ; i < max ; i++){
  for(var j = 0 ; j < input.length ; j++){
    if(input[j][i]==undefined) input[j][i]='';
    answer += input[j][i];
  }
}
console.log(answer);


/*
  세로 읽기
  
  총 다섯줄의 입력이 주어진다. 각 줄에는 최소 1개, 최대 15개의 글자들이 빈칸 없이 연속으로 주어진다.
  주어지는 글자는 영어 대문자 ‘A’부터 ‘Z’, 영어 소문자 ‘a’부터 ‘z’, 숫자 ‘0’부터 ‘9’ 중 하나이다. 각 줄의 시작과 마지막에 빈칸은 없다.
  
  영석이가 세로로 읽은 순서대로 글자들을 출력한다. 이때, 글자들을 공백 없이 연속해서 출력한다. 
  
*/

