var fs = require('fs');
// var n = fs.readFileSync('st_1.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString()*1;
var text = '';
for(var i=1;i<=n;i++){
  text +='*';
  console.log(text);
}
