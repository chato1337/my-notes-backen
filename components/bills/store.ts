import { model as Model } from './model';

async function getBills(userId: string) {
    const filter = { user_id: userId }
    const bills = await Model.find(filter)
    return bills
}


async function addBill(request: any) {
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



export const store = {
    list: getBills,
    addBill
}