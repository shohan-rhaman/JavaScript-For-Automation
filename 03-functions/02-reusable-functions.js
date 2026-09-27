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

// Notice — we only wrote the processCustomer() function once. But we used it for two customers.

// If we didn't use the function then we would have to do it like this:
console.log("Rahim");
console.log("Karim");
console.log("Sakib");


/*

    ======== Real Automation example ==============

    suppose we have three customers. processLead(lead) name of funtion we have to make and in funtion we will console __ lead.name. Then create two separate lead objects and call the function twice. Expected output will be John Doe, Sarah Smith

*/

function processLead(lead){
    console.log(lead.name)
}

processLead({
    name : "John Doe"
})
processLead({
    name: "Sarah Smith"
})