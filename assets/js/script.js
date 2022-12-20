const demoEl = document.querySelector(".demo__widget");
const outputEl = document.querySelector(".demo__form textarea");
const controlEls = document.querySelectorAll(".demo__form input");

const updateVar = (e) => {
  let value = e.target.value;
  if (e.target.type === "range") value = `${e.target.value}%`;
  demoEl.style.setProperty(`--gradient_${e.target.id}`, value);
  outputEl.value = demoEl.getAttribute("style");
};

for (const control of controlEls) {
  control.addEventListener("input", updateVar);
}