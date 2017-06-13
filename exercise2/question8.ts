function addZToIndexOf5(word: string): string {
  return word.split('').map(function(word, index){
    if(index == 4){
      return word + 'Z'
    }else{
      return word
    }
  }).join('')
}

alert(addZToIndexOf5('Tesla'));