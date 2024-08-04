const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require("dotenv");
dotenv.config();


const chatProxy = {
    target: process.env.CHAT_SERVICE,
    changeOrigin: true,
}

const chatRoutes = (app) => {
    // get all chat rooms
    app.get('/chat', createProxyMiddleware({ ...chatProxy }));

    // create chat room
    app.post("/chat", createProxyMiddleware({ ...chatProxy }));

    // get chat room by id
    app.get('/chat/:roomId', createProxyMiddleware({ ...chatProxy }));

    // get chat room by user id
    app.get("/chat/user/:userId", createProxyMiddleware({ ...chatProxy }));

    // delete chat room
    app.delete("/chat/:roomId", createProxyMiddleware({ ...chatProxy }));

    // create message
    app.post("/chat/:roomId/message", createProxyMiddleware({ ...chatProxy }));

    // edit user avatar
    app.put("/chat/avatar/:id", createProxyMiddleware({ ...chatProxy }));

    // get users in chat room
    app.get("/chat/:roomId/users", createProxyMiddleware({ ...chatProxy }));

    return app;
}

module.exports = {
    chatRoutes
}