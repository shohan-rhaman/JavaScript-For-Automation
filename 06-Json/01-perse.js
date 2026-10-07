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