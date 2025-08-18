/* INTRODUCTION + CONSTRUCTOR 
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

let samaan2 = new Product("IPhone 16", 12345, 101, true) ;
console.log(samaan2.buyProduct());
*/

/* ACCESS MODIFIER */
class Manufacturer {
    public name : string ;
    private country : string ;
    protected product : string ;
    proID : number ;  // default access modifier is public

    constructor (name:string, country:string, product : string, proID : number) {
        this.name = name ;
        this.country = country ;
        this.product = product ;
        this.proID = proID ;
    }
    
    public set setCountry(desh : string) {
        this.country = desh;
    }
    public get getCountry() : string {
        return this.country ;
    } 
    
    public set setProduct(saaman : string) {
        this.product = saaman;
    }
    public get getProduct() : string {
        return this.product ;
    }     
}
class Product extends Manufacturer {
    showProduct() {
        console.log(this.product);
    }
}

let newProduct = new Manufacturer("Lenovo", "India", "Ideapad", 201) ;
console.log("Manufacturer is : " , newProduct.name);
console.log("Product ID is : " , newProduct.proID);
console.log(newProduct);

newProduct.setCountry = "Bharat" ;
console.log(newProduct.getCountry);

let dfrntPro = new Product() ; // Error -- Expected 4 arguments, but got 0.


/* INHERITANCE */