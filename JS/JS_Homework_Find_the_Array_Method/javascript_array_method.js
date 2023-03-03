/* 
    todo : Find the most used item on the array using array methods.
    todo : create an algorithm that counts the times each element is repeated
*/

const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

words = arr.reduce((count, string) => {
    count[string] = (count[string] || 0) + 1;
    return count;   
}, {})

// The result should look like this object: { Web Developer': 3, Refocus: 2, Awesome: 1 }


let words = {};
console.log(`This is using the forEach() method`);
arr.forEach(item => {
    if (words[item]) {
        words[item]++;
    } else {
        words[item] = 1;
    }
});
console.log(words)