/*

    What is Funtion?:
    = A function is a reusable block of code that can be run repeatedly if needed.

    Suppose we have 100 leads and we need to do the same thing for each lead:
    Lead data → Process lead → Validate → Prepare message → Send

    We Don't write the same logic 100 times. Create a function, then call it as needed.

*/


// 01. Function Basics

function greet() {
    console.log("Hello, AI Automation Engineer!");
}

greet();



/*

    Automation Example:
    Suppose we need to log a message every time in our automation:

*/

function sendNotification() {
    console.log("Notification sent successfully");
}

sendNotification();
sendNotification();
sendNotification();

// No need to write the same code over and over again. This is the main power of functions:
// Write once → reuse many times


/*

    02 — Parameters & Arguments:

    what is the parameter?:
    The variable that we write inside the brackets when creating a function is the parameter.

    more precisely: A parameter is a variable created inside a function to receive data.


*/

function processLead(lead) {
    console.log(lead);
}
// here lead is a prameter


/*
    what is Argument?
    = The actual value that we send when calling a function is an argument.
*/

processLead("John");


// ====================== Automation Example ====================== //

function processLead(lead) {
    console.log(lead.name);
}

processLead({
    name: "John",
    email: "john@example.com",
    status: "new"
});

// outPut: Jhon

// we may send one object inside processLead as a value



/*

    ========================= return ===========================
    what is return?

    = simply The return function sends the result inside the function outside.

*/

function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(10, 20);

console.log(result); // output 30


// ================ automation example ======================= \\

// suppose data has come from api
const customer = {
    name: "Rahim",
    email: "RAHIM@GMAIL.COM"
};

// now we want to clean email
function cleanEmail(email){
    return email.trim().toLowerCase()
}

const cleanCustomerEamil = cleanEmail(customer.email)

console.log(cleanCustomerEamil) // output: rahim@gmail.com