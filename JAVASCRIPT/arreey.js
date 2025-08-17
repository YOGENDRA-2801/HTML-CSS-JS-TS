let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"] ;
const num = [5,6,7,8,9] ;    const marks = [99,88,777,66,55,] ;   const factorial = 5 ;  const arr = [] ;

/*
console.log( `Original Array -- ${companies} ` ) ;
companies.shift() ;
companies.splice( companies.indexOf("Uber") , 1 , "Ola" ) ;
companies.push( "Amazon" ) ;
console.log( `Modi Array -- ${companies} ` ) ;
*/

/*
num.forEach( (element)=>{
    console.log( `Square of ${element} is ${element**2} ` ) ;
} ) ;
*/

/*
const new_arr = num.filter( (element)=>{
    return element%2 === 0 ;
} ) ;
console.log(new_arr) ;
*/

/*
let finalans = num.reduce( (prev_val , crnt_val)=>{
    // return (prev_val>crnt_val) ? prev_val : crnt_val ;
    if ( prev_val>crnt_val ) {
        return prev_val ;
    }
    else {
        return crnt_val ;
    }
} ) ;
console.log(finalans) ;
*/

/*
const scoler = marks.filter( (element)=>{
    return element>=90 ;
} ) ;
console.log (scoler) ;
*/

for(let i = 1 ; i <= factorial ; i ++ ) {
    arr[i-1] = i ;
}
const answer = arr.reduce( (prev_val, crnt_val)=>{
    return prev_val*crnt_val ;
} ) ;
console.log( ` Factorial of ${factorial} is ${answer} ` ) ;
