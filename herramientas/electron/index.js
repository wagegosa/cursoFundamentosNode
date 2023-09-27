const { app, BrowserWindow } = require('electron');

let mainWindow;

// Escuchar evento para qu este listo
app.on('ready', createWindow);

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    mainWindow.loadFile('index.html');
}