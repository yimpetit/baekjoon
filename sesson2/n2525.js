// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2525.txt').toString().split('\r\n');
var h = input[0].split(' ')[0];
var m = input[0].split(' ')[1];
var time = input[1]*1;
var tdate = new Date('2018-07-07 '+h+':'+m);
tdate.setMinutes(tdate.getMinutes()+time);
console.log(tdate.getHours()+" "+tdate.getMinutes());



/*
오븐 시계

첫째 줄에는 현재 시각이 나온다.
현재 시각은 시 A (0<=A<=23) 와 분 B (0<=B<=59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 C  (0<=C<=1,000)가 분 단위로 주어진다. 

첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다.
(단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다.
디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)
*/