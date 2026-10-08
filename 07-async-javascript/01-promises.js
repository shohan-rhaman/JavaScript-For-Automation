/*
    What is promise?
    - In JavaScript, a Promise is an object that represents the successful outcome or failure of an asynchronous operation in the future.

    Mental Model:
    - You've requested customer data from an API. The API's response may not be immediate. JavaScript can give you a Promise that tells you whether the operation succeeded, failed, or is still in progress.

    Promises have three states:
    1. Pending   → Work is still ongoing; results not yet available.
    2. Fulfilled → The work was successful; the results were obtained.
    3. Rejected  → The task failed; an error or failure cause was found.

*/
const myPromise = new Promise((resolve, reject) =>{
    resolve("Customer data recived")
})
console.log(myPromise)
/*
    Note: After a promise is created, it usually goes from pending to fulfilled or rejected.

    resolve() — Returns the result if the Promise succeeds.
    reject() — Returns the reason for the failure if the Promise fails.

*/