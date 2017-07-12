var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

//Global reference of window object
var mainWindow = null;

app.on('window-all-closed', function(){
  if (process.platform != 'darwin'){
    app.quit();
  }
});

app.on('ready', function(){
  // Create browser window
  mainWindow = new BrowserWindow({width:1000,height:800});
  mainWindow.loadURL('file:///Users/emilyliu/Desktop/glowtouch/idle-demo/index.html');
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
