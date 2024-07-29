const { createProxyMiddleware } = require('http-proxy-middleware')
const dotenv = require("dotenv");
dotenv.config();

const uploadProxy = {
    target: process.env.UPLOAD_SERVICE,
    changeOrigin: true,
};

const manageUploadRoutes = (app) => {
    app.post("/upload", createProxyMiddleware({ ...uploadProxy }));
    app.post("/upload/file", createProxyMiddleware({ ...uploadProxy }));
    return app;
}

module.exports = {
    manageUploadRoutes
}