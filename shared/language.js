// Felles JavaScript for språkbytte
function initLanguageSwitch(...elementPairs) {
  const btnNb = document.getElementById("btn-nb");
  const btnEn = document.getElementById("btn-en");

  if (!btnNb || !btnEn) return;

  // Samle alle elementer
  const elements = elementPairs
    .map((pair) => ({
      nb: document.getElementById(pair.nb),
      en: document.getElementById(pair.en),
    }))
    .filter((pair) => pair.nb || pair.en);

  function switchToNorwegian() {
    btnNb.classList.add("active");
    btnEn.classList.remove("active");
    elements.forEach((pair) => {
      if (pair.nb) pair.nb.classList.remove("hidden");
      if (pair.en) pair.en.classList.add("hidden");
    });
    localStorage.setItem("selectedLanguage", "nb");
  }

  function switchToEnglish() {
    btnEn.classList.add("active");
    btnNb.classList.remove("active");
    elements.forEach((pair) => {
      if (pair.nb) pair.nb.classList.add("hidden");
      if (pair.en) pair.en.classList.remove("hidden");
    });
    localStorage.setItem("selectedLanguage", "en");
  }

  btnNb.addEventListener("click", switchToNorwegian);
  btnEn.addEventListener("click", switchToEnglish);

  // Hent lagra språk og sett det ved sideinnlasting
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage === "en") {
    switchToEnglish();
  } else {
    // Standard er norsk
    switchToNorwegian();
  }
}
