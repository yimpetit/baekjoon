var fs = require('fs');
// var n = fs.readFileSync('st_1.txt').toString().split('\r\n');
var n = fs.readFileSync('/dev/stdin').toString()*1;
for(var i=1;i<=9;i++){
  console.log(n+" * "+i+" = "+(n*i));
}
