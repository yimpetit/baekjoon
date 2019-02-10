// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2476.txt').toString().split('\r\n');
var n=input[0];
var list = [];
for(var i=1;i<=n;i++){
  var data = input[i].split(' ').map(Number);
  if(data[0]==data[1]&&data[1]==data[2]){
    list.push(10000+(data[0]*1000));
  }else{
    if(data[0]==data[1]){
      list.push(1000+(data[0]*100));
    }else if(data[1]==data[2]){
      list.push(1000+(data[1]*100));
    }else if(data[0]==data[2]){
      list.push(1000+(data[0]*100));
    }else{
      data.sort(function(a,b){
        return b-a;
      });
      list.push(data[0]*100);
    }
  }
}
list = list.sort(function(a,b){
        return b-a;
       });;
console.log(list[0]);