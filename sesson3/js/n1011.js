 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('n1011.txt').toString().split('\r\n');
var n = input[0]*1;
for(var i=1;i<=n;i++){
  var data = input[i].split(" ").map(Number);
  var dis = data[1]-data[0];
  var pos = 1;
  var answer = 1;
  for(var j = 2; pos<dis;j++){
    pos += parseInt(j/2);
    answer ++;  
  }
  if(pos>dis) answer --;
  console.log(answer);
}


/*
  Fly me to the Alpha Centauri
  
  김우현을 위해 x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 최솟값을 구하는 프로그램을 작성하라.

  입력의 첫 줄에는 테스트케이스의 개수 T가 주어진다. 각각의 테스트 케이스에 대해 현재 위치 x 와 목표 위치 y 가 정수로 주어지며,
  x는 항상 y보다 작은 값을 갖는다. ( 0 ≤ x < y < 231)

  각 테스트 케이스에 대해 x지점으로부터 y지점까지 정확히 도달하는데 필요한 최소한의 공간이동 장치 작동 회수를 출력한다.
*/