/*
    What is async?
    = A function is declared as an asynchronous function with the async keyword. An async function always returns a Promise.
*/

async function customer(){
    return "Shohan"
}
console.log(customer()); // output: Promise { "Shohan" }
// Note: Here inside the function we have returned "Shohan", but because it is async, JavaScript displays it as a successful result of the Promise.


async function getData() {
    return "Hello";
}
// It is conceptually like this: 
function getData() {
    return Promise.resolve("Hello");
}
