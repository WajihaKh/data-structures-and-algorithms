function validateBrackets(str) {
  const stack = [];
  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const lastBracket = stack.pop();
      if (!lastBracket || bracketsMap[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = validateBrackets;

