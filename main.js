const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, Menu } = electron;

process.env.NODE_ENV = 'production';

let win;

// open window when loaded
app.on('ready', function(){
  // create window object
  win = new BrowserWindow({
    width:715,
    height:750,
    icon: __dirname + '/assets/icons/win/icon.ico',
    resizable: false
  });

  // open index.html on load
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  // open dev tools for debugging
  // win.webContents.openDevTools();

  // delete window on close
  win.on('closed', () => {
    win = null;
  });

  // create menu
  //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert Menu
  //Menu.setApplicationMenu(mainMenu);
});

// create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu:[
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

// quit when all windows closed
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
