function ticketPrice(ticketQuantity) {
    const first100TicketPrice = 100;
    const second100TicketPrice = 90;
    const restTicketPrice = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100TicketPrice;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Rate = first100TicketPrice * 100;
        const restTicketRate = ticketQuantity - 100;
        const price = restTicketRate * restTicketPrice;
        const totalPrice = first100Rate + price;
        return totalPrice;
    }
    else {
        const first100Rate = first100TicketPrice * 100;
        const second100Rate = second100TicketPrice * 100;
        const restTicketRate = ticketQuantity - 200;
        const price = restTicketRate * second100TicketPrice;
        const totalPrice = first100Rate + second100Rate + price;
        return totalPrice;
    }
}

const price = ticketPrice(220);
console.log(price);