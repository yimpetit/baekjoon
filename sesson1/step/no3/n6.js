var fs = require('fs');
// var n = fs.readFileSync('st_1.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString()*1;
// var n =5;
for(var i=n;i>=1;i--){
  var text = '';
  for(var j=i;j>=1;j--){
    text += "*";
  }
  console.log(text);
}
