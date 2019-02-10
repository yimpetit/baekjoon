var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n1260.txt').toString().split('\r\n');
var info = input[0].split(' ').map(Number);
var n = info[0];
var m = info[1];
var v = info[2];
var graph = [null];
var stack = [v];
var c = [];
var dfsa = [];
var bfsa = [];

for(var i=1;i<=n;i++){
  graph.push([]);
}

for(var i=1;i<=m;i++){
  var tc = input[i].split(' ').map(Number);
  graph[tc[0]].push(tc[1]);
  graph[tc[1]].push(tc[0]);
}
for(var i=1;i<=n;i++){
  graph[i].sort(function(a,b){
    return a-b;
  });
}

dfs(v);
c=[];
bfs(v);

function dfs(x){
  if(c[x]) return;
  c[x]=true;
  dfsa.push(x);
  for(var i=0;i<graph[x].length;i++){
    var y = graph[x][i];
    dfs(y);
  }
}

function bfs(start){
  var q = [];
  q.push(start);
  c[start]=true;
  while(q.length!=0){
    var x = q[0];
    q.shift();
    bfsa.push(x);
    for(var i=0;i<graph[x].length;i++){
      var y = graph[x][i];
      if(!c[y]){
        q.push(y);
        c[y] = true;
      }
    }
  }
}
console.log(dfsa.join(" "));
console.log(bfsa.join(" "));



/*
DFS와 BFS 

문제 
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

입력 
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다.
입력으로 주어지는 간선은 양방향이다.

출력 
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.
*/