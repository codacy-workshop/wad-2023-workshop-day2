function findWordsMatchingRegex(words, regex) {
    const matchingWords = [];

    for (const word of words) {
        if (regex.test(word)) {
            matchingWords.push(word);
        }
    }

    return matchingWords;
}

function main() {
    const sampleWords = ["food", "football", "barfoo", "hello"];
    const wordsContainingFoo = findWordsMatchingRegex(sampleWords, /[a-zA-Z]*foo[a-zA-Z]*/);
    
    console.log("Words containing 'foo':", wordsContainingFoo);
}

main()
