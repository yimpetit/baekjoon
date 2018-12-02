// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n7571.txt').toString().split('\r\n');
var size = input[0].split(' ').map(Number);
var dot = [];
var xArray = [];
var yArray = [];
var xTotal = 0;
var yTotal = 0;
var M = size[1];

for(var i=1;i<input.length;i++){
  dot.push(input[i].split(" ").map(Number));
}

for(var i=0;i<M;i++){
  var xPoint = dot[i][0];
  var yPoint = dot[i][1];
  
  xArray[i] = xPoint;
  yArray[i] = yPoint;
  
  xTotal += xPoint;
  yTotal += yPoint;
}

xArray.sort(function(a,b){
  return b - a;
});
yArray.sort(function(a,b){
  return b - a;
});

var xAverage = xArray[M / 2];
var yAverage = yArray[M / 2];
var transResult = 0;

for(var i=0;i<M;i++){
  transResult += Math.abs(xAverage - xArray[i]);
  transResult += Math.abs(yAverage - yArray[i]);
}

console.log(transResult);


/*
점 모으기

첫 줄에는 격자공간의 크기와 점들의 개수를 나타내는 두 정수 N과 M이 하나의 공백을 사이에 두고 주어진다.
다음의 M줄에는 각 줄마다 격자공간내의 점의 위치를 나타내는 두 개의 정수가 하나의 공백을 사이에 두고 주어진다.
단, N의 크기는 1이상 10,000이하이고, M의 크기는 1이상 100,000이하이다.

여러분은 모든 점들을 하나의 사각형으로 모을 때 드는 이동거리의 합의 최솟값을 출력해야 한다.

*/