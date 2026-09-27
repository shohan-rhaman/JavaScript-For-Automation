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



/*

    =============== Function + Array =================

    Now we will use the previously learned Array + forEach() + Function together. and We will create an automation flow like this: Leads Array → forEach() → processLead() → every Lead Process

    - There will be a processLead(lead) function.
    - Need to call processLead() for each lead using forEach().
    - Expected output:
                     - John Doe
                     - Sarah Smith
                     - Mike Ross


*/

const leads = [
    { name: "John Doe", status: "new" },
    { name: "Sarah Smith", status: "qualified" },
    { name: "Mike Ross", status: "new" }
];

function processLead(lead){
    console.log(lead.name)
}

leads.forEach(lead =>{
     processLead(lead)
})