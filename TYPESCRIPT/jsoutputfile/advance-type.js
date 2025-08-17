"use strict";
// Advanced -- union , intersection , type alias , enum , literal
Object.defineProperty(exports, "__esModule", { value: true });
/* union -- multiple DT mese kisi ek ko choose kiya jata hai

let mixtype : string | number | [] = "Yogendra" ;
mixtype = 22 ;
mixtype = [] ;

function phun() : string | boolean | string[] {  // for union in func k case me type inference se bhi kaam ho jayga
    let age = 22 ;
    if ( age >= 18) {
        return "eligible to drive"
    }
    else if (age < 18 ) {
        return false ;
    }
    else {
        return ["eye test" , "mental test" , "mobility test"] ;
    }
}
console.log(phun());

function status(name:string | void | boolean) {
    if (typeof name == 'string') {
        return `Student name is ${name}`
    } else {
        return name ;
    }
}
console.log(status("Yogendra"));

*/
/* intersection -- multiple DT ka combination rhta hai
type personA1 = {name : string}
type personB1 = {age : number}
type personAB1 = personA1 & personB1 ;
const insaan1 : personA1 = {name : "Yogendra"}
const umar1 : personB1 = {age : 22 }
const citizen1 : personAB1 = {name:"YoY" , age:22}

interface personA2 {name : string}
interface personB2 {age : number}
type personAB2 = personA2 & personB2 ;  // # valid combo #
const insaam : personA2 = {name : "Yogendra"}
const umar : personB2 = {age : 22 }
const citizen : personAB2 = {name:"YoY" , age:22}
console.log(citizen);
*/
/* type alias -- used to define custom DT for obj , func , ... ;
type personA = {name : string}
type personB = {age : number}
type personAB = personA & personB ;
const insaan1 : personA = {name : "Yogendra"}
const umar1 : personB = {age : 22 }
const citizen1 : personAB = {name:"YoY" , age:22}
*/
/* enum -- group of named constant
enum Who {  // Most Preferred: String Enums. No bidirectional mapping
    teacher = "GALTIYA" ,
    student = "YOGENDRA" ,
    manager = "SAMAY"
}
console.log(Who);  // { teacher: 'galtiya', student: 'yogendra', manager: 'samay' }
console.log(Who.teacher);  // galtiya
// console.log(Who[0]);  // -- Error

enum Fruits {  // will provide bidirectional mapping
    APPLE ,
    BANANA ,
    CHEERY
}
console.log(Fruits);  // { '0': 'apple', '1': 'banana', '2': 'cheery', apple: 0, banana: 1, cheery: 2 }
console.log(Fruits[0]);  // apple
console.log(Fruits.BANANA);  // 1

const enum cities {  // Second Choice: const enum (for performance). No Bidirectional mapping
    THANE ,
    MUMBAI ,
    PUNE
}
// console.log(cities);  // Error :- 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query.
console.log(cities.PUNE);  // 2
let jagah = cities.THANE ;   console.log(jagah) ;  // 0
// console.log(cities[0]);  // Error :- A const enum member can only be accessed using a string literal.
*/
/* literal */
/*  type v/s interface
type -- 2 type's ko jodne k liye hum & , | use krte
interface -- 2 interface ko jodne k liye hum extend use krte
*/ 
//# sourceMappingURL=advance-type.js.map