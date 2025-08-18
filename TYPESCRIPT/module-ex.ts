import { Auth } from "./ts-modules/auth";
import type User from "./ts-modules/User";

const studentInfo : User = {
    name : "Yogendra" , 
    password : "12345" 
} 

class Student extends Auth { }
let vidyarthi = new Student() ;

vidyarthi.validate(studentInfo.name, studentInfo.password) ;