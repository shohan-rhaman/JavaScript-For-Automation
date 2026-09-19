/*

    Map() is buid in method of arrays

    Its main function:
    Creates a new array by operating on each item of an array.


    3 core point about map():
    - Operates on each item
    - Creates a new array using the returned value
    - Does not modify the original array

*/

const prices = [100, 200, 300];

const priceList = prices.map(price =>{
    return price + 10
})

console.log(priceList)




// Using map() will extract only names: ["John", "Sarah", "Mike"]

const leads = [
    { name: "John", status: "new" },
    { name: "Sarah", status: "qualified" },
    { name: "Mike", status: "new" }
];

const leadNames = leads.map(lead =>{
    return lead.name
})

console.log(leadNames)



/*

    Transform each lead into this structure using map():
    name → fullName
    email → contact

*/


const leadsData = [
    {
        name: "John",
        email: "john@example.com"
    },
    {
        name: "Sarah",
        email: "sarah@example.com"
    }
];


const output = leadsData.map(lead =>{
    return {
        fullName: lead.name,
        contact: lead.email
    }
})

console.log(output)



/*

Rule:
- if status === "new" then isNew: true
- if other status isNew: false

*/


const customerLeads = [
    {
        name: "John",
        email: "john@example.com",
        status: "new"
    },
    {
        name: "Sarah",
        email: "sarah@example.com",
        status: "qualified"
    },
    {
        name: "Mike",
        email: "mike@example.com",
        status: "new"
    }
];


const customerLeadsData = customerLeads.map(lead =>{

    return {
        name: lead.name,
        email: lead.email,
        isNew: lead.status === "new"
    }
})

console.log(customerLeadsData)