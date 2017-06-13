function convertBananaByThreeMultipleOfArray(array: Array<number>): Array<any>{
  return array.map(function(ele, index, self){
    if(ele % 3 == 0){
      return 'banana'
    }else{
      return ele
    }
  })
}

console.log(convertBananaByThreeMultipleOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]))