/*
const user = {
    username: "Devesh" ,
    price: 3445 ,

    WelcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

user.WelcomeMessage() 
user.username = "Aditya"
user.WelcomeMessage()

console.log(this);


const arrow = () =>{
    let u_name = "Devesh"
    console.log(this.u_name)
}

arrow()
*/

/*
const add2 = (n1,n2) =>{
    return n1+n2
}

console.log(add2(3,5.6));

*/

const add2 = (n1,n2) => (n1+n2)

console.log(add2(3,4))

