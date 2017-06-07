function alertFee(money: number): string {
  const yen: string = "円";
  return money + yen;
}

alert(alertFee(100));