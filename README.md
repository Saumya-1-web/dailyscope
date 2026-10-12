# Daily Scope — Dynamic News Portal

A clean, responsive, and accessible **news aggregator portal** built with vanilla JavaScript, HTML5, and CSS3. The platform provides real-time client-side article filtering by categories, live search, a trending leaderboard, interactive modal reading views, and a native dark mode toggle [cite: 1, 2].

---

## 🚀 Features

* 📱 **Fully Responsive Layout** — Optimized fluid design for desktop, tablet, and mobile viewing with fine-tuned media queries [cite: 2].
* 🌓 **Smart Dark Mode** — Native dark/light mode toggle with persistence using `localStorage` and automatic system preference matching (`prefers-color-scheme`) [cite: 1, 2].
* 🔍 **Live Search & Taxonomy Filters** — Instant on-the-fly filtering across article titles, snippets, authors, and body text as you type [cite: 1].
* 🚀 **Performance Optimized** — Fluid animations built with CSS hardware acceleration, lazy-loading image fallbacks, and a smart smooth-scrolling breaking ticker track [cite: 1, 2].
* ♿ **Keyboard Accessible (a11y)** — Complete keyboard navigation loops within modal dialogs (`Tab`/`Shift+Tab` handling), sequential index triggers, explicit `aria` descriptions, and skip-to-content routing utility mappings [cite: 1, 2].

---

## 📁 Technical Architecture

### Core Stack
* **HTML5** — Semantic components (`<article>`, `<nav>`, `<time>`) [cite: 1, 2].
* **CSS3** — Dynamic layout systems using Flexbox, CSS Grid, and design tokens controlled natively via variables (`--bg`, `--surface`, `--accent`) [cite: 2].
* **Vanilla JavaScript (ES6+)** — Event delegation frameworks, automated state synchronization, custom DOM utility abstraction primitives (`$`, `$$`), and precise HTML sanitizer strings [cite: 1].

### File Structures
* **`app.js`** — Orchestrates full UI logic, relative timestamp generations, state configurations, and keyboard management [cite: 1].
* **`styles.css`** — Houses modern visual designs, dark mode variables, structural components, fluid responsive breakouts, and motion media control handlers [cite: 2].

---

## 🛠️ Installation & Getting Started

1. Clone or download this project's code directory files.
2. Keep the core scripts and presentation layers adjacent to each other:
   ```text
   ├── index.html
   ├── styles.css
   └── app.js
   ```
3. Open your `index.html` directly in any modern browser, or launch it with a lightweight local web server extension (e.g., Live Server for VS Code).

---

## 📋 Data Management Matrix
Articles are managed via a structured array scheme inside `app.js` using the following schema [cite: 1]:
```javascript
{
  id: 1,
  category: "Tech",
  title: "The next wave of AI is changing how people work",
  snippet: "New AI tools are moving beyond chatbots...",
  author: "Maya Sharma",
  hoursAgo: 2,
  image: "https://images.unsplash.com/...",
  alt: "Abstract artificial intelligence visualization",
  trending: 1,
  body: [ "Paragraph 1...", "Paragraph 2..." ]
}
```
