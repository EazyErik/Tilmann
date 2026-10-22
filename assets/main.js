// Mobile Navigation
const toggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
  mobileNav.querySelectorAll('[data-close-menu]').forEach((link) =>
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Kontaktformular (Prototyp: zeigt nur eine Bestätigung, sendet noch nichts)
const form = document.getElementById('contact-form');
const errorBox = document.getElementById('form-error');
const success = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const consent = form.elements.einwilligung.checked;
    let error = '';
    if (!name) error = 'Bitte geben Sie Ihren Namen ein.';
    else if (!consent) error = 'Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung.';
    if (error) {
      errorBox.textContent = error;
      errorBox.hidden = false;
      return;
    }
    // TODO: Hier an einen Formular-Dienst oder ein eigenes Backend senden.
    errorBox.hidden = true;
    document.getElementById('success-name').textContent = name;
    form.hidden = true;
    success.hidden = false;
  });
  document.getElementById('form-reset').addEventListener('click', () => {
    form.reset();
    success.hidden = true;
    form.hidden = false;
  });
}
