export default function hasValuesFromArray(dataSet, dataArray) {
  if (Array.isArray(dataArray)) {
    return dataArray.every((value) => dataSet.has(value));
  }
  throw new Error('No Array Found');
}
