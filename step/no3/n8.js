var fs = require('fs');
// var n = fs.readFileSync('n8.txt').toString().split(' ');
var n = fs.readFileSync('/dev/stdin').toString().split(' ');
var nm = n[0]*1;
var tday = n[1]*1;
var week = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
var m31 = [1,3,5,7,8,10,12];
var m30 = [4,6,9,11];
var m28 = [2];
for(var i=1;i<nm;i++){
  if(m31.indexOf(i)>-1) tday += 31;
  else if(m30.indexOf(i)>-1) tday += 30;
  else tday += 28;
}
console.log(week[tday%7==0 ? week.length-1 : (tday%7)-1]);
