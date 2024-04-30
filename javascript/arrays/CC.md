# Code Challenges

**Code Challenge 1**:

This code challenge demonstrates a method to reverse an array. The approach involves iterating through the array, swapping the first and last elements, then moving inward until the entire array is reversed.

**Whiteboard Process**:

![Code Challenge](./cc-assets/CC1.png)

**Approach & Efficiency**:

1. Initialize pointers start and end at the beginning and end of the array respectively.
2. Swap the elements at positions start and end.
3. Increment start and decrement end.
4. Repeat steps 2-3 until start is greater than end or they have crossed each other.

**Solution**:

let array = [1, 2, 3, 4, 5, 6];

function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}
