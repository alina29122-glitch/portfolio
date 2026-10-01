export function cinematicProjectList(projects, projectUrl) {
  if (!projects.length) return '';
  const first = projects[0];
  return `<section class="cinematic-work" aria-labelledby="more-work-heading" data-cinematic-work>
    <h3 id="more-work-heading" class="project-year">More work</h3>
    <div class="cinematic-work-layout">
      <div class="cinematic-work-list">
        ${projects.map((project) => `<a class="cinematic-work-row" href="${projectUrl(project.slug)}"
          data-work-row data-work-poster="${project.previewPoster || ''}" data-work-video="${project.previewVideo || ''}" data-work-image="${project.image}">
          <span class="cinematic-work-copy"><span class="cinematic-work-title"><span>${project.title}</span></span><span class="cinematic-work-meta">${project.company}</span></span>
          <span class="cinematic-work-arrow" aria-hidden="true">↗</span>
        </a>`).join('')}
      </div>
      <div class="cinematic-work-preview" aria-hidden="true">
        <span class="project-image ${first.image}" data-work-fallback></span>
        <img class="cinematic-work-poster" data-work-poster-image ${first.previewPoster ? `src="${first.previewPoster}"` : 'hidden'} alt="" loading="lazy" />
        <video class="cinematic-work-video" muted loop playsinline preload="none" tabindex="-1"></video>
      </div>
    </div>
  </section>`;
}

let cleanup;
export function cleanupCinematicWork() { cleanup?.(); cleanup = undefined; }

export function setupCinematicWork() {
  cleanupCinematicWork();
  const section = document.querySelector('[data-cinematic-work]');
  if (!section) return;
  const rows = [...section.querySelectorAll('[data-work-row]')];
  const preview = section.querySelector('.cinematic-work-preview');
  const layout = section.querySelector('.cinematic-work-layout');
  const video = preview.querySelector('video');
  const poster = preview.querySelector('[data-work-poster-image]');
  const fallback = preview.querySelector('[data-work-fallback]');
  const hover = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController();
  const options = { signal: abort.signal };
  let pointerRow = null;
  let focusRow = null;
  let active = null;
  let generation = 0;
  let frame = 0;
  let position = null;
  let destination = { x: 0, y: 0 };
  let lastTime = 0;
  const stopMotion = () => { cancelAnimationFrame(frame); frame = 0; };
  const paintPosition = () => {
    preview.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
  };
  const animate = time => {
    frame = 0;
    const blend = 1 - Math.pow(0.85, Math.min(time - lastTime, 64) / (1000 / 60));
    lastTime = time;
    position.x += (destination.x - position.x) * blend;
    position.y += (destination.y - position.y) * blend;
    const settled = Math.hypot(destination.x - position.x, destination.y - position.y) < 0.2;
    if (settled) position = { ...destination };
    paintPosition();
    if (!settled) frame = requestAnimationFrame(animate);
  };
  const moveTo = (x, y, immediate = false) => {
    destination = {
      x: Math.max(16, Math.min(x, window.innerWidth - preview.offsetWidth - 16)),
      y: Math.max(16, Math.min(y, window.innerHeight - preview.offsetHeight - 16))
    };
    if (!position || immediate || reduced.matches) {
      stopMotion();
      position = { ...destination };
      paintPosition();
    } else if (!frame) {
      lastTime = performance.now();
      frame = requestAnimationFrame(animate);
    }
  };
  const positionForFocus = row => {
    const bounds = layout.getBoundingClientRect();
    const item = row.getBoundingClientRect();
    moveTo(bounds.right - preview.offsetWidth - 24,
      item.top + (item.height - preview.offsetHeight) / 2, true);
  };
  const followPointer = event => {
    if (!pointerRow || !hover.matches || event.pointerType === 'touch') return;
    if (reduced.matches) { positionForFocus(pointerRow); return; }
    moveTo(event.clientX + 20, event.clientY - 100);
  };

  const stopVideo = () => {
    generation++;
    video.classList.remove('is-playing');
    video.pause();
    if (video.readyState > 0) video.currentTime = 0;
  };
  const deactivate = () => {
    stopMotion();
    stopVideo();
    active = null;
    preview.classList.remove('is-visible');
    rows.forEach(row => row.classList.remove('is-active'));
  };
  const reset = () => { pointerRow = focusRow = null; deactivate(); position = null; };
  const sync = () => {
    const row = pointerRow || focusRow;
    if (!row || !hover.matches || document.hidden) { deactivate(); return; }
    if (row === active) return;
    stopVideo();
    active = row;
    preview.classList.add('is-visible');
    rows.forEach(item => item.classList.toggle('is-active', item === row));
    fallback.className = `project-image ${row.dataset.workImage}`;
    const imageSrc = row.dataset.workPoster;
    poster.hidden = !imageSrc;
    if (imageSrc) poster.src = imageSrc;
    // Clear the old movie before switching, keeping the static poster visible.
    const src = row.dataset.workVideo;
    if (!src || reduced.matches) return;
    if (video.getAttribute('src') !== src) { video.src = src; video.load(); }
    video.muted = true;
    const request = generation;
    window.dispatchEvent(new CustomEvent('portfolio-preview-play', { detail: video }));
    video.play().then(() => {
      if (generation === request && active === row) video.classList.add('is-playing');
    }).catch(() => {});
  };

  rows.forEach(row => {
    row.addEventListener('pointerenter', event => {
      if (hover.matches && event.pointerType !== 'touch') { pointerRow = row; followPointer(event); sync(); }
    }, options);
    row.addEventListener('pointermove', followPointer, options);
    row.addEventListener('pointerleave', () => { pointerRow = null; if (focusRow) positionForFocus(focusRow); sync(); }, options);
    row.addEventListener('focus', () => { focusRow = row; if (!pointerRow) positionForFocus(row); sync(); }, options);
    row.addEventListener('blur', () => { focusRow = null; sync(); }, options);
  });
  window.addEventListener('portfolio-preview-play', event => { if (event.detail !== video) reset(); }, options);
  window.addEventListener('blur', reset, options);
  window.addEventListener('resize', reset, options);
  window.addEventListener('scroll', reset, { ...options, passive: true, capture: true });
  document.addEventListener('visibilitychange', reset, options);
  hover.addEventListener('change', reset, options);
  reduced.addEventListener('change', () => { stopMotion(); if (active) positionForFocus(active); active = null; sync(); }, options);
  const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) reset(); });
  observer.observe(section);
  cleanup = () => { reset(); abort.abort(); observer.disconnect(); };
}
