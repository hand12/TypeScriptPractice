function removeNewLine(sentence: string): string {
  return sentence.replace(/\n|\s/g, '')
}

const sentence = "これぜんぶお金だっ たら\n い いの にな"
alert(removeNewLine(sentence))