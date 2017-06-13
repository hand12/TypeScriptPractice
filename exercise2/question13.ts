function removeNewLine(sentence: string): number {
  return sentence.replace(/\n|\s/g, '').length
}

const sentence = "これぜんぶお金だっ たら\n い いの にな"
alert(removeNewLine(sentence))