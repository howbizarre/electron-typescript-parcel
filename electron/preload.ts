import { contextBridge, ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld("electronAPI", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
});
