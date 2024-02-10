let btns = document.querySelectorAll('.nav-btn');
let sections = document.querySelectorAll('main section')

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
      currentSection = section.id;
    }
  });


  btns.forEach(btn => {
    if (btn.href.includes(currentSection)) {
      document.querySelector('.current').classList.remove('current');
      btn.classList.add('current')
    }
  })


})