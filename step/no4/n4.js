var fs = require('fs');
// var input = fs.readFileSync('n4.txt').toString().split("\r\n");
var input = fs.readFileSync('/dev/stdin').toString().split("\n");
var numbers = input[1].split(" ").sort(function(a,b){
  return b-a;
});
var max = numbers[0]*1;
var answer = 0;
for(var i=0;i<numbers.length;i++){
  var n = numbers[i]*1;
  answer += n/max*100;
}
console.log((answer/numbers.length).toFixed(2));
