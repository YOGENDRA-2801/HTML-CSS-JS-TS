/* 
  True -- 1 and False -- 0
  JS type conversion khud s kr leta h jaha jarurt hoti h wahi then back-2-original
  L-OP is apllied on logical expression , C-OP is applied on 2 value
  >> -- left side m leftmost ka hi copy daalta h 
  >>> -- left side m zero daal deta h 
  "else" ko apen "if" ki bina nhi likh skte 
  (18<age<25) => (18<age)<25 => hence true for all stmnt greater than 18 
  default hamesha last m daalne ka pahle dala to wahi exe ho jayega aur baki nhi
*/

let a = 5 ;
let b = 2 ;
let c = 5 ;
let d = "2" ;

/*  Arithmatic Operator  =>  + , - , / , * , % , **
console.log( `a + b =` , a+b ) ;   // 7
console.log( `a + b =` + a+b ) ;   // 52
console.log( `a - b =` , a-b ) ;   // 3
console.log( `a * b =` , a*b ) ;   // 10
console.log( `a / b =` , a/b ) ;   // 2.5
console.log( `a % b =` , a%b ) ;   // 1
console.log( `a ** b =` , a**b ) ;   // 25  */

/*  Unary Operator  =>  ++a , a++ , --a , a--
console.log( `a++ =` , a++ ) ;   // 5
console.log( `a value is now ` , a) ;   // 6
console.log( `++b =` , ++b ) ;   // 3
console.log( `a-- =` , a-- ) ;   // 6
console.log( `a value is now ` , a) ;   // 5
console.log( `--b =` , --b ) ; // 2  */ 

/* // Assignment operator  =>  = , += , -= , /= , %= , *= , **=
console.log( `a += 5 value of "a" becomes` , a+=5 ) ;
console.log( `a -= 5 value of "a" becomes` , a-=5 ) ;
console.log( `a /= 2 value of "a" becomes` , a/=2 ) ;
console.log( `a *= 2 value of "a" becomes` , a*=2 ) ;
console.log( `a **= b value of "a" becomes` , a**=b ) ;
console.log( `a %= b value of "a" becomes` , a%=b ) ; */ 

/*// Comparison Operator  => == , === , != , !== , > , >= , < , <=
console.log( a , b , c , d ) ;
console.log( `Value of a == c is` , a==c ) ;
console.log( `Value of d == b is` , d==b ) ; 
console.log( `Value of d === b is` , d===b ) ;
console.log( `Value of d != b is` , d!=b ) ;
console.log( `Value of a !== c is` , a!==c ) ;
console.log( `Value of a > b is` , a>b ) ;
console.log( `Value of b >= a is` , b>=a ) ;
console.log( `Value of b < a is` , b<a ) ;
console.log( `Value of a <= b is` , a<=b ) ;  */

/* Logical Operator  =>  || , && , !
console.log( `Value of ( a > b ) && ( b === d ) is` , ( a > b ) && ( b === d ) ) ;
console.log( `Value of ( a != c ) || (b == d ) is` , ( a != c ) || (b == d ) ) ;
console.log( `Value of ! ( a <= c ) is` , ! ( a <= c ) ) ;  */

// Bitwise Operator  =>  & , | , ~ , ^ , << , >> , >>>

/*  // Ternary Operator => ( a ) ? b : c ;
const marks = 88 ;
let result = ( marks >= 33 ) ? "Pass" : "Fail" ;
console.log (result) ;  */

/*  // Condition Statement  =>  if -- else if -- else
let age = 25 ;
if ( age <= 18 ) {
    console.log ( "You are junior" ) ;
}
else if ( (18 < age) &&  (age < 25) ) {
    console.log ( "You are an adult" ) ;
}
else if ( (25 <= age) && (age < 50)) {
    console.log ( "You are an man" ) ;
}
else {
    console.log ( "You are an old man" ) ;
}  */

/*  // Condition Statement  =>  switch statement
let fruit = "mangozzzz" ;
switch ( fruit ) {
    default :
        console.log ( `Given fruit is ${fruit}` ) ;
        break ;
    case "apple" :
        console.log ( `Given fruit is apple` ) ;
        break ;
    case "banana" :
        console.log ( `Given fruit is banana` ) ;
        break ;
    case "mango" :
    case "aam" :
        console.log ( `Given fruit is mango` ) ;
        break ;
    case "grapes" :
        console.log ( `Given fruit is apple` ) ;
        break ;
    
}  */

/* // Pahla Sawaal
let num = prompt("Enter a number ...") ;
console.log ( typeof num ) ; // string
if ( num%5 === 0 ) {
    alert("Given number is divisible by 5") ;
}
else {
    alert("Given number is not divisible by 5")
}
console.log ( typeof num ) ; // string  
*/

/*  Dusera Sawaal
let marks = prompt ( "Enter Your marks ..." ) ;
if ( (marks>=80)&&(marks<=100) ) {
    alert ("Your grade is A") ;
}
else if ( (marks>=70)&&(marks<=79) ) {
    alert ("Your grade is B") ;
}
else if ( (marks>=60)&&(marks<=69) ) {
    alert ("Your grade is C") ;
}
else if ( (marks>=50)&&(marks<=59) ) {
    alert ("Your grade is D") ;
}
else if ( (marks>=40)&&(marks<=49) ) {
    alert ("Your grade is E") ;
}
else {
    alert( "You are fail" ) ;
}
*/
