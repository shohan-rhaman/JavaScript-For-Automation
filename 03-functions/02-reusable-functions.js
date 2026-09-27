/*

    Our main goal here will be:
    To write a function once and use it repeatedly for different data.

*/

function processCustomer(customer) {
    console.log(customer.name);
}

processCustomer({
    name: "Rahim",
    email: "rahim@example.com"
});

processCustomer({
    name: "Karim",
    email: "karim@example.com"
});

// Notice — we only wrote the processCustomer() function once. But we used it for two customers