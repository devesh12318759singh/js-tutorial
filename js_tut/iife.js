//Imediately invoked function expression (IIFE)
//Variables inside an IIFE are not accessible outside , so they 
//dont pollute the global scope

(function () {
    let hiden = "Hidden something";
    console.log(hiden);
})();  //Semicolon required to invoke 


//console.log(hidden); this does not work these are not accessible .

(function (name) {
    console.log("Hello " + name);
})("Devesh");


( (name) => {
    console.log(`My name is ${name}`);
})('Charlie Alaesendra')

//Named iife is that where we have name of the function 

