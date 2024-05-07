
const LinkedList = require('../index');

const linkedList = new LinkedList();

test('Append 1', () => {
  linkedList.append(1);
  expect(linkedList.head.value).toBe(1);
});

test('Append 3', () => {
  linkedList.append(3);
  expect(linkedList.head.next.value).toBe(3);
});

test('Append 2', () => {
  linkedList.append(2);
  expect(linkedList.head.next.next.value).toBe(2);
});

test('Insert Before 3', () => {
  linkedList.insertBefore(3, 5);
  expect(linkedList.head.next.value).toBe(5);
  expect(linkedList.head.next.next.value).toBe(3);
});

test('Insert Before 1', () => {
  linkedList.insertBefore(1, 5);
  expect(linkedList.head.value).toBe(5);
});

test('Insert Before 2', () => {
  linkedList.insertBefore(2, 5);
  expect(linkedList.head.next.next.value).toBe(5);
});

test('Insert After 3', () => {
  linkedList.insertAfter(3, 5);
  expect(linkedList.head.next.value).toBe(5); // The next node after 3 should have value 5
  expect(linkedList.head.next.next).toBeNull(); // There should be no node after 5
});



test('Insert After 2', () => {
  linkedList.insertAfter(2, 5);
  expect(linkedList.head.next.next.value).toBe(5);
});

test('Insert After 4 throws error', () => {
  expect(() => linkedList.insertAfter(4, 5)).toThrow('Value not found in the list');


});
