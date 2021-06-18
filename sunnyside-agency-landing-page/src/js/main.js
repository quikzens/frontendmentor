const navbar = document.querySelector('.navbar')
const navbarToggle = document.querySelector('.navbar__toggle')

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active')
})