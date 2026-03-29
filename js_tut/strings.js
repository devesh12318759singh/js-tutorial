const name = "Devesh"
const repocnt = 8

//console.log(name + repocnt + " Value");

//By using backticks : using placeholders
console.log(`Hello my name is ${name} and my repo count is ${repocnt}`);

//Some methods in string 
console.log(name.charAt(3));
console.log(name.indexOf('h'));
const substr = name.substring(0,3);
console.log(substr); 

const trim_usage = "   Devesh    ";
console.log(trim_usage);
console.log(trim_usage.trim());

const url = "https://aditi.com/devesh%20singh"
console.log(url.replace('%20','_'));