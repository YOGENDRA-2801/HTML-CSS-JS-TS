// Special -- any , unknown , void , never
/* any -- turns off type checking or disables type safety
let shabd : any = "Yogendra" ;
shabd = true ;  shabd = 100 ;   console.log(shabd) ;
let age : number = shabd ;
shabd = "India" ;
console.log(shabd+1) ; // output -- India1
console.log(shabd.toUpperCase); // output -- [Function: toUpperCase]
*/
/* unknown -- 'require type chk before any operation' & 'Can only assign to unknown or any'
let shabd : unknown = "Yogendra" ;
shabd = true ;  shabd = 100 ;   console.log(shabd) ;
// let age : number = shabd ; // -- Error
if ( typeof shabd === "string") {
    console.log( "Name of person is : ", shabd.toUpperCase);
}
else if ( typeof shabd === "number") {
    const score = shabd - 1 ;
    console.log("Score of person is : ", score);
}
else {
    console.log("Invalid response is given", shabd);
}
*/
/* never -- func/variable/... kuch rtn krne k state m hi nahi h , like in case of error & infinite loop ; rarely used */
function annth() {
    while (true) {
        console.log("Will not end");
    }
    let word = "execution yaha tak nahi pahuch payega hence function ka endpoint reach hi nahi hoga";
}
function yerror() {
    throw new Error("Will not let the function finist its execution");
}
/* void -- will not return anything , can also be used in place of never */
function khali() {
    console.log("Not returning anything");
}
export {};
//# sourceMappingURL=special-type.js.map