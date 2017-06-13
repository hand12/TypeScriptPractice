function checkAllUppercaseOrLowercaseLetter(string: string): boolean {
  if(string.toUpperCase() == string) {
    return true
  }else if (string.toLowerCase() == string){
    return true
  }else{
    return false
  }
}

console.log(checkAllUppercaseOrLowercaseLetter("yusuke yamashita"))