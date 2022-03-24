const arraySwitcherLangRu = document.querySelectorAll(".switcher-lang[data-lang='ru']")
const arraySwitcherLangEng = document.querySelectorAll(".switcher-lang[data-lang='eng']")

const setLang = (arrayActiveLang, arrayInactiveLang) => {
  arrayInactiveLang.forEach(el => el.classList.remove("active"))
  arrayActiveLang.forEach(el => el.classList.add("active"))
}

const setClickEvent = (arrayEl, eventHandler) => {
  arrayEl.forEach(el => el.addEventListener("click", eventHandler))
}

setClickEvent(arraySwitcherLangEng, () => {
  setLang(arraySwitcherLangEng, arraySwitcherLangRu)
})
setClickEvent(arraySwitcherLangRu, () => {
  setLang(arraySwitcherLangRu, arraySwitcherLangEng)
})

// set eng as default
setLang(arraySwitcherLangEng, [])