/*
    POST request with fetch():

    Here we will learn POST API Request — that is, how to send data to an API using JavaScript. This is very important for AI Automation Engineers to send leads to CRM, create new customers, or send order data.

    Different beteew GET and POST:
    GET: Request data from the API.
    POST: Sending data to the API, usually to create a new resource.

    Suppose our automation system has received a new lead. Now we need to send the information about that lead to the CRM API. In this case, a POST request can be used.
*/

async function createLead() {
    const leadData = {
        name: "Rahim Ahmed",
        email: "rahim@example.com",
        company: "ABC Roofing"
    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(leadData)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();

        console.log("Lead created:", result);

    } catch (error) {
        console.log("Failed to create lead:", error.message);
    }
}

createLead();
/*  
    Output:

    Lead created: {
    name: 'Rahim Ahmed',
    email: 'rahim@example.com',
    company: 'ABC Roofing',
    id: 101
    }
    
*/
