var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n10845.txt').toString().split('\r\n');
var tcn = input[0]*1;
var que = [];
for(var i=1;i<=tcn;i++){
  var tc = input[i].split(' ');
  if(tc[0] == 'push'){
    que.push(tc[1]*1);
  }
  if(tc[0] == 'pop'){
    if(que.length==0) console.log(-1);
    else console.log(que.shift());
  }
  if(tc[0] == 'size'){
    console.log(que.length);
  }
  if(tc[0] == 'empty'){
    if(que.length==0) console.log(1);
    else console.log(0);
  }
  if(tc[0] == 'front'){
    if(que.length==0) console.log(-1);
    else console.log(que[0]);
  }
  if(tc[0] == 'back'){
    if(que.length==0) console.log(-1);
    else console.log(que[que.length-1]);
  }
}