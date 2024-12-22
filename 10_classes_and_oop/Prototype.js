// let myName = "Roshanay   "
// let myChannel = "chai   "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spide power is ${this.spiderman}`);
        
    }
}

Object.prototype.roshanay = function(){
    console.log(`roshanay is present in all objects`);
    
}

Array.prototype.heyRoshanay = function(){
    console.log(`Roshanay says hello`);
    
}

// heroPower.roshanay()
myHeros.roshanay( )
// heroPower.heyRoshanay()
myHeros.heyRoshanay()


//inheritance
const User = {
    name: "chai",
    email: "chai@google.com",

}
const Teacher = {
    makeVideo: true
}
const TeachingSuppport = {
    isAvailable: false

}
 const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true, 
    __proto__: TeachingSuppport
 }

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSuppport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    
    console.log(`True length is : ${this.trim().length}`);
    
    
    
}

anotherUsername.trueLenght()
"Roshanay".trueLenght()
"iceTea".trueLenght()