function removeDuplicationInArray(array: Array<any>): Array<any> {
  return array.filter(function(ele, index, self){
    return self.indexOf(ele) == index
  })
}

console.log(removeDuplicationInArray([1, 2, 3, 4, 5, 5, 5, 6]))
