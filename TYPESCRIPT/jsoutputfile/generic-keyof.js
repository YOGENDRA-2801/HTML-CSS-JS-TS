/* GENERIC -- reusable function/class/interface that works with variety of DT and maintains type safety
function display<T>(word:T):T{ // T ek placeholder type hai jo function call ke waqt decide hota hai.
    console.log(typeof word);
    return word ;
}
display(12);  display<string>("abcd");  display(true);
display([12,23,34]);  display<string[]>(["abc", "def", "ghi"]);
display({'a':1, 'b':2, 'c':3});

function show<T>(stmnt:T[]):T | undefined{ // Yahaan <T> matlab ye function generic hai. and :T return type hai and undefined T ka part nahi hota by default.
    return stmnt[1] ;
}
show(["abc", "def", "ghi"]);
*/
const insaan = {
    name: "Yogendra",
    age: 22
};
let human1; // valid values can be "name", "age"
human1 = "name";
// human1 = "Yogendra" ; Error -- Type '"Yogendra"' is not assignable to type 'keyof PersonData'
human1 = "age";
// human1 = 22 ; Error -- Type '22' is not assignable to type 'keyof PersonData'
let human2;
human2 = "name";
human2 = "age"; // ctrl+space for valid possible value
let human3;
human3 = "age";
human3 = "name"; // ctrl+space for valid possible value
console.log(typeof insaan);
export {};
//# sourceMappingURL=generic-keyof.js.map