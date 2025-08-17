function display() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(name, email, password);
}
console.log("Hello");
export {};
// getElementById() ka return type HTMLElement | null hota hai
// HTMLElement ke pass value property nahi hoti, isliye TypeScript error deta hai
// as HTMLInputElement likhne se TypeScript ko pata chal jaata hai ki ye input element hai jisme value hoti hai
//# sourceMappingURL=script.js.map