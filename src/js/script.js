const menuBar = document.querySelector('.fa');
// console.log(menuBar)

function toggleMenu(visible) {
  if (document.documentElement.clientWidth < 767) {

    document.querySelector('.sidebar').classList.toggle('show', visible);
    //x for mobile menu
    document.querySelector('.fa').classList.toggle('fa-times');
    document.querySelector('.fa').classList.toggle('fa-bars');
  }
}

function menuBarDisapear() {
  if (document.documentElement.clientWidth > 767 && menuBar) {
    document.querySelector('.fa').classList.add('disapear');
  }
  if (document.documentElement.clientWidth < 767) {
    document.querySelector('.fa').classList.remove('disapear');
  }
}
//listiner for toggleMenu
document.querySelector('.fa').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});

function moveMenuElements() {
  const content = document.querySelector('.top-bar').querySelector('.content-disapear-mobile');

  let windowSize = document.documentElement.clientWidth;
  const newContent = document.querySelector('.hamburger-content').querySelector('.content-disapear-mobile ');

  if (windowSize < 750 && content) {

    document.querySelector('.hamburger-content').appendChild(content);
  }
  if (windowSize > 750 && newContent) {

    document.querySelector('.top-bar').appendChild(newContent);
  }
}

window.addEventListener('resize', function (e) {
  e.preventDefault();
  moveMenuElements();
  menuBarDisapear();
});

window.addEventListener('load', function (e) {
  e.preventDefault();
  moveMenuElements();
  menuBarDisapear();
  toggleMenu();
});

const pages = document.getElementById('pages').children;
const links = document.querySelectorAll('li');
const aLinks = document.querySelector('ul').querySelectorAll('a');
initPage();

function initPage() {
  const idFromHash = window.location.hash.replace('#/', '');

  let pageMathingHash = pages[0].id;

  for (let page of pages) {
    if (page.id == idFromHash) {
      pageMathingHash = page.id;
      break;
    }
  }
  activatePage(pageMathingHash);

  for (let link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const clickedElement = e.target;
      const id = clickedElement.getAttribute('href').replace('#', '');
      activatePage(id);

      ///change URL hash
      window.location.hash = '#/' + id;
    });
  }
}

function activatePage(pageId) {
  //add class active for page
  for (let page of pages) {
    if (page.id == pageId) {
      page.classList.add('activePage');
      page.classList.remove('in-active');
    } else if (page.id != pageId) {
      page.classList.remove('activePage');
      page.classList.add('in-active');
    }
  }
  //add class active for link
  for (let link of aLinks) {
    link.classList.toggle('activelink', link.getAttribute('href') == '#' + pageId);
  }
  toggleMenu();
}
