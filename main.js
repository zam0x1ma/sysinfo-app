const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Load index.html
    mainWindow.loadFile('index.html');

    // Open DevTools
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});