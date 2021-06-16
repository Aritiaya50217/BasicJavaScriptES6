/* กรณีมีคำสั่งมากกว่า 1 บรรทัด มีการ return
function add (a,b) {
    return a+b
}
*/

// use arrow function
// arrow function มีการ return object
// ไม่มีการใช้ {}
const add=(a,b)=> a+b
const a = a => a + 200
let result = add(100,20)
let result2 = a(50)
console.log("result : ",result)
console.log(result2)
document.getElementById("result").innerHTML = result

// return object
const student=(name,age)=>({name:name,age:age})
let result3=student("Oil",23)
console.log(result3)
