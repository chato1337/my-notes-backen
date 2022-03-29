const { Strategy } = require('passport-local')
const UserModel = require('../../../components/users/model')
const bcrypt = require('bcrypt')

const LocalStrategy = new Strategy(async (user, pass, done) => {
    try {
        const dbUser = await UserModel.findOne({ username: user })
        if(!user) {
            done('no sirvio user', false) 
        }

        const isMatch = await bcrypt.compare(pass, dbUser.password)
        if (!isMatch) {
            done('sin autorizar contraseña', false)
        }
        done(null, user)
    } catch (error) {
        done(error, false)
    }
})

module.exports = LocalStrategy