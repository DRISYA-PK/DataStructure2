function insertAtBottom(stack, value) {
    if (stack.length === 0) { // Fixing the check
        stack.push(value);
        return;
    }

    let top = stack.pop(); // Remove top element
    insertAtBottom(stack, value); // Recursive call
    stack.push(top); // Put back the removed element
}

// Function to reverse the stack using recursion
function reverseStack(stack) {
    if (stack.length === 0) return; // Fixing typo from "lenghth" to "length"

    let top = stack.pop(); // Remove top element
    reverseStack(stack); // Recursively reverse remaining stack
    insertAtBottom(stack, top); // Insert the removed element at the bottom
}

// Example Usage
let stack = [1, 2, 3, 4];

console.log("Original Stack:", [...stack]);
reverseStack(stack);
console.log("Reversed Stack:", [...stack]);
