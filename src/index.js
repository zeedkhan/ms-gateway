const { createServer } = require("../src/utils/server");
const dotenv = require("dotenv");
const app = createServer();

dotenv.config();

app.listen(port, () => {
    console.log("Running", process.env.PORT)
});

export default app;