# Akash Mehar — Portfolio 2025

Modern developer portfolio built with React + CSS Modules. Inspired by how top devs build their portfolios today — dark OS aesthetic, bento grid hero, terminal-style UI, clean typography.

## 🗂 Structure

```
src/
├── App.js
├── index.js
├── assets/
│   └── akash.jpg
├── components/
│   ├── Navbar.jsx / .module.css      ← Live IST clock, blur on scroll
│   ├── Hero.jsx / .module.css        ← Bento grid layout + typewriter
│   ├── Projects.jsx / .module.css    ← Terminal card style
│   ├── About.jsx / .module.css       ← Experience timeline + skill grid
│   ├── Contact.jsx / .module.css     ← Terminal UI, click-to-copy email
│   └── Footer.jsx / .module.css
├── data/
│   └── data.js                       ← Edit all your content here
└── styles/
    └── global.css                    ← Design tokens, resets
```

## 🚀 Run

```bash
npm install
npm start
```

## 🏗 Build & Deploy

```bash
npm run build
```

Deploy `build/` to Vercel, Netlify, or GitHub Pages.

## ✨ Features
- **Bento grid hero** — modern card-based layout with your photo
- **Typewriter effect** — cycles through your roles
- **Live IST clock** in navbar
- **Terminal-style** project cards and contact section
- **Click-to-copy** email address
- **Color-coded skill pills** by category
- Fully responsive, mobile-first
- Smooth scroll navigation

## ✏️ Edit Content
All your personal info, skills, projects, and experience live in `src/data/data.js`. Just update that file.
