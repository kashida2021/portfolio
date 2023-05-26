function toggleNav() {
  const navMenu = document.querySelector(".navigation");
  navMenu.classList.toggle("navigation-menu");

  const navIcon = document.querySelector(".fa-bars");
  navIcon.classList.toggle("fa-times");

  const mainLogo = document.querySelector(".logo");
  mainLogo.classList.toggle("hidden");

  const header = document.querySelector("header");
  header.classList.toggle("mobileHeader");
}
