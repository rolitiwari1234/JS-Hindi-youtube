//  immediately invoked function expression (IIFE)

(function english(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED ONE ${name}`)
})( 'Roli' )