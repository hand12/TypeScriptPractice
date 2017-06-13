function repeatTreeTimesArray(array: Array<any>): Array<any>{
  return array.concat(array).concat(array)
}

console.log(repeatTreeTimesArray([1, 2, 3, 4, 5]))