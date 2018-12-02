// var input = require('fs').readFileSync('/dev/stdin').toString().split('');
var input = require('fs').readFileSync('n10799.txt').toString().split('');
var stack = [];
var answer = 0;
for(var i=0;i<input.length;i++){
  if(input[i]=='(') stack.push(i);
  else if(input[i]==')'){
    var last = stack[stack.length -1];
    if(i - last == 1){
      stack.pop();
      answer += stack.length;
    }else{
      stack.pop();
      answer ++;
    }
  }
}
console.log(answer);

/*
  쇠막대기
  
  한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 개수는 최대 100,000이다. 

  잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.
  
*/

