/*
    What is JSON?
    JSON = JavaScript Object Notation

    simply:
    - JSON is a standard data format that is used to exchange data between APIs, webhooks, CRMs, databases, and various systems.

*/

// ===== At first an important distinction between json and object ======== \\

// javaScript Object:
const lead = {
    name: "Rahim",
    email: "rahim@example.com"
};

// Json format:
{
    "name": "Rahim",
    "email": "rahim@example.com"
}
// javaScript object and json looks similar but the property name in JSON must be enclosed in double quotes " ".



/*
    What is the JSON.parse() ?
    Using JSON.parse() we convert: JSON string → JavaScript object
*/

// Suppose we got this data from the API:
const jsonData = '{"name":"Rahim","email":"rahim@example.com"}';
console.log(typeof jsonData); // output: string
// The entire data is a string here.


// now if we want to convert javascript string to object then:
const leadData = JSON.parse(jsonData);
console.log(typeof leadData); // output will be object

// now we can access the property
console.log(leadData.name); // Rahim
console.log(leadData.email); // rahim@example.com



// ============ Automation Example ================ \\

// Suppose this data comes from a webhook system:
const webhookData = `{
    "customer": {
        "name": "Rahim",
        "email": "rahim@example.com"
    },
    "amount": 5000
}`;
// It is now string

const data = JSON.parse(webhookData);
// we can do it:
console.log(data.customer.name); // Rahim
console.log(data.customer.email); // rahim@example.com
console.log(data.amount); // 5000

// The main task of JSON parsing is to convert JSON data received from the system into usable objects in JavaScript.
