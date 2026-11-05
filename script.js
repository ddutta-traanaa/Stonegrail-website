const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('section, article').forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Service tabs
const tabs = document.querySelectorAll('.svc-tab');
const panels = document.querySelectorAll('.svc-panel');
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('active'); t.classList.remove('border-accent'); t.classList.add('border-line'); });
    tab.classList.add('active', 'border-accent');
    tab.classList.remove('border-line');
    panels.forEach((p, j) => p.classList.toggle('hidden', j !== i));
  });
});
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  navLinks.forEach(a => {
    const active = a.getAttribute('href') === '#' + current;
    a.classList.toggle('text-ink', active);
    a.classList.toggle('font-semibold', active);
  });
}, { passive: true });
