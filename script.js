const header = document.querySelector("header");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("menu-open", !expanded);
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".skip-link, #primary-navigation a")) {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }
});
