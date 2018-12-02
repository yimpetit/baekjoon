 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('n10158.txt').toString().split('\r\n');
var map_xy = input[0].split(" ").map(Number);
var lo_xy = input[1].split(" ").map(Number);
var time = input[2]*1;
var mx = map_xy[0];
var my = map_xy[1];
var lo_x = lo_xy[0];
var lo_y = lo_xy[1];
var arw_x = 1;
var arw_y = 1;

while(time){
  if(lo_x==mx) arw_x = -1;
  if(lo_y == my) arw_y = -1;
  if(lo_x == 0) arw_x = 1;
  if(lo_y == 0) arw_y = 1;
  lo_x += arw_x;
  lo_y += arw_y;
  time--;
}
console.log(lo_x+" "+lo_y);

/*
개미
첫줄에는 w와 h가 공백을 사이에 두고 주어진다. 그 다음 줄에는 초기 위치의 좌표값 p와 q가 공백을 사이에 두고 주어진다. 3번째 줄에는 개미가 움직일 시간 t가 주어진다. 

출력은 t 시간 후에 개미의 위치 좌표 (x,y)의 값 x와 y를 공백을 사이에 두고 출력한다. 
*/