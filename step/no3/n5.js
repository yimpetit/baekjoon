var fs = require('fs');
// var n = fs.readFileSync('st_1.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString()*1;
for(var i=1;i<=n;i++){
  var text = '';
  for(var j=n;j>=1;j--){
    if(j<=i)text += "*";
    else text += " ";
  }
  console.log(text);
}
