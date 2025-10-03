# Terms & Privacy - Launch Guide

This project is a React + TypeScript + Tailwind app containing a professional "Terms of Service & Privacy Policy" page for Sushil Pokharel.

## Quick start (local)

1. Install dependencies

   npm install

2. Start dev server

   npm start

## Notes for Windows PowerShell

- If PowerShell blocks npm/npx scripts with an error like "npm.ps1 cannot be loaded because running scripts is disabled on this system", open a Command Prompt (cmd.exe) and run `npm start` there, or temporarily allow scripts in PowerShell:

  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## Deploy (recommended hosts)

- Netlify
  - Connect your repo to Netlify and set build command `npm run build` and publish directory `build`.
  - Netlify will automatically pick up the static `public/404.html` for 404 pages.

- Vercel
  - Import the project into Vercel. Use the default `npm run build` and `build` output.

- GitHub Pages
  - Build locally `npm run build` and push contents of `build` to `gh-pages` branch (or use a deployment action).

## 404 / Error handling

- `public/404.html` is a static fallback with a 7-second redirect to `/`.
- `src/pages/ErrorPage.tsx` is a friendly in-app 404 component (auto-redirects after 7s). To wire it into your SPA, install `react-router-dom` and add a catch-all route.

## Optional: Wire SPA routing (React Router)

If you want the SPA to route and show `ErrorPage` for unknown routes:

1. Install router:

   npm install react-router-dom

2. Wrap `App` or `index.tsx` with a BrowserRouter and add a `<Routes>` block with a wildcard `*` route pointing to `ErrorPage`.

## Contact form

- `src/components/ContactForm.tsx` contains a simple form that posts to `REACT_APP_CONTACT_FORM_ENDPOINT` if set, otherwise falls back to a `mailto:` link.
- For production, consider Netlify Forms, Formspree, or a simple server endpoint.

## Support

If you want, I can:
- Add React Router wiring and update imports.
- Create a Netlify/Vercel deploy configuration or GitHub Actions workflow.
- Add small analytics or consent logging (privacy-first).

---

Built for quick launch by editing local files. If you want me to run the dev server here and share a screenshot, say `run dev`.
# My React App

This project is a simple React application that includes a Terms of Service and Privacy Policy page, styled using TailwindCSS for a clean and modern look. The application is mobile-friendly and provides a user-friendly interface for navigating the terms and privacy policies.

## Features

- Home page with a welcome message
- Terms of Service page with collapsible sections
- Privacy Policy page with collapsible sections
- Responsive design using TailwindCSS

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

```
my-react-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Layout.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── TermsOfService.tsx
│   │   └── PrivacyPolicy.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── tailwind.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies Used

- React
- React Router
- TailwindCSS
- TypeScript

## License

This project is licensed under the MIT License.

## Final launch checklist

1. Create PNG favicons from `public/favicon.svg`:

   - Generate `public/favicon-192.png` and `public/favicon-512.png` (use any image editor or an online converter). These are referenced by `manifest.json` and `index.html`.

2. Review meta and Privacy text, then commit changes.

3. Push to GitHub. The `gh-pages` workflow will build and publish to the `gh-pages` branch (or use Netlify/Vercel for automatic deployments).

4. Test the live site, check `/terms` and `/privacy`, and confirm `public/404.html` is served as fallback on static hosts.

5. Optional: add a custom domain in Netlify/Vercel or set `CNAME` for GitHub Pages.

If you want, I can generate the PNG favicons here if you give the go-ahead to create them from the SVG using the environment's image tools; otherwise you can create them locally quickly.

### Generating PNG favicons from `favicon.svg`

If you have ImageMagick locally, run (PowerShell):

```powershell
magick convert public\favicon.svg -resize 192x192 public\favicon-192.png
magick convert public\favicon.svg -resize 512x512 public\favicon-512.png
```

If you don't have ImageMagick, you can use Chrome headless with Puppeteer (requires Node):

```bash
npm install puppeteer --no-save
node -e "(async()=>{const puppeteer=require('puppeteer');const fs=require('fs');const svg=fs.readFileSync('public/favicon.svg','utf8');const b='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);const browser=await puppeteer.launch();const page=await browser.newPage();await page.goto(b);const el=await page.$('svg');await el.screenshot({path:'public/favicon-192.png',clip:{x:0,y:0,width:192,height:192}});await el.screenshot({path:'public/favicon-512.png',clip:{x:0,y:0,width:512,height:512}});await browser.close();})();"
```

Alternatively use any online SVG -> PNG converter and upload the two files into `public/`.