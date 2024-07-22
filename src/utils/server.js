const express = require("express")
const cors = require("cors")
const { manageUserRoutes } = require("../routes/userRouter");
const { manageUploadRoutes } = require("../routes/uploadRouter");
const { blogRoutes } = require("../routes/blogRouter");
const dotenv = require("dotenv");

dotenv.config();

const FRONTEND_SERVICE = process.env.NODE_ENV === "production" ? process.env.FRONTEND_SERVICE : "http://localhost:3000"

const createServer = () => {
    const app = express();
    app.use(cors({
        origin: [FRONTEND_SERVICE]
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
    blogRoutes(app)

    return app
}

module.exports = {
    createServer
}