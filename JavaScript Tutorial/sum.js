const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const sum = items.reduce((total, item) => total + item.price, 0);

console.log(sum);


