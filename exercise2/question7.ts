function lowercaseAtIndexOf3(word: string): string {
  const words = word.split('').map(function(word, index){
    if(index == 2){
      return word.toLocaleLowerCase()
    }else{
      return word
    }
  });
  return words.join('')
}

alert(lowercaseAtIndexOf3("LIVESENSE"));