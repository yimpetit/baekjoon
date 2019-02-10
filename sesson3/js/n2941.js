 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n2941.txt').toString().trim();
var ca = ['c=','c-','dz=','d-','lj','nj','s=','z=','c'];
var il = input.length;
for(var i=0;i<8;i++){
  input = input.replace(ca[i],'■');
  if(il!=input.length){
    while(1){
      il=input.length;
      input = input.replace(ca[i],'■');
      if(il==input.length) break;
    }
  }
}
console.log(input.length);

/*
크로아티아 알파벳

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.
문제 설명에 나와있는 크로아티아 알파벳만 주어진다.

입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
*/