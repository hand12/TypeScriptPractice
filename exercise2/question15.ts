function removeWordBySentence(sentence: string, word: string): string {
  return sentence.replace(word, '')
}

alert(removeWordBySentence('HypertextPreprocessor', 'text'));