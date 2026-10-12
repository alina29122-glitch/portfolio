// Lightweight spring cursor; no framework or build step required.
export function createPreviewCursor({ selector = '.projects-section .project-media' } = {}) {
  const hover = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController();
  const options = { signal: abort.signal, passive: true };
  let cursor = null;
  let active = null;
  let frame = 0;
  let lastTime = 0;
  let destroyed = false;
  const springs = Array.from({ length: 4 }, () => ({ value: 0, target: 0, velocity: 0 }));
  const [x, y, opacity, scale] = springs;

  // Same mass (0.1), damping (10), and stiffness (131) as the original.
  // Solve the overdamped spring exactly so motion is stable at any frame rate.
  const root = Math.sqrt(10 ** 2 - 4 * 0.1 * 131);
  const slow = (-10 + root) / 0.2;
  const fast = (-10 - root) / 0.2;

  function paint() {
    if (!cursor) return;
    cursor.style.transform = `translate3d(${x.value}px, ${y.value}px, 0) scale(${scale.value})`;
    cursor.style.opacity = String(Math.max(0, Math.min(1, opacity.value)));
  }

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
  }

  function tick(time) {
    frame = 0;
    if (active && !active.isConnected) { hide(); return; }
    const dt = Math.min((time - lastTime) / 1000, 0.064);
    lastTime = time;
    let moving = false;
    for (const spring of springs) {
      const distance = spring.value - spring.target;
      const a = (spring.velocity - fast * distance) / (slow - fast);
      const b = distance - a;
      const decayA = a * Math.exp(slow * dt);
      const decayB = b * Math.exp(fast * dt);
      spring.value = spring.target + decayA + decayB;
      spring.velocity = slow * decayA + fast * decayB;
      const tolerance = spring === x || spring === y ? 0.01 : 0.001;
      if (Math.abs(spring.value - spring.target) > tolerance || Math.abs(spring.velocity) > tolerance) {
        moving = true;
      } else {
        spring.value = spring.target;
        spring.velocity = 0;
      }
    }
    paint();
    if (moving) frame = requestAnimationFrame(tick);
  }

  function animate() {
    if (reduced.matches) {
      stop();
      for (const spring of springs) { spring.value = spring.target; spring.velocity = 0; }
      paint();
    } else if (!frame) {
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    }
  }

  function hide() {
    active?.classList.remove('custom-cursor-target');
    active = null;
    stop();
    opacity.value = opacity.target = scale.value = scale.target = 0;
    for (const spring of springs) spring.velocity = 0;
    paint();
  }

  function move(event) {
    const target = event.target instanceof Element ? event.target.closest(selector) : null;
    if (!hover.matches || event.pointerType === 'touch' || !target?.isConnected) { hide(); return; }
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'project-spring-cursor';
      cursor.setAttribute('aria-hidden', 'true');
      document.body.append(cursor);
    }
    x.target = event.clientX - 20;
    y.target = event.clientY - 20;
    if (active !== target || reduced.matches) {
      x.value = x.target;
      y.value = y.target;
      x.velocity = y.velocity = 0;
    }
    if (active !== target) {
      active?.classList.remove('custom-cursor-target');
      active = target;
      active.classList.add('custom-cursor-target');
    }
    opacity.target = scale.target = 1;
    paint();
    animate();
  }

  document.addEventListener('pointerover', move, options);
  document.addEventListener('pointermove', move, options);
  document.addEventListener('pointerout', event => {
    if (!(event.relatedTarget instanceof Node) || !active?.contains(event.relatedTarget)) hide();
  }, options);
  document.addEventListener('pointercancel', hide, options);
  document.addEventListener('visibilitychange', hide, options);
  window.addEventListener('blur', hide, options);
  window.addEventListener('scroll', hide, { ...options, capture: true });
  window.addEventListener('resize', hide, options);
  hover.addEventListener('change', hide, options);
  reduced.addEventListener('change', hide, options);

  return {
    hide,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      hide();
      abort.abort();
      cursor?.remove();
      cursor = null;
    },
  };
}
