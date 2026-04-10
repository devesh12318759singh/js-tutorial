/*
const nums = [1,2,3,4,5,56,7,8]


const new_n = nums.filter( (num) => num > 4)
console.log(new_n);


//Chaining concept 
const newnums = nums.map( (num) => {return num*10}).map( (num) => num+1)

console.log(newnums);
*/


//reduce 

const numss = [1,2,3]

const total = numss.reduce( function(acc,cur_val){
    console.log(`Acc: ${acc} and cur_val: ${cur_val}`);
    return acc+cur_val
},0)

console.log(total);