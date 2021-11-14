const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
	title: String,
	body: String,
	footer: String,
});

//add color note
noteSchema.add({
	color: String,
})

noteSchema.add({
	append: Object,
})

const model = mongoose.model("notes", noteSchema);

module.exports = model;
