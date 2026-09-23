/*

    reduce(): Processes many array items together to create a final result.

*/

const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total); // 600


/*

    Now we have to understand 2 things: (sum, price) and }, 0);

    What is sum?
    sum is accumulator. That means, it retains whatever has been added so far.
    initally sum = 0. first item = 0 + 100. sencond item = 100 + 200. ........

    What is price:
    price is the current item in the array.

    What is }, 0):
    0 is the initial value — that is, the amount with which sum will start.


*/

amounts = [500, 1200, 800, 300]

const totalAmount = amounts.reduce((total, item)=>{
    return total + item;
},0)

console.log(totalAmount)


// ===================== Automation exmaple practice =========================
const orders = [
    {
        id: 101,
        customer: "Rahim",
        amount: 7000
    },
    {
        id: 102,
        customer: "Karim",
        amount: 5000
    },
    {
        id: 103,
        customer: "Rahim",
        amount: 3000
    }
];

const totalAmountCalculate = orders.reduce((total, order) => {
    return total + order.amount
}, 0);

console.log(totalAmountCalculate);



/*

    Now let's learn one of the most important practical use cases of reduce(): 
    grouping total amounts by customer. This is where reduce() becomes very powerful.


*/

const ordersData = [
    {
        id: 101,
        customer: "Rahim",
        amount: 7000
    },
    {
        id: 102,
        customer: "Karim",
        amount: 5000
    },
    {
        id: 103,
        customer: "Rahim",
        amount: 3000
    }
];

// We want to get: { Rahim: 10000, Karim: 5000 }

const customerTotals = ordersData.reduce((totals, order) =>{
    return totals[order.customer] = (totals[order.customer] || 0) + order.amount
}, {})

console.log("customer totals", customerTotals)






