export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create the Array Buffer
  const buffer = new ArrayBuffer(length);
  // Create the data view
  const dv = new DataView(buffer);
  // Set value at position
  dv.setInt8(position, value);
  return dv;
}
