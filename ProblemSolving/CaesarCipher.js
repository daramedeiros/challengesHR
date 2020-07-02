/**
* julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
* Original alphabet:      abcdefghijklmnopqrstuvwxyz
* Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
* For example, the given cleartext  and the alphabet is rotated by . The encrypted string is .

* Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

* Function Description

* Complete the caesarCipher function in the editor below. It should return the encrypted string.

* caesarCipher has the following parameter(s):

s: a string in cleartext
k: an integer, the alphabet rotation factor
Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by. */

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    s = s.split(''); //separando um obj string em um array de strings
    k = k > 25 ? k % 26 : k;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.slice(k) + alphabet.slice(0,k);
    for(let i=0; i<s.length; i++){
        if(/[a-zA-Z]/.test(s[i])){
            let index = s[i].charCodeAt(0)-97;
            if(index < 0){
                index = s[i].charCodeAt(0)-65;
                s[i] = alphabet[index].toUpperCase();
            }else{
                s[i] = alphabet[index]
            }
        }
    }
    return s.join('')
}