const UserEmail = []

if (UserEmail){
    console.log("got user email");
}
    else{
        console.log("do'not user email");
    }

    // falsy value 

    // false , 0 ,  - 0 , BigInt   , "" , null , undefined , NaN
     
    // truthy value 
    // "0" , " " , 'false' , [] , {} , function(){}

    // if (UserEmail.length === 0){
        // console.log("Array is empty");
    // }
    const emptyObj = {}
    if(Object.keys(emptyObj). length === 0){
       console.log("empty is object")
    }

    // NUllish Coalescing Operator (??): null undefined

    let val1;
    //    val1 = 5 ?? 10
        //   val1 = null ?? 10
        //  val1 = undefined ?? 15
        // val1 = null ?? 10 ?? 20

       console.log(val1);

    //    Terniary Operator

    // condition ? true : false

    const iceprice = 100
   iceprice <= 80 ?  console.log("less than 100"):console.log("more than 100")