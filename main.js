const {app, BrowserWindow, ipcMain} = require('electron')

const path = require('path')
const url = require('url')

app.disableHardwareAcceleration()

let window

ipcMain.on('settings-open', (event, arg) => {
  console.log('opening settings', arg)
})

app.on('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600
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
