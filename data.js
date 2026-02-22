// ============================================================
//  data.js  –  Portfolio Data File
//  Edit the values below to update your portfolio everywhere.
// ============================================================

const PORTFOLIO = {

  // ── PERSONAL INFO ─────────────────────────────────────────
  name:         "Gloro Solutions",
  firstName:    "Gloro",          // Used in the logo (part 1)
  lastName:     "Solutions",      // Used in the logo (part 2)
  role:         "Frontend Developer",
  location:     "India",
  email:        "hello@glorosolutions.com",
  phone:        "+91 98765 43210",
  availability: "Open to Work",
  resumeFile:   "resume.pdf",
  heroImage:    "img/main.png",
  websiteUrl:   "https://glorosolutions.com",
  siteBaseUrl:  "https://portfolio-sample-glorosolutions.vercel.app",

  // ── HERO SECTION ──────────────────────────────────────────
  heroGreeting: "Hello, I'm",
  heroDesc:     "I build clean, responsive, and user-friendly web experiences that make a difference.",

  // ── ABOUT SECTION ─────────────────────────────────────────
  aboutPara1:   "I'm a passionate <strong>Frontend Developer</strong> focused on creating elegant, performant web applications. I love turning complex problems into simple, beautiful, and intuitive designs.",
  aboutPara2:   "With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive interfaces that work seamlessly across all devices. I'm always eager to learn new technologies and keep up with the latest web trends.",
  footerTagline: "Building clean, fast, and beautiful web experiences. Let's create something amazing together.",

  // ── STATS ─────────────────────────────────────────────────
  stats: [
    { number: "3+",   label: "Years Experience" },
    { number: "20+",  label: "Projects Completed" },
    { number: "15+",  label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ],

  // ── SOCIAL LINKS ──────────────────────────────────────────
  socials: {
    github:    "#",
    linkedin:  "#",
    instagram: "#",
    twitter:   "#",
  },

  // ── SERVICES (What I Do) ──────────────────────────────────
  services: [
    {
      icon:  "bx bx-code-alt",
      title: "Web Development",
      desc:  "Building fast, responsive websites and web apps using modern HTML, CSS, and JavaScript frameworks.",
    },
    {
      icon:  "bx bx-palette",
      title: "UI / UX Design",
      desc:  "Designing clean, intuitive interfaces that look great and feel natural to use across all devices.",
    },
    {
      icon:  "bx bx-mobile-alt",
      title: "Responsive Design",
      desc:  "Ensuring every layout works seamlessly on mobile, tablet, and desktop with pixel-perfect precision.",
    },
    {
      icon:  "bx bx-tachometer",
      title: "Performance",
      desc:  "Optimizing load times and Core Web Vitals so your users enjoy a smooth, blazing-fast experience.",
    },
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // image: path to image OR null for placeholder icon
  // placeholderIcon: boxicon class used when image is null
  projects: [
    {
      title:       "Webinar Landing Page",
      desc:        "A modern, responsive landing page designed for online webinar registrations with smooth animations.",
      tags:        ["HTML", "CSS", "JavaScript"],
      image:       "img/Web 1920 – 2.png",
      liveUrl:     "#",
      githubUrl:   "#",
    },
    {
      title:           "Social Media Dashboard",
      desc:            "A responsive dashboard that displays real-time social media analytics with clean data visualizations.",
      tags:            ["React", "CSS", "API"],
      image:           null,
      placeholderIcon: "bx bx-mobile-alt",
      liveUrl:         "#",
      githubUrl:       "#",
    },
    {
      title:           "E-Commerce UI",
      desc:            "A clean e-commerce product listing page with filter functionality and cart management.",
      tags:            ["HTML", "Bootstrap", "JS"],
      image:           null,
      placeholderIcon: "bx bx-cart",
      liveUrl:         "#",
      githubUrl:       "#",
    },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skillCategories: [
    {
      icon:   "bx bx-code-alt",
      label:  "Frontend",
      skills: [
        { name: "HTML5",              level: "95%" },
        { name: "CSS3 / SCSS",        level: "90%" },
        { name: "JavaScript (ES6+)",  level: "85%" },
        { name: "React.js",           level: "80%" },
      ],
    },
    {
      icon:   "bx bx-paint",
      label:  "Design",
      skills: [
        { name: "Responsive Design", level: "92%" },
        { name: "Figma",             level: "75%" },
        { name: "Bootstrap",         level: "88%" },
        { name: "Tailwind CSS",      level: "78%" },
      ],
    },
    {
      icon:   "bx bx-server",
      label:  "Tools",
      skills: [
        { name: "Git & GitHub",   level: "88%" },
        { name: "VS Code",        level: "95%" },
        { name: "npm / Webpack",  level: "72%" },
        { name: "REST APIs",      level: "80%" },
      ],
    },
  ],

  // ── EXPERIENCE / TIMELINE ─────────────────────────────────
  experience: [
    {
      date:    "2023 – Present",
      title:   "Frontend Developer",
      org:     "Freelance / Self-Employed",
      desc:    "Building custom websites and web applications for clients across various industries. Focused on performance, accessibility, and modern design.",
    },
    {
      date:    "2022 – 2023",
      title:   "Junior Web Developer",
      org:     "Tech Startup, India",
      desc:    "Collaborated on developing responsive UI components using React and CSS. Worked closely with the design team to translate Figma designs into pixel-perfect code.",
    },
    {
      date:    "2021 – 2022",
      title:   "Web Design Intern",
      org:     "Digital Agency",
      desc:    "Assisted senior developers in building landing pages and maintaining existing websites. Gained hands-on experience with HTML, CSS, and JavaScript.",
    },
    {
      date:    "2018 – 2021",
      title:   "B.Tech in Computer Science",
      org:     "University, India",
      desc:    "Graduated with strong fundamentals in programming, data structures, and web technologies. Active participant in coding clubs and hackathons.",
    },
  ],

};


// ============================================================
//  Renderer – injects data into whatever page loads this file
// ============================================================
(function () {
  const P = PORTFOLIO;

  // ── Helper ────────────────────────────────────────────────
  function set(selector, html, attr = "innerHTML") {
    const el = document.querySelector(selector);
    if (el) el[attr] = html;
  }
  function setAll(selector, html) {
    document.querySelectorAll(selector).forEach((el) => (el.innerHTML = html));
  }
  function setAttr(selector, attribute, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attribute, value);
  }
  function setAllAttr(selector, attribute, value) {
    document.querySelectorAll(selector).forEach((el) => el.setAttribute(attribute, value));
  }

  // ── Brand / Logo (all pages) ──────────────────────────────
  document.querySelectorAll(".nav-logo").forEach((el) => {
    el.innerHTML = P.firstName + "<span>" + P.lastName + "</span>";
  });
  document.querySelectorAll(".footer-brand .nav-logo").forEach((el) => {
    el.innerHTML = P.firstName + "<span>" + P.lastName + "</span>";
  });

  // ── Footer tagline ────────────────────────────────────────
  set(".footer-brand > p", P.footerTagline);

  // ── Footer contact details ────────────────────────────────
  set(".footer-contact p:nth-child(2)", '<i class="bx bx-envelope"></i> ' + P.email);
  set(".footer-contact p:nth-child(3)", '<i class="bx bx-phone"></i> ' + P.phone);
  set(".footer-contact p:nth-child(4)", '<i class="bx bx-map"></i> ' + P.location);

  // ── Footer copyright link ─────────────────────────────────
  const creditLink = document.querySelector(".footer-credit a");
  if (creditLink) {
    creditLink.href = P.websiteUrl;
    creditLink.textContent = P.websiteUrl.replace("https://", "");
  }

  // ── Footer social links ───────────────────────────────────
  const footerSocials = document.querySelector(".footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = buildSocials();
  }

  // ── HOME PAGE ─────────────────────────────────────────────
  // Hero
  set(".hero-greeting", P.heroGreeting);
  set(".hero-name", P.name);
  set(".hero-title", P.role);
  set(".hero-desc", P.heroDesc);

  // Hero image
  const heroImg = document.querySelector(".hero-image img");
  if (heroImg) {
    heroImg.src = P.heroImage;
    heroImg.alt = P.name + " – " + P.role;
  }

  // Hero CV button
  const cvBtn = document.querySelector('a[download][href="resume.pdf"]');
  if (cvBtn) cvBtn.href = P.resumeFile;

  // Hero socials
  const heroSocials = document.querySelector(".hero-socials");
  if (heroSocials) heroSocials.innerHTML = buildSocials();

  // Stats (home)
  const homeStats = document.querySelector(".home-stats");
  if (homeStats) {
    homeStats.innerHTML = P.stats
      .map(
        (s, i) =>
          (i > 0 ? '<div class="home-stat-divider"></div>' : "") +
          `<div class="home-stat fade-in"><span class="stat-number">${s.number}</span><span class="stat-label">${s.label}</span></div>`
      )
      .join("");
  }

  // Services grid
  const servicesGrid = document.querySelector(".services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = P.services
      .map(
        (s) =>
          `<div class="service-card fade-in">
            <div class="service-icon"><i class="${s.icon}"></i></div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>`
      )
      .join("");
  }

  // Featured grid (home – first 2 projects)
  const featuredGrid = document.querySelector(".featured-grid");
  if (featuredGrid) {
    featuredGrid.innerHTML = P.projects
      .slice(0, 2)
      .map((p) => buildProjectCard(p, true))
      .join("");
  }

  // ── ABOUT PAGE ────────────────────────────────────────────
  set(".about-text > p:first-child", P.aboutPara1);
  set(".about-text > p:nth-child(2)", P.aboutPara2);

  // About stats
  const aboutStats = document.querySelector(".about-stats");
  if (aboutStats) {
    aboutStats.innerHTML = P.stats
      .slice(0, 3)
      .map(
        (s) =>
          `<div class="stat"><span class="stat-number">${s.number}</span><span class="stat-label">${s.label}</span></div>`
      )
      .join("");
  }

  // About info card
  const infoCard = document.querySelector(".info-card");
  if (infoCard) {
    infoCard.innerHTML = `
      <div class="info-item"><span class="info-label">Name</span><span class="info-value">${P.name}</span></div>
      <div class="info-item"><span class="info-label">Role</span><span class="info-value">${P.role}</span></div>
      <div class="info-item"><span class="info-label">Location</span><span class="info-value">${P.location}</span></div>
      <div class="info-item"><span class="info-label">Email</span><span class="info-value">${P.email}</span></div>
      <div class="info-item"><span class="info-label">Availability</span><span class="info-value available">${P.availability}</span></div>`;
  }

  // About download resume button
  const resumeBtn = document.querySelector('a.btn[download]');
  if (resumeBtn) resumeBtn.href = P.resumeFile;

  // ── PROJECTS PAGE ─────────────────────────────────────────
  const projectsGrid = document.querySelector(".projects-grid");
  if (projectsGrid) {
    projectsGrid.innerHTML = P.projects.map((p) => buildProjectCard(p, false)).join("");
  }

  // ── SKILLS PAGE ───────────────────────────────────────────
  const skillsGrid = document.querySelector(".skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = P.skillCategories
      .map(
        (cat) =>
          `<div class="skill-category">
            <h3><i class="${cat.icon}"></i> ${cat.label}</h3>
            <div class="skill-list">
              ${cat.skills
                .map(
                  (sk) =>
                    `<div class="skill-item">
                      <span>${sk.name}</span>
                      <div class="skill-bar">
                        <div class="skill-fill" data-width="${sk.level}"></div>
                      </div>
                    </div>`
                )
                .join("")}
            </div>
          </div>`
      )
      .join("");
  }

  // ── EXPERIENCE PAGE ───────────────────────────────────────
  const timeline = document.querySelector(".timeline");
  if (timeline) {
    timeline.innerHTML = P.experience
      .map(
        (e) =>
          `<div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">${e.date}</span>
              <h3>${e.title}</h3>
              <h4>${e.org}</h4>
              <p>${e.desc}</p>
            </div>
          </div>`
      )
      .join("");
  }

  // ── CONTACT PAGE ─────────────────────────────────────────
  const emailCard = document.querySelector('.contact-card a[href^="mailto"]');
  if (emailCard) {
    emailCard.href        = "mailto:" + P.email;
    emailCard.textContent = P.email;
  }
  const phoneCard = document.querySelector('.contact-card a[href^="tel"]');
  if (phoneCard) {
    phoneCard.href        = "tel:" + P.phone.replace(/\s/g, "");
    phoneCard.textContent = P.phone;
  }
  const locationSpan = document.querySelector(".contact-card span");
  if (locationSpan) locationSpan.textContent = P.location;

  const contactSocials = document.querySelector(".contact-socials");
  if (contactSocials) contactSocials.innerHTML = buildSocials();

  // ── Helpers ───────────────────────────────────────────────
  function buildSocials() {
    const s = P.socials;
    return `
      <a href="${s.github}"    aria-label="GitHub">   <i class="bx bxl-github"></i></a>
      <a href="${s.linkedin}"  aria-label="LinkedIn">  <i class="bx bxl-linkedin"></i></a>
      <a href="${s.instagram}" aria-label="Instagram"> <i class="bx bxl-instagram"></i></a>
      <a href="${s.twitter}"   aria-label="Twitter">   <i class="bx bxl-twitter"></i></a>`;
  }

  function buildProjectCard(p, small) {
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.title}" />`
      : `<i class="${p.placeholderIcon}"></i>`;
    const imgClass = p.image
      ? "project-img"
      : (p.placeholderIcon === "bx bx-cart" ? "project-img project-img-placeholder-2" : "project-img project-img-placeholder");
    const btnClass = small ? "btn btn-sm" : "btn btn-sm";
    return `
      <div class="project-card fade-in">
        <div class="${imgClass}">
          ${imgHtml}
          <div class="project-overlay">
            <a href="${p.liveUrl}" class="${btnClass}">Live Demo</a>
            <a href="${p.githubUrl}" class="${btnClass} btn-outline-light">GitHub</a>
          </div>
        </div>
        <div class="project-info">
          <div class="project-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </div>`;
  }
})();
