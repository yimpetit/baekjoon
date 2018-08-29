// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2514.txt').toString().split('\r\n');
var output = input[0];
var count = input[1];
var map = [];
var answer = [];
for(var i=2;i<10;i++){
	map.push(input[i].split(" "));
}
/*
for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		map[i][j]-=output;
	}
}
*/
console.log(map);
console.log("========================================");
for(var i=0;i<8;i++){
	var group = [];
	for(var j=0;j<8;j++){
		var target = 0;
		for(var k=0;k<8;k++){
				target += map[k][j]*1;
				target += map[i][k]*1;
		}
		target -= map[i][j];
		if(target==0) target =".";
		/*
		if(target>10) target = "+";
		else if(target<-10) target = "-";
		else target = ".";
		*/
		group.push(target);
	}
	answer.push(group);
}
console.log(answer);
