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
