document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const outputText = document.getElementById("outputText");
  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");
  const copyButton = document.getElementById("copyButton");

  function encodeText(text) {
      return text
          .replace(/e/g, "enter")
          .replace(/i/g, "imes")
          .replace(/a/g, "ai")
          .replace(/o/g, "ober")
          .replace(/u/g, "ufat");
  }

  function decodeText(text) {
      return text
          .replace(/enter/g, "e")
          .replace(/imes/g, "i")
          .replace(/ai/g, "a")
          .replace(/ober/g, "o")
          .replace(/ufat/g, "u");
  }

  encodeButton.addEventListener("click", function () {
      const input = inputText.value.toLowerCase();
      const encoded = encodeText(input);
      outputText.value = encoded;
  });

  decodeButton.addEventListener("click", function () {
      const input = inputText.value.toLowerCase();
      const decoded = decodeText(input);
      outputText.value = decoded;
  });

  copyButton.addEventListener("click", function () {
      outputText.select();
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
  });
});
