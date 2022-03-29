const Model = require("./model");
const response = require("../../network/response")

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
	const id = {_id: request._id}
	const newData = {
		title: request.title,
		body: request.body,
		footer: request.footer,
		color: request.color
	}
	Model.updateOne(id, newData, response.handleError)
}

async function deleteNote(request) {
	Model.findOneAndDelete(request, null, response.handleError)
}

module.exports = {
	list: getNotes,
	add: addNote,
	edit: setNote,
	delete: deleteNote
};
