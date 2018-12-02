// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n10800.txt').toString().split('\r\n');
var ball=[],color_sum=[];
var n=input[0];
var sum = 0;
for(var i=1;i<=n;i++){
  ball.push(input[i].split(" ").map(Number));
  ball[i-1].push(i);
  sum += ball[i-1][1];
  if(color_sum[ball[i-1][0]-1]==undefined) color_sum[ball[i-1][0]-1] = 0;
  color_sum[ball[i-1][0]-1] += ball[i-1][1];
}
ball.sort(function(a,b){
  return a[1]-b[1];
});
//console.log(ball);
for(var i=0;i<n;i++){
  var size_sum=0;
  var now_size = ball[i][1];
  var now_color = ball[i][0];
  for (var j=0;j<n;j++){
    if(now_size<=ball[j][1] && now_color!=ball[j][0]) size_sum+=ball[j][1];
  }
//  console.log(sum+" - "+"("+size_sum+"+"+color_sum[ball[i][0]-1]+")"+"="+(sum - (size_sum+(color_sum[ball[i][0]-1]))));
  ball[i][3] = sum - (size_sum+(color_sum[ball[i][0]-1])) < 0 ? 0 : sum - (size_sum+(color_sum[ball[i][0]-1]));
//  console.log("=============");
}
ball.sort(function(a,b){
  return a[2]-b[2];
});
for(var i =0;i<n;i++) console.log(ball[i][3]);
//console.log(ball);






/*
  컬러볼
  
  첫 줄에는 공의 개수를 나타내는 자연수 N이 주어진다(1 ≤ N ≤ 200,000).
  다음 N개의 줄 중 i번째 줄에는 i번째 공의 색을 나타내는 자연수 Ci와 그 크기를 나타내는 자연수 Si가 주어진다(1 ≤ Ci ≤ N, 1 ≤ Si ≤ 2,000).
  서로 같은 크기 혹은 같은 색의 공들이 있을 수 있다.

  N개의 줄을 출력한다. N개의 줄 중 i번째 줄에는 i번째 공을 가진 플레이어가 잡을 수 있는 모든 공들의 크기 합을 출력한다.
  
*/

/*
var ball=[],color_sum=[];
var n=input[0];
var sum = 0;
for(var i=1;i<=input[0];i++){
  ball.push(input[i].split(" ").map(Number));
  ball[i-1].push(i);
  sum += ball[i-1][1];
  if(color_sum[ball[i-1][0]-1]==undefined) color_sum[ball[i-1][0]-1] = 0;
  color_sum[ball[i-1][0]-1] += ball[i-1][1];
}
ball.sort(function(a,b){
  return a[1]-b[1];
});
for(var i=0;i<n;i++){
  
}
//console.log(color_sum);
//console.log(ball);

*/

/*
#include<cstdio>
#include<algorithm>
using namespace std;
const int MXN = 2e5;
int n, t[MXN + 1], r[MXN + 1], tot;
struct st {
    int c, s, idx;
}a[MXN];
int main() {
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d%d", &a[i].c, &a[i].s), a[i].idx = i;
    sort(a, a + n, [](st i, st j) {return i.s < j.s; });
    for (int i = 0, j = 0; i < n; i++) {
        for (; a[j].s < a[i].s; j++) tot += a[j].s, t[a[j].c] += a[j].s;
        r[a[i].idx] = tot - t[a[i].c];
    }
    for (int i = 0; i < n; i++) printf("%d\n", r[i]);
    return 0;
}

*/