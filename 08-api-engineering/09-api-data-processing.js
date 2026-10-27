/*
    Suppose, our AI Automation System takes customer data from an API and prepares it for sending to CRM.

    Our workflow will be:
    Fetch data from API → Verify HTTP response → Read JSON data → Select required customer → Generate clean data.

*/

async function processCustomers() {
    try {
        // Step 1: Fetch customers from API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Step 2: Check HTTP response
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Step 3: Convert JSON response into JavaScript data
        const customers = await response.json();

        // Step 4: Select customers with valid email
        const validCustomers = customers.filter(customer => {
            return customer.email && customer.email.includes("@");
        });

        // Step 5: Transform customer data
        const processedCustomers = validCustomers.map(customer => {
            return {
                id: customer.id,
                name: customer.name.trim(),
                email: customer.email.toLowerCase(),
                company: customer.company.name
            };
        });

        console.log("Total Customers:", customers.length);
        console.log("Valid Customers:", validCustomers.length);
        console.log("Processed Customers:", processedCustomers);

    } catch (error) {
        console.error("Customer Processing Failed:", error.message);
    }
}

processCustomers();


/*
 *    filter() → Determines which items to keep.
 *    map() → Converts each item to a new value or object.
 */