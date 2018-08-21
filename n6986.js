// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n6986.txt').toString().split('\r\n');
var cut = input[0].split(" ")[1];
var score = [];
for(var i=1;i<input.length;i++){
	score.push(input[i]*1);
}
score.sort();
var answer = 0;
score.splice(0,cut);
score.splice(score.length-cut,cut);
for(var i=0;i<score.length;i++){
	answer += score[i];
}
answer = answer/score.length;
console.log(answer.toFixed(2));
answer = 0;
for(var i=0;i<cut;i++){
	score.unshift(score[0]);
	score.push(score[score.length-1]);
}
for(var i=0;i<score.length;i++){
	answer += score[i];
}
answer = answer/score.length;
console.log(answer.toFixed(2));
