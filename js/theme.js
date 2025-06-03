/* --- Dark/Light Mode Toggle with prefers-color-scheme default --- */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  // Check for a stored theme; if not set, use system preference
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }

  // define a function to update the theme icon
  function updateThemeIcon(theme) {
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
      themeIcon.src =
        theme === "light" ? "assets/icons/moon.svg" : "assets/icons/sun.svg";
    }
  }

  // update icon on load
  updateThemeIcon(document.documentElement.getAttribute("data-theme"));

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}
