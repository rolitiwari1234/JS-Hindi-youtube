const user = {
    username : "yashi",
    price : 677,

  welcomeMessage :function (){
    console.log(`${this.username},welcome to website`)
//   console.log(this);
}

}
//  user.welcomeMessage()
//  user.username = "rama"
//  user.welcomeMessage()
 
//  console.log(this)

// function hindi(){
    // let username = "yashi"
    // console.log(this.username)
// }
// hindi()

// const hindi = function (){
//     let username = "yashi"
//     console.log(this.username)
//  }
//  hindi()

  const hindi =  () => {
   let username  = "yashi"
   console.log(this)

  }
//   hindi()

// const addtwo = (num1 , num2) => {
    // return num1  + num2
// }
// console.log(addtwo(4 , 8))

// const addtwo = (num1 ,num2) => num1 + num2
// const addtwo = (num1 ,num2) => ( num1 + num2 )
const addtwo = (num1 ,num2) => ({username :"roli"})

console.log(addtwo(9 ,8))

// const myArray = [ 2 ,8 ,9 ,6 ,6]

// myArray.forEach()