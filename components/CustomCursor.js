// Add new variants here; project cards select them through data-cursor.
export const cursorShapes = {
  "star-10": { size: 46, svg: "<path d=\"M36.0718 23.0444C30.1828 22.477 25.523 17.8194 24.9563 11.9354L24 2L23.0437 11.9354C22.477 17.8204 17.8172 22.478 11.9282 23.0444L2 24L11.9282 24.9556C17.8172 25.523 22.477 30.1806 23.0437 36.0646L24 46L24.9563 36.0646C25.523 30.1796 30.1828 25.522 36.0718 24.9556L46 24L36.0718 23.0444Z\"/>" },
  "star-23": { size: 46, svg: "<path d=\"M30.7233 25.3452L46 20.3197L29.9125 20.7809L38.3597 7.18684L26.3352 17.803L23.9995 2L21.6648 17.803L9.64035 7.18684L18.0875 20.7809L2 20.3197L17.2767 25.3452L4.65383 35.2528L19.6114 29.3583L16.3592 45L23.9995 30.9438L31.6408 45L28.3886 29.3583L43.3462 35.2528L30.7233 25.3452Z\"/>" },
  "star-20": { size: 46, svg: "<path d=\"M43 13L27.3526 18.1769L24 2L20.6474 18.1769L5 13L17.2948 24L5 35L20.6474 29.8221L24 46L27.3526 29.8221L43 35L30.7042 24L43 13Z\"/>" },
  "star-18": { size: 46, svg: "<path d=\"M46 2L24 14.4911L2 2L14.4911 24L2 46L24 33.5075L46 46L33.5075 24L46 2Z\"/>" }
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
    this.element.innerHTML = '<div class="custom-cursor-graphic"></div><span class="custom-cursor-label">View</span>';
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
      this.element.style.setProperty('--cursor-size', `${shape.size}px`);
      this.graphic.style.width = `${shape.size}px`;
      this.graphic.style.height = `${shape.size}px`;
      this.graphic.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true">${shape.svg}</svg>`;
    }
    // Snap to the entry point before enabling the short movement transition.
    const entering = !this.element.classList.contains('is-visible');
    this.element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    if (entering) this.element.getBoundingClientRect();
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
