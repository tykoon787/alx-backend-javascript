export default function cleanSet(dataSet, startString) {
  let endString = '';
  const fullString = [];
  dataSet.forEach((value) => {
    if (startString.length > 0) {
      if (value.startsWith(startString)) {
        endString = value.slice(startString.length);
        fullString.push(endString);
      }
    }
  });
  return fullString.join('-');
}
