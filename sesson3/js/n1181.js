var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n1181.txt').toString().split('\r\n');
var tcn = input[0]*1;
var list = [];
for(var i=1;i<=tcn;i++){
  list.push(input[i]);
}
list.sort(function(a,b){
  if(a.length == b.length){
    return a < b ? -1 : a > b ? 1 : 0;
  }
  return a.length-b.length
});
for(var i=0;i<tcn;i++){
  if(i!=0){
    if(list[i]!=list[i-1]) console.log(list[i]);
  }
  else console.log(list[i]);
}