const express = require("express");
const app = express();
const cors = require("cors");

require("express-async-errors");
require("dotenv").config();

const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");

const connectDB = require("./db/connect");

const notifications = require("./routes/notifications");

app.use(cors());
app.use(express.json());
app.use("/api/notifications", notifications);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

start();
