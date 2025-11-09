const btnNb = document.getElementById("btn-nb");
const btnEn = document.getElementById("btn-en");
const nb = document.getElementById("nb-content");
const en = document.getElementById("en-content");
const navNb = document.getElementById("nav-nb");
const navEn = document.getElementById("nav-en");

btnNb.addEventListener("click", () => {
  btnNb.classList.add("active");
  btnEn.classList.remove("active");
  nb.classList.remove("hidden");
  en.classList.add("hidden");
  navNb.classList.remove("hidden");
  navEn.classList.add("hidden");
});

btnEn.addEventListener("click", () => {
  btnEn.classList.add("active");
  btnNb.classList.remove("active");
  en.classList.remove("hidden");
  nb.classList.add("hidden");
  navEn.classList.remove("hidden");
  navNb.classList.add("hidden");
});
