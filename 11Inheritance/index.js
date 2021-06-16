// Inheritance การสืบทอดคลาส
class Admin {
    constructor(){
        console.log("Call Constructor")
    }
    isPermission(){
        console.log("Read Write Data From Database")
    }
}
// ใช้ extends ดึงคุณสมบัติของ Admin
class User extends Admin {
    constructor(name,age){
        // super() เรียกใช้งาน constructor ของคลาส Admin
        super()
        this.name = name
        this.age = age
    }
    SayHi() {
        console.log("Hello "+this.name + "\nAge : " + this.age)
    }
}
let user = new User("Artitaya",23)
user.SayHi()
// เรียกใช้งาน function ในคลาส Admin ผ่านคลาส User
user.isPermission()