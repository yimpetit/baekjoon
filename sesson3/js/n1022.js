//var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
var input = require('fs').readFileSync('../txt/n1022.txt').toString().trim();

(function (input) {
    var line = input.split(' ').map(function (i) { return parseInt(i) });
    
    var max = -1e10;
    var map = (function (r1,c1,r2,c2) {
        var ret = [], rowdata, num;
        for (var j = r1; j <= r2; j++) {
            rowdata = [];
            for(var i = c1; i <= c2; i++){
                num = getNum(i,j);
                rowdata.push(num);
                max = Math.max(num, max);
            }
            ret.push(rowdata);
        }
        return ret;
    })(line[0],line[1],line[2],line[3]);

    var maxLength = max.toString().split('').length;

    map.forEach(function (row) {

        console.log(row.map(function(i){
            if(maxLength == i.toString().length) return i.toString();
            return (function(len) { 
                var ret = []; 
                for(var k=0; k<len; k++) 
                    ret.push(' '); 
                return ret;
            })(maxLength - i.toString().length)
            .map(function () { return ' '; })
            .concat(i.toString().split(''))
            .join('');
        }).join(' '));
    });

    function getNum(x,y) {
        if(x == 0 && y == 0) {
            return 1;
        }

        if(x == y && x > 0) {
            return (x * 2 + 1) * (x * 2 + 1);
        }
        
        if(x == y && x < 0) {
            return (((x - 1) * 2 + 1) * ((x - 1) * 2 + 1) + (x * 2 + 1) * (x * 2 + 1))/2;
        }

        var edge = Math.max(Math.abs(x),Math.abs(y));
        var sqr = (edge * 2 + 1) * (edge * 2 + 1);
        var sqrBefore = ((edge - 1) * 2 + 1) * ((edge - 1) * 2 + 1);

        if (x == edge) {
            return sqrBefore + (edge - y);
        } else if (y * -1 == edge) {
            return sqrBefore + 2 * edge + (edge - x);
        } else if (x * -1 == edge) {
            return sqrBefore + 4 * edge + (edge + y);
        } else {
            return sqrBefore + 6 * edge + (edge + x);
        }

    }
})(input)

/*
소용돌이 예쁘게 출력하기 


문제 
크기가 무한인 정사각형 모눈종이가 있다. 모눈종이의 각 정사각형은 행과 열의 쌍으로 표현할 수 있다.
이 모눈종이 전체를 양의 정수의 소용돌이 모양으로 채울 것이다. 일단 숫자 1을 0행 0열에 쓴다. 그리고 나서 0행 1열에 숫자 2를 쓴다.
거기서 부터 소용돌이는 반시계 방향으로 시작된다. 다음 숫자는 다음과 같이 채우면 된다.
    -3 -2 -1  0  1  2  3
    --------------------
-3 |37 36 35 34 33 32 31
-2 |38 17 16 15 14 13 30
-1 |39 18  5  4  3 12 29
 0 |40 19  6  1  2 11 28
 1 |41 20  7  8  9 10 27
 2 |42 21 22 23 24 25 26
 3 |43 44 45 46 47 48 49
이 문제는 위와 같이 채운 것을 예쁘게 출력하면 된다. r1, c1, r2, c2가 입력으로 주어진다. r1, c1은 가장 왼쪽 위 칸이고,
r2, c2는 가장 오른쪽 아래 칸이다.
예쁘게 출력한다는 것은 다음과 같이 출력하는 것이다.
출력은 r1행부터 r2행까지 차례대로 출력한다.
각 원소는 공백으로 구분한다.
모든 행은 같은 길이를 가져야 한다.
공백의 길이는 최소로 해야 한다.
모든 숫자의 길이(앞에 붙는 공백을 포함)는 같아야 한다.
만약 수의 길이가 가장 길이가 긴 수보다 작다면, 왼쪽에서부터 공백을 삽입해 길이를 맞춘다.

입력 
첫째 줄에 r1, c1, r2, c2가 주어진다. 모두 절댓값이 5000보다 작거나 같은 정수이고,
r2-r1은 0보다 크거나 같고, 49보다 작거나 같으며, c2-c1은 0보다 크거나 같고, 4보다 작거나 같다.

출력 
r2-r1+1개의 줄에 소용돌이를 예쁘게 출력한다.
*/