import analyzeArray from "./analyzeArray";

test("should exist", () => {
  expect(analyzeArray).not.toEqual({});
  expect(analyzeArray).toBeDefined();
});

test("should takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  const testCases = [
    {
      input: [1, 8, 3, 4, 2, 6],
      expect: {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      },
    },
  ];
  testCases.forEach((test) => {
    expect(analyzeArray(test.input)).toEqual(test.expect);
  });
});
