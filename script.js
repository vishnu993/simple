document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const contactLink = document.getElementById('contact');
    const content = document.getElementById('content');

    homeLink.addEventListener('click', () => {
        content.innerHTML = `<h2>Home</h2><p>This is the homepage of my simple website.</p>`;
    });

    aboutLink.addEventListener('click', () => {
        content.innerHTML = `<h2>About</h2><p>This is the about section of my website.</p>`;
    });

    contactLink.addEventListener('click', () => {
        content.innerHTML = `<h2>Contact</h2><p>This is the contact section of my website.</p>`;
    });
});
