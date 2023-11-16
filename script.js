const burger = document.getElementById("header__burger");
const nav = document.getElementById("header__navigation");

burger.addEventListener("click", e => {
      nav.classList.toggle("active");
      e.target.classList.toggle("active");
      document.body.classList.toggle("hide");
})