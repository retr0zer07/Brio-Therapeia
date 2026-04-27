const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('#main-menu');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nombre = String(formData.get('nombre') || '').trim();
    const apellidos = String(formData.get('apellidos') || '').trim();
    const ubicacion = String(formData.get('ubicacion') || '').trim();
    const telefono = String(formData.get('telefono') || '').trim();

    const text = [
      'Solicitud de consulta - Brio Therapeia',
      `Nombre: ${nombre}`,
      `Apellidos: ${apellidos}`,
      `Ubicacion: ${ubicacion}`,
      `Telefono: ${telefono}`,
    ].join('\n');

    const url = `https://wa.me/524491378420?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
