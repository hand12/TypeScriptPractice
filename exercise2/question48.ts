function checkPalindrome(string: string): boolean {
  const origin_string: string = string
  if (origin_string == string.split('').reverse().join('')){
    return true
  }else{
    return false
  }
}

console.log(checkPalindrome("yusuke yamashita"))