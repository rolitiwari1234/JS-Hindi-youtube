const accountID = 13567
let accountEmail ="jf@google.com"
var accountPassword ="12345"
account_city ="mainpuri"
let account_state ;

// accountID = 2//not allowed



accountEmail ="hk@google.com"
accountPassword ="122345"
account_city ="mainpuri"

console.log(accountID);

/*prefer not to use var because of issue in block scope and functional scope*/
console.table([accountEmail,accountID,accountPassword,account_state,account_city])