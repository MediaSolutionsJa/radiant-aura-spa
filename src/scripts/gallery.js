const grid = document.getElementById('galleryGrid');
const lb = document.getElementById('lightbox');
const sortSelect = document.getElementById('sortSelect');
let items = [];
let currentIndex = -1;

async function loadManifest() {
  try {
    const res = await fetch('/gallery/manifest.json');
    items = await res.json();
    renderGrid(items);
    openFromHash();
  } catch (err) {
    console.error('Failed to load manifest', err);
  }
}

function renderGrid(list) {
  grid.innerHTML = '';
  const frag = document.createDocumentFragment();
  list.forEach((it, i) => {
    const a = document.createElement('a');
    a.href = `#media=${it.id}`;
    a.className = 'gallery-item';
    a.dataset.index = i;
    let media;
    if (it.type === 'image') {
      media = document.createElement('img');
      media.dataset.src = it.thumb;
      media.alt = altFrom(it);
      media.loading = 'lazy';
      media.className = 'gallery-thumb';
    } else {
      media = document.createElement('video');
      media.dataset.src = it.thumb;
      media.muted = true;
      media.playsInline = true;
      media.preload = 'none';
      media.className = 'gallery-thumb';
    }
    a.appendChild(media);
    const ov = document.createElement('span');
    ov.className = 'overlay';
    a.appendChild(ov);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openLightboxByIndex(i);
    });
    frag.appendChild(a);
  });
  grid.appendChild(frag);
  setupLazyLoading();
}

function setupLazyLoading() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.src = el.dataset.src;
        io.unobserve(el);
      }
    });
  }, { rootMargin: '200px' });
  grid.querySelectorAll('img[data-src],video[data-src]').forEach((el) => io.observe(el));
}

function altFrom(it) {
  const base = it.filename.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');
  return `${base} — ${it.folder === '/' ? 'Gallery' : it.folder}`;
}

function openLightboxByIndex(i) {
  currentIndex = i;
  renderLightbox();
  history.replaceState(null, '', `#media=${items[i].id}`);
}

function renderLightbox() {
  const it = items[currentIndex];
  lb.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'lightbox-content';
  const close = button('×', 'lightbox-close', 'Close (Esc)', closeLightbox);
  const prev = button('‹', 'lightbox-prev', 'Previous (←)', () => nav(-1));
  const next = button('›', 'lightbox-next', 'Next (→)', () => nav(1));
  let media;
  if (it.type === 'image') {
    media = document.createElement('img');
    media.src = it.src;
    media.alt = altFrom(it);
    media.className = 'lightbox-media';
  } else {
    media = document.createElement('video');
    media.src = it.src;
    media.controls = true;
    media.className = 'lightbox-media';
    media.autoplay = true;
    media.playsInline = true;
  }
  const cap = document.createElement('div');
  cap.className = 'caption';
  cap.textContent = altFrom(it);
  wrap.append(media, cap, close, prev, next);
  lb.appendChild(wrap);
  lb.setAttribute('aria-hidden', 'false');
  attachKeyAndTouch();
  trapFocus(lb);
  prefetchNeighbors();
}

function button(txt, cls, aria, onClick) {
  const b = document.createElement('button');
  b.className = cls;
  b.ariaLabel = aria;
  b.textContent = txt;
  b.addEventListener('click', onClick);
  return b;
}

function nav(d) {
  currentIndex = (currentIndex + d + items.length) % items.length;
  renderLightbox();
}

function closeLightbox() {
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML = '';
  history.replaceState(null, '', location.pathname);
}

function attachKeyAndTouch() {
  const onKey = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nav(1);
    if (e.key === 'ArrowLeft') nav(-1);
  };
  document.addEventListener('keydown', onKey, { once: true });
  let x0 = null;
  lb.ontouchstart = (e) => {
    x0 = e.touches[0].clientX;
  };
  lb.ontouchend = (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (dx > 40) nav(-1);
    if (dx < -40) nav(1);
    x0 = null;
  };
}

function trapFocus(container) {
  const focusable = container.querySelectorAll('button, [href], video, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  container.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  first?.focus();
}

function prefetchNeighbors() {
  for (const d of [-1, 1]) {
    const j = (currentIndex + d + items.length) % items.length;
    const it = items[j];
    if (it.type === 'image') {
      const pre = new Image();
      pre.src = it.src;
    }
  }
}

function openFromHash() {
  const m = location.hash.match(/media=(\d+)/);
  if (m) {
    const idx = items.findIndex((x) => x.id === m[1]);
    if (idx > -1) openLightboxByIndex(idx);
  }
}

sortSelect?.addEventListener('change', () => {
  if (sortSelect.value === 'newest') items.sort((a, b) => b.mtime - a.mtime);
  else if (sortSelect.value === 'oldest') items.sort((a, b) => a.mtime - b.mtime);
  else items.sort((a, b) => a.folder.localeCompare(b.folder) || a.filename.localeCompare(b.filename));
  renderGrid(items);
});

window.addEventListener('hashchange', openFromHash);

loadManifest();
