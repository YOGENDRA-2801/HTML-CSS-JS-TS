console.log("Funtion to add 2 numbers") ;

// function sum (num1 , num2) {
//     return num1+num2 ;
// }
// console.log(`Sum of 26 and 78 is ${sum(26,78)} `) ;

console.log("Funtion to multiply 2 numbers") ;

// const guda = (num1 , num2) => {
//     return num1 * num2 ;
// } 
// console.log(`Multiplication of 26 and 78 is ${guda(26,78)} using ${guda} `) ;

console.log("Funtion to return vowels count") ;

/*    // First Approach 
function vowel ( word ) {
    const vowel_arr = ['a', 'e', 'i', 'o', 'u'] ;   let count = 0
    for (let letter of word) {
        for ( let i of vowel_arr ) {
            if ( i == letter.toLowerCase() ) {
                count++ ;
            }
        }
    }
    return count ;
}
console.log ( vowel("AweXIyoZU") ) ;    */

/*    // Second Approach
function vowel ( word ) {
    const vowel_arr = ['a', 'e', 'i', 'o', 'u'] ;   let count = 0
    for (let letter of word.toLowerCase()) {
        if ( vowel_arr.includes(letter) ) {
            count++ ;
        }
    }
    return count ;
}
console.log ( vowel("AweXIyoZU") ) ;    */

/*    // Using Arrow & Set
const vowel = ( word ) => {
    const vowel_set = new Set(['a', 'e', 'i', 'o', 'u']) ;    let count = 0
    for (let letter of word.toLowerCase()) {
        if ( vowel_set.has(letter) ) {
            count++ ;
        }
    }
    return count ;
}
console.log ( vowel("AweXIyoZU") ) ;    */

/*
const usr_num = 8 ; 
function user_arr(num) {   
    const arr = [] ;
    for (let i = 1 ; i <= num ; i++ ) {  arr[i-1] = i ;  }
    const sum = arr.reduce( (prev_val, crnt_val)=>{  return prev_val+crnt_val } ) ;
    const pro = arr.reduce( (prev_val, crnt_val)=>{  return prev_val*crnt_val } ) ;
    return ` 
    user array is : ${arr}
    product of array element is : ${pro} 
    sum of array element is : ${sum}  
    `
}
console.log(user_arr(usr_num)) ;
*/

