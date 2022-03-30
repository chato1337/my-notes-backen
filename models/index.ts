// import { User } from './user.model'

export interface Payload {
    sub: string,
    role: string
}

export enum Roles {
    "admin",
    "customer",
    "guest"
}

// export { User } from './user.model'