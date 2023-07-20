const radi = [3,4,8,9,12];
function circumference(radi){
    return 2*Math.PI*radi;
}
function area(radi){
       return Math.PI*radi*radi;
}
function diameter(radi){
    return 2*radi;
}
var ara=radi.map(area);
var c=radi.map(circumference);
var dia=radi.map(diameter);
console.log(ara);
console.log(c);
console.log(dia);






