let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

let mycreated_date = new Date(2004,9,2)
console.log(mycreated_date.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreated_date.getTime());
console.log(Math.floor(Date.now()/1000));