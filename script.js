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
  textVerify()
}

function decodetext() {
  let textareaMain = document.getElementById("textAreaMain");
  let textareaSecondary = document.getElementById("textAreaSecondary");
  let codedtext = textareaMain.value;
  let decodedtext = decode(codedtext);
  textareaSecondary.value = decodedtext;
  textVerify()
}

function copy() {
  let textCopy = document.getElementById("textAreaSecondary");
  navigator.clipboard.writeText(textCopy.value);
  alert("Texto copiado para área de transferência"); // arrumar aqui depois, mudar esse alert para algo melhor
  clear();
}

function clear() {
   document.getElementById("textAreaSecondary").value = '';
}

function textVerify() {
  let textCheck = document.getElementById("textAreaSecondary").value;
  let image = document.getElementById("imagemDiv");
  let contentPlus = document.getElementById("contentDecode");
  let sec = document.getElementById("sectionSecondary");
  let copy = document.getElementById("copy");

  if(textCheck.trim() !== '') {
      sec.style.justifyContent = "space-between";
      image.style.display = "none";
      contentPlus.style.display = "none";
      copy.style.display = "block";
  } else {
    image.style.display = "block";
    contentPlus.style.display = "block";
    copy.style.display = "none";
  }

}
