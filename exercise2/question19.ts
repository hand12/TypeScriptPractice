function subjectChecker(sentence: string): boolean {
  const subject_pattern = /^I|^You|^He|^She/;
  if(sentence.match(subject_pattern)){
    return true
  }else{
    return false
  }
}

alert(subjectChecker("I have a pen"))