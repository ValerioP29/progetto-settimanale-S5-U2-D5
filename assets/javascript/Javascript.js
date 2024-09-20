const button = document.getElementById("toggleDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");

button.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel", {
    type: "loop",
    perPage: 6, // Numero di immagini visibili per pagina
    perMove: 1,
    gap: "1rem", // Spazio tra le immagini
    autoplay: true, // Attiva lo scorrimento automatico
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel2", {
    type: "loop",
    perPage: 6,
    perMove: 1,
    gap: "1rem",
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
    }, //
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel3", {
    type: "loop",
    perPage: 6,
    perMove: 1,
    gap: "1rem",
    autoplay: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();
});
