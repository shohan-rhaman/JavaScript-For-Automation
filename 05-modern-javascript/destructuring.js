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