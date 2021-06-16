// การต่อ string แบบเดิม

const name = "Oil "
const city = "Lopburi"
const all = "Name : " + name +"\nCity : "+ city
// console.log(all)


// แบบใหม่ ใช้ ``
const allName=`Name : ${name}City : ${city}`
const allName2=`Name : ${name}
City : ${city}`
console.log(allName)
console.log(allName2)