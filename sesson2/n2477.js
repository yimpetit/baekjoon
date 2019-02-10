// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2477.txt').toString().split('\r\n');
var n = input[0]*1;
var a=0,b=0,c=0,d=0;
var ci=0,di=0;
for(var i = 1;i<=6;i++){
  var data = input[i].split(' ').map(Number);
  if(data[0]==3||data[0]==4){
    if(a<data[1]){
      a = data[1];
      ci = i+3;
      di = i+4;
    } 
  }
  if(data[0]==1||data[0]==2){
    if(b<data[1]) b = data[1];
  }
}
ci = ci > 6 ? ci%6 : ci;
di = di > 6 ? di%6 : di;
c=input[ci].split(' ')[1];
d=input[di].split(' ')[1];
var answer = (a*b) - (c*d);
console.log(answer*n);