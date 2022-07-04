function normalizeText(text) {
  let result = "";
  for (let i = 0; i < text.length; i++)
    if (
      text[i] !== " " &&
      text[i] !== "." &&
      text[i] !== ":" &&
      text[i] !== ";" &&
      text[i] !== "," &&
      text[i] !== "/"
    )
      result += toLowerCase(text[i]);
  return result;
}

function toLowerCase(caracter) {
  const maxCode = "Z".charCodeAt();
  const minCode = "A".charCodeAt();
  AscCode = caracter.charCodeAt();
  if (maxCode >= AscCode && minCode <= AscCode) {
    caracter = String.fromCharCode(AscCode + 32);
  }
  return caracter;
}

function palyndromeV1(text) {
  const originalText = normalizeText(text);
  let reversedText = "";
  let textLength = originalText.length;
  for (let i = textLength - 1; i >= 0; i--) reversedText += originalText[i];
  return reversedText === originalText;
}

function palyndromeV2(text) {
  const originalText = normalizeText(text);
  let textLength = originalText.length;
  for (let i = 0; i < textLength / 2; i++) {
    if (originalText[i] !== originalText[textLength - 1 - i]) {
      return false;
    }
  }
  return true;
}
