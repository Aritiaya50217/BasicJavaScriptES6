// การใช้ map
const addMessage=(first,... message)=>{
    return message.map(m=>first+message)
}
// ตัวแปร number รับค่ามากกว่า 1
const addNumber =(... number)=>{
    return  number.reduce((first,current) =>{
        // เอาเลขมาบวกกันทั้งหมดเรียงตามลำดับภายใน array
        return first + current
    })
}

console.log(addMessage("Hello ","JS","Node.js"));

console.log(addNumber(10,2,3,4,4,5,6,7));