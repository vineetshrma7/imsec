    const arr=[1,2,3,4,5,6,7,8,9];
    function evenchecker(num){
        return(num%2==0)//return  tru or false
    }
    const evensum=arr.filter(evenchecker);
    console.log(evensum);