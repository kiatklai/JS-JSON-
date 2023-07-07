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
// let myJSON=`{
//     "name":"ooh",
//     "age":35,
//     "phone":null,
//     "status":true
// }`
// //json parse -> json string ->js object
// let myObj = JSON.parse(myJSON)
// //json stringify -> js object -> json string (JSON.stringify())
// console.log(typeof myObj)

const list = document.getElementById("list")

let output=''

fetch("user.json")
.then(res=>res.json())
.then(json=>{
    json.users.forEach(item => {
        output+="<li>"+item.name+"</li>"
    })
    list.innerHTML = output
}).catch(err=>{
    console.log(err)
})