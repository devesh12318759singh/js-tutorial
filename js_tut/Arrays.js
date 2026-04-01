//Array

const myarr = [0,1,2,3,5]
console.log(myarr);
myarr.push(7);
console.log(myarr);

myarr.pop();
console.log(myarr);
console.log(myarr.includes(5));

console.log(myarr.indexOf(3));

console.log("A", myarr);
const myn1 = myarr.slice(1,4);
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,4);
console.log("C", myn1);
console.log(myn2);