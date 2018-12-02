var fs = require('fs');
// var txt = fs.readFileSync('n11.txt').toString();
var txt = fs.readFileSync('/dev/stdin').toString();
var n = txt.length;
for(var i=0;i<n;i+=10){
  console.log(txt.substr(i,10));
}
 // n.split('',10);
