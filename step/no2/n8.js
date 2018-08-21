var fs = require('fs');
// var n = fs.readFileSync('n8.txt').toString()*1;
var n = fs.readFileSync('/dev/stdin').toString()*1;
var five = Math.floor(n/5);
n %= 5;
var three = 0;
while(five>=0){
  // console.log(five);
  if(n%3==0){
    three = n/3;
    n = 0;
    break;
  }else{
    five --;
    n += 5;
  }
}
// console.log(five+" : "+three+"\nn : "+n);
console.log(n==0?five + three : -1);
