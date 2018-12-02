// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('n10797.txt').toString().split('\r\n');
var day = input[0]*1;
var cars = input[1].split(" ").map(Number);
var answer = 0;
while(1){
  var ci = cars.indexOf(day);
  if(ci > -1){
    cars.splice(ci,1);
    answer++;
  }else break;
}
console.log(answer);
//////////// 자동차 번호 날짜 비교 해서 구하는거



