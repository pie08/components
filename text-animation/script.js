const text = document.querySelector("h1");

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

text.addEventListener("mouseover", () => {
  let iterations = 0;

  const interval = setInterval(() => {
    text.innerText = text.innerText
      .split("")
      .map((el, i) => {
        if (i < iterations) return text.dataset.base[i];
        if (el === " ") return el;
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations > text.innerText.length) clearInterval(interval);
    iterations += 1 / 2;
  }, 30);
});
