// Native range controls provide touch, mouse, and keyboard support without dependencies.
export function imageComparison() {
  return `<div class="case-feature-media onboarding-comparison" data-onboarding-visual="access" style="--comparison-position:50%">
    <img src="assets/mgid-signup-after.png" width="2668" height="1324" alt="After: redesigned MGID signup with guided steps and clearer navigation" draggable="false" />
    <div class="onboarding-comparison-after"><img src="assets/mgid-signup-before.png" width="2668" height="1324" alt="Before: MGID signup and login with annotated usability issues" draggable="false" /></div>
    <span class="onboarding-comparison-label onboarding-comparison-label-after">After</span>
    <span class="onboarding-comparison-label onboarding-comparison-label-before">Before</span>
    <div class="onboarding-comparison-divider" aria-hidden="true"><span>‹ ›</span></div>
    <input class="onboarding-comparison-range" type="range" min="0" max="100" value="50" aria-label="Compare signup and login before and after" aria-valuetext="50% of the original design revealed" />
    <button class="onboarding-comparison-expand" type="button" aria-label="Open larger signup comparison">⤢</button>
  </div>`;
}

let closeComparison;

export function setupImageComparisons() {
  closeComparison?.();
  document.querySelectorAll('.onboarding-comparison').forEach(board => bindComparison(board, true));
}

function bindComparison(board, canExpand) {
  const input = board.querySelector('input');
  const update = value => {
    input.value = Math.max(0, Math.min(100, value));
    board.style.setProperty('--comparison-position', `${input.value}%`);
    input.setAttribute('aria-valuetext', `${input.value}% of the original design revealed`);
  };
  input.oninput = () => update(input.value);
  let gesture;
  input.onpointerdown = event => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    input.focus({ preventScroll: true });
    const rect = board.getBoundingClientRect();
    gesture = { x: event.clientX, y: event.clientY, moved: false,
      onHandle: Math.abs(event.clientX - rect.left - rect.width * input.value / 100) < 24 };
    input.setPointerCapture(event.pointerId);
  };
  input.onpointermove = event => {
    if (!gesture) return;
    if (Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 5) gesture.moved = true;
    if (gesture.moved) {
      const rect = board.getBoundingClientRect();
      update((event.clientX - rect.left) / rect.width * 100);
    }
  };
  input.onpointerup = event => {
    if (!gesture) return;
    const open = !gesture.moved && !gesture.onHandle && canExpand;
    gesture = null;
    if (input.hasPointerCapture(event.pointerId)) input.releasePointerCapture(event.pointerId);
    if (open) expandComparison(board);
  };
  input.onpointercancel = input.onlostpointercapture = () => { gesture = null; };
  const expand = board.querySelector('.onboarding-comparison-expand');
  if (canExpand) expand.onclick = () => expandComparison(board);
  else expand.remove();
}

function expandComparison(source) {
  closeComparison?.();
  const focus = document.activeElement;
  const dialog = document.createElement('dialog');
  dialog.className = 'onboarding-comparison-dialog case-page-mgid-user-activation';
  dialog.setAttribute('aria-label', 'Signup and login: before and after comparison');
  dialog.innerHTML = `<button class="onboarding-comparison-close" type="button" aria-label="Close comparison">×</button>${imageComparison()}`;
  document.body.append(dialog);
  const board = dialog.querySelector('.onboarding-comparison');
  bindComparison(board, false);
  const input = board.querySelector('input');
  input.value = source.querySelector('input').value;
  input.oninput();
  const overflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  const close = () => {
    dialog.close();
    dialog.remove();
    document.body.style.overflow = overflow;
    if (focus?.isConnected) focus.focus({ preventScroll: true });
    closeComparison = undefined;
  };
  closeComparison = close;
  dialog.querySelector('button').onclick = close;
  dialog.oncancel = event => { event.preventDefault(); close(); };
  dialog.onclick = event => { if (event.target === dialog) close(); };
  dialog.showModal();
}
