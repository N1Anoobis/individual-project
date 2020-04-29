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


const pages = document.getElementById('pages').children;
console.log(pages[0].id);
const links = document.querySelectorAll('li');
console.log(links);
for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const clickedElement = e.target;

    const id = clickedElement.getAttribute('href').replace('#', '');
    console.log(id);

    activatePage(id);
  });
}
activatePage(pages[0].id);

function activatePage(pageId) {

  //add class active for page
  for (let page of pages) {
    console.log(page.id);
    // page.classList.add('in-active');
    if (page.id == pageId) {
      page.classList.add('active');
      page.classList.remove('in-active');
    }else if(page.id != pageId) {
      page.classList.remove('active');
      page.classList.add('in-active');
    }

  }

  //add class active for link

}
