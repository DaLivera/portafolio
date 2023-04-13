window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo");
  const links = document.querySelectorAll(".header__link");
  const icono = document.querySelector(".fa-laptop-code");

  if (window.scrollY > 0) {
    header.style.backgroundColor = "#232623";
    logo.style.filter = "invert(100%)";
    icono.style.filter = "invert(100%)";
    links.forEach(function (link) {
      link.style.color = "#fff";
    });
  } else {
    header.style.backgroundColor = "transparent";
    logo.style.filter = "none";
    icono.style.filter = "none";
    links.forEach(function (link) {
      link.style.color = "#232623";
    });
  }
});
