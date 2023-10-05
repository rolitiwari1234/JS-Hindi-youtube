// Singleton
// object .create

// Object literals

const  mysum = Symbol("key1")

const JSUser = {
name : "Yashi",
"full name" : "Yashi Tiwari",
[mysum] : "myKey1",
age : 18,
location: "Mainpuri",
email : "roli@google.com",
isLoggedIn : false,
lastLogindays : ["Monday","Saturday"] 
}
// console.log(JSUser.email)
// console.log(JSUser["email"])

// console.log(JSUser["full name"])
// console.log(JSUser[mysum])

JSUser.email = "yashi@google.com"
// Object.freeze(JSUser)
JSUser.email = "yashi@microsoft.com"
// console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello JS User")

}
JSUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`)
}
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());