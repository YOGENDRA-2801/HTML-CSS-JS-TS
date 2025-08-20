interface Person {
    name : string ,
    age : number ,
    status : string 
}

interface Employee extends Person {
    department : string 
    workingHours() : void ;
}

const vidyarthi : Person = {
    name : "Yogendra" ,
    age : 22 ,
    status : "learning" 
}
// console.log(vidyarthi);

const shikshak : Employee = {
    name: "samay",
    age: 22,
    status: "lecturer",
    department: "development",

    workingHours: function (): void {
        console.log("Part Time : 4 Hours");
    }
}
// console.log(shikshak);
// shikshak.workingHours();

class Teacher implements Employee {
    department: string;
    name: string;
    age: number;
    status: string;
    
    constructor(dept:string, naam:string, umar:number, state:string) {
        this.department = dept ;
        this.name = naam ;
        this.age = umar ;
        this.status = state ;
    }
    
    workingHours(): void {
        console.log("8 Hours Working");
    }
}
const t1 = new Teacher("Science", "Yogendra", 22, "Active") ;
console.log(t1) ;
t1.workingHours() ;