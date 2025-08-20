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
function checkDataType(data) {
    switch (typeof data) {
        case "string":
            console.log("String Data Type");
            break;
        case "number":
            console.log("Number Data Type");
            break;
        case "boolean":
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
class Human {
}
class Animal {
}
const insaan = new Human();
const jaanwar = new Animal();
function checkInstanceOf(zinda) {
    if (zinda instanceof Human) {
        console.log("Instance Type is Human");
    }
    else if (zinda instanceof Animal) {
        console.log("Instance Type is Animal");
    }
    else {
        console.log("Invalid instance");
    }
}
const jaankaari1 = {
    name: "Yogendra",
    city: "NYC"
};
const jaankaari2 = {
    id: 101,
    email: "yoy@gmail.com"
};
function chkUserDT(data) {
    if (data.name != undefined) {
        console.log("Data Type is UserData");
    }
    else {
        console.log("Data Type is UserInfo");
    }
}
chkUserDT(jaankaari1);
chkUserDT(jaankaari2);
export {};
//# sourceMappingURL=static-typeguard.js.map