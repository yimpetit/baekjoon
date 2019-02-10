 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n1475.txt').toString().trim();
var cnt = 1;
while(1){
  for(var i=0;i<10;i++){
    if(i==6){
      var input_l = input.length;
      if(input.indexOf(6)>-1){
        input = input.replace(6,'');
      }else if(input_l==input.length) input = input.replace(9,'');
      
    }else if(i==9){
      var input_l = input.length;
      if(input.indexOf(9)>-1){
        input = input.replace(9,'');
      }else if(input_l==input.length) input = input.replace(6,'');
      
    }else{
      input = input.replace(i,'');
    }
  }
  if(input.length==0) break;
  else cnt ++;
}
console.log(cnt);