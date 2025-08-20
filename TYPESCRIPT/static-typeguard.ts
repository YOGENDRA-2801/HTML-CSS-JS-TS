/* STATIC 
class Company {
    static name : string = "XYZ" ;
    static display() : void {
        console.log(`Company name is ${this.name}`);
    }
}
console.log(Company.name);
Company.display() ;
*/

/* TYPEGUARD - typeof, instanceOf, Custom; used for prop ka 'DT narrow down krne k liye' ya 'actual DT check krne k liye'(union/inference/unknown) */

// typeof
function checkDataType(data:string|number|boolean) {
    switch (typeof data) {
        case "string":
            console.log("String Data Type");
            break;
        case "number":
            console.log("Number Data Type");
            break;  
        case "boolean" :
            console.log("Boolean Data Type");
            break;
        default:
            console.log("Other Data Type");
    }
}
// checkDataType(82) ;
// checkDataType("Yogendra") ;
// checkDataType(false) ;

// instanceof
class Human {  }
class Animal {  }
const insaan = new Human() ;
const jaanwar = new Animal() ;
function checkInstanceOf(zinda:Human|Animal) : void {
    if (zinda instanceof Human) {
        console.log("Instance Type is Human");
    } 
    else if (zinda instanceof Animal) {
        console.log("Instance Type is Animal")
    }
    else {
        console.log("Invalid instance");
    }
}
// checkInstanceOf(insaan) ;
// checkInstanceOf(jaanwar) ;

// Custom Typeguard
interface UserData {
    name : string ;
    city : string ;
}
interface UserInfo {
    id : number ;
    email : string ;
}
const jaankaari1 : UserData | UserInfo = {
    name : "Yogendra" ,
    city : "NYC"
}
const jaankaari2 : UserData | UserInfo = {
    id : 101 ,
    email : "yoy@gmail.com"
}
function chkUserDT(data : UserData | UserInfo) {
    if ((data as UserData).name != undefined) {
        console.log("Data Type is UserData");
    } else {
        console.log("Data Type is UserInfo");
    }    
}
chkUserDT(jaankaari1) ;
chkUserDT(jaankaari2) ;