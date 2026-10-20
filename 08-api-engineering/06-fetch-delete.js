/*
    DELETE Request:
    DELETE is used to delete a specific record.
*/

async function deleteLead(){
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }else{
            console.log("Deleted data sucessfully")
        }
    }catch(error){
        console.log(error.message)
    }
}