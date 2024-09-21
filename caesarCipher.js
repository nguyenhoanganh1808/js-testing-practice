export default function caesarCipher(string, number) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);

    if (
      !(charCode >= 65 && charCode <= 90) &&
      !(charCode >= 97 && charCode <= 122)
    ) {
      result += string[i];
      continue;
    } else {
      charCode += number;
    }

    while (
      string.charCodeAt(i) >= 97 &&
      string.charCodeAt(i) <= 122 &&
      charCode > 122
    ) {
      charCode -= 26;
    }

    while (
      string.charCodeAt(i) >= 65 &&
      string.charCodeAt(i) <= 90 &&
      charCode > 90
    ) {
      charCode -= 26;
    }

    result += String.fromCharCode(charCode);
  }
  return result;
}
