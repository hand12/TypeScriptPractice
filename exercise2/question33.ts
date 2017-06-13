function secondToFifthInArray(array: Array<any>): Array<any>{
  return array.filter(function(ele, index, self){
    return index >= 2 && index <= 5
  })
}

console.log(secondToFifthInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))