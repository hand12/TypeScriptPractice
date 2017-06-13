function indexUseWord(word: string): string {
  return word.split('').filter(function(alp, index, self){
    return self.indexOf(alp) == index
  }).sort().join(' ')
}

const arg_context: string = "yamashita yuusuke"
console.log(indexUseWord(arg_context))