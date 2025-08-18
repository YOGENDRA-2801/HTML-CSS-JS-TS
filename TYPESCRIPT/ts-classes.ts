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

/* ACCESS MODIFIER + INHERITANCE */
class Manufacturer {
    public name : string ;
    private country : string ;
    protected product : string ;

    constructor() ;
    constructor(name:string, country:string, product: string) ;
    constructor (name?:string, country?:string, product?: string) {
        this.name = name || "No ownership" ;
        this.country = country || "India" ;
        this.product = product || "No product" ;
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
    
    showLicense() {
        console.log("License Number : 12345");
        console.log("Country : India");
    }
}
class Product extends Manufacturer {
    proID : number ;
    price : number ;

    constructor(product: string, id:number, daam:number) {
        super() ;
        this.product = product ;  
        this.proID = id ;
        this.price = daam ;
    }
    showProductDetail() {
        console.log("Product : " , this.product);
        console.log("ID : " , this.proID);
        console.log("Price : " , this.price);
    }
}

let newProduct = new Manufacturer("Lenovo", "India", "Ideapad") ;
console.log("Manufacturer is : " , newProduct.name);
console.log(newProduct);

newProduct.setCountry = "Bharat" ;
console.log(newProduct.getCountry);

let pro = new Product(newProduct.getProduct, 102, 12000) ; 
pro.showProductDetail() ;
pro.showLicense() ; 
