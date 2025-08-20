/* UTILITY TYPE -- Built in type used to transform or manipulate other types */

type CollgeData = {
    name : string , 
    location : string , 
    aided? : boolean ,  // ? -- Optional Property means provide kiya to thik else implicitly undefined
    branch : number
}

// Partial -- Not required to consider all the property
/* 
const vidyale1 : Partial<CollgeData> = {name:"IIT", aided:false}
function getInfo1 (data : Partial<CollgeData>) : void {  }
getInfo1( {name:"YOY", location:"Mumbai"} )
*/

// Required -- You have to provide value for all properties including optional (?) properties also
/* 
function getInfo2 (data : Required<CollgeData>) : void {  }
getInfo2( {name:"VJTI", location:"Mumbai", aided:false, branch:9} )
function getInfo3 (data : CollgeData) : void {  }
getInfo3( {name:"VJTI", location:"Mumbai", branch:9} )
*/

// Readonly -- once value is assigned it can't be changed
/* 
const vidyale2 : Readonly<CollgeData> = {name:"IIT", location:"Mumbai", aided:false, branch:9}
interface school1 { name : string ; readonly fee : bigint }
type school2 = { name : string ; readonly fee : bigint }
const school3 : { name : string ; readonly fee : bigint } = {name : "ABCD", fee:123456789n}
*/

// Pick -- when you want to pick only certain property out of given object
/* 
const vidyale4 : Pick<CollgeData, 'aided' | 'name'> = {name:"IIT", aided:false}
*/

// omit -- when you want to omit/remove certain property out of given object
/* 
const vidyale5 : Omit<CollgeData, 'branch' | 'location'> = {name:"IIT", aided:false}
*/

// Exclude -- used when ek particular jagah per kuch values from the given union set nahi use krni
/* 
type APIStatus1 = "pending" | "error" | "success" | "loading"
let apiCall1 : Exclude<APIStatus1, "pending"> = "success" ;
apiCall1 = "error" ;
apiCall1 = "loading" ;
// apiCall = "pending" ;  Error -- Type '"pending"' is not assignable to type '"error" | "success" | "loading"'
*/

// Extract -- when you want to extract only certain property out of given union set
/* 
type APIStatus2 = "pending" | "error" | "success" | "loading"
let apiCall2 : Extract<APIStatus2, "error" | "loading" | "success"> = "success" ;
apiCall2 = "error" ;
apiCall2 = "loading" ;
*/

// NanNullable -- it automatically Extract null and undefined from the given set of values
/* 
type RandomType = number | string | boolean | null | undefined
let randomData : NonNullable<RandomType> = "YOY" ;
randomData = 82 ;
randomData = true ;  // randomData = null ; Error -- Type 'null' is not assignable to type 'NonNullable<RandomType>'
*/

// Record -- map/object type banata hai jisme keys aur unke corresponding values ka type define kar sakte ho.

type Marks1 = Record<string, number> ;
const ankh1 : Marks1 = {
    history : 62 ,
    maths : 72 ,
    science : 82
}

type studentSub = "physics" | "maths" | "chemistry" ;
type Marks2 = Record<studentSub, number> ;
const ankh2 : Marks2 = {
    physics : 62 ,
    maths : 72 ,
    chemistry : 82 
    // history: 100 ❌ error (kyunki "history" subject union me nahi hai)
}

