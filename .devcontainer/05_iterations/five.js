const coding = ["java" , "cpp" ,"ruby" ,"python"]
coding.forEach(  function(val) {
    // console.log(val)
});
coding.forEach ( (item) => {
    //   console.log(item)
})
// function printme(item){
//     console.log(item);
// }
// coding .forEach(printme)
    
// coding.forEach((item,index,array) => {
//    console.log(item , index ,array)
// })
const mycoding = [
    {
    languagename : "javascript",
    languagefile : "js",
 },
 {
    languagename : "python",
    languagefile : "py",
 },
 {
    languagename : "c++",
    languagefile : "cpp",
 }
]
mycoding.forEach(value => {
    console.log(value.languagefile)
});