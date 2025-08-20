/* PROMISES
function test1() {
    console.log("TESTING...");
}
function complexFunc1(): Promise<string> {
    return new Promise(
        (resolved) => {
            setTimeout(() => {
                console.log("Promise Completed");
                resolved("result is here")
            }, 1000);
        }
    );
}
complexFunc1().then(
    (resolvedData)=>{
        console.log(resolvedData);
        test1() ;
    }
)

type student = {
    name : string ;
    rollno : number ;
}
function test2() {
    console.log("TESTING...");
}
function complexFunc2(): Promise<student> {
    return new Promise(
        (resolved) => {
            setTimeout(() => {
                console.log("Promise Completed");
                resolved(
                    {
                        name:"YOY" ,
                        rollno:57
                    }
                )
            }, 1000);
        }
    );
}
complexFunc2().then(
    (resolvedData:student)=>{
        console.log(resolvedData);
        test2() ;
    }
)
*/
async function apiCallHand() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // console.log(result) ;
    const data = await result.json();
    return data;
}
console.log(apiCallHand());
export {};
// apiCallHand() ;
//# sourceMappingURL=promises-api.js.map