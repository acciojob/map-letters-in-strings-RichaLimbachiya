function mapLetters(word) {
  const letterMap = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!letterMap[char]) {
      letterMap[char] = [];
    }

    letterMap[char].push(i);
  }

  return letterMap;
}
