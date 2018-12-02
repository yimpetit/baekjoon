// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n14696.txt').toString().split('\r\n');
var n = input[0]*1;
var a = [];
var b = [];
for(var i=1;i<n*2;i+=2){
  var a = input[i].split(" "); a.shift(); /*a = a.sort(function(a,b){return b-a});*/
  var b = input[i+1].split(" "); b.shift(); /*b = b.sort(function(a,b){return b-a});*/
  var j = 0;
  var a_cout = [0,0,0,0];
  var b_cout = [0,0,0,0];
  for(var j=0;j<a.length;j++){
    a_cout[a[j]-1]++;
  }
  for(var j=0;j<b.length;j++){
    b_cout[b[j]-1]++;
  }
  for(var j=3;j>=0;j--){
    if(a_cout[j]>b_cout[j]) {
      console.log("A");
      break;
    } else if(a_cout[j]<b_cout[j]){
      console.log("B");
      break;
    } 
    else{
      if(j==0) console.log("D");
    }
  }
  
  /*
  if(a_cout[3]>b_cout[3]){
    console.log("A");
  }else if(a_cout[3]<b_cout[3]){
    console.log("B");
  }
  */
  
}
// while(j+=1){
//   if(a[j])
// }
