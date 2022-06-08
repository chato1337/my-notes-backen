
import { AddPay, HistoryPay } from '../../models/historyPay.model';
import { model } from './model';
import { model as billModel } from '../bills/model'
import { Bill } from '../../models/bill.model';

const transactionPay = (billValue: number, reqValue: number, concept: 'pay' | 'payAll' | 'credit') => {
    const OPERATIONS = {
        credit: billValue + reqValue,
        payAll: billValue - billValue,
        pay: billValue - reqValue
    }

    const STATUS_RESULT = {
        credit: 'approve',
        payAll: 'pending',
        pay: 'pending'
    }

    const result = OPERATIONS[concept]
    const status = STATUS_RESULT[concept]

    return {
        result,
        status
    }
}

export const addHistoryPay = async (pay: HistoryPay) => {
    const filter = { _id: pay.bill_id }
    const billAccount: Bill = await billModel.findOne(filter)
    const transactionResult = transactionPay(billAccount.value, pay.value, pay.concept)
    // update bill account value
    await billModel.findByIdAndUpdate(pay.bill_id, { $set: { value: transactionResult.result } }, { useFindAndModify: false })

    const newHistoryPay = new model(pay)

    newHistoryPay.save()

    return newHistoryPay
}

export const approvePay = async (req: AddPay) => {
    const filter = { _id: req._id }
    const ticket: HistoryPay = await model.findOne(filter)

    if (req.concept === 'approve') {
        await model.updateOne(filter, { $set: { status: 'approved' } }, { useFindAndModify: false })
        return `[success]: transaction approved ${req.value}`
    }else {
        const billAccount: Bill = await billModel.findOne({ _id: ticket.bill_id })
        const transactionResult = transactionPay(billAccount.value, req.value, 'credit')
        await billModel.findByIdAndUpdate(req._id, { $set: { value: transactionResult.result } }, { useFindAndModify: false })
        await model.updateOne(filter,  { $set: { status: 'approved' } }, { useFindAndModify: false })
        return `[success]: transaction rejected ${req.value}`
    }

}

export const getHistoryPay = async (id: string) => {
    return model.find({ bill_id: id })
}

export const getHistoryPayList = async (id:string) => {
    return billModel.find({ owner_id: id })
}