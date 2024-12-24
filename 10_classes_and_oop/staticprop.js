 class User {
    constructor(username){
        this.username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
    static createID(){
        return `123`
        
    }
 }

 const Roshanay = new User("Roshanay")
//  console.log(Roshanay.createID());

 class Teacher extends User{
    constructor(username, email){
       super(username)
        this.email = email

    }

 }

 const iphone = new Teacher("iphone","iphone@gmail.com")
iphone.logMe()
 