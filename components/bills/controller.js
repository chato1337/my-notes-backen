const store = require("./store");

function getBills() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
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