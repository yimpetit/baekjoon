 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('n2775.txt').toString().split('\r\n');
var tcn = input[0]*1;
for(var i=1;i<=tcn*2;i+=2){
  var k=input[i]*1;
  var n=input[i+1]*1;
  var list = [];
  for(var j=0;j<=k;j++){
    var sum = 0;
    for(var l=1;l<=n;l++){
      if(j==0) list.push(l);
      else{
        sum += list[(j-1)*n+l-1];
        list.push(sum);
      }
    }
  }
  console.log(list[list.length-1]);
}




/*
부녀회장이 될테야

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.
단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

첫 번째 줄에 Test case의 수 T가 주어진다.
그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다.
(1 <= k <= 14, 1 <= n <= 14)

각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.
*/