function checkToEqualReverseAndOriginArray(array: Array<any>): boolean {
  const origin_array: Array<any> = array.concat()
  let check_equal_array: Array<boolean> = []
  for (let i = 0; i <= array.length - 1; i++){
    if(array.reverse()[i] != origin_array[i]){
      check_equal_array.push(false)
    }
  }
  if(check_equal_array.length > 0){
    return false
  }else{
    return true
  }
}


console.log(checkToEqualReverseAndOriginArray([1, 2, 3, 4, 5, 4, 3, 2, 1]))