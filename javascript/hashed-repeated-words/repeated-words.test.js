const { tokenizeString, findFirstRepeatedWord, repeatedWord } = require('./index.js');

describe('tokenizeString', () => {
  test('should tokenize a string into words', () => {
    expect(tokenizeString('Hello, world! Hello again.')).toEqual(['hello', 'world', 'hello', 'again']);
    expect(tokenizeString('No repeats here.')).toEqual(['no', 'repeats', 'here']);
    expect(tokenizeString('')).toEqual([]);
  });
});

describe('findFirstRepeatedWord', () => {
  test('should find the first repeated word in an array', () => {
    expect(findFirstRepeatedWord(['hello', 'world', 'hello', 'again'])).toBe('hello');
    expect(findFirstRepeatedWord(['no', 'repeats', 'here'])).toBeNull();
    expect(findFirstRepeatedWord(['a', 'b', 'c', 'a', 'b'])).toBe('a');
  });
});

describe('repeatedWord', () => {
  test('should find the first repeated word in a string', () => {
    expect(repeatedWord('Hello, world! Hello again.')).toBe('hello');
    expect(repeatedWord('No repeats here.')).toBeNull();
    expect(repeatedWord('This is a test. This test is simple.')).toBe('this');
  });
});
