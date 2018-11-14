// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    // charMap[char] is the key {1: a, 1: b, 7: c, 1: d}
    // max = 0; loop over max 0 and updated max to 1: a and maxChar to char a, then again over 1: b (don't do anything)
    // then over charMap[char] 7 that is great than max, so will save max to 7 and maxChar to c.
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
