AOS.init({ duration: 850, once: true, offset: 90 });

new Typed('#typedText', {
  strings: ['Frontend Developer Candidate', 'Software Developer Candidate', 'Responsive Web Designer', 'Junior Developer Candidate'],
  typeSpeed: 48,
  backSpeed: 30,
  backDelay: 1500,
  loop: true
});

const nav = document.querySelector('#mainNav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40 ? 'rgba(7,11,24,.93)' : 'rgba(7,11,24,.72)';
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-collapse');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});
