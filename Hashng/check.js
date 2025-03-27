function isAnagram(s, t) {
    if (s.length !== t.length) return false; // If lengths are different, not an anagram

    let hashMap = new Map();

    // Count occurrences of each character in string 's'
    for (let char of s) {
        hashMap.set(char, (hashMap.get(char) || 0) + 1);
    }

    // Subtract occurrences based on string 't'
    for (let char of t) {
        if (!hashMap.has(char)) return false; // Extra char in 't'
        hashMap.set(char, hashMap.get(char) - 1);
        if (hashMap.get(char) === 0) hashMap.delete(char);
    }

    return hashMap.size === 0; // If empty, it's a valid anagram
}

// Example Usage
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("rat", "car"));       // Output: false
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("hello", "helloo"));   // Output: false
