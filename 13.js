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
  console.log(
    "Words containing 'foo':",
    findWordsMatchingRegex(["food", "football", "barfoo", "hello"], /foo/)
  );
}

main();
