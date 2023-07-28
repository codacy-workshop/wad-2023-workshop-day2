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
    const wordsContainingFoo = findWordsMatchingRegex(["food", "football", "barfoo", "hello"], /foo/);
    
    console.log("Words containing 'foo':", wordsContainingFoo);
}

main()