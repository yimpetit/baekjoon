 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('test.txt').toString().trim();
var list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var answer = [];
for(var i=0;i<list.length;i++){
  answer.push(input.indexOf(list[i]));
}
console.log(answer.join(' '));