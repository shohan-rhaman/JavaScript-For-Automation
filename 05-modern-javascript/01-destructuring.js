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
// This is not renaming the name property of the object. Rather, it says: This is not renaming the name property of the object. Create a variable named leadName with the value of the name property of the lead object.

console.log(customerName);
console.log(customerEmail);



// =============== Nested Object Destructuring ==================== \\
const lead = {
    name: "John Doe",
    contact: {
        leadEmail: "john@example.com",
        leadPhone: "01700000000"
    }
};
/*
    Here, email and phone are not directly in the lead. They are inside the contact.

    Normal way:
        const email = lead.contact.email;
        const phone = lead.contact.phone;

    We can extract nested data directly using destructuring:
*/
const {
    contact: { leadEmail, leadPhone }
} = lead;
// We will read it this way: Get the contact from the lead, then get the email and phone from within the contact.

console.log(leadEmail); // john@example.com
console.log(leadPhone); // 01700000000



// ============== Practice Nested Object Destructuring  =============== \\
const order = {
    id: 501,
    customer: {
        name: "Rahim",
        contact: {
            email: "rahim@gmail.com",
            phone: "01700000000"
        }
    },
    amount: 7500
};
/*
    Find out by destructuring:
    - customer.name
    - customer.contact.email
    - customer.contact.phone
*/

const {
  id,
    customer: {
        name,
        contact: {
            email,
            phone
        }
    }
} = order;

console.log(id); // 501
console.log(name); // Rahim
console.log(email); // rahim@gmail.com
console.log(phone); // 01700000000


// ================== Default Value of Destructuring ========================= \\
const lead = {
    name: "Rahim",
    email: "rahim@gmail.com"
};
// here is no status
const { name, email, status } = lead;

console.log(status); // output: undefined
// But we want it to be "new" if there is no status.

const {
    name,
    email,
    status = "new"
} = lead;

console.log(status); // output: new
