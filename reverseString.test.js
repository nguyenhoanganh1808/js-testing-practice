import reverseString from "./reverseString";

test("should exist", () => {
  expect(reverseString).toBeDefined();
  expect(reverseString).not.toBeUndefined();
  expect(reverseString).not.toEqual({});
});

test("should takes a string and returns it reversed", () => {
  const testCases = [
    {
      input: "Lorem Ipsum",
      expect: "muspI meroL",
    },
    {
      input: "Hello",
      expect: "olleH",
    },
  ];

  testCases.forEach((testCase) => {
    expect(reverseString(testCase.input)).toMatch(testCase.expect);
  });
});
