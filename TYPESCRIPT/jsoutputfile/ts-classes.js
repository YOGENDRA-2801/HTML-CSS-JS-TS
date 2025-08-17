class Product {
    name;
    price;
    pID;
    inCart;
    constructor(naam, daam, id, addCart) {
        this.name = naam;
        this.price = daam;
        this.pID = id;
        this.inCart = addCart || false;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `Product ${this.name} with ID ${this.pID} is purchased for ${this.price} rupees`;
        }
        else {
            return "No product purchased";
        }
    }
}
let samaan1 = new Product("IPhone 12", 12345, 101);
console.log(samaan1.buyProduct());
samaan1.addToCart();
console.log(samaan1.buyProduct());
let samaan2 = new Product("IPhone 12", 12345, 101, true);
console.log(samaan2.buyProduct());
export {};
//# sourceMappingURL=ts-classes.js.map