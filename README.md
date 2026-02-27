# 🌐 Mairaj Poke — Personal Portfolio Website

> **Digital Marketing Technologist | AI-Driven Growth | Web Development | App Development**

A premium, fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, just clean and powerful front-end code.

---

## 🔗 Live Site

👉 [https://mairaj-poke.github.io](https://yourusername.github.io)

---

## ✨ Features

- ⚡ Animated intro loader with progress bar
- 🖱️ Custom neon cursor with smooth follower
- 🌙 Dark luxury theme with lime green (`#b5f23d`) accent
- 📱 Fully responsive — mobile, tablet, desktop
- 🎞️ Scroll-triggered reveal animations
- 📊 Animated skill bars & stat counters
- 🃏 3D tilt effect on project & skill cards
- 🔁 Auto-sliding testimonials carousel
- 🏷️ Infinite scrolling marquee
- 🧭 Sticky nav with active section highlighting
- 📬 Contact form with success state
- 🌀 Parallax orbs & hero card mouse tracking

---

## 📁 Project Structure

```
portfolio/
│
├── index.html        # Main HTML structure (all 9 sections)
├── style.css         # All styling — dark theme, animations, responsive
├── script.js         # All interactions — cursor, reveals, counters, slider
└── README.md         # You are here
```

> **Note:** A single combined file `index_combined.html` is also available with everything inlined — useful for quick sharing or testing.

---

## 🗂️ Sections Included

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Bold intro, animated stats, floating profile card |
| 2 | **About** | Personal summary, highlights, feature cards |
| 3 | **Skills** | 9 skill cards with animated progress bars |
| 4 | **Experience** | Interactive timeline — all 4 roles |
| 5 | **Projects** | 6 case-study style project cards |
| 6 | **Apps** | POPPY streaming app + 3 other app builds |
| 7 | **Achievements** | Education, certifications, key metrics |
| 8 | **Testimonials** | Auto-sliding carousel with 4 testimonials |
| 9 | **Contact** | Styled form + direct contact cards |

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create your repository
```
Repository name: yourusername.github.io
Visibility: Public
```

### Step 2 — Upload files
Upload these 3 files to the root of your repository:
```
index.html
style.css
script.js
```

### Step 3 — Enable GitHub Pages
```
Settings → Pages → Source → Deploy from branch → main → / (root) → Save
```

### Step 4 — Visit your live site
```
https://yourusername.github.io
```
*(Takes 1–2 minutes to go live after first deploy)*

---

## 🎨 Design System

| Property | Value |
|----------|-------|
| **Background** | `#080808` |
| **Surface** | `#111111` |
| **Accent** | `#b5f23d` (Neon Lime) |
| **Text** | `#f0f0f0` |
| **Muted Text** | `#888888` |
| **Display Font** | Bebas Neue |
| **Body Font** | DM Sans |
| **Italic/Accent Font** | Libre Baskerville |

---

## 🛠️ Customisation Guide

### Update your personal info
Open `index.html` and search for these to replace:

```
mairajpoke786@gmail.com   → your email
+91 8689807865            → your phone
linkedin.com/in/mairaj-poke → your LinkedIn
Kalyan (W), Mumbai        → your location
```

### Add a real profile photo
Find the `.hc-avatar-inner` div in `index.html` and replace the SVG with:
```html
<img src="your-photo.jpg" alt="Mairaj Poke" style="width:100%;height:100%;object-fit:cover;" />
```

### Add real project screenshots
Replace the demo visual divs inside `.project-visual` with:
```html
<img src="your-project-image.jpg" alt="Project Name" style="width:100%;height:100%;object-fit:cover;" />
```

### Connect your contact form
Replace the simulated form submit in `script.js` with [Formspree](https://formspree.io) (free):
```js
// In script.js, replace the setTimeout block with:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(contactForm),
  headers: { 'Accept': 'application/json' }
}).then(() => {
  formSuccess.classList.add('show');
  contactForm.reset();
});
```

---

## 📦 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations, transitions
- **Vanilla JavaScript** — IntersectionObserver, requestAnimationFrame, smooth interactions
- **Google Fonts** — Bebas Neue, DM Sans, Libre Baskerville

Zero external dependencies. Zero frameworks. Pure web standards.

---

## 📄 License

This portfolio is personal work belonging to **Mairaj Poke**.  
Feel free to use it as inspiration, but please do not copy and deploy it as your own.

---

## 📬 Contact

**Mairaj Poke**  
📧 mairajpoke786@gmail.com  
📞 +91 8689807865  
🔗 [linkedin.com/in/mairaj-poke](https://www.linkedin.com/in/mairaj-poke)  
📍 Kalyan (W), Mumbai, Maharashtra, India

---

*Built with passion & precision. © 2025 Mairaj Poke.*
