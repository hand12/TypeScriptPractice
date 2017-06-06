function duplicate<T>(arg: T): T[] {
  return [arg, arg]
}
 
 duplicate<number>(20)

 generic型なので、型引数も指定する必要がある。
 今回はduplicate<number>と、型引数の型がnumberと指定されているので、返り値は
 Array<number>となる。