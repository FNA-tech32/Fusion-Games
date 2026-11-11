// Filter portfolio

const filters = document.querySelectorAll(".filter-btn");

filters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    let id = filterBtn.getAttribute("id");
    let portfolioCards = document.querySelectorAll(".portfolio-card");
    portfolioCards.forEach((card) => {
      if (card.getAttribute("data-tags").includes(id)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    filters.forEach((btn) => btn.classList.remove("active"));
    filterBtn.classList.add("active");
  });
});

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const alertBox = document.getElementById("contactFormAlert");
    if (alertBox) {
      alertBox.classList.remove("d-none");
      alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    contactForm.reset();
  });
}
