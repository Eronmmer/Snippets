const toggleBar = document.querySelector('.bar-icon');

function classToggle() {
  const navs = document.querySelectorAll('.all-navigation-lists');
  navs.forEach(element => element.classList.toggle('.class-that-contain-rules-to-display-items-onclick'))
}

toggleBar.addEventListener('click', classToggle, false);
