function upcaseStringAndReverse(string: string): string {
  return string.toUpperCase().split('').reverse().join()
}

console.log(upcaseStringAndReverse("yusuke yamashita"))