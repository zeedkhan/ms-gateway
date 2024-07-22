const { createServer } = require("../src/utils/server");
const dotenv = require("dotenv");
const app = createServer();

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("Running", process.env.PORT)
});

export default app;