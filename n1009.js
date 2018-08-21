// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n1009.txt').toString().split('\r\n');
var number = [];
for(var i=1;i<input.length;i++){
	number.push(input[i].split(" "));
}
for(var i=0;i<number.length;i++){
	var a = number[i][0]%10;
	var b = number[i][1]%4 == 0 ? 3 : number[i][1]%4-1;
	var answer = 0;
	if(a == 1) answer = 1;
	else if(a == 0) answer = 10;
	else{
		answer = temp[a-1][b];
	}
	console.log(answer);
}

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var count = parseInt(input[0]);

var base;
var current;
var exp;

for (var i = 0; i<count; i++) {
    base = parseInt(input[i+1].split(' ')[0]);
    current = 1;
    exp = parseInt(input[i+1].split(' ')[1]);

    for (var j = 0; j<exp; j++) {
        current = (current*base)%10;
        if (current==0) break;
    }
    current%=10;
    if (current == 0) current = 10;
    console.log(current);
}
