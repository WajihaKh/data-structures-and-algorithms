const { AnimalShelter } = require('./index.js');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
    shelter.enqueue({ species: 'dog', name: 'Buddy' });
    shelter.enqueue({ species: 'cat', name: 'Whiskers' });
    shelter.enqueue({ species: 'dog', name: 'Max' });
  });

  test('dequeue should return the oldest dog', () => {
    expect(shelter.dequeue('dog')).toEqual({ species: 'dog', name: 'Buddy' });
  });

  test('dequeue should return the oldest cat', () => {
    expect(shelter.dequeue('cat')).toEqual({ species: 'cat', name: 'Whiskers' });
  });

  test('dequeue with invalid preference should return null', () => {
    expect(shelter.dequeue('bird')).toBeNull();
  });
});
