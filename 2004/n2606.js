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
for(var i=0;i<network.length;i++){
	var test = infFound(network[i]);
	if(test){
		count ++;
		i=-1;
	}
}
function infFound(arr){
	// console.log(arr);
	var a = arr[0];
	var b = arr[1];
	if(arr.indexOf(start)>-1&&count==0){
		infection.push(a,b);
		return true;
	}
	if(infection.indexOf(a)>-1&&infection.indexOf(b)==-1){
		infection.push(b);
		return true;
	}
	else if(infection.indexOf(b)>-1&&infection.indexOf(a)==-1){
		infection.push(a);
		return true;
	}
	else return false;
}
console.log(infection.length-1);
