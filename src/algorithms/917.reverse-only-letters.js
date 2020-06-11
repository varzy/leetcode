/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  const result = [];
  const letters = S.split('').filter(item => {
    const ascii = item.toUpperCase().charCodeAt();
    return ascii >= 65 && ascii <= 90;
  });

  S.split('').map((letter, index) => {
    const ascii = letter.toUpperCase().charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      result[index] = letters[letters.length - 1];
      letters.pop();
    } else {
      result[index] = letter;
    }
  });

  return result.join('');
};
