/*
let a = 100

if(true){
    let a = 10
    const b= 20
    var c = 30
}

console.log(a) 
//console.log(b)
console.log(c)

*/

function one(){
    const u_name = "devesh"

    function two(){
        const website = "github"
        console.log(website);
        console.log(u_name);
    }
    

    two()
}
one()


//Hoisting :
//function declarations are moved to
//  the top of their scope during the compilation
//  phase, so you can call them 
// before they are defined in the code.

console.log(one(7));
function one(num){
    return num +1
}


//Temporal dead zone 

//console.log(two(3));

const it = function two(num){
    return num+5
}