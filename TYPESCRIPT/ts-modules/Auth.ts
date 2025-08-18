export class Auth {
    validate(name:string, password:string) {
        if (name=="Yogendra" && password=="1234") {
            console.log("Valid User");
        } else {
            console.log("Invalid User");
        }
    }
}