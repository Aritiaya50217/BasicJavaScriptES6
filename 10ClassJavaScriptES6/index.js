// แบบไม่ใช้ class
var user = {
    name : "Artitaya",
    age:23,
    SayHi : function(){
        // ใช้ this ชี้ไปยังตัวแปร name เพื่อรับค่ามา
        return "Hello " + this.name 
    }
}
console.log(user.SayHi())

function User(name,age){
    this.name = name
    this.age = age
}

User.prototype.SayHello=function(){
    console.log("Hello " +this.name+"\nAge : " + this.age)
}
var user1 = new User("Artitaya",23);
console.log(user1)




// ใช้ Class
class User2 {
    // เก็บตัวแปรแบบ const
    constructor(name,age) {
        this.name1 = name
        this.age = age
    }
    Say(){
        console.log("----- การใช้ Class ----- \n"+"Hello " + this.name1 + "\nAge : "+this.age)
    }
}
let user2 = new User2("artitaya",23)
// เรียกใช้ function
user2.Say()