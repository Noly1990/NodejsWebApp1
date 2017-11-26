'use strict';
var http = require('http');
var url = require('url');
var events = require('events');
var Koa = require('koa');
var app = new Koa();
var server = http.Server(app.callback());
var io = require('socket.io')(server);
var fs = require('fs');

var port = process.env.PORT || 8888;

app.use(async (ctx) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(__dirname+'/test.html');
})


server.listen(port, function () {
    console.log('server is listening on port :'+port)
});


var str = '这是一个字符串';
var buf = new Buffer(str, 'utf-8');
console.log(buf.toString())
console.log('我是严骏')

var emitter = new events.EventEmitter();

emitter.on('myEvent', function (data) {
    console.log(data)
});

