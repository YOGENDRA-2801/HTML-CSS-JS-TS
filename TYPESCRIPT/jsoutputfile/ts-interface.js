const vidyarthi = {
    name: "Yogendra",
    age: 22,
    status: "learning"
};
// console.log(vidyarthi);
const shikshak = {
    name: "samay",
    age: 22,
    status: "lecturer",
    department: "development",
    workingHours: function () {
        console.log("Part Time : 4 Hours");
    }
};
// console.log(shikshak);
// shikshak.workingHours();
class Teacher {
    department;
    name;
    age;
    status;
    constructor(dept, naam, umar, state) {
        this.department = dept;
        this.name = naam;
        this.age = umar;
        this.status = state;
    }
    workingHours() {
        console.log("8 Hours Working");
    }
}
const t1 = new Teacher("Science", "Yogendra", 22, "Active");
console.log(t1);
t1.workingHours();
export {};
//# sourceMappingURL=ts-interface.js.map