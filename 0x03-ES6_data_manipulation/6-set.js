export default function setFromArray(data) {
  if (Array.isArray(data)) {
    const dataSet = new Set();
    data.forEach((value) => {
      dataSet.add(value);
    });
    return dataSet;
  }
  return [];
}
