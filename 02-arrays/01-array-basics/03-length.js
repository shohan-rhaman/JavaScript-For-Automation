/*** 

    Put 5 business leads in an array.

    1. Find out how many leads there are in total using length.
    2. Then find the name of the last lead in the array.

***/


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
        name: "Rojar",
        email: "rojar@example.com",
        status: "new"
    },
    {
        name: "Devid",
        email: "devid@example.com",
        status: "new"
    }
];

console.log(leads.length)
console.log(leads[4].name)  // console.log(leads[leads.length - 1].name)






