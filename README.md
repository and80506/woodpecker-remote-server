DevTools Remote
================
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

![Logo](https://github.com/auchenberg/browser-remote/raw/master/readme/logo.png)

Debug your user's browser remotely via Chrome DevTools.

DevTools Remote enables you to share access to a browser tab,
so it can be debugged remotely via Chrome DevTools.

### How does it work?

1. A simple gateway that acts like a proxy between Chrome and Chrome DevTools.
2. The user needs to install a little extension to allow access to Chrome debugger, and to connect to the gateway.
3. A unique link is generated that connects the browser and DevTools over a WebSocket connection.

![explainer](https://github.com/auchenberg/browser-remote/raw/master/readme/flow.png)

A full detailed blog post can be found here [https://kenneth.io/blog/2015/06/16/use-chrome-devtools-to-debug-your-users-browser-remotely-with-browserremote/](https://kenneth.io/blog/2015/06/16/use-chrome-devtools-to-debug-your-users-browser-remotely-with-browserremote/)

### 使用方法
1. 开发者 搭建HttpServer和WebsocketServer, 执行node server.js，生成【Websocket网址】
2. 用户 安装devtools-extension插件，打开任意网页【www.baidu.com】, 点击插件图标，浏览器显示【“DevTools Remote”已开始调试此浏览器】表示开启调试成功。然后发送已被复制到剪贴板的调试id秘钥【如1b6d7893-87c3-4d22-9abd-9c936235d83e】给开发者。
3. 开发者 打开新页面，使用调试id秘钥输入devtoolsFrontendUrl开启调试，如devtools://devtools/bundled/inspector.html?ws=【Websocket网址】/devtools/page/【调试id秘钥】

### 已知问题
【已解决】多次点击插件图标后，chrome.debugger.attach报错，“Unchecked runtime.lastError: Debugger is not attached to the tab with id: 78.” 需要重启插件解决。
