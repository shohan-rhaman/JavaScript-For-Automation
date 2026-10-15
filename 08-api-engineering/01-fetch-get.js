/*
    Usecase of API:

    Suppose we have an AI automation system. It will fetch customer information from a CRM, then send that information to the AI.


    The first step in this task could be to collect data from the API.

    - API: A means of communication between two software.
    - GET request: HTTP request used to request data from an API.
    - fetch(): A built-in function for sending API requests using JavaScript.

*/

// GET request:

async function getUser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const user = await response.json();
    console.log(user)
}

getUser()

// Output: { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"}
// This is sample data from the API; the response may have more properties.


/*
    Hole Concept:

    1. fetch(url): Sends a request to the API
    2. response: Server response is available.
    3. response.json(): JavaScript data is parsed from a JSON body.
    4. console.log(user): Data can be used or tested

    Important note: fetch() usually does not automatically reject an HTTP 404 or 500 status.

*/


/*
    ============= Practice Task ====================

    1. Will fetch the second user's data from https://jsonplaceholder.typicode.com/users/2.
    2. Only the user name should be shown without showing the entire object.
    3. Only the user's email will be displayed.

*/

async function getUserData() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/2"
    );

    const userData = await response.json();

    console.log(userData.name);
    console.log(userData.email);
}

getUserData();
