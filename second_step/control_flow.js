//Control flow : By Conditional things (if&else)
//Falsy values : 
/*
false , 0 ,-0, BigInt 0n,"" , null , undefined , NaN
*/

//Truthy values: 
/*
"0" , 'false' , " " , [], {} , function(){} , 
*/ 

//Checking empty object through condition 
const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}


//Nullish Coalescing operator(??): null undefined
let val1;
//val1 = 5 ?? 10

val1 = undefined ?? null ?? 23
//val1 = null ?? 12

console.log(val1);