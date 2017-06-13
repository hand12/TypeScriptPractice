function invertedEvenOdd(array: Array<number>): Array<number>{
  for (let i = 0; i < array.length - 1; i += 2){
    let odd_index: number = array[i]
    let even_index: number = array[i + 1]
    array[i] = even_index
    array[i + 1] = odd_index
  }
  return array
}

console.log(invertedEvenOdd([1, 2, 3, 4, 5, 6]))