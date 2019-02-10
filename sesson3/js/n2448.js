//var input = require('fs').readFileSync('/dev/stdin').toString().trim();
var input = require('fs').readFileSync('n2448.txt').toString().trim();
var n = input*1;
var star = ['  *  ',' * * ','*****'];

for(var k = 1; 3*parseInt(Math.pow(2,k)) <= n ; ++k){
  makeBigStar(k,star);
}

for(var i = 0; i<n;++i){
  console.log(star[i]);
}

function makeBigStar(k,map){
  var bottom = 3*parseInt(Math.pow(2,k));
  var middle = bottom /2;
  console.log(bottom);
  console.log(middle);
  for(var i = middle ; i<bottom;++i){
    map[i]=map[i-middle]+" "+map[i-middle];
//    console.log(map[i]);
  }
  var space = "";
  while(space.length < middle){
    space += " ";
  }
  for(var i = 0 ; i < middle;++i){
    map[i] = space + map[i] + space;
    console.log(map[i]+"-------------------->"+i);
  }
  console.log(map[6]+"-------------------->"+6);
  console.log("================================");
}



/*
  별찍기-11
*/