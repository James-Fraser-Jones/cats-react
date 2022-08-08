export const showPrice = (price: number) => {
  let str = price.toString();
  str = "0".repeat(Math.max(3 - str.length, 0)) + str;
  let first = str.slice(0, -2);
  let second = str.slice(-2);
  let result = "£" + first;
  if (second !== "00") {
    result = result + ("." + second);
  }
  return result;
}