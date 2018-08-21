// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('st_2.txt').toString().split('\r\n');
var joiner = [];
for(var i=1;i<input.length;i++){
	joiner.push(input[i].split(" "));
}
joiner.sort().reverse();
var answer=joiner[4][0];
var count = 0;
for(var i=4;i<joiner.length;i++){
	if(joiner[i][0]!=answer){
		 break;
	}else{
		count ++;
	}
}
console.log(count-1);
