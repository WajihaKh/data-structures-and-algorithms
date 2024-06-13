const leftJoin = require('./index.js');

describe('leftJoin function', () => {
  it('should perform left join correctly', () => {
    let hashmap1 = {
      'happy': 'joyful',
      'sad': 'unhappy',
      'young': 'youthful'
    };

    let hashmap2 = {
      'happy': 'sad',
      'young': 'old'
    };

    let expectedResult = [
      ['happy', 'joyful', 'sad'],
      ['sad', 'unhappy', null],
      ['young', 'youthful', 'old']
    ];

    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedResult);
  });

  it('should handle keys only in hashmap1', () => {
    let hashmap1 = {
      'happy': 'joyful',
      'sad': 'unhappy',
      'young': 'youthful'
    };

    let hashmap2 = {
      'angry': 'calm',
      'serious': 'playful'
    };

    let expectedResult = [
      ['happy', 'joyful', null],
      ['sad', 'unhappy', null],
      ['young', 'youthful', null]
    ];

    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedResult);
  });


  it('should handle keys only in hashmap2', () => {
    let hashmap1 = {
      'happy': 'joyful',
      'sad': 'unhappy',
      'young': 'youthful'
    };

    let hashmap2 = {
      'happy': 'sad',
      'angry': 'calm',
      'serious': 'playful'
    };

    let expectedResult = [
      ['happy', 'joyful', 'sad'],
      ['sad', 'unhappy', null],
      ['young', 'youthful', null]
    ];

    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedResult);
  });

  it('should handle empty hashmap2', () => {
    let hashmap1 = {
      'happy': 'joyful',
      'sad': 'unhappy',
      'young': 'youthful'
    };

    let hashmap2 = {};

    let expectedResult = [
      ['happy', 'joyful', null],
      ['sad', 'unhappy', null],
      ['young', 'youthful', null]
    ];

    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedResult);
  });

  it('should handle empty hashmap1', () => {
    let hashmap1 = {};

    let hashmap2 = {
      'happy': 'sad',
      'angry': 'calm',
      'serious': 'playful'
    };

    let expectedResult = [];

    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedResult);
  });

  it('should handle both hashmaps empty', () => {
    let hashmap1 = {};
    let hashmap2 = {};

    let expectedResult = [];

    expect(leftJoin(hashmap1, hashmap2)).toEqual(expectedResult);
  });
});
