# idle-demo
An cross-platform application that detects active and idle time using [Idle Timer](https://github.com/thorst/jquery-idletimer), records active and idle time, and tracks keyboard activity. Made with [Electron](https://electron.atom.io/). 
### About
* Starts idle time clock after a specified duration (default = 3 seconds) of keyboard and mouse inactivity. 
* Starts active time clock when user moves/clicks the mouse over the Idle Demonstration window or when the user presses a key on the keyboard.
* Records cumulative quantity of keystrokes for the standard keyboard keys
* Prints string of characters from key logging
### Run
Requires [Node.js](https://nodejs.org/en/).
````
git clone https://github.com/ej-liu/idle-demo.git  
cd idle-demo  
npm start
````
### Todo
* Test for tracking active/idle time outside of application window
* Screen capture (perhaps using [RobotJS](https://github.com/octalmage/robotjs/tree/bitmap-save))
* Allow capture of multiple screens

