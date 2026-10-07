export function cinematicProjectList(projects, projectUrl, { showSeeAll = false } = {}) {
  if (!projects.length) return '';
  return `<section class="cinematic-work" aria-labelledby="more-work-heading" data-cinematic-work>
    <div class="work-project-group-meta">
      <h2 id="more-work-heading" class="work-project-group-label">More projects</h2>
    </div>
    <div class="cinematic-work-layout">
      <div class="cinematic-work-list">
        ${projects.map(project => `<article class="cinematic-work-row" data-work-row>
          <div class="cinematic-work-copy">
            <div class="cinematic-work-intro">
              <h3 class="cinematic-work-title"><a href="${projectUrl(project.slug)}"><span class="cinematic-work-title-text">${project.title}</span></a></h3>
              <p class="cinematic-work-meta"><span>${project.years}</span>${project.company.split(' · ').map(part => `<span>${part}</span>`).join('')}</p>
            </div>
            <p class="body-copy cinematic-work-description">${project.delivered}</p>
            <a class="underline-link cinematic-work-cta" href="${projectUrl(project.slug)}"><span>Explore case</span><img src="/assets/lets-talk-icon.svg" alt="" /></a>
          </div>
          <a class="cinematic-work-preview" href="${projectUrl(project.slug)}" aria-label="${project.title}">
            ${project.previewPoster
              ? `<img class="cinematic-work-poster" src="${project.previewPoster}" alt="" loading="lazy" />`
              : `<span class="project-image ${project.image}"></span>`}
            ${project.previewVideo ? `<video class="cinematic-work-video" data-work-video="${project.previewVideo}" muted loop playsinline preload="none" tabindex="-1" aria-hidden="true"></video>` : ''}
          </a>
        </article>`).join('')}
      </div>
      ${showSeeAll ? `<div class="projects-actions"><a class="button projects-see-all" href="/projects"><span>Explore all projects</span><img src="/assets/lets-talk-icon.svg" alt="" /></a></div>` : ''}
    </div>
  </section>`;
}

let cleanup;
export function cleanupCinematicWork() { cleanup?.(); cleanup = undefined; }

export function setupCinematicWork() {
  cleanupCinematicWork();
  const section = document.querySelector('[data-cinematic-work]');
  if (!section) return;
  const hover = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController();
  const options = { signal: abort.signal };
  const states = [...section.querySelectorAll('.cinematic-work-video')].map(video => ({ video, preview: video.closest('.cinematic-work-preview'), generation: 0 }));
  let active = null;
  const stop = state => {
    state.generation++;
    state.video.pause();
    state.video.classList.remove('is-playing');
    if (state.video.readyState > 0) state.video.currentTime = 0;
    if (active === state) active = null;
  };
  const reset = () => states.forEach(stop);
  const play = state => {
    if (active === state || reduced.matches || document.hidden) return;
    reset();
    active = state;
    const { video, generation } = state;
    if (!video.getAttribute('src')) video.src = video.dataset.workVideo;
    video.muted = true;
    video.play().then(() => {
      if (state.generation === generation && !abort.signal.aborted) video.classList.add('is-playing');
    }).catch(() => { if (state.generation === generation) stop(state); });
  };
  states.forEach(state => {
    state.preview.addEventListener('pointerenter', event => { if (hover.matches && event.pointerType !== 'touch') play(state); }, options);
    state.preview.addEventListener('pointerleave', () => stop(state), options);
    state.preview.addEventListener('focus', () => play(state), options);
    state.preview.addEventListener('blur', () => stop(state), options);
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (!entry.isIntersecting) stop(states.find(state => state.preview === entry.target)); });
  });
  states.forEach(state => observer.observe(state.preview));
  document.addEventListener('visibilitychange', reset, options);
  window.addEventListener('blur', reset, options);
  hover.addEventListener('change', reset, options);
  reduced.addEventListener('change', reset, options);
  cleanup = () => { abort.abort(); observer.disconnect(); reset(); };
}
