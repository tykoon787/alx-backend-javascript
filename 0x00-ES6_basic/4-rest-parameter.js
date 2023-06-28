export default function returnHowwManyArguments(...args) {
  let count = 0;
  for (let arg of args) {
    count += count;
  }
  return count;
}
