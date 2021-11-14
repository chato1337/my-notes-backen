const Model = require("./model");

async function getBills() {
    const bills = await Model.find()
    return bills
}

async function addPay(request) {
    console.log('request')
    //TODO: get bill and substract the req pay, store in other model the pay
}

async function addBill(request) {
    const bill = {
        value: request.value,
        date: request.date,
        money: request.money,
        owner: request.owner,
        extra: request.extra,
        status: request.status
    }
    console.log('bill: ', bill)
    console.log(Model)
    // return console.log(bill)
    const newBill = new Model(bill)
    newBill.save()
    return newBill
}

module.exports = {
    list: getBills,
    addPay,
    addBill
}