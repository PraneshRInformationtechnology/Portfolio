# Automated TypeScript -> JavaScript conversion (best-effort)

Files were converted from .ts/.tsx to .js/.jsx by removing type annotations and interfaces.
This is an automated conversion. Please check the following files that likely require manual attention:
- src/App.jsx

- src/components/Contact.jsx

- src/components/Footer.jsx

- src/components/Experience.jsx

- src/components/Skills.jsx

- src/components/Projects.jsx

- src/components/About.jsx

- src/components/Navbar.jsx

- src/components/Home.jsx

Manual tasks you should perform:
- Verify React hook dependencies and prop-types where necessary.
- Reinstall dependencies and remove TypeScript-specific packages from package.json.
- Update imports if any files reference removed .d.ts files.
- Run the project with `npm install` and `npm run dev` (Vite) and fix runtime errors.

Resume/profile data placed at `src/data/profile.js`.

