function checkTanka(string: string): boolean {
  let regexp = /\w+/
  if(string.match(regexp)){
    return false
  }else{
    let line_num_checker: Array<boolean> = []
    line_num_checker = string.split('/').map(function(line, index){
      switch(index){
        case 0:
          if(line.length == 5){
            return true
          }else{
            return false
          }
        case 1:
          if(line.length == 7){
            return true
          }else{
            return false
          }
        case 2:
          if(line.length == 5){
            return true
          }else{
            return false
          }
        case 3:
          if(line.length == 7){
            return true
          }else{
            return false
          }
        case 4:
          if(line.length == 7){
            return true
          }else{
            return false
          }
        default:
          return false
      }
    })
    if(line_num_checker.indexOf(false) >= 0 ){
      return false
    }else{
      return true
    }
  }
}

const arg_Tanka: string = 'といじうに/よぞらのあおを/びぶんせよ/まちのあかりは/きにしなくても'
console.log(checkTanka(arg_Tanka))