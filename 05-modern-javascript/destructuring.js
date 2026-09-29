/*
    The main task of destructuring: 
    extracting the necessary data from an object or array directly into a variable.

*/
// Suppose a customer comes from the API:
const customer = {
    name: "Rahim",
    email: "rahim@example.com",
    status: "new"
};
/*
    Normally we do:
        const name = customer.name;
        const email = customer.email;
        const status = customer.status;

        console.log(name);
        console.log(email);
        console.log(status);

    Its ok but, the main problem is we have worte it multiple time. now we can do this to eassy way by using destructuring

*/ 

const { name, email, status } = customer;

console.log(name);
console.log(email);
console.log(status);

// The variable was created directly from the property of the customer object.



// ====================== Automation Example ===================== \\
// Suppose data has come from webhook

const webhookData = {
    id: 101,
    customer: {
        name: "Rahim",
        email: "rahim@example.com"
    },
    amount: 5000,
    customerStatus: "paid"
};
/*
    we need here just id, amount, customerStatus
    Normal way:
    const id = webhookData.id;
    const amount = webhookData.amount;
    const status = webhookData.status;
*/

const {id, amount, customerStatus} = webhookData;
/*
    Now we can directly:
    console.log(id);
    console.log(amount);
    console.log(status);
*/


// ============= One important concept ====================== \\
// We can destructurize the variable and give it our own name:

const customerData = {
    name: "Rahim",
    email: "rahim@example.com"
};

const {name: customerName, email: customerEmail} = customerData
console.log(customerName);
console.log(customerEmail);
