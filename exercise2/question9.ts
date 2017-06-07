function countLiner(sentence: string): number[]{
  return sentence.split(/\n/).map(function(line){
    return line.length
  })
}

const sentence = "これぜんぶ\nおかねだったら\nいいのにな"
alert(countLiner(sentence));