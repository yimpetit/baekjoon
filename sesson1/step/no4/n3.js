var fs = require('fs');
// var input = fs.readFileSync('n3.txt').toString().split("\r\n");
var input = fs.readFileSync('/dev/stdin').toString().split("\n");
var nx=input[0].split(" ");
var numbers = input[1].split(" ");
var answer = [];
for(var i=0;i<numbers.length;i++){
  if(numbers[i]*1<nx[1]*1){
    answer.push(numbers[i]);
  }
}
console.log(answer.join(" "));
