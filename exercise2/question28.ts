function selectRandomElement(array: Array<any>):Array<any> {
  let rand = Math.floor(Math.random() * array.length)
  return array[rand]
}

console.log(selectRandomElement([1, 2, 3, 4, 5]))