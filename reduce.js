const trans=[
    {type:"income",amount:1000},
    {type:"expense",amount:200},
    {type:"income",amount:4000},
    {type:"income",amount:40},
    {type:"expense",amount:500},
];

const final=trans.reduce((acc,num)=>{
    if(num.type==="income"){
        return(acc+num.amount);
    }
    else if(num.type==="expense"){
        return(acc-num.amount);
    }
},0);
console.log("Balance:"+final);