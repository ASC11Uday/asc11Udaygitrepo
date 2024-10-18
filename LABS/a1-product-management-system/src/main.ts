console.log("welcome")

import { ProductManager } from "./productManager";
import { Product } from "./products";
const productManager = new ProductManager();
const product  : Product = {
    id : 1,
    firstname: 'uday',
    lastname : 'kiran',
    DOB : '14-06-2002',
    email : "uday@gmail.com",
    phone : 987654321,
    address : 'samsung',
    degree : 'available',
    registerdate : '2024-06-09'
};
productManager.addProduct(product);

let products : Product[] = productManager.listproducts();
console.log(products);

const product1  : Product = {
    id : 2,
    firstname: 'SANDEEP',
    lastname : 'reddi',
    DOB : '15-05-2002',
    email : "uday@gmail.com",
    phone : 987654321,
    address : 'samsung',
    degree : 'available',
    registerdate : '2024-06-09'
};

productManager.addProduct(product1);
console.clear();
products=productManager.listproducts();
console.log(products);


// productManager.removeProduct(2);
// products=productManager.listproducts();
// console.log(products);

console.log("*************Search  user by id ************");

productManager.searchProduct(2);
products=productManager.listproducts();
console.log(products)
