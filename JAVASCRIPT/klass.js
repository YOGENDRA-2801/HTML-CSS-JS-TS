// const obj = {
//     naam : `Yogendra Yadav` ,
//     age : 21 ,
//     bio : function () {
//         console.log( `Name : ${this.naam} , Age : ${this.age} ` )
//     } ,
//     info () {
//         console.log( `Name : ${this.naam} , Age : ${this.age} ` )
//     }
// }
// const emp = {
//     role : "Dev" ,
// }
// emp.__proto__ = obj ;
// console.log(emp.naam) ;

console.log(" ----- First Question ----- ") ;
class User {
    status = "Alive" ;
    name ;
    email ;
    constructor(name, email) {
        this.name = name ;
        this.email = email ;
    }    
    viewData () {
        console.log(`User name : ${this.name}\nEmail Id : ${this.email} `) ;
    }
}
const u1 = new User("Yogendra", "yoy@gmail.com") ;
u1.viewData() ;

console.log(" ----- Second Question ----- ") ;
class Admin extends User {
    constructor () {
        super() ;
    }
    editData (newname , newemail) {
        this.name = newname ;
        this.email = newemail ;
    }
}
const a1 = new Admin() ;
a1.editData("YY", "y.com") ;
a1.viewData() ;