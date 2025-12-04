// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const targ = document.querySelector(a.getAttribute('href'));
    if(targ){
      e.preventDefault();
      targ.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav if open
      const nav = document.querySelector('.side-nav');
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        document.getElementById('navToggle').setAttribute('aria-expanded','false');
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
navToggle && navToggle.addEventListener('click', ()=>{
  const nav = document.querySelector('.side-nav');
  const expanded = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});
