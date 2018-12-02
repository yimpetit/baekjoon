// var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var input = require('fs').readFileSync('n15969.txt').toString().split('\r\n');
var num=input[0]*1;
var stu=input[1].split(" "); 
var max = -1, min = 1001, tmp, n;
for(var i=0;i<num;i++){
	tmp = stu[i]*1;
	if(max<tmp)
	max = tmp;
	if(min>tmp)
	min = tmp;
}
console.log(max - min);
/*
#include <iostream>
using namespace std;
int main(void)
{
	int max = -1, min = 1001, tmp, n;
	cin >> n;
	for (int i =0; i<n;i++)
	{
		cin >> tmp;
		if(max < tmp) 
		max = tmp;
		if(min > tmp) 
		min = tmp;
	}
	cout << max - min;
}
*/