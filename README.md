# Yagnesh Portfolio — React (Vite)

My personal portfolio website, built with **React + Vite**.
Same content and dark emerald design as my original portfolio — now in React
so I can edit it myself and host it on GitHub Pages.

**Live goal:** `https://lankavenkatayagnesh.github.io/` (after deploying, see below)

## What is inside

| File / folder | What it is |
|---|---|
| `index.html` | Page title, fonts, and the `<div id="root">` React mounts into |
| `src/main.jsx` | Starts the React app |
| `src/App.jsx` | Puts all the sections together in order |
| `src/data.js` | **EDIT THIS FIRST** — almost all the text: name, bio, skills, projects, education, contact links |
| `src/index.css` | **EDIT THIS FOR COLOURS** — `--accent: #34D399` is the emerald green; change that one line to recolour the whole site |
| `src/components/Header.jsx` | Top navigation bar |
| `src/components/Hero.jsx` | Big intro, profile card, stats, copy-email button |
| `src/components/About.jsx` | About me + "What I'm looking for" |
| `src/components/Skills.jsx` | Skill cards |
| `src/components/Experience.jsx` | CSC India / APSCHE + EduSkills internships |
| `src/components/Projects.jsx` | Cart Rescue AI & SnapCart, Campus AI Bridge |
| `src/components/Education.jsx` | B.Tech, Intermediate, SSC |
| `src/components/Contact.jsx` | Contact section (LinkedIn, GitHub, email, phone) |
| `src/components/Footer.jsx` | Bottom footer |
| `src/components/Reveal.jsx` | Fade-in-on-scroll helper used by the sections |
| `vite.config.js` | Vite settings — `base: '/'` is correct for a user site (see deploy note) |
| `package.json` | Project info + commands (`dev`, `build`, `preview`, `deploy`) |

## 1. Run it on your computer

You need **Node.js** (version 18 or newer). Check with:

```bash
node --version
npm --version
```

Then, inside this project folder:

```bash
npm install      # only once — downloads the libraries (creates node_modules/)
npm run dev      # starts the site, usually at http://localhost:5173
```

Open the link it prints. While `npm run dev` is running, every time you save
a file the browser refreshes automatically.

Stop it with `Ctrl + C` in the terminal.

## 2. Edit the text

Open `src/data.js` in VS Code. Change any word between the quotes, save, and
the site updates. Examples:

- **Change your bio:** edit the `lead` text in `hero`.
- **Add a skill:** add a word inside the `tags: [...]` list of a skill group.
- **Add a project:** copy one of the objects in the `projects` list and change
  its title, description, bullets and stack.
- **Change a link:** edit `linkedin`, `github`, `email` or `phoneDisplay` in `profile`.

## 3. Change the colours

Open `src/index.css`. At the very top:

```css
--accent: #34D399;   /* main emerald green — change this hex code */
--bg: #070A09;       /* page background */
```

One change to `--accent` recolours buttons, highlights and badges everywhere.

## 4. Build it (check for errors)

```bash
npm run build
```

This creates a `dist/` folder with the finished website. If it prints errors,
read the first error message — it usually names the file and line to fix.
Preview the built site with:

```bash
npm run preview
```

## 5. Deploy to GitHub Pages (free, your own link)

This project is set up for a **user site** repo named exactly:

```
lankavenkatayagnesh.github.io
```

That name makes the site live at `https://lankavenkatayagnesh.github.io/`
(no extra path), which is why `vite.config.js` has `base: '/'`.

### First time only

1. On GitHub, create a **public** repo named `lankavenkatayagnesh.github.io`.
2. Push this project into it (from this folder):
   ```bash
   git init
   git add .
   git commit -m "My portfolio in React"
   git branch -M main
   git remote add origin https://github.com/LankaVenkataYagnesh/lankavenkatayagnesh.github.io.git
   git push -u origin main
   ```
   (If GitHub asks you to sign in, use your GitHub login — never share your
   password with anyone or paste it into a chat.)
3. In the repo on GitHub, go to **Settings → Pages** and set **Source** to
   **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`, then Save.
   (The `gh-pages` branch is created by the deploy command below.)

### Every time you update the site

```bash
npm run build
npm run deploy
```

`npm run deploy` uploads the `dist/` folder to the `gh-pages` branch.
Wait 1–3 minutes, then open `https://lankavenkatayagnesh.github.io/`.

> **If you use a project repo instead** (e.g. a repo called `portfolio`, so the
> site would be at `username.github.io/portfolio/`), change `base` in
> `vite.config.js` to `'/portfolio/'` before building.

## Notes

- No backend, no database — this is a static site, so it is free to host.
- The contact email/phone/LinkedIn/GitHub are the real ones from my resume.
- Don't add anything you can't prove (no invented CGPA, numbers or projects).
