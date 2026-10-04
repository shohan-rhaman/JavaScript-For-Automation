/*

    Optional Chaining ?.

    - Optional Chaining (?.) is a syntax in JavaScript that allows you to return undefined without throwing an error even if there are no nested properties or methods.

*/

const lead = {
    name: "Karim",
    email: "karim@gmail.com"
};
const website = lead.company?.website;
/*
    - If there is a company → website will be available
    - If there is no company → undefined will be available, no error will occur.
*/


// ==================== Automation Example ==================== \\
const webhookData = {
    customer: {
        name: "Rahim",
        contact: {
            email: "rahim@example.com",
            phone: "01700000000"
        }
    }
};
// suppose we get data from webhook like this now we have to find out email
const email = webhookData.customer?.contact?.email;
console.log(email); // output: rahim@example.com

// now suppose we don't have contact although we want to get email then this is the very place we can use optional chaingin
const crmData = {
    customer: {
        name: "Rahim"
    }
};

const customerEmail = webhookData.customer?.contact?.email;
console.log(email); // output: undefined
// workflow won't crush


// ================== One of important difference ====================== \\
// for normal access
lead.company.website
// if company doesn't exist then → ❌ Error

// for Optional chaining:
lead.company?.website
// if there is no company then → ✅ undefined
