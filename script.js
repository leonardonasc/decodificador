function code(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decode(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function encodetext() {
  let textareaMain = document.getElementById("textAreaMain");
  let textareaSecondary = document.getElementById("textAreaSecondary");
  let originalText = textareaMain.value;
  let codedtext = code(originalText);
  textareaSecondary.value = codedtext;
}

function decodetext() {
  let textareaMain = document.getElementById("textAreaMain");
  let textareaSecondary = document.getElementById("textAreaSecondary");
  let codedtext = textareaMain.value;
  let decodedtext = decode(codedtext);
  textareaSecondary.value = decodedtext;
}

function copy() {
  let textCopy = document.getElementById("textAreaSecondary");
  navigator.clipboard.writeText(textCopy.value);
}