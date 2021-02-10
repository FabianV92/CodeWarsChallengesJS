"use strict"
/* KYU(7)
Jaden Smith, the son of Will Smith, is the star of films such
as The Karate Kid (2010) and After Earth (2013). Jaden is also
known for some of his philosophy that he delivers via Twitter.
When writing on Twitter, he is known for almost always
capitalizing every word. For simplicity, you'll have to capitalize' +
' each word, check out how contractions are expected to be in the ' +
example below.

Your task is to convert strings to how they would be written by Jaden
Smith. The strings are actual quotes from Jaden Smith, but they are not
capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/
// Test string
var str = "How can mirrors be real if our eyes aren't real";

const toJadenCase = function (input) {
    // Changing letters to lowercase and split them
    input = input.toLowerCase().split(" ");
    // Creating cadeCase container
    const cadeCase = [];
    for (const i of input) {
        // Filling cadeCase array and index 0 will be
        // replaced to uppercase and added with the
        // slice method the rest of the input string
        cadeCase.push(i[0].toUpperCase()+ i.slice(1));
    }
    //console.log(cadeCase.join(" "));
    return cadeCase;
};
console.log(toJadenCase(str));
