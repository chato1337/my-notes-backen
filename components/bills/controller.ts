import { store } from "./store";

function getBills(userId: any) {
    return new Promise((resolve, reject) => {
        if (userId && userId.length > 0) {
            resolve(store.list(userId))
        }else {
            console.error('bills controller invalid username: ', userId)
            reject("invalid username")
        }
    })
}


function addBill(request: any) {
    return new Promise((resolve, reject) => {
        resolve(store.addBill(request))
    })
}


export const controller = {
    getBills,
    addBill,
}