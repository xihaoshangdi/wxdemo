"use strict";

import {app, protocol, BrowserWindow, Menu} from "electron";


import {
    createProtocol
    /* installVueDevtools */
} from "vue-cli-plugin-electron-builder/lib";

const isDevelopment = process.env.NODE_ENV !== "production";
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: "app", privileges: {secure: true, standard: true}}]);

function createWindow() {
    //主窗口的创建
    win = new BrowserWindow({
        width: 1050,
        height: 560,
        minWidth: 700,
        minHeight: 500,
        movable: true,
        frame: false,
        zoomFactor: 1,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //隐藏菜单栏
    createMenu();
    //设置监听函数
    const {screen, ipcMain} = require("electron");

    function windowMove(win) {
        let winStartPosition = undefined;
        let mouseStartPosition = undefined;
        let movingInterval = null;
        let windowSize = undefined;
        ipcMain.on("window-move-start", (event, status) => {
                if (status) {
                    //获取当前窗口位置并存储(取得左上角)
                    const winPosition = win.getPosition();
                    winStartPosition = {x: winPosition[0], y: winPosition[1]};
                    windowSize = win.getSize();
                    //获取当前鼠标绝对位置
                    mouseStartPosition = screen.getCursorScreenPoint();
                    if (movingInterval) {
                        clearInterval(movingInterval);
                    }
                    movingInterval = setInterval(() => {
                        // 实时更新位置
                        const cursorPosition = screen.getCursorScreenPoint();
                        const x = winStartPosition.x + cursorPosition.x - mouseStartPosition.x;
                        const y = winStartPosition.y + cursorPosition.y - mouseStartPosition.y;
                        win.setPosition(x, y);
                        win.setSize(windowSize[0], windowSize[1]);
                    }, 10);
                } else {
                    clearInterval(movingInterval);
                    movingInterval = null;
                }
            }
        )
        ;
    }

    windowMove(win);
    //
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        if (!process.env.IS_TEST) win.webContents.openDevTools();
    } else {
        createProtocol("app");
        // Load the index.html when not in development
        win.loadURL("app://./index.html");
    }

    win.on("closed", () => {
        win = null;
    });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        // Devtools extensions are broken in Electron 6.0.0 and greater
        // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
        // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
        // If you are not using Windows 10 dark mode, you may uncomment these lines
        // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
        // try {
        //   await installVueDevtools()
        // } catch (e) {
        //   console.error('Vue Devtools failed to install:', e.toString())
        // }

    }
    createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === "win32") {
        process.on("message", data => {
            if (data === "graceful-exit") {
                app.quit();
            }
        });
    } else {
        process.on("SIGTERM", () => {
            app.quit();
        });
    }
}

function createMenu() {
    // windows及linux系统
    Menu.setApplicationMenu(null);

}

//


