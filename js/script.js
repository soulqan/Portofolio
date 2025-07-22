document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < trigger) {
        section.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // initial call
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Pesan Anda telah dikirim!');
});

// Sticky Navbar Hide on Scroll Down
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('hide'); // scroll down
  } else {
    navbar.classList.remove('hide'); // scroll up
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
