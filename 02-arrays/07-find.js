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
    // return lead.email === "sarah@example.com"
})

console.log(lead)


/*
    filter() vs find()

    filter()
   ↓
    all matching items
   ↓
    Array []



    find()
   ↓
    first matching item
   ↓
    an item/object

*/

