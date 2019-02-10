 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n1157.txt').toString().trim();
var list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var answer = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ls = [];
input = input.toUpperCase();
for(var i=0;i<input.length;i++){
  answer[list.indexOf(input[i])] ++;
}
for(var i=0;i<26;i++){
  ls.push(answer[i]);
}
ls.sort(function(a,b){
  return b-a;
});
if(ls[0]==ls[1]){
  console.log("?");
}else{
  var inx=0;
  var max=0;
  for(var i=0;i<26;i++){
    if(max<answer[i]){
      max=answer[i];
      inx=i;
    }
  }
 console.log(list[inx]);
}

/*
단어공부

첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
*/