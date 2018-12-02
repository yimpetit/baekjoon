// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2529.txt').toString().split('\r\n');
var k = input[0]*1;
var input = input[1].split(' ');
var visited = [];
var list = [];

for(var i = 0;i<=9;i++){
  visited[i] = true;
  dfs(i, 0, i + "");
}
console.log(list[list.length-1]);
console.log(list[0]);
function dfs(v, cnt, str){
  if(cnt == k){
    list.push(str);
  } else {
      for (var i = 0; i <= 9; i++) {
          if (!visited[i]) {
              if (input[cnt] == "<") {
                  if (v >= i) {
                      continue;
                  }
              } else {
                  if (v <= i) {
                      continue;
                  }
              }
              visited[i] = true;
              dfs(i, cnt + 1, str + i);
          }
      }
  }
  visited[v] = false;
}



/*
부등호

첫 줄에 부등호 문자의 개수를 나타내는 정수 k가 주어진다. 그 다음 줄에는 k개의 부등호 기호가 하나의 공백을 두고 한 줄에 모두 제시된다. k의 범위는 2<=k<=9 이다. 

여러분은 제시된 부등호 관계를 만족하는 k+1 자리의 최대, 최소 정수를 첫째 줄과 둘째 줄에 각각 출력해야 한다.
단 아래 예(1)과 같이 첫 자리가 0인 경우도 정수에 포함되어야 한다.
모든 입력에 답은 항상 존재하며 출력 정수는 하나의 문자열이 되도록 해야 한다.
*/