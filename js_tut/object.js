//Singleton


//object literals

const JsUser = {
    name: "Devesh",
    "full name": "Devesh Singh" ,
    age: 21 ,
    location: "Etawah" ,
    isLoggedIn: false 
}

console.log(JsUser.age);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);

JsUser.greeting = function(){
    console.log(`Hello JS users,${this["full name"]}`);
}

console.log(JsUser.greeting());