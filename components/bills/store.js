const Model = require("./model");
const BillUtils = require("../../utils/billUtils")
const NoteModel = require("../notes/model")
const response = require("../../network/response")

async function getBills(userId) {
    const filter = { user_id: userId }
    const bills = await Model.find(filter)
    return bills
}

async function addPay(request) {
    const filter = {_id: request.id}
    const bill = await Model.findOne(filter)
    let updateValue;
    let status = "pending"
    if(request.concept === "credit"){
        const sum = parseInt(bill.value) + parseInt(request.value)
        updateValue = sum
        status = "approved"
        await Model.findByIdAndUpdate(request.id, { $set: { value: sum } }, { useFindAndModify: false })
    }else {
        const substract = bill.value - request.value
        updateValue = substract
        await Model.findByIdAndUpdate(request.id, { $set: { value: substract } }, { useFindAndModify: false })
    }
    const updatedBill = { ...bill, value: updateValue }
    const ticket = BillUtils.generateTicket(updatedBill._doc, request.concept, request.value, status)
    const newTicket = new NoteModel(ticket)
    newTicket.save()
    return updatedBill._doc
}

async function historyList (id) {
    // TODO: migrate to own model
    return await NoteModel.find({ footer: id }).sort({_id: 'desc'})
}

async function addBill(request) {
    const bill = {
        user_id: request.user_id,
        value: request.value,
        date: request.date,
        money: request.money,
        owner_id: request.owner_id,
        extra: request.extra,
        status: request.status,
        concept: request.concept
    }
    const newBill = new Model(bill)
    newBill.save()
    return newBill
}

async function approve(request) {
    const filter = {_id: request.id}
    const ticket = await NoteModel.findOne(filter)
    if(request.status === "Aprobar"){
        const processTicket = BillUtils.approveTicket(ticket, "aprobado")
        return await NoteModel.updateOne(filter, processTicket, response.handleError())
    }else {
        const bill = await Model.findOne({ _id: ticket.footer })
        const sum = parseInt(bill.value) + parseInt(request.value)
        await Model.findByIdAndUpdate(request.id, { $set: { value: sum } }, { useFindAndModify: false })
        const processTicket = BillUtils.approveTicket(ticket, "rechazado")
        return await NoteModel.updateOne(filter, processTicket, response.handleError())
    }
}

module.exports = {
    list: getBills,
    addPay,
    addBill,
    historyList,
    approve
}