const store = require("./store");

function getBills(userId) {
    return new Promise((resolve, reject) => {
        if (userId && userId.length > 0) {
            resolve(store.list(userId))
        }else {
            console.error('bills controller invalid username: ', userId)
            reject("invalid username")
        }
    })
}

function getHistory(id) {
    return new Promise((resolve, reject) => {
        if(id == 'key-error') {
            reject({error: 'key error'})
        }else {
            resolve(store.historyList(id))
        }
    })
}

function addPay(request) {
    return new Promise((resolve, reject) => {
        resolve(store.addPay(request))
    })
}

function addBill(request) {
    return new Promise((resolve, reject) => {
        resolve(store.addBill(request))
    })
}

function approvePay(request) {
    return new Promise((resolve, reject) => {
        resolve(store.approve(request))
    })
}


module.exports = {
    getBills,
    addPay,
    addBill,
    getHistory,
    approvePay
}