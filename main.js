const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow

var client = require('electron-connect').client;

function createWindow () {

  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL('file://'+ __dirname+ '/src/html/index.html')

  mainWindow.webContents.openDevTools()

  client.create(mainWindow);

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})
