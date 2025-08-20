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
// Partial -- Not required to consider all the property
const vidyale1 = { name: "IIT", aided: false };
function getInfo1(data) { }
getInfo1({ name: "YOY", location: "Mumbai" });
// Required -- You have to provide value for all properties including optional (?) properties also
function getInfo2(data) { }
getInfo2({ name: "VJTI", location: "Mumbai", aided: false, branch: 9 });
function getInfo3(data) { }
getInfo3({ name: "VJTI", location: "Mumbai", branch: 9 });
// Readonly -- once value is assigned it can't be changed
const vidyale2 = { name: "IIT", location: "Mumbai", aided: false, branch: 9 };
const school3 = { name: "ABCD", fee: 123456789n };
// Pick -- when you want to pick only certain property out of given object
const vidyale4 = { name: "IIT", aided: false };
// omit -- when you want to omit/remove certain property out of given object
const vidyale5 = { name: "IIT", aided: false };
let apiCall1 = "success";
apiCall1 = "error";
apiCall1 = "loading";
let apiCall2 = "success";
apiCall2 = "error";
apiCall2 = "loading";
let randomData = "YOY";
randomData = 82;
randomData = true;
// randomData = null ; Error -- Type 'null' is not assignable to type 'NonNullable<RandomType>'
// Record
"TYPESCRIPT/generic-keyof.ts";
export {};
//# sourceMappingURL=index-utility.js.map