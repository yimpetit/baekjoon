// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n6987.txt').toString().split('\r\n');
var table = [];
var n=6;
var m=15;
var win=[0,0,0,0,0,0];
var lose=[0,0,0,0,0,0];
var draw=[0,0,0,0,0,0];
var genWin=[0,0,0,0,0,0];
var genLose=[0,0,0,0,0,0];
var genDraw=[0,0,0,0,0,0];
var gen=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var feasibility;
var answer = [];

function recur(cnt){
	if(cnt == m){
		feasibility = true;
		return;
	}
	var n1 = p1[cnt];
	var n2 = p2[cnt];
	genWin[n1]++;
	genLose[n2]++;
	if(genWin[n1]<=win[n1] && genLose[n2]<=lose[n2]) recur(cnt+1);
	genWin[n1]--;
	genLose[n2]--;
	genDraw[n1]++;
	genDraw[n2]++;
	if(genDraw[n1]<=draw[n1] && genDraw[n2]<=draw[n2]) recur(cnt+1);
	genDraw[n1]--;
	genDraw[n2]--;
	genLose[n1]++;
	genWin[n2]++;
	if(genLose[n1]<=lose[n1] && genWin[n2]<=win[n2]) recur(cnt+1);
	genLose[n1]--;
	genWin[n2]--;
	
}
function process(){
	var i,j,cnt=0;
	feasibility = false;
	for(i=0;i<n;i++){
		genWin[i]=0;
		genLose[i]=0;
		genDraw[i]=0;
		if(win[i]+lose[i]+draw[i]!=n-1) return;
	}
	for(i=0;i<n;i++){
		for(j=i+1;j<n;j++){
			p1[cnt]=i;
			p2[cnt]=j;
			cnt++;
		}
		recur(0);
	}
}

for(var loop=0;loop<4;loop++){
	input[loop]=input[loop].split(" ");
	for(var i=0;i<n;i++){
		win[i] = input[loop][i*3]*1;
		draw[i] = input[loop][((i+1)*3)-2]*1;
		lose[i] = input[loop][((i+1)*3)-1]*1;
	}
	process();
	if(feasibility) answer.push(1);
	else answer.push(0);
}
console.log(answer.join(" "));






/*
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
*/
//////월드컵문제