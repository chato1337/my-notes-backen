import express, { Request, Response } from 'express'
import { Profile } from '../../models/profile.model';
const controller = require('./controller')

export const router = express.Router()

router.get("/profile", (req: Request, res: Response) => {
    controller.getProfile(req.query.id)
        .then((profile: Profile) => res.send(profile))
        .catch((e: any) => console.log(e))
})

router.post("/create-profile", (req: Request, res: Response) => {
    controller.createProfile(req.body)
        .then((profile: Profile) => res.send(profile))
        .catch((e: any) => console.log(e))
})

router.post("/update-profile", (req: Request, res: Response) => {
    controller.updateProfile(req.body)
        .then((profile: Profile) => res.send(profile))
        .catch((e: any) => console.log(e))
})


