var fib=5;
var t=0,t2=1;
var i = 3;
var nextterm=t+t2;
console.log(t+"\n"+t2);
while(++i<=fib){
    console.log(nextterm);
    t=t2;
    t2=nextterm;
    nextterm=t+t2;
}