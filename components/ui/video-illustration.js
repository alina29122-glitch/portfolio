export function videoIllustration(src, poster, label) {
  return `<div class="onboarding-video-illustration">
    <video autoplay muted loop playsinline preload="metadata"${poster ? ` poster="${poster}"` : ""} aria-label="${label}" tabindex="-1" src="${src}"></video>
    <button class="onboarding-video-open" type="button" aria-label="Open full ${label}"></button>
    <button class="onboarding-video-toggle" type="button" aria-label="Replay video"><span class="onboarding-video-control-icon" aria-hidden="true"></span></button>
  </div>`;
}

let cleanup;

export function setupVideoIllustrations() {
  cleanup?.();
  const cleanups = [...document.querySelectorAll('.onboarding-video-illustration')].map(bindVideo);
  cleanup = () => cleanups.forEach(dispose => dispose());
}

function bindVideo(board) {
  const video = board.querySelector('video');
  const toggle = board.querySelector('.onboarding-video-toggle');
  const open = board.querySelector('.onboarding-video-open');
  let visible = false;
  let userPaused = false;
  let disposed = false;
  let dialog;
  let closeDialog;
  video.muted = true;

  const canPlay = () => !disposed && board.isConnected && visible && !document.hidden && !userPaused && !dialog;
  const updateButton = () => {
    toggle.classList.toggle('is-playing', !video.paused);
    toggle.setAttribute('aria-label', video.paused ? 'Replay video' : 'Pause video');
  };
  const sync = () => {
    if (canPlay()) {
      video.play().then(() => { if (!canPlay()) video.pause(); }).catch(updateButton);
    } else video.pause();
    updateButton();
  };
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
    sync();
  }, { threshold: [0, 0.15] });
  observer.observe(board);
  document.addEventListener('visibilitychange', sync);
  toggle.onclick = () => {
    userPaused = !video.paused;
    if (!userPaused) video.currentTime = 0;
    sync();
  };
  open.onclick = () => {
    if (dialog) return;
    dialog = document.createElement('dialog');
    dialog.className = 'onboarding-video-dialog';
    dialog.setAttribute('aria-label', `Full ${video.getAttribute('aria-label')}`);
    const full = document.createElement('video');
    full.src = video.getAttribute('src');
    full.poster = video.poster;
    full.controls = true;
    full.playsInline = true;
    full.muted = true;
    full.setAttribute('aria-label', video.getAttribute('aria-label'));
    const close = document.createElement('button');
    close.className = 'onboarding-video-close';
    close.type = 'button';
    close.textContent = '×';
    close.setAttribute('aria-label', 'Close video');
    dialog.append(close, full);
    document.body.append(dialog);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeDialog = () => {
      if (!dialog) return;
      full.pause();
      dialog.remove();
      dialog = undefined;
      document.body.style.overflow = overflow;
      if (open.isConnected && !disposed) open.focus({ preventScroll: true });
      sync();
    };
    close.onclick = closeDialog;
    dialog.oncancel = event => { event.preventDefault(); closeDialog(); };
    dialog.onclick = event => { if (event.target === dialog) closeDialog(); };
    dialog.showModal();
    sync();
    full.play().catch(() => {});
  };
  // The app replaces its page on navigation; release playback and observers then.
  const removal = new MutationObserver(() => { if (!board.isConnected) dispose(); });
  removal.observe(document.getElementById('app'), { childList: true });
  function dispose() {
    disposed = true;
    observer.disconnect();
    removal.disconnect();
    document.removeEventListener('visibilitychange', sync);
    video.pause();
    closeDialog?.();
    video.removeEventListener('play', updateButton);
    video.removeEventListener('pause', updateButton);
  }
  sync();
  return dispose;
}
