function count(word: string): number {
  return word.split("a").length - 1
}

alert(count("yamashita yuusuke"));