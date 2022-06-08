export interface HistoryPay {
    bill_id: string,
    owner_id: string,
    concept: 'pay' | 'payAll' | 'credit',
    date: string,
    value: number,
    currency: string,
    status: string
}

export interface AddPay {
    _id: string,
    value: number,
    concept: string
}