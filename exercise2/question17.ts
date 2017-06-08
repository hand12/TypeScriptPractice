function numberChecker(word: string): boolean {
  if(word.match(/\d+/)){
    return true
  }else{
    return false
  }
}

alert(numberChecker("37Signals"));