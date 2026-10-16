/*
    Suppose, I asked for a user in the API who doesn't have an ID. The server gave a 404 Not Found response.

    The important thing here is that fetch() usually doesn't automatically throw an error when it gets a 404 or 500. So we need to check the status with response.ok.

    # response.ok is true — status is within the range of successful HTTP responses, That is, 200–299.
    # response.ok is false — like 404 or 500.
*/

// Let's see through the code this time.

async function getUserData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const userData = await response.json();

        console.log(userData.name);
        console.log(userData.email);

    } catch (error) {
        console.log("Failed to fetch user data:", error.message);
    }
}

getUserData();
