import calculator from "./calculator";

test("should exist", () => {
  expect(calculator).not.toEqual({});
});

test("should have four operation: add, subtract, divide, and multiply", () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.divide).toBeDefined();
  expect(calculator.multiply).toBeDefined();
});
