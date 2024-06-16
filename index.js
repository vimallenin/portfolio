
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
});

    // Close the menu when a link is clicked
navLinks.addEventListener('click', () => {
            navLinks.classList.remove('active');
});
