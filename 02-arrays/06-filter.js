/*

    filter is a built-in Array method of javascript

    Functions of:
    It will check each item in the array, and create a new array with only those whose condition is true.

*/

const prices = [100, 200, 300, 400];

const expensivePrices = prices.filter(price => {
    return price > 200;
});

console.log(expensivePrices); // output: [300, 400]




/*

    Now difference between map() and filter()

    for map(): map() → transforms each item
    [100, 200, 300]
      ↓ map
    [110, 210, 310]

    for filter(): filter() → selects some items according to the condition
    [100, 200, 300]
      ↓ filter(price > 150)
    [200, 300]


    That is:
    map = change
    filter = sort


*/

// =================== Now Automation-style practice ============================= \\

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
    },
    {
        name: "David",
        email: "david@example.com",
        status: "contacted"
    }
];

// Cue: Only the leads with the status "new" will be extracted and placed in a new array.


const customerLeads = leads.filter(lead =>{
    return lead.status === "new"
})

console.log(customerLeads)



/*

    The main point of filter(): Filter() expects true/false from the callback.

    true → item will go into the new array
    false → item will not go

*/