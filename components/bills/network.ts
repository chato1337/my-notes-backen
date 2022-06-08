import express from "express";
import { controller } from "./controller";
import passport from "passport";
export const router = express.Router();

router.get("/bills", (req, res) => {
	controller
		.getBills(req.query.id)
		.then((billList: any) => {
			// console.log(billList);
			res.send(billList);
		})
		.catch((error: any) => console.log(error));
});

router.get(
	"/bills-auth",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		controller
			.getBills(req.query.id)
			.then((billList: any) => {
				// console.log(billList);
				res.send(billList);
			})
			.catch((error: any) => console.log(error));
	}
);

router.post("/add-bill", (req, res) => {
	controller
		.addBill(req.body)
		.then(() => res.send("bill added"))
		.catch((err:any) => console.log(err));
});
