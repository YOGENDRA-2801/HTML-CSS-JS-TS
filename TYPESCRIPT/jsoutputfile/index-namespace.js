/* INDEX SIGNATURE -- used to define dynamic(in-terms of size) keys while specifying the type of their value
const empdata :
    { [key:string]:number|string|boolean } =
        { name:"Yogendra" , age:22 , employed:true } ;
console.log(empdata);

type UserData = {
    [key:string]:number
}
let manushye : UserData = {
    age : 22 ,
    salary : 25000
}
manushye = {
    age : 22 ,
    salary : 25000,
    id : 101
}

type InsaanData = {
    name : string,
    employed : boolean ,
    readonly height : number,
    [key:string]:number|string|boolean
}
let human : InsaanData = {
    name : "YOY",
    employed : true ,
    height : 180,
    kuchBhi : "ABCD",
    randomNum : 82
}
// human.height=179 ; Error -- Cannot assign to 'height' because it is a read-only property.
human.kuchBhi = "qwert" ;
*/
export {};
//# sourceMappingURL=index-namespace.js.map