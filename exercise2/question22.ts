function addHEADAtTop(array: any[]): any[] {
  array.unshift("HEAD!")
  return array
}

const fruits: string[] = ["orange", "apple", "banana"]
alert(addHEADAtTop(fruits))