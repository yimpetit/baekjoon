// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2512.txt').toString().split('\r\n');
var count = input[0]*1;
var need = input[1].split(' ');
var budget = input[2]*1;
var comp = false;
need.sort(function(a,b){ ////필요 예산이 낮은 곳부터 정렬
	return a-b;
});
var answer = 0;
for(var i=0;i<count;i++) {
	var order = count-i; ///상한선이 될 지역을 지정
	if(i!=0) var target = answer+need[i]*order; //// 해당 지역을 상한선을 계산함
	else var target = need[i]*order;
	if(target >= budget){ ///해당 지역의 상한선이 총예산보다 작을경우 다음 지역의 필요예산을 더함 아닐경우 이미 배분한 예산을 총예산에서 뺀값을 남은 지역만큼 나눠주고 이 값을 출력
		console.log(Math.floor((budget-answer)/(count-i)));
		break;
	}else{
		answer += need[i]*1;
	}
	if(i==count-1) comp = true
}
if(comp) console.log(need[need.length-1]); ////모든 지역의 필요예산 합이 주어진 예산보다 작을경우 가장 큰 예산 출력




/*
for(var i=need[need.length-1];i>0;i--){
	  var answer = 0;
		for(var j=0;j<count;j++) {
			if(need[j]*1>=i) need[j] = i;
			answer += need[j]*1;
		}
		if(answer<=budget) {
			console.log(need[need.length-1]);
			break;
		}
}
*/
