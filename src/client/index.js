const main = document.querySelector("main");
const masonry = new Masonry(main);
masonry.elementWidth = 500;

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".sidenav").classList.toggle("show");
});