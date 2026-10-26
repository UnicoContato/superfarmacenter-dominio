const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('#menu a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const dialog = document.querySelector('.lightbox');
const dialogImage = dialog?.querySelector('img');
document.querySelectorAll('.gallery-card').forEach((card) => card.addEventListener('click', () => {
  dialogImage.src = card.dataset.image;
  dialogImage.alt = card.dataset.alt;
  dialog.showModal();
}));
document.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
