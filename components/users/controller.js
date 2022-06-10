const store = require("./store")
const Model = require("./model")

function login(request) {
    return new Promise((resolve, reject) => {
        resolve(store.checkLogin(request))
    })
}

async function register(request) {
    const userExist = await Model.findOne({ username: request.username })
    const emailExist = await Model.findOne({ email: request.email })
    return new Promise((resolve, reject) => {
        if(userExist || emailExist) {
            reject(`the user already exist ${request.username}`)
        }else{
            resolve(store.add(request))
        }
        
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