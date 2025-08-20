import { Auth } from "./ts-modules/Auth.js";
import type User from "./ts-modules/User.js";

class Student extends Auth { }

const studentInfo1 : User = {
    name : "Yogendra" , 
    password : "1234" 
} 

let vidyarthi1 = new Student() ;

vidyarthi1.validate(studentInfo1.name, studentInfo1.password) ;

studentInfo1.name = "Tom Cruise" ;
studentInfo1.password = "98765" ;
vidyarthi1.validate(studentInfo1.name, studentInfo1.password) ;