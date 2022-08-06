const btnClose = document.querySelector(".support__button");
const btnOpen = document.querySelector(".support__button2");
const content = document.querySelector(".support__list");
const effect = document.querySelector(".support__effect");
const effectAdaptive = document.querySelector(".support__effect-adaptive");
const adaptive = document.querySelector(".support__adaptive");
const adaptiveContent = document.querySelector(".support__adaptive-list");

btnOpen.addEventListener("click", () => {
  content.classList.add("active");
  btnOpen.classList.remove("active");
  btnClose.classList.add("active");
  effect.classList.remove('active');
  effectAdaptive.classList.remove('active');
  adaptiveContent.classList.add("active");
});
btnClose.addEventListener("click", () => {
  content.classList.remove("active");
  btnClose.classList.remove("active");
  btnOpen.classList.add("active");
  effect.classList.add('active');
  effectAdaptive.classList.add('active');
  adaptiveContent.classList.remove("active");
});
