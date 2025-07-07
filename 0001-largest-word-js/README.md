# 14. Find the Longest Word in a Sentence (For Loop)

This program finds the longest word in a given sentence using a *for loop* in JavaScript.

## 📜 Example

*Input:*  
The quick brown fox jumps over the lazy dog

*Output:*  
Longest word is: jumps

---

## 📈 How it Works

- The program defines a function findLongestWord(sentence).
- It splits the sentence into an array of words using .split(" ").
- It initializes a variable longestWord as an empty string.
- It uses a for loop to iterate through each word in the array.
- Inside the loop:
  - It checks if the length of the current word is greater than the length of longestWord.
  - If so, it updates longestWord with the current word.
- After the loop ends, it returns the longest word.

---

## 📌 Note

- The program assumes words are separated by spaces.
- Punctuation attached to words may affect length calculation.
- Can be improved by stripping punctuation using regular expressions.