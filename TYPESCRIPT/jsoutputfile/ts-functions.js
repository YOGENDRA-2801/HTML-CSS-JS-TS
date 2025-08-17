function greet() {
    return "Hello World";
}
function fruits() {
    console.log("Apple");
}
function driver() {
    let age = 12;
    if (age < 18) {
        return "okay to drive";
    }
    else {
        return false;
    }
}
function random() {
    let ankh = Math.floor(Math.random() * 100);
    if (ankh > 10) {
        return ankh;
    }
    else if (ankh > 20) {
        return true;
    }
    else if (ankh > 30) {
        console.log("Timepass");
    }
    else {
        return "Random Text";
    }
}
export {};
//# sourceMappingURL=ts-functions.js.map