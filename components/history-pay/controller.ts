import { addHistoryPay, approvePay, getHistoryPay, getHistoryPayList } from "./store"
import { AddPay, ApprovePay } from '../../models/historyPay.model';


export function getHistory(id: string ) {
    return new Promise((resolve, reject) => {
        if(id && id.length > 0) {
            resolve(getHistoryPay(id))
        }else {
            reject(`id invalid ${id}`)
        }
    })
}

export function getHistoryList(id: string ) {
    return new Promise((resolve, reject) => {
        if(id && id.length > 0) {
            resolve(getHistoryPayList(id))
        }else {
            reject(`id invalid ${id}`)
        }
    })
}

export function add(pay: AddPay ) {
    return new Promise((resolve, reject) => {
        if(pay) {
            resolve(addHistoryPay(pay))
        }else {
            reject(`pay invalid ${pay}`)
        }
    })
}

export function approve(ticket: ApprovePay ) {
    return new Promise((resolve, reject) => {
        if(ticket) {
            resolve(approvePay(ticket))
        }else {
            reject(`ticket invalid ${ticket}`)
        }
    })
}