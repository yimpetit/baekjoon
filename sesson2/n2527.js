// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2527.txt').toString().split('\r\n');

for(var i=0;i<input.length;i++){
  var sq = input[i].split(' ').map(Number);
  var x = sq[0]; var y = sq[1];
  var p = sq[2]; var q = sq[3];
  var x2 = sq[4]; var y2 = sq[5];
  var p2 = sq[6]; var q2 = sq[7];
  
  var answer = compare(x,p,x2,p2) * compare(y,q,y2,q2);
  switch(answer){
    case 0 : console.log('d'); break;
    case 1 : console.log('c'); break;
    case 2 : console.log('b'); break;
    case 4 : console.log('a'); break;
  }
}

function compare(a,b,c,d){
  if(b==c || a==d) return 1;
  else if (b<c|| d<a) return 0;
  else return 2;
}





/*
직사각형

4개의 줄로 이루어져 있다. 각 줄에는  8개의 정수가 하나의 공백을 두고 나타나는데,
첫 4개의 정수는 첫 번째 직사각형을, 나머지 4개의 정수는 두 번째 직사각형을 각각 나타낸다.
단 입력 직사각형의 좌표 값은 1이상 50,000 이하의 정수로 제한된다.  

4개의 각 줄에 주어진 두 직사각형의 공통부분을 조사해서 해당하는 코드 문자를 출력파일의 첫 4개의 줄에 각각 차례대로 출력해야 한다.

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>C++
#include <iostream>
#pragma warning(disable:4996)
using namespace std;

int compare (int a, int b, int c, int d) {
	if( b==c || a==d )
		return 1;
	else if(b<c || d<a) 
		return 0;
	else 
		return 2;
}

int main() {
#ifdef _DEBUG
	freopen("input.txt", "r", stdin);
#endif

	int T=4;
	int x,y,p,q,x_,y_,p_,q_;
	while(T--) {
		cin>>x>>y>>p>>q>>x_>>y_>>p_>>q_;
		switch( compare(x,p,x_,p_) * compare(y,q,y_,q_) ) {
		case 0:
			printf("d\n");
		break;
		case 1:
			printf("c\n");
		break;
		case 2:
			printf("b\n");
		break;
		case 4:
			printf("a\n");
		break;
		}
	}
}

*/