const hamburger = document.querySelector('.hamburger')

const menu = document.querySelector('.nav-main')


hamburger.addEventListener('click', () => {
    menu.classList.toggle('show')
})