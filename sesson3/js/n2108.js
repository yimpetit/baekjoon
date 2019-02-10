var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n2018.txt').toString().split('\r\n');
var tcn = input[0]*1;
var list = [];
var count = {};
var count2 = [];
var sum = 0;
for(var i=1;i<=tcn;i++){
  list.push(input[i]*1);
  if(count[input[i]*1] == undefined) count[input[i]*1] = 0;
  count[input[i]*1] ++;
  sum += input[i]*1;
}
list.sort(function(a,b){
  return a-b;
});
for(key in count){
  count2.push([key*1,count[key]]);
}
count2.sort(function(a,b){
  if(a[1] === b[1]){
    var x = a[0], y = b[0];
    return x - y;
  }
  return b[1]-a[1];
});
console.log(Math.round(sum/tcn));
console.log(list[parseInt(tcn/2)]);
if(tcn==1){
  console.log(list[0]);
}else{
  if(count2[0][1]==count2[1][1]) console.log(count2[1][0])
  else console.log(count2[0][0]);
}
console.log(list[list.length-1]-list[0]);
