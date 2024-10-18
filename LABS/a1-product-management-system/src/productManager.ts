import { Product } from "./products";
export class ProductManager{
    private products: Product[] = [];

    addProduct(product: Product):void{
        this.products.push(product);
    }
    listproducts():Product[]{
        return this.products;
    };
    removeProduct(id:number):void{
        this.products = this.products.filter(product => product.id !== id);
    }
    searchProduct(id:Number):void{
        this.products = this.products.filter(product => product.id == id);
        console.log(`User id with ${id} is searched successfull.`)
    }
} 


