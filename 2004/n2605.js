// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2605.txt').toString().split('\r\n');
var arr = input[1].split(' ');
var answer = [];
console.log(arr);
for(var i = 1;i<=input[0];i++){
	answer.push(i); ////i 번호 입력
	console.log(answer);
	if(i!=1){ ///첫번째 학생 예외 처리
		answer.splice(i-arr[i-1]-1,0,i); ////i(현재순번)-arr[i-1](번호표 번호)-1만큼 i값을 삽입
		console.log(answer);
		answer.splice(i,1); ///맨 처음 삽입한 i값 제거
		console.log(answer);
	}
	console.log("============================");
}
console.log(answer.join(" ")); //결과 출력
