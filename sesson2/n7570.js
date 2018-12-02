// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n7570.txt').toString().split('\r\n');
var n = input[0]*1;
var stu = input[1].split(" ").map(Number);
var e = [];
var max = 0;
for(var i = 0;i<=n;i++){
  e[i]=0;
}
for(var i = 0;i<n;i++){
  e[stu[i]] = e[stu[i]-1]+1;
  max = max<e[stu[i]] ? e[stu[i]] : max;
}
console.log(n-max);
/*
줄 세우기

입력은 2 개의 줄로 이루어져 있다. 첫 줄에는 어린이 수를 나타내는 정수가 주어진다. 둘째 줄에는 처음에 줄서있는 어린이들의 번호가 차례대로 주어진다. 주어진 번호들 사이에는 공백이 하나씩 들어있다. 단, 어린이 수는 1이상 1,000,000이하의 정수로 제한되고, 어린이 수가 N이면 어린이들의 번호는 1부터 N까지의 정수이다.

입력에서 주어진 어린이들의 줄에 대해 번호순서대로 줄을 세우기 위해 제일 앞이나 제일 뒤로 보내는 어린이 수의 최솟값을 출력해야 한다.

*/