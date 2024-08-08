const navMenu = document.querySelector('.nav-menu');
window.addEventListener('scroll', function() {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPos > 50) {
    navMenu.classList.add('scrolled');
  } else {
    navMenu.classList.remove('scrolled');
  }
});

const menuLinks = document.querySelectorAll('.nav-menu li a');
menuLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.classList.add('hovered');
  });
  link.addEventListener('mouseout', function() {
    this.classList.remove('hovered');
  });
});