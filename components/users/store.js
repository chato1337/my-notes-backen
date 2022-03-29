const Model = require("./model")
const jwt = require("jsonwebtoken")
const config = require("../../config")
const bcrypt = require("bcrypt")
const { signToken } = require('../../middleware/auth.handler')

async function getUsers() {
    const users = await Model.find()
    return users
}

async function add(request) {
    const user = {
        username: request.username,
        email: request.email,
        password: await bcrypt.hash(request.password, 10),
        role: request.role || 'user',
        country: request.country || 'col'
    }

    const newUser = new Model(user)
    newUser.save()
    return newUser
}

async function checkLogin(request) {
    const userFilter = {username: request.username}
    // console.log(userFilter);
    const user = await Model.findOne(userFilter)
    
    const payload = {
        sub: user._id,
        role: user.role
    }

    return { user, token: signToken(payload, config.secret) }
}

module.exports = {
    add: add,
    checkLogin: checkLogin,
    list: getUsers
}