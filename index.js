document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close the menu when a link is clicked
    navLinks.addEventListener('click', (event) => {
        if(event.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });
});
