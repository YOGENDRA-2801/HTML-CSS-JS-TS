class Product {

    name : string ;
    price : number ;
    pID : number ;
    inCart : boolean ;

    constructor(naam:string, daam:number, id:number) ;
    constructor(naam:string, daam:number, id:number, addCart:boolean) ;

    constructor(naam:string, daam:number, id:number, addCart?:boolean) {
        this.name = naam ;
        this.price = daam ;
        this.pID = id ;
        this.inCart = addCart || false ;
    }

    addToCart() : void {
        this.inCart = true ;
    }

    buyProduct() : string {
        if (this.inCart) {
            return `Product ${this.name} with ID ${this.pID} is purchased for ${this.price} rupees`
        } else {
            return "No product purchased" ;
        }
    }
}

let samaan1 = new Product("IPhone 12", 12345, 101) ;
console.log(samaan1.buyProduct());
samaan1.addToCart() ;
console.log(samaan1.buyProduct());

let samaan2 = new Product("IPhone 12", 12345, 101, true) ;
console.log(samaan2.buyProduct());