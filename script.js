/* ============================================
   Dawn Crew: New World — script.js
   ============================================ */

// ---- Config ----
const SERVER_IP      = '5.188.159.15:30569';
const MODS_GDRIVE    = '#'; // <-- ссылка Google Drive
const MODS_YADISK    = '#'; // <-- ссылка Яндекс Диск

// ---- IP Copy ----
function copyIP() {
  const btn   = document.getElementById('copy-btn');
  const label = document.getElementById('copy-label');

  navigator.clipboard.writeText(SERVER_IP).then(() => {
    btn.classList.add('copied');
    label.textContent = 'Скопировано!';
    btn.querySelector('svg').innerHTML = `
      <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2" fill="none"/>
    `;

    setTimeout(() => {
      btn.classList.remove('copied');
      label.textContent = 'Скопировать';
      btn.querySelector('svg').innerHTML = `
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      `;
    }, 2500);

  }).catch(() => {
    // Fallback для старых браузеров
    const ta = document.createElement('textarea');
    ta.value = SERVER_IP;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    label.textContent = 'Скопировано!';
    setTimeout(() => { label.textContent = 'Скопировать'; }, 2500);
  });
}

// ---- Mods download links ----
document.addEventListener('DOMContentLoaded', () => {
  const gdrive = document.getElementById('mods-link-gdrive');
  const yadisk = document.getElementById('mods-link-yadisk');

  if (gdrive && MODS_GDRIVE !== '#') gdrive.href = MODS_GDRIVE;
  if (yadisk && MODS_YADISK !== '#') yadisk.href = MODS_YADISK;

  // Sync IP text in "how to join" section
  const ipInline = document.getElementById('ip-inline');
  if (ipInline) ipInline.textContent = SERVER_IP;

  // Generate floating particles
  spawnParticles();
});

// ---- Particles ----
function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 28;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');

    const left     = Math.random() * 100;
    const duration = 12 + Math.random() * 20;
    const delay    = Math.random() * 15;
    const size     = Math.random() > 0.5 ? 3 : 2;

    p.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(p);
  }
}
