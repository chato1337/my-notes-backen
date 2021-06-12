const db = require("mongoose");
const Model = require("./model");

//mongodb+srv://adminNotes:Z5n4vUqdTRLda3Fp@cluster0.q5dkp.mongodb.net/test
const uri =
	"mongodb+srv://adminNotes:Z5n4vUqdTRLda3Fp@cluster0.q5dkp.mongodb.net/my-notes-park?retryWrites=true&w=majority";

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log(`base de datos conectada con exito`))
	.catch((err) => console.error(`error al conectar la base de datos`));

async function getNotes() {
	const notes = await Model.find();
	return notes;
}

async function addNote(request) {
	console.log(request);
	const newNote = new Model(request);
	newNote.save();
}

async function setNote(request) {
	console.log(request);
	const id = {_id: request._id}
	const newData = {
		title: request.title,
		body: request.body,
		footer: request.footer
	}
	const handleError = (err, doc) => {
		if(err){
			console.log(err)
		}
	}
	Model.updateOne(id, newData, handleError)
}

module.exports = {
	list: getNotes,
	add: addNote,
	edit: setNote,
};