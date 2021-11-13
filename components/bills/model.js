const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billsSchema = new Schema({
	value: String,
	date: String,
	money: String,
    owner: String,
    extra: String
});

const model = mongoose.model("bills", billsSchema);

module.exports = model;
