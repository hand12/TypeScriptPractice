function checkBlockWordContain(word: string, block_words: Array<string>): boolean {
  let checker: Array<boolean> = block_words.map(function(block_word, index){
    if(word.indexOf(block_word) < 0){
      return false
    }
  })
  if(checker.length > 0){
    return false
  }else{
    return true
  }
}


console.log(checkBlockWordContain('ばか高い', ['ばか', 'あぼ']))