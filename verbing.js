var string1="sleeping";
var ing= "ing";
var j=0;
var flag=1;
var i=string1.length-1;
if(string1.length<3)
{
    console.log(string1);
}
else
{
    while(i!=0)
    {
        if(string1[i]==ing[j])
        {
            flag=0;
        }
        j++;
        i--;
    }
    if(flag==0)
    {
        console.log(string1+"ly");
    }
    else
    {
        console.log(string1+"ing");
    }

}