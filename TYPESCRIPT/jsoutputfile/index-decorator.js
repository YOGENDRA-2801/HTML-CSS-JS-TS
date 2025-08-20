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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* DECORATOR -- Decorator ek special type ka function hota hai , @ symbol se likha jata hai ,  */
// classes, methods, properties, accessors(get,set), ya parameters pe lagaya ja sakta hai.
// Ye basically runtime pe chalke, us jagah (class/method/etc.) ke baare me extra logic add kar dete hain.
// decorator functions run hote hain at the time of class definition / load time, not when methods are called or object creation .
// CLASS DECORATOR
function Logger(Konstructor) {
    console.log(Konstructor.name);
}
let Student = class Student {
    naam;
    constructor(naam) { this.naam = naam; }
};
Student = __decorate([
    Logger
], Student);
let vidyarthi = new Student("Yogendra"); // O/P -- Student
// PROPERTY DECORATOR
function LogProp(lakshye, chabi) {
    console.log("TARGET DETAIL", lakshye);
    console.log("KEY DETAIL", chabi);
}
class Course {
    naam;
    marks = 100;
    constructor(naam) { this.naam = naam; }
}
__decorate([
    LogProp
], Course.prototype, "naam", void 0);
__decorate([
    LogProp
], Course.prototype, "marks", void 0);
let kourse = new Course("BSCUIT");
// FUNCTION DECORATOR -- used to override  implementation of function at the time execution
function LogMethod1(target, key, descriptor) {
    console.log("KEY 1 : ", key);
    console.log("TARGET 1 : ", target);
}
function LogMethod2(target, key, descriptor) {
    console.log("KEY 2 : ", key);
    console.log("TARGET 2 : ", target);
    descriptor.value = function sum(a, b) {
        return `ANSWER IS ${a + b}`;
    };
}
class Teacher {
    teach() {
        console.log("Teaching...");
    }
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    LogMethod1
], Teacher.prototype, "teach", null);
__decorate([
    LogMethod2
], Teacher.prototype, "sum", null);
let shikshak2 = new Teacher();
console.log(shikshak2.sum(2, 3));
export {};
//# sourceMappingURL=index-decorator.js.map