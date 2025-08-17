function showData() : void {
    let name : string = (document.getElementById("name") as HTMLInputElement).value
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let password = (document.getElementById("password") as HTMLInputElement).value;
    console.log( name, email, password );
}

// ✅ Global window object पर assign kiya
(window as any).dikhaao = showData;  // dikhaao is window object from html element
// Function को globally expose kiya

console.log("Hello");

// getElementById() ka return type HTMLElement | null hota hai
// HTMLElement ke pass value property nahi hoti, isliye TypeScript error deta hai
// as HTMLInputElement likhne se TypeScript ko pata chal jaata hai ki ye input element hai jisme value hoti hai