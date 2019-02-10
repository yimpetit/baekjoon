var list = [];
for(var i=1;i<=10000;i++){
  list.push(d(i));
  if(list.indexOf(i)==-1) console.log(i);
}
function d(n){
  var cal = n;
  while(1){
    cal += n%10;
    n = parseInt(n / 10);
    if(n == 0) break;
  }
  return cal;
}
/*
  셀프 넘버

  10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.
*/