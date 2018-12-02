// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2606_2.txt').toString().split('\r\n');
var arr = input[1].split(' ');
var computer = input[0];
var network = [];
var start = '1';
var infection = [];
var count = 0;
for(var i=2;i<input.length;i++){
	network.push(input[i].split(" "));
}
console.log(network);
for(var i=0;i<network.length;i++){
	var test = infFound(network[i]);
	if(test){ ///감염된 컴퓨터가 색출 될때마다 카운트
		count ++;
		i=-1;
	}
}
function infFound(arr){
	var a = arr[0];
	var b = arr[1];
	if(arr.indexOf(start)>-1&&count==0){ ///배열중에 처음감염된컴퓨터가 있고 아직 감염된컴퓨터가 검색이 되어있지 않았을 경우 감염된 컴퓨터 배열에 삽입
		infection.push(a,b);
		return true;
	}
	if(infection.indexOf(a)>-1&&infection.indexOf(b)==-1){ ///둘중에 하나가 감염이 되었다면 감염될 컴퓨터를 색출
		infection.push(b);
		return true;
	}
	else if(infection.indexOf(b)>-1&&infection.indexOf(a)==-1){ ///둘중에 하나가 감염이 되었다면 감염될 컴퓨터를 색출
		infection.push(a);
		return true;
	}
	else return false;
}
console.log(infection.length-1);
