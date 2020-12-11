Woodpecker Remote Server | Woodpecker远程调试套件
================

![Logo](https://raw.githubusercontent.com/and80506/devtools-server/main/assets/logo.png)

支持网站开发者对网站用户的Chrome浏览器进行远程调试。
### 演示
gif图片比较大，请耐心等候。

![demo](https://raw.githubusercontent.com/and80506/devtools-server/main/assets/demo.gif)

### 原理
使用[Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)进行远程调试
1. 使用该项目搭建WebSocket服务，作为连接网站开发者Chrome开发者工具和网站用户Chrome扩展之间的代理。
2. 网站用户需要安装一个Chrome扩展，扩展程序的chrome.debugger API可以获取网页调试信息，并通过WebSocket协议和代理进行交互。
3. 网站开发者使用Chrome Devtools通过WebSocket协议和代理进行交互。

![explainer](https://raw.githubusercontent.com/and80506/devtools-server/main/assets/explainer.png)

### 使用方法
1. 开发者 搭建HttpServer和WebsocketServer, 执行node server.js，获取可用网址[Websocket网址]
2. 用户安装[woodpecker-remote](http://todo.com)插件，打开任意网页【如www.google.com】, 点击插件图标，浏览器显示【“Woodpecker Remote”已开始调试此浏览器】表示开启远程调试成功。然后发送已被复制到剪贴板的调试id秘钥【如1b6d7893-87c3-4d22-9abd-9c936235d83e】给开发者。
3. 开发者打开新页面，使用调试id秘钥输入Devtools页面【如devtools://devtools/bundled/inspector.html?ws=[Websocket网址]/devtools/page/[调试id秘钥]】进行调试。
