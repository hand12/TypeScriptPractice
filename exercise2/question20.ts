function senenceLastChecker(sentence: string): boolean {
  const check_word_pattern = /だってばよ$/
  if(sentence.match(check_word_pattern)){
    return true
  }else{
    return false
  }
}

alert(senenceLastChecker('どういうことだ'))