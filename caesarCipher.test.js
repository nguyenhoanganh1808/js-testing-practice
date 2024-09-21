import caesarCipher from "./caesarCipher";

test("should exist", () => {
  expect(caesarCipher).not.toEqual({});
  expect(caesarCipher).toBeDefined();
});

test("takes a string and a shift factor and returns it with each character shifted", () => {
  const testCases = [
    {
      input: ["xyz", 3],
      expect: "abc",
    },
    {
      input: ["xyz", 300],
      expect: "lmn",
    },
    {
      input: ["XYZ", 300],
      expect: "LMN",
    },
    {
      input: ["HeLLo", 3],
      expect: "KhOOr",
    },
    {
      input: ["Hello, World!", 3],
      expect: "Khoor, Zruog!",
    },
  ];

  testCases.forEach((test) => {
    expect(caesarCipher(...test.input)).toMatch(test.expect);
  });
});
