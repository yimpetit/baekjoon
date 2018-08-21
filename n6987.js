// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n6987.txt').toString().split('\r\n');
var table = [];
for(var i=0;i<input.length;i++){
	input[i] = input[i].split(" ");
	var win=0;
	var lose=0;
	var draw=[];
	for(var j=0;j<input[i].length;j+=3){
		win += input[i][j]*1;
		lose += input[i][j+2]*1;
		draw.push(input[i][j+1]);
	}
	console.log(win);
	console.log(lose);
	console.log(draw);
	if(win!=lose) console.log(0);
	console.log("==================================");
}
