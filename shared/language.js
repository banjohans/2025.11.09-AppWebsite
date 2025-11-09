// Felles JavaScript for språkbytte
function initLanguageSwitch(contentIds, navIds) {
  const btnNb = document.getElementById("btn-nb");
  const btnEn = document.getElementById("btn-en");
  const nb = document.getElementById(contentIds.nb);
  const en = document.getElementById(contentIds.en);
  const navNb = document.getElementById(navIds.nb);
  const navEn = document.getElementById(navIds.en);

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
}
