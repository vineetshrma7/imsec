var Name="abac";
var i=0;
var j=Name.length-1;
var flag=0;
while(i<=j){
    if(Name[i]!=Name[j]){
        flag=1;
    }
    i++;
    j--;
}
if(flag==0){
    console.log("Given String is a Palindrome");
}
else{
    console.log("Given String is not a Palindrome");
}