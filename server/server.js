const express = require("express");
const app = express();
const notifications = require("./routes/notifications");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 8080;

app.use("/api/notifications", notifications);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
