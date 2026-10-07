const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.querySelector('#formStatus');
    const payload = Object.fromEntries(new FormData(contactForm).entries());
    const messages = JSON.parse(localStorage.getItem('tt_messages') || '[]');
    messages.push({...payload, submittedAt: new Date().toISOString()});
    localStorage.setItem('tt_messages', JSON.stringify(messages));
    status.textContent = 'Message saved successfully for this project demo. Thank you for contacting Timeless Threads!';
    contactForm.reset();
  });
}
