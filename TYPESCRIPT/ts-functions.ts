function greet() {  // type inference
    return "Hello World" ; 
}

function fruits() : void {
    console.log("Apple");    
}

function driver() : string | boolean {
    let age : number = 12 ;
    if ( age < 18) {
        return "okay to drive" ;
    } else {
        return false ;
    }
}

function random() : any {
    let ankh : number = Math.floor( Math.random() * 100 )   ;
    if (ankh > 10) {
        return ankh ;
    } 
    else if (ankh > 20) {
        return true ;
    }
    else if (ankh > 30) {
        console.log("Timepass") ;
    }
    else {
        return "Random Text" ;
    } 
}
