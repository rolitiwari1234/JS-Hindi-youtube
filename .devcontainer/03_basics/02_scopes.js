var c = 300
let a = 400
if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
}
// console.log(a);
// console.log(b);
// console.log(c);

function one (){
     const username = "roli"
  
     function two (){
        const website = "youtube"
    //    console.log(username)
    }
    // console.log(website)
    two()
}
    // one()
    if(true){
        username = "yashi"
        if(username === "yashi"){
           const website = "  youtube"
        //    console.log(username + website)
        }
        // console.log(website);
    }
    // console.log(username);
    // +++++++++++++++++++++intersting++++++++++++++++++
    console.log(addone(4))
    function addone(num){
      return num + 1
    }
    
    addtwo(4)
     const addtwo = function(num){
        return num + 2
     } 
     