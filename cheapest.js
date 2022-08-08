let phoneAll = [
    { brand: 'samsung', camera: '12 mp', storage: 64, price: 32000, color: 'silver' },
    { brand: 'iphone', camera: '12 mp', storage: 64, price: 62000, color: 'silver' },
    { brand: 'oppo', camera: '12 mp', storage: 64, price: 22000, color: 'silver' },
    { brand: 'htc', camera: '12 mp', storage: 64, price: 12000, color: 'silver' },
    { brand: 'xoami', camera: '12 mp', storage: 64, price: 42000, color: 'silver' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const cheapPhone = cheapestPhone(phoneAll);
console.log(cheapPhone);