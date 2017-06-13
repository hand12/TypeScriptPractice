function compactString(word: string): string {
  return word.split('').filter(function(word, index, self){
    return self[index] != self[index + 1]
  }).join('')
}

alert(compactString("JOJO"));