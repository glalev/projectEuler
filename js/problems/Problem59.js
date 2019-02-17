/* Each character on a computer is assigned a unique code and the preferred standard
is ASCII (American Standard Code for Information Interchange).
For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII,
then XOR each byte with a given value, taken from a secret key.
The advantage with the XOR function is that using the same encryption
key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107,
then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message,
and the key is made up of random bytes. The user would keep the encrypted message
and the encryption key in different locations, and without both "halves",
it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method
is to use a password as a key. If the password is shorter than the message,
which is likely, the key is repeated cyclically throughout the message. The
balance for this method is using a sufficiently long password key for security,
but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case
characters. Using p059_cipher.txt (right click and 'Save Link/Target As...'),
a file containing the encrypted ASCII codes, and the knowledge that the plain
text must contain common English words, decrypt the message and find the sum of
the ASCII values in the original text.

Answer: 129448
*/


const { loadData } = require('../helpers');

const isValid = (c) => (32 <= c && c <= 122);
const genaratePasswords = () => {
  const a = 97;
  const z = 122;
  const passwords = []
  for (let i = a; i <= z; i++) {
    for (let j = a; j <= z; j++) {
      for (let k = a; k <= z; k++) {
        const password = [i, j, k];
        passwords.push(password);
      }
    }
  }
  return passwords;
}

const problem = async () => {
  const data = await loadData('problem59');
  const message = data.split(',').map(a => parseInt(a));
  const texts = {};
  const a = 97;
  const z = 122;

  for (let i = a; i <= z; i++) {
    for (let j = a; j <= z; j++) {
      for (let k = a; k <= z; k++) {
        const password = [i, j, k];
        const decoded = [];

        for (let l = 0; l < message.length; l++) {
          const c = message[l] ^ password[l % 3];
          if (isValid(c)) decoded.push(c);
        }

        if(decoded.length === message.length) {
          texts[String.fromCharCode(...password)] = {
            text: String.fromCharCode(...decoded),
            sum: decoded.reduce((sum, a) => sum + a, 0),
          };
        }
      }
    }
  }

  // todo add some simple text analysis for narrow filtering
  Object.keys(texts)
    .forEach(key => {
      console.log(`key: ${key}\nsum: ${texts[key].sum}\n${texts[key].text}\n${'-'.repeat(80)}\n`);
    });

  // after printing the decoded text it becomes clear that the key is 'exp'
  return texts.exp.sum;
};

module.exports = problem;
