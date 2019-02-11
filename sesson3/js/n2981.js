var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n2981.txt').toString().split('\r\n');
var n = input[0]*1;
var dif = [];
var answer = [];

var first = 0;

for(var i=1;i<=n;i++){
  var a = input[i]*1;
  if(first==0){
    first = a;
  }else{
    dif.push(Math.abs(a-first));
    first = a;
  }
}
var result = dif[0];
if(dif.length>1){
  result = dif[0];
  for(var i=1;i<dif.length;i++){
    result = gcd(result,dif[i]);
  }
}
for(var i=2;i<=result/2;i++){
  if(result%i==0){
    answer.push(i);
  }
}
answer.push(result);
console.log(answer.join(' '));
function gcd(a,b){
  if(b==0){
    return a;
  }else{
    return gcd(b,a%b);
  }
}






/*
int gcd(int a, int b){
    
    if(b==0){
        return a;
    }else{
        return gcd(b, a%b);
    }
    
}


int main() {
    
    int n;
    scanf("%d", &n);
    
    vector<int> dif;

    int first = 0;
    while(n--){
        int a;
        scanf("%d", &a);
        if(first == 0){
            first = a;
        }else{
            dif.push_back(abs(a-first));
            first = a;
        }
    }
    
    
    int result = dif[0];
    
    if(dif.size() > 1){
        result = dif[0];
        for(int i=1; i<dif.size(); i++){
            result = gcd(result, dif[i]);
        }

    }
    
    
    for(int i=2; i<=result/2; i++){
        if(result%i == 0){
            printf("%d ", i);
        }
    }
    printf("%d\n", result);
}
[출처] [백준] 2981 검문|작성자 쥬니어
*/


