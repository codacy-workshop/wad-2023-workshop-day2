function findWordsMatchingRegex(words, regex) {
    var matchingWords = [];

    for (const word of words) {
        if (regex.test(word)) {
            matchingWords.push(word);
        }
    }

    return matchingWords;
}

function main() {
    const sampleWords = ["food", "football", "barfoo", "hello"];
    const wordsContainingFoo = findWordsMatchingRegex(sampleWords, /.*foo.*/);
    
    console.log("Words containing 'foo':", wordsContainingFoo);
}

main()