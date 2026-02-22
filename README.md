# Portfolio - Gloro Solutions

A professional, minimal, and fully responsive frontend developer portfolio template. Built with HTML, CSS, and JavaScript, and designed to be easily customizable.

## 🚀 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop.
- **Centrally Managed Data**: Update your info, projects, and skills in one single file (`assets/js/data.js`).
- **Organized Structure**: Assets are neatly categorized into subfolders for CSS, JS, Images, and Docs.
- **Micro-Animations**: Smooth fade-in effects and interactive elements.
- **Dynamic Content**: Auto-populates projects, services, skills, and even the footer copyright info from the data file.

## 📂 Project Structure

```text
├── assets/
│   ├── css/          # Custom styles
│   ├── js/           # Main data and rendering logic
│   ├── img/          # Favicon, hero, and project images
│   └── docs/         # Resume / CV files
├── about.html        # About page
├── contact.html      # Contact page
├── experience.html   # Experience/Timeline page
├── index.html        # Home page
├── projects.html     # Full projects listing
└── skills.html       # Skills and expertise
```

## 🛠️ How to Customize

1. **Personal Information**: Open `assets/js/data.js` and edit the `PORTFOLIO` object. You can change your name, role, social links, and bio here.
2. **Projects & Skills**: Add or remove items in the `projects` and `skillCategories` arrays within the same data file.
3. **Assets**: Replace images in `assets/img/` and the resume in `assets/docs/`. Make sure the filenames match those in `data.js`.
4. **Styles**: If you want to change colors or fonts, edit `assets/css/style.css`.

## 🌐 Deployment

This project is a static site. You can host it on any platform like **Vercel**, **Netlify**, or **GitHub Pages** by simply uploading the root directory.

---

Created by [Gloro Solutions](https://glorosolutions.com)
