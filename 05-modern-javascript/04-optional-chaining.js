/*

    Optional Chaining ?.

    - Optional Chaining (?.) is a syntax in JavaScript that allows you to return undefined without throwing an error even if there are no nested properties or methods.

*/

const lead = {
    name: "Karim",
    email: "karim@gmail.com"
};
const website = lead.company?.website;
/*
    - If there is a company → website will be available
    - If there is no company → undefined will be available, no error will occur.
*/