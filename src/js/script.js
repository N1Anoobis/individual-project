function toggleMenu(visible) {
  if (document.documentElement.clientWidth < 767) {
    document.querySelector('.sidebar').classList.toggle('show', visible);
  
  }
}
//listiner for toggleMenu
document.querySelector('.fa').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});

function moveMenuElements() {
  const content = document.querySelector('.nav-bar').querySelector('.content-disapear-mobile');

  let windowSize = document.documentElement.clientWidth;
  const newContent = document.querySelector('.hamburger-content').querySelector('.content-disapear-mobile ');

  if (windowSize < 750 && content) {

    document.querySelector('.hamburger-content').appendChild(content);
  }
  if (windowSize > 750 && newContent) {

    document.querySelector('.nav-bar').appendChild(newContent);
  }
}

window.addEventListener('resize', function (e) {
  e.preventDefault();
  moveMenuElements();
});

window.addEventListener('load', function (e) {
  e.preventDefault();
  moveMenuElements();
});
