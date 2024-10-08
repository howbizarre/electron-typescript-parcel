const themeSource = document.getElementById("theme-source");
const toggleDarkMode = document.getElementById("toggle-dark-mode");

if (themeSource && toggleDarkMode) {
  toggleDarkMode.addEventListener("click", async () => {
    // @ts-expect-error
    const isDarkMode = await window.electronAPI.toggle();

    themeSource.innerHTML = isDarkMode ? "Dark" : "Light";
    toggleDarkMode.innerHTML = `Toggle ${!isDarkMode ? "Dark" : "Light"} Mode`;
  });
}
