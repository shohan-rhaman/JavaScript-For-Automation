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