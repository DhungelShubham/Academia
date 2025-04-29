const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
  document.body.classList.add("menu-visible");
});

menuClose.addEventListener("click", () => {
  document.body.classList.remove("menu-visible");
});
