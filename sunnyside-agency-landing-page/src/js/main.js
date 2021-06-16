navbar = document.querySelector('.navbar')
navbarToggle = document.querySelector('.navbar__toggle')

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active')
})