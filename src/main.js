let menu = document.querySelector(".menuBurger");
let bar = document.querySelectorAll(".menuBurger__bar")
let nav = document.querySelector("#header");

console.log(bar)

menu.addEventListener('click', () => {
  nav.classList.toggle('hidden')
  for (let index = 0; index < bar.length; index++) {
    bar[index].classList.toggle('active')
  }
})