function sortArrayByMagnitude(array: Array<number>): Array<number>{
   array.forEach(function(ele, index, self){
    self.forEach(function(ele, index, self){
      if(self[index] < self[index + 1]){
        let tmp = self[index + 1]
        self[index + 1] = self[index]
        self[index] = tmp
      }
    })
  })
  return array
}

alert(sortArrayByMagnitude([9, 4, 3, 7, 8, 2, 5]))