import express from "express";
import passport from 'passport'
import { HistoryPay } from "../../models/historyPay.model";
const controller = require("./controller");
const { checkApiKey } = require("../../middleware/auth.handler");

export const router = express.Router();

router.get(
	"/history-list",
    checkApiKey,
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		controller
			.getHistoryList(req.query.id)
			.then((history: HistoryPay[]) => {
				// console.log(billList);
				res.send(history);
			})
			.catch((error: any) => console.log(error));
	}
);

router.get(
	"/history",
    checkApiKey,
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		controller
			.getHistory(req.query.id)
			.then((history: HistoryPay[]) => {
				// console.log(billList);
				res.send(history);
			})
			.catch((error: any) => console.log(error));
	}
);

router.post(
	"/add-pay",
    checkApiKey,
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		controller
			.add(req.body)
			.then((payRes: HistoryPay[]) => {
				// console.log(billList);
				res.send(payRes);
			})
			.catch((error: any) => console.log(error));
	}
);

router.post(
	"/approve-pay",
    checkApiKey,
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		controller
			.approve(req.body)
			.then((payRes: HistoryPay) => {
				// console.log(billList);
				res.send(payRes);
			})
			.catch((error: any) => console.log(error));
	}
);