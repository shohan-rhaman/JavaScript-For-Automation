/*
    What is JSON.stringify()?
    - JSON.stringify() is a JavaScript method that converts a JavaScript value to a JSON string.

    Mental Part:
    - JSON.parse() → JSON string to JavaScript value
    - JSON.stringify() → JavaScript value to JSON string

*/
// Suppose we have a JavaScript object.
const customer = {
    name: "Rahim",
    email: "rahim@example.com",
    status: "new"
};
const jsonData = JSON.stringify(customer);
console.log(jsonData)
// Output: {"name":"Rahim","email":"rahim@example.com","status":"new"}