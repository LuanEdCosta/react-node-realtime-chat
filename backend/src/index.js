"use strict";
exports.__esModule = true;
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var express_1 = require("express");
var cors_1 = require("cors");
var app = express_1["default"]();
var server = http_1.createServer(app);
var io = new socket_io_1.Server(server);
app.use(express_1["default"].json());
app.use(cors_1["default"]());
io.on('connection', function (socket) {
    console.log('Connected');
});
server.listen(3333);
