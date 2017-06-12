function isExsistDuplication(array: Array<any>): boolean{
  let duplicationCheck = array.filter(function(ele, index, self){ self.indexOf(ele) != index}
  )
  if(duplicationCheck.length > 0){
    return true
  } else {
    return false
  }
}

console.log(isExsistDuplication([1, 2, 3, 4, 5, 4, 4]))