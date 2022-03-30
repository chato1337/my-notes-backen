import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    stock: String,
    rating: Object
})

export const Model = mongoose.model("producs", productSchema);
