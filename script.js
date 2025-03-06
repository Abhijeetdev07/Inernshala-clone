const buttons = document.querySelectorAll('.scroll-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSlider = document.getElementById(button.dataset.target);
        const scrollAmount = button.classList.contains('left') ? -300 : 300;
        
        targetSlider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});