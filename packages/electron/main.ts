import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import path from "node:path";

/**
 * Creates a new window and loads an HTML file.
 */
const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  mainWindow.loadFile("../../dist/index.html");

  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }

    return nativeTheme.shouldUseDarkColors;
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
