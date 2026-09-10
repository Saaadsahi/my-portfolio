document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = themeToggle?.querySelector(".theme-toggle-label");
  const themeStorageKey = "portfolio-theme";

  const setTheme = (theme) => {
    const selectedTheme = theme === "dark" ? "dark" : "light";
    body.dataset.theme = selectedTheme;
    try { window.localStorage.setItem(themeStorageKey, selectedTheme); } catch { /* Theme still works when storage is unavailable. */ }
    const nextTheme = selectedTheme === "dark" ? "light" : "dark";
    themeToggle?.setAttribute("aria-pressed", String(selectedTheme === "light"));
    themeToggle?.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    if (themeLabel) themeLabel.textContent = `${nextTheme === "light" ? "Light" : "Dark"} mode`;
  };

  let storedTheme = null;
  try { storedTheme = window.localStorage.getItem(themeStorageKey); } catch { /* Default to the light Apple canvas. */ }
  setTheme(storedTheme);
  themeToggle?.addEventListener("click", () => setTheme(body.dataset.theme === "light" ? "dark" : "light"));
});
