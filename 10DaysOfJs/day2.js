/* Loops

Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in .

 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let v = ["a", "e", "i", "o", "u"];
    let c = [];

    for(let i = 0; i <s.length; i++){
        if (v.includes(s.charAt(i))) {
        console.log(s.charAt(i));
    } else {
        c.push(s.charAt(i));
        }
    }
    c.forEach(val => console.log(val))
    }