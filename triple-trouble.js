// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.Taking the first letter of all of the inputs and grouping them next to each other.Do this for every letter, see example below!
// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.
    // I'm also assuming there will always be exactly 3 strings input

function tripleStr(str1, str2, str3) {
    // initialize an empty string to be returned at the end
    // loop through each string and add the first letter of each to the string
    // on the next loop, add the next letter, and so on.

    let newStr = ""
    for (let i = 0; i < str1.length; i++) {
            let letter1 = str1.slice(i, i+1);
            newStr += letter1
            let letter2 = str2.slice(i, i + 1);
            newStr += letter2
            let letter3 = str3.slice(i, i+1);
            newStr += letter3
        }
    return newStr;
}

console.log(tripleStr("aa", "bb", "cc"))