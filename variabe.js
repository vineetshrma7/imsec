const list = [11,12,44,9,4]
var temp= list[0];
var i=0;
while(i++<list.length){
    if(list[i]>temp){
        temp=list[i];
    }
}
console.log(temp);