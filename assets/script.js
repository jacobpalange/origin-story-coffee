const btn = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-mobile-menu]');

if (btn && menu) {
  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}
