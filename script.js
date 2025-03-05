document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".hamburger-icon");
  const menuItems = document.querySelector(".menu-items");

  menuIcon.addEventListener("click", function () {
    menuItems.classList.toggle("show");
  });
});

function updateTextBasedOnScreenSize() {
  const paragraph = document.querySelector(".anthology1");

  if (window.innerWidth <= 500) {
    paragraph.innerHTML = "Hardcoded text for smaller screens.";
  } else {
    paragraph.innerHTML =
      "The annus mirabilis papers are four papers that Albert Einstein published in the journal Annalen der Physik in 1905.";
  }
}

updateTextBasedOnScreenSize();

window.addEventListener("resize", updateTextBasedOnScreenSize);
