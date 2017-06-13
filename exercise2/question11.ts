function removeNewLine(sentence: string): string {
  return sentence.replace(/\n/g, '')
}

const sentence = "これぜんぶ\nお金だったら\nいいのにな"
alert(removeNewLine(sentence))