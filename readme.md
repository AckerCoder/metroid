# METROID COMPLEXITY

This is complexity test fully implemented to show my algoritmic habilities.

# Assumptions
These implementations are done for an evaluation purpose, so...
- I do not use any javascript function to modify strings as "toLowerCase", "trim", etc.
- Every helper function implemented is going to take a constant value in order to evaluate only the main algorithm requested by the evaluator.

# Palindrome
##### Helper Functions
These functions are to normalize each string that is given to the main functions `palindromeV1()` and `palindromeV2()`
##### First Implementation
This implementation uses brute force. This approach follows the first idea that comes to mind, convert the whole original string to its reverse one and compare the final version with the initial one. It has the O(N) time complexity because only requires to go throw the array one time in the worst case scenario.
```
function palindromeV1(text) {
  const originalText = normalizeText(text);
  let reversedText = "";
  let textLength = originalText.length;
  for (let i = textLength - 1; i >= 0; i--) reversedText += originalText[i];
  return reversedText === originalText;
}
```
##### Second Implementation
This implementation devides the string in two parts and checks the current letter with its counter part. This approach has a complexity of O(N/2)
```
function palindromeV2(text) {
  const originalText = normalizeText(text);
  let textLength = originalText.length;
  for (let i = 0; i < textLength / 2; i++) {
    if (originalText[i] !== originalText[textLength - 1 - i]) {
      return false;
    }
  }
  return true;
}
```

# Repeated Letter

##### First Implementation
This implementation uses brute force. This approach follows the first idea that comes to mind, store all letters in an array and then check if one letter of the stored array is on the rest of the letters at the time we go throw the word. This approach has a time and space complexity of O(n^2).
```
function firstRepeatedCaracterV1(word) {
  const wordLength = word.length;
  let letters = [];
  for (let i = 0; i < wordLength; i++) {
    for (let j = 0; j < letters.length; j++)
      if (letters[j] === word[i]) return word[i];
    letters.push(word[i]);
  }
  return null;
}
```
##### Second Implementation
This implementation uses the hash table structure. Store the letters in an hash as a key and then check if the letter is a a current key in the hash map. This approach has a time and space complexity of O(n).

```
function firstRepeatedCaracterV2(word) {
  const wordLength = word.length;
  const wordHash = {};
  for (let i = 0; i < wordLength; i++) {
    if (wordHash[word[i]]) return word[i];
    wordHash[word[i]] = true;
  }
  return null;
}
```
