/*
let name = "oil"
let last = "..."
let user = {
    // เรียกใช้ชื่อตัวแปร
    name ,last
}
console.log(user)
*/

function user(name,last,age){
    return {
        name,last,age,
    }
}
console.log(user("Artitaya","Yaemjaraen",23))