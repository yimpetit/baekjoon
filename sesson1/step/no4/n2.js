var fs = require('fs');
// var input = fs.readFileSync('n2.txt').toString().split(" ");
var input = fs.readFileSync('/dev/stdin').toString().split(" ");
input = input.sort(function(a,b){
  return b - a;
});
console.log(input[1]);
