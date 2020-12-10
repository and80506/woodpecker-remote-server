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


### 使用步骤
1. 开发者 开启Server和Websocket, 执行node server.js
2. 用户 安装插件，打开网页www.baidu.com, 点击插件icon开启调试，【打开background.html插件调试background视图，复制devtoolsFrontendUrl地址】
3. 开发者，打开新页面，输入devtoolsFrontendUrl开启调试，如【devtools://devtools/bundled/inspector.html?ws=localhost:8090/devtools/page/04886f88-f23a-48cf-b1da-49c6f4e45a35】
【已解决】已知问题：多次点击icon后，chrome.debugger.attach报错，Unchecked runtime.lastError: Debugger is not attached to the tab with id: 78. 需要重启插件解决。

### Security

**NOTICE**: This project is highly experimental, and shouldn't be used in ANY production-like environment, as there's little security provided by a uniquely generated session. This session can in theory be guessed, and therefore allow a third party to tag along.
