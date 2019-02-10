 var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('n8958.txt').toString().split('\r\n');
var n=input[0];
for(var i=1;i<=n;i++){
  var tc = input[i];
  var add = 0;
  var score = 0;
  for(var j=0;j<tc.length;j++){
   if(tc[j]=='O') ++add;
   else add = 0;
    score += add;
  }
  console.log(score);
}