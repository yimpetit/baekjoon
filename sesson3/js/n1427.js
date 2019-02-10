 var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//var input = require('fs').readFileSync('../txt/n1427.txt').toString().trim();
console.log(input.split('').sort(function(a,b){
  return b-a;
}).join(''));