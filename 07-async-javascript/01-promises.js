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


// ========= How do We get the results of Promise? ============= \\
const myPromise2 = new Promise((resolve, reject) =>{
    resolve("Customer data received")
});

myPromise2.then((result) =>{
    console.log(result)
})
// Customer data received

/*
    - .then() works with the result of a successful Promise.
    - result is the value obtained through resolve().
    - console.log(result) shows that value.
*/

// ============= Promise usecase of Automation ======================= \\
const leadPromis = new Promise((resolve, reject) =>{
    resolve ({
        name: "Shohan",
        email: "shohan@gmail.com"
    })
})

leadPromis.then((lead)=>{
    console.log(lead.name);
    console.log(lead.email);
})
// output: shohan & shohan@gmail.com
// In real automation, API calls, database operations, or other asynchronous tasks can return Promises.



/*
    Now we will learn how to handle errors when an automation task fails.

    Q1: What is reject()?
        = A Promise can be returned to a failed state using reject().
*/

const customerPromise2 = new Promise((resolve, reject)=> {
    reject("Failed to save lead")
});
// Here we are saying that the lead saving operation failed.
// But how do we handle this error? This is where .catch() comes in handy.
/*
    Q2: What is .catch()?
        = Error handling of rejected Promises can be done using .catch().

*/
customerPromise2.catch(error =>{
    console.log(error)
});
// output: Failed to save lead


// =============== Real life case of automation ======================== \\

// Suppose, There was a problem saving the lead in CRM. We want to handle the failure message.
const crmLeadPromis = new Promise((resolve, reject) =>{
    let isSaved = true;

    if(isSaved){
        resolve("Lead saved Successfull")
    }else{
        reject("CRM save failed")
    }

});

crmLeadPromis.then(result =>{
    console.log(result)
}).catch(err =>{
    console.log(err)
})
// Output: Lead saved Successfull
