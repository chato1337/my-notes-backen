
import mongoose from 'mongoose';

const Schema = mongoose.Schema

const profileSchema = new Schema({
    user_id: String,
    picture_url: String,
    score: String,
    phone: String,
    email: String
})

export const model = mongoose.model("profiles", profileSchema)
