// var data = require('fs').readFileSync('/dev/stdin').toString().split('');
var data = require('fs').readFileSync('n7567.txt').toString().split('');
var n = data.length;
var answer = 0;
for(var i=0;i<n;i++){
  console.log(i);
  var state = data[i];
  if(i==0) answer += 10;
  else{
    if(data[i]==state) answer += 5;
    else answer += 10;
  }
  console.log(answer);
}
//console.log(answer);

s=require('fs').readFileSync('/dev/stdin')+'';h=0;for(i=0;i<s.length-1;)h+=s[i]==s[++i]?5:10;console.log(h)
/*
그릇

첫 줄에는 괄호문자로만 이루어진 문자열이 주어진다. 입력 문자열에서 열린 괄호 ‘(’은 바로 놓인 그릇, 닫힌 괄호 ‘)’은 거꾸로 놓인 그릇을 나타난다. 문자열의 길이는 3이상 50 이하이다.

여러분은 그릇 방향이 괄호 문자로 표시된 문자열을 읽어서 그 최종의 높이를 정수로 출력해야 한다.


*/