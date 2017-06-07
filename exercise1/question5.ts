interface GiveMeYourLove {
    (money: number): string[];
}


const giveMeYourLove: GiveMeYourLove = (money) => Array(money).fill("love")


// メモ
// 問題文
// const giveMeYourLove: arrayLove = (money) => Array(money).fill("love")

// type Love = "love"
// interface GiveMeYourLove {
//   (money: number): Love[]
// }
// const giveMeYourLove: GiveMeYourLove = (money) => Array(money).fill("Love")
// type JustReturnString = (a: string) => string
// type JustReturnNumber = (a: number) => number
// const justReturn = (a) => a
// // const justReturnString: JustReturnString = (a: string): string => a
// // const justReturnNumber: JustReturnNumber = (a: number): number => a
// const justReturnNumber = justReturn as JustReturnNumber
// const justReturnString = justReturn as JustReturnString
