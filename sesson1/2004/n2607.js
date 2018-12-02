// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2607.txt').toString().split('\r\n');
var text = [];
for(var i=1;i<input.length;i++){
	text.push(input[i]);
}
var target = text[0].split('');
var answer = 0;
for(var i=1;i<text.length;i++){
	var check = 0;
	for(var j=0;j<target.length;j++){
		if(text[i].indexOf(target[j])>-1) check ++;
		console.log(check);
	}
	console.log("==================================");
	if((target.length == text[i].length || target.length-1 == text[i].length || target.length+1 == text[i].length) && check != 0){
		// console.log(check+" : "+text[i].length);
		if(check == text[i].length) answer++;
		else if(check + 1 == text[i].length) answer++;
		else if(check - 1 == text[i].length) answer++;
	}
}
// var test = text[1].indexOf(target[0]);
