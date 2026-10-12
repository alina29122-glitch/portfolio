# Mouse-follow integration

UI components live in `components/ui`; the site's existing styles are in the root
`styles.css`. The `@/*` TypeScript alias resolves from the project root. Keeping
reusable components here matches shadcn's default `@/components/ui` imports.

The live site uses `project-preview-cursor.js`, a vanilla JavaScript module with
no runtime dependencies or build step. Its spring uses the original mass (0.1),
damping (10), and stiffness (131). Animation frames stop once the cursor settles.
The cursor element is created only on the first eligible project hover.

The cursor is styled in `styles.css`; its size is 40px. It is enabled only for
fine pointers with hover support. Reduced motion disables spring interpolation.
It hides on scroll, blur, resize, cancellation, or route changes. `destroy()`
removes its element, listeners, and scheduled animation frame.

`mouse-follow-animations.tsx` and `demo.tsx` preserve the supplied standalone React
demos. React, React DOM, Framer Motion, and TypeScript remain available for these
references; they are not imported by the live cursor. Run `npm run typecheck`
for TypeScript validation of the reference components.

## Tailwind and shadcn setup for the standalone demos

This portfolio uses a custom static build, not a full shadcn/Tailwind application.
The supplied demos retain their Tailwind classes. To render those demos with
Tailwind in this project:

1. Run `npm install -D tailwindcss @tailwindcss/cli`.
2. Create `components/ui/tailwind.css` with:

   ```css
   @import "tailwindcss";
   @source "./*.tsx";
   @theme {
     --color-background: #171a1b;
     --color-foreground: #ffffff;
   }
   ```

3. Run `npx @tailwindcss/cli -i ./components/ui/tailwind.css -o ./assets/ui-tailwind.css`.
4. Load that stylesheet in the demo page. Review Tailwind's base reset before
   enabling it site-wide, since existing pages use hand-written styles.

For a separate complete React/TypeScript/shadcn application, use
`npx shadcn@latest init -t vite` in a new directory and copy these TSX components
into its `src/components/ui` directory. Install `framer-motion` there. For an
existing supported React project with Tailwind and aliases configured, run
`npx shadcn@latest init`.

Official references:
- https://tailwindcss.com/docs/installation/tailwind-cli
- https://ui.shadcn.com/docs/installation/vite
- https://ui.shadcn.com/docs/installation/manual
- https://motion.dev/docs/react-use-spring

## Project showcase reference

`project-showcase.tsx` preserves the supplied React reference (with its section
ref typed as `HTMLElement`). `project-showcase-demo.tsx` is its separate demo;
`lucide-react` supplies the reference arrow. It uses the Tailwind setup above.

The portfolio's live list remains in `cinematic-project-list.js` with styles in
`styles.css`, adapting the reference's 0.15 interpolation, pointer offset,
scale/fade reveal, title underline, and arrow reveal to the existing static
renderer and real project videos. Demo projects and remote sample photos are
not rendered on the portfolio. No provider or global state store is needed.
