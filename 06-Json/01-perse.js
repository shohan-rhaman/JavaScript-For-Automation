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