/*
    What is async?
    = A function is declared as an asynchronous function with the async keyword. An async function always returns a Promise.
*/

async function customer(){
    return "Shohan"
}
console.log(customer()); // output: Promise { "Shohan" }
// Note: Here inside the function we have returned "Shohan", but because it is async, JavaScript displays it as a successful result of the Promise.


async function getData() {
    return "Hello";
}
// It is conceptually like this: 
function getData() {
    return Promise.resolve("Hello");
}


// ================== await Concept ======================= \\
/*
    What is await?
    = await waits for the result of a Promise and returns that result if successful.
*/

function getCustomer(){
    return Promise.resolve("Shohan")
}

async function processCustomer(){
    const customer = await getCustomer();

    console.log(customer)
}

processCustomer(); // Output: Shohan

/**
 * 1. getCustomer() returns a Promise.
 * 2. await getCustomer() waits for the result of the Promise.
 * 3. The result "Shohan" is stored in the customer variable.
 * 4. console.log(customer) shows the name.
 */
// Important Note: await doesn't freeze the whole JavaScript program. It only makes its own async function wait until the Promise is done before moving to the next line.


// ================= Rael Automaiton Example =================== \\

function verifyPayment() {
    return Promise.resolve({
        orderId: 501,
        amount: 3000,
        paid: true
    });
}

async function processOrder() {
    const payment = await verifyPayment();

    console.log("Order ID:", payment.orderId);
    console.log("Payment verified:", payment.paid);

    if (payment.paid) {
        console.log("Order processing started");
    }
}

processOrder();
/**
 * Output:
    Order ID: 501
    Payment verified: true
    Order processing started
 */

/*
    .then() VS async/await

    Promise .then() :
    - Handle the result with a callback
    - Chain can be long
    - Promise-এর সঙ্গে কাজ করে

    async/await :
    - Receives the result with await
    - Easy to read in many cases
    - Works with Promise

*/

/*
    ================ Challenge Task ==========================

    1. Create a function called getOrder() that will return the following object using Promise.resolve()
        {
            id: 101,
            customer: "Shohan",
            amount: 5000
        }
    2. Create an async function called processOrder().
    3. Get the result of getOrder() with await.
    3. Show the customer and amount of the order in the console.

*/

function getOrder(){
    return Promise.resolve({
        id: 101,
        customer: "Shohan",
        amount: 5000
    })
}

async function processOrder(){
    const order = await getOrder();

    console.log("Customer Name: ", order.customer);
    console.log("Amount: ", order.amount)
}

processOrder()