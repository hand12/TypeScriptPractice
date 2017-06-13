function concatArrayAtLast(array: Array<any>, array_second: Array<any>): Array<any>{
  return array.concat(array_second)
}

console.log(concatArrayAtLast([1, 2, 3, 4, 5], [6, 7, 8, 9, 0]))