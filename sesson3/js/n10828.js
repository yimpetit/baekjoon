//var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('../txt/n10828.txt').toString().split('\r\n');
var tcn = input[0]*1;
var stack = [];
for(var i=1;i<=tcn;i++){
  var tc = input[i].split(" ");
  if(tc[0]=='push'){
    stack.unshift(tc[1]*1);
  }else if(tc[0]=='pop'){
    if(stack.length!=0){
      console.log(stack[0]);
      stack.shift();
    }else{
      console.log(-1);
    }
  }else if(tc[0]=='size'){
    console.log(stack.length);
  }else if(tc[0]=='empty'){
    if(stack.length!=0) console.log(0);
    else console.log(1);
  }else if(tc[0]=='top'){
    if(stack.length!=0) console.log(stack[0]);
    else console.log(-1);
  }
}