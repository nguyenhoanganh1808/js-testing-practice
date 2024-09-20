import { calculator } from "./calculator";

test("should exist", () => {
  expect(calculator).not.toEqual({});
});

test("should have four operation: add, subtract, divide, and multiply", () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.divide).toBeDefined();
  expect(calculator.multiply).toBeDefined();
});

test("should take two numbers and return the correct calculation", () => {
  const addTestCases = [
    {
      input: [1, 2],
      expect: 3,
    },
    {
      input: [2, 100.2],
      expect: 102.2,
    },
  ];

  addTestCases.forEach((test) => {
    expect(calculator.add(...test.input)).toBeCloseTo(test.expect);
  });

  const subtractTestCase = [
    {
      input: [1, 2],
      expect: -1,
    },
    {
      input: [2, 100.2],
      expect: -98.2,
    },
  ];

  subtractTestCase.forEach((test) => {
    expect(calculator.subtract(...test.input)).toBeCloseTo(test.expect);
  });

  const multiplyTestCase = [
    {
      input: [3, 2],
      expect: 6,
    },
    {
      input: [2, 100.2],
      expect: 200.4,
    },
  ];

  multiplyTestCase.forEach((test) => {
    expect(calculator.multiply(...test.input)).toBeCloseTo(test.expect);
  });

  const divideTestCase = [
    {
      input: [3, 2],
      expect: 1.5,
    },
    {
      input: [2, 100.2],
      expect: 0.01996007984,
    },
  ];

  divideTestCase.forEach((test) => {
    expect(calculator.divide(...test.input)).toBeCloseTo(test.expect);
  });
});
