// Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23423424234234234234234n

// Reference(Non Primitive )
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "roshanay",
    age: 20
}
const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);


//+++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive), heap (non- primitive)

let myYoutubeName = "abcdefg"
let anothername = myYoutubeName
anothername = "1234"


console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email:"user@gmail.com", 
    paypal: "user.paypal"
}

let userTwo = userOne
userTwo.email = "two@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

