function checkNewlineOrSpace(sentence: string): boolean {
  if (sentence.match(/\n|\s/)){
    return true
  }else{
    return false
  }
}

const sentence = "これぜんぶお金だったらいいのにな"
alert(checkNewlineOrSpace(sentence))