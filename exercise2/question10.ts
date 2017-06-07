function styleOfRoom(room_number: number, room_type: string, has_sr: boolean): string {
  room_type.split('').forEach(function(word){
    if ((word != 'L') && (word != 'D') && (word != 'K')){
      alert('無効な部屋のタイプです')
      return false
    }
  })
  if (has_sr){
    return room_number.toString(10) + 'S' + room_type
  }else{
    return room_number.toString(10) + room_type
  }
}

alert(styleOfRoom(1, 'K', false))

