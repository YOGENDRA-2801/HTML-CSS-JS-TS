/* INDEX SIGNATURE -- used to define dynamic(in-terms of size) keys while specifying the type of their value  
const empdata : 
    { [key:string]:number|string|boolean } = 
        { name:"Yogendra" , age:22 , employed:true } ;
console.log(empdata);

type UserData = {
    [key:string]:number
}
let manushye : UserData = {
    age : 22 ,
    salary : 25000
}
manushye = {
    age : 22 ,
    salary : 25000,
    id : 101 
}

type InsaanData = {
    name : string,
    employed : boolean ,
    readonly height : number,
    [key:string]:number|string|boolean
}
let human : InsaanData = {
    name : "YOY",
    employed : true ,
    height : 180,
    kuchBhi : "ABCD",
    randomNum : 82
}
// human.height=179 ; Error -- Cannot assign to 'height' because it is a read-only property.
human.kuchBhi = "qwert" ;
*/

/* DECORATOR -- Decorator ek special type ka function hota hai , @ symbol se likha jata hai ,  */
// classes, methods, properties, accessors(get,set), ya parameters pe lagaya ja sakta hai.
// Ye basically runtime pe chalke, us jagah (class/method/etc.) ke baare me extra logic add kar dete hain.
// decorator functions run hote hain at the time of class definition / load time, not when methods are called or object creation .

// CLASS DECORATOR -- Class decorator ka argument hamesha constructor function hota hai
// function Logger(Konstructor: Function) {
//     console.log(Konstructor.name);
// }
function Logger<K extends { new(...args: any[]): {} }>(Constructor: K) {
    console.log(Constructor.name);
}
@Logger
class Student {
    naam : string ;
    constructor(naam:string) {this.naam=naam}
}
let vidyarthi = new Student("Yogendra");  // O/P -- Student

// PROPERTY DECORATOR
function LogProp(lakshye:any, chabi:any) {
    console.log("TARGET DETAIL", lakshye)
    console.log("KEY DETAIL", chabi);
}
class Course {
    @LogProp
    naam : string ;
    @LogProp
    marks : number = 100 ;
    constructor(naam:string) {this.naam=naam}
}
let kourse = new Course("BSCUIT"); 

// FUNCTION DECORATOR -- used to override  implementation of function at the time execution
function LogMethod1(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("KEY 1 : ", key);
    console.log("TARGET 1 : ", target);
} 
function LogMethod2(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("KEY 2 : ", key);
    console.log("TARGET 2 : ", target);
    descriptor.value = function sum(a:number, b:number) : string {
        return `ANSWER IS ${a+b}` ;
    }
} 
class Teacher {
    @LogMethod1
    teach() {
        console.log("Teaching...");
    }
    @LogMethod2
    sum(a:number, b:number) : number {
        return a+b ;
    }
}
let shikshak2 = new Teacher() ;
console.log(shikshak2.sum(2,3));