let exit = document.querySelector(".close");
let nav = document.querySelector("#header");

exit.addEventListener('click', () => {
  nav.classList.toggle('hidden')
})