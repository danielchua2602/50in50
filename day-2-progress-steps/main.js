const cards = document.querySelectorAll(".card");

// On click,
// Remove existing active class
// Add active to clicked div
cards.forEach((card) =>
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  })
);

function removeActiveClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
