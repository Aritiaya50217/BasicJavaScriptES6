// Spread Operator การกระจายค่า

// กระจายค่าใน Array
/*
let fruit = ['มะม่วง','ส้ม','แตงโม']
console.log(fruit)
let newFruit = ['ทุเรียน']
console.log(newFruit)
let allFruit = [...fruit,...newFruit]
console.log(allFruit)
*/

// กระจายค่าใน Object
let product={name:"ทุเรียน",price:200}
console.log(product)
let newProduct={... product,category:"ผลไม้"}
console.log("เพิ่ม category \n",newProduct)
let newPrice = {...newProduct,price:500}
console.log("เปลี่ยน ราคาเป็น 500 \n",newPrice)