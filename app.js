//JavaScript Object
// let user={
//   name:"ooh",
//   age:35,
//   phone:null,
//   status:true,
//   getData(){
//     console.log(`Name= ${this.name} , Age= ${this.age} years old`)
//   }
// }
// // user["name"]="gotto"  or user.name= "gotto"
// // console.log(user["name"])
// user.getData()

//json string
let myJSON=`{
    "name":"ooh",
    "age":35,
    "phone":null,
    "status":true
}`
//json parse -> json string ->js object
let myObj = JSON.parse(myJSON)
//json stringify -> js object -> json string (JSON.stringify())
console.log(typeof myObj)