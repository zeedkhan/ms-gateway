const express = require("express")
const cors = require("cors")
const { manageUserRoutes } = require("../routes/userRouter");
const { manageUploadRoutes, aiRoutes } = require("../routes/uploadRouter");
const { blogRoutes } = require("../routes/blogRouter");
const { chatRoutes } = require("../routes/chatRouter");

const dotenv = require("dotenv");

dotenv.config();

const FRONTEND_SERVICE = process.env.NODE_ENV === "production" ? process.env.FRONTEND_SERVICE : "http://localhost:3000"
const SOCKET_SERVICE = process.env.SOCKET_SERVICE === "production" ? process.env.SOCKET_SERVICE : "http://localhost:8004"

const createServer = () => {
    const app = express();
    app.use(cors({
        origin: [
            process.env.USER_SERVICE,
            process.env.UPLOAD_SERVICE,
            process.env.BLOG_SERVICE,
            FRONTEND_SERVICE,
            SOCKET_SERVICE
        ]
    }))

    app.get("/services", (req, res) => {
        const services = {
            upload: process.env.UPLOAD_SERVICE,
            user: process.env.USER_SERVICE,
        }
        return res.json(services).status(200)
    });

    manageUserRoutes(app);
    manageUploadRoutes(app);
    blogRoutes(app);
    chatRoutes(app);
    aiRoutes(app);

    return app
}

module.exports = {
    createServer
}