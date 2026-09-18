/*

    Keep 3 leads. Each lead:

    - name
    - email
    - status

    Then console it and output:

    - Name of the first lead
    - Email of the second lead
    - Status of the third lead

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


console.log(leads[0].name)
console.log(leads[1].email)
console.log(leads[2].status)