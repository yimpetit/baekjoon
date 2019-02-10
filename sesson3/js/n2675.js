 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('n2675.txt').toString().split('\r\n');
var n = input[0];
for(var i=1;i<=n;i++){
  var data = input[i].split(' ');
  var repeat = data[0]*1;
  var text = data[1].split('');
  var answer = '';
  for(var j=0;j<text.length;j++){
    for(var k=0;k<repeat;k++){
      answer += text[j];
      if(text[j]=='%') answer += text[j];
    }
  }
  console.log(answer);
}

/*
문자열 반복
node에서 %를 한번씩 출력하는 경우가 있어서 %가 나올시 한번 더 추가


*/