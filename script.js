const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    nav.style.backgroundColor = '#ff0000'; 
  } else {
    nav.style.backgroundColor = '#333'; 
  }
});
