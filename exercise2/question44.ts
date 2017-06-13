function checkAllNumberOfRaw(array: Array<number>): boolean {
  if (array.filter(function(ele){ return ele <= 0 }).length > 0){
    return false
  }else{
    return true
  }
}

console.log(checkAllNumberOfRaw([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))