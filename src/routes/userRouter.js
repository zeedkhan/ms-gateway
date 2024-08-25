const { createProxyMiddleware } = require('http-proxy-middleware')
const dotenv = require("dotenv");
dotenv.config();

const userProxy = {
    target: process.env.USER_SERVICE,
    changeOrigin: true,
}

const manageUserRoutes = (app) => {
    // Get all users
    app.get('/user', createProxyMiddleware({ ...userProxy }));

    // Get particular user
    app.get('/user/:id', createProxyMiddleware({ ...userProxy }));

    // Edit particular user
    app.put('/user/:id', createProxyMiddleware({ ...userProxy }));

    // edit user avatar
    app.put("/user/avatar/:id", createProxyMiddleware({ ...userProxy }));

    // Register
    app.post("/user", createProxyMiddleware({ ...userProxy }));

    // SignIn
    app.post("/user/signIn", createProxyMiddleware({ ...userProxy }));

    // Change Password
    app.post("/reset/pwd", createProxyMiddleware({ ...userProxy }));

    app.put("/reset/pwd/:id", createProxyMiddleware({ ...userProxy }));

    // Verify Email
    app.put("/token/:id", createProxyMiddleware({ ...userProxy }));

    app.post("/token", createProxyMiddleware({ ...userProxy }));

    app.post("/user/storage/:id", createProxyMiddleware({ ...userProxy }));
    app.get("/user/storage/:userId", createProxyMiddleware({ ...userProxy }));
    app.get("/user/storage/file/:fileId", createProxyMiddleware({ ...userProxy }));
    app.delete("/user/storage/file/:fileId", createProxyMiddleware({ ...userProxy }));
    app.get("/user/storage/no-directory/:userId", createProxyMiddleware({ ...userProxy }));

    app.get("/user/directory/:directoryId", createProxyMiddleware({ ...userProxy }));
    app.put("/user/directory/:directoryId", createProxyMiddleware({ ...userProxy }));
    app.delete("/user/directory/:directoryId", createProxyMiddleware({ ...userProxy }));
    app.get("/user/directory/user/:userId", createProxyMiddleware({ ...userProxy }));
    app.post("/user/directory/", createProxyMiddleware({ ...userProxy }));
    
    // Move object
    app.put("/user/move/directory", createProxyMiddleware({ ...userProxy }));
    app.put("/user/move/storage", createProxyMiddleware({ ...userProxy }));

    // Search
    app.get("/user/search/object/:searchTerm", createProxyMiddleware({ ...userProxy }));
    app.get("/user/search/object", createProxyMiddleware({ ...userProxy }));
    
    return app;
}

module.exports = {
    manageUserRoutes
}