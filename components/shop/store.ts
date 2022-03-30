import { Model } from "./model";
import { Product } from '../../models/product.model';

export async function getProductList() {
    const products = await Model.find()

    return products
}

export async function addNewProduct(newProduct: Product) {
    const newNote = new Model(newProduct)
    newNote.save()

    return newNote;
}

export async function updateProductStore(product: Product) {
    const id = { _id: product._id }
    ///TODO:

    return "updating..."
}