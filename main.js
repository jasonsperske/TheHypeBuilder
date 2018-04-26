const {app, BrowserWindow, ipcMain} = require('electron')

const path = require('path')
const url = require('url')

app.disableHardwareAcceleration()

let window

ipcMain.on('ready', () => {
  window.webContents.send('loaded-settings', require('./settings.json'))
})

ipcMain.on('open-settings', (event, arg) => {
  console.log('opening settings', arg)
})

app.on('ready', () => {
  window = new BrowserWindow({
    title: 'Build the Hype',
    width: 1280,
    height: 720
  })
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'views/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // window.setMenu(null)

  window.on('close', () => {
    window = null
  })
})
