// Dates

let myDate = new Date ();
// console.log(myDate.toString());
// console .log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate);

// let myCreatedDate = new Date (2023,0,2023)
// let myCreatedDate = new Date (2023,0,2023,8,3)
// let myCreatedDate = new Date ("2023-02-14")
let myCreatedDate = new Date ("01-03-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp =  Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime())

// console.log(Math.floor (Date.now()/1000 ))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

'${newDate.getDay()}and the time'

newDate.toLocaleString('default',{
    weekday:"long"
})

