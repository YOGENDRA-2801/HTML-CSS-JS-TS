// namespace -- logical grouping mechanism jisme related code ek hi scope ke andar organize karte hain to avoid naming conflict.
// export likhna padta hai ander ki class/interface/method/... per tabhi namespace ke bahar use kar sakte ho.
// export namespace = pure namespace ko dusre files me available banata hai.
var UserSpace;
(function (UserSpace) {
    // CLASS
    class Teacher {
        name;
        subject;
        constructor(name, subject) {
            this.name = name;
            this.subject = subject;
        }
        getInfo() {
            console.log(`Name : ${this.name}`);
            console.log(`Subject : ${this.subject}`);
        }
    }
    UserSpace.Teacher = Teacher;
    // FUNCTION
    function greet() {
        console.log("Hello World");
    }
    UserSpace.greet = greet;
    // PROPERTY
    UserSpace.collegeName = "IIT Bombay";
})(UserSpace || (UserSpace = {}));
const s1 = { age: 99, name: "ABC" };
console.log(s1);
const t1 = new UserSpace.Teacher("XYZ", "MNO");
t1.getInfo();
UserSpace.greet();
console.log(UserSpace.collegeName);
export {};
//# sourceMappingURL=namespaces.js.map