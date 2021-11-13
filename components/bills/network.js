const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/bills", (req, res) => {
	controller
		.getBills()
		.then((billList) => {
			// console.log(billList);
			res.send(billList);
		})
		.catch((error) => console.log(error));
});

router.post("/add-pay", (req, res) => {
	controller
		.addPay(req.body)
		.then((res) => res.send('pay added: ', res))
		.catch(err => console.log(err))
})

router.post("/add-bill", (req, res) => {
	controller
		.addBill(req.body)
		.then(() => res.send('bill added'))
		.catch((err) => console.log(err))
})

module.exports = router;