// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('/common/navbar.html') // Fetch the navbar.html file
        .then(response => {
            if (!response.ok) throw new Error('Failed to load navbar');
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Optional: Add event listeners for the mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const navLinks = document.getElementById('nav-links');

            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('open');
    });
});