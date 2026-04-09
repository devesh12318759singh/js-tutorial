/*
const arr = [1,2,3,4,5]

//for in
for (const num in arr) {
    console.log(num);
    
}

const greetings = "Welcome ,How are you"
for(const greet of greetings){
    console.log(`Each person in ${greet}`)
}
*/
//Map : Holds key value pair  : map is not iteratable
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America ")

console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// Object is not iteratable through this method
/*
const myobj = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

for (const [key,value] of myobj) {
    console.log(key,':-',value);
}
    */