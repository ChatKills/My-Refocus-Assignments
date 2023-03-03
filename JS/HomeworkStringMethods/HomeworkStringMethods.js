// Find the first uppercase letter

/* Hint
In the text “there is a storm coming to the East of the Philippines”, the result is “E”.
 */

function findUpperCase (sentence) {
    let regex = /[^A-Z]/g;    
    let removeLetters = sentence.replace(regex, '').charAt(0);
    return `the result is ${removeLetters}`;
}

console.log(findUpperCase('there is a storm coming to the East of the Philippines'))

/* Hint
In the text “no more rainy days here, sun is about to show up” there are no upper-case letters. 
Use console messages to make sure that users are aware of this fact. */

function hasLowerCase (sentence) {
    let regex = /[a-z]/g;    
    let removeLetters = sentence.find(regex);
    console.log( `the result is ${removeLetters}`);
    if (!removeLetters) {
        console.log(`Thre is no upper-case letters`);
    } else {
        console.log(`Thre is an upper-case letters`);
    }
}

hasLowerCase('No more rainy days here, sun is about to show up');
