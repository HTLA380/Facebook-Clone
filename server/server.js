const express = require("express");
const app = express();
const notifications = require("./routes/notifications");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const dotenv = require("dotenv");
const notFound = require("./middlewares/not-found");
dotenv.config();

const PORT = 8080;

app.use("/api/notifications", notifications);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
