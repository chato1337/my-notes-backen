import { Request } from "express";
import { Roles } from ".";

export interface UserRequest extends Request {
    user: {
        username: string,
        email: string,
        password: string,
        role: Roles
    }
}