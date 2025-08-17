
const GREET = "GM" ;
console.log (`${GREET} from YOY`) ;

let a = 2 ;
console.log(a) ;
let b = 3 ;
{
    // console.log(a) ;  // =>  ager isko akele run karega to ho jayega but niche(redeclaring the same) walo k sath karega to error  in the same blk
    let a = 4 ;
    console.log(a) ;
}
console.log(a) ;
console.log(b);

const product = {
    name : "Parker" ,
    price : 270 ,
    color : "black"
} ;
console.log(product) ; 
console.log(product.name) ;  console.log(product["name"]) ;
console.log(typeof product) ;