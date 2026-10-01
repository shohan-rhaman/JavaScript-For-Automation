/*
    The main function of Spread:
    - To spread the data inside one array/object and use it in another array/object.

*/

// 01. start with array

const leads = ["Rahim", "Karim", "John"];
// suppose we want to make a new array where All the previous leads will be there and there will be a new one as well.

const newLeads = [...leads, "Sarah"];
// it means Spread all the values ​​of the leads array here.



// 02. Array copy
// We can also create a new copy of an existing array with Spread:
const leadNames = ["Rahim", "Karim", "John"];

const copiedLeads = [...leadNames];

console.log(copiedLeads); // output: ["Rahim", "Karim", "John"]



// 03. Multiple arrays merge
const newCustomerLeads = ["Rahim", "Karim"];
const qualifiedLeads = ["John", "Sarah"];

// Both together:
const allLeads = [...newCustomerLeads, ...copiedLeads]
console.log(allLeads); // output: ["Rahim", "Karim", "John", "Sarah"]



// ================ Automation example of arrays ====================== \\

// Existing leads came from CRM:
const crmLeads = [
    { name: "Rahim", status: "new" },
    { name: "Karim", status: "new" }
];

// New lead arrived from webhook:
const newLead = {
    name: "John",
    status: "new"
};

// new array will be:
const updateLeads = [...crmLeads, ...newLead]
console.log(updateLeads)
// Here we are creating a new array without modifying the original crmLeads array.



// ====================== Object of Spread ========================= \\

const lead = {
    name: "Rahim",
    email: "rahim@gmail.com"
};
// now We want to create a new object of lead and add status to it.
const updateLead = {
    ...lead,
    status: "new"
}
console.log(updateLead);



// ===================== Automation example ========================= \\
// customer data has come from crm
const customer = {
    name: "Rahim",
    email: "rahim@gmail.com",
    status: "new",
    source: "website"
};
// now we have to change status new to qualified
// We can create a new object without directly modifying the original object:

const updatedCustomer = {
    ...customer,
    status: "qualified"
};


