// Advanced -- union , intersection , type alias , enum , literal
const insaan1 = { name: "Yogendra" };
const umar1 = { age: 22 };
const citizen1 = { name: "YoY", age: 22 };
export {};
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