// let num = prompt ("Enter a valid natural number ... ") ;
let sum = 0 ;   let ankh = 0 ;   let hintCunt = 0 ;   let stud_mrk = [85,97,44,37,76,60] ;   let total = 0 ;
let itm_arr = [250, 645, 300, 900, 50] ; 

// ----- For Loop -----

/*
for (let itr = 0 ; itr <= num ; itr++) {
    sum = itr + sum  ;
}
console.log(`Sum of first ${num} natural number is : ` , sum ) ;
*/

/*
console.log ( `Prices Before Discount ${itm_arr} ` ) ;
for ( let price = 0 ; price<itm_arr.length ; price++ ) {
    itm_arr[price] = itm_arr[price] - itm_arr[price]*0.1 ;
}
console.log ( `Prices After Discount ${itm_arr} ` ) ;
*/

// ----- While Loop -----

/*
while( ankh <= 10 ) {
    if ( ankh%2 == 0 ) {
        console.log(ankh) ;
    }
    ankh++ ;
}
*/

// ----- Do-While Loop -----

/*
let guess = prompt(" Guess the number in 5 attempt with 4 hint ... ") ;
let ans = Math.floor(100 * Math.random()) ;
do {
    if ( guess > ans ) {
        console.log("Your guessed number is greater than Correct Number") ;
    }
    else if ( guess < ans ) {
        console.log("Your guessed number is less than Correct Number") ;
    }
    else if ( guess != ans ) { // Since prev else-if true hone pr next p nhi jata 
        console.log("Invalid Number") ;
    }
    guess = prompt(" Guess the number ... ") ;
    if (hintCunt >= 4) {
        break ;
    }
    hintCunt++ ;
    console.log("Hint given" , hintCunt ) ;
} 
while ( guess != ans ) ;
if (hintCunt <= 4 && guess == ans ) {
    console.log("Congratulations you guessed correctly in " , hintCunt , "attempts") ; 
}
else {
    console.log("You Failed") ;
}
*/

// For-Of Loop -- for array & string

/*
for ( let marks of stud_mrk) {
    total = total + marks ;
}
console.log(`Average of Entire class is : ${total / stud_mrk.length} % ` ) ;
*/

// For-In Loop -- for object & array (not preferred)