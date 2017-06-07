type GuitarHero = {
  name: string
  guitar: string
}

type MarvelHero = {
  name: string
  ability: string
}

function isGuitarHero(x: any): x is GuitarHero {
  return true
}

function GuitarHeroChecker(hero: GuitarHero | MarvelHero) {
  return isGuitarHero(hero) ? hero : undefined
}




// メモ
// function isNumber(x: any): x is number {
//     return typeof x === "number";
// }

// type Person = {
//   name: string
//   age: number
// }

// function isString(x: any): x is string {
//     return typeof x === "string";
// }

// function isPerson(x: any): x is Person {
//   return true
// }
// // typeof x === "number"が真の時
// // xはstring型ですよ

// function returnIfPerson(x?: Person): Person {
//   // return x
//   return isPerson(x) ? x : undefined
// }


// function padLeft(value: string, padding: string | number) {
//     if (isNumber(padding)) {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (isString(padding)) {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }