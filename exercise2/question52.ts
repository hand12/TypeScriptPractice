function generateRandomAlphabets(num: number): string {
  const alphabets: string = 'abcdefghijklnmopqrstuvwxyz'
  let random_words: Array<string> = []

  for(let i = 1; i <= num; i++){
    const word: string = alphabets.split('')[randomNum(alphabets.length + 1)]
    random_words.push(word)
  }

  return random_words.join('')
}

function randomNum(num:number): number {
  return Math.floor(Math.random() * num + 1)
}

console.log(generateRandomAlphabets(10))