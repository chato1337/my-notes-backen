const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: String
})

userSchema.add({
    country: String
})

const model = mongoose.model("users", userSchema)

module.exports = model