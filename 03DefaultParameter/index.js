// Default Parameter
// กำหนดค่าเริ่มต้นให้ parameter
const addUser=(FirstName,LastName,City="ไม่ได้ระบุ")=>{
    return FirstName + LastName +"City : " +  City
}

console.log(addUser("Artitaya ","Yaemjaraen ","Lopburi"))
// หากไม่ระบุ city จะแสดงคำว่า ไม่ได้ระบุ
console.log(addUser("Artitaya ","Yaemjaraen "))
let result = addUser("Artitaya ","Yaemjaraen ")
document.getElementById("addUser").innerHTML = result