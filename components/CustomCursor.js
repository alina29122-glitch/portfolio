// Add new variants here; project cards select them through data-cursor.
export const cursorShapes = {
  'eight-star': { size: 44, svg: '<path d="M24 0l5.5 14.5L41 7l-7.5 11.5L48 24l-14.5 5.5L41 41l-11.5-7.5L24 48l-5.5-14.5L7 41l7.5-11.5L0 24l14.5-5.5L7 7l11.5 7.5Z"/>' },
  circle: { size: 38, svg: '<circle cx="24" cy="24" r="24"/>' },
  'soft-star': { size: 46, svg: '<path d="M24 1C28 1 27 13 33 15S47 20 47 24 35 27 33 33 28 47 24 47 21 35 15 33 1 28 1 24 13 21 15 15 20 1 24 1Z"/>' }
};

export class CustomCursor {
  constructor({ root = document, selector = '[data-cursor]' } = {}) {
    this.root = root;
    this.selector = selector;
    this.media = window.matchMedia('(hover: hover) and (pointer: fine)');
    this.controller = new AbortController();
    this.element = document.createElement('div');
    this.element.className = 'custom-cursor';
    this.element.setAttribute('aria-hidden', 'true');
    this.element.innerHTML = '<div class="custom-cursor-graphic"></div>';
    this.graphic = this.element.firstElementChild;
    document.body.append(this.element);
    const options = { signal: this.controller.signal, passive: true };
    root.addEventListener('pointerover', event => this.update(event), options);
    root.addEventListener('pointermove', event => this.update(event), options);
    root.addEventListener('pointerout', event => {
      if (!this.active?.contains(event.relatedTarget)) this.hide();
    }, options);
    root.addEventListener('pointercancel', () => this.hide(), options);
    window.addEventListener('blur', () => this.hide(), options);
    window.addEventListener('scroll', () => this.hide(), { ...options, capture: true });
    window.addEventListener('resize', () => this.hide(), options);
    document.addEventListener('visibilitychange', () => this.hide(), options);
    this.media.addEventListener('change', () => this.hide(), options);
  }

  update(event) {
    const target = event.target.closest?.(this.selector);
    const variant = target?.dataset.cursor;
    const shape = cursorShapes[variant];
    if (!this.media.matches || event.pointerType === 'touch' || !shape || !target?.isConnected) {
      this.hide();
      return;
    }
    if (this.active !== target) {
      this.active?.classList.remove('custom-cursor-target');
      this.active = target;
      target.classList.add('custom-cursor-target');
    }
    if (this.variant !== variant) {
      this.variant = variant;
      this.element.dataset.variant = variant;
      this.graphic.style.width = `${shape.size}px`;
      this.graphic.style.height = `${shape.size}px`;
      this.graphic.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true">${shape.svg}</svg>`;
    }
    // No position easing: track the actual pointer without trailing behind it.
    this.element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    this.element.classList.add('is-visible');
  }

  hide() {
    this.active?.classList.remove('custom-cursor-target');
    this.active = null;
    this.element.classList.remove('is-visible');
  }

  destroy() {
    this.hide();
    this.controller.abort();
    this.element.remove();
  }
}
