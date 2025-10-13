function freeUrl(url) {
  const urlObj = new URL(url)

  urlObj.host = "readmedium.com";

  return urlObj.href;
}

document.addEventListener("readystatechange", (event) => {
  const button = document.createElement("button");
  button.id = "free-medium__button";
  button.textContent = "Read for free";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "20px 28px";
  button.style.backgroundColor = "#007bff";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "48px";
  button.style.fontSize = "18px";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999";
  button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";

  button.addEventListener("click", function () {
    window.location.href = freeUrl(document.URL);
  });

  document.body.appendChild(button);
});

