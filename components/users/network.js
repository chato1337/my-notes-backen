const express = require("express");
const router = express.Router();
const controller = require("./controller.js");
const { checkApiKey } = require("../../middleware/auth.handler");
const passport = require("passport");

router.post(
	"/login",
	passport.authenticate("local", { session: false }),
	(req, res) => {
		controller
			.login(req.body)
			.then((authToken) => {
				res.json(authToken)
			})
			.catch((e) => console.log(e));
	}
);

router.post("/signup", (req, res) => {
	controller
		.register(req.body)
		.then((auth) => {
			console.log(auth);
			res.send(auth);
		})
		.catch((e) => res.status(400).send(e));
});

router.get("/customers", checkApiKey, (req, res) => {
	controller
		.getUsers()
		.then((userList) => res.send(userList))
		.catch((err) => console.log(err));
});

module.exports = router;
