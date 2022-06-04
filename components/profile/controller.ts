import { create, get, update } from "./store"
import { Profile } from '../../models/profile.model';


export function getProfile(id: string) {
    return new Promise((resolve, reject) => {
        if (id && id.length > 0) {
            resolve(get(id))
        }else {
            reject(`id invalido: ${id}`)
        }
    })
}

export function createProfile(profile: Profile) {
    return new Promise((resolve, reject) => {
        if(profile) {
            resolve(create(profile))
        }else {
            reject(`parametro invalido ${profile}`)
        }
    })
}


export function updateProfile(profile: any) {
    return new Promise((resolve, reject) => {
        if(profile) {
            resolve(update(profile))
        }else {
            reject(`parametro invalido ${profile}`)
        }
    })
}