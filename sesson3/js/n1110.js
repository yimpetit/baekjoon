 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n1110.txt').toString();
if(input.length==1) input = input+"0";
var target = input;
var count = 0;
while(1){
  var a = input[1];
  var b = (input[0]*1)+(input[1]*1)+"";
  var b = b[b.length-1];
  input = a+b;
//  console.log(input);
  count ++;
  if(input==target) break;
}
console.log(count);



/*
더하기 사이클

첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.

첫째 줄에 N의 사이클 길이를 출력한다.
*/


/*
var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('n1110.txt').toString().trim();
if(input<10) input = input+"0";
var a,b,c,count=1;
var key = input;
while(1){
  a=parseInt(input/10);
  b=input%10;
  c=(a+b)%10;
  input = b+""+c;
  if(input==key){
    console.log(count);
    break;
  } 
  else count++;
}
*/