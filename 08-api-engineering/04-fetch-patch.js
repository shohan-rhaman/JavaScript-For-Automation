/*
    Concept of PATCH:
    = We use patches to update specific parts of a resource.

    Suppose we have a lead in our CRM.
    {
        id: 1,
        name: "Shohan",
        status: "new"
    }
    Now we just want to contactced from status new.


*/

async function updateLeadStatus() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "contacted"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Updated data:", result);

    } catch (error) {
        console.log("Update failed:", error.message);
    }
}

updateLeadStatus();

// Note: Here we are sending a specific field with a PATCH request. JSONPlaceholder is a testing API, so the actual CRM data will not be permanently changed here.
