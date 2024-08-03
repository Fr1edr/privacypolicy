window.addEventListener('scroll', function() {
    const button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 100) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
