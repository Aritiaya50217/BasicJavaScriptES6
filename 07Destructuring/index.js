// Destructuring Object
// แบบเดิม
var person = {
    name : "oil",
    skill : "Javascript Python"
}
// สร้างตัวแปรดึงค่า มาจาก person
var showName = person.name
var showSkill = person.skill
console.log(`Name : ${showName}
Skill : ${showSkill}`);

// แบบใหม่
var user = {
    name : "oil",
    skill : "Javascript Python"
}

let {name,skill} = user
console.log(`Destructuring Object !!!
Name : ${showName}
Skill : ${showSkill}`)