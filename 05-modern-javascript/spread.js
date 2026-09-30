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