function indexOfWordBySentence(sentence: string, word: string): string | number {
  if (sentence.match(word)){
    return sentence.indexOf(word) + 1
  }else{
    return 0
  }
}

alert(indexOfWordBySentence('RubyOnRails', 'On'));