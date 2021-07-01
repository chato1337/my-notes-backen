const Model = require("./model")
const jwt = require("jsonwebtoken")
const config = require("../../config")

async function add(request) {
    const newUser = new Model(request)
    newUser.save()
    return newUser
}

async function checkLogin(request) {
    const userFilter = {username: request.username}
    // console.log(userFilter);
    try {        
        const user = await Model.findOne(userFilter)
        //implements bcrypt
        if (user.password === request.password){
            //create token
            const token = jwt.sign({
                name: user.username,
                id: user._id
            }, config.secret)
            return token
        }else {
            return 'no esta autorizado'
        }
    } catch (error) {
        return 'verifica tus credenciales'
    }
}

module.exports = {
    add: add,
    checkLogin: checkLogin
}