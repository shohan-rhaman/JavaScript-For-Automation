/*
    What is an api status code:

    = Suppose our automation system sends a request to a CRM API. The server can then provide an HTTP status code to indicate the outcome of the request.

    For example: 
    - the request was successful 
    - authentication failed 
    - there was a problem with the server.

    Most important api status code:

    200 — OK  — Customer data found
    201 — Created — New resource created
    400 — Bad Request — Request data is incorrect.
    401 — Unauthorized — Authentication required or failed
    403 — Forbidden — No required permission
    404 — Not Found — Resource not found
    500 — Internal Server Error — Problem inside the server

*/

async function checkApiStatus(){
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        console.log("Status Code:", response.status);

        if(response.status === 200){
            console.log("Request sucessful!")
        }else if(response.status === 401){
            console.log("Authentication required!")
        }else if(response.status === 403){
            console.log("Permission denied!")
        }else if(response.status === 404){
            console.log("Resource not found!")
        }else if(response.status >= 500){
            console.log("Server error!");
        }else if(!response.ok){
            console.log("Request failed!");
        }

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const userData = await response.json();
        console.log("User:", userData.name);


    }catch(error){
        console.log("API Error:", error.message);
    }
}

checkApiStatus();

/*
    Output: 
    Status Code: 200
    Request sucessful!
    User: Leanne Graham
*/


/*
    Difference between 401 ও 403:

    401 — Authentication problem
    = API token not provided, token invalid, or expired.

    403 — Permission issue
    = Even though the token is valid, your account does not have permission to view a specific resource.

*/