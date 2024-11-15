// singleton
//Object.create

// object literals
const mySym = Symbol("Key1")

const JsUser = {
    name: "Roshanay",
    [mySym]: "mykey1",
    "full name": "Roshanay Arshad",
    age: 20,
    location: "Sahiwal",
    email: "roshany@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "google@mail.com"
// //Object.freeze(JsUser)
// JsUser.email = "microsoft@mail.com"
// //console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());
