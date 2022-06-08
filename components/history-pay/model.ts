
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const historyPaySchema = new Schema({
    bill_id: String,
    owner_id: String,
    concept: String,
    date: String,
    value: String,
    currency: String,
    status: String
})

export const model = mongoose.model("historyPay", historyPaySchema)
