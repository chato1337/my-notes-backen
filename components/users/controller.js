const store = require("./store")

function login(request) {
    return new Promise((resolve, reject) => {
        resolve(store.checkLogin(request))
    })
}

function register(request) {
    return new Promise((resolve, reject) => {
        resolve(store.add(request))
    })
}

function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    login,
    register,
    getUsers
}