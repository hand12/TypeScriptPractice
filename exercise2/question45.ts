function upcaseBiginningOgLine(string: string): string {
  return string.split('\n').map(function(line){
    return line[0].toUpperCase() + line.slice(1)
  }).join("\n")
}

const arg_context = "I have a pen  "
console.log(upcaseBiginningOgLine(arg_context))