const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
	controller
		.getNotes()
		.then((notesList) => {
			console.log(notesList);
			res.send(notesList);
		})
		.catch((error) => console.log(error));
});

router.post("/note", (req, res) => {
	controller
		.addNote(req.body)
		.then((respose) => {
			console.log("guardados correctamente");
			res.send("datos guardados");
		})
		.catch((error) => console.log(error));
});

module.exports = router;
