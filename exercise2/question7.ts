function lowercaseAtIndexOf3(word: string): string {
  return word.split('').map(function(word, index){
    if(index == 2){
      return word.toLocaleLowerCase()
    }else{
      return word
    }
  }).join('')
}

alert(lowercaseAtIndexOf3("LIVESENSE"));