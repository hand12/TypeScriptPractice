function shiftAlphabetsToRightByThree(word: string): string {
  const alphabet: string = 'abcdefghijklnmopqrstuvwxyz '
  return word.split('').map(function(e, index){
    if(index + 3 <= alphabet.length + 1){
      return alphabet[index + 3]
    }else{
      return alphabet[index + 3 - alphabet.length - 1]
    }
  }).join('')
}

console.log(shiftAlphabetsToRightByThree('yusuke yamashita'))