const boom = require('@hapi/boom');
const config = require('../config');
const jwt = require('jsonwebtoken');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['api'];
    if(apiKey === config.apiKey) {
        next();
    }else {
        res.status(401)
        res.send('sin autorizacion')
    }
}

function checkUserToken(req, res, next) {
    const token = req.headers['token']
    if(verifyToken(token, config.secret)){
        next()
    }else {
        res.status(401)
        res.send('sin autorizacion')
    }
}

function signToken(payload, secret) {
    return jwt.sign(payload, secret)
}

function verifyToken(payload, secret) {
    return jwt.verify(token, secret)
}

module.exports = { checkApiKey, checkUserToken, signToken };