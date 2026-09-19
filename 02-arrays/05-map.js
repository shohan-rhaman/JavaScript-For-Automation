/*

    Map() is buid in method of arrays\

    Its main function:
    Creates a new array by operating on each item of an array.

*/

const prices = [100, 200, 300];

const priceList = prices.map(price =>{
    return price + 10
})

console.log(priceList)




// Using map() will extract only names: ["John", "Sarah", "Mike"]

const leads = [
    { name: "John", status: "new" },
    { name: "Sarah", status: "qualified" },
    { name: "Mike", status: "new" }
];

const userName = leads.map(lead =>{
    return lead.name
})

console.log(userName)