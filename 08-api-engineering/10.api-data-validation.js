/*
    What is Data Validation?
    Data Validation is the process of checking whether data meets our specified conditions before using it.

    Example:
    - Customer must have a name.
    - Must have an email.
    - Amount must be greater than zero.
    - Data received from the API must be an array.

*/

// ================= Real Automation Example ======================== \\

// Suppose we get the following customer data from the API:
const customers = [
    {
        id: 101,
        name: " Shohan ",
        email: "SHOHAN@GMAIL.COM",
        amount: "5000"
    },
    {
        id: 102,
        name: "",
        email: "rahim@gmail.com",
        amount: "3000"
    },
    {
        id: 103,
        name: "Karim",
        email: "",
        amount: "2000"
    },
    {
        id: 104,
        name: "Nabil",
        email: "nabil@gmail.com",
        amount: "-500"
    },
    {
        id: 105,
        name: "Rahim",
        email: "rahim@gmail.com",
        amount: "2500"
    }
];

// There are five customers here. But not all customer data is correct. Our goal is to select only the right data.

const validCustomers = customers.filter(customer =>{

    const name = customer.name?.trim();
    const email = customer.email?.trim().toLowerCase();
    const amount = Number(customer.amount);

    if(
        !name ||
        !email ||
        !email.includes("@") ||
        !Number.isFinite(amount) ||
        amount <= 0
    ){
        return false;
    }

    return true;
    
});

console.log("Valid Customers:", validCustomers);
console.log("Total Customers:", customers.length);
console.log("Valid Count:", validCustomers.length);