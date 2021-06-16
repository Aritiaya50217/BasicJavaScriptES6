// Computed Property Name
// { key : value }
let food = {name:"Cake",price:200}
console.log(food)

let user = {
    // สามารถคำนวณภายใน property ได้
    ['user'+1*2] : "A",
    ['user'+2*2] : "B"
}
console.log(user)

// เปลี่ยนโครงสร้างภายในตัว Object
let name = "Cake"
let all = {
    // ใช้ [] เพื่อดึงค่าจากตัวแปร name ที่ประกาศไว้ด้านบน
    [name] : "Cake ส้ม",price:250,

}
console.log(all)

let food1 = "ข้าวผัด"
let menu = {
    // เอาตัวแปรมากำหนดเป็น property โดยใส่ [] ครอบ
    [food1] : food1 + "กระเพรา",
    // ต่อ string ใน property
    [food1+"กุ้ง"] : food1 + "ปลาหมึก"
}
console.log(menu)