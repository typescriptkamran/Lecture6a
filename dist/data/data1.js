export let a = "I am A from data1.ts file";
let b = "I am B from data1.ts file";
let c = "I am C from data2.ts file";
function sum(c, d) {
    return console.log(c + d);
}
const data1 = {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "country": "USA"
    },
    "favoriteFruits": ["apple", "banana", "orange"],
    "contact": {
        "email": "john@example.com",
        "phone": "555-123-4567"
    }
};
export default b;
export { b, c, sum };
