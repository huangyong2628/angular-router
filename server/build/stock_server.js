"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/', function (request, response) { return response.send('这里是首页!'); });
app.get('/api/stock', function (request, response) {
    response.json(stocks);
});
app.get('/api/stock/:id', function (request, response) {
    response.json(stocks.find(function (s) { return s.id == request.params.id; }));
});
var server = app.listen(8080, 'localhost', function () {
    console.log('服务器已经启动，地址是：http://localhost:8080');
});
var wsServer = new ws_1.Server({ port: 8081 });
wsServer.on('connection', function (websocket) {
    websocket.send('欢迎连接服务器.');
    websocket.on('message', function (message) {
        console.log('接收到客户端发来的消息，内容是：' + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send('这是定时推送的消息');
        });
    }
}, 2000);
var Stock = /** @class */ (function () {
    function Stock(id, name, price, roting, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.roting = roting;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '第一只股票', 1.99, 2.5, '这是第一只股票，是我在学习angular入门实战时创建的', ['IT', '互联网']),
    new Stock(2, '第二只股票', 2.99, 3.5, '这是第二只股票，是我在学习angular入门实战时创建的', ['互联网']),
    new Stock(3, '第三只股票', 3.99, 4.5, '这是第三只股票，是我在学习angular入门实战时创建的', ['金融']),
    new Stock(4, '第四只股票', 4.99, 1.5, '这是第四只股票，是我在学习angular入门实战时创建的', ['金融', '互联网']),
    new Stock(5, '第五只股票', 5.99, 3.5, '这是第五只股票，是我在学习angular入门实战时创建的', ['IT', '金融']),
    new Stock(6, '第六只股票', 6.99, 2.5, '这是第六只股票，是我在学习angular入门实战时创建的', ['互联网']),
    new Stock(7, '第七只股票', 7.99, 5.0, '这是第七只股票，是我在学习angular入门实战时创建的', ['互联网']),
    new Stock(8, '第八只股票', 8.99, 4.0, '这是第八只股票，是我在学习angular入门实战时创建的', ['金融', '互联网']),
];
