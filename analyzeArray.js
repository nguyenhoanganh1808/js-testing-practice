export default function analyzeArray(array) {
  array.sort();

  const average = array.reduce((prev, cur) => prev + cur, 0) / array.length;

  return {
    average,
    min: array[0],
    max: array[array.length - 1],
    length: array.length,
  };
}
