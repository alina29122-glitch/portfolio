# Mouse-follow integration

UI components live in `components/ui`; the site's existing styles are in the root
`styles.css`. The `@/*` TypeScript alias resolves from the project root. Keeping
reusable components here matches shadcn's default `@/components/ui` imports.

`mouse-follow-animations.tsx` contains the supplied demos and spring settings.
`demo.tsx` is the supplied React demo entry. The live site uses
`project-preview-cursor.tsx`, adapting the same Framer Motion springs to existing
project links without replacing their photos, videos, or navigation.

React, React DOM, Framer Motion, TypeScript, and esbuild are installed. No context
provider, state store, images, or icon dependencies are required by this component.
The live cursor is styled in `styles.css`; its size is 40px. It is enabled only for
fine pointers with hover support. Reduced motion disables spring interpolation.

Run `npm run build:ui` after editing TSX when using a plain static server. `npm run
build` and `npm run dev` run this automatically. The generated browser module is
committed so source preview servers can also load it. Run `npm run typecheck` for
TypeScript validation.

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
