const bycrypt = require('bcrypt')
const chalk = require('chalk')
const Model = require('../../components/notes/model')
const config = require('../../config')

function buildAdminUser(password) {
    return {
        password,
        username: config.username,
        email: config.email
    }
}

async function hasAdminUser(mongoDB) {
    const adminUser = await mongoDB.getAll("users", {
        //
    })
}