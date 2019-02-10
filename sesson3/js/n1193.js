 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n1193.txt').toString().trim();
input = input*1;
var i=1;
var n=1;
var list = [];
if(input == 1) console.log("1/1");
else{
  while(1){
    i++;
    for(var j=0;j<i;j++){
      n++;
      if(i%2==0){
        list.push((j+1)+"/"+(i-j));
      }else{
        list.push((i-j)+"/"+(j+1));
      }
      if(n>=input) break;
    }
    if(n>=input) break;
  }
  console.log(list[list.length-1]);
}

/*
분수찾기

이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.

첫째 줄에 분수를 출력한다.
*/