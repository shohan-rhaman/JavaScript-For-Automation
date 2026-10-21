/*
    What is Authentication?

    = Suppose our AI automation system wants to fetch customer data from a CRM API. Can the CRM verify —is the request coming from an authorized system?

    Part of this identity or authorization verification process is Authentication.

    Two known methods:
    1. API Key: A key given to an application to identify the API user.
    2. Bearer Token: A token sent with the request, which can grant authorization based on possession. The token can have a validity period and permissions.

*/

// GET request with Bearer Token:

async function getProtectedData() {
    const token = "YOUR_ACCESS_TOKEN";

    try {
        const response = await fetch(
            "https://api.example.com/users",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("User data:", data);

    } catch (error) {
        console.log("Request failed:", error.message);
    }
}

getProtectedData();

/*
    Here:
    
    - Authorization is the name of the HTTP header.
    - Bearer is the authentication scheme.
    - The value of the token is added with ${token}.

    Suppose, the value of the token is abc123. Then the header will be:
    Authorization: Bearer abc123


*/