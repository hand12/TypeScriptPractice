function zip(array: Array<any>): Array<any> {
  let zip_array: Array<any> = []
  let max_length: number = 0
  array.forEach(function(ary){
    if(max_length <= ary.length){
      max_length = ary.length
    }
  })
  for(let i = 0; i < max_length; i++){
    let tmp_array = []
    for(let j = 0; j < max_length; j ++){
      tmp_array.push(array[j][i])
    }
    zip_array.push(tmp_array)
  }
  return zip_array
}

const argment: Array<any> = [[1, 2, 4], [1, 3, 9], [2, 3, 7, 9], [2, 1, 7, 3]]
console.log(zip(argment))