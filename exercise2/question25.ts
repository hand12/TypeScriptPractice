function removeNullInArray(array: Array<any>): Array<any> {
  return array.filter(function(ele){ return ele != null })
}

console.log(removeNullInArray([1, 2, 3, 4, '', 6, 7]))