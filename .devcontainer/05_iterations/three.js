// for of

// ["" , "" , "" ]
// [{} , {} , {} ]

const arr = [1 , 2 , 3 , 4 , 5 ]

for (const num of arr ){
    //   console.log(num);
} 
const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`greeting is ${greet} `);
    }
    // Maps

    const map = new Map ()
    map.set('In',"India")
    map.set ('pa', "pakistan")
    map.set('ca', "canada")
    map.set('ch', "china")
    map.set('In',"India")
    
    // console.log(map);

    for (const [key , value] of map) {
        // console.log(key, ':-' ,value)
    }
    const myObject = {
        game1 : 'football',
        game2 : 'basketball'

    }
    // for (const [key , value] of myObject){
    //     console.log(key , '-' ,value);
    // }