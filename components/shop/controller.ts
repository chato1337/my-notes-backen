import { Product } from '../../models/product.model';
import { addNewProduct, getProductList, updateProductStore } from './store';


function getProducts() {
    return new Promise((resolve, reject) => {
        resolve(getProductList())
    })
}

function addProduct(newProduct: Product) {
    return new Promise((resolve, reject) => {
        resolve(addNewProduct(newProduct))
    })
}

function updateProduct(updateProduct: Product) {
    return new Promise ((resolve, reject) => {
        resolve(updateProductStore(updateProduct))
    })
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct
}