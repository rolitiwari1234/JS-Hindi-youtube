function SayMyName (){
    console.log("R");
    console.log("O");
    console.log("L");
    console.log("I");
}
// SayMyName()
// function addTwoNumber(number1,number2){
    // console.log( number1 + number2 )
// }
function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2
    }
const result = addTwoNumber(3 , 5)
// console.log("Result:", result)
function loginusermessage (username = "yashi"){
    if (!username){
         console.log("please enter a username")
    return
     }
     return `${username} just logged in`
}
// console.log(loginusermessage("roli"))
// console.log(loginusermessage("roli"));

function calculatecartprice(...num1){
     return num1
}

 console.log(calculatecartprice(300,800,600))
const user = {
     username : "roli",
     price : 999
}

function handleobject(anyobject){
     console.log (`username is ${anyobject.username} and price is ${anyobject.price}`)
 }
handleobject(user)
handleobject({
    username : "yashi",
    price : 299
})
const myNewArray = [200,400,500,800]
 function returnsecondvalue (getArray){
    return getArray[1]
 }
//   console.log(returnsecondvalue(myNewArray))
console.log(returnsecondvalue([200,400,500,800]))