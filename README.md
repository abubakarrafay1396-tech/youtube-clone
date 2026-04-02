# 📺 YouTube Clone

A pixel-perfect frontend clone of YouTube.com built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies.

## 🚀 Live Demo

Open `index.html` in any modern browser to run locally.

---

## 📁 Project Structure

```
youtube-clone/
├── index.html       # Main HTML structure
├── style.css        # All styling (Flexbox, Grid, responsive)
├── script.js        # Interactivity & dynamic video rendering
└── README.md        # Project documentation
```

---

## ✨ Features

- **Header** — YouTube SVG logo, search bar with focus ring, mic button, notification bell with badge, user avatar
- **Sidebar** — Collapsible navigation with Home, Shorts, Subscriptions, Library, History, Explore, and channel subscriptions
- **Filter Chips** — Sticky category pill bar (All, Gaming, Music, Tech, Sports, etc.)
- **Video Grid** — 18 responsive video cards using CSS Grid with:
  - 16:9 thumbnails with hover scale + play overlay
  - Channel avatar, title, verified badge, views & upload time
  - Three-dot context menu (Add to queue, Save, Share, Report…)
- **Shorts Section** — 9:16 portrait cards with gradient overlay, injected inline
- **Responsive Design** — Adapts from 4-column desktop → 2-column tablet → 1-column mobile
- **Search** — Live filtering across video titles and channel names
- **Sidebar Toggle** — Mini-mode on desktop, slide-in overlay on mobile
- **Toast Notifications** — Feedback on video click
- **Sticky Header** — Shadow appears on scroll

---

## 🛠️ Technologies Used

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Flexbox, Grid, animations, responsive design |
| JavaScript (ES6+) | Dynamic rendering, interactivity |
| Google Fonts | Roboto font family |
| Material Icons | All UI icons |

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|---|---|
| > 1200px | Full sidebar + 4-col grid |
| 800–1200px | Full sidebar + 3-col grid |
| 600–800px | Mini sidebar + 2-col grid |
| < 600px | Hidden sidebar (hamburger) + 2-col grid |
| < 400px | Single column grid |

---

## 🏁 Getting Started

```bash
# Clone the repository
git clone https://github.com/abubakarrafay1396-tech/youtube-clone.git

# Open in browser
cd youtube-clone
open index.html
```

---

## 👤 Author

**abubakarrafay1396-tech**  
GitHub: [@abubakarrafay1396-tech](https://github.com/abubakarrafay1396-tech)

---

## 📄 License

This project is for **educational purposes only**.  
YouTube and the YouTube logo are trademarks of Google LLC.