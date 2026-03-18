document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = themeToggle?.querySelector(".theme-toggle-label");
  const themeStorageKey = "portfolio-theme";
  const defaultTheme = "dark";

  const setTheme = (theme) => {
    body.dataset.theme = theme;
    window.localStorage.setItem(themeStorageKey, theme);

    if (!themeToggle || !themeLabel) return;

    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeLabel.textContent = nextTheme === "light" ? "Light mode" : "Dark mode";
  };

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  setTheme(storedTheme || defaultTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = body.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  });

  const animationMap = [
    [".hero-text", "left"],
    [".hero-visual", "right"],
    [".section-header", "up"],
    [".proof-item", "up"],
    [".about-content p", "up"],
    [".featured-card", "up"],
    [".clients-content p", "left"],
    [".media-card", "right"],
    [".capability-card", "up"],
    [".project-showcase", "left"],
    [".project-card", "up"],
    [".timeline-item", "right"],
    [".experience-connection", "up"],
    [".capability-section", "up"],
    [".contact-card", "zoom"],
    [".cta-content", "down"],
  ];

  animationMap.forEach(([selector, direction]) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!element.dataset.animate) {
        element.dataset.animate = direction;
      }
    });
  });

  document.querySelectorAll(".featured-grid, .media-grid, .capabilities-grid, .secondary-projects, .proof-grid, .featured-projects, .timeline, .contact-info, .card-details, .project-meta-grid").forEach((group) => {
    group.classList.add("stagger-group");
  });

  document.querySelectorAll(".hero-image-frame, .card-badge, .project-status").forEach((element, index) => {
    element.style.setProperty("--float-duration", `${8 + (index % 5) * 1.25}s`);
    element.setAttribute("data-float", "");
  });

  const animatedElements = [...document.querySelectorAll("[data-animate]")];
  animatedElements.forEach((element, index) => {
    element.style.setProperty("--delay", `${(index % 6) * 90}ms`);
  });

  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

    animatedElements.forEach((element) => observer.observe(element));
    createMotionLayer(body);
  } else {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
  }
});

function createMotionLayer(body) {
  const motionLayer = document.createElement("div");
  motionLayer.className = "motion-layer";

  const palettes = [
    "radial-gradient(circle, rgba(87, 214, 255, 0.26), transparent 70%)",
    "radial-gradient(circle, rgba(142, 163, 255, 0.24), transparent 70%)",
    "radial-gradient(circle, rgba(105, 240, 201, 0.22), transparent 70%)",
    "radial-gradient(circle, rgba(255, 255, 255, 0.16), transparent 70%)",
  ];

  Array.from({ length: 8 }).forEach((_, index) => {
    const orb = document.createElement("span");
    const size = 120 + Math.round(Math.random() * 180);
    const top = Math.round(Math.random() * 88);
    const left = Math.round(Math.random() * 92);
    const duration = 12 + Math.round(Math.random() * 14);
    const delay = -(Math.round(Math.random() * duration));
    orb.className = "motion-orb";
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.top = `${top}%`;
    orb.style.left = `${left}%`;
    orb.style.background = palettes[index % palettes.length];
    orb.style.animationName = index % 2 === 0 ? "swirl-a" : "swirl-b";
    orb.style.animationDuration = `${duration}s`;
    orb.style.animationDelay = `${delay}s`;
    motionLayer.appendChild(orb);
  });

  body.prepend(motionLayer);
}
