# 💼 M. Kedara Hamsika — Premium Editorial Developer Portfolio

An award-winning, production-quality personal developer portfolio website engineered with **semantic HTML5, modern CSS3, and modular ES6+ JavaScript**.

Showcasing the academic achievements, technical competencies, software projects, verified certifications, and learning journey of **M. Kedara Hamsika** — Second-Year Computer Science and Engineering student at **Ramachandra College of Engineering, Eluru** (Academic CGPA: **9.3 / 10.0**).

---

## 🎨 Visual Identity & Architecture

- **Visual Theme — Midnight Black & Electric Purple**:
  - Primary Background: `#0B0B12`
  - Secondary Background: `#11111B`
  - Card Background: `#171725`
  - Electric Purple Accent: `#8B5CF6`
  - Soft Lavender Highlight: `#C4B5FD`
  - Primary Text: `#F8FAFC`
  - Secondary Text: `#A1A1B5`
  - Borders: `rgba(196, 181, 253, 0.15)`
- **Consistently Dark & Cinematic**: Pure midnight aesthetic without white backgrounds or unwanted light-mode sections.
- **Data-Driven Architecture (`data.js`)**: All personal profile info, skills, projects, case studies, verified certifications, and learning journey milestones are stored in a centralized, easily editable data file.
- **Dedicated Case Study Modals**: Interactive modals that open deep-dive architectural overviews for Weather Now, CollegeDock, and Bhoomi Sahayak.
- **Interactive Resume Viewer**: Built-in formatted resume preview sheet with one-click print and save-as-PDF support.
- **Accessible Custom Cursor**: Fluid trailing ring active strictly on desktop devices with fine pointers, automatically disabled on touch devices and respecting user reduced-motion preferences.
- **Zero Heavy Dependencies**: Pure vanilla HTML5, CSS3, and ES6+ JavaScript — runs instantly without needing Node.js, npm, or complex build tooling.

---

## 📂 Project Directory Structure

```text
portfolio/
├── data.js             # 💡 SINGLE SOURCE OF TRUTH: Edit all skills, projects, and bio here
├── index.html          # Semantic HTML5 markup, meta tags, and modal structures
├── style.css           # Modular stylesheet with CSS variables, ambient glow, and responsive grid
├── script.js           # Dynamic data-driven rendering, modals, filter tabs, and form logic
├── README.md           # Documentation, run guide, and GitHub Pages deployment tutorial
└── assets/
    └── profile.jpg     # Professional profile image
```

---

## 🛠️ How to Customize Your Content in `data.js`

You don't need to touch complex HTML to update your portfolio. Simply open [data.js](file:///c:/Users/kedara%20hamsika/OneDrive/Documents/portfolio/data.js) in your text editor:

### 1. Update Personal Info & Social Links
```javascript
profile: {
  name: "M. Kedara Hamsika",
  cgpa: "9.3",
  email: "your-preferred-email@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/your-custom-profile",
  githubUrl: "https://github.com/kedarahamsikamaturi-web",
  // ...
}
```

### 2. Add or Edit Skills
In `data.js`, add or edit items inside the `skills` array under categories:
- `programming` (Languages like Python, Java, C)
- `computer_science` (DSA, Problem Solving, Discrete Math, Digital Logic)
- `development` (HTML, CSS, JS, Git, GitHub, VS Code)
- `data_ai` (NumPy, Pandas, ML Concepts)

### 3. Add or Edit Projects & Case Studies
In `data.js`, the `projects` array contains rich case studies for:
1. **Weather Now** (Live at `https://kedarahamsikamaturi-web.github.io/Weather-Now/`)
2. **CollegeDock** (Student Utility Concept)
3. **Bhoomi Sahayak / Aero Crop** (AI & IoT Smart Agriculture Prototype)

You can update `githubUrl`, `demoUrl`, `status`, and `highlights` anytime.

### 4. Update Verified Certifications
Your verified **HackerRank Python (Basic)** credential earned on October 20, 2026 is configured with the verification URL:
`https://www.hackerrank.com/certificates/83a133c8a965`.

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening (Quickest)
1. Open Windows File Explorer and navigate to:
   `C:\Users\kedara hamsika\OneDrive\Documents\portfolio`
2. Double-click **`index.html`** to open it immediately in Chrome, Edge, or your preferred browser.

### Option 2: VS Code Live Server (Recommended for Development)
1. In Visual Studio Code, click **File > Open Folder...** and select `portfolio`.
2. Right-click on **`index.html`** in the file explorer sidebar.
3. Select **"Open with Live Server"**.
4. The website will open at `http://127.0.0.1:5500/index.html` with hot-reloading.

### Option 3: Python Local HTTP Server
Open PowerShell in the `portfolio` folder and run:
```powershell
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 📤 How to Upload to GitHub

1. Open PowerShell in the `portfolio` directory:
   ```powershell
   cd "c:\Users\kedara hamsika\OneDrive\Documents\portfolio"
   ```
2. Initialize Git, stage all files, and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium personal portfolio website for M. Kedara Hamsika"
   ```
3. Create a new public repository on [GitHub](https://github.com/new) named `portfolio` (or `personal-portfolio`).
4. Link the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/kedarahamsikamaturi-web/portfolio.git
   git push -u origin main
   ```

---

## 🌐 How to Deploy for Free using GitHub Pages

1. Navigate to your repository on GitHub:
   `https://github.com/kedarahamsikamaturi-web/portfolio`
2. Go to **Settings** > **Pages** (in the left-hand sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and leave directory as `/(root)`.
   - Click **Save**.
4. Within 1–2 minutes, your website will be live worldwide at:
   ```text
   https://kedarahamsikamaturi-web.github.io/portfolio/
   ```

---

## 📬 Receiving Form Messages in Your Inbox

The contact form currently features real-time client-side validation. To receive messages directly in your personal email inbox:
1. Register for a free account at [Formspree](https://formspree.io/).
2. Create a new form and enter your target email (`kedarahamsikamaturi@gmail.com`).
3. Copy your unique Formspree endpoint (e.g. `https://formspree.io/f/xyzabcde`).
4. In `index.html`, add the `action` attribute to the `<form>` tag:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
   ```
Now, every submission from recruiters and collaborators will arrive directly in your email inbox!

---

## 📄 License & Attribution

Designed and engineered for **M. Kedara Hamsika**.  
Open for academic showcase and personal developer portfolio inspiration.
