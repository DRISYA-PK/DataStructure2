function reverseQueue(queue) {
    let stack = [];

    // Step 1: Dequeue all elements and push into stack
    while (queue.length > 0) {
        stack.push(queue.shift());
    }

    // Step 2: Pop from stack and enqueue back
    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    return queue;
}

// Example Usage
let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseQueue(queue));  // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
