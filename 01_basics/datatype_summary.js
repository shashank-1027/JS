//#primitive
//7types: string, number, boolean, null, undefined, symbol,bigInt

//#refrence type or non primitive
// array, object, function

//  *********************************************

//stack(primitive)  call by value
//heap(non primitive) call by reference

let myYoutubeName = 'shetty.com' 
let anotherName  = "myYoutubeName"
anotherName = "sansha"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = 
{
    email: "shetty@gmail.com",
    upi:"user@ybl"

}

let userTwo = userOne

userTwo.email = "sansha@gmail.com"
console.log(userTwo.email);
console.log(userOne.email);



