function addTAILAtEnd(array: any[]): any[] {
  array.push("TAIL!")
  return array
}

const fruits: string[] = ["orange", "apple", "banana"]
alert(addTAILAtEnd(fruits))