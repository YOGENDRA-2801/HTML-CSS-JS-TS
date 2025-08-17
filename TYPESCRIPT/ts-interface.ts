interface person {
    name : string ,
    age : number ,
    status : string 
}

interface employee extends person {
    department : string 
}

const vidyarthi : person = {
    name : "Yogendra" ,
    age : 22 ,
    status : "learning" 
}
console.log(vidyarthi);

const shikshak : employee = {
    name : "samay" ,
    age : 22,
    status : "lecturer" ,
    department : "development"
}
console.log(shikshak);
