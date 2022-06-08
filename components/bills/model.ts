const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billsSchema = new Schema({
	user_id: String,
	value: String,
	date: String,
	money: String,
    owner_id: String,
    extra: String,
	status: String,
	concept: String
});

export const model = mongoose.model("bills", billsSchema);

