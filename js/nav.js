(function () {
  function initNav() {
    const nav = document.querySelector('nav.nav');
    if (!nav) {
      return;
    }

    const drawer = nav.querySelector('.nav-mobile');
    const burger = nav.querySelector('.nav-burger');

    function closeMenu() {
      nav.classList.remove('nav-open');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
      }
      if (burger) {
        burger.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    if (burger) {
      burger.addEventListener('click', function () {
        const opening = !nav.classList.contains('nav-open');
        if (opening) {
          nav.classList.add('nav-open');
          if (drawer) {
            drawer.classList.add('is-open');
            drawer.setAttribute('aria-hidden', 'false');
          }
          burger.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        } else {
          closeMenu();
        }
      });
    }

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        closeMenu();
      });
    });

    nav.querySelectorAll('[data-action="open-contact"]').forEach(
        function (btn) {
          btn.addEventListener('click', function () {
            closeMenu();
            if (typeof window.openContactModal
                === 'function') {
              window.openContactModal();
            }
          });
        });

    const brand = nav.querySelector('.nav-brand');
    if (brand) {
      brand.addEventListener('click', function () {
        closeMenu();
        if (document.querySelector('.hero')) {
          window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
          window.location.href = 'index.html';
        }
      });
      brand.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          brand.click();
        }
      });
    }

    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          closeMenu();
          window.scrollTo({top: target.offsetTop - 72, behavior: 'smooth'});
        }
      });
    });

    function onScroll() {
      const sy = window.scrollY;
      nav.classList.toggle('nav-scrolled', sy > 8);

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(1, sy / docH) : 0;
      document.documentElement.style.setProperty('--scroll-pct',
          pct.toFixed(4));

      const offset = sy + 120;
      let current = null;
      document.querySelectorAll('section[id]').forEach(function (sec) {
        if (sec.offsetTop <= offset) {
          current = sec.id;
        }
      });
      nav.querySelectorAll('.nav-links a, .nav-mobile-links a').forEach(
          function (a) {
            const href = a.getAttribute('href') || '';
            const id = href.startsWith('#') ? href.slice(1) : null;
            if (id) {
              a.classList.toggle('active', id === current);
            }
          });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
