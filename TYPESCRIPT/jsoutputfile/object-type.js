"use strict";
// Object -- array , tuple , object 
Object.defineProperty(exports, "__esModule", { value: true });
/* array -- predefined + collection of same DT */
let wholenum = [0, 1, 2, 3, 4, 5, 6, 7];
let avengers = ["Tony", "Thor", "Bruce", "Steve"];
let students = ["yamraj", "chitragupt"];
let cities = ["Thane", "Mumbai", "Navi Mumbai"];
wholenum.pop();
avengers.push("Clint");
console.log(wholenum);
console.log(avengers, students, cities);
/* tuple -- fixed*-length + ordered collection + datatype
    const empdata : [string, number, boolean] = ["Yogendra", 25000, true] ;
    console.log(empdata);
    // let clientdata : [string, number, boolean] = ["Yogendra", 25000, true, "local"] ;  // Error - Source has 4 element(s) but target allows only 3.
    empdata.push('developer') ;  // Will not give error
    console.log(empdata);
    let countrydata = ["India" , "Hinduism" , 1947 , 1950] ; // type inference
    console.log(typeof countrydata);
    let biodata : readonly[string, number] = ["Yogendra" , 22] ;
*/
/* object

const bio = {name:"Yogendra" , age:22 , employed:false} ;
console.log(bio);
bio.employed = true ;  // changing the value
console.log(bio);

const vehicle : {name:string , type:string, wheels:number} = {name:"Chiron", type:"supercar", wheels:4} ;  // types are for the values key are string
// vehicle.cost = 99999.99 ;  // unable to add as property don't exist
console.log(vehicle);

const dept : {name:string, strength:number, head:undefined|string} = {name:"development", strength:10, head:undefined} ;
console.log(dept);
dept.head = "Yogendra" ;   // 1 - adding value
console.log(dept);

const empdata : { [key:string]:number|string|undefined|boolean } = {name:"Yogendra" , age:22 , employed:true} ;   // dhyan se dekh
console.log(empdata);
empdata.department = "development" ;   // 2 - adding value
console.log(empdata);

const insaan : {9:string, age:number, address:{}} = {9:"Yogendra", age:22, address:{houseno:101, pincode:10101}} ;   // nested object
console.log(insaan);

*/ 
//# sourceMappingURL=object-type.js.map