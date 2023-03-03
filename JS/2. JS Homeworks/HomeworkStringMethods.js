// Find the first uppercase letter

/* Hint
In the text “there is a storm coming to the East of the Philippines”, the result is “E”.
 */

function findUpperCase (sentence) {
    let regex = /[^A-Z]/g;    
    let removeLetters = sentence.replace(regex, '').charAt(0);
    console.log( `the result is ${removeLetters}`);
}

findUpperCase('there is a storm coming to the East of the Philippines');

/* Hint
In the text “no more rainy days here, sun is about to show up” there are no upper-case letters. 
Use console messages to make sure that users are aware of this fact. */

function isLowerCase (sentence) {
   let regex = /[^a-z]/g;
   let lowerCase = sentence.replace(regex, '');
   newSent = "";
   
}

isLowerCase('no more rainy days here, sun is about to show up')
