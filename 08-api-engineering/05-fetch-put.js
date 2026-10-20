/*
    PUT Request: 
    PUT is usually used to replace/update an entire resource.
*/

async function updateLead(){
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "contacted"
                })
            }
        );

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Updated Data: ", result);

    }catch(error){
        console.log(error.message)
    }
}

updateLead();

// Updated data: { title: 'Updated title', body: 'Updated content', userId: 1, id: 1 }