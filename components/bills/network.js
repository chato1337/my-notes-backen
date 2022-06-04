const express = require("express");
const router = express.Router();
const controller = require("./controller");
const passport = require("passport");

router.get("/bills", (req, res) => {
	controller
		.getBills(req.query.id)
		.then((billList) => {
			// console.log(billList);
			res.send(billList);
		})
		.catch((error) => console.log(error));
});

router.get(
	"/bills-auth",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		controller
			.getBills()
			.then((billList) => {
				// console.log(billList);
				res.send(billList);
			})
			.catch((error) => console.log(error));
	}
);

router.get("/bill-history", (req, res) => {
	controller
		.getHistory(req.query.id)
		.then((history) => res.send(history))
		.catch((err) => {
			console.log(err)
			res.send(err).status(401)
		});
});

router.post("/add-pay", (req, res) => {
	controller
		.addPay(req.body)
		.then((response) => res.send(response))
		.catch((err) => console.log(err));
});

router.post("/approve-pay", (req, res) => {
	controller
		.approvePay(req.body)
		.then((response) => res.send(response))
		.catch((err) => console.log(err));
});

router.post("/add-bill", (req, res) => {
	controller
		.addBill(req.body)
		.then(() => res.send("bill added"))
		.catch((err) => console.log(err));
});

module.exports = router;
