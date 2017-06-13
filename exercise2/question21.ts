function toUpperCaseAtFirstWord(word: string): string {
  return word.split('').map(function(word, index){
    if(index == 0){
      return word.toUpperCase()
    }else{
      return word
    }
  }).join('')
}

alert(toUpperCaseAtFirstWord('i have a pen'));