function main() {
    let sampleWords = ["food", "football", "barfoo", "hello"];
    let wordsContainingFoo = sampleWords.filter(value => value.includes("foo"))
    
    console.log("Words containing 'foo':", wordsContainingFoo);
}

main()