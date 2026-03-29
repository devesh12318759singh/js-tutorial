const score = 300
console.log(score);

//Using Number as type can give more methods to apply 
const balance  = new Number(200);
console.log(balance.toExponential(4));

console.log(balance.toString());
console.log(balance.toFixed(2)); // Precision

const num = 23.4546
console.log(num.toPrecision(3)); 

//Converting in Indian style 
const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//Maths -------(Have inbuilt mathematical methods )

console.log(Math);
console.log(Math.ceil(34.45));
console.log(Math.round(4.5));
console.log(Math.floor(4.5));