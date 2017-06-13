function concatArray(array: Array<any>, array_second: Array<any>): Array<any>{
  return array.concat(array_second).filter(function(ele, index, self){
    return self.indexOf(ele) != index
  })
}

const arg_array = [1, 2, 3, 4, 5]
const arg_array_seconds = [6, 7, 8, 9, 0, 1, 2]
console.log(concatArray(arg_array, arg_array_seconds))