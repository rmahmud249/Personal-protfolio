# Dev Workshop Atlas

A personal portfolio and developer knowledge hub built with TanStack Start, React, TypeScript, and Tailwind CSS. The site includes portfolio, academic, research, learning, and contact pages. Personal information and sample content are editable in `src/content/site.ts`.

## Requirements

- Node.js 22.12 or newer
- npm (included with Node.js)

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:3000`).

## Scripts

```sh
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run typecheck # Check TypeScript types
npm test          # Run tests
npm run lint      # Run ESLint
```

## Personalize the site

Edit `src/content/site.ts` to replace the bracketed placeholders with your own profile, projects, writing, education, certificates, and achievements. Add your resume at `public/resume.pdf`, and update the social links and contact details there as well.

The contact form opens the visitor's email application with a pre-filled message; it does not submit data to a backend.
