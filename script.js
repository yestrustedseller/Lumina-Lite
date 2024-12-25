// Scroll to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = "↑";
backToTopBtn.id = "back-to-top";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// FAQ Accordion
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const next = item.nextElementSibling;
        next.style.display = next.style.display === 'block' ? 'none' : 'block';
    });
});
