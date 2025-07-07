function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = " ";

    for (let i =0; i < words.length; i++) {
        if (words[i].length > longestWord.length){
            longestWord = words[i];

        }
    } 

    console.log("Longest word is:, longestWord")
}

findLongestWord("The quick brown fox jumps over the lazy dog");