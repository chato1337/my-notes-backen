const luxon = require("luxon")

class BillUtils {
    static generateTicket = (billData, concept, value, statusBill = "pending") => {
        // console.log(billData.money)
        const currentDate = luxon.DateTime.now().toLocaleString()
        const status = statusBill
        return {
            title: status,
            body: `${currentDate} - ${value} ${billData.money} - ${concept}`,
            footer: billData._id,
            color: "ticket",
            append: {
                date: currentDate,
                value: value,
                money: billData.money,
                concept: concept
            },
        }
    }

    static approveTicket = (ticket, status) => {
        return {
            title: status,
            body: ticket.body,
            footer: ticket.footer,
            color: ticket.color,
            append: ticket.append
        }
    }
}

module.exports = BillUtils