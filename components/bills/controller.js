const store = require("./store");

function getBills() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
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

module.exports = {
    getBills,
    addPay,
    addBill
}