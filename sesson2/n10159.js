// var data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var data = require('fs').readFileSync('n10159.txt').toString().split('\r\n');
var N = parseInt(data[0]);
var M = parseInt(data[1]);
var bigyo = [];
for(var i = 1 ; i<= N;i++)
{
    bigyo[i] = new Array();
    for(var j = 1 ; j <= N ;j++)
        bigyo[i][j]=0;
}
for(var i =2; i <M+2;i++)
{
    var imsi = data[i].split(" ").map(Number);
    var a = imsi[0];
    var b = imsi[1];
    bigyo[a][b]=1;
    bigyo[b][a]=-1;
}
for(var k = 1;k<=N;k++)
    for(var i = 1; i<=N;i++)
        for(var j = 1;j<=N;j++)
            if(i!=j)
                if(bigyo[i][k]==1&&bigyo[k][j]==1) bigyo[i][j]=1;
                else if(bigyo[i][k]==-1&&bigyo[k][j]==-1) bigyo[i][j]=-1;
for(var i = 1 ; i<= N;i++)
{
    var gesu = 0;
    for(var j = 1 ; j <= N ;j++)
        if(i!=j)
            if(bigyo[i][j]==0&&bigyo[j][i]==0)
                gesu++;
    console.log(gesu);
}