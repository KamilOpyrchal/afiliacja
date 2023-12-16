const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("links")[0];
toggleButton.addEventListener("click", () => {
  var offsetY = window.scrollY;
  navbarLinks.classList.toggle("active");

  setTimeout(() => {
    window.scrollTo(0, offsetY);
  }, 1);
});
