const boom = require('@hapi/boom');
const config = require('../config');
const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from 'express'
import { Payload, Roles } from '../models';
import { UserRequest } from '../models/user.model';

function checkApiKey(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['api'];
    if(apiKey === config.apiKey) {
        next();
    }else {
        res.status(401)
        res.send('sin autorizacion')
    }
}


function signToken(payload: Payload, secret: string) {
    return jwt.sign(payload, secret)
}

function checkRoles (...roles: Roles[]) {
    return (req: UserRequest, res: Response, next: NextFunction) => {
        const user = req.user

        if(roles.includes(user.role)) {
            next()
        }else {
            res.status(403).json({
                status: 403,
                message: "no permitido"
            })
        }
    }
}

module.exports = { checkApiKey, signToken, checkRoles };