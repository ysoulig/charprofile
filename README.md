# 🎮  Character Profile Website Template
 

A customizable, retro video game-inspired website template designed for showcasing Original Characters (OCs), stats, lore, and social links. Built with clean HTML, CSS, and JavaScript.

---

## 📁 What's Included
* `index.html` — The main structure, text, navigation, and character information.
* `style.css` — All colors, fonts, layout styling, and retro UI borders.
* `script.js` — Interactive features (such as tab switching and dynamic stat bars).
* `README.md` — This setup and customization guide!

---

## 🚀 Getting Started
1. Download or clone the template files into your project folder (or open them directly in **GitHub Codespaces** / your preferred code editor).
2. Keep all files in the **same folder** so the styles and scripts link properly.
3. Open `index.html` in any web browser (or use a Live Server preview) to see your changes in real time.

---

## 🎨 How to Customize Your Template

### 1. Changing Colors (Blue, Green & Cream Palette)
Open `style.css` and look at the very top under `:root`. You can swap out the hex codes to instantly change the entire theme of the site:

```css
:root {
  --primary-blue: #YOUR_HEX_CODE;
  --accent-green: #YOUR_HEX_CODE;
  --bg-cream: #YOUR_HEX_CODE;
}
```

### 2. Adding Your Character Art & Icons
1. Place your character artwork and avatar images inside your project folder (or an `images/` subfolder).
2. Open `index.html` and look for the `<img>` tags.
3. Replace the placeholder file path inside `src="..."` with your own image file name:

```html
<img src="your-character-art.png" alt="Character Portrait">
```

*(Tip: Transparent PNGs work best for character sprites and portraits!)*

### 3. Editing Character Info, Bio & Socials
Open `index.html` and look for the commented sections (marked like `<!-- CHARACTER BIO -->` or `<!-- SOCIAL LINKS -->`):
* **Name, Title & Bio:** Simply replace the placeholder text between the HTML tags (like `<h1>`, `<p>`, or `<span>`) with your character's details.
* **Social Links:** Find the `<a>` tags in the Socials section and replace `href="#"` with your actual profile URLs:

```html
<a href="[https://your-link-here.com](https://your-link-here.com)" target="_blank">Twitter / X</a>
```

### 4. Adjusting HP, MP & Stat Bars
In `index.html` (or `script.js`), locate the stat bar elements. You can adjust the percentage width to match your character's stats:

```html
<div class="stat-fill hp-bar" style="width: 85%;"></div>
<div class="stat-fill mp-bar" style="width: 60%;"></div>
```

---

## 📜 Terms of Use
* **You MAY:** Edit the code, colors, fonts, and layout for personal use or your own character profiles.
* **You MAY NOT:** Resell, redistribute, or claim the base template code as your own work.
* Please leave the credit/watermark intact!

---

*Need help or have questions? Feel free to reach out!*
