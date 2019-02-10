 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('n6064.txt').toString().split('\r\n');
var tcn = input[0]*1;
for(var i=1;i<=tcn;i++){
  var data = input[i].split(" ").map(Number);
  var m = data[0];
  var n = data[1];
  var x = data[2];
  var y = data[3];
  var mm = lcm(m,n);
  while(x!=y&&x<=mm){
    if(x<y) x+=m;
    else y+=n;
  }
  if(x!=y) console.log('-1');
  else console.log(x);
}
function lcm(m,n){
  var z,a,b;
  a=m; b=n;
  while(true){
    z = a%b;
    if(z==0) break;
    a=b; b=z;
  }
  return (m*n)/b;
}

/*
카잉 달력 

예를 들어, M = 10 이고 N = 12라고 하자.
첫 번째 해는 <1:1>로 표현되고, 11번째 해는 <1:11>로 표현된다.
<3:1>은 13번째 해를 나타내고, <10:12>는 마지막인 60번째 해를 나타낸다. 
네 개의 정수 M, N, x와 y가 주어질 때,
<M:N>이 카잉 달력의 마지막 해라고 하면 <x:y>는 몇 번째 해를 나타내는지 구하는 프로그램을 작성하라. 

입력 데이터는 표준 입력을 사용한다.
입력은 T개의 테스트 데이터로 구성된다.
입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다.
각 테스트 데이터는 한 줄로 구성된다. 각 줄에는 네 개의 정수 M, N, x와 y가 주어진다.
(1 ≤ M, N ≤ 40,000, 1 ≤ x ≤ M, 1 ≤ y ≤ N) 여기서 <M:N>은 카잉 달력의 마지막 해를 나타낸다.

출력은 표준 출력을 사용한다. 각 테스트 데이터에 대해, 정수 k를 한 줄에 출력한다.
여기서 k는 <x:y>가 k번째 해를 나타내는 것을 의미한다. 만일 <x:y>에 의해 표현되는 해가 없다면,
즉, <x:y>가 유효하지 않은 표현이면, -1을 출력한다.
*/