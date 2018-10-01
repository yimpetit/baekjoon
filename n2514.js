// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2514.txt').toString().split('\r\n');
var output = input[0];
var count = input[1];
var map = [];
var answer = [];
var r=[0,0,0,0,0,0,0,0],c=[0,0,0,0,0,0,0,0];
var rm=[0,0,0,0,0,0,0,0],cm=[0,0,0,0,0,0,0,0];
var sum=0;
for(var i=2;i<10;i++){
	map.push(input[i].split(" "));
	answer.push([0,0,0,0,0,0,0,0]);
}
for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		map[i][j]-=output;
	}
}
for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		r[i]+=map[i][j];
		c[j]+=map[i][j];
	}
}
for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		sum=r[i]+c[j]-map[i][j];
		if(sum%2){
			answer[i][j]=1;
			rm[i]++;
			cm[j]++;
		}
	}
}

for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		map[i][j]-=rm[i]+cm[j]-answer[i][j];
	}
}
for(var i=0;i<8;i++) r[i]=c[i]=0;
for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		r[i]+=map[i][j];
		c[j]+=map[i][j];
	}
}

for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		sum=r[i]+c[j]-map[i][j];
		if(sum%4){
			answer[i][j]=2;
		}
	}
}
for(var i=0;i<8;i++){
	for(var j=0;j<8;j++){
		if(answer[i][j]==0) answer[i][j]=".";
		if(answer[i][j]==1) answer[i][j]="+";
		if(answer[i][j]==2) answer[i][j]="-";
	}
	console.log(answer[i].join(" "));
}
// console.log(answer);

// console.log(map);
// console.log(answer);
// console.log("========================================");

