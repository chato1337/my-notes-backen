import express, { Request, Response } from 'express'
import { Product } from '../../models/product.model';
const controller = require('./controller')

export const router = express.Router();

router.get("/products", (req: Request, res: Response) => {
    controller.getProducts()
        .then((productList: Product[]) => {
            res.send(productList)
        })
        .catch((e: any) => console.log(e))
})

router.post("/create-product", (req: Request, res: Response) => {
    controller.addProduct(req.body)
        .then((product: Product) => {
            res.send(product)
        })
})

router.put("/update-product", (req: Request, res: Response) => {
    controller.updateProduct(req.body)
        .then((product: Product) => {
            res.send(product)
        })
        .catch((e: any) => console.log(e))
})