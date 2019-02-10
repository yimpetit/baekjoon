 var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
//var input = require('fs').readFileSync('n2920.txt').toString().split(' ').map(Number);
var start = input[0];
if(start==1 || start==8){
  for(var i=1;i<8;i++){
    
    if(input[i-1]-input[i] == -1 || input[i-1]-input[i] == 1){
      if(input[i-1]-input[i] == -1 && i==7) {
      console.log('ascending');
      }
      if(input[i-1]-input[i] == 1 && i==7) {
        console.log('descending');
      }
    }else{
      console.log('mixed');
      break;
    }
  }
}else{
  console.log('mixed');
}
/*
  음계
*/