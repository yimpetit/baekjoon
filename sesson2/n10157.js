 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//let input = require('fs').readFileSync('n10157.txt').toString().split('\r\n');
var x = input[0].split(' ').map(Number)[0];
var y = input[0].split(' ').map(Number)[1];
var number = input[1]-1;
var map = [];
for(var i=y;i>=1;i--){
  var line = [];
  for(var j=1;j<=x;j++){
    line.push(j+" "+i);
  }
  map.push(line);
}
var lo_x = 0;
var lo_y = y-1;
var arw_x = [0,1,0,-1]; 
var arw_y = [-1,0,1,0];
var arw = 0;
//console.log(number);
while(number){
  
  if(arw==4) arw=0;
  //  console.log(lo_x+","+lo_y);
  map[lo_y][lo_x]=0;
  lo_x += arw_x[arw];
  lo_y += arw_y[arw];
  if(lo_x==0&&lo_y==0){
    arw++;
  }
  else if(lo_x==x-1&&lo_y==0){
    arw++;
  } 
  else if(lo_x==x-1&&lo_y==y-1){
    arw++;
  }
  if(map[lo_y+arw_y[arw]][lo_x+arw_x[arw]]==0) arw++;
  number --;
}
console.log(map[lo_y][lo_x] == undefined ? 0 : map[lo_y][lo_x]);
//console.log(map);



/*
자리배정
첫 줄에는 공연장의 격자 크기를 나타내는 정수 C와 R이 하나의 공백을 사이에 두고 차례대로 주어진다. 두 값의 범위는 5 ≤ C, R ≤ 1,000이다. 그 다음 줄에는 어떤 관객의 대기번호 K가 주어진다. 단 1 ≤ K ≤ 100,000,000이다.

입력으로 제시된 대기번호 K인 관객에게 배정될 좌석번호 (x,y)를 구해서 두 값, x와 y를 하나의 공백을 사이에 두고 출력해야 한다. 만일 모든 좌석이 배정되어 해당 대기번호의 관객에게 좌석을 배정할 수 없는 경우에는 0(숫자 영)을 출력해야 한다.
*/


/*
 map[lo_y][lo_x]='0 0';
  lo_x += arw_x;
  lo_y += arw_y;
  if(map[lo_y][lo_x]=='0 0'){
    
  }else{
    if(lo_x==0&&lo_y==0){
      arw_y=0;
      arw_x=1;
    }
    else if(lo_x==x-1&&lo_y==0){
      arw_y=1;
      arw_x=0;
    } 
    else if(lo_x==x-1&&lo_y==y-1){
      arw_y=0;
      arw_x=-1;
    }
  }
  console.log(lo_x+","+lo_y);

*/