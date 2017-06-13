function pickUpEvenNumber(array: Array<number>): Array<number>{
  return array.filter(function(ele){ return ele % 2 == 0 })
}

console.log(pickUpEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))