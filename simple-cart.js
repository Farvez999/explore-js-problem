//Sum Price
/*const carts = [
    { name: 'shoes', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3200 },
    { name: 'belt', price: 700 }
]

function CartCalculation(carts) {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
        product = carts[i];
        sum = sum + product.price;
    }
    return sum;
}

const toatlExpense = CartCalculation(carts);
console.log(toatlExpense);*/

//quantity sum
const carts = [
    { name: 'shoes', price: 1200, quantity: 5 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'pant', price: 3200, quantity: 1 },
    { name: 'belt', price: 700, quantity: 2 }
]

function CartCalculation(carts) {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
        product = carts[i];
        toatlPrice = product.price * product.quantity;
        sum = sum + toatlPrice;
    }
    return sum;
}

const toatlExpense = CartCalculation(carts);
console.log(toatlExpense);