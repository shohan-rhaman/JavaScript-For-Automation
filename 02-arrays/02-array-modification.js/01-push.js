// ================ push() ===================
// Adds item at the end

const companyLeads = [
    {
        name: "John",
        email: "john@example.com",
        status: "new"
    },
    {
        name: "Sarah",
        email: "sarah@example.com",
        status: "qualified"
    }
];

const newLead = { 
    name: "David", 
    email: "david@example.com", 
    status: "new" 
} 
                       
companyLeads.push(newLead)  
console.log(companyLeads);