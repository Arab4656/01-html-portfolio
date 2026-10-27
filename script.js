const header = document.querySelector("header");
const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-navigation");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("menu-open", !expanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }
});
