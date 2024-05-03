# Code Challenge 5

## Whiteboard process

-- No whiteboard necessary for today's code challenge!--

## Approach and Efficiency

- I implemented a linked list with methods for insertion and searching. Insertion at the head allows for constant time complexity (O(1)), making it efficient. Searching, however, requires traversing the list, resulting in linear time complexity (O(n)). The space complexity is also linear (O(n)), growing proportionally to the number of elements.

## Solution

1. npm install (installs dependencies provided in package.json)
2. insert(value): Inserts a new node with the given value at the head of the list, with O(1) time complexity.
3. includes(value): Searches for a node with the specified value in the list, with O(n) time complexity.
4. toString(): Generates a string representation of all the values in the linked list, with O(n) time complexity.
5. npm test
