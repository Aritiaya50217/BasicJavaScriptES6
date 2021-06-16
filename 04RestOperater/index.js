// Rest Operator(...) การรับค่าหลายค่า

const addUser = (name,last,...city)=>{
    return "Username : " + name + " " + last  +"\nCity : " + city
}
console.log(addUser("artitaya","yaemjaraen","Lopburi"))
// กรณีมีจังหวัดมากกว่า 1 ค่า
console.log(addUser("a","b","lopburi","singburi","bangkok"))

