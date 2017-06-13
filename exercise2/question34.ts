function checkThirdAndFifthEqualInArray(array: Array<any>): boolean {
  if(array.length <= 5){
    return false
  }else if(array[2] == array[5]){
    return true
  }else{
    return false
  }
}

console.log(checkThirdAndFifthEqualInArray([1, 2, 3, 4, 5, 3]))