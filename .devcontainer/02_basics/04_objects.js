// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "yashi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
       email : "roli@google.com",
       fullname : { 
        userFullname:{
        firstname :" Roli",
        lastname : "tiwari"
      }

   }
}
// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}
const obj4 = { 5: "e", 6 : "f"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign( {},obj1 , obj2, obj4  )
const obj3 = {...obj1 , ...obj2 }
// console.log(obj3)

const user = [
     {
       id  : "1",
       email :"roli@gmail.com"
} ,        
{
      id  : "1",
      email :"roli@gmail.com"
} ,        
{
    id : "1",
    email : "roli@gmail.com"

},
]
user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
  coursename : "js in hindi",
  price :"999",
  courseInstructor : "hitesh"

}
// course.courseInstructor
const{courseInstructor:Instructor} = course
// console.log(courseInstructor)
console.log(Instructor)

// {
// "name" : "roli"
// "price": "free"
// "coursename": "js in hindi"
// }

[
  {},
  {},
  {}
]
