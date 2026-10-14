/*
    Error Handling with try/catch

    How to handle errors when an await promise fails.
*/

// Let's understand the problem:
function getOrder() {
    return Promise.reject(
        new Error("Failed to fetch order")
    );
}

async function processOrder() {
    const order = await getOrder();

    console.log(order);
}

processOrder(); // We will get Error: Failed to fetch order

// Here Promise is rejected. But error handling is not done inside processOrder(), so it will create unhandled rejection.


// let's slove with try/catch:
function getNewOrder(){
    return Promise.reject(
        new Error("Failed to fetch order")
    )
}

async function processNewOrder(){
    try{
        const order = await getNewOrder()
        console.log(order)
    }catch(error){
        console.log(error.message)
    }
}

processNewOrder(); // Failed to fetch order

/**
 *  Summary:
 *          1. try — Put the code that might cause an error.
 *          2 catch — Handle an error.
 *          3. error.message — Retrieves the error message.
 */



/*
    ==================== Practice Task ==================

    1. Create a getPayment() function, which will return Promise.reject(new Error("Payment failed")).
    2. Create an async function called processPayment().
    3. Use await getPayment() inside try.
    4. Console the error message inside the catch.

*/

function getPayment(){
    return Promise.reject(
        new Error("Payment Failed")
    )
}

async function processPayment(){
    try{
        const payment = await getPayment();
        console.log(payment)
    }catch(error){
        console.log(error.message)
    }
}

processPayment(); // Output: Payment failed