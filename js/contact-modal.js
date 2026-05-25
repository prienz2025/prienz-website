(function () {
  function initContactModal() {
    var scrim = document.getElementById('contact-modal-scrim');
    if (!scrim) return;

    var formState    = scrim.querySelector('.form-state');
    var successState = scrim.querySelector('.success-state');
    var form         = scrim.querySelector('form');
    var nameInput    = scrim.querySelector('#contact-name');
    var cancelBtn    = scrim.querySelector('.modal-cancel');

    function open() {
      if (form) form.reset();
      if (formState)    formState.style.display    = '';
      if (successState) successState.style.display = 'none';
      scrim.style.display = 'flex';
      scrim.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { if (nameInput) nameInput.focus(); }, 100);
    }

    function close() {
      scrim.style.display = 'none';
      scrim.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    window.openContactModal  = open;
    window.closeContactModal = close;

    scrim.addEventListener('click', function (e) { if (e.target === scrim) close(); });
    if (cancelBtn) cancelBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && scrim.style.display !== 'none') close();
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (formState)    formState.style.display    = 'none';
        if (successState) successState.style.display = '';
        setTimeout(close, 1800);
      });
    }
  }

  // Global trigger for any [data-action="open-contact"] outside the nav
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action="open-contact"]');
    if (btn && typeof window.openContactModal === 'function') window.openContactModal();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactModal);
  } else {
    initContactModal();
  }
})();
