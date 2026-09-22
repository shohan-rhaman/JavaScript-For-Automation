/*

    reduce(): Processes many array items together to create a final result.

*/

const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total); // 600