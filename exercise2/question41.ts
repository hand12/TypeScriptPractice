function sumOfSquares(array: Array<number>): number {
  return array.reduce(function(a, b){
    return a * a + b * b
  })
}

console.log(sumOfSquares([3, 4]))