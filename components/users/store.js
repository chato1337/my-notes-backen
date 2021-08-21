const Model = require("./model")
const jwt = require("jsonwebtoken")
const config = require("../../config")
const bcrypt = require("bcrypt")

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
    console.log('entro aqui')
    const userFilter = {username: request.username}
    // console.log(userFilter);
    const user = await Model.findOne(userFilter)

    if (!user) {
        return 'invalid username or password'
    }
    
    //implements bcrypt
    bcrypt.compare(request.password, user.password, (err, res) => {
        if(err) {
            console.log('error el auto no esta')
            console.log(err)
        }
        if(res) {
            console.log('auth success')
            // create jwt hash
            const token = jwt.sign({
                name: user.username,
                id: user._id
            }, config.secret)
            return token
        } else {
            return 'the password not match'
        }
    })
        
}

module.exports = {
    add: add,
    checkLogin: checkLogin,
    list: getUsers
}