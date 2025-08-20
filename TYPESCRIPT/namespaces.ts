// namespace -- logical grouping mechanism jisme related code ek hi scope ke andar organize karte hain to avoid naming conflict.
// export likhna padta hai ander ki class/interface/method/... per tabhi namespace ke bahar use kar sakte ho.
// export namespace = pure namespace ko dusre files me available banata hai.

namespace UserSpace {
    // INTERFACE
    export interface Student {
        name : string ;
        age : number ;
    }
    // CLASS
    export class Teacher {
        name : string ;
        subject : string ;

        constructor(name: string, subject: string) {
            this.name = name ;
            this.subject = subject ;
        }

        getInfo() {
            console.log(`Name : ${this.name}`);
            console.log(`Subject : ${this.subject}`);
        }
    }
    // FUNCTION
    export function greet() : void {
        console.log("Hello World");
    }
    // PROPERTY
    export const collegeName = "IIT Bombay";
}

const s1 : UserSpace.Student = {age : 99, name:"ABC"} 
console.log(s1);

const t1 = new UserSpace.Teacher("XYZ", "MNO");
t1.getInfo() ;

UserSpace.greet() ;

console.log(UserSpace.collegeName);