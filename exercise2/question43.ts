function dividedOddEven(array: Array<number>): Array<Array<number>>{
  let odd_nums: Array<number> = new Array
  let even_nums: Array<number> = new Array
  array.forEach(function(ele){
    if(ele % 2 == 0){
      even_nums.push(ele)
    }else{
      odd_nums.push(ele)
    }
  })
  const return_array: Array<Array<number>> = [even_nums, odd_nums]
  return return_array
}

console.log(dividedOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))