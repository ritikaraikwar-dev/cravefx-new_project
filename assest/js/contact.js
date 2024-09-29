const nav1 = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY >= 100) {
nav1.classList.add('scroll-down')
}
else if (window.scrollY <= 100) {
nav1.classList.remove('scroll-down')
}
})



  





 