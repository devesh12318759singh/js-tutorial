const myObj = {
    js: 'javascript' ,
    cpp: 'C++' ,
    rb: 'ruby' ,
    swift: 'Apple swift'
}

//uses for in loop 

for (const key in myObj) {
    console.log(myObj[key]);
}

//For each loop
const array = [1,2,3,4,5]
array.forEach(function(item) {
    console.log(item)
});