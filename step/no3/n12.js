var fs = require('fs');
var input = fs.readFileSync('n12.txt').toString().split("\r\n");
// var input = fs.readFileSync('/dev/stdin').toString().split("\n");
var value = [];
var answer = '';
for(var i=1;i<input.length;i++){
  value.push(input[i].split(" "));
}
for(var i=0;i<value.length;i++){
  answer += (value[i][0]*1)+(value[i][1]*1);
  if(i!=value.length-1) answer += '\n';
}
console.log(answer);
