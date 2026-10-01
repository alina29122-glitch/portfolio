"use client";

import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { motion, useSpring } from "framer-motion";
import { SPRING } from "./mouse-follow-animations";

type CursorController = { hide: () => void };

function ProjectPreviewCursor({ selector, controller }: { selector: string; controller: CursorController }) {
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);
  const scale = useSpring(0, SPRING);

  useEffect(() => {
    const hover = matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const abort = new AbortController();
    const options = { signal: abort.signal, passive: true };
    let active: Element | null = null;

    const hide = () => {
      active?.classList.remove("custom-cursor-target");
      active = null;
      if (reduced.matches) {
        opacity.jump(0);
        scale.jump(0);
      } else {
        opacity.set(0);
        scale.set(0);
      }
    };
    controller.hide = hide;

    const move = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest(selector) : null;
      if (!hover.matches || event.pointerType === "touch" || !target?.isConnected) {
        hide();
        return;
      }
      // Center the circle and start at the entry point, avoiding a flight from (0, 0).
      const left = event.clientX - 20;
      const top = event.clientY - 20;
      if (active !== target || reduced.matches) {
        x.jump(left);
        y.jump(top);
      } else {
        x.set(left);
        y.set(top);
      }
      active?.classList.remove("custom-cursor-target");
      active = target;
      active.classList.add("custom-cursor-target");
      if (reduced.matches) {
        opacity.jump(1);
        scale.jump(1);
      } else {
        opacity.set(1);
        scale.set(1);
      }
    };

    document.addEventListener("pointerover", move, options);
    document.addEventListener("pointermove", move, options);
    document.addEventListener("pointerout", (event) => {
      if (!(event.relatedTarget instanceof Node) || !active?.contains(event.relatedTarget)) hide();
    }, options);
    document.addEventListener("pointercancel", hide, options);
    document.addEventListener("visibilitychange", hide, options);
    window.addEventListener("blur", hide, options);
    window.addEventListener("scroll", hide, { ...options, capture: true });
    window.addEventListener("resize", hide, options);
    hover.addEventListener("change", hide, options);
    reduced.addEventListener("change", hide, options);

    return () => {
      hide();
      abort.abort();
      controller.hide = () => {};
    };
  }, [selector, controller, x, y, opacity, scale]);

  return <motion.div className="project-spring-cursor" aria-hidden="true" style={{ x, y, opacity, scale }} />;
}

export function createPreviewCursor({ selector = ".projects-section .project-media" } = {}) {
  const container = document.createElement("div");
  container.dataset.previewCursorRoot = "";
  document.body.append(container);
  const root = createRoot(container);
  const controller: CursorController = { hide: () => {} };
  flushSync(() => root.render(<ProjectPreviewCursor selector={selector} controller={controller} />));
  return {
    hide: () => controller.hide(),
    destroy: () => { root.unmount(); container.remove(); },
  };
}
