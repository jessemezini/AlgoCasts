// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;

  // let total = 0;

  // Solution 2
  // const wordsToCheck = ['a', 'e', 'i', 'o', 'u'];

  // for (let char of str.toLowerCase()) {
  //   if (wordsToCheck.includes(char)) {
  //     total++;
  //   }
  // }

  // Solution 1
  // str
  //   .toLowerCase()
  //   .split('')
  //   .filter(x => {
  //     if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
  //       return total++;
  //     }
  //   });

  // return total;
}

module.exports = vowels;
