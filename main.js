const { app, BrowserWindow } = require('electron');
app.disableHardwareAcceleration();
function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    backgroundColor: '#121212',
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
