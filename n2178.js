// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2178.txt').toString().split('\r\n');
var map = []; ///맵 저장
var arrX = [1,-1,0,0]; ///x좌표 동서남북
var arrY = [0,0,1,-1]; ///y좌표 동서남북
for(var i=1;i<input.length;i++){
	map.push(input[i].split(""));
}

var target = [input[0].split(" ")[1],input[0].split(" ")[0]]; //목표 좌표 저장
var queue = [[0,0]]; // 미로 시작지점
var result = 1; //결과갑 출력 시작지점 포함이므로 먼저 1을 넣어줌
var out = false; //while문 break를 위한 상태 값
map[0][0] = '2'; ///맵 시작지점 방문 처리

while(1){ /// 목표로 도달할때 까지 무한 루프
	var q_length = queue.length; // 큐의 길이 만큼 for문 돌리기 위한 변수
 	for(var i=0;i<q_length;i++){
		var x = queue[0][0];
		var y = queue[0][1];	//현재 위치
		queue.shift(); // 큐의 앞배열 제거 (위에 현재 위치값을 변수로 저장 하였기 때문에 다음 큐 검사를 위해 배열의 앞 요소를 제거함);
		if(x==target[0]-1 && y==target[1]-1){ //목표지점 도달시 while 종료
			console.log(result); //결과 값 출력
			out = true;
			break;
		}
		for(var j=0;j<4;j++){ ///위에 저장한 방향
			var nx = x+arrX[j];
			var ny = y+arrY[j]; //현재 위치에서 방향값을 더해 탐색할 방향을 결정
			if(nx<0||nx>=target[0]||ny<0||ny>=target[1]) continue; //맵의 최소 최대 지점을 검사
			if(map[ny][nx]==0 || map[ny][nx]==2) continue; //벽이나 방문한 길을 검사
			map[ny][nx] = '2'; //위 조건을 모두 통과하면 해당 위치 방문 처리
			queue.push([nx,ny]); //다음 검사를 위해 큐에 해당 위치 삽입
		}
	}
	if(out) break;
	else result++; ///결과값 카운트
}
