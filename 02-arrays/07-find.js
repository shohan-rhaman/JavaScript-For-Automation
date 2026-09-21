/*
    what does find() do?
    = It will return the first item that matches the condition.

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

const lead = leads.find(lead =>{
    return lead.status === "new"
})

console.log(lead)




