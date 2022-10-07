const btn = document.querySelector('.set');
const box = document.querySelector('.box');
const p = document.querySelector('.fs1');

btn.addEventListener('click', () => {
  btn.classList.add('d-none')
  box.classList.add('boxAdd')
  p.classList.add('fs', 'pAdd')
})