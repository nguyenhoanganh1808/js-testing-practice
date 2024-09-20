import capitalize from "./capitalize";

test("should exist", () => {
  expect(capitalize).toBeDefined();
  expect(capitalize).not.toEqual({});
});

test("should take a string and return it the first character capitalized", () => {
  const testCases = [
    {
      input: "Lorem",
      expect: "L",
    },
    {
      input: "simply",
      expect: "S",
    },
    {
      input: "containing",
      expect: "C",
    },
  ];
  testCases.forEach((testCase) => {
    expect(capitalize(testCase.input)).toMatch(testCase.expect);
  });
});
