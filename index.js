const pizzaEffect = document.querySelector('#pizza')
const navbar = document.querySelector('#nav_links')
const navToggle = document.querySelector('#ham_button')


function toggleButton() {
  navbar.classList.add('show')
}


navToggle.addEventListener('click', toggleButton)






pizzaEffect.animate([
  {
    transform: "translateY(0px)"
  },
  {
    transform: "translateY(25px)"
  }
], {
  duration: 2000,
  iterations: Infinity,
  direction: "alternate",
  easing: 'ease-in-out'
})


