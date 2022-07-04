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

function firstRepeatedCaracterV2(word) {
  const wordLength = word.length;
  const wordHash = {};
  for (let i = 0; i < wordLength; i++) {
    if (wordHash[word[i]]) return word[i];
    wordHash[word[i]] = true;
  }
  return null;
}
