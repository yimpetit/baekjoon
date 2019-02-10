 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n1065.txt').toString().trim();
var answer = 0;
for(var i=1;i<=input;i++){
  if(d(i)) answer ++;
}
console.log(answer);
function d(n){
  if(100>n) return 1;
  else{
    n = n+'';
    var cal=n[0]*1-n[1];
    for(var i=1;i<n.length-1;i++){
      var a=n[i]*1-n[i+1];
      if(cal != a){
        return 0;
      }
    }
    return 1;
  }
}