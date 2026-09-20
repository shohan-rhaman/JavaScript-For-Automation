/*

    filter is a built-in Array method of javascript

    Functions of:
    It will check each item in the array, and create a new array with only those whose condition is true.

*/

const prices = [100, 200, 300, 400];

const expensivePrices = prices.filter(price => {
    return price > 200;
});

console.log(expensivePrices); // output: [300, 400]




