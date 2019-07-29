var ws = require('nodejs-websocket');
var port =3000 
var server = ws.createServer(function (conn) {
//受到连接触发//
//在服务端cmd安装npm install nodejs-websocket//
// console.log('new connection');
conn.on("text", function (strobj) {
// 收到信息触发 接收 //
console.log(strobj)
boardcast(strobj) // 广播消息 //
// conn.sendText(str) // 发送 数据 //
})
conn.on("close", function (code, reason) {
// 断开连接触发 //
console.log("connection closed")
})
conn.on("error", function (err) {
// 出错触发 //
console.log("header err")
console.log(err)
})
function boardcast(strobj) { // 广播 //
// server.connections 保存每个连接进来的用户 //
server.connections.forEach(function (conn) { // .forEach 是调用数组里每个元素 //
conn.sendText(strobj)
})
}
}).listen(port)
console.log("端口为 " + port)