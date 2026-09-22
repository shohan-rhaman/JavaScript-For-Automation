/*

    What does forEach() do?
    = Perform a task on each item in an array.

    Suppose we have 3 leads and we want to print the name of each lead to the console.


*/

const leads = [
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

const customerLeads = leads.forEach(lead =>{
    return lead.name
})

console.log(customerLeads) // [Johnz, Sarah, Mike]


/*

    Difference between forEach() and map()

    map(): map uselly creates a new array

    forEach(): works on each item by running action on it

*/