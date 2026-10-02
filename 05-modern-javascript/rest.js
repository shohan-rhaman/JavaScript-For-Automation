/*
    Concept — Rest Operator ...

    || Spread and Rest operator look the same... but work differently.

    For Spread: const allLeads = [...websiteLeads, ...facebookLeads];
    Here [...] data is spreading.


    For Rest: Collecting many values ​​together and storing them in an array.
*/

// simple examle: Suppose we don't know how many numbers will come in the function:
function calculateTotal(...amounts) {
    console.log(amounts);
}
// here (...amounts) Will collect all arguments.

calculateTotal(1000, 2000, 3000); // output: [1000, 2000, 3000]