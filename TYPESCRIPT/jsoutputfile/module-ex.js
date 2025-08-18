import { Auth } from "./ts-modules/auth";
const studentInfo = {
    name: "Yogendra",
    password: "12345"
};
class Student extends Auth {
}
let vidyarthi = new Student();
vidyarthi.validate(studentInfo.name, studentInfo.password);
//# sourceMappingURL=module-ex.js.map