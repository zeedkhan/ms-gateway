const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require("dotenv");
dotenv.config();


const blogProxy = {
    target: process.env.BLOG_SERVICE,
    changeOrigin: true,
}

const blogRoutes = (app) => {
    // Get all blogs
    app.get('/blog', createProxyMiddleware({ ...blogProxy }));

    // Get user's blogs
    app.get('/blog/user/:userId', createProxyMiddleware({ ...blogProxy }));

    // Create a blog
    app.post('/blog', createProxyMiddleware({ ...blogProxy }));

    // Get a blog
    app.get('/blog/:blogId', createProxyMiddleware({ ...blogProxy }));

    // edit a blog
    app.put('/blog/:blogId', createProxyMiddleware({ ...blogProxy }));

    // delete a blog
    app.delete('/blog/:blogId', createProxyMiddleware({ ...blogProxy }));

    // duplicate seo checker
    app.get('/blog/path/:pathName', createProxyMiddleware({ ...blogProxy }))

    return app;
}

module.exports = {
    blogRoutes
}