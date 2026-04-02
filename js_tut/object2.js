const tind_user = {}

tind_user.id = "123xfg"
tind_user.name = "Devesh"
tind_user.isLoggedIn = false

//console.log(tind_user);

const regularUser = {
    email: "dev@gmail.com" ,
    fullname: {
        
            firstname: "Devesh" ,
            lastname: "Singh"
        
    }

}

console.log(regularUser.fullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

//const obj3 = {obj1 ,obj2};

//Assign the obj1 and obj2 both to obj1
//const obj3 = Object.assign(obj1,obj2)
//console.log(obj1);
//console.log(obj2);
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);