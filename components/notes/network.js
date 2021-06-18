const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
	controller
		.getNotes()
		.then((notesList) => {
			// console.log(notesList);
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

router.put("/edit-note", (req, res) => {
	//do it something
	controller
		.editNote(req.body)
			.then(response => {
				console.log('nota actualizada')
				res.send("nota actualizada")
			})
			.catch(err => console.log(err))
})

router.delete("/delete", (req, res) => {
	controller
		.deleteNote(req.body)
			.then(response => {
				console.log("nota eliminada");
				res.send("nota eliminada")
			})
			.catch(err => console.log(err))
})

module.exports = router;
