(function () {
  const observed = new WeakSet();

  const io = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('is-visible');
        io.unobserve(entries[i].target);
      }
    }
  }, {threshold: 0.18});

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add('is-visible');
      } else if (!observed.has(el)) {
        observed.add(el);
        io.observe(el);
      }
    }
  }

  window.initReveal = initReveal;

  function run() {
    initReveal();
    setTimeout(function () {
      document.body.classList.add('reveal-fallback');
    }, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
