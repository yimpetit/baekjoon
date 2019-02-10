var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n2750.txt').toString().split('\r\n');
var n=input[0]*1;
var v=0;
var cnt = [];
for(var i=0;i<=10001;i++) cnt.push(0);
for(var i=1;i<=n;i++){  
  cnt[input[i]]++;
}
for(var i=1;i<=10000;i++){
  if(cnt[i]>0){
    for(var j=0;j<cnt[i];j++){
      console.log(i);
    }
  }
}



/*
수 정렬하기 

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
*/