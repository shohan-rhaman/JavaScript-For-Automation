/* Make a realistic automation data

   Scenario: A business lead has come from one website form

   Your object will contain: name, email, phone, source, status, company || company will be nested object.
   inside company will contain: name, industry, website 

   Then, using JavaScript, output only these to the console: Lead Name, Lead Email, Company Name, Company Industry
*/


const lead = {
    name: "John Doe",
    email: "john@example.com",
    phone: "000 XXXXXX",
    source: "website",
    status: "premium",

    company: {
        name: "ABC Roofing",
        industry: "Roofing",
        website: "roofyourhouse.com"
    }
}

console.log(lead.name);
console.log(lead.email);
console.log(lead.company.name);
console.log(lead.company.industry);