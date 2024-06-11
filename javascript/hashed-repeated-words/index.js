function tokenizeString(str) {
  return str.toLowerCase().match(/\b\w+\b/g) || [];
}

function findFirstRepeatedWord(words) {
  const seen = new Set();
  for (const word of words) {
    if (seen.has(word)) {
      return word;
    }
    seen.add(word);
  }
  return null;
}

function repeatedWord(str) {
  const words = tokenizeString(str);
  if (words === null) {
    return null;
  }
  return findFirstRepeatedWord(words);
}

module.exports = { tokenizeString, findFirstRepeatedWord, repeatedWord };
