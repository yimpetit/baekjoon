var input = require('fs').readFileSync('sosu.txt').toString().split(" ");
var a = input[0]*1;
var b = input[1]*1;
input = input*1;
var answer = [];
for(var i=1;i<input;i++){
	var what = [];
	for(var j=1;j<=i;j++){
		if(i%j==0) what.push(j);
	}
	if(what.length<=2) answer.push(i);
}

console.log(answer);
