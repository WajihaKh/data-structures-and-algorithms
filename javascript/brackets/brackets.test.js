const validateBrackets = require('./index.js');

describe('validateBrackets', () => {
  test('should return true for balanced brackets', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('([])')).toBe(true);
    expect(validateBrackets('{[()]}')).toBe(true);
    expect(validateBrackets('(({}))')).toBe(true);
    expect(validateBrackets('[[{()}]]')).toBe(true);
  });

  test('should return false for unbalanced brackets', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets('(()')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
    expect(validateBrackets('{[)]}')).toBe(false);
    expect(validateBrackets('{{[[(())]]]')).toBe(false);
  });

  test('should return true for empty string', () => {
    expect(validateBrackets('')).toBe(true);
  });

  test('should return true for string without brackets', () => {
    expect(validateBrackets('abc')).toBe(true);
    expect(validateBrackets('123')).toBe(true);
  });
});
