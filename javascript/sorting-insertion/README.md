**This pseudocode defines two functions: `Insert` and `InsertionSort`. The `Insert` function inserts a value into a sorted array, while the `InsertionSort` function sorts an entire array.**

**Tracing with a Sample Array**
Let's trace the Insertion Sort algorithm with the sample array `[8, 4, 23, 42, 16, 15]`. We'll visualize each step to understand how the algorithm works.

**Initial Array: [8, 4, 23, 42, 16, 15]**

1. **Start with the first element:**
   - `sorted` = [8]

2. **Insert 4:**
   - Before Insertion: `sorted` = [8]
   - Insert 4 at position 0
   - After Insertion: `sorted` = [4, 8]

3. **Insert 23:**
   - Before Insertion: `sorted` = [4, 8]
   - Insert 23 at position 2
   - After Insertion: `sorted` = [4, 8, 23]

4. **Insert 42:**
   - Before Insertion: `sorted` = [4, 8, 23]
   - Insert 42 at position 3
   - After Insertion: `sorted` = [4, 8, 23, 42]

5. **Insert 16:**
   - Before Insertion: `sorted` = [4, 8, 23, 42]
   - Insert 16 at position 2, shift 23 and 42
   - After Insertion: `sorted` = [4, 8, 16, 23, 42]

6. **Insert 15:**
   - Before Insertion: `sorted` = [4, 8, 16, 23, 42]
   - Insert 15 at position 2, shift 16, 23, and 42
   - After Insertion: `sorted` = [4, 8, 15, 16, 23, 42]

**Conclusion**
Insertion Sort builds the sorted array one element at a time by inserting each element into its correct position. By tracing its steps with a sample array, we gain a deeper understanding of how the algorithm works and how it sorts elements incrementally.
