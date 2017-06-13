function isConstainWord(context: string, word: string): boolean {
  return context.includes(word)
}

alert(isConstainWord("Veni, vidi, vici", "vi"));