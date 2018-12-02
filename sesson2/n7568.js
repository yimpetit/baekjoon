// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n7568.txt').toString().split('\r\n');
var n = input[0]*1;
var info = [];
var answer = [];
for(var i = 1;i<=n;i++){
  var val=input[i].split(" ").map(Number);
  info.push([val[0],val[1],i]);
}

for(var i=0;i<n;i++){
  var target = info[i];
  var rank = 1;
  for(var j=0;j<n;j++){
    if(target[2]==j+1) continue;
    else{
      if(target[0]<info[j][0] && target[1]<info[j][1]) rank++;
    }
  }
  answer.push(rank);
}
console.log(answer.join(" "));


/*
덩치

첫 줄에는 전체 사람의 수 N이 주어진다. 그리고 이어지는 N개의 줄에는 각 사람의 몸무게와 키를 나타내는 양의 정수 x와 y가 하나의 공백을 두고 각각 나타난다. 단, 2 ≤ N ≤ 50, 10 ≤ x,y ≤ 200 이다.

여러분은 입력에 나열된 사람의 덩치 등수를 구해서 그 순서대로 첫 줄에 출력해야 한다. 단 각 덩치 등수는 공백문자로 분리되어야 한다
*/



/*

for(var i = 1;i<=n;i++){
  var val=input[i].split(" ").map(Number);
  info.push([val[0],val[1],i]);
}
var a = info.sort(function(a,b){
  return b[0]-a[0];
});
for(var i=0;i<n;i++){
  console.log(i);
}
console.log(a);


*/