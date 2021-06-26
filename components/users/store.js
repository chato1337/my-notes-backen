const Model = require("./model")


async function add(request) {
    const newUser = new Model(request)
    newUser.save()
    return newUser
}

async function checkLogin(request) {
    const user = await Model.find()
    return user
}

module.exports = {
    add: add,
    checkLogin: checkLogin
}