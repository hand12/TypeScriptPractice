function arrayConstracter(num: number, default_prime: any): Array<any>{
  return (new Array(num)).fill(default_prime)
}

console.log(arrayConstracter(5, "love"))