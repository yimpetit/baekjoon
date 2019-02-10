var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//var input = require('fs').readFileSync('../txt/n1966.txt').toString().split('\r\n');
var tcn = input[0]*1;
for(var i=1;i<tcn*2;i+=2){
  var tc1=input[i].split(" ").map(Number);
  var tc2=input[i+1].split(" ").map(Number);
  var n=tc1[0];
  var m=tc1[1];
  var answer = [];
  var count = 0;
  var chk = false;
  for(var j=0;j<tc2.length;j++){
    answer[j] = j;
  }
  for(var j=0;j<tc2.length;j++){
      if(tc2[0] < tc2[j]){
        tc2.push(tc2[0]);
        tc2.shift();
        answer.push(answer[0]);
        answer.shift();
        j=0;
      }
      if(j==tc2.length-1){
        if(answer[0]==m) break;
        tc2.shift();
        answer.shift();
        count++;
        j=0;
      }
  }
  console.log(count+1);
  
}


/*
프린터 큐 

문제 
여러분도 알다시피 여러분의 프린터 기기는 여러분이 인쇄하고자 하는 문서를 인쇄 명령을 받은 ‘순서대로’, 즉 먼저 요청된 것을 먼저 인쇄한다.
여러 개의 문서가 쌓인다면 Queue 자료구조에 쌓여서 FIFO - First In First Out - 에 따라 인쇄가 되게 된다.
하지만 상근이는 새로운 프린터기 내부 소프트웨어를 개발하였는데, 이 프린터기는 다음과 같은 조건에 따라 인쇄를 하게 된다.
현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면, 이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다.
그렇지 않다면 바로 인쇄를 한다.
예를 들어 Queue에 4개의 문서(A B C D)가 있고, 중요도가 2 1 4 3 라면 C를 인쇄하고, 다음으로 D를 인쇄하고 A, B를 인쇄하게 된다.
여러분이 할 일은, 현재 Queue에 있는 문서의 수와 중요도가 주어졌을 때, 어떤 한 문서가 몇 번째로 인쇄되는지 알아내는 것이다.
예를 들어 위의 예에서 C문서는 1번째로, A문서는 3번째로 인쇄되게 된다.

입력 
첫 줄에 test case의 수가 주어진다. 각 test case에 대해서 문서의 수 N(100이하)와 몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue의 어떤 위치에 있는지를 알려주는 M(0이상 N미만)이 주어진다. 다음줄에 N개 문서의 중요도가 주어지는데, 중요도는 적절한 범위의 int형으로 주어진다. 중요도가 같은 문서가 여러 개 있을 수도 있다. 위의 예는 N=4, M=0(A문서가 궁금하다면), 중요도는 2 1 4 3이 된다.

출력 
각 test case에 대해 문서가 몇 번째로 인쇄되는지 출력한다.
*/