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
    id: string,
    value: number,
    concept: 'pay' | 'payAll' | 'credit',
}

export interface ApprovePay {
    id: string,
    value: number,
    status: string
}