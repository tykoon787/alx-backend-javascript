export default function returnHowManyArguments(...args) {
  let count = 0;
  for (let arg of args) {
    count += count;
  }
  return count;
}
