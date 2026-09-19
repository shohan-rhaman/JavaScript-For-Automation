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


// ================ pop() =====================

const leads = ["John", "Sarah", "Mike"];
const removedLead = leads.pop(); // last item will be remove
console.log(removedLead); // Remove: "Mike"

console.log(leads); // Exist: ["John", "Sarah"]



// ================ shift() =====================

const leadsName = ["John", "Sarah", "Mike"];
const removedLeadName = leadsName.shift(); 

console.log(removedLead); // Remove: "John"
console.log(leads); // Exist: ["Sarah", "Mike"]


// ================ Unshift() =====================

const userLeads = ["Sarah", "Mike", "David"];
const newUser = userLeads.unshift("John") // adds item at the first

console.log("add users at the first", userLeads) // [ 'John', 'Sarah', 'Mike', 'David' ]




/* 
    =============== push() vs pop() vs shift() =================

    - push()    => Adds item at the end
    - pop()     => Remove the last item
    - shift()   => Remove the first item
    - unshift() => adds item at the first
 
*/

