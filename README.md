# Alison Kate Lachica — Portfolio

React + Vite portfolio with dark theme, scroll animations, 3D card tilt, cursor trails, typewriter, and Easter egg.

---

## Project Structure

```
portfolio-akl/
├── public/
│   ├── alison.jpg        ← your profile photo
│   ├── CV.pdf            ← your CV
│   ├── intro.png
│   ├── makeshop.png
│   ├── anchora.png
│   ├── linkedin.png
│   ├── game.png
│   ├── chiquitos.png
│   ├── oldport.png
│   └── project-1.webp
├── src/
│   ├── components/
│   │   ├── Intro.jsx         ← loading splash screen
│   │   ├── Navbar.jsx        ← sticky nav + mobile hamburger
│   │   ├── Hero.jsx          ← hero with typewriter + photo
│   │   ├── Marquee.jsx       ← scrolling skills strip
│   │   ├── About.jsx         ← about + education cards
│   │   ├── Skills.jsx        ← animated skill bars
│   │   ├── Projects.jsx      ← projects grid
│   │   ├── ProjectCard.jsx   ← individual card with 3D tilt
│   │   ├── Experience.jsx    ← work experience
│   │   ├── Contact.jsx       ← contact form + socials
│   │   ├── Footer.jsx
│   │   └── EasterEgg.jsx     ← hidden surprise (click logo 5×)
│   ├── data/
│   │   ├── projects.js       ← all project data
│   │   └── skills.js         ← skills + tools data
│   ├── hooks/
│   │   └── useInView.js      ← IntersectionObserver hook
│   ├── App.jsx               ← root: cursor, parallax, egg logic
│   ├── index.css             ← all global styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Setup & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Add your images to /public  (see list above)

# 3. Start dev server
npm run dev
# → opens at http://localhost:5173
```

---

## Build for Production

```bash
npm run build
# output goes to /dist folder
```

---

## Deploy to Vercel (Recommended — Free)

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default (Vite is auto-detected)
5. Click **Deploy**
6. Your site is live at `https://your-name.vercel.app`

---

## Deploy to GitHub Pages

```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json "scripts":
#    "deploy": "gh-pages -d dist"
# Add to vite.config.js:
#    base: '/your-repo-name/'

# 3. Build and deploy
npm run build
npm run deploy
```

---

## Customisation

| What to change | Where |
|---|---|
| Your name / bio | `src/components/Hero.jsx`, `About.jsx` |
| Projects | `src/data/projects.js` |
| Skills & tools | `src/data/skills.js` |
| Profile photo | `public/alison.jpg` |
| CV download | `public/CV.pdf` |
| Theme colours | `src/index.css` → `:root` variables |
| Easter egg text | `src/components/EasterEgg.jsx` |

---

## Easter Egg
Click the `<AKL/>` logo **5 times** within 2 seconds to trigger the hidden message. 👾
