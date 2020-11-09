const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
	title: String,
	body: String,
	footer: String,
});

const model = mongoose.model("notes", noteSchema);

module.exports = model;
