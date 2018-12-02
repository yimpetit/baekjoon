// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n2309.txt').toString().split('\r\n');
var idx = 0;
var readLine = function() {
	    return input[idx++];
};
var dwarves = [];
var sum = 0;
for (var i = 0; i < 9; i++) {
	var n = Number(readLine());
	dwarves.push(n);
	sum += n;
}
dwarves.sort(function(a, b) {return a - b;}); ///순서 정렬
console.log(dwarves);
var main = function() {
	for (var i = 0; i < 8; i++) {
		for (var j = i + 1; j < 9; j++) {
			var sum2 = sum - dwarves[i] - dwarves[j]; ///첫번째 난쟁이이부터 마지막 난쟁이까지의 합을 순차적으로 더함
			if (sum2 == 100) { ///난쟁이키의 합이 100이 될경우 처리
				var t = dwarves[j];
				dwarves.splice(i, 1); ///i번째 난쟁이 삭제
				dwarves.splice(dwarves.indexOf(t),1); ///j번째 난쟁이 삭제
				console.log(dwarves.join(" "));
				return;
			}
		}
	}
}

main();
