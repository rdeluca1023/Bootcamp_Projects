const colors = ['purple','cyan','peach','teal'];

// colors.forEach(function(val, i) {
//     const caps = val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`)
// });

function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

// const prices = [30.99, 19.99, 2.50, 99.0];
// let total = 0;
// prices.forEach(function(price){
//     total+=price;
// });
// console.log(total);

//same thing using forOf loop
const prices = [30.99, 19.99, 2.50, 99.0];
let total = 0;
for(let price of prices){
    total += price;
}
console.log(total)