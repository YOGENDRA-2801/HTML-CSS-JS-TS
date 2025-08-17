"use strict";
// Primitive -- number , string , boolean , null , undefined , bigInt , symbol  [lower case]  
Object.defineProperty(exports, "__esModule", { value: true });
/* number
    var ankh : number = 82 ;
    var ptAnkh : number = 99.99 ; // decimal number k liye bhi same datatype use hota hai
    var octalValue : number = 0o17212 ; // for octal value prefix with 0o1...
    var hexValue : number = 0x345A ; // for hex value prefix with 0x...
    var binaryValue : number = 0b01011 ; // for binary value prefix with 0b...
    var strNumber = "100" ;  console.log(strNumber + ankh) ;
    var str2Num1 = Number(strNumber) ;  console.log(str2Num1 + ankh) ; // use Number() for converting string to number
    var str2Num2 = +str2Num1 ;  console.log(str2Num2 + ankh) ; // shortcut prefix with '+' to get it converted
    var tyinfr = 78 ; // type inference -- will automatically detect and declare the type
    tyinfr = 89 ; // okay as type is number
    //tyinfr = "5678" ; // error as type is number
*/
/* string
    var str1 : string = "Yogendra" ;  // double quote
    var str2 : string = 'Yogendra' ;  // single quote
    var str3 : string = `Yogendra` ;  // template reference variable
    var umar : number = 22 ;
    var bio : string = `My name is ${str1} and age is ${umar} year` ; console.log(bio) ;
    var strUmr1 : string = umar.toString() ;  // convertion to string
    var strUmr2 : string = "" + umar ;  // convertion to string
*/
/* boolean
    var state : boolean = false ; // False , 0 , ... -- not allowed
    var other : boolean = true ; // true , 1 , ... -- not allowed
*/
/* null -- Complete absence of value
    var data : null = null ; console.log(typeof data) ; // type is object
    var user : null | string = null ; console.log(typeof user) ; // generally null is used in combination with other type
    user = "YoY" ; console.log(typeof user) ; // type will be based on value
*/
/* undefined -- Declared but not initialized
var data : undefined = undefined ; console.log(typeof data) ; // type is undefined
var user : undefined | string = "YoY" ; console.log(typeof user) ; // type will be based on value
user = undefined ;
console.log( user == null ) ; // true
// == (Loose Equality) : Type conversion (type coercion) karta hai before comparison. null aur undefined ke liye special rule hai: kyunki loose equality me JavaScript dono ko “equal” treat karta hai, but sirf ek dusre ke liye (aur kisi ke liye nahi).
console.log(user === null) ; // false
// === (Strict Equality) : No type conversion hota hai. Values equal hone ke liye type bhi same hona chahiye. undefined ka type "undefined", null ka type "object" hota hai → so not equal.
*/
/* bigInt
var population : bigint = 123456789n  ; // bigint value must be suffixed with 'n'
var userid = 890n ; // type inference -- automatic type detection
// var floatNum : bigint = 6789.3n ; // bigint must always be an Integer literal
let maxNum : number = Number.MAX_SAFE_INTEGER ; // any number greater than 9007199254740991 must be stored in bigint var
console.log(maxNum + 2) ;  // ambigous operation -- number type (maxNum) k range s bahr answer h hence ambigous result dega
// console.log(userid + maxNum) ;  // no operation can be performed between number and bigint
*/
/* symbol -- Generates hidden unique and immutable value (even if description is same)
let paisa : symbol = Symbol() ;
const sym1 : symbol = Symbol("key") ; // description is optional
const sym2 : symbol = Symbol("key") ;
console.log(sym1 == sym2) ; // false -- same type but different/unique value
const obj = {
    "naam" : "Yogendra" ,
    [paisa] : 25000
}
console.log(obj) ;
console.log(obj[paisa]) ;   console.log(obj.naam) ;
*/
/* console.log + obj + let */
let naam = "YOY";
// naam = 82 ;  // error -- type inference ne variable ka type already string set kr diya hai
let email = "yoy@gmail.com";
let pass = "123";
console.log({ naam, email, pass }); // #1 -> { naam: 'YOY', email: 'yoy@gmail.com', pass: '123' }
console.log(naam, email, pass); // #2 -> YOY yoy@gmail.com 123
// object shorthand -- 
// 1. Yaha { naam, email, pass } ek object literal bana raha hai. 
// 2. JavaScript me agar tum object shorthand use karte ho (matlab key aur variable ka naam same hai), to wo kuch aisa banata hai: #1
//# sourceMappingURL=primitive-datatype.js.map