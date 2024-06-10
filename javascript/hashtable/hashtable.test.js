const Hashtable = require('./index.js');

test('Setting a key/value to the hashtable results in the value being in the data structure', () => {
  const ht = new Hashtable();
  ht.set('name', 'Alice');
  expect(ht.get('name')).toBe('Alice');
});

test('Retrieving based on a key returns the value stored', () => {
  const ht = new Hashtable();
  ht.set('name', 'Alice');
  expect(ht.get('name')).toBe('Alice');
});

test('Successfully returns null for a key that does not exist in the hashtable', () => {
  const ht = new Hashtable();
  expect(ht.get('nonexistent')).toBeNull();
});

test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
  const ht = new Hashtable();
  ht.set('name', 'Alice');
  ht.set('age', 25);
  ht.set('city', 'Wonderland');
  const keys = ht.keys();
  expect(keys).toContain('name');
  expect(keys).toContain('age');
  expect(keys).toContain('city');
  expect(keys.length).toBe(3);
});

test('Successfully handle a collision within the hashtable', () => {
  const ht = new Hashtable(5);
  ht.set('name', 'Alice');
  ht.set('anem', 'Bob');
  expect(ht.get('name')).toBe('Alice');
  expect(ht.get('anem')).toBe('Bob');
});

test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
  const ht = new Hashtable(5);
  ht.set('name', 'Alice');
  ht.set('anem', 'Bob');
  expect(ht.get('name')).toBe('Alice');
  expect(ht.get('anem')).toBe('Bob');
});

test('Successfully hash a key to an in-range value', () => {
  const ht = new Hashtable();
  const index = ht.hash('name');
  expect(index).toBeGreaterThanOrEqual(0);
  expect(index).toBeLessThan(ht.size);
});
